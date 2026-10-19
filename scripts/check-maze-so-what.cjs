const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {loveMazeSections,loveMazeVocabulary}=require('../lib/love-maze.ts'),{soWhatSections,soWhatVocabulary}=require('../lib/so-what.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const maze=loveMazeSections.flatMap(s=>s.lines),what=soWhatSections.flatMap(s=>s.lines);
assert.equal(maze.length,77);assert.equal(what.length,97);assert.equal(loveMazeSections.length,10);assert.equal(soWhatSections.length,14);
assert.equal(maze[0].text,"Cause I'll be in love maze");assert.equal(maze.at(-1).text,'In love maze');
assert.equal(maze.filter(l=>l.text==='Take my ay ay hand 손을 놓지 마').length,5);assert.equal(maze.filter(l=>l.text==='In love maze').length,5);
assert.equal(maze.filter(l=>l.text==='My ay ay 절대 엇갈리면 안돼').length,2);assert.equal(maze.filter(l=>l.text==='My ay ay 절대 날 놓치면 안돼').length,3);
assert.equal(what[0].text,'Somebody call me right one');assert.equal(what.at(-1).text,'너도 그럼 어때');
assert.equal(what.filter(l=>l.text==='Somebody call me right one').length,3);assert.equal(what.filter(l=>l.text==='멈춰서 고민 하지마').length,3);
assert.equal(what.filter(l=>l.text==='Oh oh oh oh oh oh oh oh oh oh').length,6);assert.equal(what.filter(l=>l.text==='Oh oh oh oh oh oh').length,6);
assert.equal(what.filter(l=>l.text==='답도 없는 고민 고민').length,2);
for(const[id,sections,vocab]of[['love-maze',loveMazeSections,loveMazeVocabulary],['so-what',soWhatSections,soWhatVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);assert.ok(translate(l.translation,'eng'));if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=20);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['love-maze','so-what']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['Love Maze','love-maze'],['So What','so-what'],['So What (Live)',undefined],['Love Maze (Japanese Version)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
assert.ok(maze.find(l=>l.text==='남들이 뭐라던 듣지 말자').entries[0].notes[0].includes('뭐라든'));
assert.ok(maze.find(l=>l.text==='그럴 수록 난 더 확신이 생겨').entries[0].notes[0].includes('그럴수록'));
assert.ok(what.find(l=>l.text==='꾸물대단 휩쓸려가겠지 oh bae').entries[0].notes[0].includes('꾸물대다간'));
assert.ok(what.find(l=>l.text==='고민들의 9할은 니가 만들어 낸 상상의 늪').entries[0].notes[0].includes('não uma estatística'));
console.log('PASS: Love Maze and So What, 77/97 supplied lines, all repeats and final variants, contextual grammar and spelling notes, bilingual vocabulary, ten exercises, ten curiosity cards and original-only catalog links.');
