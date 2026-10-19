const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {normalKoreanSections,normalKoreanVocabulary}=require('../lib/normal-korean.ts'),{comeOverSections,comeOverVocabulary}=require('../lib/come-over.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const normal=normalKoreanSections.flatMap(s=>s.lines),come=comeOverSections.flatMap(s=>s.lines);
assert.equal(normal.length,51);assert.equal(come.length,60);assert.equal(normalKoreanSections.length,8);assert.equal(comeOverSections.length,8);
assert.equal(normal.filter(l=>l.english).length,26);assert.equal(come.filter(l=>l.english).length,37);
assert.equal(normal[0].text,'Kerosene, dopamine, chemical-induced');assert.equal(normal.at(-1).text,'No, we, no, we, no, we call this shit normal');
assert.equal(normal.filter(l=>l.text==='유명세와 fame, yeah, the things we choose').length,3);assert.equal(normal.filter(l=>l.text==='잠깐 이 세상이 날 잊었으면').length,3);
assert.equal(normal.filter(l=>l.text==='텅 빈 me').length,2);
assert.equal(come[0].text,'텅 빈 듯한 밤이 오면');assert.equal(come.at(-1).text,"Can I come over, o-over? 'Cause it's not over");
assert.equal(come.filter(l=>l.text==="Yeah, I'm lost, can I come over?").length,12);assert.equal(come.filter(l=>l.text==="I just wanna say I'm sorry").length,3);
assert.equal(come.filter(l=>l.text==='If I knocked on your door?').length,1);assert.equal(come.filter(l=>l.text==='If I knocked on your door? (Hey, knock, knock)').length,1);
for(const[id,sections,vocab]of[['normal-korean',normalKoreanSections,normalKoreanVocabulary],['come-over',comeOverSections,comeOverVocabulary]]){
 for(const section of sections){assert.notEqual(translate(section.title,'eng'),section.title);for(const l of section.lines){assert.ok(l.text&&l.translation);assert.equal(translate(l.translation,'pt'),l.translation);assert.ok(translate(l.translation,'eng'));if(l.english){assert.ok(!/[가-힣]/u.test(l.text));assert.equal(l.entries.length,0);continue;}assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(l.entries.some(e=>e.term.includes(token)),id+': '+token);for(const e of l.entries){assert.ok(e.meaning&&e.notes.length);for(const note of e.notes)assert.notEqual(translate(note,'eng'),note,'Untranslated note: '+note);}}}
 for(const group of Object.values(vocab)){assert.ok(group.length>=14);assert.equal(new Set(group.map(e=>e.ko)).size,group.length);for(const v of group)assert.notEqual(translate(v.pt,'eng'),v.pt);}
 const enriched=addMusicCuriosities(id,sections);assert.equal(enriched.flatMap(s=>s.lines.flatMap(l=>(l.entries||[]).filter(e=>e.card))).length,5);assert.deepEqual(addMusicCuriosities(id,enriched),enriched);
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);for(const ex of song.exercises){assert.equal(ex.options.length,3);assert.equal(new Set(ex.options).size,3);assert.ok(ex.options.includes(ex.answer[0]));assert.notEqual(translate(ex.prompt,'eng'),ex.prompt);}
 assert.equal(musicCuriosities[id].length,5);
}
const study=fs.readFileSync('components/music-study.tsx','utf8'),word=fs.readFileSync('lib/word-translation.ts','utf8'),catalog=fs.readFileSync('components/bts-catalog.tsx','utf8');
for(const id of ['normal-korean','come-over']){assert.ok(study.includes("'"+id+"':{sections:"));assert.ok(word.includes("id:'"+id+"'"));}
const lookup=ts.transpileModule(catalog.slice(catalog.indexOf('function studyFor('),catalog.indexOf('\n',catalog.indexOf('function studyFor('))),{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
for(const [title,id]of[['NORMAL (Korean Version)','normal-korean'],['NORMAL (Korean Ver.)','normal-korean'],['Come Over','come-over'],['NORMAL',undefined],['NORMAL (Instrumental)',undefined],['Come Over (Live)',undefined]])assert.equal(new Function(lookup+';return studyFor('+JSON.stringify(title)+')')(),id);
const ambiguous=come.find(l=>l.text==='각자 이야긴 물어 둘까?');assert.ok(ambiguous.translation.startsWith('Leitura contextual:'));assert.ok(ambiguous.entries[0].notes[0].includes('묻어 둘까?'));
assert.ok(come.find(l=>l.text==='앞뒤가 없는 살 그저 벼랑 끝그앞, 앞').entries[0].notes[0].includes('não está confirmada'));
assert.ok(come.find(l=>l.text==='그래, 답을 찾은 rover, 난 노저어').entries[0].notes[0].includes('ㅅ'));
console.log('PASS: NORMAL Korean Version and Come Over, 51/60 supplied lines, all repetitions and variants, contextual grammar, transparent transcription notes, bilingual vocabulary, ten exercises and ten curiosity cards, exact-version catalog links.');
