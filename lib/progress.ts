import {SetStateAction,useSyncExternalStore} from 'react';
export const STORAGE_KEY='bom-korean-progress-v1';
export type ProgressState={version:1;completed:string[];learned:string[];lastLesson:string|null;answers:Record<string,{value:string;correct:boolean}>;quizzes:Record<string,number>;notes:Record<string,string>};
export const freshProgress=():ProgressState=>({version:1,completed:[],learned:[],lastLesson:null,answers:{},quizzes:{},notes:{}});
export function parseProgress(raw:string):ProgressState{const p=JSON.parse(raw);if(!p||p.version!==1||!Array.isArray(p.completed)||!Array.isArray(p.learned)||!p.completed.every((x:unknown)=>typeof x==='string')||!p.learned.every((x:unknown)=>typeof x==='string'))throw Error('Formato inválido');const record=(x:unknown)=>!!x&&typeof x==='object'&&!Array.isArray(x);if(!record(p.answers)||!record(p.quizzes)||!record(p.notes))throw Error('Formato inválido');for(const a of Object.values(p.answers) as {value:unknown;correct:unknown}[])if(!a||typeof a.value!=='string'||typeof a.correct!=='boolean')throw Error('Resposta inválida');if(Object.values(p.quizzes).some(x=>typeof x!=='number'||!Number.isFinite(x)||x<0||x>10)||Object.values(p.notes).some(x=>typeof x!=='string'))throw Error('Dados inválidos');return {...freshProgress(),...p,lastLesson:typeof p.lastLesson==='string'?p.lastLesson:null};}

export type ProgressSnapshot={progress:ProgressState;ready:boolean;warning:string};
export type SetProgress=(update:SetStateAction<ProgressState>)=>void;

const SERVER_SNAPSHOT:ProgressSnapshot={progress:freshProgress(),ready:false,warning:''};
const WARNING_UNREADABLE='O progresso salvo não pôde ser lido. Você pode recomeçar seus estudos.';
const WARNING_UNAVAILABLE='O armazenamento está indisponível. Você pode estudar, mas o avanço desta sessão não será salvo.';
const WARNING_SAVE='Não foi possível salvar. Seu avanço ficará disponível apenas nesta sessão.';

let snapshot:ProgressSnapshot|null=null;
const listeners=new Set<()=>void>();

function loadSnapshot():ProgressSnapshot{let progress=freshProgress();let warning='';try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){try{progress=parseProgress(raw)}catch{warning=WARNING_UNREADABLE}}localStorage.setItem('bom-storage-check','1');localStorage.removeItem('bom-storage-check')}catch{warning=WARNING_UNAVAILABLE}return {progress,ready:true,warning};}

function getSnapshot():ProgressSnapshot{if(!snapshot)snapshot=loadSnapshot();return snapshot;}
function getServerSnapshot():ProgressSnapshot{return SERVER_SNAPSHOT;}
function emit(){for(const listener of listeners)listener();}
function subscribe(listener:()=>void):()=>void{listeners.add(listener);const onStorage=(event:StorageEvent)=>{if(event.key!==null&&event.key!==STORAGE_KEY)return;snapshot=null;emit();};window.addEventListener('storage',onStorage);return()=>{listeners.delete(listener);window.removeEventListener('storage',onStorage);};}

export const setProgress:SetProgress=update=>{const current=getSnapshot();const progress=typeof update==='function'?update(current.progress):update;let warning=current.warning;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progress))}catch{warning=WARNING_SAVE}snapshot={progress,ready:true,warning};emit();};

export function useProgress(){const state=useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);return {progress:state.progress,setProgress,ready:state.ready,warning:state.warning};}