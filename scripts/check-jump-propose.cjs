const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['jump','jump',107,['Jump']],['outro-propose','outroPropose',35,['Outro: Propose','Outro : Propose','Outro:Propose','Outro - Propose','Propose']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=(id==='outro-propose'?13:20));assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='jump'){
  assert.deepEqual(sections.map(s=>s.lines.length),[8,1,8,9,10,8,1,8,11,10,8,8,8,9]);
  for(const i of [5,10])assert.deepEqual(sections[0].lines,sections[i].lines);
  assert.deepEqual(sections[2].lines,sections[7].lines);assert.deepEqual(sections[1].lines,sections[6].lines);
  const ending=sections.at(-1).lines;assert.equal(ending.length,9);
  for(const i of [0,3,6])assert.deepEqual(ending.slice(i,i+3),sections[2].lines.slice(0,3));
  assert.ok(!ending.some(l=>l.text.includes('ju-ju')));
  assert.equal(all.filter(l=>l.text==="Let's jump! jump! ju-ju-ju-jump!").length,4);
  assert.equal(all[0].text,"(Let's jump!)");assert.equal(all.at(-1).text,"(Let's jump!) 근심 걱정은 뒤로");
  for(const text of ['넌 어른이 되어가지만 I wanna rewind','내 인생이 바뀐 2007년','또 그렇게 노래 부른지도 7년','모두 다 놀라게 jump like Jordan','순수했던 꿈들로 날 수놓아','비로소 만났지 우린 영웅 지망생 랩퍼','두 어깨를 피고 rock your body','That I.. stop'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='두 어깨를 피고 rock your body').entries[0].notes[0].includes('펴고'));
  assert.ok(all.find(l=>l.text==='트램폴린 대신 내가 뛰어야 하는').entries[0].notes[0].includes('necessidade'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[7,5,4,9,7,3]);assert.deepEqual(sections[0].lines,sections[4].lines);
  assert.equal(all[0].text,'I give it to you');assert.equal(all.at(-1).text,'Good to you');
  assert.equal(all.filter(l=>l.text==='I give it to you').length,4);assert.equal(all.filter(l=>l.text==='(Good to you)').length,5);
  for(const text of ['단발에 너무 예쁜 교복','때론 울고 웃어주는','나에겐 너뿐이란 걸','내겐 너 뿐야','내가 멀리 있어도','힘든 내일이 와도','내 손 잡아줘'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='단발에 너무 예쁜 교복').entries[0].notes[0].includes('cabelo'));
  assert.ok(all.find(l=>l.text==='널 위해 불러줄게').entries[0].notes[0].includes('oferece'));
  assert.ok(all.find(l=>l.text==='내 손 잡아줘').entries[0].notes[0].includes('pedido'));
 }
}
console.log('PASS: Jump 107 lines and Outro: Propose 35 lines; complete supplied text, repeated hooks and three-line finale, childhood/stage imagery, spelling notes, offer/request/concession distinctions, PT/ENG coverage, 16 cards, vocabulary, 10 exercises and catalog aliases.');
