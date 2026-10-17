import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
async function load(file){const source=await fs.readFile(new URL('../'+file,import.meta.url),'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));}
const {lessons,levels,quizFor,isCorrect,normalizeAnswer}=await load('lib/course.ts');
const {songs}=await load('lib/songs.ts');
assert.equal(lessons.length,30);assert.equal(songs.length,51);
const allIds=[];for(const level of levels){assert.equal(lessons.filter(l=>l.level===level).length,10);assert.equal(quizFor(level).length,10);}
for(const lesson of lessons){assert.equal(lesson.cards.length,8,lesson.id);assert.equal(lesson.exercises.length,5,lesson.id);assert.ok(lesson.body.length>=2);for(const c of lesson.cards){assert.ok(c.ko&&c.pt)}allIds.push(lesson.id);for(const e of lesson.exercises){allIds.push(e.id);assert.ok(e.answer.length&&e.explanation);assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorrect test answer'));if(e.kind==='choice'){assert.equal(new Set(e.options).size,e.options.length,e.id+' duplicate choices');assert.ok(e.options.includes(e.answer[0]));}if(e.kind==='order')assert.deepEqual([...e.options].sort(),e.answer[0].split(' ').sort());}}
for(const s of songs){allIds.push(s.id);if(s.videoId)assert.match(s.videoId,/^[\w-]{11}$/);assert.ok(s.clips.reduce((n,c)=>n+c.text.trim().split(/\s+/).length,0)<=10);for(const c of s.clips){allIds.push(c.id);assert.ok(c.end>c.start&&c.start>=0);assert.ok(c.grammar&&c.translation);}assert.ok(s.exercises.length>=2);}
assert.equal(new Set(allIds).size,allIds.length);
assert.equal(normalizeAnswer('  가요.  '),'가요');assert.equal(normalizeAnswer('가요'.normalize('NFD')),'가요');assert.ok(!isCorrect({answer:['갈 거예요']},'갈거예요'));
console.log('PASS: 30 aulas, 150 exercícios, 240 cartões, 3 quizzes, 51 músicas; IDs, respostas, alternativas, Hangul e limites de citações verificados.');

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
assert.equal(inuLines.length,67);
for(const line of inuLines){assert.ok(line.text&&line.translation);if(line.english)continue;const terms=line.entries.map(e=>e.term).join(' ');for(const token of line.text.match(/[가-힣]+/gu)||[])assert.ok(terms.includes(token),'I Need U: sem análise de '+token);for(const e of line.entries)assert.ok(e.meaning&&e.notes.length>=2,e.term);}
assert.equal(iNeedUVocabulary.verbs.length,30);assert.equal(iNeedUVocabulary.nouns.length,17);
const inuSong=songs.find(s=>s.id==='i-need-u');assert.equal(inuSong.exercises.length,5);
for(const e of inuSong.exercises){assert.equal(e.kind,'choice');assert.ok(e.options.includes(e.answer[0]));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorreta'));}
assert.equal(new Function(studyLookup+";return studyFor('I NEED U');")(),'i-need-u');
assert.equal(new Function(studyLookup+";return studyFor('I NEED U (Japanese Ver.)');")(),undefined);
assert.ok(musicSource.includes('sections:iNeedUSections,vocabulary:iNeedUVocabulary'));
assert.equal(inuLines.filter(l=>l.text==='왜 혼자 사랑하고 혼자서만 이별해?').length,3);
assert.ok(inuLines.some(l=>l.text==='I need you girl (whoa, oh, babe)'));
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
