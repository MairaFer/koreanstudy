import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
async function load(file){const source=await fs.readFile(new URL('../'+file,import.meta.url),'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));}
const {lessons,levels,quizFor,isCorrect,normalizeAnswer}=await load('lib/course.ts');
const {songs}=await load('lib/songs.ts');
assert.equal(lessons.length,30);assert.equal(songs.length,104);
const allIds=[];for(const level of levels){assert.equal(lessons.filter(l=>l.level===level).length,10);assert.equal(quizFor(level).length,10);}
for(const lesson of lessons){assert.equal(lesson.cards.length,8,lesson.id);assert.equal(lesson.exercises.length,5,lesson.id);assert.ok(lesson.body.length>=2);for(const c of lesson.cards){assert.ok(c.ko&&c.pt)}allIds.push(lesson.id);for(const e of lesson.exercises){allIds.push(e.id);assert.ok(e.answer.length&&e.explanation);assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorrect test answer'));if(e.kind==='choice'){assert.equal(new Set(e.options).size,e.options.length,e.id+' duplicate choices');assert.ok(e.options.includes(e.answer[0]));}if(e.kind==='order')assert.deepEqual([...e.options].sort(),e.answer[0].split(' ').sort());}}
for(const s of songs){allIds.push(s.id);if(s.videoId)assert.match(s.videoId,/^[\w-]{11}$/);assert.ok(s.clips.reduce((n,c)=>n+c.text.trim().split(/\s+/).length,0)<=10);for(const c of s.clips){allIds.push(c.id);assert.ok(c.end>c.start&&c.start>=0);assert.ok(c.grammar&&c.translation);}assert.ok(s.exercises.length>=2);}
assert.equal(new Set(allIds).size,allIds.length);
assert.equal(normalizeAnswer('  가요.  '),'가요');assert.equal(normalizeAnswer('가요'.normalize('NFD')),'가요');assert.ok(!isCorrect({answer:['갈 거예요']},'갈거예요'));
console.log('PASS: 30 aulas, 150 exercícios, 240 cartões, 3 quizzes, 104 músicas; IDs, respostas, alternativas, Hangul e limites de citações verificados.');

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

const {oneMoreNightSections,oneMoreNightVocabulary}=await load('lib/one-more-night.ts');
const nightLines=oneMoreNightSections.flatMap(s=>s.lines), nightKorean=nightLines.filter(l=>/[가-힣]/u.test(l.text));
assert.equal(nightLines.length,72);assert.equal(nightKorean.length,24);
for(const line of nightLines)assert.ok(line.text&&line.translation);
for(const line of nightKorean){assert.ok(!line.english);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Night: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2);}
assert.equal(oneMoreNightVocabulary.verbs.length,25);assert.equal(oneMoreNightVocabulary.nouns.length,18);
const nightSong=songs.find(s=>s.id==='one-more-night');assert.equal(nightSong.exercises.length,5);
for(const exercise of nightSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('One More Night');")(),'one-more-night');
assert.equal(nightLines.filter(l=>l.text==='꿈이면 깨기 싫어, 내').length,3);
console.log('PASS: One More Night: 72 linhas, 24 com coreano, 25 verbos/descritivos, 18 substantivos e 5 exercícios.');

const {pleaseSections,pleaseVocabulary}=await load('lib/please.ts');
const pleaseLines=pleaseSections.flatMap(s=>s.lines), pleaseKorean=pleaseLines.filter(l=>/[가-힣]/u.test(l.text));
assert.equal(pleaseLines.length,46);assert.equal(pleaseKorean.length,24);
for(const line of pleaseLines)assert.ok(line.text&&line.translation);
for(const line of pleaseKorean){assert.ok(!line.english);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Please: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2);}
assert.equal(pleaseVocabulary.verbs.length,17);assert.equal(pleaseVocabulary.nouns.length,11);
const pleaseSong=songs.find(s=>s.id==='please');assert.equal(pleaseSong.exercises.length,5);
for(const exercise of pleaseSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('Please');")(),'please');
assert.equal(pleaseLines.filter(l=>l.text==='All I want is you').length,4);
console.log('PASS: Please: 46 linhas, 24 com coreano, 17 verbos/descritivos, 11 substantivos e 5 exercícios.');

const {intoTheSunSections,intoTheSunVocabulary}=await load('lib/into-the-sun.ts');
const sunLines=intoTheSunSections.flatMap(s=>s.lines), sunKorean=sunLines.filter(l=>/[가-힣]/u.test(l.text));
assert.equal(sunLines.length,51);assert.equal(sunKorean.length,18);
for(const line of sunLines)assert.ok(line.text&&line.translation);
for(const line of sunKorean){assert.ok(!line.english);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Sun: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2);}
assert.equal(intoTheSunVocabulary.verbs.length,23);assert.equal(intoTheSunVocabulary.nouns.length,31);
const sunSong=songs.find(s=>s.id==='into-the-sun');assert.equal(sunSong.exercises.length,5);
for(const exercise of sunSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('Into the Sun');")(),'into-the-sun');
assert.ok(sunLines.some(l=>l.text==='풀이 뜨고 별 지는 곳'));
console.log('PASS: Into the Sun: 51 linhas, 18 com coreano, 23 verbos/descritivos, 31 substantivos e 5 exercícios.');

const {bornSingerSections,bornSingerVocabulary}=await load('lib/born-singer.ts');
const bornLines=bornSingerSections.flatMap(s=>s.lines), bornKorean=bornLines.filter(l=>/[가-힣]/u.test(l.text));
assert.equal(bornLines.length,60);assert.equal(bornKorean.length,59);
for(const line of bornLines)assert.ok(line.text&&line.translation);
for(const line of bornKorean){assert.ok(!line.english);const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Born Singer: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=1&&entry.notes.every(n=>n.trim().length>0));}
for(const term of ['차의점','무건운','어께를','차나의','내신','두드렸줬어','한상']){const entry=bornKorean.flatMap(l=>l.entries).find(e=>e.term===term);assert.ok(entry&&/provavelmente|provável|padrão|esperada|parece/i.test(entry.meaning+' '+entry.notes.join(' ')),term+' sem nota de transcrição');}
assert.ok(bornLines.some(l=>l.text.startsWith('삼번 만에')));
const bornSong=songs.find(s=>s.id==='born-singer');assert.equal(bornSong.exercises.length,5);
for(const exercise of bornSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('Born Singer');")(),'born-singer');
assert.ok(bornSingerVocabulary.verbs.length>=30&&bornSingerVocabulary.nouns.length>=25);
console.log('PASS: Born Singer: 60 linhas, 59 com coreano; notas de transcrição; '+bornSingerVocabulary.verbs.length+' verbos/descritivos, '+bornSingerVocabulary.nouns.length+' substantivos e 5 exercícios.');

const {noMoreDreamSections,noMoreDreamVocabulary}=await load('lib/no-more-dream.ts');
const nmdLines=noMoreDreamSections.flatMap(s=>s.lines), nmdKorean=nmdLines.filter(l=>!l.english);
assert.equal(noMoreDreamSections.length,9);assert.equal(nmdLines.length,69);assert.equal(nmdLines.filter(l=>l.english).length,8);assert.equal(nmdKorean.length,61);
for(const line of nmdLines)assert.ok(line.text&&line.translation);
for(const line of nmdKorean){const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'No More Dream: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2,entry.term);}
assert.ok(nmdLines.some(l=>l.text==='얌마, 네 꿈은 뭐니? (뭐니?)'));
assert.ok(nmdLines.some(l=>l.text==='눈을, 눈을, 눈을 떠라 다'));
assert.equal(noMoreDreamVocabulary.verbs.length,29);assert.equal(noMoreDreamVocabulary.nouns.length,32);
const nmdSong=songs.find(s=>s.id==='no-more-dream');assert.equal(nmdSong.exercises.length,5);
for(const exercise of nmdSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('No More Dream');")(),'no-more-dream');
assert.ok(musicSource.includes('noMoreDreamSections'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'no more dream':'no-more-dream'"));
console.log('PASS: No More Dream: 9 seções, 69 linhas (61 com coreano), 29 verbos/descritivos, 32 substantivos e 5 exercícios.');

const {nOSections,nOVocabulary}=await load('lib/n-o.ts');
const nOLines=nOSections.flatMap(s=>s.lines), nOKorean=nOLines.filter(l=>!l.english);
assert.equal(nOSections.length,10);assert.equal(nOLines.length,76);assert.equal(nOLines.filter(l=>l.english).length,23);assert.equal(nOKorean.length,53);
for(const line of nOLines)assert.ok(line.text&&line.translation);
for(const line of nOKorean){const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'N.O: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2,entry.term);}
assert.ok(nOLines.some(l=>l.text==='더는 남의 꿈에 갇혀 살지 마'));
assert.ok(nOLines.some(l=>l.text==='어른들은 내게 말하지'));
assert.equal(nOVocabulary.verbs.length,29);assert.equal(nOVocabulary.nouns.length,36);
const nOSong=songs.find(s=>s.id==='n-o');assert.equal(nOSong.exercises.length,5);
for(const exercise of nOSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('N.O');")(),'n-o');
assert.ok(musicSource.includes('nOSections'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'n.o':'n-o'"));
console.log('PASS: N.O: 10 seções, 76 linhas (53 com coreano), 29 verbos/descritivos, 36 substantivos e 5 exercícios.');

const {boyInLuvSections,boyInLuvVocabulary}=await load('lib/boy-in-luv.ts');
const bilLines=boyInLuvSections.flatMap(s=>s.lines), bilKorean=bilLines.filter(l=>!l.english);
assert.equal(boyInLuvSections.length,14);
for(const line of bilLines)assert.ok(line.text&&line.translation);
for(const line of bilKorean){const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Boy In Luv: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2,entry.term);}
assert.ok(bilLines.some(l=>l.text==='되고파 너의 오빠'));
assert.ok(bilLines.some(l=>l.text==='왜 내 맘을 흔드는 건데'));
assert.equal(boyInLuvVocabulary.verbs.length,37);assert.equal(boyInLuvVocabulary.nouns.length,24);
const bilSong=songs.find(s=>s.id==='boy-in-luv');assert.equal(bilSong.exercises.length,5);
for(const exercise of bilSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(exercise.options.includes(exercise.answer[0]));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('Boy In Luv');")(),'boy-in-luv');
assert.equal(new Function(studyLookup+";return studyFor('상남자');")(),'boy-in-luv');
assert.ok(musicSource.includes('boyInLuvSections'));
assert.ok((await fs.readFile(new URL('../components/bts-catalog.tsx',import.meta.url),'utf8')).includes("'boy in luv':'boy-in-luv'"));
console.log('PASS: Boy In Luv: 14 seções, todas as frases e termos coreanos analisados, 37 verbos/descritivos, 24 substantivos e 5 exercícios.');

const {dangerSections,dangerVocabulary}=await load('lib/danger.ts');
const dangerLines=dangerSections.flatMap(s=>s.lines);
assert.equal(dangerSections.length,13);
assert.equal(dangerLines.length,76);
assert.equal(dangerLines.filter(l=>l.english).length,4);
for(const line of dangerLines){
 assert.ok(line.text&&line.translation);
 if(line.english)continue;
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Danger: sem análise de '+token);
 for(const e of line.entries)assert.ok(e.meaning&&e.notes.length>=2,e.term);
}
assert.equal(dangerVocabulary.verbs.length,30);
assert.equal(dangerVocabulary.nouns.length,27);
assert.equal(songs.find(s=>s.id==='danger').exercises.length,5);
assert.equal(new Function(studyLookup+";return studyFor('Danger');")(),'danger');
assert.equal(new Function(studyLookup+";return studyFor('Danger (Japanese Ver.)');")(),undefined);
assert.ok(musicSource.includes('sections:dangerSections,vocabulary:dangerVocabulary'));
console.log('PASS: Danger: 76 linhas, 72 com coreano, 30 verbos/descritivos, 27 substantivos e 5 exercícios.');

const {iNeedUSections,iNeedUVocabulary}=await load('lib/i-need-u.ts');
const inuLines=iNeedUSections.flatMap(s=>s.lines);
assert.equal(iNeedUSections.length,9);
assert.equal(inuLines.length,66);
for(const line of inuLines){assert.ok(line.text&&line.translation);if(line.english)continue;const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'I Need U: sem análise de '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length>=2,e.term);}
assert.equal(iNeedUVocabulary.verbs.length,30);assert.equal(iNeedUVocabulary.nouns.length,17);
const inuSong=songs.find(s=>s.id==='i-need-u');assert.equal(inuSong.exercises.length,5);
for(const e of inuSong.exercises){assert.equal(e.kind,'choice');assert.ok(e.options.includes(e.answer[0]));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('I NEED U');")(),'i-need-u');
assert.equal(new Function(studyLookup+";return studyFor('I NEED U (Japanese Ver.)');")(),undefined);
assert.ok(musicSource.includes('sections:iNeedUSections,vocabulary:iNeedUVocabulary'));
assert.equal(inuLines.filter(l=>l.text==='왜 혼자 사랑하고 혼자서만 이별해').length,3);
assert.equal(inuLines.filter(l=>l.text==='I need you girl (I need you girl)').length,6);
assert.ok(inuLines.some(l=>l.text==='용서해 (shit)'));
assert.ok(!inuLines.some(l=>l.text.includes('whoa')||l.text==='Shit'));
console.log('PASS: I Need U: letra enviada, análise de todos os termos coreanos, 30 verbos/descritivos, 17 substantivos e 5 exercícios.');

const {runSections,runVocabulary}=await load('lib/run.ts');const runLines=runSections.flatMap(s=>s.lines);
assert.equal(runSections.length,11);assert.equal(runLines.length,63);assert.equal(runLines.filter(l=>l.english).length,11);
for(const section of runSections)assert.match(section.title,/^(Abertura|Verso [12]|Pré-refrão|Refrão|Pós-refrão|Ponte)$/);
for(const line of runLines){assert.ok(line.text&&line.translation);if(line.english)continue;const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'RUN: sem análise de '+token);for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length>=2,entry.term);}
assert.equal(runVocabulary.verbs.length,31);assert.equal(runVocabulary.nouns.length,28);
const runSong=songs.find(s=>s.id==='run');assert.equal(runSong.exercises.length,5);for(const e of runSong.exercises){assert.equal(e.kind,'choice');assert.ok(e.options.includes(e.answer[0]));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('RUN');")(),'run');assert.equal(new Function(studyLookup+";return studyFor('Run BTS');")(),'run-bts');assert.equal(new Function(studyLookup+";return studyFor('RUN (Japanese Ver.)');")(),undefined);
assert.ok(musicSource.includes('sections:runSections,vocabulary:runVocabulary'));
assert.equal(runLines.filter(l=>l.text==='다시 run, run, run, 난 멈출 수가 없어').length,3);
console.log('PASS: RUN: 63 linhas, 52 com coreano; títulos simples; 31 verbos/descritivos, 28 substantivos e 5 exercícios.');

// Validação das 10 músicas com análise palavra por palavra e exercícios.
const btsNewSongs=['dna','fake-love','blood-sweat-tears','idol','boy-with-luv','on','life-goes-on','yet-to-come','run-bts','intro-persona','stay','jamais-vu'];
const btsVideoIds={dna:'MBdVXkSdhwU','fake-love':'7C2z4GqqS5E','blood-sweat-tears':'hmE9f-TEutc',idol:'pBuZEGYXA6E','boy-with-luv':'XsX3ATc3FbA',on:'mPVDGOVjRQ0','life-goes-on':'-5q5mZbe3V8','yet-to-come':'kXpOEzNZ8hQ','intro-persona':'kyR7DPMVVzo',stay:'','jamais-vu':'',};
for(const id of btsNewSongs){
 const song=songs.find(s=>s.id===id);assert.ok(song,'música ausente: '+id);
 assert.equal(song.exercises.length,5,id+' deve ter 5 exercícios');
 for(const e of song.exercises){assert.ok(e.kind==='choice'||e.kind==='gap',e.id+' kind');assert.ok(e.prompt&&e.explanation,e.id);if(e.kind==='choice'){assert.equal(new Set(e.options).size,e.options.length,e.id+' duplicate choices');assert.ok(e.options.includes(e.answer[0]),e.id);}assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorreta'));}
 if(btsVideoIds[id])assert.match(song.videoId,new RegExp('^'+btsVideoIds[id].replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&')+'$'),id+' videoId oficial');
 assert.ok(musicSource.includes("'"+id+"'"),'music-study deve mapear '+id);
}
assert.ok(musicSource.includes('sections:dnaSections,vocabulary:dnaVocabulary'));
assert.ok(musicSource.includes('sections:fakeLoveSections,vocabulary:fakeLoveVocabulary'));
assert.ok(musicSource.includes('sections:bstSections,vocabulary:bstVocabulary'));
assert.ok(musicSource.includes('sections:idolSections,vocabulary:idolVocabulary'));
assert.ok(musicSource.includes('sections:bwlSections,vocabulary:bwlVocabulary'));
assert.ok(musicSource.includes('sections:onSections,vocabulary:onVocabulary'));
assert.ok(musicSource.includes('sections:lgoSections,vocabulary:lgoVocabulary'));
assert.ok(musicSource.includes('sections:ytcSections,vocabulary:ytcVocabulary'));
assert.ok(musicSource.includes('sections:runBtsSections,vocabulary:runBtsVocabulary'));
assert.ok(musicSource.includes('sections:personaSections,vocabulary:personaVocabulary'));
assert.equal(new Function(studyLookup+";return studyFor('DNA');")(),'dna');
assert.equal(new Function(studyLookup+";return studyFor('FAKE LOVE');")(),'fake-love');
assert.equal(new Function(studyLookup+";return studyFor('Blood Sweat & Tears');")(),'blood-sweat-tears');
assert.equal(new Function(studyLookup+";return studyFor('피 땀 눈물');")(),'blood-sweat-tears');
assert.equal(new Function(studyLookup+";return studyFor('IDOL');")(),'idol');
assert.equal(new Function(studyLookup+";return studyFor('Boy With Luv (feat. Halsey)');")(),'boy-with-luv');
assert.equal(new Function(studyLookup+";return studyFor('ON');")(),'on');
assert.equal(new Function(studyLookup+";return studyFor('Life Goes On');")(),'life-goes-on');
assert.equal(new Function(studyLookup+";return studyFor('Yet To Come');")(),'yet-to-come');
assert.equal(new Function(studyLookup+";return studyFor('Run BTS');")(),'run-bts');
assert.equal(new Function(studyLookup+";return studyFor('Intro : Persona');")(),'intro-persona');
assert.equal(new Function(studyLookup+";return studyFor('Intro: Persona');")(),'intro-persona');
assert.equal(new Function(studyLookup+";return studyFor('Stay');")(),'stay');
assert.equal(new Function(studyLookup+";return studyFor('FAKE LOVE (Rocking Vibe Mix)');")(),undefined);
for(const [id,lib,exp] of [['dna','lib/dna.ts','dnaSections'],['fake-love','lib/fake-love.ts','fakeLoveSections'],['blood-sweat-tears','lib/blood-sweat-tears.ts','bstSections'],['idol','lib/idol.ts','idolSections'],['boy-with-luv','lib/boy-with-luv.ts','bwlSections'],['on','lib/on.ts','onSections'],['life-goes-on','lib/life-goes-on.ts','lgoSections'],['yet-to-come','lib/yet-to-come.ts','ytcSections'],['run-bts','lib/run-bts.ts','runBtsSections'],['intro-persona','lib/persona.ts','personaSections'],['stay','lib/stay.ts','staySections'],['jamais-vu','lib/jamais-vu.ts','jamaisVuSections']]){
 const mod=await load(lib);const sections=mod[exp];assert.ok(Array.isArray(sections)&&sections.length>0,lib+' deve exportar '+exp);
 const linesSec=sections.flatMap(s=>s.lines);
 for(const line of linesSec){assert.ok(line.text&&line.translation,lib+': linha sem texto ou tradução');if(line.english)continue;const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),lib+': sem análise de '+token+' em '+line.text);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length>=1&&e.notes.every(n=>n.length>0),e.term);}
}
console.log('PASS: 12 estudos BTS adicionais: traduções, cobertura dos termos coreanos e exercícios verificados.');


const {fireSections,fireVocabulary}=await load('lib/fire.ts');const fireLines=fireSections.flatMap(s=>s.lines);
assert.equal(fireSections.length,10);assert.equal(fireLines.length,72);assert.equal(fireLines.filter(l=>!l.english).length,40);
for(const section of fireSections)assert.match(section.title,/^(Abertura|Verso [12]|Pré-refrão|Refrão|Ponte|Final)$/);
for(const line of fireLines){assert.ok(line.text&&line.translation);if(line.english)continue;const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'FIRE: sem análise de '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length>=2,e.term);}
assert.equal(fireVocabulary.verbs.length,22);assert.equal(fireVocabulary.nouns.length,16);
const fireSong=songs.find(s=>s.id==='fire');assert.equal(fireSong.exercises.length,5);for(const e of fireSong.exercises){assert.equal(e.kind,'choice');assert.ok(e.options.includes(e.answer[0]));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('Burning Up (FIRE)');")(),'fire');assert.equal(new Function(studyLookup+";return studyFor('Burning Up (FIRE) [Live]');")(),undefined);assert.equal(new Function(studyLookup+";return studyFor('FYA');")(),'fya');
assert.equal(fireLines.filter(l=>l.text==='용서해 줄게').length,1);assert.equal(fireLines.at(-1).text,'용서해 줄게');assert.equal(fireLines.filter(l=>l.text==='싹 다 불태워라').length,6);
assert.ok(musicSource.includes('sections:fireSections,vocabulary:fireVocabulary'));
console.log('PASS: FIRE: 72 linhas, 40 com coreano; repetições internas preservadas, 22 verbos/descritivos, 16 substantivos e 5 exercícios.');

const {jamaisVuSections,jamaisVuVocabulary}=await load('lib/jamais-vu.ts');
const jamaisLines=jamaisVuSections.flatMap(s=>s.lines);
assert.equal(jamaisVuSections.length,9);
assert.equal(jamaisLines[0].text,'또 져버린 것 같아');
assert.equal(jamaisLines.at(-1).text,"I won't give up");
assert.equal(jamaisLines.filter(l=>l.text==='멈춰버린 심장을 뛰게 할 remedy').length,4);
assert.ok(!jamaisLines.some(l=>l.text==='Je ne sais pas'));
assert.ok(jamaisVuVocabulary.verbs.length>=10&&jamaisVuVocabulary.nouns.length>=10);
assert.equal(new Function(studyLookup+";return studyFor('Jamais Vu');")(),'jamais-vu');
console.log('PASS: Jamais Vu segue a versão enviada, preserva refrões e final e liga a discografia ao estudo.');

const {moonSections,moonVocabulary}=await load('lib/moon.ts');
const moonLines=moonSections.flatMap(s=>s.lines);
assert.equal(moonLines.length,58);
assert.equal(moonSections.length,10);
assert.equal(moonLines[0].text,'달과 지구는 언제부터');
assert.equal(moonLines.at(-1).text,'All for you');
assert.equal(moonLines.filter(l=>l.text==='모두들 내가 아름답다 하지만').length,1);
assert.equal(moonLines.filter(l=>l.text==='문득 생각해 너도 날 지금 보고 있을까').length,2);
for(const l of moonLines){assert.ok(l.text&&l.translation);if(l.english)continue;const terms=l.entries.map(e=>e.term).join(' ');for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Moon: termo sem análise');}
assert.ok(moonVocabulary.verbs.length>=10&&moonVocabulary.nouns.length>=10);
assert.equal(new Function(studyLookup+";return studyFor('Moon');")(),'moon');
assert.ok(songs.find(s=>s.id==='moon').exercises.every(e=>e.kind==='choice'&&isCorrect(e,e.answer[0])));
console.log('PASS: Moon, 58 linhas na sequência enviada, 10 seções, vocabulário, exercícios e botão Estudar.');

const {seesawSections,seesawVocabulary}=await load('lib/seesaw.ts');
const seesawLines=seesawSections.flatMap(s=>s.lines);
assert.equal(seesawLines.length,70);assert.equal(seesawSections.length,13);
assert.equal(seesawLines[0].text,'시작은 뭐 즐거웠었네');
assert.equal(seesawLines.at(-1).text,"(Hol' up Hol' up) 니가 없는 이 시소에서 내려");
assert.equal(seesawLines.filter(l=>l.text==='All right 반복된 시소게임').length,3);
assert.equal(seesawLines.filter(l=>l.text==='이젠 그만해').length,2);
for(const l of seesawLines){assert.ok(l.text&&l.translation);const terms=l.entries.map(e=>e.term).join(' ');for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Seesaw: termo sem análise: '+token);for(const e of l.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(seesawVocabulary.verbs.length,21);assert.equal(seesawVocabulary.nouns.length,22);
for(const title of ['Trivia 轉 : Seesaw','Trivia 轉: Seesaw','Seesaw'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'seesaw');
const seesawSong=songs.find(s=>s.id==='seesaw');assert.equal(seesawSong.exercises.length,5);assert.ok(seesawSong.exercises.every(e=>e.kind==='choice'&&isCorrect(e,e.answer[0])));
console.log('PASS: Seesaw: 70 linhas, 13 seções, termos coreanos analisados, 21 verbos, 22 substantivos, exercícios e links da discografia.');

const {cypherPt3Sections,cypherPt3Vocabulary}=await load('lib/cypher-pt3.ts');
const cypherLines=cypherPt3Sections.flatMap(s=>s.lines);
assert.equal(cypherPt3Sections.length,6);assert.equal(cypherLines.length,131);
assert.equal(cypherLines[0].text,'니가 무엇을 하든 I will kill for');
assert.equal(cypherLines.at(-1).text,'불신을 참아낸 닌자가 돼 다시 돌아왔지');
assert.equal(cypherLines.filter(l=>l.text==='Hater들은 많지').length,3);
assert.equal(cypherLines.filter(l=>l.text==='니가 무엇을 하든 I will kill for').length,1);
for(const l of cypherLines){assert.ok(l.text&&l.translation);if(l.english)continue;const terms=l.entries.map(e=>e.term).join(' ');for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Cypher 3: sem análise de '+token);for(const e of l.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(cypherPt3Vocabulary.verbs.length,36);assert.equal(cypherPt3Vocabulary.nouns.length,31);
for(const title of ['BTS Cypher PT.3 : KILLER (feat. Supreme Boi)','BTS Cypher, Pt. 3: KILLER (feat. Supreme Boi)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'cypher-pt3');
assert.equal(songs.find(s=>s.id==='cypher-pt3').exercises.length,5);
console.log('PASS: Cypher 3: '+cypherLines.length+' linhas, refrões preservados, cópia integral duplicada removida, análise de todos os termos coreanos, vocabulário e exercícios.');

const {egoSections,egoVocabulary}=await load('lib/ego.ts');const egoLines=egoSections.flatMap(s=>s.lines);
assert.equal(egoSections.length,8);assert.equal(egoLines.length,60);
assert.equal(egoLines[0].text,"We're now going to progress to some steps which are a bit more difficult");
assert.equal(egoLines.at(-1).text,"That's my ego, that's my ego (Map of the Soul)");
assert.equal(egoLines.filter(l=>l.text==='그 길로, 길로, 길로').length,2);
assert.equal(egoLines.filter(l=>l.text==='(Ready, set, and begin)').length,2);
for(const l of egoLines){assert.ok(l.text&&l.translation);if(l.english)continue;const terms=l.entries.map(e=>e.term).join(' ');for(const token of l.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Ego: sem análise de '+token);for(const e of l.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(egoVocabulary.verbs.length,22);assert.equal(egoVocabulary.nouns.length,25);
for(const title of ['Outro : Ego','Outro: Ego'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'ego');
assert.equal(songs.find(s=>s.id==='ego').exercises.length,5);
console.log('PASS: Ego: '+egoLines.length+' linhas, 8 seções, termos coreanos analisados, notas de grafia, vocabulário e botão Estudar.');

const {friendsSections,friendsVocabulary}=await load('lib/friends.ts');
const friendsLines=friendsSections.flatMap(s=>s.lines);
assert.equal(friendsSections.length,13);assert.equal(friendsLines.length,61);
assert.equal(friendsLines[0].text,'유난히도 반짝였던 서울');
assert.equal(friendsLines.at(-1).text,'오래');
assert.equal(friendsLines.filter(l=>l.text==='언젠가 이 함성 멎을 때 stay hey').length,4);
assert.equal(friendsLines.filter(l=>l.text==='일곱 번의 여름과 추운 겨울보다').length,4);
assert.equal(friendsLines.filter(l=>l.text==='You are my soulmate').length,4);
for(const line of friendsLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Friends: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(friendsVocabulary.verbs.length,23);assert.equal(friendsVocabulary.nouns.length,28);
for(const title of ['Friends','친구'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'friends');
assert.equal(songs.find(s=>s.id==='friends').exercises.length,5);
console.log('PASS: Friends: 61 linhas, 13 seções, repetições preservadas, análise dos termos coreanos, 23 verbos, 28 substantivos e 5 exercícios de clicar.');

const {filterSections,filterVocabulary}=await load('lib/filter.ts');
const filterLines=filterSections.flatMap(s=>s.lines);
assert.equal(filterSections.length,9);assert.equal(filterLines.length,42);
assert.equal(filterLines[0].text,'너의 따분한 그 표정 지루한 발끝');
assert.equal(filterLines.at(-1).text,'Ay 날 네 맘에 씌워줘');
assert.equal(filterLines.filter(l=>l.text==='팔레트 속 색을 섞어 Pick your filter').length,2);
assert.equal(filterLines.filter(l=>l.text==='날 골라 쓰면 돼 Yeah').length,2);
for(const line of filterLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Filter: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(filterVocabulary.verbs.length,32);assert.equal(filterVocabulary.nouns.length,19);
assert.equal(new Function(studyLookup+";return studyFor('Filter');")(),'filter');
assert.equal(songs.find(s=>s.id==='filter').exercises.length,5);
console.log('PASS: Filter: 42 linhas, 9 seções, repetições preservadas, termos coreanos analisados, vocabulário e 5 exercícios de clicar.');

const {herSections,herVocabulary}=await load('lib/her.ts');
const herLines=herSections.flatMap(s=>s.lines);
assert.equal(herSections.length,6);assert.equal(herLines.length,82);
assert.equal(herLines[0].text,'The world is a complex');
assert.equal(herLines.at(-1).text,"Cuz you're my tear, tear");
assert.equal(herLines.filter(l=>l.text==='내 모든 wonder').length,6);
assert.equal(herLines.filter(l=>l.text==='에 대한 answer').length,6);
assert.equal(herLines.filter(l=>l.text==='그 좋아하던 XX도 끊었지').length,1);
for(const line of herLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Her: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(herVocabulary.verbs.length,38);assert.equal(herVocabulary.nouns.length,41);
for(const title of ['Her','Outro: Her','Outro : Her'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'her');
assert.equal(songs.find(s=>s.id==='her').exercises.length,5);
console.log('PASS: Her: 82 linhas, 6 seções, refrões preservados, termos coreanos analisados, 38 verbos, 41 substantivos e 5 exercícios de clicar.');

const {singularitySections,singularityVocabulary}=await load('lib/singularity.ts');
const singularityLines=singularitySections.flatMap(s=>s.lines);
assert.equal(singularitySections.length,7);assert.equal(singularityLines.length,28);
assert.equal(singularityLines[0].text,'무언가 깨지는 소리');
assert.equal(singularityLines.at(-1).text,'그 때 내가 무얼해야했는지');
for(const line of singularityLines){
  assert.ok(line.text&&line.translation);
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Singularity: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.ok(singularityLines.find(l=>l.text==='낮설음 가득한 소리').entries.some(e=>e.notes.join(' ').includes('낯섦')));
assert.ok(singularityLines.find(l=>l.text==='나를 괴롭히는 환상 통은 여전해').entries.some(e=>e.meaning.includes('dor fantasma')));
assert.equal(singularityVocabulary.verbs.length,29);assert.equal(singularityVocabulary.nouns.length,20);
for(const title of ['Singularity','Intro: Singularity','Intro : Singularity'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'singularity');
assert.equal(songs.find(s=>s.id==='singularity').exercises.length,5);
console.log('PASS: Singularity: 28 linhas, 7 seções, grafias enviadas preservadas com notas, cobertura dos termos coreanos, vocabulário e 5 exercícios de clicar.');

const {euphoriaSections,euphoriaVocabulary}=await load('lib/euphoria.ts');
const euphoriaLines=euphoriaSections.flatMap(s=>s.lines);
assert.equal(euphoriaSections.length,11);assert.equal(euphoriaLines.length,57);
assert.equal(euphoriaLines[0].text,'너는 내 삶에 다시 뜬 햇빛');
assert.equal(euphoriaLines.at(-1).text,"When I'm with you, I'm in utopia");
assert.equal(euphoriaLines.filter(l=>l.text==='Take my hands now').length,7);
assert.equal(euphoriaLines.filter(l=>l.text==='저기 멀리서 바다가 들려').length,2);
assert.equal(euphoriaLines.filter(l=>l.text==='저기 멀리서 바다가 들려 (들려)').length,1);
for(const line of euphoriaLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Euphoria: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(euphoriaVocabulary.verbs.length,26);assert.equal(euphoriaVocabulary.nouns.length,24);
for(const title of ['Euphoria','Euphoria: Theme of Love Yourself Wonder'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'euphoria');
assert.equal(songs.find(s=>s.id==='euphoria').exercises.length,5);
console.log('PASS: Euphoria: 57 linhas, 11 seções, repetições e respostas vocais preservadas, termos coreanos analisados, vocabulário e 5 exercícios de clicar.');

const {justDanceSections,justDanceVocabulary}=await load('lib/just-dance.ts');
const justDanceLines=justDanceSections.flatMap(s=>s.lines);
assert.equal(justDanceSections.length,11);assert.equal(justDanceLines.length,77);
assert.equal(justDanceLines[0].text,'내게 그 순간을 묻는다면');
assert.equal(justDanceLines.at(-1).text,'Just dance');
assert.equal(justDanceLines.filter(l=>l.text==='함께 하는 느낌이 좋아, 너와').length,5);
assert.equal(justDanceLines.filter(l=>l.text==='음악의 리듬대로').length,2);
assert.equal(justDanceLines.filter(l=>l.text==='그 모든 합이 공식같이 맞춰진 걸 baby').length,2);
for(const line of justDanceLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Just Dance: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(justDanceVocabulary.verbs.length,31);assert.equal(justDanceVocabulary.nouns.length,38);
for(const title of ['Trivia 起 : Just Dance','Trivia 起: Just Dance','Just Dance'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'just-dance');
assert.equal(songs.find(s=>s.id==='just-dance').exercises.length,5);
console.log('PASS: Just Dance: 77 linhas, 11 seções, refrões preservados, cobertura dos termos coreanos, 31 verbos, 38 substantivos e 5 exercícios de clicar.');

const {zeroOclockSections,zeroOclockVocabulary}=await load('lib/zero-oclock.ts');
const zeroOclockLines=zeroOclockSections.flatMap(s=>s.lines);
assert.equal(zeroOclockSections.length,12);assert.equal(zeroOclockLines.length,91);
assert.equal(zeroOclockLines[0].text,'그런 날 있잖아');
assert.equal(zeroOclockLines.at(-1).text,"Zero O'Clock");
assert.equal(zeroOclockLines.filter(l=>l.text==='And you gonna be happy').length,12);
assert.equal(zeroOclockLines.filter(l=>l.text==='집에 와').length,2);
assert.equal(zeroOclockLines.filter(l=>l.text==='오늘도 나를 토닥여').length,1);
for(const line of zeroOclockLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Zero Oclock: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(zeroOclockVocabulary.verbs.length,41);assert.equal(zeroOclockVocabulary.nouns.length,29);
for(const title of ["00:00 (Zero O'Clock)",'00:00 (Zero O’Clock)',"Zero O'Clock"])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'zero-oclock');
assert.equal(songs.find(s=>s.id==='zero-oclock').exercises.length,5);
console.log('PASS: Zero Oclock: 91 linhas, 12 seções, refrões e final preservados, termos coreanos analisados, 41 verbos, 29 substantivos e 5 exercícios de clicar.');

const {dimpleSections,dimpleVocabulary}=await load('lib/dimple.ts');
const dimpleLines=dimpleSections.flatMap(s=>s.lines);
assert.equal(dimpleSections.length,12);assert.equal(dimpleLines.length,54);
assert.equal(dimpleLines[0].text,'꼭꼭 숨었다가 웃으면 나타나');
assert.equal(dimpleLines.at(-1).text,'But I want it anyway anyway anyway');
assert.equal(dimpleLines.filter(l=>l.text==='그 보조갠 illegal').length,6);
assert.equal(dimpleLines.filter(l=>l.text==='So I call you illegirl').length,3);
assert.equal(dimpleLines.filter(l=>l.text==='Illegal').length,2);
for(const line of dimpleLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Dimple: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(dimpleVocabulary.verbs.length,21);assert.equal(dimpleVocabulary.nouns.length,13);
for(const title of ['Dimple','보조개','보조개 (Dimple)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'dimple');
assert.equal(songs.find(s=>s.id==='dimple').exercises.length,5);
console.log('PASS: Dimple: 54 linhas, 12 seções, repetições preservadas, termos coreanos analisados, trocadilho explicado, vocabulário e 5 exercícios de clicar.');

const {forYouthSections,forYouthVocabulary}=await load('lib/for-youth.ts');
const forYouthLines=forYouthSections.flatMap(s=>s.lines);
assert.equal(forYouthSections.length,13);assert.equal(forYouthLines.length,69);
assert.equal(forYouthLines[0].text,'If I never met you');
assert.equal(forYouthLines.at(-1).text,'Rest of my life');
assert.equal(forYouthLines.filter(l=>l.text==='습관이 돼버린 그 말').length,3);
assert.equal(forYouthLines.filter(l=>l.text==="You're my best friend").length,2);
assert.equal(forYouthLines.filter(l=>l.text==='힘들면 잠시 쉬어도 돼').length,1);
for(const line of forYouthLines){
  assert.ok(line.text&&line.translation);
  if(line.english)continue;
  const terms=line.entries.map(e=>e.term).join(' ');
  for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'For Youth: sem análise de '+token);
  for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(forYouthVocabulary.verbs.length,35);assert.equal(forYouthVocabulary.nouns.length,24);
assert.equal(new Function(studyLookup+";return studyFor('For Youth');")(),'for-youth');
assert.equal(songs.find(s=>s.id==='for-youth').exercises.length,5);
console.log('PASS: For Youth: 69 linhas, 13 seções, repetições preservadas, termos coreanos analisados, notas de grafia, vocabulário e 5 exercícios de clicar.');

const {flyToMyRoomSections,flyToMyRoomVocabulary}=await load('lib/fly-to-my-room.ts');
const flyLines=flyToMyRoomSections.flatMap(s=>s.lines);
assert.equal(flyToMyRoomSections.length,9);assert.equal(flyLines.length,78);
assert.equal(flyLines[0].text,'떠나볼까 let me fly to my');
assert.equal(flyLines.at(-1).text,"And now I'm feelin' brand new (new)");
assert.equal(flyLines.filter(l=>l.text==='시선을 낮추고 어디든 막 zoom').length,5);
for(const line of flyLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Fly To My Room: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(flyToMyRoomVocabulary.verbs.length,21);assert.equal(flyToMyRoomVocabulary.nouns.length,20);
for(const title of ['Fly To My Room','내 방을 여행하는 법'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'fly-to-my-room');
const flySong=songs.find(s=>s.id==='fly-to-my-room');assert.equal(flySong.exercises.length,5);
for(const exercise of flySong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Fly To My Room: 78 supplied lines, 9 sections, Korean analysis, vocabulary, catalog links and 5 clickable exercises.');

const {blueGreySections,blueGreyVocabulary}=await load('lib/blue-grey.ts');
const blueLines=blueGreySections.flatMap(s=>s.lines);
assert.equal(blueGreySections.length,7);assert.equal(blueLines.length,60);
assert.equal(blueLines[0].text,'Where is my angel');
assert.equal(blueLines.at(-1).text,'이제 새벽잠이 드네 good night');
assert.equal(blueLines.filter(l=>l.text==='I just wanna be happier').length,3);
for(const line of blueLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Blue & Grey: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(blueGreyVocabulary.verbs.length,26);assert.equal(blueGreyVocabulary.nouns.length,29);
assert.ok(blueLines.find(l=>l.text==='차가운 날 녹여줘').entries.some(e=>e.notes.some(n=>n.includes('나를'))));
assert.ok(blueLines.find(l=>l.text==='내 손의 온길 느껴줘').entries.some(e=>e.notes.some(n=>n.includes('온기를'))));
for(const title of ['Blue & Grey','Blue and Grey'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'blue-grey');
const blueSong=songs.find(s=>s.id==='blue-grey');assert.equal(blueSong.exercises.length,5);
for(const exercise of blueSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Blue & Grey: 60 supplied lines, Korean coverage, contextual grammar notes, vocabulary and 5 clickable exercises.');

const {telepathySections,telepathyVocabulary}=await load('lib/telepathy.ts');
const telepathyLines=telepathySections.flatMap(s=>s.lines);
assert.equal(telepathySections.length,9);assert.equal(telepathyLines.length,51);
assert.equal(telepathyLines[0].text,'매번 같은 하루들 중에');
assert.equal(telepathyLines.at(-1).text,'너란 사람은 내게 가장 특별해 (특별해)');
assert.equal(telepathyLines.filter(l=>l.text==='비록 지금은 멀어졌어도').length,2);
assert.equal(telepathyLines.filter(l=>l.text==='너를 만날 때 가장 난 행복해 (행복해)').length,2);
assert.equal(telepathyLines.filter(l=>l.english).length,3);
for(const line of telepathyLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Telepathy: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(telepathyVocabulary.verbs.length,28);assert.equal(telepathyVocabulary.nouns.length,23);
assert.ok(telepathyLines.find(l=>l.text==='눈꼽 대신 너만 묻었다 잔뜩').entries.some(e=>e.notes.some(n=>n.includes('눈곱'))));
assert.ok(telepathyLines.some(l=>l.text==='Oh can I be your Bibilly Hills'));
for(const title of ['Telepathy','잠시','Telepathy (잠시)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'telepathy');
const telepathySong=songs.find(s=>s.id==='telepathy');assert.equal(telepathySong.exercises.length,5);
for(const exercise of telepathySong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Telepathy: 51 supplied lines, repetitions, Korean coverage, spelling and context notes, vocabulary, catalog links and 5 clickable exercises.');

const {disEaseSections,disEaseVocabulary}=await load('lib/dis-ease.ts');
const disEaseLines=disEaseSections.flatMap(s=>s.lines);
assert.equal(disEaseSections.length,13);assert.equal(disEaseLines.length,96);
assert.equal(disEaseLines[0].text,'Mm, uh-oh');
assert.equal(disEaseLines.at(-1).text,'버려 겁겁겁 버려');
assert.ok(!disEaseLines.some(l=>l.text==='창 닫기'),'Copied close-window control is not a lyric');
assert.equal(disEaseLines.filter(l=>l.text==='Everyday 나를 위로해').length,3);
assert.equal(disEaseLines.filter(l=>l.text==='Maybe').length,2);
assert.ok(disEaseLines.some(l=>l.text==='벼벼벼벼벼 병'));
assert.ok(disEaseLines.some(l=>l.text==='거거거거거 겁'));
for(const line of disEaseLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Dis-ease: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(disEaseVocabulary.verbs.length,33);assert.equal(disEaseVocabulary.nouns.length,29);
assert.ok(disEaseLines.find(l=>l.text==="I'm ill, 그래 내가 일 그 자체").entries.some(e=>e.notes.some(n=>n.includes('trocadilho'))));
assert.ok(disEaseLines.find(l=>l.text==='이 유리 같은 병이 때리지 니 머리').entries.some(e=>e.notes.some(n=>n.includes('garrafa'))));
assert.ok(disEaseLines.find(l=>l.text==='다시 아침이야 오늘을 나야 해').entries.some(e=>e.notes.some(n=>n.includes('atravessar'))));
for(const title of ['Dis-ease','병','Dis-ease (병)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'dis-ease');
const disEaseSong=songs.find(s=>s.id==='dis-ease');assert.equal(disEaseSong.exercises.length,5);
for(const exercise of disEaseSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Dis-ease: 96 lyric lines, repetitions and sound fragments, Korean analysis, contextual wordplay, vocabulary, catalog links and 5 clickable exercises.');

const {makeItRightSections,makeItRightVocabulary}=await load('lib/make-it-right.ts');
const makeItRightLines=makeItRightSections.flatMap(s=>s.lines);
assert.equal(makeItRightSections.length,12);assert.equal(makeItRightLines.length,80);
assert.equal(makeItRightLines[0].text,'내가 날 눈치챘던 순간');
assert.equal(makeItRightLines.at(-1).text,'Oh, I can make it right');
assert.equal(makeItRightLines.filter(l=>l.text==='All right').length,9);
assert.equal(makeItRightLines.filter(l=>l.text==='Alright').length,2);
assert.equal(makeItRightLines.filter(l=>l.text==='끝도 보이지 않던 영원의 밤').length,2);
assert.equal(makeItRightLines.filter(l=>l.english).length,35);
for(const line of makeItRightLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Make It Right: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(makeItRightVocabulary.verbs.length,27);assert.equal(makeItRightVocabulary.nouns.length,23);
assert.equal(new Function(studyLookup+";return studyFor('Make It Right');")(),'make-it-right');
const makeItRightSong=songs.find(s=>s.id==='make-it-right');assert.equal(makeItRightSong.exercises.length,5);
for(const exercise of makeItRightSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Make It Right: 80 supplied lines, Korean analysis, repetitions and spelling variants, vocabulary, catalog link and 5 clickable exercises.');

const {dionysusSections,dionysusVocabulary}=await load('lib/dionysus.ts');
const dionysusLines=dionysusSections.flatMap(s=>s.lines);
assert.equal(dionysusSections.length,15);assert.equal(dionysusLines.length,113);
assert.equal(dionysusLines[0].text,'쭉 들이켜');
assert.equal(dionysusLines.at(-1).text,'The illest');
assert.equal(dionysusLines.filter(l=>l.english).length,15);
assert.equal(dionysusLines.filter(l=>l.text==='예술에 취해 불러 옹헤야').length,3);
assert.equal(dionysusLines.filter(l=>l.text==='다시 환생한 artist').length,3);
assert.equal(dionysusLines.filter(l=>l.text==="술잔 sippin' 팔짱 tippin'").length,4);
for(const line of dionysusLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Dionysus: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(dionysusVocabulary.verbs.length,24);assert.equal(dionysusVocabulary.nouns.length,28);
assert.ok(dionysusLines.find(l=>l.text==='뭐가 중요해 짠해').entries.some(e=>e.notes.some(n=>n.includes('brinde'))));
assert.ok(dionysusLines.find(l=>l.text==='다른 손에 든 티르소스').entries.some(e=>e.notes.some(n=>n.includes('들다'))));
assert.equal(new Function(studyLookup+";return studyFor('Dionysus');")(),'dionysus');
const dionysusSong=songs.find(s=>s.id==='dionysus');assert.equal(dionysusSong.exercises.length,5);
for(const exercise of dionysusSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Dionysus: 113 supplied lines, Korean coverage, repetitions, contextual grammar, vocabulary, catalog link and 5 clickable exercises.');

const {interludeShadowSections,interludeShadowVocabulary}=await load('lib/interlude-shadow.ts');
const shadowLines=interludeShadowSections.flatMap(s=>s.lines);
assert.equal(interludeShadowSections.length,8);assert.equal(shadowLines.length,103);
assert.equal(shadowLines[0].text,'I wanna be a rap star');
assert.equal(shadowLines.at(-1).text,'우린 너고 우린 나야, 알겠니');
assert.equal(shadowLines.filter(l=>l.english).length,48);
assert.equal(shadowLines.filter(l=>l.text==='I wanna be a rap star').length,4);
assert.equal(shadowLines.filter(l=>l.text==='I wanna be...').length,3);
assert.equal(shadowLines.filter(l=>l.text==="Please don't let me shine").length,4);
assert.equal(shadowLines.filter(l=>l.text==='공교롭게도 여긴 장공이잖아').length,2);
for(const line of shadowLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Shadow: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(interludeShadowVocabulary.verbs.length,36);assert.equal(interludeShadowVocabulary.nouns.length,23);
assert.ok(shadowLines.find(l=>l.text.includes('알겠니매번')).entries.some(e=>e.notes.some(n=>n.includes('junção'))));
assert.ok(shadowLines.find(l=>l.text==='성공 거부 실패, 어디 있던지 yeah').entries.some(e=>e.notes.some(n=>n.includes('ambígua'))));
assert.ok(shadowLines.find(l=>l.text==='떼어낼 수 없어 니가 뭐를 하던지 yeah').entries.some(e=>e.notes.some(n=>n.includes('하든지'))));
for(const title of ['Interlude: Shadow','Interlude : Shadow','Shadow'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'interlude-shadow');
const shadowSong=songs.find(s=>s.id==='interlude-shadow');assert.equal(shadowSong.exercises.length,5);
for(const exercise of shadowSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Interlude: Shadow: 103 supplied lines, Korean analysis, repetitions, transcription notes, vocabulary, catalog aliases and 5 clickable exercises.');

const {blackSwanSections,blackSwanVocabulary}=await load('lib/black-swan.ts');
const blackSwanLines=blackSwanSections.flatMap(s=>s.lines);
assert.equal(blackSwanSections.length,11);assert.equal(blackSwanLines.length,83);
assert.equal(blackSwanLines[0].text,'Do your thang');
assert.equal(blackSwanLines.at(-1).text,'Yeah yeah yeah yeah');
assert.equal(blackSwanLines.filter(l=>l.english).length,46);
assert.equal(blackSwanLines.filter(l=>l.text==='Do your thang').length,6);
assert.equal(blackSwanLines.filter(l=>l.text==='모든 빛이 침묵하는 바다 yeah yeah yeah').length,2);
assert.equal(blackSwanLines.filter(l=>l.text==='Film it now').length,4);
assert.ok(blackSwanLines.some(l=>l.text==='귓가엔 느린 심장 소리만 bump bump bump'));
assert.ok(blackSwanLines.some(l=>l.text==='귓가엔 빠른 심장 소리만 bump bump bump'));
for(const line of blackSwanLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Black Swan: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(blackSwanVocabulary.verbs.length,30);assert.equal(blackSwanVocabulary.nouns.length,24);
assert.ok(blackSwanLines.find(l=>l.text==='심장이 뛰지 않는대').entries.some(e=>e.notes.some(n=>n.includes('-는다고 해'))));
assert.ok(blackSwanLines.find(l=>l.text==='나는 날 봤어').entries.some(e=>e.notes.some(n=>n.includes('나를'))));
assert.equal(new Function(studyLookup+";return studyFor('Black Swan');")(),'black-swan');
const blackSwanSong=songs.find(s=>s.id==='black-swan');assert.equal(blackSwanSong.exercises.length,5);
for(const exercise of blackSwanSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Black Swan: 83 supplied lines, Korean analysis, repeated hooks and choruses, slow/fast contrast, vocabulary, catalog link and 5 clickable exercises.');

const {myTimeSections,myTimeVocabulary}=await load('lib/my-time.ts');
const myTimeLines=myTimeSections.flatMap(s=>s.lines);
assert.equal(myTimeSections.length,6);assert.equal(myTimeLines.length,57);
assert.equal(myTimeLines[0].text,'24 누구보다 더 빨리 어른이 된 것만 같아');
assert.equal(myTimeLines.at(-1).text,'Find my time');
assert.equal(myTimeLines.filter(l=>l.english).length,43);
assert.equal(myTimeLines.filter(l=>l.text==='왜 나만 다른 시공간 속인 걸까').length,2);
assert.equal(myTimeLines.filter(l=>l.text==='Can I someday finna find my time').length,4);
assert.equal(myTimeLines.filter(l=>l.text==="Oh I can't call ya I can't hol' ya").length,2);
assert.equal(myTimeLines.filter(l=>l.text==="Oh I will call ya I will hol' ya").length,1);
for(const line of myTimeLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'My Time: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(myTimeVocabulary.verbs.length,19);assert.equal(myTimeVocabulary.nouns.length,16);
assert.ok(myTimeLines.find(l=>l.text==='모잘 눌러쓰고 계속 달려').entries.some(e=>e.notes.some(n=>n.includes('모자를'))));
assert.ok(myTimeLines.find(l=>l.text==='나도 모르게 커버린 어린 나').entries.some(e=>e.notes.some(n=>n.includes('크다'))));
for(const title of ['My Time','시차','My Time (시차)','시차 (My Time)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'my-time');
const myTimeSong=songs.find(s=>s.id==='my-time');assert.equal(myTimeSong.exercises.length,5);
for(const exercise of myTimeSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: My Time: 57 supplied lines, Korean analysis, repetitions, final can/will contrast, vocabulary, catalog aliases and 5 clickable exercises.');

const {louderThanBombsSections,louderThanBombsVocabulary}=await load('lib/louder-than-bombs.ts');
const louderLines=louderThanBombsSections.flatMap(s=>s.lines);
assert.equal(louderThanBombsSections.length,10);assert.equal(louderLines.length,55);
assert.equal(louderLines[0].text,'이젠 너무 선명해졌어');
assert.equal(louderLines.at(-1).text,'Louder than bombs I sing');
assert.equal(louderLines.filter(l=>l.english).length,19);
assert.equal(louderLines.filter(l=>l.text==='사람들은 뭐 우리가 부럽대').length,2);
assert.equal(louderLines.filter(l=>l.text==='Louder than bombs I break').length,2);
assert.equal(louderLines.filter(l=>l.text==='Louder than bombs I say').length,2);
assert.equal(louderLines.filter(l=>l.text==='Louder than bombs I sing').length,2);
assert.equal(louderLines.filter(l=>l.text==='Lighter than the light').length,2);
for(const line of louderLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Louder Than Bombs: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(louderThanBombsVocabulary.verbs.length,30);assert.equal(louderThanBombsVocabulary.nouns.length,19);
assert.ok(louderLines.find(l=>l.text==='그 표정이 아니란 걸 안 그때부터').entries.some(e=>e.notes.some(n=>n.includes('알다'))));
assert.ok(louderLines.find(l=>l.text==='파도가 일곤 해').entries.some(e=>e.notes.some(n=>n.includes('permanece'))));
assert.ok(louderLines.find(l=>l.text==='사람들은 뭐 우리가 부럽대').entries.some(e=>e.notes.some(n=>n.includes('Não significa que nós invejamos'))));
assert.equal(new Function(studyLookup+";return studyFor('Louder Than Bombs');")(),'louder-than-bombs');
const louderSong=songs.find(s=>s.id==='louder-than-bombs');assert.equal(louderSong.exercises.length,5);
for(const exercise of louderSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Louder Than Bombs: 55 supplied lines, Korean analysis, repeated verse, break/say/sing progression, vocabulary, catalog link and 5 clickable exercises.');

const {ughSections,ughVocabulary}=await load('lib/ugh.ts');
const ughLines=ughSections.flatMap(s=>s.lines);
assert.equal(ughSections.length,11);assert.equal(ughLines.length,76);
assert.equal(ughLines[0].text,'타닥 또 타오르는 저 불씨');
assert.equal(ughLines.at(-1).text,'나는 꺼져야만 했던 그 분노에 분노해');
assert.equal(ughLines.filter(l=>l.english).length,1);
assert.equal(ughLines.filter(l=>l.text==='나는 욱해 욱해').length,10);
assert.equal(ughLines.filter(l=>l.text==='나는 악의에 가득 찬 분노에 분노해').length,5);
assert.equal(ughLines.filter(l=>l.text==='그래 욱 욱 욱해라 욱').length,4);
assert.ok(ughLines.some(l=>l.text==='타오를 땐 이유가 있으'));
assert.ok(ughLines.some(l=>l.text==='나 시켰어봐 그냥 에헴 비헴 에헴'));
for(const line of ughLines){
 assert.ok(line.text&&line.translation);
 if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}
 const terms=line.entries.map(e=>e.term).join(' ');
 for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'UGH!: missing analysis of '+token);
 for(const entry of line.entries)assert.ok(entry.meaning&&entry.notes.length);
}
assert.equal(ughVocabulary.verbs.length,34);assert.equal(ughVocabulary.nouns.length,28);
assert.ok(ughLines.find(l=>l.text==='반응이 없음 걍 담궈버리지 푹푹 yeah').entries.some(e=>e.notes.some(n=>n.includes('담가'))));
assert.ok(ughLines.find(l=>l.text==='이곳에선 모두가 도덕적 사고와').entries.some(e=>e.notes.some(n=>n.includes('não acidente'))));
assert.ok(ughLines.find(l=>l.text==='그 정돈 감수해야지 에헴').entries.some(e=>e.notes.some(n=>n.includes('pigarro'))));
for(const title of ['UGH!','UGH','욱','UGH! (욱)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'ugh');
const ughSong=songs.find(s=>s.id==='ugh');assert.equal(ughSong.exercises.length,5);
for(const exercise of ughSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: UGH!: 76 supplied lines, Korean analysis, sound fragments, wordplay and colloquial spellings, repeated choruses, vocabulary, catalog links and 5 clickable exercises.');

const {innerChildSections,innerChildVocabulary}=await load('lib/inner-child.ts');
const innerLines=innerChildSections.flatMap(s=>s.lines);
assert.equal(innerChildSections.length,6);assert.equal(innerLines.length,60);
assert.equal(innerLines[0].text,'그때 우리');assert.equal(innerLines.at(-1).text,"We gon' change");
assert.equal(innerLines.filter(l=>l.english).length,21);
assert.equal(innerLines.filter(l=>l.text==="We gon' change").length,18);
assert.equal(innerLines.filter(l=>l.text==='숨을 마시고 네 문을 두드리네').length,2);
for(const line of innerLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Inner Child: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(innerChildVocabulary.verbs.length,25);assert.equal(innerChildVocabulary.nouns.length,25);
assert.ok(innerLines.find(l=>l.text==='많이 웃었음 해').entries.some(e=>e.notes.some(n=>n.includes('웃었으면 해'))));
assert.ok(innerLines.find(l=>l.text==='아팠을 거야').entries.some(e=>e.notes.some(n=>n.includes('retrospectiva'))));
assert.ok(innerLines.find(l=>l.text==='내가 너가 될 테니').entries.some(e=>e.notes.some(n=>n.includes('네가'))));
assert.ok(innerLines.find(l=>l.text==='네게 내 손을 맞닿으면').entries.some(e=>e.notes.some(n=>n.includes('손이 맞닿으면'))));
assert.equal(new Function(studyLookup+";return studyFor('Inner Child');")(),'inner-child');
const innerSong=songs.find(s=>s.id==='inner-child');assert.equal(innerSong.exercises.length,5);
for(const exercise of innerSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Inner Child: all 60 supplied lines, 18 change refrains, past inference and wishes, supplied spellings, vocabulary, catalog link and 5 clickable exercises.');

const {respectSections,respectVocabulary}=await load('lib/respect.ts');
const respectLines=respectSections.flatMap(s=>s.lines);
assert.equal(respectSections.length,7);assert.equal(respectLines.length,71);
assert.equal(respectLines[0].text,'Re-re-re-respect');assert.equal(respectLines.at(-1).text,'(Respect) Oh yeah');
assert.equal(respectLines.filter(l=>l.english).length,19);
assert.equal(respectLines.filter(l=>l.text==='(Respect) 쉽게들 말하네').length,2);
assert.equal(respectLines.filter(l=>l.text==='(Respect) One time').length,4);
assert.equal(respectLines.filter(l=>l.text==='(Respect Respect)').length,4);
for(const line of respectLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Respect: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(respectVocabulary.verbs.length,28);assert.equal(respectVocabulary.nouns.length,25);
assert.ok(respectLines.find(l=>l.text==='존중조차도 없는데').entries.some(e=>e.notes.some(n=>n.includes('consideração'))));
assert.ok(respectLines.find(l=>l.text==='뒤에선 호박씨 까는 거').entries.some(e=>e.notes.some(n=>n.includes('dissimulado'))));
assert.ok(respectLines.find(l=>l.text==='나도 잘은 몰라 brotha 낸들 알어').entries.some(e=>e.notes.some(n=>n.includes('난들'))));
assert.ok(respectLines.find(l=>l.text==='너도 나를 respect 할 거라는 생각은 1도 없으니 스킵해').entries.some(e=>e.notes.some(n=>n.includes('nem um pouco'))));
assert.equal(new Function(studyLookup+";return studyFor('Respect');")(),'respect');
const respectSong=songs.find(s=>s.id==='respect');assert.equal(respectSong.exercises.length,5);
for(const exercise of respectSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Respect: 71 supplied lines, repeated hooks, admiration/consideration, idioms and irony, supplied spelling notes, vocabulary, catalog link and 5 clickable exercises.');

const {eternalSections,eternalVocabulary}=await load('lib/we-are-bulletproof-eternal.ts');
const eternalLines=eternalSections.flatMap(s=>s.lines);
assert.equal(eternalSections.length,11);assert.equal(eternalLines.length,76);
assert.equal(eternalLines[0].text,'가진 게 꿈밖에 없었네');assert.equal(eternalLines.at(-1).text,'With you');
assert.equal(eternalLines.filter(l=>l.english).length,40);
assert.equal(eternalLines.filter(l=>l.text==='내게 돌을 던져').length,3);
assert.equal(eternalLines.filter(l=>l.text==='We were only seven').length,2);
assert.equal(eternalLines.filter(l=>l.text==='Yeah we are not seven, with you').length,2);
for(const line of eternalLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'The Eternal: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(eternalVocabulary.verbs.length,24);assert.equal(eternalVocabulary.nouns.length,21);
assert.ok(eternalLines.find(l=>l.text==='가진 게 꿈밖에 없었네').entries.some(e=>e.notes.some(n=>n.includes('밖에'))));
assert.ok(eternalLines.find(l=>l.text==='부정적인 시선에 맞서 우린 해냈구').entries.some(e=>e.notes.some(n=>n.includes('-고'))));
assert.ok(eternalLines.find(l=>l.text==='다신 멈추지 않을래').entries.some(e=>e.notes.some(n=>n.includes('다시는'))));
for(const title of ['We Are Bulletproof: The Eternal','We are Bulletproof : the Eternal','We Are Bulletproof The Eternal'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'we-are-bulletproof-eternal');
assert.equal(new Function(studyLookup+";return studyFor('We Are Bulletproof Pt.2');")(),undefined);
const eternalSong=songs.find(s=>s.id==='we-are-bulletproof-eternal');assert.equal(eternalSong.exercises.length,5);
for(const exercise of eternalSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: The Eternal: 76 supplied lines, all choruses and final preserved, Korean analysis, vocabulary, precise catalog aliases and 5 clickable exercises.');

const {heartbeatSections,heartbeatVocabulary}=await load('lib/heartbeat.ts');
const heartLines=heartbeatSections.flatMap(s=>s.lines);
assert.equal(heartbeatSections.length,11);assert.equal(heartLines.length,51);
assert.equal(heartLines[0].text,'It leaves me feeling seasick baby');assert.equal(heartLines.at(-1).text,'운명을 느껴 나 나 나 나 나');
assert.equal(heartLines.filter(l=>l.english).length,23);
assert.equal(heartLines.filter(l=>l.text==='어제처럼 다시 이 손 놓치 말고').length,3);
assert.equal(heartLines.filter(l=>l.text==='발 맞춰 봐 다시 더는 헤매이지 않도록').length,3);
assert.equal(heartLines.filter(l=>l.text==='운명을 느껴 너 너 너 너 너').length,5);
assert.equal(heartLines.filter(l=>l.text==='운명을 느껴 나 나 나 나 나').length,5);
for(const line of heartLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Heartbeat: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(heartbeatVocabulary.verbs.length,19);assert.equal(heartbeatVocabulary.nouns.length,18);
assert.ok(heartLines.find(l=>l.text==='어제처럼 다시 이 손 놓치 말고').entries.some(e=>e.notes.some(n=>n.includes('놓지 말고')&&n.includes('놓치지 말고'))));
assert.ok(heartLines.find(l=>l.text==='다시 널 찾을꺼야 운명처럼').entries.some(e=>e.notes.some(n=>n.includes('찾을 거야'))));
assert.ok(heartLines.some(l=>l.text==='I got youniverse, done'));
assert.equal(new Function(studyLookup+";return studyFor('Heartbeat');")(),'heartbeat');
const heartSong=songs.find(s=>s.id==='heartbeat');assert.equal(heartSong.exercises.length,5);
for(const exercise of heartSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Heartbeat: all 51 supplied lines, repeated choruses and final, spelling distinctions, Korean coverage, vocabulary, catalog link and 5 clickable exercises.');

const {dreamGlowSections,dreamGlowVocabulary}=await load('lib/dream-glow.ts');
const dreamLines=dreamGlowSections.flatMap(s=>s.lines);
assert.equal(dreamGlowSections.length,9);assert.equal(dreamLines.length,34);
assert.equal(dreamLines[0].text,'I spend my whole life following the night time');assert.equal(dreamLines.at(-1).text,"You'll glow (hey hey)");
assert.equal(dreamLines.filter(l=>l.english).length,21);
assert.equal(dreamLines.filter(l=>l.text==='내 꿈은 여기 stay 에 에 에').length,2);
assert.equal(dreamLines.filter(l=>l.text==='나 포기 안 할게 에 에').length,2);
assert.equal(dreamLines.filter(l=>l.text==="You'll glow (hey hey)").length,3);
assert.ok(!dreamLines.some(l=>l.text.includes('&#x20;')));
for(const line of dreamLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Dream Glow: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(dreamGlowVocabulary.verbs.length,16);assert.equal(dreamGlowVocabulary.nouns.length,17);
assert.ok(dreamLines.find(l=>l.text==='제껴본 적 없는 상대한텐 못 져 (hey hey)').entries.some(e=>e.notes.some(n=>n.includes('제치다'))));
assert.ok(dreamLines.find(l=>l.text==='감추곤 했던 까진 무르팍 (hey)').entries.some(e=>e.notes.some(n=>n.includes('까지다'))));
assert.ok(dreamLines.find(l=>l.text==='눈부셨던 미래 에 에 에').entries.some(e=>e.notes.some(n=>n.includes('prolongado'))));
for(const title of ['Dream Glow','Dream Glow (Pt. 1)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'dream-glow');
const dreamSong=songs.find(s=>s.id==='dream-glow');assert.equal(dreamSong.exercises.length,5);
for(const exercise of dreamSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Dream Glow: 34 supplied lines, Korean analysis, repeated refrains and vocalizations, opponent meaning, vocabulary, catalog aliases and 5 clickable exercises.');

const {brandNewDaySections,brandNewDayVocabulary}=await load('lib/a-brand-new-day.ts');
const brandLines=brandNewDaySections.flatMap(s=>s.lines);
assert.equal(brandNewDaySections.length,9);assert.equal(brandLines.length,48);
assert.equal(brandLines[0].text,'무서움과 두려움 다');assert.equal(brandLines.at(-1).text,'헤쳐 나아 갈 수 있을까?');
assert.equal(brandLines.filter(l=>l.english).length,26);
assert.equal(brandLines.filter(l=>l.text==='무서움과 두려움 다').length,3);
assert.equal(brandLines.filter(l=>l.text==='헤쳐 나아 갈 수 있을까?').length,3);
assert.equal(brandLines.filter(l=>l.text==="I'll be there when the day comes").length,4);
for(const line of brandLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'A Brand New Day: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(brandNewDayVocabulary.verbs.length,27);assert.equal(brandNewDayVocabulary.nouns.length,20);
assert.ok(brandLines.find(l=>l.text==='나를 찾은 날에').entries.some(e=>e.notes.some(n=>n.includes('dia'))));
assert.equal(brandLines.find(l=>l.text==='세상에 날 보여줘').translation,'Mostre-me ao mundo.');
assert.ok(brandLines.find(l=>l.text==='나는 날 믿었기에 핍박 기로에도').entries.some(e=>e.notes.some(n=>n.includes('encruzilhada'))));
for(const title of ['A Brand New Day','A Brand New Day (Pt. 2)','A Brand New Day (BTS World Original Soundtrack) [Pt. 2]'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'a-brand-new-day');
const brandSong=songs.find(s=>s.id==='a-brand-new-day');assert.equal(brandSong.exercises.length,5);
for(const exercise of brandSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: A Brand New Day: all 48 supplied lines, choruses and final questions, Korean coverage, pronoun/day distinction, vocabulary, catalog aliases and 5 clickable exercises.');

const {allNightSections,allNightVocabulary}=await load('lib/all-night.ts');
const allNightLines=allNightSections.flatMap(s=>s.lines);
assert.equal(allNightSections.length,9);assert.equal(allNightLines.length,77);
assert.equal(allNightLines[0].text,'Yeah, I kick out the door, yeah, I kick out the door (door)');assert.equal(allNightLines.at(-1).text,'All night, all night, all night, all nights');
assert.equal(allNightLines.filter(l=>l.english).length,55);
assert.equal(allNightLines.filter(l=>l.text==='해 뜰 때까지 더 계속해 all night').length,3);
assert.equal(allNightLines.filter(l=>l.text==='영감아 기다려 널 잡을게 all mine').length,3);
assert.equal(allNightLines.filter(l=>l.text==='All night, all night, all night, all night').length,8);
assert.equal(allNightLines.filter(l=>l.text==='All night, all night, all night, all nights').length,8);
for(const line of allNightLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'All Night: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(allNightVocabulary.verbs.length,24);assert.equal(allNightVocabulary.nouns.length,21);
assert.ok(allNightLines.find(l=>l.text==='영감아 기다려 널 잡을게 all mine').entries.some(e=>e.notes.some(n=>n.includes('inspiração'))));
assert.ok(allNightLines.find(l=>l.text==='많을 수 있다는 사실만 넌 알아둬').entries.some(e=>e.notes.some(n=>n.includes('pegadas, não com pessoas'))));
assert.ok(allNightLines.find(l=>l.text==='괜찮아 내 수고는 내가 알어').entries.some(e=>e.notes.some(n=>n.includes('알아'))));
for(const title of ['All Night','All Night (Pt. 3)','All Night (BTS World Original Soundtrack) [Pt. 3]'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'all-night');
const allNightSong=songs.find(s=>s.id==='all-night');assert.equal(allNightSong.exercises.length,5);
for(const exercise of allNightSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: All Night: all 77 supplied lines, repeated hooks and chorus variants, Korean analysis, contextual meanings, vocabulary, catalog aliases and 5 clickable exercises.');

const {mikrokosmosSections,mikrokosmosVocabulary}=await load('lib/mikrokosmos.ts');
const microLines=mikrokosmosSections.flatMap(s=>s.lines);
assert.equal(mikrokosmosSections.length,13);assert.equal(microLines.length,68);
assert.equal(microLines[0].text,'반짝이는 별빛들');assert.equal(microLines.at(-1).text,'Na na na na na na na na');
assert.equal(microLines.filter(l=>l.english).length,22);
assert.equal(microLines.filter(l=>l.text==='가장 깊은 밤에 더 빛나는 별빛').length,4);
assert.equal(microLines.filter(l=>l.text==='밤이 깊을수록 더 빛나는 별빛').length,2);
assert.equal(microLines.filter(l=>l.text==='난 너를 보며 꿈을 꿔').length,2);
assert.equal(microLines.filter(l=>l.text==='난 너를 보며 숨을 쉬어').length,1);
assert.equal(microLines.filter(l=>l.text==='Na na na na na na').length,4);
assert.equal(microLines.filter(l=>l.text==='Na na na na na na na').length,2);
assert.equal(microLines.filter(l=>l.text==='Na na na na na na na na').length,2);
for(const line of microLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Mikrokosmos: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(mikrokosmosVocabulary.verbs.length,22);assert.equal(mikrokosmosVocabulary.nouns.length,32);
assert.ok(microLines.find(l=>l.text==='70억 개의 빛으로 빛나는').translation.includes('sete bilhões'));
assert.ok(microLines.find(l=>l.text==='사람이란 불, 사람이란 별로').entries.some(e=>e.notes.some(n=>n.includes('별 + 로'))));
assert.ok(microLines.find(l=>l.text==='우린 우리대로 빛나').entries.some(e=>e.notes.some(n=>n.includes('do nosso jeito'))));
assert.ok(microLines.find(l=>l.text==='별처럼 다 (우린 빛나)'));
assert.ok(microLines.find(l=>l.text==='저 어둠도 달빛도 아닌 우리 때문일 거야'));
for(const title of ['Mikrokosmos','소우주','Mikrokosmos (소우주)','소우주 (Mikrokosmos)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'mikrokosmos');
const microSong=songs.find(s=>s.id==='mikrokosmos');assert.equal(microSong.exercises.length,5);
for(const exercise of microSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Mikrokosmos: all 68 supplied lines, chorus variants and final vocalizations, Korean analysis, seven billion, contextual star particle, vocabulary, aliases and 5 clickable exercises.');

const {homeSections,homeVocabulary}=await load('lib/home.ts');
const homeLines=homeSections.flatMap(s=>s.lines);
assert.equal(homeSections.length,12);assert.equal(homeLines.length,93);
assert.equal(homeLines[0].text,'미칠듯한 설레임에');assert.equal(homeLines.at(-1).text,'La la la la la la la la I love it');
assert.equal(homeLines.filter(l=>l.english).length,40);
assert.equal(homeLines.filter(l=>l.text==='니가 있는 곳').length,2);
assert.equal(homeLines.filter(l=>l.text==='미리 켜둬 너의 switch').length,2);
assert.equal(homeLines.filter(l=>l.text==='켜뒀구나 너의 switch').length,1);
assert.equal(homeLines.filter(l=>l.text==='Home').length,6);
assert.equal(homeLines.filter(l=>l.text==='Your love, your love, your love').length,4);
for(const line of homeLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'HOME: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(homeVocabulary.verbs.length,43);assert.equal(homeVocabulary.nouns.length,28);
assert.ok(homeLines.find(l=>l.text==='미칠듯한 설레임에').entries.some(e=>e.notes.some(n=>n.includes('설렘'))));
assert.ok(homeLines.find(l=>l.text==='볼품없던 날 알아줬던 너').entries.some(e=>e.notes.some(n=>n.includes('나를'))));
assert.ok(homeLines.find(l=>l.text==='아마 그곳이 mi casa').entries.some(e=>e.notes.some(n=>n.includes('espanhol'))));
assert.ok(homeLines.find(l=>l.text==='다녀왔어 hi mi casa').translation.includes('volta'));
assert.equal(new Function(studyLookup+";return studyFor('HOME');")(),'home');
const homeSong=songs.find(s=>s.id==='home');assert.equal(homeSong.exercises.length,5);
for(const exercise of homeSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: HOME: all 93 supplied lines, Korean analysis, chorus and switch changes, spelling notes, contextual meanings, vocabulary, catalog link and 5 clickable exercises.');

const {answerLoveMyselfSections,answerLoveMyselfVocabulary}=await load('lib/answer-love-myself.ts');
const answerLines=answerLoveMyselfSections.flatMap(s=>s.lines);
assert.equal(answerLoveMyselfSections.length,10);assert.equal(answerLines.length,61);
assert.equal(answerLines[0].text,'눈을 뜬다 어둠 속 나');assert.equal(answerLines.at(-1).text,'빠짐없이 남김없이 모두 다 나');
assert.equal(answerLines.filter(l=>l.english).length,11);
assert.equal(answerLines.filter(l=>l.text==="You've shown me I have reasons").length,3);
assert.equal(answerLines.filter(l=>l.text==='내 숨 내 걸어온 길 전부로 답해').length,3);
assert.equal(answerLines.filter(l=>l.text==="(I'm learning how to love myself)").length,3);
assert.equal(answerLines.filter(l=>l.text==='어제의 나 오늘의 나 내일의 나').length,2);
for(const line of answerLines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'Answer: Love Myself: missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(answerLoveMyselfVocabulary.verbs.length,43);assert.equal(answerLoveMyselfVocabulary.nouns.length,48);
assert.ok(answerLines.find(l=>l.text==='더 아름다울 美').entries.some(e=>e.notes.some(n=>n.includes('미')&&n.includes('me'))));
assert.ok(answerLines.find(l=>l.text==='니 삶 속의 굵은 나이테').entries.some(e=>e.notes.some(n=>n.includes('anéis'))));
assert.equal(answerLines.find(l=>l.text==='But 더는 죽고 싶지가 않은 걸').translation,'Mas já não quero mais morrer.');
assert.ok(answerLines.find(l=>l.text==='정답은 없을지도 몰라').entries.some(e=>e.notes.some(n=>n.includes('possibilidade'))));
for(const title of ['Answer: Love Myself','Answer : Love Myself','Answer Love Myself'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'answer-love-myself');
const answerSong=songs.find(s=>s.id==='answer-love-myself');assert.equal(answerSong.exercises.length,5);
for(const exercise of answerSong.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}
console.log('PASS: Answer: Love Myself: 61 supplied lines, repeated refrains, Korean coverage, me/美 wordplay, negation and uncertainty, vocabulary, catalog aliases and 5 clickable exercises.');

const {serendipitySections,serendipityVocabulary}=await load('lib/serendipity.ts');
const {epiphanySections,epiphanyVocabulary}=await load('lib/epiphany.ts');
const serenLines=serendipitySections.flatMap(s=>s.lines),epiLines=epiphanySections.flatMap(s=>s.lines);
assert.equal(serendipitySections.length,12);assert.equal(serenLines.length,64);assert.equal(serenLines.filter(l=>l.english).length,22);
assert.equal(serenLines[0].text,'이 모든 건 우연이 아냐');assert.equal(serenLines.at(-1).text,'Let me love you');
assert.equal(serenLines.filter(l=>l.text==='Just let me love you').length,9);
assert.equal(serenLines.filter(l=>l.text==='우주가 처음 생겨났을 때부터').length,3);
assert.equal(serenLines.filter(l=>l.text==='넌 내 푸른 곰팡이').length,2);
assert.ok(serenLines.find(l=>l.text==='이젠 곁에 와줘'));assert.ok(serenLines.find(l=>l.text==='이제 우리가 되는 거야'));
assert.ok(serenLines.find(l=>l.text==='온 세상이 어제완 달라').entries.some(e=>e.notes.some(n=>n.includes('어제와는'))));
assert.equal(serenLines.find(l=>l.text==='넌 내 푸른 곰팡이').translation,'Você é meu mofo azul.');
assert.equal(serenLines.find(l=>l.text==='난 네 삼색 고양이').translation,'Eu sou seu gato tricolor.');
assert.equal(epiphanySections.length,8);assert.equal(epiLines.length,31);assert.equal(epiLines.filter(l=>l.english).length,7);
assert.equal(epiLines[0].text,'참 이상해 분명 난 너를 너무 사랑했는데');assert.equal(epiLines.at(-1).text,"I'm the one I should love");
assert.equal(epiLines.filter(l=>l.text==="I'm the one I should love").length,5);
assert.equal(epiLines.filter(l=>l.text==='좀 부족해도 너무 아름다운 걸').length,3);
assert.equal(epiLines.filter(l=>l.text==='이제야 깨달아 So I love me').length,1);
assert.equal(epiLines.filter(l=>l.text==='이제야 깨달아 so I love me').length,2);
assert.ok(epiLines.find(l=>l.text==='흔들리고 두려워도 앞으로 걸어가)'));
assert.ok(epiLines.find(l=>l.text==='하지만 이대로의 내가 곧 나인 걸').entries.some(e=>e.notes.some(n=>n.includes('não em breve'))));
for(const [id,lines]of[['Serendipity',serenLines],['Epiphany',epiLines]])for(const line of lines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),id+': missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(serendipityVocabulary.verbs.length,31);assert.equal(serendipityVocabulary.nouns.length,20);assert.equal(epiphanyVocabulary.verbs.length,25);assert.equal(epiphanyVocabulary.nouns.length,10);
for(const title of ['Serendipity (Full Length Edition)','Serendipity (Full Length)','Serendipity'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'serendipity');
assert.equal(new Function(studyLookup+";return studyFor('Intro : Serendipity');")(),undefined);
assert.equal(new Function(studyLookup+";return studyFor('Epiphany');")(),'epiphany');
for(const id of ['serendipity','epiphany']){const song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);for(const exercise of song.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}}
console.log('PASS: Serendipity full length and Epiphany: all supplied lines and repetitions, full-only aliases, Korean analysis, contextual meanings, vocabulary and 10 clickable exercises.');

const {triviaLoveSections,triviaLoveVocabulary}=await load('lib/trivia-love.ts');
const {truthUntoldSections,truthUntoldVocabulary}=await load('lib/the-truth-untold.ts');
const triviaLoveLines=triviaLoveSections.flatMap(s=>s.lines),truthLines=truthUntoldSections.flatMap(s=>s.lines);
assert.equal(triviaLoveSections.length,11);assert.equal(triviaLoveLines.length,86);assert.equal(triviaLoveLines.filter(l=>l.english).length,25);
assert.equal(triviaLoveLines[0].text,'Is this love');assert.equal(triviaLoveLines.at(-1).text,'단 한 사랑 (단 한 사랑)');
assert.equal(triviaLoveLines.filter(l=>l.text==='I live so I love').length,8);
assert.equal(triviaLoveLines.filter(l=>l.text==='넌 나의 바람, 바람, 바람').length,2);
assert.equal(triviaLoveLines.filter(l=>l.text==='(만 아니길 바랄 뿐)').length,2);
assert.ok(triviaLoveLines.find(l=>l.text==='F*** JKLMNOPQRST'));
assert.ok(triviaLoveLines.find(l=>l.text==='으로 만들어 만들어'));
assert.ok(triviaLoveLines.find(l=>l.text==='봐 내와 네도 똑같은 소리가 나잖아').entries.some(e=>e.notes.some(n=>n.includes('ㅐ')&&n.includes('ㅔ'))));
assert.ok(triviaLoveLines.find(l=>l.text==='너의 책장의 일부가 되고파').entries.some(e=>e.notes.some(n=>n.includes('página')&&n.includes('-고 싶어'))));
assert.ok(triviaLoveLines.find(l=>l.text==='넌 나의 바람, 바람, 바람').translation.includes('desejo'));
assert.ok(triviaLoveLines.find(l=>l.text==='스치는 바람, 바람, 바람').translation.includes('vento'));
assert.equal(truthUntoldSections.length,10);assert.equal(truthLines.length,57);assert.equal(truthLines.filter(l=>l.english).length,16);
assert.equal(truthLines[0].text,'외로움이 가득히');assert.equal(truthLines.at(-1).text,'And I still want you');
assert.equal(truthLines.filter(l=>l.text==='또 가면을 쓰고 널 만나러 가').length,2);
assert.equal(truthLines.filter(l=>l.text==='But I still want you').length,4);
assert.equal(truthLines.filter(l=>l.text==='And I still want you').length,2);
assert.ok(truthLines.find(l=>l.text==='너의 온긴 모두 다 진짜란 걸').entries.some(e=>e.notes.some(n=>n.includes('온기는'))));
assert.ok(truthLines.find(l=>l.text==='이 모래성에 난 날 매었어').translation.includes('me amarrei'));
assert.ok(truthLines.find(l=>l.text==='용길 내서 너의 앞에 섰더라면').entries.some(e=>e.notes.some(n=>n.includes('hipótese')&&n.includes('용기를'))));
assert.ok(truthLines.find(l=>l.text==='예쁜 너를 닮은 꽃을 피운 다음').entries.some(e=>e.notes.some(n=>n.includes('피우다'))));
for(const [id,lines]of[['Trivia Love',triviaLoveLines],['The Truth Untold',truthLines]])for(const line of lines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),id+': missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(triviaLoveVocabulary.verbs.length,34);assert.equal(triviaLoveVocabulary.nouns.length,31);assert.equal(truthUntoldVocabulary.verbs.length,39);assert.equal(truthUntoldVocabulary.nouns.length,18);
for(const title of ['Trivia 承: Love','Trivia 承 : Love','Trivia: Love'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'trivia-love');
for(const title of ['The Truth Untold','The Truth Untold (feat. Steve Aoki)','전하지 못한 진심','The Truth Untold (전하지 못한 진심)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'the-truth-untold');
for(const id of ['trivia-love','the-truth-untold']){const song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);for(const exercise of song.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}}
console.log('PASS: Trivia Love and The Truth Untold: 86 and 57 supplied lines, repeated hooks and endings, Korean analysis, wordplay and contextual grammar, vocabulary, catalog aliases and 10 clickable exercises.');

const {tearSections,tearVocabulary}=await load('lib/tear.ts');
const {bestOfMeSections,bestOfMeVocabulary}=await load('lib/best-of-me.ts');
const tearLines=tearSections.flatMap(s=>s.lines),bestLines=bestOfMeSections.flatMap(s=>s.lines);
assert.equal(tearSections.length,11);assert.equal(tearLines.length,105);assert.equal(tearLines.filter(l=>l.english).length,29);
assert.equal(tearLines[0].text,'이별은 내게 티어');assert.equal(tearLines.at(-1).text,'Tear...');
assert.equal(tearLines.filter(l=>l.text==="You're my fear").length,2);
assert.equal(tearLines.filter(l=>l.text==="You're my you're my fear").length,2);
assert.equal(tearLines.filter(l=>l.text==='What more can I say?').length,3);
assert.equal(tearLines.filter(l=>l.text==='이게 진짜 너고 이게 진짜 나야').length,2);
assert.equal(tearLines.filter(l=>l.text==='Woo yeah yeah yeah burn it').length,2);
assert.ok(tearLines.find(l=>l.text==='이곳이 우리의 마지막이 돼'));assert.ok(tearLines.find(l=>l.text==='이 곳이 우리의 마지막이 돼'));
assert.ok(tearLines.find(l=>l.text==='오고야 말았던 나의 댓가').entries.some(e=>e.notes.some(n=>n.includes('대가'))));
assert.ok(tearLines.find(l=>l.text==='스치는 저 바람에도 비어').entries.some(e=>e.notes.some(n=>n.includes('비다')&&n.includes('베이다'))));
assert.ok(tearLines.find(l=>l.text==='하지만 이젠 쓰기만 한 beer').entries.some(e=>e.notes.some(n=>n.includes('amargo'))));
assert.ok(tearLines.find(l=>l.text==='안 울 걸 안 찢을 걸').entries.some(e=>e.notes.some(n=>n.includes('garantidas'))));
assert.equal(bestOfMeSections.length,12);assert.equal(bestLines.length,81);assert.equal(bestLines.filter(l=>l.english).length,29);
assert.equal(bestLines[0].text,'When you say that you love me');assert.equal(bestLines.at(-1).text,'변하지 않는다고 just one more time');
assert.deepEqual(bestOfMeSections[0].lines,bestOfMeSections.at(-1).lines);
assert.equal(bestLines.filter(l=>l.text==='You got the best of me').length,15);
assert.equal(bestLines.filter(l=>l.text==='When you say that you love me').length,4);
assert.equal(bestLines.filter(l=>l.text==='넌 나의 구원 넌 나의 창').length,2);
assert.equal(bestLines.filter(l=>l.text==='하루하루').length,2);
assert.ok(bestLines.find(l=>l.text==='눈이 내리던 나').entries.some(e=>e.notes.some(n=>n.includes('neve'))));
assert.ok(bestLines.find(l=>l.text==='사랑하는 법은 존재하니까').entries.some(e=>e.notes.some(n=>n.includes('modo ou maneira'))));
assert.ok(bestLines.find(l=>l.text==='다정한 파도고 싶었지만').entries.some(e=>e.notes.some(n=>n.includes('파도이고 싶었지만'))));
for(const[id,lines]of[['Tear',tearLines],['Best Of Me',bestLines]])for(const line of lines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),id+': missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(tearVocabulary.verbs.length,53);assert.equal(tearVocabulary.nouns.length,40);assert.equal(bestOfMeVocabulary.verbs.length,30);assert.equal(bestOfMeVocabulary.nouns.length,31);
for(const title of ['Tear','Outro: Tear','Outro : Tear'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'tear');
assert.equal(new Function(studyLookup+";return studyFor('Best Of Me');")(),'best-of-me');
for(const id of ['tear','best-of-me']){const song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);for(const exercise of song.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}}
console.log('PASS: Tear and Best Of Me: 105 and 81 supplied lines, fear/tear variants and circular ending, Korean coverage, spelling and contextual grammar, vocabulary, catalog aliases and 10 clickable exercises.');

const {imFineSections,imFineVocabulary}=await load('lib/im-fine.ts');
const {airplanePt2Sections,airplanePt2Vocabulary}=await load('lib/airplane-pt2.ts');
const fineLines=imFineSections.flatMap(s=>s.lines),airLines=airplanePt2Sections.flatMap(s=>s.lines);
assert.equal(imFineSections.length,11);assert.equal(fineLines.length,81);assert.equal(fineLines.filter(l=>l.english).length,21);
assert.equal(fineLines[0].text,'시리도록 푸른 하늘 아래 눈 떠');assert.equal(fineLines.at(-1).text,"I'm fine.");
assert.equal(fineLines.filter(l=>l.text==="I'm feeling just fine, fine, fine").length,8);
assert.equal(fineLines.filter(l=>l.text==='혼자서라도 외쳐보겠어').length,2);
assert.equal(fineLines.filter(l=>l.text==='차가운 내 심장은').length,2);
assert.equal(fineLines.filter(l=>l.text==='몇 번이라도 되뇌보겠어').length,2);
assert.equal(fineLines.find(l=>l.text==='네 목소린 모두 알아 주니까').translation,'Porque todos reconhecem a sua voz.');
assert.ok(fineLines.find(l=>l.text==='나 끝없는 꿈 속이어도').entries.some(e=>e.notes.some(n=>n.includes('속이다, enganar'))));
assert.ok(fineLines.find(l=>l.text==='주문을 걸어').entries.some(e=>e.notes.some(n=>n.includes('encantamento')&&n.includes('걸다'))));
assert.ok(fineLines.find(l=>l.text==='이젠 너의 손을 놓을게').entries.some(e=>e.notes.some(n=>n.includes('decisão'))));
assert.equal(airplanePt2Sections.length,7);assert.equal(airLines.length,76);assert.equal(airLines.filter(l=>l.english).length,32);
assert.equal(airLines[0].text,'이상한 꼬마');assert.equal(airLines.at(-1).text,'El Mariachi');
assert.equal(airLines.filter(l=>l.text==='El Mariachi').length,13);assert.equal(airLines.filter(l=>l.text==='El Mariachi...').length,1);
assert.equal(airLines.filter(l=>l.text==="I don't know, I don't know, I don't know, I don't know").length,4);
assert.equal(airLines.filter(l=>l.text==='우리가 가는 그 곳이 어디든 party').length,2);
assert.ok(airLines.find(l=>l.text==="We goin' from NY to Cali"));assert.ok(airLines.find(l=>l.text==="We goin' from Mexico City"));
assert.ok(airLines.find(l=>l.text==='스물다섯, 잘 사는 법은 아직도 보르겠어').entries.some(e=>e.notes.some(n=>n.includes('모르겠어'))));
assert.ok(airLines.find(l=>l.text==='마일리지만 몇 심만 대').entries.some(e=>e.notes.some(n=>n.includes('몇십만 대'))));
assert.ok(airLines.find(l=>l.text==='(We still) 호텔방서 작업').entries.some(e=>e.notes.some(n=>n.includes('-에서'))));
assert.ok(airLines.find(l=>l.text==='그래 좀 쉬는 법도').entries.some(e=>e.notes.some(n=>n.includes('descansar'))));
for(const[id,lines]of[["I'm Fine",fineLines],['Airplane Pt. 2',airLines]])for(const line of lines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),id+': missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(imFineVocabulary.verbs.length,48);assert.equal(imFineVocabulary.nouns.length,27);assert.equal(airplanePt2Vocabulary.verbs.length,32);assert.equal(airplanePt2Vocabulary.nouns.length,36);
for(const title of ["I'm Fine",'I’m Fine','Im Fine'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'im-fine');
for(const title of ['Airplane Pt. 2','Airplane Pt.2','Airplane, Pt. 2'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'airplane-pt2');
assert.equal(new Function(studyLookup+";return studyFor('Airplane');")(),undefined);
for(const id of ['im-fine','airplane-pt2']){const song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);for(const exercise of song.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}}
console.log('PASS: I am Fine and Airplane Pt. 2: 81 and 76 supplied lines, all repeated refrains and destination variants, pronouns and spellings preserved, Korean analysis, vocabulary, aliases and 10 clickable exercises.');

const {goGoSections,goGoVocabulary}=await load('lib/go-go.ts');
const {magicShopSections,magicShopVocabulary}=await load('lib/magic-shop.ts');
const goLines=goGoSections.flatMap(s=>s.lines),magicLines=magicShopSections.flatMap(s=>s.lines);
assert.equal(goGoSections.length,13);assert.equal(goLines.length,86);assert.equal(goLines.filter(l=>l.english).length,24);
assert.equal(goLines[0].text,'DOLLAR DOLLAR');assert.equal(goLines.at(-1).text,'고민보다 Go Go (Everybody!)');
assert.equal(goLines.filter(l=>l.text==='DOLLAR DOLLAR').length,5);
assert.equal(goLines.filter(l=>l.text==='탕진잼 탕진잼 탕진잼').length,8);
assert.equal(goLines.filter(l=>l.text==='고민보다 Go').length,12);
assert.equal(goLines.filter(l=>l.text==='고민보다 Go Go (Everybody!)').length,6);
assert.equal(goLines.filter(l=>l.text==='쥐구멍 볕들 때까지').length,2);
assert.ok(goLines.find(l=>l.text==='티끌 모아 티끌 탕진잼 다 지불해').entries.some(e=>e.notes.some(n=>n.includes('provérbio'))));
assert.ok(goLines.find(l=>l.text==='내 일주일 월화수목 금금금금').entries.some(e=>e.notes.some(n=>n.includes('금요일'))));
assert.ok(goLines.find(l=>l.text==='밑 빠진 독이야').entries.some(e=>e.notes.some(n=>n.includes('pote')&&n.includes('veneno'))));
assert.equal(magicShopSections.length,12);assert.equal(magicLines.length,69);assert.equal(magicLines.filter(l=>l.english).length,18);
assert.equal(magicLines[0].text,'망설인다는 걸 알아 진심을 말해도');assert.equal(magicLines.at(-1).text,'Show you show you');
assert.equal(magicLines.filter(l=>l.text==="So show me (I'll show you)").length,9);
assert.equal(magicLines.filter(l=>l.text==='문을 하나 만들자 너의 맘 속에다').length,2);
assert.equal(magicLines.filter(l=>l.text==='You gave me the best of me').length,2);
assert.equal(magicLines.filter(l=>l.text==='넌 괜찮을 거야 oh 여긴 Magic Shop').length,1);
assert.equal(magicLines.filter(l=>l.text==='넌 괜찮을 거야 oh 여긴 Magic shop').length,1);
assert.ok(magicLines.find(l=>l.text==='넌 절벽 끝에 서 있던').entries.some(e=>e.notes.some(n=>n.includes('eu')&&n.includes('내'))));
assert.equal(magicLines.find(l=>l.text==='내 마지막 이유야').translation,'É minha última razão.');
assert.ok(magicLines.find(l=>l.text==='우리가 만든 걸까').entries.some(e=>e.notes.some(n=>n.includes('것일까'))));
assert.ok(magicLines.find(l=>l.text==='질 땐 나팔꽃처럼').entries.some(e=>e.notes.some(n=>n.includes('murchar'))));
for(const[id,lines]of[['Go Go',goLines],['Magic Shop',magicLines]])for(const line of lines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),id+': missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(goGoVocabulary.verbs.length,26);assert.equal(goGoVocabulary.nouns.length,31);assert.equal(magicShopVocabulary.verbs.length,41);assert.equal(magicShopVocabulary.nouns.length,38);
for(const title of ['GoGo','Go, Go','Go Go','고민보다 Go','고민보다 Go (Go, Go)'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),'go-go');
assert.equal(new Function(studyLookup+";return studyFor('Magic Shop');")(),'magic-shop');
for(const id of ['go-go','magic-shop']){const song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);for(const exercise of song.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}}
console.log('PASS: Go Go and Magic Shop: 86 and 69 supplied lines, repeated refrains and finale, proverb/slang notes, cliff subject and grammatical forms, vocabulary, catalog aliases and 10 clickable exercises.');

const {anpanmanSections,anpanmanVocabulary}=await load('lib/anpanman.ts');
const {micDropSections,micDropVocabulary}=await load('lib/mic-drop.ts');
const anpanLines=anpanmanSections.flatMap(s=>s.lines),micLines=micDropSections.flatMap(s=>s.lines);
assert.equal(anpanmanSections.length,12);assert.equal(anpanLines.length,89);assert.equal(anpanLines.filter(l=>l.english).length,31);
assert.equal(anpanLines[0].text,'Waiting for you, Anpanman');assert.equal(anpanLines.at(-1).text,'Lemme say "All the bad men, cop out"');
assert.equal(anpanLines.filter(l=>l.text==='Waiting for you, Anpanman').length,2);
assert.equal(anpanLines.filter(l=>l.text==='Waiting for you Anpanman').length,4);
assert.equal(anpanLines.filter(l=>l.text==='내가 가진 건 이 노래 한방').length,4);
assert.equal(anpanLines.filter(l=>l.text==='계속 돌려 돌려 나의 Anpan').length,2);
assert.equal(anpanLines.filter(l=>l.text==='돌려 돌려 나의 Anpan').length,1);
assert.ok(anpanLines.find(l=>l.text==='부름 바로 날라갈게').entries.some(e=>e.notes.some(n=>n.includes('날아갈게'))));
assert.ok(anpanLines.find(l=>l.text==='무릎팍 까지는 것 따윈 두렵지 않아').entries.some(e=>e.notes.some(n=>n.includes('까지다')&&n.includes('ralado'))));
assert.ok(anpanLines.find(l=>l.text==='한 일인지 모르겠어 정말').entries.some(e=>e.notes.some(n=>n.includes('linha anterior'))));
assert.equal(micDropSections.length,9);assert.equal(micLines.length,92);assert.equal(micLines.filter(l=>l.english).length,33);
assert.equal(micLines[0].text,'Yeah 누가 내 수저 더럽대');assert.equal(micLines.at(-1).text,'꽤 꽤 폼나지 포 포 폼나지');
assert.equal(micLines.filter(l=>l.text==='Mic mic bungee').length,2);
assert.equal(micLines.filter(l=>l.text==='MIC Drop').length,8);
assert.equal(micLines.filter(l=>l.text==='How you dare').length,6);
assert.equal(micLines.filter(l=>l.text==='더 볼 일 없어 마지막 인사야').length,2);
assert.ok(micLines.find(l=>l.text==="I don't care 마이크 잡음 금수저 여럿 패").entries.some(e=>e.notes.some(n=>n.includes('잡으면')&&n.includes('ruído'))));
assert.ok(micLines.find(l=>l.text==='너무 heavy 내 두 손이 모잘라').entries.some(e=>e.notes.some(n=>n.includes('모자라다'))));
assert.ok(micLines.find(l=>l.text==='이거 완전 네 글자').entries.some(e=>e.notes.some(n=>n.includes('quatro')&&n.includes('não é seu'))));
assert.ok(micLines.find(l=>l.text==='우린 탁 쏴 마치 콜라지').entries.some(e=>e.notes.some(n=>n.includes('não a palavra colagem'))));
for(const[id,lines]of[['Anpanman',anpanLines],['MIC Drop',micLines]])for(const line of lines){assert.ok(line.text&&line.translation);if(line.english){assert.ok(!/[가-힣]/.test(line.text));assert.equal(line.entries.length,0);continue;}const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),id+': missing '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length);}
assert.equal(anpanmanVocabulary.verbs.length,32);assert.equal(anpanmanVocabulary.nouns.length,24);assert.equal(micDropVocabulary.verbs.length,29);assert.equal(micDropVocabulary.nouns.length,45);
for(const [title,id]of[['Anpanman','anpanman'],['MIC Drop','mic-drop']])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),id);
for(const title of ['MIC Drop (Steve Aoki Remix) [Full Length Edition]','MIC Drop (feat. Desiigner) [Steve Aoki Remix]'])assert.equal(new Function(studyLookup+';return studyFor('+JSON.stringify(title)+');')(),undefined);
for(const id of ['anpanman','mic-drop']){const song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);for(const exercise of song.exercises){assert.equal(exercise.kind,'choice');assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,exercise.options.find(o=>!exercise.answer.includes(o))));}}
console.log('PASS: Anpanman and MIC Drop: 89 and 92 supplied lines, all repetitions and final variants, Korean coverage, contextual idioms and contractions, spelling notes, vocabulary, original-only catalog links and 10 clickable exercises.');
