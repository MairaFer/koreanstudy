const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {reflectionSections,reflectionVocabulary}=require('../lib/reflection.ts'),{awakeSections,awakeVocabulary}=require('../lib/awake.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=reflectionSections.flatMap(s=>s.lines),b=awakeSections.flatMap(s=>s.lines);
assert.equal(a.length,46);assert.equal(b.length,51);assert.equal(a.filter(l=>l.english).length,13);assert.equal(b.filter(l=>l.english).length,22);
assert.equal(a[0].text,'I know');assert.equal(a.at(-1).text,'I wish I could love myself');assert.equal(a.filter(l=>l.text==='I wish I could love myself').length,8);
assert.deepEqual(a.slice(-8).map(l=>l.text),Array(8).fill('I wish I could love myself'));
assert.equal(b[0].text,'믿는 게 아냐');assert.deepEqual(b.slice(-2).map(l=>l.text),['달려보고 싶어','조금 더']);
for(const t of ['Maybe I, I can never fly',"Maybe I, I can't touch the sky",'저기 저 꽃잎들처럼','날갤 단 것처럼은 안 돼','그래도 손 뻗고 싶어'])assert.equal(b.filter(l=>l.text===t).length,3);
assert.equal(b.filter(l=>l.text==='달려보고 싶어 조금 더').length,2);assert.equal(b.filter(l=>l.text==='Wide awake wide awake wide awake').length,4);assert.equal(b.filter(l=>l.text==="Don't cry").length,2);assert.equal(b.filter(l=>l.text==='No lie').length,2);
assert.equal(b.filter(l=>l.text==='그래도 발버둥치고 싶어').length,2);
for(const[id,sections,vocab]of[['reflection',reflectionSections,reflectionVocabulary],['awake',awakeSections,awakeVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);assert.notEqual(translate(e.meaning,'eng'),e.meaning);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=16);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);for(const option of ex.options)assert.notEqual(translate(option,'eng'),option);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['reflection','awake']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['Reflection','reflection'],['Awake','awake'],['Awake (Live)',undefined],['Reflection (Instrumental)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
const get=(lines,text)=>lines.find(l=>l.text===text);
assert.ok(get(a,'나만 하릴없이 걷네').entries[0].notes[0].includes('할 일 없이'));
assert.ok(get(a,'나의 키는 지구의 또 다른 지름').translation.includes('diâmetro'));
assert.ok(get(a,'자유에게서 자유롭고 싶다').translation.includes('da própria liberdade'));
assert.ok(get(b,'날갤 단 것처럼은 안 돼').entries[0].notes[0].includes('날개를'));
assert.ok(get(b,'나 이것뿐이라서 머물고 싶어').entries[0].notes[0].includes('espaço'));
assert.ok(get(b,'그래도 여섯 송이 꽃을 손에 꼭 쥐고').entries[0].notes[0].includes('contador 송이'));
assert.ok(get(b,'행복했던 시간들이 내게 물었어').entries[0].notes[0].includes('personificadas'));
console.log('PASS: Reflection and Awake, 46/51 supplied lines, eight ending wishes, repeated choruses and final split, contextual wordplay, uncertainty and reported speech, bilingual vocabulary, ten exercises, ten cards and catalog links.');
