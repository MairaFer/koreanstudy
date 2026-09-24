// Explicit test identities only; no authentication bypass is shipped to the site.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import ts from 'typescript';
import {DatabaseSync} from 'node:sqlite';
const uri=source=>'data:text/javascript;base64,'+Buffer.from(source).toString('base64');
async function compile(file,replacements={}){
 let source=await fs.readFile(new URL('../'+file,import.meta.url),'utf8');
 for(const [from,to] of Object.entries(replacements))source=source.replaceAll(from,to);
 return uri(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText);
}
const domainURI=await compile('lib/study-data.ts'), domain=await import(domainURI);
const repositoryURI=await compile('db/study-repository.ts'), repository=await import(repositoryURI);
const temporary=await fs.mkdtemp(path.join(os.tmpdir(),'boralang-db-test-'));
const databasePath=path.join(temporary,'study.sqlite');
let sqlite=new DatabaseSync(databasePath);
sqlite.exec(await fs.readFile(new URL('../drizzle/0000_mixed_kate_bishop.sql',import.meta.url),'utf8'));
const adapter={prepare(sql){return {bind(...values){return {sql,values,async all(){return {results:sqlite.prepare(sql).all(...values)}}};}}},async batch(statements){sqlite.exec('BEGIN');try{const result=statements.map(s=>sqlite.prepare(s.sql).all(...s.values));sqlite.exec('COMMIT');return result;}catch(error){sqlite.exec('ROLLBACK');throw error;}}};
globalThis.__studyTestEnv={DB:adapter};globalThis.__studyTestUser=null;
const authURI=uri('export async function getChatGPTUser(){return globalThis.__studyTestUser;}export const chatGPTSignInPath=()=>"/signin-with-chatgpt";export const chatGPTSignOutPath=()=>"/signout-with-chatgpt";');
const envURI=uri('export const env=globalThis.__studyTestEnv;');
const api=await import(await compile('app/api/study/route.ts',{'cloudflare:workers':envURI,'@/app/chatgpt-auth':authURI,'@/db/study-repository':repositoryURI,'@/lib/study-data':domainURI}));
const user=id=>({userId:id,displayName:'Test '+id,email:id+'@example.invalid'});
const origin='https://study.example.invalid';
const request=(changes,options={})=>new Request(origin+'/api/study',{method:'PATCH',headers:{origin,'content-type':'application/json','x-study-account':globalThis.__studyTestUser?.userId??'',...options.headers},body:JSON.stringify({changes,...options.body})});
const word={word:'보고',context:'보고 싶다',source:'#bts/estudos/spring-day',color:'purple',saved:true,reviewed:false};
try{
 let response=await api.GET(new Request(origin+'/api/study'));assert.equal(response.status,200);assert.deepEqual((await response.json()).records,{});assert.match(response.headers.get('cache-control'),/no-store/);
 assert.equal((await api.PATCH(request([{key:'completed.1-1',value:true}]))).status,401);
 globalThis.__studyTestUser=user('student-a');
 assert.equal((await api.PATCH(request([{key:'completed.1-1',value:true}],{headers:{origin:'https://attacker.invalid'}}))).status,403);
 assert.equal((await api.PATCH(request([{key:'completed.1-1',value:true}],{headers:{'x-study-account':'student-b'}}))).status,409);
 for(const invalid of [
  {key:'word.보고',value:{...word,color:'url(evil)'}},
  {key:'word.보고',value:{...word,source:'javascript:alert(1)'}},
  {key:'quizzes.Iniciante',value:11},
  {key:'answers.__proto__',value:{value:'x',correct:true}},
  {key:'answers.bad',value:{value:'x'.repeat(2001),correct:true}},
  {key:'owner',value:'student-b'}
 ])assert.equal((await api.PATCH(request([invalid]))).status,400);
 assert.equal((await api.PATCH(request(Array.from({length:101},()=>({key:'lastLesson',value:null}))))).status,400);
 response=await api.PATCH(request([{key:'completed.1-1',value:true},{key:'learned.1-1-card-0',value:true},{key:'quizzes.Iniciante',value:8},{key:'word.보고',value:word},{key:'answers.test',value:{value:"'; DROP TABLE study_items; --",correct:false}}]));assert.equal(response.status,200);
 globalThis.__studyTestUser=user('student-b');
 assert.deepEqual((await (await api.GET(new Request(origin+'/api/study'))).json()).records,{});
 assert.equal((await api.PATCH(request([{key:'word.보고',value:{...word,color:'green'}},{key:'completed.1-2',value:true}]))).status,200);
 globalThis.__studyTestUser=user('student-a');
 let a=await repository.readStudy(adapter,'student-a');assert.equal(a['word.보고'].color,'purple');assert.equal(a['quizzes.Iniciante'],8);assert.equal(a['completed.1-2'],undefined);
 await api.PATCH(request([{key:'quizzes.Iniciante',value:2},{key:'completed.1-3',value:true}],{body:{importOnly:true}}));
 a=await repository.readStudy(adapter,'student-a');assert.equal(a['quizzes.Iniciante'],8);assert.equal(a['completed.1-3'],true);
 await api.PATCH(request([{key:'word.보고',value:{...word,reviewed:true,color:null}}]));
 assert.equal((await repository.readStudy(adapter,'student-a'))['word.보고'].reviewed,true);
 await api.PATCH(request([{key:'word.보고',value:null}]));
 assert.equal((await repository.readStudy(adapter,'student-a'))['word.보고'],undefined);assert.equal((await repository.readStudy(adapter,'student-b'))['word.보고'].color,'green');
 sqlite.close();sqlite=new DatabaseSync(databasePath);
 a=await repository.readStudy(adapter,'student-a');assert.equal(a['completed.1-1'],true);assert.equal(a['learned.1-1-card-0'],true);assert.equal(a['quizzes.Iniciante'],8);
 const before=domain.freshProgress(),after={...before,completed:['1-1'],learned:['1-1-card-0'],quizzes:{Iniciante:9}};
 assert.deepEqual(domain.parseProgress(JSON.stringify(after)),after);
 assert.ok(domain.diffProgress(after,before).some(c=>c.key==='learned.1-1-card-0'&&c.value===false));
 assert.throws(()=>domain.parseProgress('{"version":2}'));
 const oversized=new Request(origin+'/api/study',{method:'PATCH',headers:{origin,'content-type':'application/json','x-study-account':'student-a'},body:' '.repeat(250001)});assert.equal((await api.PATCH(oversized)).status,413);
 globalThis.__studyTestEnv.DB=undefined;assert.equal((await api.GET(new Request(origin+'/api/study'))).status,503);
 console.log('PASS: anonymous reading, protected writes, cross-origin rejection, account mismatch, validation, SQL parameterization, two-account isolation, import without overwrite, words/colors/review/removal, and persistence after database reopen.');
}finally{sqlite.close();await fs.unlink(databasePath);await fs.rmdir(temporary);delete globalThis.__studyTestEnv;delete globalThis.__studyTestUser;}
