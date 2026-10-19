const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{LocaleProvider}=require('../components/localization.tsx'),{translate}=require('../lib/localization.ts');
const {ParticleLesson,ParticleForms,ParticlePlaces}=require('../components/particle-lesson.tsx'),{particleFamilies,particleNouns,particleHasFinal,particleForm,particleFocusScenes,particlePlaces,particleChallenges}=require('../lib/particle-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
const render=(node,locale)=>renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));
assert.equal(particleFamilies.length,3);assert.equal(particleNouns.length,4);
assert.deepEqual(particleNouns.map(n=>particleHasFinal(n.ko)),[true,false,true,false]);
for(const [word,forms] of [['책',['은','이','을']],['노래',['는','가','를']],['진',['은','이','을']],['아미',['는','가','를']]])forms.forEach((form,i)=>assert.equal(particleForm(word,i),form));
assert.deepEqual(particlePlaces.map(p=>p.answer),['에','에','에서']);
assert.equal(particleChallenges.length,8);for(const q of particleChallenges){assert.ok(q.options.includes(q.answer));assert.equal(new Set(q.options).size,3);assert.notEqual(translate(q.feedback,'eng'),q.feedback);}
for(const scene of particleFocusScenes){assert.notEqual(translate(scene.context,'eng'),scene.context);assert.notEqual(translate(scene.note,'eng'),scene.note);}
for(const locale of ['pt','eng']){
 for(let family=0;family<3;family++)for(let word=0;word<4;word++){
  const html=render(React.createElement(ParticleForms,{initialFamily:family,initialWord:word}),locale);assert.ok(html.includes('>'+particleNouns[word].ko+'<'));assert.ok(html.includes(particleFamilies[family].closed));assert.ok(html.includes(particleFamilies[family].open));assert.ok(html.includes(locale==='pt'?'sem espaço interno':'no space within this group'));assert.ok(!html.includes('class="st-feedback'));
 }
 for(let scene=0;scene<3;scene++){const html=render(React.createElement(ParticlePlaces,{initialScene:scene}),locale);assert.ok(html.includes(translate(particlePlaces[scene].meaning,locale)));assert.ok(html.includes('class="pl-place-art"'));assert.ok(html.includes('aria-hidden="true"'));assert.ok(!html.includes('class="st-feedback'));}
 for(let step=0;step<4;step++){
  const html=render(React.createElement(ParticleLesson,{initialStep:step}),locale);assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(locale==='pt'?'Uma partícula mostra como a palavra participa.':'A particle shows the word’s role.'));
  if(step===0)assert.ok(html.includes('pl-combine'));
  if(step===1){assert.ok(html.includes('진은'));assert.ok(html.includes(locale==='pt'?'“Informação conhecida”':'“Known information”'));}
  if(step===2){assert.ok(html.includes('공연장'));assert.ok(html.includes('있어요'));assert.ok(html.includes('서울에서'));}
  if(step===3){assert.ok(html.includes('href="#particle-practice"'));assert.ok(html.includes('disabled=""'));assert.ok(html.includes('저도'));}
  if(locale==='eng')assert.ok(!/Primeiro a função|Oficina de partículas|Escolha a função|Conferir minha partícula|Pequenas marcas/.test(html));
 }
}
assert.equal(lessons[6].exercises.length,5);assert.equal(lessons[6].cards.length,8);
for(const e of lessons[6].exercises){assert.ok(e.id.startsWith('1-7-visual-'));assert.ok(isCorrect(e,e.answer[0]));assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,e.options.length);assert.ok(!isCorrect(e,'resposta incorreta'));assert.notEqual(translate(e.explanation,'eng'),e.explanation);}
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-7'?<ParticleLesson/>"));assert.ok(page.includes("current.id==='1-7'?'particle-practice'"));
console.log('PASS: lesson 7 in PT/ENG; 12 consonant/vowel particle combinations, 3 context-sensitive focus scenes, 3 illustrated place relations, 8 challenges, 5 aligned progress exercises, and unchanged vocabulary count.');
