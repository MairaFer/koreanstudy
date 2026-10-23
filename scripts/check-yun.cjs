const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['yun','yun',70,['Yun','Yun (with Erykah Badu)','Yun (feat. Erykah Badu)']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[18,4,12,20,4,12]);
 assert.deepEqual(sections[1].lines,sections[4].lines);assert.deepEqual(sections[2].lines,sections[5].lines.map((l,i)=>i===11?{...l,text:l.text.replace('madness?','madness'),translation:sections[2].lines[i].translation}:l));
 assert.equal(all[0].text,'Fuck the trendsetter');assert.equal(all.at(-1).text,'Now you could feel my madness?');
 const frequency=t=>all.filter(l=>l.text===t).length;assert.equal(frequency('I wanna be a human'),4);assert.equal(frequency('You keep the silence'),2);assert.equal(frequency('Now you could feel my madness'),3);assert.equal(frequency('Now you could feel my madness?'),1);
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('팀 빠진 넌 사실 뭣도 아니야 너는').includes('não uma avaliação'));assert.ok(note('사선을 오갔던 생과').includes('vida e morte'));assert.ok(note('재를 뿌린 그 위에 시를 쓰네').includes('cinza, não riqueza'));assert.ok(note('예술 할 생각 말고 놀아 느껴 희로애락').includes('alegria, raiva, tristeza e prazer'));
 assert.equal(lookup('Yun (Live)'),undefined);assert.equal(lookup('Shine (Yunki Theme)'),undefined);
 const catalog=JSON.parse(fs.readFileSync('lib/discography.json','utf8')),track=catalog.find(a=>a.artist==='RM'&&a.title==='Indigo').tracks.find(t=>t.title==='Yun (with Erykah Badu)');assert.ok(track);assert.equal(lookup(track.title),'yun');
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('yunhyongkeun.org')));assert.ok(musicCuriosities[id].some(c=>c.source?.includes('bible.usccb.org')));
}
console.log('PASS: Yun, 70 supplied lines, 6 sections, all refrain/interlude repeats and final question, pressure/response, cultural references, PT/ENG coverage, 8 cards, vocabulary, 5 exercises and Indigo catalog link.');
