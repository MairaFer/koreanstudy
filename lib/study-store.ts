"use client";
import {useEffect,useSyncExternalStore,type SetStateAction} from 'react';
import {freshProgress,diffProgress,recordsProgress,progressRecords,parseProgress,STORAGE_KEY,type ProgressState,type SavedWord,type StudyChange,type StudyRecords} from './study-data';
type User={key:string;name:string;email:string};
type Snapshot={progress:ProgressState;words:Record<string,SavedWord>;user:User|null;loaded:boolean;loadFailed:boolean;warning:string;status:string;pending:number;legacy:boolean;gate:boolean;wordMode:boolean;selection:SavedWord|null};
const initial:Snapshot={progress:freshProgress(),words:{},user:null,loaded:false,loadFailed:false,warning:'',status:'',pending:0,legacy:false,gate:false,wordMode:false,selection:null};
let snapshot=initial,initialized=false,loading=false,saving=false,importing=false;
let records:StudyRecords={};
let mutationRevision=0;
const pending=new Map<string,StudyChange>();
const listeners=new Set<()=>void>();
function emit(patch:Partial<Snapshot>){snapshot={...snapshot,...patch};for(const l of listeners)l();}
function subscribe(l:()=>void){listeners.add(l);return()=>{listeners.delete(l);};}
function applyRecords(){emit({progress:recordsProgress(records),words:Object.fromEntries(Object.entries(records).filter(([k,v])=>k.startsWith('word.')&&v).map(([k,v])=>[k.slice(5),v as SavedWord])),pending:pending.size});}
const endpoint=()=>'/api/study?returnTo='+encodeURIComponent('/'+location.hash);
export const signInHref=()=>'/signin-with-chatgpt?return_to='+encodeURIComponent(typeof location==='undefined'?'/':'/'+location.hash);
export function requestAccount(){emit({gate:true});}
export function closeAccount(){emit({gate:false});}
export function toggleWordMode(){emit({wordMode:!snapshot.wordMode});}
export function selectWord(word:string,context:string){
  if(!snapshot.user){requestAccount();return;}
  const source=/^#(?:aulas|bts|flashcards|quizzes|palavras)(?:\/[-\w]*)*$/.test(location.hash)?location.hash:'#aulas';
  emit({selection:snapshot.words[word]??{word,context:context.slice(0,2000),source,color:null,saved:false,reviewed:false}});
}
export function closeWord(){emit({selection:null});}
export async function loadStudy(){
  if(loading||saving||pending.size||importing)return;
  loading=true;
  const revision=mutationRevision;
  try {
    const response=await fetch(endpoint(),{credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(15000)});
    const data=await response.json() as {user:User|null;records:StudyRecords;error?:string};
    if(!response.ok)throw Error(data.error||'Não foi possível carregar sua conta.');
    const previous=snapshot.user?.key;
    if((data.user||previous)&&revision===mutationRevision){records=data.records;applyRecords();}
    let legacy=false;try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){parseProgress(raw);legacy=true;}}catch{/* The old browser storage is optional. */}
    emit({user:data.user,loaded:true,loadFailed:false,warning:'',legacy,status:pending.size?snapshot.status:data.user?'Dados sincronizados':'Modo visitante · progresso apenas nesta sessão'});
  }catch(error){emit({loaded:true,loadFailed:true,warning:error instanceof Error?error.message:'Não foi possível carregar sua conta.',status:'Salvamento indisponível'});}
  finally{loading=false;}
}
async function send(changes:StudyChange[],importOnly=false){
  const response=await fetch('/api/study',{method:'PATCH',credentials:'same-origin',headers:{'Content-Type':'application/json','X-Study-Account':snapshot.user?.key??''},body:JSON.stringify({changes,importOnly}),signal:AbortSignal.timeout(15000)});
  if(!response.ok){const body=await response.json().catch(()=>({})) as {error?:string};throw Error(body.error||'Não foi possível salvar. Tente novamente.');}
}
export async function flushStudy(){
  if(saving||!snapshot.user||snapshot.loadFailed||importing||!pending.size)return;
  saving=true;emit({status:'Salvando…',warning:''});
  try{
    while(pending.size){const batch=[...pending.values()].slice(0,100);await send(batch);for(const item of batch)if(pending.get(item.key)===item)pending.delete(item.key);emit({pending:pending.size});}
    emit({status:'Salvo na sua conta',warning:''});
  }catch(error){emit({status:'Alterações ainda não salvas',warning:(error instanceof Error?error.message:'Falha ao salvar.')+' Mantenha esta página aberta e tente novamente.'});}
  finally{saving=false;}
}
function queue(changes:StudyChange[]){
  mutationRevision++;
  for(const item of changes){if(item.value===null)delete records[item.key];else records[item.key]=item.value;pending.set(item.key,item);}
  applyRecords();void flushStudy();
}
export function setProgress(update:SetStateAction<ProgressState>){
  const before=snapshot.progress,after=typeof update==='function'?update(before):update;
  const changes=diffProgress(before,after);if(!changes.length)return;
  if(importing){emit({warning:'Aguarde a importação terminar antes de salvar novas alterações.'});return;}
  if(!snapshot.loaded||snapshot.loadFailed){emit({progress:after,warning:'Sua conta ainda não foi carregada. Esta prática não será salva; use “Tentar novamente”.'});return;}
  if(!snapshot.user){emit({progress:after});if(changes.some(x=>x.key!=='lastLesson'&&!x.key.startsWith('answers.')))requestAccount();return;}
  queue(changes);
}
export function changeWord(word:SavedWord|null,key:string){
  if(!snapshot.user){requestAccount();return;}
  if(snapshot.loadFailed||importing){emit({warning:'Aguarde o carregamento dos dados ou tente novamente.'});return;}
  queue([{key:'word.'+key,value:word}]);
}
export async function retryStudy(){if(snapshot.loadFailed)await loadStudy();else if(pending.size)await flushStudy();else await loadStudy();}
export async function importLegacy(){
  if(!snapshot.user||importing||saving||pending.size||snapshot.loadFailed)return;
  importing=true;emit({status:'Importando progresso…',warning:''});
  try{
    const raw=localStorage.getItem(STORAGE_KEY);if(!raw)throw Error('Nenhum progresso antigo encontrado.');
    const entries=Object.entries(progressRecords(parseProgress(raw))).filter(([,value])=>value!==null).map(([key,value])=>({key,value}));
    for(let i=0;i<entries.length;i+=100)await send(entries.slice(i,i+100),true);
    localStorage.removeItem(STORAGE_KEY);emit({legacy:false});
  }catch(error){emit({warning:error instanceof Error?error.message:'Não foi possível importar.'});}
  finally{importing=false;}
  if(!snapshot.warning)await loadStudy();
}
export function useStudy(){
  const state=useSyncExternalStore(subscribe,()=>snapshot,()=>initial);
  useEffect(()=>{
    if(initialized)return;initialized=true;void loadStudy();
    window.addEventListener('focus',()=>void loadStudy());
    window.addEventListener('online',()=>void retryStudy());
    window.addEventListener('beforeunload',event=>{if(pending.size||saving||importing){event.preventDefault();event.returnValue='';}});
    window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
  },[]);
  return state;
}
