const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['blanket-kick','blanketKick',97,['Blanket Kick','이불킥','Blanket Kick (이불킥)','Embarrassed']],['24-7-heaven','heaven247',87,['24/7=Heaven','24/7 = Heaven']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=20&&vocabulary.nouns.length>=20);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='blanket-kick'){
  assert.deepEqual(sections.map(s=>s.lines.length),[1,13,12,6,4,5,13,11,6,11,6,4,5]);assert.deepEqual(sections[3].lines,sections[8].lines);assert.deepEqual(sections[3].lines,sections[10].lines);assert.deepEqual(sections[5].lines,sections[12].lines);
  assert.ok(all.some(l=>l.text==='왜 그랬을까? 머리는 (빙빙)'));assert.ok(all.some(l=>l.text==='왜 그랬을까? 머린 (빙빙)'));assert.ok(all.some(l=>l.text==='스킨쉽과 또 앙탈'));assert.ok(all.some(l=>l.text.startsWith('뛰다 챙피함을')));
  assert.equal(all[0].text,'(One, two, three, four)');assert.equal(all.at(-1).text,'Only you');
  assert.ok(all.find(l=>l.text.startsWith('찐한 키스')).entries[0].notes[0].includes('não um beijo já realizado'));assert.ok(all.find(l=>l.text==='자꾸 네게 흑심이 생겨').entries[0].notes[0].includes('lápis'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[8,12,4,8,8,12,4,8,7,8,8]);assert.deepEqual(sections[0].lines,sections[4].lines);assert.deepEqual(sections[0].lines,sections[10].lines);assert.deepEqual(sections[2].lines,sections[6].lines);assert.deepEqual(sections[3].lines,sections[7].lines);
  assert.equal(all[0].text,'너와의 첫 데이트');assert.equal(all.at(-1).text,'너라는 해가 뜬 Sunday');assert.equal(all.filter(l=>l.text==='너와의 첫 데이트').length,6);assert.equal(all.filter(l=>l.text==='너라는 해가 뜬 Sunday').length,6);
  assert.ok(all.some(l=>l.text==='니 생각만 가득했지 하루죙일'));assert.ok(all.some(l=>l.text==='이제는 아냐 someday'));assert.ok(all.find(l=>l.text==='오늘은 한숨도 못 잘 것 같아').entries[0].notes[0].includes('não um suspiro'));
  assert.ok(all.find(l=>l.text==='(I know) 만들어').entries[0].notes[0].includes('만들다'));
 }
}
console.log('PASS: Blanket Kick 97 lines and 24/7=Heaven 87 lines; exact supplied text and repetitions, final 머린 and someday variants, wordplay, PT/ENG Korean coverage, 16 cards, vocabulary, 10 exercises and original catalog aliases.');
