const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx'),{SyllableLesson,SyllableDiagram}=require('../components/syllable-lesson.tsx');
const {joinSyllable,splitSyllable,assemblyChallenges,wordBlocks,labInitials,labVowels,labFinals,orderPieces}=require('../lib/syllable-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
for(let code=0xac00;code<=0xd7a3;code++){const block=String.fromCodePoint(code);assert.equal(joinSyllable(splitSyllable(block)),block);}
for(const bad of ['', '한글','A','ㅏ','🙂','\ud7a4'])assert.equal(splitSyllable(bad),null);
assert.equal(joinSyllable({initial:'?',vowel:'ㅏ',final:''}),'');assert.equal(joinSyllable({initial:'ㄱ',vowel:'?',final:''}),'');assert.equal(joinSyllable({initial:'ㄱ',vowel:'ㅏ',final:'?'}),'');
const combinations=new Set();for(const initial of labInitials)for(const vowel of labVowels)for(const final of labFinals){const parts={initial,vowel,final},b=joinSyllable(parts);assert.equal([...b].length,1);assert.deepEqual(splitSyllable(b),parts);combinations.add(b);}assert.equal(combinations.size,294);
assert.equal(assemblyChallenges.length,3);for(const c of assemblyChallenges){assert.ok(combinations.has(c.target));assert.ok(c.hint);}
assert.equal(wordBlocks.length,5);for(const w of wordBlocks)for(const b of w.ko)assert.ok(splitSyllable(b));assert.equal(orderPieces.length,3);assert.equal(new Set(orderPieces).size,3);assert.equal([orderPieces[1],orderPieces[2],orderPieces[0]].join(''),'한국어');
function render(component,lang){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:lang},component));}
for(const lang of ['pt','eng']){
 for(const [block,orientation,final]of[['가','vertical',false],['고','horizontal',false],['강','vertical',true],['공','horizontal',true]]){const html=render(React.createElement(SyllableDiagram,{parts:splitSyllable(block),active:'initial',onPick:()=>{}}),lang);assert.ok(html.includes('sl-'+orientation));assert.equal(html.includes('sl-with-final'),final);assert.equal(html.includes('sl-cell sl-final'),final);assert.ok(html.includes(lang==='pt'?'Consoante inicial':'Initial consonant'));}
 for(let step=0;step<4;step++){
  const html=render(React.createElement(SyllableLesson,{initialStep:step}),lang);assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(lang==='pt'?'Peças pequenas. Palavras inteiras.':'Small pieces. Whole words.'));
  if(step===0){assert.ok(html.includes('sl-diagram'));assert.ok(html.includes(lang==='pt'?'Vogal horizontal':'Horizontal vowel'));}
  if(step===1){assert.ok(html.includes(lang==='pt'?'Acrescentar o 받침':'Add the 받침'));assert.ok(!html.includes('sl-with-final'));}
  if(step===2){assert.ok(html.includes(lang==='pt'?'Montar e conferir':'Build and check'));assert.ok(html.includes('sl-workbench'));assert.ok(!html.includes('sl-build-feedback'));assert.ok(!html.includes(assemblyChallenges[0].hint));}
  if(step===3){assert.ok(html.includes('sl-word-reader'));assert.ok(html.includes(lang==='pt'?'Escrita normal:':'Normal spelling:'));assert.ok(html.includes('href="#syllable-practice"'));}
  if(lang==='eng')assert.ok(!/Sua montagem|Consoante inicial|Montar e conferir|Posições do bloco/.test(html));
 }
}
assert.equal(lessons[2].exercises.length,5);for(const e of lessons[2].exercises){assert.ok(e.id.startsWith('1-3-visual-'));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,e.options.find(o=>!e.answer.includes(o))));}
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-3'?<SyllableLesson/>"));assert.ok(page.includes("current.id==='1-3'?'syllable-practice'"));assert.ok(page.includes('current.exercises.every(e=>progress.answers[e.id]?.correct)'));
console.log('PASS: third lesson renders four stages in PT/ENG; all 11172 modern syllables round-trip, 294 workshop combinations, optional final-consonant layouts, 3 assembly challenges, 5 words and 5 progress exercises verified.');
