const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['i-like-it','iLikeIt',79,['I Like It','Like','좋아요','I Like It (좋아요; Joayo)']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[1,3,21,4,6,16,4,6,8,4,6]);
 assert.deepEqual(sections[3].lines,sections[6].lines);assert.deepEqual(sections[3].lines,sections[9].lines);assert.deepEqual(sections[4].lines,sections[7].lines);assert.deepEqual(sections[4].lines,sections[10].lines);
 assert.equal(all[0].text,'Wanna be loved');assert.equal(all.at(-1).text,'Baby I want it');
 assert.equal(all.filter(l=>l.text==="Don't wanna be fool wanna be cool").length,7);assert.equal(all.filter(l=>l.text==='Wanna be loved 너와의 same love').length,7);assert.equal(all.filter(l=>l.text==="I know it's over").length,3);
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text);
 for(const text of ['Uh fuck that all stupid bullshits','오늘도 좋아요를 누르지 shit','그 세상은 어느새 다들 멈춰있는데','난 왜 여전히 그 시간에 걸쳐있는데','난 도깨비 감투 몰래 다가가','그때마다 머릿속은 백팔번뇌','고민하며 좋아요를 누르지 말자','나도 누르고 갈게 니 글 위에','찾아온 건 한심만 더'])assert.ok(all.some(l=>l.text===text));
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('고민하며 좋아요를 누를까 말까').includes('-ㄹ까 말까'));assert.ok(note('삼십 몇 명 중 하나가 되는 게').includes('aproximada'));
 assert.ok(note('넌 남이 되고 오히려 더 좋아 보여 pretty woman').includes('남 aqui não significa homem'));assert.ok(note('그때마다 머릿속은 백팔번뇌').includes('budista'));
 assert.equal(lookup('I Like It Pt.2'),undefined);assert.equal(lookup('Like Pt.2'),undefined);assert.equal(lookup('좋아요 (Japanese Ver.)'),undefined);
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('encykorea.aks.ac.kr')));assert.ok(musicCuriosities[id].some(c=>c.source?.includes('kmas.or.kr')));assert.ok(musicCuriosities[id].some(c=>c.source?.includes('krdict.korean.go.kr')));
}
console.log('PASS: I Like It, 79 exact supplied lines, all three chorus and transition repeats, social-media/cultural imagery and hesitation, PT/ENG coverage, 8 cards, 5 exercises and original-only catalog aliases.');
