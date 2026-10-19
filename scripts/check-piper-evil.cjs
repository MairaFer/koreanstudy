const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {piedPiperSections,piedPiperVocabulary}=require('../lib/pied-piper.ts'),{boyMeetsEvilSections,boyMeetsEvilVocabulary}=require('../lib/boy-meets-evil.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const p=piedPiperSections.flatMap(s=>s.lines),b=boyMeetsEvilSections.flatMap(s=>s.lines);
assert.equal(p.length,64);assert.equal(b.length,41);assert.equal(piedPiperSections.length,10);assert.equal(boyMeetsEvilSections.length,4);
assert.equal(p.filter(l=>l.english).length,10);assert.equal(b.filter(l=>l.english).length,14);
assert.equal(p[0].text,'나쁜 거라 더 좋은 거야');assert.equal(p.at(-1).text,"I'm takin' over you");
assert.equal(p.filter(l=>l.text==="I'm takin' over you").length,4);assert.equal(p.filter(l=>l.text==='벌 받는 건 아니잖아').length,2);
assert.equal(p.filter(l=>l.text==='피리소릴 따라와').length,1);assert.equal(p.filter(l=>l.text==='널 구하러 온 거야 널 망치러 온 거야').length,2);
assert.equal(b[0].text,'어두워져 가 내 미래의 빛');assert.equal(b.at(-1).text,"Yeah it's evil");
assert.equal(b.filter(l=>l.text==="Too bad but it's too sweet").length,4);assert.equal(b.filter(l=>l.text==="It's too sweet it's too sweet").length,4);assert.equal(b.filter(l=>l.text==="It's too evil").length,3);
for(const[id,sections,vocab]of[['pied-piper',piedPiperSections,piedPiperVocabulary],['boy-meets-evil',boyMeetsEvilSections,boyMeetsEvilVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);assert.ok(translate(l.translation,'eng'));if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=16);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['pied-piper','boy-meets-evil']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['Pied Piper','pied-piper'],['Intro: Boy Meets Evil','boy-meets-evil'],['Intro : Boy Meets Evil','boy-meets-evil'],['Boy Meets Evil','boy-meets-evil'],['Pied Piper (Live)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
assert.ok(p.find(l=>l.text==='한 시간이 뭐야 일이년을 순삭해').entries[0].notes[0].includes('não doze'));
assert.ok(p.find(l=>l.text==='알면서도 이끌리는 선악과처럼').entries[0].notes[0].includes('bem e do mal'));
assert.ok(b.find(l=>l.text==='외쳤지만 저버렸지 내 양심을').entries[0].notes[0].includes('져 버리다'));
assert.ok(b.find(l=>l.text==='But 이 죄를 벗기엔').entries[0].notes[0].includes('벗다'));
assert.ok(b.find(l=>l.text==='달콤함에 중독된 병신').entries[0].notes[0].includes('insulto vulgar'));
console.log('PASS: Pied Piper and Intro Boy Meets Evil, 64/41 supplied lines, all repeated hooks and final variants, contextual grammar, register and spelling notes, bilingual vocabulary, ten exercises, ten curiosity cards and catalog links.');
