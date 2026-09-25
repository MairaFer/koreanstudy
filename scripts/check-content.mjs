import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
async function load(file){const source=await fs.readFile(new URL('../'+file,import.meta.url),'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));}
const {lessons,levels,quizFor,isCorrect,normalizeAnswer}=await load('lib/course.ts');
const {songs}=await load('lib/songs.ts');
assert.equal(lessons.length,30);assert.equal(songs.length,12);
const allIds=[];for(const level of levels){assert.equal(lessons.filter(l=>l.level===level).length,10);assert.equal(quizFor(level).length,10);}
for(const lesson of lessons){assert.equal(lesson.cards.length,8,lesson.id);assert.equal(lesson.exercises.length,5,lesson.id);assert.ok(lesson.body.length>=2);for(const c of lesson.cards){assert.ok(c.ko&&c.pt)}allIds.push(lesson.id);for(const e of lesson.exercises){allIds.push(e.id);assert.ok(e.answer.length&&e.explanation);assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorrect test answer'));if(e.kind==='choice'){assert.equal(new Set(e.options).size,e.options.length,e.id+' duplicate choices');assert.ok(e.options.includes(e.answer[0]));}if(e.kind==='order')assert.deepEqual([...e.options].sort(),e.answer[0].split(' ').sort());}}
for(const s of songs){allIds.push(s.id);if(s.videoId)assert.match(s.videoId,/^[\w-]{11}$/);assert.ok(s.clips.reduce((n,c)=>n+c.text.trim().split(/\s+/).length,0)<=10);for(const c of s.clips){allIds.push(c.id);assert.ok(c.end>c.start&&c.start>=0);assert.ok(c.grammar&&c.translation);}assert.ok(s.exercises.length>=2);}
assert.equal(new Set(allIds).size,allIds.length);
assert.equal(normalizeAnswer('  가요.  '),'가요');assert.equal(normalizeAnswer('가요'.normalize('NFD')),'가요');assert.ok(!isCorrect({answer:['갈 거예요']},'갈거예요'));
console.log('PASS: 30 aulas, 150 exercícios, 240 cartões, 3 quizzes, 12 músicas; IDs, respostas, alternativas, Hangul e limites de citações verificados.');

const {springDaySections,springDayVocabulary}=await load('lib/spring-day.ts');
const springLines=springDaySections.flatMap(s=>s.lines);
assert.equal(springLines.length,59);
assert.equal(springLines.filter(l=>l.english).length,1);
for(const l of springLines){assert.ok(l.text&&l.translation,l.text);if(l.english){assert.ok(l.entries&&l.entries.length===0);}else{assert.ok(l.entries&&l.entries.length>0,'sem análise palavra a palavra: '+l.text);for(const entry of l.entries){assert.ok(entry.term&&entry.meaning,l.text);if(entry.notes)for(const note of entry.notes)assert.ok(note.length>2);}}}
assert.equal(springLines.filter(l=>l.text==='보고 싶다 (보고 싶다)').length,6);
assert.equal(springLines.filter(l=>l.text==='그곳에 좀 더 머물러줘, 머물러줘').length,2);
assert.equal(springDayVocabulary.verbs.length,22);
assert.equal(springDayVocabulary.nouns.length,24);
const musicSource=await fs.readFile(new URL('../components/music-study.tsx',import.meta.url),'utf8');
assert.ok(!musicSource.includes('<textarea'));
assert.ok(!musicSource.includes('analyzeOnce'));
const {koreanPhrases}=await load('lib/audio-text.ts');
assert.deepEqual(koreanPhrases('8월에도 겨울이 와'),['8월에도 겨울이 와']);
assert.equal(koreanPhrases('보고 싶다 (보고 싶다)').length,2);
console.log('PASS: Spring Day: 59 frases traduzidas e analisadas palavra a palavra (inglês só com tradução), repetições preservadas, 22 verbos e 24 substantivos; sem formulário ou análise pública.');

const {hooliganSections,hooliganVocabulary}=await load('lib/hooligan.ts');
const allHooliganLines=hooliganSections.flatMap(s=>s.lines);
assert.equal(allHooliganLines.length,50);
assert.equal(allHooliganLines.filter(l=>l.english).length,42);
for(const line of allHooliganLines)assert.ok(line.text&&line.translation);
const hooliganLines=allHooliganLines.filter(l=>!l.english);
assert.deepEqual(hooliganLines.map(l=>l.text),[
 '통제 불능 머리 춤 (yeah)','뛰어 미친놈인 듯 (uh)','Me everywhere, 얼쑤','다들 모여 하나 둘 (uh)',"Beat drop, 우린 dancin'",'Like El Cucuy, 굳이 말 안 해도 알잖아','Hooligan, like hooligan, 때려 부숴 like hooligan','시간 됐으니 좀 비켜 좀, all clear, 이상 무'
]);
for(const line of hooliganLines){assert.ok(line.translation&&line.entries.length);for(const entry of line.entries){assert.ok(entry.meaning&&entry.notes.length>=2,entry.term);}}
const covered=hooliganLines.flatMap(l=>l.entries.map(e=>e.term)).join(' ');
for(const word of ['통제','불능','머리','춤','뛰어','미친놈인','듯','얼쑤','다들','모여','하나','둘','우린','굳이','말','안','해도','알잖아','때려','부숴','시간','됐으니','좀','비켜','이상','무'])assert.ok(covered.includes(word),'sem análise: '+word);
const hooligan=songs.find(s=>s.id==='hooligan');assert.equal(hooligan.exercises.length,5);
for(const exercise of hooligan.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(hooliganVocabulary.verbs.length,12);assert.equal(hooliganVocabulary.nouns.length,8);
assert.ok(musicSource.includes('hooliganSections'));assert.ok(musicSource.includes('study?.badge'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'hooligan':'hooligan'"));
console.log('PASS: Hooligan: 8 linhas fornecidas, todos os termos coreanos analisados, 5 exercícios de clicar, 12 verbos e 8 substantivos.');

const {twoPointZeroSections,twoPointZeroVocabulary}=await load('lib/two-point-zero.ts');
const twoLines=twoPointZeroSections.flatMap(s=>s.lines);
assert.equal(twoLines.length,46);
assert.equal(twoLines.filter(l=>l.english).length,36);
assert.equal(twoLines.filter(l=>l.text==='불을 붙여 brand new, 붙여 brand new').length,4);
assert.equal(new Set(twoLines.filter(l=>!l.english).map(l=>l.text)).size,7);
for(const line of twoLines){assert.ok(line.text&&line.translation);if(!line.english){assert.ok(line.entries.length);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2,entry.term);}}
const twoTerms=twoLines.flatMap(l=>(l.entries??[]).map(e=>e.term)).join(' ');
for(const word of ['불을','붙여','그래','기분','마치','다른','뛰지','않는','update된','후','여기저기','또','한 번','일냈네','이젠','버려','못 쓸','폐품','수거하러','가','여유','있게','다시','수고하러'])assert.ok(twoTerms.includes(word),'sem análise: '+word);
const twoSong=songs.find(s=>s.id==='two-point-zero');assert.equal(twoSong.exercises.length,5);
for(const exercise of twoSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(twoPointZeroVocabulary.verbs.length,12);assert.equal(twoPointZeroVocabulary.nouns.length,9);
assert.ok(musicSource.includes('twoPointZeroSections'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'2.0':'two-point-zero'"));
console.log('PASS: 2.0: 46 linhas, 7 versos coreanos distintos, refrão preservado, 5 exercícios de clicar, 12 verbos e 9 substantivos.');

const {aliensSections,aliensVocabulary}=await load('lib/aliens.ts');
const aliensLines=aliensSections.flatMap(s=>s.lines);
assert.equal(aliensLines.length,56);
assert.equal(aliensLines.filter(l=>l.english).length,20);
assert.equal(new Set(aliensLines.filter(l=>!l.english).map(l=>l.text)).size,22);
for(const line of aliensLines){assert.ok(line.text&&line.translation);if(!line.english){assert.ok(line.entries?.length,line.text);for(const entry of line.entries)assert.ok(entry.term&&entry.meaning&&entry.notes?.length,entry.term);}}
for(const [text,count] of [['도대체 뭘 더 고민해? (고민해)',2],['뭐든 더 빠르게 (ooh-ooh, ooh)',4],['(헛 둘) 찍어 put that stamp on it',2]])assert.equal(aliensLines.filter(l=>l.text===text).length,count);
const terms=aliensLines.flatMap(l=>(l.entries??[]).map(e=>e.term)).join(' ');
for(const term of ['게','stadium으로','집합','태생부터','우릴','부러워하네','설명하기','중모리','어쩔래','가나','하','보고','배워 놔','신발은','벗어 놔','예의를','동쪽에서','뭐든','밤새워','대','시대가','저주하니','흉즉대길','김구','선생님','나밖에','못 해','허벌나게','말하길','헛 둘','찍어'])assert.ok(terms.includes(term),'sem análise: '+term);
const aliensSong=songs.find(s=>s.id==='aliens');assert.equal(aliensSong.exercises.length,5);
for(const exercise of aliensSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(aliensVocabulary.verbs.length,24);assert.equal(aliensVocabulary.nouns.length,15);
assert.ok(musicSource.includes('aliensSections'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'aliens':'aliens'"));
console.log('PASS: Aliens: 56 linhas, 22 linhas coreanas distintas, repetições preservadas, 5 exercícios, 24 verbos e 15 substantivos.');

const {fyaSections,fyaVocabulary}=await load('lib/fya.ts');
const fyaLines=fyaSections.flatMap(s=>s.lines), fyaKorean=fyaLines.filter(l=>!l.english);
assert.equal(fyaLines.length,39);assert.equal(fyaKorean.length,4);
for(const line of fyaLines)assert.ok(line.text&&line.translation);
for(const line of fyaKorean){assert.ok(line.entries.length);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'FYA: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2);}
assert.equal(fyaLines.filter(l=>l.text==="It's fire").length,3);
assert.equal(fyaVocabulary.verbs.length,9);assert.equal(fyaVocabulary.nouns.length,6);
const fya=songs.find(s=>s.id==='fya');assert.equal(fya.exercises.length,5);
for(const exercise of fya.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.ok(musicSource.includes('fyaSections'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'fya':'fya'"));
console.log('PASS: FYA: 39 linhas, 4 versos com coreano integralmente analisados, 5 exercícios, 9 verbos/descritivos e 6 substantivos.');

const {merryGoRoundSections,merryGoRoundVocabulary}=await load('lib/merry-go-round.ts');
const merryLines=merryGoRoundSections.flatMap(s=>s.lines), merryKorean=merryLines.filter(l=>/[가-힣ㄱ-ㅎㅏ-ㅣ]/u.test(l.text));
assert.equal(merryLines.length,44);assert.equal(merryKorean.length,18);
for(const line of merryLines)assert.ok(line.text&&line.translation);
for(const line of merryKorean){assert.ok(!line.english);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Merry Go Round: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2);}
assert.equal(merryGoRoundVocabulary.verbs.length,21);assert.equal(merryGoRoundVocabulary.nouns.length,22);
assert.ok(merryLines.some(l=>l.text==='매일 널 죽으러 가 꿈을 끌 순 없나?'));
const merry=songs.find(s=>s.id==='merry-go-round');assert.equal(merry.exercises.length,5);
for(const exercise of merry.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.ok(musicSource.includes('merryGoRoundSections'));
assert.ok(musicSource.includes('checked={onlyKorean}'));
assert.ok(musicSource.includes('hidden={onlyKorean&&!koreanPattern.test(line.text)}'));
assert.ok(musicSource.includes('hidden={onlyKorean&&!section.lines.some(line=>koreanPattern.test(line.text))}'));
const {koreanPattern}=await load('lib/audio-text.ts');assert.ok(koreanPattern.test('Oh, 답이 없는 질문'));assert.ok(!koreanPattern.test('This merry-go-round'));
console.log('PASS: Merry Go Round: 44 linhas, 18 versos com coreano, 5 exercícios, 21 verbos/descritivos, 22 substantivos; filtro preserva frases mistas e texto original.');

const {theyDontKnowSections,theyDontKnowVocabulary}=await load('lib/they-dont-know-bout-us.ts');
const theyLines=theyDontKnowSections.flatMap(s=>s.lines), theyKorean=theyLines.filter(l=>/[가-힣]/u.test(l.text));
assert.equal(theyLines.length,61);assert.equal(theyKorean.length,14);
for(const line of theyLines)assert.ok(line.text&&line.translation);
for(const line of theyKorean){assert.ok(!line.english);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'They: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2);}
assert.equal(theyDontKnowVocabulary.verbs.length,16);assert.equal(theyDontKnowVocabulary.nouns.length,10);
const theySong=songs.find(s=>s.id==='they-dont-know-bout-us');assert.equal(theySong.exercises.length,5);
for(const exercise of theySong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
console.log('PASS: They Don’t Know ’Bout Us: letra, 14 linhas com coreano, vocabulário e 5 exercícios.');



const catalogSource=await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8');
const studyLookup=ts.transpileModule(catalogSource.match(/function studyFor\(title:string\)\{[^\n]+/)[0],{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;
assert.equal(new Function(studyLookup+";return studyFor(\"they don’t know ’bout us\");")(),'they-dont-know-bout-us');
