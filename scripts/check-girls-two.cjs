const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {centuryGirlSections,centuryGirlVocabulary}=require('../lib/21st-century-girl.ts'),{twoThreeSections,twoThreeVocabulary}=require('../lib/two-three.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=centuryGirlSections.flatMap(s=>s.lines),b=twoThreeSections.flatMap(s=>s.lines);
assert.equal(a.length,64);assert.equal(b.length,80);assert.equal(a.filter(l=>l.english).length,34);assert.equal(b.filter(l=>l.english).length,3);
assert.equal(a[0].text,'You worth it you perfect');assert.equal(a.at(-1).text,'Now scream');assert.equal(b[0].text,'Been trying to tell you this');assert.equal(b.at(-1).text,'서로 손을 잡고 웃어');
for(const [text,n] of [['All my ladies put your hands up',8],['21세기 소녀 hands up',4],['20세기 소녀들아',2],['말해 너는 강하다고',2],['말해 넌 충분하다고',2]])assert.equal(a.filter(l=>l.text===text).length,n,text);
for(const [text,n] of [['괜찮아 자 하나 둘 셋 하면 잊어',8],['슬픈 기억 모두 지워',8],['내 손을 잡고 웃어',4],['서로 손을 잡고 웃어',4],['그래도 좋은 날이 앞으로 많기를',3],['그래도 좋은 날이 훨씬 더 많기를',3],['믿는다면 하나 둘 셋',9],['믿는다면 둘 셋 say!',1]])assert.equal(b.filter(l=>l.text===text).length,n,text);
assert.ok(b.find(l=>l.text==='꽃길만 걷자').entries[0].notes.join().includes('recusada'));
assert.ok(b.find(l=>l.text==='(So thanks) 이런 날 믿어줘서').entries[0].notes.join().includes('나를'));
assert.ok(b.find(l=>l.text==='너네 가사 맘에 안 들어 안 봐도 비디오네').entries[0].notes.join().includes('expressão'));
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,sections,vocab,n] of [['21st-century-girl',centuryGirlSections,centuryGirlVocabulary,5],['two-three',twoThreeSections,twoThreeVocabulary,6]]){
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=20&&vocab.nouns.length>=20);
 for(const l of sections.flatMap(s=>s.lines)){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries?.length&&l.entries[0].notes?.[0]);}else assert.ok(l.english);}
 const withCards=addMusicCuriosities(id,sections);assert.equal(withCards.flatMap(s=>s.lines.flatMap(l=>l.entries||[])).filter(e=>e.card).length,n);assert.deepEqual(addMusicCuriosities(id,withCards),withCards);
 for(const x of [...sections.map(s=>s.title),...sections.flatMap(s=>s.lines.flatMap(l=>[l.translation,...(l.entries||[]).flatMap(e=>[e.meaning,...e.notes])])),...musicCuriosities[id].map(c=>c.card),song.intro,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])]){assert.ok(x);const e=translate(x,'eng');assert.notEqual(x,e,'Missing adaptation '+x);assert.deepEqual((x.match(ko)||[]).sort(),(e.match(ko)||[]).sort());}
}
const catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');assert.ok(catalog.includes('"21st century girl":"21st-century-girl"'));assert.ok(catalog.includes('"2! 3!":"two-three"'));
console.log('PASS: 21st Century Girl (64 lines) and 2! 3! (80 lines); all repetitions, contextual bilingual grammar, native/Sino-Korean numbers, wishes, 11 cards, vocabulary, catalog aliases and 10 exercises.');
