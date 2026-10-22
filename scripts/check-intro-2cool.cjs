const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['intro-2-cool-4-skool','intro2Cool4Skool',19,['Intro: 2 Cool 4 Skool','Intro : 2 Cool 4 Skool','Intro:2 Cool 4 Skool','Intro: 2 Cool 4 Skool (feat. DJ Friz)','Intro : 2 COOL 4 SKOOL feat.DJ Friz']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length===4&&vocabulary.nouns.length===8);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(!['DJ Friz.','B-A-N-G-T-A-N.'].includes(x))assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[3,5,1,5,5]);assert.deepEqual(sections[3].lines,sections[4].lines);
 assert.equal(all[0].text,"We're now going to progress to some steps");assert.equal(all.at(-1).text,'You take that');
 assert.equal(all.filter(l=>l.text==='2 cool, 2 cool 4 school').length,4);assert.equal(all.filter(l=>l.text==='10대 20대').length,2);
 assert.equal(all.filter(l=>l.text==='대신해 쉽게 우리 얘길해').length,2);assert.equal(all.filter(l=>l.english).length,14);
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 const ages=all.find(l=>l.text==='10대 20대');assert.ok(ages.entries.find(e=>e.term==='10대').notes.join(' ').includes('dez aos dezenove'));assert.ok(ages.entries.find(e=>e.term==='20대').notes.join(' ').includes('vinte aos vinte e nove'));
 const msg=all.find(l=>l.text==='대신해 쉽게 우리 얘길해');assert.deepEqual(msg.entries.map(e=>e.term),['대신해','쉽게','우리','얘길해']);
 assert.ok(msg.entries.find(e=>e.term==='얘길해').notes[0].includes('얘기를 → 얘길'));assert.ok(msg.entries.find(e=>e.term==='쉽게').notes[0].includes('쉽다 + -게'));
 assert.equal(lookup('2 Cool 4 Skool'),undefined);assert.equal(lookup('Intro: Skool Luv Affair'),'intro-skool-luv-affair');
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('2_cool_4_school.html')));
}
console.log('PASS: Intro: 2 Cool 4 Skool, all 19 supplied lines, identical repeated refrain, English names retained, Korean age ranges and contraction, 8 cards, concise vocabulary, 5 exercises and exact catalog aliases.');
