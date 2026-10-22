const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['cypher-pt2','cypherPt2',129,['BTS Cypher, Pt. 2: Triptych','BTS Cypher Pt. 2: Triptych','BTS Cypher Pt.2: Triptych','Cypher Pt. 2: Triptych']],['spine-breaker','spineBreaker',92,['Spine Breaker','Spine Breaker (등골브레이커)','Spine Breaker (등골브레이커; Deung-Gol Beuleikeo)','등골브레이커']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='cypher-pt2'){
  assert.deepEqual(sections.map(s=>s.lines.length),[19,60,9,41]);
  assert.equal(all[0].text,'누구 때문에? 제이홉 때문에');assert.equal(all.at(-1).text,'난 니 음악의 커리어 동맥에 마침표를 그어');
  for(const text of ['내가 다이서라면 임마 난 다이스 다 있어','여긴 왕국, 나는 킹 너는 덤','나는 바느질 좀 잘해, 실 천해','넌 그냥 연 해 말했잖아 실 없어','오렴 PM니가 가라 하와이PM 집에 가렴','니 fen 보다 많은 pen 과소비','호위가 권리인 줄 아는','꾸준히 쭉 썩어 아마 니들 꼬리표는 아마','추어 같은 인생 너희 랩은 아나바다'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='여긴 왕국, 나는 킹 너는 덤').entries[0].notes[0].includes('kingdom'));
  assert.ok(all.find(l=>l.text==='오렴 PM니가 가라 하와이PM 집에 가렴').entries[0].notes[0].includes('marcador estranho'));
  assert.ok(all.find(l=>l.text==='니 fen 보다 많은 pen 과소비').entries[0].notes[0].includes('grafia'));
  assert.ok(all.find(l=>l.text==='내가 뜰 때면 지니까').entries[0].notes[0].includes('뜨다'));
  assert.equal(all.filter(l=>l.text==='다시 누구 때문에 슈가 때문에').length,2);
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[6,21,5,8,24,5,10,5,8]);assert.deepEqual(sections[3].lines,sections[8].lines);
  assert.equal(all.filter(l=>l.text==='(La la la la la la la la la)').length,11);
  assert.equal(sections[2].lines[4].text,'그게 너의 맘을 조여버릴 거야, dirty clothes');
  assert.equal(sections[5].lines[4].text,'그게 너의 맘을 조여버릴 거야 dirty clothes');
  assert.equal(sections[7].lines[4].text,'그게 너의 맘을 조여 버릴거야 dirty clothes');
  assert.equal(all[0].text,'(La la la la la la la la la)');assert.equal(all.at(-1).text,'빌어먹을 등골브레이커');
  for(const text of ['신은 자와 없는 자','속 빈 강정뿐인 말들을 왜 계속해','(And I say) 은따 되기 싫음 살 수밖에','부모님 등골 안 부셔','너도 dirty clothes 나도 dirty clothes','체해, 후회해'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='신은 자와 없는 자').entries[0].notes[0].includes('신다'));
  assert.ok(all.find(l=>l.text==='너도 dirty clothes 나도 dirty clothes').entries[0].notes[0].includes('própria voz'));
  assert.ok(all.find(l=>l.text==='부모님 등골 안 부셔').entries[0].notes[0].includes('부숴'));
 }
}
console.log('PASS: Cypher Pt.2 129 lines and Spine Breaker 92 lines; complete fixtures, literal transcription oddities, wordplay, shifting perspectives, repeated hook variants, PT/ENG coverage, 16 cards, vocabulary, 10 exercises and catalog aliases.');
