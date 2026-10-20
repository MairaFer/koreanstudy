const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {lieSections,lieVocabulary}=require('../lib/lie.ts'),{firstLoveSections,firstLoveVocabulary}=require('../lib/first-love.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=lieSections.flatMap(s=>s.lines),b=firstLoveSections.flatMap(s=>s.lines);
assert.equal(a.length,58);assert.equal(b.length,71);assert.equal(a.filter(l=>l.english).length,14);assert.equal(b.filter(l=>l.english).length,2);
assert.equal(a[0].text,'내게 말해');assert.equal(a.at(-1).text,'벌받는 나를 구해줘');
for(const t of ['Caught in a lie'])assert.equal(a.filter(l=>l.text===t).length,6);
for(const t of ['순결했던 날 찾아줘','이 거짓 속에 헤어날 수 없어','내 웃음을 돌려놔줘','이 지옥에서 날 꺼내줘','이 고통에서 헤어날 수 없어','벌받는 나를 구해줘'])assert.equal(a.filter(l=>l.text===t).length,3);
assert.equal(a.filter(l=>l.text==='(Ah woo woo)').length,4);assert.equal(a.filter(l=>l.text==='나를 원해').length,2);
assert.equal(b[0].text,'내 기억의 구석');assert.equal(b.at(-1).text,'한 켠에 자리잡은 갈색 piano');
assert.equal(b.filter(l=>l.text==='그때 기억해').length,5);assert.equal(b.filter(l=>l.text==='한 켠에 자리잡은 갈색 piano').length,4);
assert.equal(b.filter(l=>l.text==='내 기억의 구석').length,2);assert.equal(b.filter(l=>l.text==='어릴 적 집 안의 구석').length,2);
assert.deepEqual(b.slice(0,4).map(l=>l.text),b.slice(-4).map(l=>l.text));
for(const[id,sections,vocab]of[['lie',lieSections,lieVocabulary],['first-love',firstLoveSections,firstLoveVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);assert.notEqual(translate(e.meaning,'eng'),e.meaning);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=16);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);for(const option of ex.options)assert.notEqual(translate(option,'eng'),option);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['lie','first-love']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['Lie','lie'],['First Love','first-love'],['Lie (Live)',undefined],['First Love (Instrumental)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
const get=(lines,text)=>lines.find(l=>l.text===text);
assert.ok(get(a,'순결했던 날 찾아줘').entries[0].notes[0].includes('나를'));
assert.ok(get(a,'길을 잃고 헤매이는').entries[0].notes[0].includes('헤매는'));
assert.ok(get(a,'나를 원해').entries[0].notes[0].includes('omite o sujeito'));
assert.ok(get(b,'뵈지 않던 그때 울고, 웃고').entries[0].notes[0].includes('보이다'));
assert.ok(get(b,'새꺄 너는 진짜 할 수 있다고').entries[0].notes[0].includes('vulgar'));
for(const t of ['내게 미안해 하지마','너는 내 손을 놓지마']){assert.ok(get(b,t).translation.startsWith('Não '));assert.ok(translate(get(b,t).translation,'eng').startsWith('Do not '));}
assert.ok(get(b,'너의 의미 내가 어디 있든 넌 항상 [-] 그 자릴').entries[0].notes[0].includes('marcador'));
console.log('PASS: Lie and First Love, 58/71 supplied lines, repeated choruses and circular ending, pronoun and subject distinctions, negative requests, spelling and register notes, bilingual vocabulary, ten exercises, ten cards and catalog links.');
