const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{LocaleProvider}=require('../components/localization.tsx'),{translate}=require('../lib/localization.ts');
const {RoutineLesson,RoutineConjugator,RoutineBuilder}=require('../components/routine-lesson.tsx'),{routineVerbs,routineTimes,routineActivities,routineContexts,routineSentence,routineChallenges}=require('../lib/routine-lab.ts'),{splitSyllable}=require('../lib/syllable-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
const render=(node,locale)=>renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));
const text=html=>html.replace(/<[^>]*>/g,'').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&');
const expected={'먹다':'먹어요','살다':'살아요','가다':'가요','보다':'봐요','마시다':'마셔요','배우다':'배워요','읽다':'읽어요','오다':'와요','공부하다':'공부해요'};
assert.equal(routineVerbs.length,9);
for(const v of routineVerbs){assert.equal(v.stem,v.dictionary.slice(0,-1));assert.equal(v.present,expected[v.dictionary]);assert.equal(splitSyllable([...v.stem].at(-1)).vowel,v.vowel);assert.equal(v.family,v.dictionary.endsWith('하다')?'하다 → 해요':['ㅏ','ㅗ'].includes(v.vowel)?'아요':'어요');assert.notEqual(translate(v.note,'eng'),v.note);}
assert.equal(routineTimes.length,4);assert.equal(routineActivities.length,4);assert.equal(routineContexts.length,3);
assert.equal(routineSentence(0,2,0),'저는 매일 방탄소년단 영상을 봐요.');assert.equal(routineSentence(1,1,1),'진은 아침에 커피를 마셔요.');
for(const locale of ['pt','eng']){
 for(let verb=0;verb<routineVerbs.length;verb++)for(const choice of ['',routineVerbs[verb].family,'invalid']){
  const html=render(React.createElement(RoutineConjugator,{initialVerb:verb,initialChoice:choice}),locale);
  assert.ok(html.includes('rl-picture'));assert.ok(html.includes(routineVerbs[verb].stem));
  if(choice===routineVerbs[verb].family){assert.ok(text(html).includes(routineVerbs[verb].formula));assert.ok(text(html).includes(translate(routineVerbs[verb].note,locale)));assert.ok(html.includes('st-correct'));}
  else assert.ok(!html.includes('st-correct'));
 }
 for(let time=0;time<4;time++)for(let activity=0;activity<4;activity++){
  const html=render(React.createElement(RoutineBuilder,{initialTime:time,initialActivity:activity}),locale);assert.ok(text(html).includes(routineSentence(time,activity,0)));assert.ok(text(html).includes(translate(routineTimes[time].note,locale)));assert.ok(html.includes(locale==='pt'?'cenas inventadas':'imaginary practice scenes'));
 }
 for(let step=0;step<4;step++){const html=render(React.createElement(RoutineLesson,{initialStep:step}),locale);assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(locale==='pt'?'Seu dia pode virar uma frase em coreano.':'Turn a moment from your day into Korean.'));if(step===1)assert.ok(html.includes('들어요'));if(step===3){assert.ok(html.includes('href="#routine-practice"'));assert.ok(html.includes('disabled=""'));}if(locale==='eng')assert.ok(!/Encontre a base|Escolha a terminação|Oficina do presente|Retirar 다|Conferir minha resposta/.test(html));}
}
assert.equal(routineChallenges.length,8);for(const q of routineChallenges){assert.ok(q.options.includes(q.answer));assert.equal(new Set(q.options).size,3);assert.notEqual(translate(q.feedback,'eng'),q.feedback);assert.notEqual(translate(q.prompt,'eng'),q.prompt);}
const lesson=lessons.find(l=>l.id==='1-8');assert.equal(lesson.cards.length,8);assert.deepEqual(lesson.exercises.map(e=>e.id),['1-8-1','1-8-2','1-8-3','1-8-4','1-8-5']);for(const e of lesson.exercises)assert.ok(isCorrect(e,e.answer[0]));
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-8'?<RoutineLesson/>"));assert.ok(page.includes("current.id==='1-8'?'routine-practice'"));
console.log('PASS: lesson 8 in PT/ENG; nine correct stem/vowel/conjugation pairs, correct and retry feedback, 16 routine combinations, three time contexts, eight challenges, and original five progress exercises preserved.');
