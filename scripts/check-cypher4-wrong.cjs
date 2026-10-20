const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {cypher4Sections,cypher4Vocabulary}=require('../lib/cypher-pt4.ts'),{amIWrongSections,amIWrongVocabulary}=require('../lib/am-i-wrong.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=cypher4Sections.flatMap(s=>s.lines),b=amIWrongSections.flatMap(s=>s.lines);
assert.equal(a.length,104);assert.equal(b.length,71);assert.equal(a.filter(l=>l.english).length,31);assert.equal(b.filter(l=>l.english).length,26);
for(const [text,n] of [['I love I love I love myself',8],['I know I know I know myself',4],['Ya playa haters you should love yourself',4],['Brr',4],['니가 날 싫어해도 you know me',2]])assert.equal(a.filter(l=>l.text===text).length,n,text);
assert.deepEqual(cypher4Sections.at(-1).lines,cypher4Sections.at(-2).lines);
for(const [text,n] of [['Are you ready for this',6],['(No I\'m not)',1],['내가 뭐 틀린 말했어',3],['내가 뭐 거짓말했어',3],['온 세상이 다 미친 것 같아',2]])assert.equal(b.filter(l=>l.text===text).length,n,text);
assert.ok(a.some(l=>l.text==='곱게 접해 내 멋대로 도배된'));assert.ok(b.some(l=>l.text==='그램마 니가 미친겨'));assert.ok(b.some(l=>l.text==='넌 정상 아닌 게 비정상'));
assert.ok(a.find(l=>l.text==='한 땀씩 바느질').entries[0].notes.join().includes('costur'));
assert.ok(b.find(l=>l.text==='그램마 니가 미친겨').entries[0].notes.join().includes('incerteza'));
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,sections,vocab,count] of [['cypher-pt4',cypher4Sections,cypher4Vocabulary,7],['am-i-wrong',amIWrongSections,amIWrongVocabulary,5]]){
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);
 for(const l of sections.flatMap(s=>s.lines)){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries?.length);assert.ok(l.entries[0].notes?.length);}else assert.ok(l.english);}
 assert.ok(vocab.verbs.length>=20&&vocab.nouns.length>=20);assert.equal(musicCuriosities[id].length,count);
 const result=addMusicCuriosities(id,sections);assert.equal(result.flatMap(s=>s.lines.flatMap(l=>l.entries||[])).filter(e=>e.card).length,count);
 for(const text of [...sections.map(s=>s.title),...sections.flatMap(s=>s.lines.flatMap(l=>[l.translation,...(l.entries||[]).flatMap(e=>[e.meaning,...e.notes])])),...musicCuriosities[id].map(c=>c.card),song.intro,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])]){
  const en=translate(text,'eng');assert.notEqual(en,text,'Missing adaptation '+text);assert.deepEqual((en.match(ko)||[]).sort(),(text.match(ko)||[]).sort());
 }
}
const catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');assert.ok(catalog.includes('"bts cypher 4":"cypher-pt4"'));assert.ok(catalog.includes('"am i wrong":"am-i-wrong"'));
console.log('PASS: Cypher 4 (104 lines) and Am I Wrong (71 lines); repetitions, supplied spellings, bilingual grammar, 12 cards, vocabulary, catalog and 10 exercises.');
