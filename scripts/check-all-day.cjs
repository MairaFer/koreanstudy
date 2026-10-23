const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['all-day','allDay',71,['All Day','All Day (with TABLO)','All Day (feat. Tablo)']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[17,11,22,12,9]);
 assert.equal(all[0].text,'Okay');assert.equal(all.at(-1).text,'We know we fly all day');
 const freq=t=>all.filter(l=>l.text===t).length;assert.equal(freq('All day'),8);assert.equal(freq('Okay, okay'),6);assert.equal(freq("Okay, okay (Let's go)"),2);assert.equal(freq('You gotta believe it'),3);
 assert.ok(sections[1].lines.some(l=>l.text==="I'm diggin' all day"));assert.ok(sections[1].lines.some(l=>l.text==="I'm findin' real me"));assert.ok(sections[1].lines.some(l=>l.text==="I'm singin' all day"));assert.ok(sections[3].lines.some(l=>l.text==="I'm fightin' all day"));assert.ok(sections[3].lines.some(l=>l.text==="I'm livin' my way"));assert.equal(sections[3].lines.at(-1).text,'Live your life');
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('요즘 광고는 똑같애').includes('똑같아'));assert.ok(note('어서 접어 Origami').includes('abandonar uma intenção'));assert.ok(note('죄다 중립 기어').includes('ponto morto'));assert.ok(note('어디서 감히 생각을 말해').includes('voz que reprime'));assert.ok(note('언제쯤 써보게 될까 나만의 시는').includes('poema, não hora'));
 for(const t of ['꺼져 인공지능 Fuck the algorithm','사색이 필요해 Fuck all the rhythm','사유할 틈을 안 주는 내 바이오리듬','They got you by your balls & your socioeconomics','We got dynamite in our DNA'])assert.ok(all.some(l=>l.text===t));
 const catalog=JSON.parse(fs.readFileSync('lib/discography.json','utf8')),track=catalog.find(a=>a.artist==='RM'&&a.title==='Indigo').tracks.find(t=>t.title==='All Day (with TABLO)');assert.ok(track);assert.equal(lookup(track.title),'all-day');assert.equal(lookup('All Day (Live)'),undefined);
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('krdict.korean.go.kr')));
}
console.log('PASS: All Day, 71 exact supplied lines, changing chorus actions, final encouragement, thought/origami/neutral gear wordplay, PT/ENG coverage, 8 cards, vocabulary, 5 exercises and Indigo catalog link.');
