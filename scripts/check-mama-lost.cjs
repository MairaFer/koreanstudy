const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {mamaSections,mamaVocabulary}=require('../lib/mama.ts'),{lostSections,lostVocabulary}=require('../lib/lost.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=mamaSections.flatMap(s=>s.lines),b=lostSections.flatMap(s=>s.lines);
assert.equal(a.length,80);assert.equal(b.length,68);assert.equal(a.filter(l=>l.english).length,27);assert.equal(b.filter(l=>l.english).length,28);
assert.equal(a[0].text,'Time travel 2006년의 해');assert.equal(a.at(-1).text,'Hey mama');assert.equal(a.filter(l=>l.text==='Hey mama').length,22);
for(const text of ['이젠 내게 기대도 돼 언제나 옆에','내게 아낌없이','주셨기에 버팀목이었기에','이젠 아들내미 믿으면 돼 웃으면 돼'])assert.equal(a.filter(l=>l.text===text).length,4);
assert.deepEqual(mamaSections.at(-1).lines,mamaSections.at(-2).lines);
assert.equal(b[0].text,'눈을 감고 아직 여기 서 있어');assert.equal(b.at(-1).text,'Found my way');
assert.equal(b.filter(l=>l.text==='Lost my way').length,16);assert.equal(b.filter(l=>l.text==='Found my way').length,4);
for(const text of ['쉴 새 없이 몰아치는 거친 비바람 속에','출구라곤 없는 복잡한 세상 속에','수없이 헤매도 난 나의 길을 믿어볼래'])assert.equal(b.filter(l=>l.text===text).length,3);
assert.equal(b.filter(l=>l.text==='그래도 믿고 있어 믿기지 않지만').length,1);assert.equal(b.filter(l=>l.text==='그래도 믿고 싶어 믿기지 않지만').length,1);
assert.equal(b.filter(l=>l.text==='Never leave me alone').length,1);assert.equal(b.filter(l=>l.text==="Don't you leave me alone").length,1);
for(const[id,sections,vocab]of[['mama',mamaSections,mamaVocabulary],['lost',lostSections,lostVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);assert.notEqual(translate(e.meaning,'eng'),e.meaning);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=20);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);for(const option of ex.options)if(/[a-zÀ-ÿ]/i.test(option))assert.notEqual(translate(option,'eng'),option);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['mama','lost']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['MAMA','mama'],['Lost','lost'],['MAMA (Live)',undefined],['Lost (Instrumental)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
const get=(lines,text)=>lines.find(l=>l.text===text);
assert.ok(get(a,'빚을 쥔 이 꿈의 길').translation.includes('dívida'));
assert.ok(get(a,'주셨기에 버팀목이었기에').entries[0].notes[0].includes('honorífico'));
assert.ok(get(a,'(Go away) 타지로 일하러 가셨어 전화로').entries[0].notes[0].includes('espaço'));
assert.ok(get(b,'먹일 찾기 위해 며칠이고 방황하는').entries[0].notes[0].includes('먹이를'));
assert.ok(get(b,'난 너무 어려운 걸').entries[0].notes[0].includes('어리다'));
assert.ok(get(b,'기약 없는 희망이여 이젠 안녕').entries[0].notes[0].includes('não todo e qualquer sonho'));
console.log('PASS: MAMA and Lost, 80/68 supplied lines, all chorus repeats and pre-chorus variants, debt and honorific distinctions, spacing note, contextual metaphors, bilingual vocabulary, ten exercises, ten cards and catalog links.');
