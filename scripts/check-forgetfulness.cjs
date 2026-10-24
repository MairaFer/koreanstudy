const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['forgetfulness','forgetfulness',32,['Forgetfulness','Forgetfulness (건망증)','Forg_tful','Forg_tful (with Kim Sawol)','건망증']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[8,4,8,4,4,4]);
 assert.deepEqual(sections[1].lines,sections[3].lines);
 assert.deepEqual(sections[1].lines.slice(0,3),sections[4].lines.slice(0,3));
 const freq=t=>all.filter(l=>l.text===t).length;
 for(const t of ['수많은 가시들과','오고야 마는 아침과','각자의 방식들로'])assert.equal(freq(t),3);
 assert.equal(freq('스스로 마취해 가요'),2);assert.equal(freq('스스로 마취해가요'),1);
 assert.equal(freq('나나나 나나나나 나나 나나'),2);assert.equal(freq('나나 나나나나'),2);
 assert.equal(all[0].text,'어제의 일을 자꾸 잊어요');assert.equal(all.at(-1).text,'나나 나나나나');
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('나 고작 스물여섯인데').includes('vinte e seis'));
 assert.ok(note('공원에 가지 않음 안 돼요').includes('않으면'));
 assert.ok(note('꽤나 새삼스러울 걸요').includes('renovado'));
 for(const l of sections[5].lines){assert.ok(l.entries[0].notes.length);assert.equal(l.english,undefined);}
 const catalog=JSON.parse(fs.readFileSync('lib/discography.json','utf8')),track=catalog.find(a=>a.artist==='RM'&&a.title==='Indigo').tracks.find(t=>t.title==='Forg_tful (with Kim Sawol)');assert.ok(track);assert.equal(lookup(track.title),id);
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('krdict.korean.go.kr')));
}
console.log('PASS: Forgetfulness, 32 exact supplied lines, three chorus spellings, vocalizations, PT/ENG coverage, 8 cards, vocabulary, 5 exercises and Forg_tful catalog link.');
