const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx'),{BatchimLesson,BatchimPicture}=require('../components/batchim-lesson.tsx'),{translate}=require('../lib/localization.ts');
const {finalSounds,linkingExamples,batchimRounds}=require('../lib/batchim-lab.ts'),{splitSyllable}=require('../lib/syllable-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
assert.deepEqual(finalSounds.map(f=>f.final),['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅇ']);
for(const f of finalSounds){assert.ok(f.ko&&f.meaning&&f.cue&&f.ipa);assert.ok(f.letters.split(' · ').includes(splitSyllable(f.ko).final));assert.ok(translate(f.cue,'eng')!==f.cue);}
assert.deepEqual(linkingExamples.map(e=>[e.written,e.reading]),[['밥이','바비'],['옷이','오시'],['꽃이','꼬치'],['달이','다리'],['공이','공이']]);
for(const e of linkingExamples){assert.equal(e.written,e.ko+'이');assert.equal(splitSyllable(e.ko).final,e.final);assert.equal([...e.reading].length,2);assert.equal(e.moves,e.final!=='ㅇ');assert.ok(translate(e.note,'eng')!==e.note);}
const illustrated=new Set([...finalSounds.map(f=>f.ko),...linkingExamples.map(e=>e.ko),...lessons[3].cards.map(c=>c.ko)]);
for(const word of illustrated){const html=renderToStaticMarkup(React.createElement(BatchimPicture,{word}));assert.ok(html.includes('bl-picture-bg'));assert.ok(html.includes('aria-hidden="true"'));assert.ok(!html.includes('lucide-leaf'),'Missing word illustration: '+word);}
assert.equal(batchimRounds.length,6);for(const q of batchimRounds){assert.ok(illustrated.has(q.ko));assert.equal(new Set(q.options).size,q.options.length);assert.ok(q.options.includes(q.answer));assert.ok(translate(q.prompt,'eng')!==q.prompt);assert.ok(translate(q.feedback,'eng')!==q.feedback);}
for(const lang of ['pt','eng'])for(let step=0;step<4;step++){
 const html=renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:lang},React.createElement(BatchimLesson,{initialStep:step})));
 assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(lang==='pt'?'O fim de um bloco pode ligar dois sons.':'Where one block ends, a connection begins.'));
 assert.ok(html.includes('bl-picture'));
 if(step===0){assert.ok(html.includes('sl-with-final'));assert.ok(html.includes(lang==='pt'?'Consoante final':'Final consonant'));}
 if(step===1){assert.ok(html.includes('bl-sound-tabs'));assert.ok(html.includes('[k̚]'));assert.ok(html.includes(lang==='pt'?'sem soltura audível':'no audible release'));}
 if(step===2){assert.ok(html.includes('bl-connection'));assert.ok(html.includes('[ … ]'));assert.ok(!html.includes('bl-link-feedback'));assert.ok(html.includes(lang==='pt'?'Mostrar a ligação':'Show the connection'));}
 if(step===3){assert.ok(html.includes('bl-challenge'));assert.ok(!html.includes('sl-build-feedback'));assert.ok(!html.includes(batchimRounds[0].feedback));assert.ok(html.includes('href="#batchim-practice"'));}
 if(lang==='eng')assert.ok(!/Escolha uma|Ligue as|Ouvir o exemplo|Próximo desafio|Consoante inicial|arroz cozido|castanha|roupa/.test(html));
}
assert.equal(lessons[3].exercises.length,5);assert.equal(lessons[3].cards.length,8);for(const e of lessons[3].exercises){assert.ok(e.id.startsWith('1-4-visual-'));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,e.options.find(o=>!e.answer.includes(o))));assert.ok(translate(e.explanation,'eng')!==e.explanation);}
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-4'?<BatchimLesson/>"));assert.ok(page.includes("current.id==='1-4'?'batchim-practice'"));assert.ok(page.includes("current.id==='1-4'&&<BatchimPicture word={c.ko}/>"));assert.ok(page.includes('current.exercises.every(e=>progress.answers[e.id]?.correct)'));
console.log('PASS: lesson 4 renders four stages in PT/ENG; 7 final sound groups, illustrated vocabulary, 5 verified linking examples including final ㅇ, 6 workshop rounds and 5 persistent exercises.');
