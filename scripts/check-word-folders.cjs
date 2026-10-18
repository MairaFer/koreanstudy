const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(root,request.slice(2));return resolve.call(this,request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx');
let state=[],cursor=0,changes=[];
const fakeReact={...React,useState(initial){const i=cursor++;if(!(i in state))state[i]=initial;return[state[i],value=>{state[i]=value;}];}};
const file=path.join(root,'components/account.tsx'),mod=new Module(file,module);mod.filename=file;mod.paths=module.paths;
mod.require=request=>request==='react'?fakeReact:request==='@/lib/study-store'?{changeWord:(...args)=>changes.push(args)}:require(request);
mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const base={context:'함께 있어',source:'#bts/estudos/moon',saved:true,reviewed:false};
let words={가:{...base,word:'가',color:'yellow',savedAt:10},하늘:{...base,word:'하늘',color:'yellow',savedAt:30},달:{...base,word:'달',color:'purple',savedAt:20},나:{...base,word:'나',color:null,savedAt:5}};
function tree(){cursor=0;return mod.exports.SavedWordsNotebook({words});}
function elements(node,match,out=[]){if(Array.isArray(node))node.forEach(n=>elements(n,match,out));else if(node&&typeof node==='object'&&node.props){if(match(node))out.push(node);elements(node.props.children,match,out);}return out;}
function buttons(node,cls){return elements(node,e=>e.type==='button'&&e.props.className===cls);}
function html(node,locale='pt'){return renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));}
let view=tree();assert.equal(buttons(view,'word-folder').length,3);assert.equal(elements(view,e=>e.type==='article').length,0);
let previews=elements(view,e=>e.props.className==='word-folder-preview').map(e=>e.props.children);assert.deepEqual(previews,['하늘','달','나']);
assert.ok(html(view,'eng').includes('Open folder'));assert.ok(!html(view,'eng').includes('Última palavra salva'));
buttons(view,'word-folder')[0].props.onClick();view=tree();assert.equal(elements(view,e=>e.type==='article').length,2);assert.equal(buttons(view,'word-folder').length,0);assert.ok(!html(view).includes('>달<'));
const review=elements(view,e=>e.type==='button'&&e.props.children==='Marcar como aprendida')[0];review.props.onClick();assert.equal(changes[0][0].reviewed,true);
const remove=elements(view,e=>e.type==='button'&&e.props.children==='Remover destaque e dos salvos')[0];remove.props.onClick();assert.equal(changes[1][0],null);
delete words['하늘'];view=tree();assert.equal(elements(view,e=>e.type==='article').length,1);
buttons(view,'text-button back')[0].props.onClick();view=tree();previews=elements(view,e=>e.props.className==='word-folder-preview').map(e=>e.props.children);assert.equal(previews[0],'가');
buttons(view,'word-folder')[0].props.onClick();view=tree();delete words['가'];view=tree();assert.ok(html(view).includes('Esta pasta está vazia'));
elements(view,e=>e.type==='button'&&e.props.children==='Para revisar')[0].props.onClick();view=tree();assert.equal(elements(view,e=>e.type==='article').length,0);assert.ok(buttons(view,'word-folder').length);
console.log('PASS: folder overview shows only each latest word; open/back/filter navigation, selected-color isolation, review/removal, updated preview, empty folders and English labels.');
