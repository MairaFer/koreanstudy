const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{LocaleProvider}=require('../components/localization.tsx'),{LessonText}=require('../components/lesson-text.tsx'),{KoreanText}=require('../components/korean-audio.tsx');
const {lessons}=require('../lib/course.ts');
const components=['vowel','consonant','syllable','batchim','greetings','sentence','particle','routine','number','everyday'].map(name=>Object.values(require('../components/'+name+'-lesson.tsx')).find(c=>typeof c==='function'&&/Lesson$/.test(c.name)));
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]/u,voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
function render(node,locale){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));}
// Check the rendered output, including text returned by helper components and
// conditional fragments. Every readable Korean run must be a word control or
// belong to an existing interactive control or a decorative illustration.
function checkReadableKorean(html,context){
 const stack=[];let words=0;
 for(const chunk of html.match(/<[^>]*>|[^<]+/g)||[]){
  if(chunk.startsWith('<!--'))continue;
  if(chunk.startsWith('</')){const tag=chunk.match(/^<\/([^\s>]+)/)?.[1];const pos=stack.map(x=>x.tag).lastIndexOf(tag);if(pos>=0)stack.splice(pos);continue;}
  if(chunk.startsWith('<')){const tag=chunk.match(/^<([^\s/>]+)/)?.[1];if(!tag)continue;if(tag==='button'){assert.ok(!stack.some(x=>x.tag==='button'),context+': nested button');if(/class="[^"]*korean-word/.test(chunk))words++;}
   if(!voids.has(tag)&&!chunk.endsWith('/>'))stack.push({tag,protected:/aria-hidden="true"|data-audio-ignore/.test(chunk)||['button','a','label','svg','math','textarea','select','option','script','style'].includes(tag)||/role="(?:button|radio|checkbox|tab|option)"/.test(chunk)});continue;}
  if(ko.test(chunk))assert.ok(stack.some(x=>x.protected),context+': Korean prose without pronunciation control: '+chunk);
 }
 return words;
}
let count=0;for(const locale of ['pt','eng'])for(const Component of components)for(let step=0;step<4;step++)count+=checkReadableKorean(render(React.createElement(Component,{initialStep:step}),locale),Component.name+' '+locale+' '+step);
for(const locale of ['pt','eng'])for(const lesson of lessons.slice(10)){
 const content=React.createElement(LessonText,null,React.createElement('article',null,React.createElement('h1',null,lesson.title),...lesson.body.map((p,i)=>React.createElement('p',{key:i},p)),React.createElement('p',null,lesson.tip),...lesson.examples.map((e,i)=>React.createElement('p',{key:'example-'+i},e.ko+' — '+e.pt))));
 count+=checkReadableKorean(render(content,locale),lesson.id+' '+locale);
}
const fixture=React.createElement(LessonText,null,React.createElement(React.Fragment,null,React.createElement('p',null,'받침 é a consoante final. Use ',React.createElement('strong',null,'ㅇ'),' em 아.'),React.createElement('button',{type:'button',onClick:()=>{}},'Escolher 한'),React.createElement('div',{'aria-hidden':true},'나'),React.createElement(KoreanText,{text:'한국어',phrase:false})));
for(const locale of ['pt','eng']){const html=render(fixture,locale);assert.equal((html.match(/class="korean-word /g)||[]).length,4);checkReadableKorean(html,'fragment fixture '+locale);assert.match(html,/<button type="button">[^<]*한<\/button>/);assert.match(html,/<div aria-hidden="true">나<\/div>/);}
assert.ok(count>500,'Expected extensive Korean prose coverage across the course');
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("view==='aulas'&&current?<LessonText>"));
console.log('PASS: '+count+' word pronunciation controls; all 40 interactive lesson stages and 20 other lessons checked in PT/ENG, including conditional fragments, headings, explanations and tips; existing controls remain unnested and existing KoreanText is not duplicated.');
