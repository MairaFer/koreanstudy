import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
async function load(file){const source=await fs.readFile(new URL('../'+file,import.meta.url),'utf8');const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));}
const {lessons,levels,quizFor,isCorrect,normalizeAnswer}=await load('lib/course.ts');
const {songs}=await load('lib/songs.ts');
assert.equal(lessons.length,30);assert.equal(songs.length,31);
const allIds=[];for(const level of levels){assert.equal(lessons.filter(l=>l.level===level).length,10);assert.equal(quizFor(level).length,10);}
for(const lesson of lessons){assert.equal(lesson.cards.length,8,lesson.id);assert.equal(lesson.exercises.length,5,lesson.id);assert.ok(lesson.body.length>=2);for(const c of lesson.cards){assert.ok(c.ko&&c.pt)}allIds.push(lesson.id);for(const e of lesson.exercises){allIds.push(e.id);assert.ok(e.answer.length&&e.explanation);assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,'incorrect test answer'));if(e.kind==='choice'){assert.equal(new Set(e.options).size,e.options.length,e.id+' duplicate choices');assert.ok(e.options.includes(e.answer[0]));}if(e.kind==='order')assert.deepEqual([...e.options].sort(),e.answer[0].split(' ').sort());}}
for(const s of songs){allIds.push(s.id);if(s.videoId)assert.match(s.videoId,/^[\w-]{11}$/);assert.ok(s.clips.reduce((n,c)=>n+c.text.trim().split(/\s+/).length,0)<=10);for(const c of s.clips){allIds.push(c.id);assert.ok(c.end>c.start&&c.start>=0);assert.ok(c.grammar&&c.translation);}assert.ok(s.exercises.length>=2);}
assert.equal(new Set(allIds).size,allIds.length);
assert.equal(normalizeAnswer('  가요.  '),'가요');assert.equal(normalizeAnswer('가요'.normalize('NFD')),'가요');assert.ok(!isCorrect({answer:['갈 거예요']},'갈거예요'));
console.log('PASS: 30 aulas, 150 exercícios, 240 cartões, 3 quizzes, 31 músicas; IDs, respostas, alternativas, Hangul e limites de citações verificados.');

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
