const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(process.cwd(),request.slice(2));return original.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,resolveJsonModule:true}}).outputText,file);
const {supplementaryStorySections,supplementaryStoryVocabulary}=require('../lib/supplementary-story.ts'),{introHyyhSections,introHyyhVocabulary}=require('../lib/intro-hyyh.ts');
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const a=supplementaryStorySections.flatMap(s=>s.lines),b=introHyyhSections.flatMap(s=>s.lines);
assert.equal(a.length,60);assert.equal(b.length,44);assert.equal(a.filter(l=>l.english).length,12);assert.equal(b.filter(l=>l.english).length,1);
assert.equal(a[0].text,'예 신은 왜 자꾸만');assert.equal(a.at(-1).text,'웃을 수 있으니까');assert.equal(b[0].text,'오늘따라 림이 멀어보여');assert.equal(b.at(-1).text,'그 답은 이미 정해졌어 난 행복하다');
for(const [text,n] of [['너와 나 함께라면',6],['웃을 수 있으니까',5],['웃을 수 있으니깐',1],['함께 해주겠니',2],['Ayy I never walk alone',2],['Ayy you never walk alone',2]])assert.equal(a.filter(l=>l.text===text).length,n,text);
const chant=supplementaryStorySections[6].lines.map(l=>l.text);assert.deepEqual(chant,['Come on crawl crawl crawl','Crawl it like it like that','Baby walk walk walk','Walk it like it like that','Baby run run run','Run it like it like that','Baby fly fly fly','Fly it like it like that']);
assert.ok(a.find(l=>l.text==='날아갈 수 있다면 날 테야').entries[0].notes[0].includes('날다'));assert.ok(b.find(l=>l.text==='이 숨은 꿈틀대는 꿈들').entries[0].notes[0].includes('숨 + 은'));assert.ok(b.find(l=>l.text==='유일하게 맘이 되려 놓여').entries[0].notes[0].includes('마음이 놓이다'));assert.ok(b.find(l=>l.text==='정신을 차리면 또 겁먹은 병신').entries[0].notes[0].includes('vulgar'));
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,sections,vocab] of [['supplementary-story',supplementaryStorySections,supplementaryStoryVocabulary],['intro-hyyh',introHyyhSections,introHyyhVocabulary]]){
 const song=songs.find(s=>s.id===id);assert.ok(song);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=20&&vocab.nouns.length>=20);
 for(const l of sections.flatMap(s=>s.lines)){assert.ok(l.translation);if(/[가-힣]/.test(l.text))assert.ok(l.entries?.length&&l.entries[0].notes?.[0]);else assert.ok(l.english);}
 const result=addMusicCuriosities(id,sections);assert.equal(result.flatMap(s=>s.lines.flatMap(l=>l.entries||[])).filter(e=>e.card).length,6);assert.deepEqual(addMusicCuriosities(id,result),result);
 for(const x of [...sections.map(s=>s.title),...sections.flatMap(s=>s.lines.flatMap(l=>[l.translation,...(l.entries||[]).flatMap(e=>[e.meaning,...e.notes])])),...musicCuriosities[id].map(c=>c.card),song.intro,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])]){assert.ok(x);const e=translate(x,'eng');assert.notEqual(x,e,'Missing adaptation '+x);assert.deepEqual((x.match(ko)||[]).sort(),(e.match(ko)||[]).sort());}
}
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),expression=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],studyFor=new Function(ts.transpileModule(expression,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
assert.equal(studyFor('A Supplementary Story: You Never Walk Alone'),'supplementary-story');assert.equal(studyFor('Intro: The Most Beautiful Moment in Life'),'intro-hyyh');assert.equal(studyFor('Intro: The Most Beautiful Moment in Life (화양연화)'),'intro-hyyh');assert.equal(studyFor('A Supplementary Story: You Never Walk Alone (Live)'),undefined);assert.equal(studyFor('Intro: Never Mind'),undefined);
console.log('PASS: A Supplementary Story (60 lines) and Intro HYYH (44 lines); all supplied lines, final repetitions, movement chant, contextual bilingual grammar, 12 cards, vocabulary, exact catalog aliases and 10 exercises.');
