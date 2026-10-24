const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of  [["lonely","lonely",39,["Lonely"]],["hectic","hectic",67,["Hectic","Hectic (with Colde)","Hectic (feat. Colde)"]],["wild-flower","wildFlower",91,["Wild Flower","Wild Flower (with youjeen)","Wild Flower (들꽃놀이)","들꽃놀이"]],["no2","no2",52,["No.2","No.2 (with parkjiyoon)","No. 2 (with parkjiyoon)"]]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=(id==='lonely'?10:15)&&vocabulary.nouns.length>=(id==='lonely'?12:15));assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 const freq=t=>all.filter(l=>l.text===t).length;
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 if(id==='lonely'){
  assert.deepEqual(sections.map(s=>s.lines.length),[4,7,4,4,8,4,4,4]);
  assert.equal(freq('나 혼자 섬에'),4);assert.equal(freq('Somebody call me'),3);assert.equal(freq('Somebody love me'),1);assert.equal(all.at(-1).text,'Somebody love me');
  assert.equal(sections[1].lines[2].text,'싫어 이 Hotel room');assert.equal(sections[1].lines[3].text,'에 혼자 떠있어');assert.ok(note('에 혼자 떠있어').includes('Hotel room'));
  assert.ok(note('나 모든 게 싫어졌어').includes('mudança'));assert.ok(note('빨갛게 돌아가는 나의 물랑루즈').includes('Moulin Rouge'));
 }else if(id==='hectic'){
  assert.deepEqual(sections.map(s=>s.lines.length),[8,8,7,8,6,7,8,8,7]);assert.deepEqual(sections[0].lines,sections[3].lines);assert.deepEqual(sections[0].lines,sections[6].lines);assert.deepEqual(sections[2].lines,sections[5].lines);
  assert.equal(all.at(-1).text,'We still love and hate this city, yeah');assert.equal(freq('Yesterday was a hectic'),6);assert.ok(note('더 이상 길을 잃고 싶지 않은 날').includes('나를'));assert.ok(note('적어 내려갔던 시도').includes('poema'));
 }else if(id==='wild-flower'){
  assert.deepEqual(sections.map(s=>s.lines.length),[9,20,6,25,6,10,6,9]);assert.deepEqual(sections[2].lines,sections[4].lines);assert.deepEqual(sections[2].lines,sections[6].lines);
  assert.equal(freq('Light a flower, flowerwork'),6);assert.equal(freq('Flower, flowerwork'),6);assert.equal(freq('내가 내가 아닐 때'),1);assert.equal(freq('내가 내가 아닌 때'),1);assert.equal(all.at(-1).text,'그 모든 때');
  assert.ok(all.every(l=>!/^\[.*:\]$/.test(l.text)));assert.ok(note('오 나를 나로 하게 하소서').includes('-소서'));assert.ok(note('이 모든 명예가 이젠 멍에가 됐을 때').includes('jugo'));assert.ok(note('반갑지 않아 너의 헹가래').includes('celebração'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[8,20,8,8,8]);assert.equal(freq('최선을 넌 다했을 뿐야'),1);assert.equal(freq('최선을 넌 다했을 뿐이야'),2);assert.equal(freq('이젠 니가 널 지켜줄 거야'),3);
  assert.ok(all.every(l=>!l.text.includes('English translation')&&!l.text.startsWith('My love,')));assert.equal(all.at(-1).text,'이젠 니가 널 지켜줄 거야');assert.ok(note('어느 길이던 아쉬움 없을까, mm-mm').includes('길이든'));assert.ok(note('터지고 안 건 그 안은 텅 비어있었단 거').includes('알다'));
 }
 const catalog=JSON.parse(fs.readFileSync('lib/discography.json','utf8')),album=catalog.find(a=>a.artist==='RM'&&a.title==='Indigo');const actual={lonely:'Lonely',hectic:'Hectic (with Colde)','wild-flower':'Wild Flower (with 조유진)',no2:'No.2 (with 박지윤)'}[id];assert.ok(album.tracks.some(t=>t.title===actual));assert.equal(lookup(actual),id);for(const suffix of [' (Live)',' (Remix)',' (Japanese Ver.)',' (Instrumental)'])assert.equal(lookup(actual+suffix),undefined);
}
console.log('PASS: Lonely 39, Hectic 67, Wild Flower 91 and No.2 52 exact original lines; chorus variants, speaker sections, no duplicate supplied translation, Korean grammar, PT/ENG coverage, 32 cards, vocabulary, 20 exercises and exact catalog aliases.');
