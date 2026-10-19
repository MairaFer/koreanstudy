const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {plutoSections,plutoVocabulary}=require('../lib/pluto.ts'),{paradiseSections,paradiseVocabulary}=require('../lib/paradise.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const p=plutoSections.flatMap(s=>s.lines),n=paradiseSections.flatMap(s=>s.lines);
assert.equal(p.length,70);assert.equal(n.length,76);
assert.equal(p[0].text,'그럴 수만 있다면 물어보고 싶었어');assert.equal(p.at(-1).text,'(넌 날 지웠어 넌 날 잊었어)');
assert.equal(p.filter(l=>l.text==='난 맴돌고만 있어').length,4);assert.equal(p.filter(l=>l.text==='난 헛돌고만 있어').length,4);
assert.equal(p.filter(l=>l.text==='한때는 태양의 세계에 속했던').length,3);
assert.equal(n[0].text,'마라톤 마라톤');assert.equal(n.at(-1).text,'너를 이루는 모든 언어는 이미 낙원에');
assert.equal(n.filter(l=>l.text==='멈춰서도 괜찮아').length,5);assert.equal(n.filter(l=>l.text==="Stop runnin' for nothin' my friend").length,4);
assert.equal(n.filter(l=>l.text==='하지만 진짜 세상은').length,2);assert.equal(n.filter(l=>l.text==='네가 내뱉는 모든 호흡은 이미 낙원에').length,4);
for(const [id,sections,vocab]of[['134340',plutoSections,plutoVocabulary],['paradise',paradiseSections,paradiseVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);assert.ok(translate(l.translation,'eng'));if(!l.english){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=20);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['134340','paradise']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['134340','134340'],['Paradise','paradise'],['낙원','paradise'],['Paradise (낙원)','paradise']])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
assert.ok(p.find(l=>l.text==='Us는 u의 복수형일 뿐').entries[0].notes[0].includes('não uma regra'));
assert.ok(n.find(l=>l.text==='우린 꿈을 남한테서 꿔 (빚처럼)').entries[0].notes[0].includes('tomar emprestado'));
assert.ok(n.find(l=>l.text==='꿈이 없어도 괜찮아').entries[0].notes[0].includes('contexto'));
console.log('PASS: 134340 and Paradise, 70/76 supplied lines, repeated choruses and ending changes, Korean analysis, bilingual notes and vocabulary, 10 exercises, 10 curiosity cards, catalog and saved-word integration.');
