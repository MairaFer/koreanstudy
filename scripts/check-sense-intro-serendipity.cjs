const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['does-that-make-sense','doesThatMakeSense',35,['Does That Make Sense? (Outro)','Outro: Does That Make Sense?','Outro : Do You Think It Makes Sense?','그게 말이 돼? (Outro)','그게 말이 돼?']],['intro-serendipity','introSerendipity',27,['Intro: Serendipity','Intro : Serendipity','Intro: Serendipity (세렌디피티)','세렌디피티']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='does-that-make-sense'){
  assert.deepEqual(sections.map(s=>s.lines.length),[4,1,4,3,4,8,4,3,4]);assert.deepEqual(sections[0].lines,sections[8].lines);assert.deepEqual(sections[2].lines,sections[6].lines);
  assert.equal(all[0].text,'I rewind my girl baby come back to my world');assert.equal(all.at(-1).text,'I rewind my girl come back');assert.equal(all.filter(l=>l.text==='I rewind my girl come back').length,4);
  assert.equal(sections[3].lines[2].text,'니가 죽을 만큼 밉지만 지금도 니 생각이 나는 걸');assert.equal(sections[7].lines[2].text,'니가 죽을 만큼 밉지만 지금도 니 생각이 나는걸');
  assert.equal(all.filter(l=>l.text.includes('it doesn’t make sense')).length,4);assert.ok(all.find(l=>l.text.startsWith('그땐 영원')).entries[0].notes[0].includes('expectativa'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[8,8,5,4,2]);assert.equal(all[0].text,'이 모든건 우연이 아냐');assert.equal(all.at(-1).text,'Let me love, let me love you');
  for(const text of ['네가 날 불렀을 때 나는 너의 꽃으로','기다렸던 것 처럼 우리 시리도록 펴','You know, I know 너는 나, 나는 너','날 구원해준 나의 천사 나의 세상','우주가 처음 생겨났을 때부터 모든 건 정해진 거였어'])assert.ok(all.some(l=>l.text===text));
  assert.equal(all.filter(l=>l.text==='Just let me love you (let me, love, let me love you)').length,3);assert.equal(all.filter(l=>l.text==='Let me love, let me love you').length,2);
  assert.equal(lookup('Serendipity (Full Length Edition)'),'serendipity');assert.equal(lookup('Serendipity'),'serendipity');assert.notDeepEqual(all,require('../lib/serendipity.ts').serendipitySections.flatMap(s=>s.lines));
 }
}
console.log('PASS: Does That Make Sense 35 lines and Intro Serendipity 27 lines; supplied text, spacing and response vocals, full-length distinction, Korean analysis, PT/ENG adaptation, 16 cards, vocabulary, 10 exercises and catalog links.');
