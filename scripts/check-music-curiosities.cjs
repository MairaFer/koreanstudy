const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),original=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){if(request.startsWith('@/'))request=path.join(root,request.slice(2));return original.call(this,request,parent,...rest);};
for(const extension of ['.ts','.tsx'])require.extensions[extension]=(module,file)=>{const result=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}});module._compile(result.outputText,file);};

const React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const {LocaleProvider}=require('../components/localization.tsx');
const {translate}=require('../lib/localization.ts');
const {musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const source=fs.readFileSync('components/music-study.tsx','utf8');
let reviewed=0,added=0,updated=0,retained=0;
for(const match of source.matchAll(/import \{(\w+Sections),[^}]+\} from ['"]@\/lib\/([^'"]+)['"]/g)){
 const file=match[2],id=file==='persona'?'intro-persona':file;
 const sections=require('../lib/'+file+'.ts')[match[1]];
 const before=JSON.stringify(sections);
 const original=sections.flatMap(s=>s.lines.flatMap(l=>l.entries||[]));
 const result=addMusicCuriosities(id,sections);
 assert.equal(JSON.stringify(sections),before,'Mutated original study: '+id);
 assert.deepEqual(addMusicCuriosities(id,result),result,'Repeated application adds duplicate cards: '+id);
 const entries=result.flatMap(s=>s.lines.flatMap(l=>l.entries||[]));
 for(const entry of original.filter(e=>e.card))assert.ok(entries.some(e=>e.term===entry.term&&e.card===entry.card),'Lost existing card: '+id);
 const cards=musicCuriosities[id]||[];
 if(cards.length)updated++;else {assert.strictEqual(result,sections);retained++;}
 for(const card of cards){
  assert.ok(original.some(e=>e.term===card.term),'Missing card anchor: '+id+' '+card.term);
  assert.equal(entries.filter(e=>e.card===card.card).length,1,'Card repeated: '+id+' '+card.term);
  const en=translate(card.card,'eng');assert.notEqual(en,card.card,'Missing English card: '+id);
  assert.deepEqual((en.match(/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g)||[]).sort(),(card.card.match(/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g)||[]).sort(),'Korean changed in card: '+id);
  if(card.source)assert.ok(new URL(card.source).protocol==='https:');added++;
 }
 reviewed++;
}
assert.equal(reviewed,48);assert.equal(updated,37);assert.equal(retained,11);assert.equal(added,50);
const {CuriosityCard}=require('../components/music-study.tsx');
for(const [id,cards] of Object.entries(musicCuriosities))for(const card of cards)for(const locale of ['pt','eng']){
 const html=renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},React.createElement(CuriosityCard,{text:card.card,source:card.source})));
 assert.ok(html.includes('class="post-it"'),'Missing visual card: '+id);
 assert.ok(html.includes(locale==='eng'?'A closer look':'Card de curiosidade'),'Wrong card label: '+id);
 const plain=html.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
 assert.ok(plain.includes(translate(card.card,locale)),'Wrong card body language: '+id);
 if(card.source)assert.ok(html.includes(locale==='eng'?'View reference':'Consultar referência'),'Missing reference: '+id);
}
const persona=require('../lib/persona.ts').personaSections.flatMap(s=>s.lines).find(l=>l.text.includes('개인지 돼진지'));
assert.ok(persona.translation.includes('cão'));assert.ok(!JSON.stringify(persona).includes('pessoa cão'));
const necklace=require('../lib/persona.ts').personaSections.flatMap(s=>s.lines).find(l=>l.text.includes('진주목걸일 거네'));
assert.ok(necklace.translation.includes('penduram'));
assert.ok(necklace.entries.some(e=>e.notes?.some(n=>n.includes('걸다'))));
const necklace=require('../lib/persona.ts').personaSections.flatMap(s=>s.lines).find(l=>l.text.includes('진주목걸일 거네'));
assert.ok(necklace.translation.includes('penduram'));
assert.ok(necklace.entries.some(e=>e.notes?.some(n=>n.includes('걸다'))));
assert.ok(source.includes('addMusicCuriosities(song.id,study.sections)'));
console.log('PASS: 48 studies reviewed; 50 new cards in 37 studies; 11 retained; PT/ENG cards render with sources; originals preserved; repeated choruses and repeated application do not duplicate additions.');
