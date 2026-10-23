const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['still-life','stillLife',59,['Still Life','Still Life (with Anderson .Paak)','Still Life (feat. Anderson .Paak)']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[4,7,8,12,16,12]);assert.deepEqual(sections[3].lines,sections[5].lines);
 assert.equal(all[0].text,"I'm still life");assert.equal(all.at(-1).text,'Yo I never stop bay, let\'s get it now');
 const freq=t=>all.filter(l=>l.text===t).length;assert.equal(freq("I'm still life"),8);assert.equal(freq('멈추지 않는 정물'),5);assert.equal(freq('또 피워 나의 꽃을'),3);assert.equal(freq("I'm still life, but I'm movin'"),4);
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 for(const t of ['과건 가버렸고 미랜 모르네','가진 전불 다 걸어 What you know about me, huh?','바램관 달리 너무 잘 살아대네 내 뜻대로 Huh','91 look at my 탄탄대로'])assert.ok(all.some(l=>l.text===t));
 assert.ok(note('가진 전불 다 걸어 What you know about me, huh?').includes('forma recebida'));assert.ok(note('91 look at my 탄탄대로').includes('não se resolve'));assert.ok(note('또 피워 나의 꽃을').includes('피우다'));assert.ok(note('계속 전시되는 내 삶').includes('passiva'));
 const catalog=JSON.parse(fs.readFileSync('lib/discography.json','utf8')),track=catalog.find(a=>a.artist==='RM'&&a.title==='Indigo').tracks.find(t=>t.title==='Still Life (with Anderson .Paak)');assert.ok(track);assert.equal(lookup(track.title),'still-life');assert.equal(lookup('Still Life (Instrumental)'),undefined);
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('bts-official.jp')));
}
console.log('PASS: Still Life, 59 exact supplied lines, all repetitions, art/road wordplay, supplied spellings, unresolved 91, PT/ENG coverage, 8 cards, vocabulary, 5 exercises and Indigo catalog link.');
