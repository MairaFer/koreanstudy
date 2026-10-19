const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {beginSections,beginVocabulary}=require('../lib/begin.ts'),{stigmaSections,stigmaVocabulary}=require('../lib/stigma.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const b=beginSections.flatMap(s=>s.lines),s=stigmaSections.flatMap(s=>s.lines);
assert.equal(b.length,41);assert.equal(s.length,42);assert.equal(b.filter(l=>l.english).length,27);assert.equal(s.filter(l=>l.english).length,9);
assert.equal(b[0].text,'아무것도 없던 열다섯의 나');assert.equal(b.at(-1).text,'You made me again');
assert.equal(b.filter(l=>l.text==='You make me begin').length,9);assert.equal(b.filter(l=>l.text==='You made me again').length,5);
for(const v of ['Smile','Cry','Fly']){assert.equal(b.filter(l=>l.text===`(${v} with me, ${v.toLowerCase()} with me,`).length,1);assert.equal(b.filter(l=>l.text===`${v} with me)`).length,1);assert.equal(b.filter(l=>l.text===`(${v} with me, ${v.toLowerCase()} with me)`).length,1);}
assert.equal(s[0].text,'숨겨왔어');assert.equal(s.at(-1).text,'내 죄를 사해줘');
for(const text of ['더 깊이 더 깊이 상처만 깊어져','되돌릴 수 없는 깨진 유리 조각 같아','더 깊이 매일이 가슴만 아파져','내 죄를 대신 받던','연약하기만 했던 너','숨겨도 감춰도 지워지지 않어'])assert.equal(s.filter(l=>l.text===text).length,2);
assert.equal(s.filter(l=>l.text==="I'm sorry ma brother").length,1);assert.equal(s.filter(l=>l.text==="I'm sorry ma sister").length,1);
for(const[id,sections,vocab]of[['begin',beginSections,beginVocabulary],['stigma',stigmaSections,stigmaVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);assert.notEqual(translate(e.meaning,'eng'),e.meaning);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=12);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);for(const option of ex.options)assert.notEqual(translate(option,'eng'),option);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['begin','stigma']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['Begin','begin'],['Stigma','stigma'],['Begin (Live)',undefined],['Stigma (Japanese Version)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
assert.ok(b.find(l=>l.text==="Brother let's cry, cry 울고 말자").entries[0].notes[0].includes('울지 말자'));
assert.ok(s.find(l=>l.text==='그저 묻어두기엔').entries[0].notes[0].includes('물어'));
assert.ok(s.find(l=>l.text==='내 죄를 사해줘').entries[0].notes[0].includes('사하다'));
assert.ok(s.find(l=>l.text==='숨겨도 감춰도 지워지지 않어').entries[0].notes[0].includes('않아'));
console.log('PASS: Begin and Stigma, 41/42 supplied lines, all repeated choruses and final variants, contextual grammar, bilingual vocabulary, ten exercises, ten curiosity cards and original-version catalog links.');
