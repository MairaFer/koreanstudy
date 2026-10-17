export const STORAGE_KEY = 'bom-korean-progress-v1';
export type ProgressState = {version:1; completed:string[]; learned:string[]; lastLesson:string|null; answers:Record<string,{value:string;correct:boolean}>; quizzes:Record<string,number>; notes:Record<string,string>};
export const freshProgress = ():ProgressState => ({version:1,completed:[],learned:[],lastLesson:null,answers:{},quizzes:{},notes:{}});
export const colors = ['yellow','purple','green','pink','red','blue','gray'] as const;
export type WordColor = typeof colors[number];
export type SavedWord = {word:string; context:string; source:string; color:WordColor|null; saved:boolean; reviewed:boolean};
export type StudyChange = {key:string;value:unknown};
export type StudyRecords = Record<string,unknown>;
const plain = (x:unknown):x is Record<string,unknown> => !!x && typeof x==='object' && !Array.isArray(x);
const id = /^[\p{L}\p{N}_-]{1,120}$/u;
export function validateChanges(input:unknown):StudyChange[] {
  if(!Array.isArray(input)||input.length<1||input.length>100) throw Error('Envie de 1 a 100 alterações.');
  return input.map(item=>{
    if(!plain(item)||typeof item.key!=='string') throw Error('Alteração inválida.');
    const {key,value}=item;
    const dot=key.indexOf('.'), kind=key.slice(0,dot), name=key.slice(dot+1);
    if(key==='lastLesson') {
      if(value!==null&&(typeof value!=='string'||!id.test(value))) throw Error('Aula inválida.');
    } else if(kind==='word') {
      if(!/^[0-9가-힣ㄱ-ㅎㅏ-ㅣ]{1,80}$/u.test(name)||name!==name.normalize('NFC')) throw Error('Palavra inválida.');
      if(value!==null&&(!plain(value)||value.word!==name||typeof value.context!=='string'||value.context.length>2000||typeof value.source!=='string'||value.source.length>300||!/^#(?:aulas|bts|flashcards|quizzes|palavras)(?:\/[-\w]*)*$/.test(value.source)||typeof value.saved!=='boolean'||typeof value.reviewed!=='boolean'||!(value.color===null||colors.includes(value.color as WordColor)))) throw Error('Dados da palavra inválidos.');
    } else {
      if(!id.test(name)||['__proto__','constructor','prototype'].includes(name)) throw Error('Identificador inválido.');
      if(kind==='completed'||kind==='learned') {if(typeof value!=='boolean') throw Error('Marcação inválida.');}
      else if(kind==='answers') {if(value!==null&&(!plain(value)||typeof value.value!=='string'||value.value.length>2000||typeof value.correct!=='boolean')) throw Error('Resposta inválida.');}
      else if(kind==='quizzes') {if(value!==null&&(!Number.isInteger(value)||Number(value)<0||Number(value)>10)) throw Error('Resultado inválido.');}
      else if(kind==='notes') {if(value!==null&&(typeof value!=='string'||value.length>12000)) throw Error('Anotação inválida.');}
      else throw Error('Tipo de dado inválido.');
    }
    return {key,value};
  });
}
export function progressRecords(p:ProgressState):StudyRecords {
  const result:StudyRecords={lastLesson:p.lastLesson};
  for(const key of ['completed','learned'] as const) for(const name of p[key]) result[key+'.'+name]=true;
  for(const key of ['answers','quizzes','notes'] as const) for(const [name,value] of Object.entries(p[key])) result[key+'.'+name]=value;
  return result;
}
export function recordsProgress(records:StudyRecords):ProgressState {
  const result=freshProgress();
  for(const [key,value] of Object.entries(records)) {
    if(key==='lastLesson') {result.lastLesson=typeof value==='string'?value:null;continue;}
    const dot=key.indexOf('.'),kind=key.slice(0,dot),name=key.slice(dot+1);
    if((kind==='completed'||kind==='learned')&&value===true)result[kind].push(name);
    if(value!==null&&['answers','quizzes','notes'].includes(kind)) (result[kind as 'answers'] as Record<string,unknown>)[name]=value;
  }
  return result;
}
export function parseProgress(raw:string):ProgressState {
  const p=JSON.parse(raw);
  if(!plain(p)||p.version!==1||!Array.isArray(p.completed)||!Array.isArray(p.learned)||!plain(p.answers)||!plain(p.quizzes)||!plain(p.notes)||p.completed.length>100||p.learned.length>1000) throw Error('Progresso inválido.');
  const entries=Object.entries(progressRecords(p as ProgressState)).map(([key,value])=>({key,value}));
  if(entries.length>3000)throw Error('Progresso muito grande.');
  for(let i=0;i<entries.length;i+=100)validateChanges(entries.slice(i,i+100));
  return recordsProgress(Object.fromEntries(entries.map(x=>[x.key,x.value])));
}
export function diffProgress(before:ProgressState,after:ProgressState):StudyChange[] {
  const a=progressRecords(before),b=progressRecords(after);
  return [...new Set([...Object.keys(a),...Object.keys(b)])].filter(k=>JSON.stringify(a[k])!==JSON.stringify(b[k])).map(key=>({key,value:b[key]??(key.startsWith('learned.')||key.startsWith('completed.')?false:null)}));
}

export const colorNames:Record<WordColor,string>={yellow:'Amarelo',purple:'Roxo',green:'Verde',pink:'Rosa',red:'Vermelho',blue:'Azul',gray:'Cinza'};
export function groupWordsByColor(words:SavedWord[]){
 return [...colors,null].map(color=>({color,label:color?colorNames[color]:'Sem destaque',words:words.filter(w=>w.color===color).sort((a,b)=>a.word.localeCompare(b.word,'ko'))})).filter(g=>g.words.length);
}
