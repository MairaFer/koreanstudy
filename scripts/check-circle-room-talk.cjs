const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['skit-circle-room-talk','skitCircleRoomTalk',68,['Skit: Circle Room Talk','Skit : Circle Room Talk','Skit:Circle Room Talk']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(x!=='Suga: Jungkook!')assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[6,10,15,14,13,10]);
 assert.equal(all[0].text,'Rap Monster: 대박이었다니까 그때는 그게');assert.equal(all.at(-1).text,'J-Hope: 알겠습니다');
 assert.equal(all.filter(l=>l.text==='Rap Monster: 우리 아빠 욕하지마').length,2);
 assert.equal(all.filter(l=>l.english).length,1);assert.equal(all.find(l=>l.english).text,'(Door knocking)');
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text,'Speaker or original changed');
 for(const text of ['V: (2006년!)','V:저 3년간 색소폰했었어요','Rap Monster/Suga/V: ... 없어','Jimin: ㅋㅋㅋㅋ','BTS: ㅋㅋㅋㅋㅋㅋㅋㅋㅋ','Rap Monster: 방금, 방금 전적 들었냐 방금','Jimin: 1초 정적','Jungkook: 저요? 아... 저 기억 잘 안나는데','Rap Monster: (들어갈게요 들어갈게요 들어갈게요)'])assert.ok(all.some(l=>l.text===text));
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('Rap Monster: 방금, 방금 전적 들었냐 방금').includes('정적'));assert.ok(note('Rap Monster: 방금, 방금 전적 들었냐 방금').includes('contextual'));
 assert.ok(note('Jimin: 한명도 없어요ㅋㅋㅋㅋ').includes('negação'));assert.ok(note('J-Hope: 시원하게 한번 째봅시다').includes('matar aula')||note('J-Hope: 시원하게 한번 째봅시다').includes('faltar'));
 assert.ok(note('V: 전 입이 아팠거든여').includes('-거든요'));assert.ok(note('Suga: 많이 아팠나보네').includes('inferência'));
 assert.equal(lookup('Skit'),undefined);assert.equal(lookup('Outro: Circle Room Cypher'),undefined);assert.equal(lookup('Skit: Expectation'),'skit-expectation');
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('music.apple.com')));assert.ok(musicCuriosities[id].some(c=>c.source?.includes('archives.go.kr')));
}
console.log('PASS: Skit Circle Room Talk, 68 exact supplied turns, all speakers/laughter and door cue, repeated father retort, contextual transcription notes, PT/ENG coverage, 8 cards, 5 exercises and skit-only catalog aliases.');
