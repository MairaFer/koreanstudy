const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['skit-soulmate','skitSoulmate',49,['Skit: Soulmate','Skit : Soulmate']],['where-you-from','whereYouFrom',75,['Where You From','Where Did You Come From?','Where Did You Come From? (어디에서 왔는지; Eodieseo Wassneunji)','어디에서 왔는지']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(!['Aah, kyaah!','Kyaah, tyaaah!','Hahaha!','Hahaha.','Busan','Gwangju'].includes(x))assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='skit-soulmate'){
  assert.deepEqual(sections.map(s=>s.lines.length),[11,10,28]);assert.equal(all[0].text,'Oh, man 아, 제생각엔 저 저 빨간, 짤간, 빨간불이 들어오면@*!@4#');assert.equal(all.at(-1).text,'아니, 앞에 한마디...');
  for(const text of ['아잇쯔이짧응아앍-','내가 오늘 너를 주..주 오인조로 활동이라니','그럼...가시죠 이ㅈ.이제','~(노크)엏!','추천해주세여~'])assert.ok(all.some(l=>l.text===text));
  assert.equal(all.filter(l=>l.text==='네?').length,2);assert.ok(all.every(l=>!l.english));assert.ok(all.find(l=>l.text==='아 방탄 다섯명으로 활동하겠습니다').entries[0].notes[0].includes('piada'));
  assert.equal(lookup('Skit'),undefined);assert.equal(lookup('Skit (BE)'),'skit-be');
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[8,11,8,4,8,9,8,7,8,4]);assert.deepEqual(sections[2].lines,sections[6].lines);assert.deepEqual(sections[2].lines,sections[8].lines);assert.deepEqual(sections[3].lines,sections[9].lines);
  assert.equal(all[0].text,'가시나야 니는 어데서 왔노');assert.equal(all.at(-1).text,'다 사랑을 하잖아 oh yeah');assert.equal(all.filter(l=>l.text==='너 어디에서 왔는지').length,6);
  for(const text of ['점만 그냥 얼라다 니 금마 때매 이카나?','호석이같은 머스마는 천지 삐까리다, 쌔리삐다','고마 쫌 팅기라, 궁디를 주차뿌기 전에','시방 지금 날 좋아해, 거시기 거시기해?','지금 니 맘은 온통 다, 호시기 호시기해?'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='밥 뭇나? 까대기 치는 거 아이다').entries[0].notes[0].includes('밥 먹었니?'));
  assert.ok(all.find(l=>l.text==='커피나 한사바리 땡길까? 커피는 개안나?').entries[0].notes[0].includes('괜찮니?'));
  assert.ok(all.find(l=>l.text==='왔다 해도 난 상관없어').entries[0].notes[0].includes('hipótese'));
 }
 assert.ok(!JSON.stringify(sections).includes('Amazon Music'));
}
console.log('PASS: Soulmate 49 supplied turns and Where You From 75 lines; garbled speech and laughter, dialect bridges, refrains, grammatical perspectives, PT/ENG adaptation, 16 cards, vocabulary, 10 exercises and exact catalog aliases.');
