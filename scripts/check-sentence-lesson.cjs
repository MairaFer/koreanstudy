const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{LocaleProvider}=require('../components/localization.tsx'),{translate}=require('../lib/localization.ts');
const {SentenceLesson}=require('../components/sentence-lesson.tsx'),{sentenceExamples,identityExamples,sentenceChallenges}=require('../lib/sentence-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
function render(step,locale){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},React.createElement(SentenceLesson,{initialStep:step})));}
assert.equal(sentenceExamples.length,4);
for(const sentence of sentenceExamples){assert.equal(sentence.parts.map(p=>p.ko).join(' ')+'.',sentence.ko);assert.ok(/[은는]$/.test(sentence.parts[0].ko));assert.ok(/[을를]$/.test(sentence.parts[1].ko));assert.ok(sentence.parts[2].ko.endsWith('요'));for(const part of sentence.parts)assert.notEqual(translate(part.note,'eng'),part.note);}
assert.deepEqual(identityExamples.map(e=>e.ko+e.ending),['아미예요','학생이에요','가수예요']);
assert.equal(sentenceChallenges.length,6);
for(const challenge of sentenceChallenges){assert.equal(new Set(challenge.options).size,3);if(challenge.kind==='order')assert.deepEqual(challenge.options.slice().sort(),challenge.answer.split(' ').sort());else assert.ok(challenge.options.includes(challenge.answer));assert.notEqual(translate(challenge.feedback,'eng'),challenge.feedback);}
for(const locale of ['pt','eng'])for(let step=0;step<4;step++){
 const html=render(step,locale);assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes('class="st-scene"'));assert.ok(html.includes('aria-hidden="true"'));assert.ok(html.includes(locale==='pt'?'A frase ganha sentido no final.':'The ending brings the sentence together.'));
 if(step===0){assert.ok(html.includes(locale==='pt'?'ORDEM COMUM EM PORTUGUÊS':'USUAL ENGLISH ORDER'));assert.ok(html.includes(locale==='pt'?'Uma base para começar':'A starting point'));}
 if(step===1){assert.ok(html.includes('data-part="0"'));assert.ok(html.includes('data-part="1"'));assert.ok(html.includes('data-part="2"'));assert.ok(html.includes(locale==='pt'?'Tópico e sujeito não são a mesma coisa.':'Topic and subject are different concepts.'));assert.ok(html.includes('책을'));}
 if(step===2){assert.ok(html.includes('아미'));assert.ok(html.includes('학생'));assert.ok(html.includes('이에요'));assert.ok(html.includes(locale==='pt'?'Omitir o tópico neste contexto':'Leave out the topic in this context'));assert.ok(!html.includes('class="st-feedback"'));}
 if(step===3){assert.ok(html.includes('href="#sentence-practice"'));assert.ok(html.includes('disabled=""'));assert.ok(html.includes('aria-label="'+(locale==='pt'?'Sua frase':'Your sentence')+'"'));assert.ok(!html.includes('class="st-feedback'));}
 if(locale==='eng')assert.ok(!/Descubra as funções|Sua oficina|Conferir minha frase|Comparar com português|Tópico e sujeito não|São seis desafios/.test(html));
}
const lesson=lessons[5];assert.equal(lesson.exercises.length,5);assert.equal(lesson.cards.length,8);
for(const exercise of lesson.exercises){assert.ok(exercise.id.startsWith('1-6-visual-'));assert.ok(isCorrect(exercise,exercise.answer[0]));assert.ok(!isCorrect(exercise,'resposta incorreta'));assert.notEqual(translate(exercise.explanation,'eng'),exercise.explanation);}
const order=lesson.exercises[0];assert.ok(isCorrect(order,'저는 한국어를 공부해요'));assert.ok(!isCorrect(order,'저는 공부해요 한국어를'));
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-6'?<SentenceLesson/>"));assert.ok(page.includes("current.id==='1-6'?'sentence-practice'"));
console.log('PASS: lesson 6 renders four stages in PT/ENG, with four illustrated sentence structures, topic/subject distinction, three identity forms, six workshop challenges, and five aligned progress exercises.');
