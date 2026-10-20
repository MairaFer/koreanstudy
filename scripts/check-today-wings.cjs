const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {notTodaySections,notTodayVocabulary}=require('../lib/not-today.ts'),{outroWingsSections,outroWingsVocabulary}=require('../lib/outro-wings.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=notTodaySections.flatMap(s=>s.lines),b=outroWingsSections.flatMap(s=>s.lines);
assert.equal(a.length,92);assert.equal(b.length,66);assert.equal(a.filter(l=>l.english).length,36);assert.equal(b.filter(l=>l.english).length,29);
assert.equal(a[0].text,'All the underdogs in the world');assert.equal(a.at(-1).text,'총! 조준! 발사!');assert.equal(b[0].text,'Take me to the sky');assert.equal(b.at(-1).text,'If my wings could fly');
for(const [text,n] of [['Hey 뱁새들아 다 hands up',3],['Hey 친구들아 다 hands up',3],['Hey 나를 믿는다면 hands up',3],['총! 조준! 발사!',6],['죽지 않아 묻지 마라',3],['꿇지 마라 울지 않아',3],['Hey not not today',9],['Together we won\'t die',2]])assert.equal(a.filter(l=>l.text===text).length,n,text);
for(const [text,n] of [['Spread spread spread my wings',4],['La la la la la la, la la la la la la',4],['If my wings could fly',3],['날아 나 날아 난 날아가',2],['이제 알겠어',1]])assert.equal(b.filter(l=>l.text===text).length,n,text);
assert.ok(b.some(l=>l.text==='날 널 믿어 지금은 미약할지언정'));assert.ok(b.some(l=>l.text==='조건 없는 믿음을 가지겠어'));assert.deepEqual(outroWingsSections.at(-1).lines,outroWingsSections[6].lines);
assert.ok(a.find(l=>l.text==='날아갈 수 없음 뛰어').entries[0].notes.join().includes('없으면'));assert.ok(a.find(l=>l.text==='걸어갈 수 없음 기어').entries[0].notes.join().includes('기다리다'));
assert.ok(b.find(l=>l.text==='어릴 적의 날 기억해').entries[0].notes.join().includes('나를'));
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,sections,vocab,n] of [['not-today',notTodaySections,notTodayVocabulary,7],['outro-wings',outroWingsSections,outroWingsVocabulary,5]]){
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=20&&vocab.nouns.length>=20);
 for(const l of sections.flatMap(s=>s.lines)){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries?.length&&l.entries[0].notes?.[0]);}else assert.ok(l.english);}
 const withCards=addMusicCuriosities(id,sections);assert.equal(withCards.flatMap(s=>s.lines.flatMap(l=>l.entries||[])).filter(e=>e.card).length,n);assert.deepEqual(addMusicCuriosities(id,withCards),withCards);
 for(const x of [...sections.map(s=>s.title),...sections.flatMap(s=>s.lines.flatMap(l=>[l.translation,...(l.entries||[]).flatMap(e=>[e.meaning,...e.notes])])),...musicCuriosities[id].map(c=>c.card),song.intro,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])]){assert.ok(x);const e=translate(x,'eng');assert.notEqual(x,e,'Missing adaptation '+x);assert.deepEqual((x.match(ko)||[]).sort(),(e.match(ko)||[]).sort());}
}
const source=fs.readFileSync('components/bts-catalog.tsx','utf8');const expression=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0];const studyFor=new Function(ts.transpileModule(expression,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
assert.equal(studyFor('Not Today'),'not-today');assert.equal(studyFor('Outro: Wings'),'outro-wings');assert.equal(studyFor('Outro : Wings'),'outro-wings');assert.equal(studyFor('Interlude: Wings'),undefined);assert.equal(studyFor('Outro : Wings (Live)'),undefined);assert.equal(studyFor('Not Today (Japanese Ver.)'),undefined);
console.log('PASS: Not Today (92 lines) and Outro: Wings (66 lines); all repetitions, final Outro bridge, supplied wording, bilingual grammar, 12 cards, vocabulary, precise catalog aliases and 10 exercises.');
