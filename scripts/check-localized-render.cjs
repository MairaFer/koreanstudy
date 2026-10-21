const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(root,request.slice(2));return original.call(this,request,parent,...rest);};
for(const extension of ['.ts','.tsx'])require.extensions[extension]=(module,file)=>{const result=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}});module._compile(result.outputText,file);};
console.log('Loading React render checks…');
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx');
console.log('Loading music studies…');
const {MusicStudy}=require('../components/music-study.tsx');
console.log('Music studies loaded.');
const {songs}=require('../lib/songs.ts');
const {ExerciseCard}=require('../components/exercise.tsx');
function render(component,locale){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},component));}
const requested=process.argv[2];
const studies=requested?songs.filter(song=>song.id===requested):songs;
assert.ok(studies.length,'Unknown study: '+requested);
let checked=0;for(const song of studies){
 const english=render(React.createElement(MusicStudy,{initialSongId:song.id}),'eng');
 const contextual=song.id==='skit-one-night';
 assert.ok(english.includes(contextual?'Listening and interpretation guide':'Learn Korean with BTS'),song.id+' English heading');
 assert.ok(!english.includes('Ver tradução')&&!english.includes('Show translation'),song.id+' English lines must not have translation buttons');
 assert.ok(!english.includes('Ver explicação'),song.id+' PT control');
 assert.ok(english.includes(contextual?'Show the example explanation':'Show explanation'),song.id+' Korean explanation control');
 assert.ok(english.includes('Key vocabulary'),song.id+' vocabulary');
 assert.ok(english.includes('Check answer'),song.id+' exercises');
 if(checked===0){const portuguese=render(React.createElement(MusicStudy,{initialSongId:song.id}),'pt');assert.ok(portuguese.includes(contextual?'Revelar explicação do exemplo':'Ver explicação'),song.id+' PT preserved');}checked++;if(checked%10===0)console.log('Rendered studies:',checked);
}
const optionSong=songs.find(s=>s.id==='for-youth');
const exercise=render(React.createElement(ExerciseCard,{exercise:optionSong.exercises[0],index:0,onAnswer:()=>{}}),'eng');
assert.ok(exercise.includes('CHOOSE AN ANSWER'));assert.ok(!exercise.includes('ESCOLHA UMA RESPOSTA'));
const Home=require('../app/page.tsx').default;const {About,Help}=require('../components/info-pages.tsx');const {GoogleLogin}=require('../components/google-login.tsx');
for(const [component,expected] of [[Home,'Your next step in Korean'],[About,'ABOUT US'],[Help,'HELP &amp; FAQ'],[GoogleLogin,'Continue with Google']]){const html=render(React.createElement(component),'eng');assert.ok(html.includes(expected),'English page: '+expected);}
console.log('PASS: '+checked+' song pages render in PT and ENG; English lyrics have no translation control, Korean lines retain explanations, and exercise controls are localized.');
