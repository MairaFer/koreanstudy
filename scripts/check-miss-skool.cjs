const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const[id,name,count,aliases]of [['miss-right','missRight',106,['Miss Right']],['intro-skool-luv-affair','introSkoolLuvAffair',79,['Intro: Skool Luv Affair','Intro : Skool Luv Affair']]]){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);
 assert.equal(all.length,count);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));assert.ok(vocabulary.verbs.length>=15&&vocabulary.nouns.length>=15);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(!['perfume','“Hip-hop?”'].includes(x))assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x)}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
 if(id==='miss-right'){
  assert.deepEqual(sections.map(s=>s.lines.length),[6,21,8,8,20,9,12,6,8,8]);assert.deepEqual(sections[2].lines,sections[8].lines);assert.deepEqual(sections[3].lines,sections[9].lines);
  assert.equal(all[0].text,"You're my miss right, miss right");assert.equal(all.at(-1).text,'바로 너야');
  assert.ok(all.some(l=>l.text==='질투심과 시기보단됨됨이를 알아주는'));assert.ok(all.some(l=>l.text==='니가 어리던 말던'));assert.ok(all.some(l=>l.text==='나이가 많던 숨긴 아이가 있던'));
  assert.equal(all.filter(l=>l.text==='너의 한숨이 되고 싶어').length,3);assert.ok(all.find(l=>l.text==='우리 커플 신발 사이에 어린이 운동화').entries[0].notes[0].includes('projeção'));
  assert.ok(all.find(l=>l.text==='너의 한숨이 되고 싶어').entries[0].notes[0].includes('suspiro'));
 }else{
  assert.deepEqual(sections.map(s=>s.lines.length),[11,14,8,8,27,3,3,5]);assert.equal(all[0].text,'첫 만남 첫 문자 첫 통화');assert.equal(all.at(-1).text,'Wassup');
  assert.equal(sections[1].lines.length,14);assert.equal(sections[3].lines.length,8);assert.ok(sections[1].lines.every(l=>l.english));assert.ok(sections[3].lines.every(l=>l.english));
  assert.ok(all.some(l=>l.text==="(Which means 'just wait')\""));assert.ok(all.some(l=>l.text==="(Which means 'want to give you')\""));
  assert.equal(all.filter(l=>l.text==='이게 한 마디로 방탄 style').length,3);assert.deepEqual(sections[5].lines.slice(1),sections[6].lines.slice(1));assert.notEqual(sections[5].lines[0].text,sections[6].lines[0].text);
  for(const text of ['꼭 나처럼 해보는 게','사랑할 땐 한 번도','내 인생 맨 앞에 두고파','그런 게 행복일 순 없겠지만 꼭 주고파'])assert.ok(all.find(l=>l.text===text).entries[0].notes.length);
 }
}
console.log('PASS: Miss Right 106 lines and Intro Skool Luv Affair 79 lines; complete supplied lyrics and translated dialogues, refrains, pronouns, future imagery, wordplay, PT/ENG explanations, 16 cards, vocabulary and 10 exercises.');
