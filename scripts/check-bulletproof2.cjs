const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['we-are-bulletproof-pt2','weAreBulletproofPt2',69,['We Are Bulletproof Pt. 2','We Are Bulletproof PT.2','We Are Bulletproof Pt 2','We Are Bulletproof, Pt.2']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[6,12,4,8,6,14,4,8,6,1]);
 assert.deepEqual(sections[0].lines,sections[4].lines);assert.deepEqual(sections[0].lines,sections[8].lines);assert.deepEqual(sections[2].lines,sections[6].lines);
 assert.equal(all[0].text,'(What) 이리 내놔');assert.equal(all.at(-1).text,'Bulletproof');
 assert.equal(all.filter(l=>l.text==='Bulletproof').length,4);assert.equal(all.filter(l=>l.text==='Oh! 나만치 해봤다면 돌을 던져').length,4);
 assert.equal(all.filter(l=>l.text==='(Click click, bang bang) we just sing it like').length,4);assert.equal(all.filter(l=>l.text==='(Click click, bang bang) We just sing it like').length,4);
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('집도하며 잠을 참아가며').includes('꿈을'));assert.ok(note('집도하며 잠을 참아가며').includes('cirurgia'));
 assert.ok(note('노래 못 해 랩퍼를 당한').includes('imposto'));assert.ok(note('Oh! 나만치 해봤다면 돌을 던져').includes('condição'));
 assert.ok(note('랩몬스터, 말처럼 괴물같이').includes('nome artístico'));assert.ok(note('똑똑히 봐 이걸 impossible에 마침표').includes('próxima linha'));
 assert.ok(all.some(l=>l.text==="찍어 I'm possible 자 이제 됐니 boy"));
 assert.equal(lookup('We Are Bulletproof'),undefined);assert.equal(lookup('We Are Bulletproof Pt.1'),undefined);assert.equal(lookup('We Are Bulletproof: The Eternal'),'we-are-bulletproof-eternal');
 assert.equal(songs.filter(s=>s.id===id).length,1);assert.ok(musicCuriosities[id].filter(c=>c.source?.includes('krdict.korean.go.kr')).length===2);
}
console.log('PASS: We Are Bulletproof Pt.2, 69 exact lines, three hooks and final tag, repeated chorus case variants, PT/ENG coverage, metaphor and conditional notes, 8 cards, 5 exercises and distinct part-two catalog mapping.');
