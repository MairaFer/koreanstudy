const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['closer','closer',69,['Closer','Closer (with Paul Blanco, Mahalia)','Closer (with Paul Blanco & Mahalia)','Closer (feat. Paul Blanco, Mahalia)']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length===2&&vocabulary.nouns.length===4);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,7);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[8,8,8,7,16,7,4,4,7]);
 assert.deepEqual(sections[0].lines.slice(0,7),sections[3].lines);assert.deepEqual(sections[6].lines,sections[7].lines);
 assert.equal(all.filter(l=>l.english).length,67);assert.equal(all.filter(l=>/[가-힣]/.test(l.text)).length,2);
 assert.ok(all.every(l=>!l.text.includes('Igeollo')&&!l.text.includes('Neoui')&&!l.text.includes('*[')));
 for(const l of all)if(l.english)assert.equal(translate(l.text,'eng'),l.text);
 const freq=t=>all.filter(l=>l.text===t).length;
 assert.equal(freq('Stay where you are'),7);assert.equal(freq('Just stay where you are'),1);assert.equal(freq("There's gon' be no take two"),2);
 assert.equal(all[0].text,"I get a feelin' sometimes");assert.equal(all.at(-1).text,'Yeah');
 const k=all.filter(l=>!l.english);assert.deepEqual(k.map(l=>l.text),['이걸로 만족할게','너의 사랑이면 돼']);
 assert.equal(k[0].translation,'Vou me contentar com isso.');assert.equal(k[1].translation,'Seu amor me basta.');
 assert.ok(k[0].entries.find(e=>e.term==='만족할게').notes[0].includes('não uma ordem'));
 assert.ok(k[1].entries.find(e=>e.term==='사랑이면').notes[0].includes('cópula'));
 assert.ok(k[1].entries.find(e=>e.term==='돼').notes[0].includes('condição suficiente'));
 const catalog=JSON.parse(fs.readFileSync('lib/discography.json','utf8')),track=catalog.find(a=>a.artist==='RM'&&a.title==='Indigo').tracks.find(t=>t.title==='Closer (with Paul Blanco & Mahalia)');assert.ok(track);assert.equal(lookup(track.title),id);
 for(const t of ['Closer Than This','Closer to You','Closer (Live)','Closer (Instrumental)'])assert.equal(lookup(t),undefined);
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('krdict.korean.go.kr')));
}
console.log('PASS: Closer, 69 supplied lines without romanization, 67 English and 2 Korean lines, 7 contextual cards, precise grammar, PT/ENG coverage, 5 exercises and exact Indigo alias.');
