const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx'),{VowelLesson}=require('../components/vowel-lesson.tsx');
const {vowels,listeningRounds,vowelPairs}=require('../lib/vowel-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
assert.equal(vowels.length,10);assert.equal(new Set(vowels.map(v=>v.letter)).size,10);
for(const v of vowels){const code=v.block.codePointAt(0)-0xac00;assert.equal(Math.floor(code/588),11,'Initial must be silent circle');assert.equal(code%28,0,'Listening blocks have no final consonants');assert.ok(v.paths.length&&v.hint&&v.roman);assert.equal(v.layout,['ㅗ','ㅛ','ㅜ','ㅠ','ㅡ'].includes(v.letter)?'horizontal':'vertical');}
assert.equal(vowelPairs.length,4);assert.equal(listeningRounds.length,6);
for(const q of listeningRounds){assert.ok(q.options.includes(q.target));assert.equal(new Set(q.options).size,q.options.length);assert.ok(vowels.some(v=>v.block===q.target));}
for(const lang of ['pt','eng'])for(let step=0;step<4;step++){
 const html=renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:lang},React.createElement(VowelLesson,{initialStep:step})));
 assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(lang==='pt'?'Veja. Escute. Experimente.':'Look. Listen. Try it.'));
 if(step===0){assert.ok(html.includes('vl-assembly'));assert.ok(html.includes(lang==='pt'?'Juntar letras':'Join the letters'));}
 if(step===1){assert.ok(html.includes('vl-letter-drawing'));assert.ok(html.includes('vl-mouth'));assert.ok(html.includes(lang==='pt'?'Rever traços':'Replay the strokes'));assert.ok(!html.includes('vl-roman'));}
 if(step===2){assert.ok(html.includes(lang==='pt'?'Ouvir o desafio':'Play the listening challenge'));assert.ok(html.includes(lang==='pt'?'Conferir minha escolha':'Check my choice'));assert.ok(html.includes('disabled=""'));assert.ok(!html.includes('Você reconheceu o som!'));}
 if(step===3){assert.ok(html.includes('vl-three-block'));assert.ok(html.includes('href="#vowel-practice"'));assert.ok(html.includes(lang==='pt'?'saudação informal':'informal greeting'));}
 if(lang==='eng')assert.ok(!/Juntar letras|As letras moram|Ouvir o desafio|Sua vez/.test(html));
}
assert.equal(lessons[0].exercises.length,5);for(const e of lessons[0].exercises){assert.ok(e.id.startsWith('1-1-visual-'));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,e.options.find(o=>!e.answer.includes(o))));}
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-1'?<VowelLesson/>"));assert.ok(page.includes('current.exercises.every(e=>progress.answers[e.id]?.correct)'));
console.log('PASS: all four first-lesson stages render in PT/ENG; ten vowels, block orientation, six listening rounds, hidden hints, original progress completion and five aligned exercises verified.');
