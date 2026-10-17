import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const roots=['app','components','lib'];
const files=roots.flatMap(root=>fs.readdirSync(root,{recursive:true}).filter(p=>/\.tsx?$/.test(p)&&!p.includes('ui'+path.sep)&&!p.includes('localization')&&!p.includes('locale')).map(p=>path.join(root,p)));
const texts=new Set(),byFile={};
const skip=new Set(['id','className','href','src','type','kind','videoId','ko','koTitle','term','source','lang','value','key','color','method','credentials','target','rel','view']);
for(const file of files){
 const sf=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);const found=new Set();
 function add(s){s=s.replace(/\s+/g,' ').trim();if(!s||s.includes('|')||['__proto__','constructor','prototype'].includes(s)||!/[a-zA-ZÀ-ÿ]/.test(s)||/^https?:|^[@./#]|^\[|^application\/|^[a-z]+[-_/][a-z0-9_/-]+$/i.test(s))return;found.add(s);texts.add(s);}
 function visit(n){
  if(ts.isJsxText(n))add(n.text);
  else if(ts.isStringLiteralLike(n)){
   const p=n.parent;
   if(ts.isImportDeclaration(p)||ts.isImportSpecifier(p)||ts.isLiteralTypeNode(p)||ts.isPropertyAssignment(p)&&p.name===n||ts.isElementAccessExpression(p))return;
   if(ts.isJsxAttribute(p)&&!['title','alt','placeholder','aria-label','description','eyebrow'].includes(p.name.getText(sf)))return;
   if(ts.isPropertyAssignment(p)&&skip.has(p.name.getText(sf).replace(/['"]/g,'')))return;
   if(ts.isCallExpression(p)&&p.arguments[0]===n&&['l','en','e'].includes(p.expression.getText(sf)))return;
   if(ts.isBinaryExpression(p)&&[ts.SyntaxKind.EqualsEqualsEqualsToken,ts.SyntaxKind.ExclamationEqualsEqualsToken].includes(p.operatorToken.kind))return;
   add(n.text);
  }else if(ts.isTemplateExpression(n)){let s=n.head.text;n.templateSpans.forEach((sp,i)=>{s+='{'+i+'}'+sp.literal.text;});add(s);}
  ts.forEachChild(n,visit);
 }
 visit(sf);byFile[file]=[...found];
}
// Include strings assembled by course helpers, such as the meanings of cards
// stored as compact source data, and interpolated exercise explanations.
const contentFiles=fs.readdirSync('lib').filter(p=>p.endsWith('.ts')&&!['word-translation.ts','localization.ts','google-auth.ts','utils.ts','study-store.ts','study-data.ts','progress.ts','audio-text.ts','click-options.ts'].includes(p));
for(const file of contentFiles){
 const code=ts.transpileModule(fs.readFileSync('lib/'+file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText;
 if(/^import /m.test(code))continue;
 const data=await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
 function walk(value,key=''){if(['id','ko','koTitle','term','text','videoId'].includes(key))return;if(typeof value==='string'){if(/[a-zA-ZÀ-ÿ]/.test(value)&&!/^https?:/.test(value)){const s=value.replace(/\s+/g,' ').trim();texts.add(s);}}else if(Array.isArray(value))value.forEach(v=>walk(v,key));else if(value&&typeof value==='object')Object.entries(value).forEach(([k,v])=>walk(v,k));}
 Object.values(data).forEach(value=>{if(typeof value!=='function')walk(value);});
}
fs.mkdirSync('locales',{recursive:true});
fs.writeFileSync('locales/source.json',JSON.stringify([...texts].sort(),null,2)+'\n');
fs.writeFileSync('locales/coverage.json',JSON.stringify(byFile,null,2)+'\n');
console.log(JSON.stringify({files:files.length,strings:texts.size,characters:[...texts].join('').length}));
