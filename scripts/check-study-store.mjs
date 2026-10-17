import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
const uri=s=>'data:text/javascript;base64,'+Buffer.from(s).toString('base64');
const compile=s=>uri(ts.transpileModule(s,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
const domainURI=compile(await fs.readFile(new URL('../lib/study-data.ts',import.meta.url),'utf8'));
const fakeReact=uri('export const useEffect=()=>{};export const useSyncExternalStore=(subscribe,getSnapshot)=>getSnapshot();');
const source=(await fs.readFile(new URL('../lib/study-store.ts',import.meta.url),'utf8')).replace("'react'",JSON.stringify(fakeReact)).replace("'./study-data'",JSON.stringify(domainURI));
globalThis.location={hash:'#aulas/1-1'};
const local=new Map();globalThis.localStorage={getItem:k=>local.get(k)??null,setItem:(k,v)=>local.set(k,v),removeItem:k=>local.delete(k)};
let user=null,remote={},fail=false,release=null,delay=false,requests=[];
globalThis.fetch=async(url,options={})=>{
 if(options.method!=='PATCH')return Response.json({user,records:structuredClone(remote)});
 if(fail)return Response.json({error:'Sem conexão de teste'},{status:503});
 const body=JSON.parse(options.body);requests.push(body);
 if(delay){delay=false;await new Promise(resolve=>{release=resolve;});}
 for(const {key,value} of body.changes){if(!body.importOnly||!(key in remote)){if(value===null)delete remote[key];else remote[key]=value;}}
 return Response.json({ok:true});
};
const store=await import(compile(source));
const tick=()=>new Promise(resolve=>setImmediate(resolve));
async function settled(){for(let i=0;i<100&&store.useStudy().pending;i++)await tick();}
await store.loadStudy();assert.equal(store.useStudy().user,null);
store.setProgress(p=>({...p,completed:['1-1']}));assert.equal(store.useStudy().gate,true);assert.equal(requests.length,0);assert.equal(local.size,0);
user={key:'student-a',name:'Student A',email:'a@example.invalid'};await store.loadStudy();assert.deepEqual(store.useStudy().progress.completed,[]);
delay=true;
store.setProgress(p=>({...p,completed:['1-1']}));
store.setProgress(p=>({...p,learned:['1-1-card-0']}));
release();await settled();assert.equal(remote['completed.1-1'],true);assert.equal(remote['learned.1-1-card-0'],true);
fail=true;store.setProgress(p=>({...p,quizzes:{Iniciante:7}}));await tick();await tick();
assert.ok(store.useStudy().pending);assert.match(store.useStudy().warning,/Sem conexão/);assert.equal(store.useStudy().progress.quizzes.Iniciante,7);
fail=false;await store.retryStudy();assert.equal(store.useStudy().pending,0);assert.equal(remote['quizzes.Iniciante'],7);
const word={word:'보고',context:'보고 싶다',source:'#bts/estudos/spring-day',color:'yellow',saved:true,reviewed:false};
store.changeWord(word,word.word);await settled();assert.equal(remote['word.보고'].color,'yellow');
store.changeWord({...word,saved:false},word.word);await settled();assert.equal(remote['word.보고'].saved,true,'Destaques sempre são salvos');
store.highlightWord(word.word,word.context,'blue');await settled();assert.equal(remote['word.보고'].color,'blue');assert.equal(remote['word.보고'].saved,true);
await store.loadStudy();assert.equal(store.useStudy().words[word.word].color,'blue','Cor persiste após recarga');
store.changeWord({...word,color:null,reviewed:true},word.word);await settled();assert.equal(remote['word.보고'].reviewed,true);
store.changeWord(null,word.word);await settled();assert.equal(remote['word.보고'],undefined);
const domain=await import(domainURI);const grouped=domain.groupWordsByColor([{...word,color:'blue'},{...word,word:'싶다',color:'yellow'},{...word,word:'나',color:null}]);assert.deepEqual(grouped.map(g=>g.color),['yellow','blue',null]);assert.equal(grouped[1].words[0].word,word.word);local.set(domain.STORAGE_KEY,JSON.stringify({...domain.freshProgress(),completed:['1-2'],quizzes:{Iniciante:1}}));
await store.importLegacy();assert.equal(remote['quizzes.Iniciante'],7);assert.equal(remote['completed.1-2'],true);assert.equal(local.size,0);
remote={};user={key:'student-b',name:'Student B',email:'b@example.invalid'};await store.loadStudy();assert.deepEqual(store.useStudy().progress.completed,[]);assert.deepEqual(store.useStudy().words,{});
user=null;await store.loadStudy();assert.equal(store.useStudy().user,null);assert.equal(store.useStudy().pending,0);
console.log('PASS: guest gates without writes, queued saves, failure/retry preserving edits, word changes, one-time import without overwrite, and clearing data when accounts change.');
