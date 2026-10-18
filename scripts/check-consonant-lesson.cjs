const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx'),{ConsonantLesson}=require('../components/consonant-lesson.tsx');
const {consonants,consonantFamilies,consonantListening,soundKinds,composeInitial,builderVowels}=require('../lib/consonant-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
assert.equal(consonants.length,14);assert.equal(new Set(consonants.map(c=>c.letter)).size,14);assert.equal(consonantFamilies.length,4);assert.equal(soundKinds.length,3);
for(const c of consonants)assert.ok(c.name&&c.hint&&c.place);
assert.equal(composeInitial('ㄴ','ㅗ'),'노');assert.equal(composeInitial('ㅍ','ㅜ'),'푸');assert.equal(composeInitial('ㄲ','ㅏ'),'까');assert.equal(composeInitial('ㅇ','ㅏ'),'아');assert.equal(composeInitial('x','ㅏ'),'');assert.equal(composeInitial('ㄴ','x'),'');
const initials=['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'],seen=new Set();
for(const c of initials)for(const v of builderVowels){const b=composeInitial(c,v),n=b.codePointAt(0)-0xac00;assert.equal(n%28,0);assert.equal(Math.floor(n/588),initials.indexOf(c));seen.add(b);}assert.equal(seen.size,57);
for(const f of consonantFamilies)f.blocks.forEach((b,i)=>assert.equal(b,composeInitial(f.letters[i],'ㅏ')));
assert.equal(consonantListening.length,6);for(const q of consonantListening){assert.equal(new Set(q.options).size,q.options.length);assert.ok(q.options.includes(q.target));assert.ok(seen.has(q.target));assert.ok(q.hint);}
for(const lang of ['pt','eng'])for(let step=0;step<4;step++){
 const html=renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:lang},React.createElement(ConsonantLesson,{initialStep:step})));
 assert.ok(html.includes('aria-current="step"'));assert.ok(html.includes(lang==='pt'?'A mesma vogal. Novos começos.':'Same vowel. New beginnings.'));
 if(step===0){assert.ok(html.includes('cl-mouth'));assert.ok(html.includes(lang==='pt'?'Ouvir a sílaba':'Listen to the syllable'));assert.ok(html.includes(lang==='pt'?'Nome não é som na palavra.':'A letter’s name is not its sound in a word.'));}
 if(step===1){assert.ok(html.includes('cl-air-figure'));assert.ok(html.includes(lang==='pt'?'Aspirada':'Aspirated'));assert.ok(html.includes(lang==='pt'?'pedacinho de papel':'small piece of paper'));assert.ok(html.includes('ㅅ–ㅆ'));}
 if(step===2){assert.ok(html.includes('cl-builder-initials'));assert.ok(html.includes(lang==='pt'?'Juntar e ouvir':'Join and listen'));assert.ok(!html.includes('class="vl-result"'));}
 if(step===3){assert.ok(html.includes(lang==='pt'?'Qual sílaba você ouviu?':'Which syllable did you hear?'));assert.ok(html.includes('disabled=""'));assert.ok(!html.includes('cl-listening-feedback'));assert.ok(html.includes('href="#consonant-practice"'));}
 if(lang==='eng')assert.ok(!/Onde o som começa|Nome da letra:|Qual sílaba você ouviu|Juntar e ouvir/.test(html));
}
assert.equal(lessons[1].exercises.length,5);for(const e of lessons[1].exercises){assert.ok(e.id.startsWith('1-2-visual-'));assert.ok(isCorrect(e,e.answer[0]));assert.ok(!isCorrect(e,e.options.find(o=>!e.answer.includes(o))));}
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-2'?<ConsonantLesson/>"));assert.ok(page.includes("current.id==='1-2'?'consonant-practice'"));assert.ok(page.includes('current.exercises.every(e=>progress.answers[e.id]?.correct)'));
console.log('PASS: second lesson renders all four stages in PT/ENG; 14 basic consonants, 4 contrast families, 57 valid syllables, 6 listening rounds, hidden answers and 5 aligned progress exercises verified.');
