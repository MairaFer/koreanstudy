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
const {compoundVowels,compoundVowelRounds}=require('../lib/compound-vowels.ts');
const {CompoundVowelExplorer,CompoundVowelPractice}=require('../components/compound-vowels.tsx');
const {ArmyMemberNames}=require('../components/army-lesson.tsx'),{speechText}=require('../lib/audio-text.ts'),{splitSyllable}=require('../lib/syllable-lab.ts'),{translate}=require('../lib/localization.ts');
const allVowels=[...vowels,...compoundVowels];
assert.equal(compoundVowels.length,11);assert.equal(new Set(allVowels.map(v=>v.letter)).size,21);
assert.deepEqual(compoundVowels.map(v=>v.letter).sort(),['ㅐ','ㅒ','ㅔ','ㅖ','ㅘ','ㅙ','ㅚ','ㅝ','ㅞ','ㅟ','ㅢ'].sort());
for(const v of allVowels){const parts=splitSyllable(v.block);assert.equal(parts.initial,'ㅇ');assert.equal(parts.vowel,v.letter);assert.equal(parts.final,'');assert.equal(speechText(v.letter),v.block,'Vowel needs a pronounceable syllable reading');}
for(const v of compoundVowels){assert.equal(v.parts.length,2);assert.notEqual(translate(v.hint,'eng'),v.hint);}
assert.equal(compoundVowelRounds.length,6);for(const q of compoundVowelRounds){assert.ok(q.options.includes(q.target));assert.equal(new Set(q.options).size,3);assert.ok(compoundVowels.some(v=>v.letter===q.target));assert.notEqual(translate(q.feedback,'eng'),q.feedback);}
const render=(node,locale)=>renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));
for(const locale of ['pt','eng']){
 for(let selected=0;selected<11;selected++){
  const html=render(React.createElement(CompoundVowelExplorer,{initialSelected:selected}),locale);
  const readable=html.replace(/<[^>]*>/g,'').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&');
  assert.ok(readable.includes(translate(compoundVowels[selected].hint,locale)));assert.ok(html.includes(locale==='pt'?'LETRA VOCÁLICA':'VOWEL LETTER'));assert.ok(html.includes(locale==='pt'?'BLOCO SILÁBICO':'SYLLABLE BLOCK'));assert.ok(html.includes(locale==='pt'?'Montar o bloco':'Build the block'));assert.ok(html.includes('ㅢ'));assert.ok(html.includes('희망'));assert.ok(html.includes('우리에'));
 }
 for(let round=0;round<6;round++){
  const html=render(React.createElement(CompoundVowelPractice,{initialRound:round}),locale);assert.ok(html.includes('aria-label="'+(locale==='pt'?'Respostas sobre vogais compostas':'Compound vowel answers')+'"'));assert.ok(!html.includes('class="st-feedback'));
 }
 const names=render(React.createElement(ArmyMemberNames),locale);assert.ok(!names.includes('exploração guiada'));assert.ok(!names.includes('This is a guided exploration'));assert.ok(!names.includes('serão aprofundadas depois'));
}
const vowelSource=fs.readFileSync('components/vowel-lesson.tsx','utf8');assert.ok(vowelSource.includes('<CompoundVowelExplorer/>'));assert.ok(vowelSource.includes('<CompoundVowelPractice/>'));
assert.deepEqual(lessons[0].exercises.map(e=>e.id),['1-1-visual-1','1-1-visual-2','1-1-visual-3','1-1-visual-4','1-1-visual-5']);
console.log('PASS: lesson 1 in PT/ENG; all 21 vowel letters with pronounceable readings, 11 compound explorers, six new visual challenges, original listening/progress exercises preserved, and the lesson 4 warning removed.');
