const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(root,request.slice(2));return original.call(this,request,parent,...rest);};
for(const extension of ['.ts','.tsx'])require.extensions[extension]=(module,file)=>{const result=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}});module._compile(result.outputText,file);};
console.log('Loading React render checks…');
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx');

const {Localized}=require('../components/localization.tsx');
const {BtsCatalog}=require('../components/bts-catalog.tsx');
const html=renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:'eng'},React.createElement(Localized,null,React.createElement(BtsCatalog))));
const nav=html.match(/<nav class="artist-tabs"[\s\S]*?<\/nav>/)[0].replace(/<[^>]*>/g,'');
for(const name of ['BTS','RM','Jin','SUGA','j-hope','Jimin','V','Jung Kook'])assert.ok(nav.includes(name+' Songs'),'Missing artist tab: '+name);
assert.ok(!html.includes('SUCKS'),'Mistranslated artist in rendered catalog');
console.log('PASS: all artist tabs preserve names and show Songs in English.');
