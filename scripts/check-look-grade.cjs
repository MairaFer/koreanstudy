const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['look-here','lookHere',86,['Look Here','Look Here (여기 봐)','여기 봐','여기봐']],['2nd-grade','secondGrade',107,['2nd Grade','2nd Grade (2학년)','2학년','Second Grade','So 4 More']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=20&&vocabulary.nouns.length>=20);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(x!=='Ah, shh, uh.')assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='look-here'){
  assert.deepEqual(sections.map(s=>s.lines.length),[8,4,4,7,8,9,4,4,7,16,7,8]);
  for(const[a,b]of [[1,6],[2,7],[3,8],[3,10],[4,11]])assert.deepEqual(sections[a].lines,sections[b].lines);
  assert.equal(all[0].text,'처음에는 단지 호기심으로');assert.equal(all.at(-1).text,'여기 봐');assert.equal(all.filter(l=>l.text==='여기 봐 도망가지 마').length,15);
  for(const text of ['호시탐탐 너의 빈자리를 노려 토끼굴 그래피티','너를 만난 건 내 바램이었어','너 몸무겐 99킬로','Mini – 넌 비키니와 마티니 또 Mercedes 참 멋지지','너무 이미 니가 지치니 stop that eenie menie miny'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='조만간 니가 날 원할 테니까').entries[0].notes[0].includes('não prova reciprocidade'));
  assert.ok(all.find(l=>l.text==='우쭈쭈 그랬쪄 해줘 Get it?').entries[0].notes[0].includes('não afirma que o recebeu'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[10,28,4,10,17,4,10,14,10]);
  for(const i of [3,6,8])assert.deepEqual(sections[0].lines,sections[i].lines);assert.deepEqual(sections[2].lines,sections[5].lines);
  assert.equal(all[0].text,'눈 깜짝할 새 2학년이 돼');assert.equal(all.at(-1).text,'(Still everyday) Bang it bang it, bang it bang it');
  for(const text of ['마음의 키만 컸으','일단 내 하고픈 대로 할게 날 좀 냅둬여','눈 깜빡 할 새 시간은 빠르게 (Go go)','꼭꼭 숨어라 내 잔머리가 다 보일라','Get the out'])assert.ok(all.some(l=>l.text===text));
  assert.ok(all.find(l=>l.text==='이건 새 시대 시발점').entries[0].notes[0].includes('ponto de partida'));
  assert.ok(all.find(l=>l.text==='받아 새 후배들 인사도').entries[0].notes[0].includes('não só pela idade'));
 }
}
console.log('PASS: Look Here 86 lines and 2nd Grade 107 lines; supplied text and refrains, school metaphor, predictions, wordplay and spelling notes, PT/ENG coverage, 16 cards, vocabulary, 10 exercises and catalog aliases.');
