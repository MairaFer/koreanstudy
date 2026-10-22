const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['just-one-day','justOneDay',88,['Just One Day','Just One Day (하루만)','Just One Day (하루만; Haruman)','하루만','Haruman']],['tomorrow','tomorrow',95,['Tomorrow']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='just-one-day'){
  assert.deepEqual(sections.map(s=>s.lines.length),[2,21,5,8,20,4,9,5,8,5,1]);
  for(const i of [7,9])assert.deepEqual(sections[2].lines,sections[i].lines);assert.deepEqual(sections[3].lines,sections[8].lines);assert.deepEqual(sections[5].lines,sections[2].lines.slice(0,4));
  assert.equal(all[0].text,'Yeah yeah');assert.equal(all.at(-1).text,'Can you please stay with me?');assert.equal(all.filter(l=>l.text==='(Do it do it do it)').length,8);
  for(const text of ['너에게 난 그랬음 좋겠다면 이기적일까','꿈 속이라도 하루만',"너와 내가 함께 하고 있다면, let's go time",'너와 하루만 있기를 바래 바래','그래 나팔꽃이 필'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='내 핸드백은 니 허리').entries[0].notes[0].includes('comparação'));assert.ok(all.find(l=>l.text==="너와 내가 함께 하고 있다면, let's go time").entries[0].notes[0].includes('condição'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[10,7,5,7,3,16,7,5,7,1,12,5,7,3]);assert.deepEqual(sections[1].lines,sections[6].lines);
  for(const i of [7,11])assert.deepEqual(sections[2].lines,sections[i].lines);assert.deepEqual(sections[3].lines,sections[8].lines);assert.deepEqual(sections[4].lines,sections[13].lines);
  assert.equal(sections[3].lines[6].text,'포기하지 마 알잖아');assert.equal(sections[12].lines[6].text,'포기하지 마, 알잖아');
  assert.equal(all[0].text,'같은 날, 같은 달');assert.equal(all.at(-1).text,'너무 멀어지진 마 tomorrow');
  for(const text of ['매일매일이 Ctrl+C, Ctrl+V 반복되네','삶은 살아지는 게 아니라 살아내는 것,','내일이오면 밝은 빛이 비추니','이건 정지가 아닌 니 삶을','재생해 모두 보란 듯이'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='가장 어두우니까').entries[0].notes[0].includes('metáfora'));assert.ok(all.find(l=>l.text==='멈추기엔 우린 아직 너무 어려').entries[0].notes[0].includes('어리다'));
 }
}
console.log('PASS: Just One Day 88 lines and Tomorrow 95 lines; complete supplied text, refrains and final comma, hypothetical itinerary, dream contexts, wordplay, pause/playback, PT/ENG coverage, 16 cards, vocabulary, 10 exercises and catalog aliases.');
