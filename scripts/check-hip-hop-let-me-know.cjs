const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['hip-hop-lover','hipHopLover',109,['Hip Hop Lover','Hip-Hop Lover','Hip Hop Phile','힙합성애자','Hip Hop Lover (힙합성애자)']],['let-me-know','letMeKnow',104,['Let Me Know']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));
 assert.ok(vocabulary.verbs.length>=20&&vocabulary.nouns.length>=20);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0);}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 const properNames=new Set(['Gang Starr, Black Star, Eric B...','Mac Miller, Kanye, Kendrick.']);
 for(const x of localized){const en=translate(x,'eng');if(!properNames.has(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const enhanced=addMusicCuriosities(id,sections);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='hip-hop-lover'){
  assert.deepEqual(sections[1].lines,sections[3].lines);assert.deepEqual(sections[1].lines,sections[5].lines);
  assert.equal(all[0].text,'It was a new world');assert.equal(all.at(-1).text,'(Hip! Hop!) Yeah this ma (Hip! Hop!)');
  assert.ok(all.find(l=>l.text.startsWith('날 던지고')).entries[0].notes[0].includes('fio'));
  assert.ok(all.find(l=>l.text==='받는 언수외 대신해서').entries[0].notes[0].includes('언어, 수리, 외국어'));
  assert.ok(musicCuriosities[id].some(c=>c.source?.includes('koreanculture.org')));
 }else{
  assert.deepEqual(sections[0].lines,sections[2].lines);assert.deepEqual(sections[0].lines,sections[6].lines);
  assert.deepEqual(sections[3].lines,sections[7].lines);assert.deepEqual(sections[3].lines,sections[10].lines);
  assert.equal(all[0].text,'마무리 된 이 선율 위에서');assert.equal(all.at(-1).text,'(Let me know)');
  assert.equal(all.filter(l=>l.text==='Girl let me know').length,18);
  assert.ok(all.some(l=>l.text==='Know know know (know, I just wanna know)'));
  assert.ok(all.find(l=>l.text==='상상속에서 너와 싸우고와').entries[0].notes[0].includes('imaginação'));
 }
}
console.log('PASS: Hip Hop Lover 109 lines; Let Me Know 104 lines; exact text and repetitions, Korean analysis, adapted PT/ENG, vocabulary, 16 unique cards, 10 exercises and original-version catalog routing.');
