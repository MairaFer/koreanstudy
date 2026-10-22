const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['skit-expectation','skitExpectation',63,['Skit: Expectation','SKIT : Expectation!','Skit:Expectation','Skit : Expectation']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 assert.deepEqual(sections.map(s=>s.lines.length),[16,15,7,13,12]);
 for(const l of all)if(/[A-Za-z]/.test(l.text))assert.equal(translate(l.text,'eng'),l.text,'Mixed-language original changed');
 assert.equal(all[0].text,'일등 할 수 있겠냐');assert.equal(all.at(-1).text,'얼마 못 벌어');
 assert.equal(all.filter(l=>l.text==='아니 아니').length,1);
 for(const l of all){assert.ok(!/^(?:Jin|RM|Jungkook|Suga|V|Jimin|J-Hope):/.test(l.text));const latin=l.text.replace(/no more dream|danger|n\.0/gi,'').match(/[a-z]/gi);assert.equal(latin,null,'Unexpected romanization: '+l.text)}
 for(const text of ['난 이제 앨범에서 만족할 수 없다 일응해야 된다 이제','솔직히 기대하지 마 라고 해서 기대가안되는 게아니잖아요','아그성득 뱀이 그때도 얘기했잖아요','졸싹 망해버렸지','아빠 아빠바랑 통화하다가 소득공제랑','정국이 아버지','야 나 싸비 썼어','돈 십원도 못 버는데 무슨 소리야'])assert.ok(all.some(l=>l.text===text));
 const note=t=>all.find(l=>l.text===t).entries[0].notes.join(' ');
 assert.ok(note('난 이제 앨범에서 만족할 수 없다 일응해야 된다 이제').includes('não uma forma padrão'));
 assert.ok(note('아그성득 뱀이 그때도 얘기했잖아요').includes('pouco clara'));
 assert.ok(note('졸싹 망해버렸지').includes('não uma classificação histórica'));
 assert.ok(note('야 나 싸비 썼어').includes('사비'));
 assert.ok(note('이열아홉살이 벌써부터 이거구만').includes('não se converte'));
 assert.ok(note('돈 십원도 못 버는데 무슨 소리야').includes('não renda verificada'));
 assert.equal(lookup('Skit'),undefined);assert.equal(lookup('Expectation'),undefined);
 assert.equal(lookup('Skit: R U Happy Now?'),'skit-r-u-happy-now');assert.equal(lookup('Skit: Soulmate'),'skit-soulmate');
 assert.ok(musicCuriosities[id].some(c=>c.source?.includes('genie.co.kr')));assert.ok(musicCuriosities[id].some(c=>c.source?.includes('ge.globo.com')));
}
console.log('PASS: Skit: Expectation, 63 utterances without romanization; transcription notes, uncertainty and jokes, PT/ENG coverage, 8 sourced/contextual cards, 5 exercises and distinct skit catalog mapping.');
