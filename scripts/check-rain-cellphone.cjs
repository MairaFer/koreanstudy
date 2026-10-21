const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['rain','rain',78,['Rain']],['turn-off-your-cellphone','turnOffYourCellphone',66,['Can You Turn Off Your Cellphone?','Could You Turn off Your Cell Phone','핸드폰 좀 꺼줄래','Can You Turn Off Your Cellphone? (핸드폰 좀 꺼줄래)']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));
 assert.ok(vocabulary.verbs.length>=20&&vocabulary.nouns.length>=20);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(x!=='selfie')assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const before=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),before);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='rain'){
  assert.deepEqual(sections.map(s=>s.lines.length),[8,19,4,19,4,16,4,4]);assert.deepEqual(sections[2].lines,sections[4].lines);assert.deepEqual(sections[2].lines,sections[6].lines);
  assert.equal(all[0].text,'(비가 오는 짙은 색 서울 그 위에)');assert.equal(all.at(-1).text,'거긴 아름답지 못한 내가 날 보고 있어');
  assert.equal(all.filter(l=>l.english).length,1);assert.equal(all.find(l=>l.english).text,'Come slow down');
  assert.ok(all.find(l=>l.text==='내 몸을 예상이라도 한 듯 비가 내리고 있네').entries[0].notes[0].includes('몸, corpo'));
  assert.ok(musicCuriosities[id].find(c=>c.term.includes('안단테')).source.includes('yamaha.com'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[6,4,4,8,6,4,8,6,6,4,6,4]);for(const i of [4,8,10])assert.deepEqual(sections[0].lines,sections[i].lines);assert.deepEqual(sections[5].lines,sections[11].lines);
  assert.equal(all.filter(l=>l.text==='핸드폰 좀 꺼줄래').length,9);assert.equal(all[0].text,'핸드폰 좀 꺼줄래');assert.equal(all.at(-1).text,'눌러줘 너의 (찰칵 찰칵) 눌러줘 너의 (찰칵)');
  assert.equal(all.filter(l=>l.english).length,0);assert.ok(all.find(l=>l.text.startsWith('메세지도')).entries[0].notes[0].includes('메시지'));
  assert.ok(all.find(l=>l.text.startsWith('음식을 눈으로')).entries[0].notes[0].includes('estereotipada'));
  assert.ok(all.find(l=>l.text.startsWith('또 업뎃')).entries[0].notes[0].includes('Facebook'));
 }
}
console.log('PASS: Rain 78 lines and Cellphone 66 lines; exact supplied text, repetitions and ending variants; Korean analysis, contextual PT/ENG, 16 unique cards, vocabulary, 10 exercises and catalog aliases.');
