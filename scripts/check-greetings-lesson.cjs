const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx'),{GreetingsLesson,GreetingScene}=require('../components/greetings-lesson.tsx'),{translate}=require('../lib/localization.ts');
const {greetingPhrases,farewellScenes,greetingDialogues,greetingChallenges}=require('../lib/greetings-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
function render(component,lang){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:lang},component));}
assert.equal(greetingPhrases.length,8);assert.equal(new Set(greetingPhrases.map(p=>p.ko)).size,8);
assert.deepEqual(greetingPhrases.map(p=>p.ko).sort(),lessons[4].cards.map(c=>c.ko).sort());
for(const p of greetingPhrases){assert.ok(translate(p.use,'eng')!==p.use);assert.ok(translate(p.meaning,'eng')!==p.meaning);}
assert.deepEqual(farewellScenes.map(s=>[s.youLeave,s.otherLeaves,s.answer]),[[true,false,'안녕히 계세요'],[false,true,'안녕히 가세요'],[true,true,'안녕히 가세요']]);
for(const lang of ['pt','eng'])for(const s of farewellScenes){const html=render(React.createElement(GreetingScene,{scene:'farewell',youLeave:s.youLeave,otherLeaves:s.otherLeaves}),lang);assert.ok(html.includes('aria-hidden="true"'));assert.ok(html.includes(lang==='pt'?'Você':'You'));assert.equal((html.match(new RegExp(lang==='pt'?'Saindo':'Leaving','g'))||[]).length,Number(s.youLeave)+Number(s.otherLeaves));assert.equal((html.match(new RegExp(lang==='pt'?'Ficando':'Staying','g'))||[]).length,Number(!s.youLeave)+Number(!s.otherLeaves));}
assert.equal(greetingDialogues.length,3);for(const d of greetingDialogues){assert.ok(d.lines.length>=2);assert.ok(translate(d.context,'eng')!==d.context);assert.ok(translate(d.note,'eng')!==d.note);for(const line of d.lines){assert.ok(line.ko);assert.ok([0,1].includes(line.speaker));assert.ok(translate(line.meaning,'eng')!==line.meaning);}}
assert.equal(greetingChallenges.length,6);for(const q of greetingChallenges){assert.ok(q.options.includes(q.answer));assert.equal(new Set(q.options).size,3);assert.ok(translate(q.feedback,'eng')!==q.feedback);}
for(const lang of ['pt','eng'])for(let step=0;step<4;step++){
 const html=render(React.createElement(GreetingsLesson,{initialStep:step}),lang);
 assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(lang==='pt'?'Uma conversa começa com um gesto.':'Every conversation starts with a small gesture.'));assert.ok(html.includes('gl-scene'));
 if(step===0){assert.ok(html.includes('gl-intentions'));assert.ok(html.includes(lang==='pt'?'Educação ou intimidade?':'Politeness or familiarity?'));assert.ok(html.includes('안녕하세요'));}
 if(step===1){assert.ok(html.includes('gl-choices'));assert.ok(!html.includes('sl-build-feedback'));assert.ok(html.includes(lang==='pt'?'Vocês dois vão embora':'You are both leaving'));}
 if(step===2){assert.equal((html.match(/class="gl-speaker"/g)||[]).length,1);assert.ok(html.includes('aria-expanded="false"'));assert.ok(!html.includes(greetingDialogues[0].lines[1].ko));assert.ok(html.includes(lang==='pt'?'Revelar sentido':'Reveal meaning'));}
 if(step===3){assert.ok(!html.includes('sl-build-feedback'));assert.ok(html.includes('href="#greetings-practice"'));assert.ok(html.includes('lang="ko"'));}
 if(lang==='eng')assert.ok(!/Escolha uma|Quem fica|Sua vez de|Próxima fala|Recomeçar|Outra pessoa|Obrigado\(a\)|Ficando|Saindo/.test(html));
}
assert.equal(lessons[4].exercises.length,5);for(const e of lessons[4].exercises){assert.ok(e.id.startsWith('1-5-visual-'));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,e.options.find(o=>!e.answer.includes(o))));assert.ok(translate(e.explanation,'eng')!==e.explanation);}
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-5'?<GreetingsLesson/>"));assert.ok(page.includes("current.id==='1-5'?'greetings-practice'"));assert.ok(page.includes('current.exercises.every(e=>progress.answers[e.id]?.correct)'));
console.log('PASS: lesson 5 renders four stages in PT/ENG; 8 expressions, 3 illustrated farewell directions, 3 progressive dialogues, hidden meanings, 6 situational challenges and 5 aligned progress exercises.');
