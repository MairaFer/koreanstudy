const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {skitBeSections:sections,skitBeVocabulary:vocabulary}=require('../lib/skit-be.ts'),{songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const song=songs.find(s=>s.id==='skit-be'),all=sections.flatMap(s=>s.lines),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
assert.equal(all.length,91);assert.deepEqual(sections.map(s=>s.lines.length),[24,13,12,16,14,12]);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/skit-be.txt','utf8').trim().split(/\r?\n/));
assert.equal(all[0].text,'축하드립니다!');assert.equal(all.at(-1).text,'지금은 다르게 다가오지 않냐?');
assert.equal(all.filter(l=>l.english).length,1);assert.equal(all.find(l=>l.english).text,'No More Dream. No More Dream');
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
assert.ok(all.some(l=>l.text==='그치 필요없지 각자의 선물 해 줬다 (두번)'));assert.ok(all.some(l=>l.text==='내가 말— 내가 말했잖아?'));assert.ok(all.some(l=>l.text==='종신산업'));assert.ok(all.some(l=>l.text==='연습해야돼용!'));assert.ok(all.some(l=>l.text==='이렇게 말씀하신면 섭섭하죠'));
assert.ok(all.find(l=>l.text==='(삐)').entries[0].notes[0].includes('reconstruir'));assert.ok(all.find(l=>l.text==='오안취?').entries[0].notes[0].includes('não criamos'));assert.ok(song.intro.includes('sem atribuir vozes'));
assert.ok(vocabulary.verbs.length>=20&&vocabulary.nouns.length>=20);assert.equal(song.exercises.length,5);
const original=JSON.stringify(sections),enhanced=addMusicCuriosities('skit-be',sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities('skit-be',enhanced),enhanced);
const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities['skit-be'].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
for(const x of localized){const eng=translate(x,'eng');if(x!=='No More Dream. No More Dream.'&&x!=='“오안취”?')assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
const source=fs.readFileSync('components/bts-catalog.tsx','utf8');
const base=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],album=source.match(/function studyForAlbum\([^\n]+/)[0];
const lookup=new Function(ts.transpileModule(base+'\n'+album,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyForAlbum;')();
assert.equal(lookup('Skit','BE','BTS'),'skit-be');assert.equal(lookup('Skit','be','BTS'),'skit-be');assert.equal(lookup('Skit','BE','RM'),undefined);
for(const other of ['The Most Beautiful Moment in Life, Pt. 2','2 COOL 4 SKOOL','O!RUL8,2?','Skool Luv Affair',''])assert.equal(lookup('Skit',other,'BTS'),undefined);
assert.equal(lookup('Skit: One Night in a Strange City','The Most Beautiful Moment in Life, Pt. 2','BTS'),'skit-one-night');
for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup('Skit'+suffix,'BE','BTS'),undefined);
assert.ok(source.includes("'#bts/estudos/'+studyForAlbum(track.title,album.title,album.artist)"));
console.log('PASS: BE Skit 91 supplied turns; exact sequence, spellings, beep and unclear passages; PT/ENG, Korean coverage, 8 cards, vocabulary and 5 exercises; album-specific BE routing preserves other skits.');
