const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,v,lengths,aliases]of [
['love-is-not-over-full','loveIsNotOverFull',[2,3,5,5,9,7,5,9,5,5,4],['Love Is Not Over (Full Length Edition)','Love Is Not Over (Full Length)']],
['dead-leaves','deadLeaves',[7,16,6,6,13,2,6,4,7,6,6,2],['Autumn Leaves','Dead Leaves','고엽','Dead Leaves (고엽; Goyeob)']]]){
const d=require('../lib/'+id+'.ts'),sections=d[v+'Sections'],vocab=d[v+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.deepEqual(sections.map(s=>s.lines.length),lengths);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=26&&vocab.nouns.length>=21);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const enhanced=addMusicCuriosities(id,sections);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
for(const alias of aliases){assert.equal(lookup(alias),id);assert.equal(lookup(alias+' (Live)'),undefined);assert.equal(lookup(alias+' (Japanese Ver.)'),undefined);}
if(id==='love-is-not-over-full'){
for(const n of [3,6,9])assert.deepEqual(sections[2].lines,sections[n].lines);
assert.equal(sections[8].lines[0].text,'사랑이란 아프고 아픈 것');assert.equal(sections[8].lines[2].text,'니가 없으면 나 안될 것 같아');assert.equal(all.filter(l=>l.text==='Love is not over, over, over').length,4);
assert.equal(sections[1].lines[0].text,'왜 멀어져가 왜 닿지 않을 만큼 가서');assert.equal(sections[4].lines.at(-1).text,'그 곳에');assert.equal(sections[5].lines.at(-1).text,'넌');
}else{
for(const n of [6,9])assert.deepEqual(sections[2].lines,sections[n].lines);assert.deepEqual(sections[3].lines,sections[10].lines);
assert.equal(sections[4].lines[2].text,'너는 나의 다섯 번째 계절');assert.equal(sections[4].lines[6].text,'미련이 빨래처럼 조각조각 널어지네');assert.equal(sections[8].lines.at(-1).text,'마지막 잎새까지 넌 넌 넌');assert.equal(sections[1].lines[14].text,'제발 떨어지지 말아주오');
}
}
assert.equal(lookup('Outro: Love Is Not Over'),'outro-love-is-not-over');assert.equal(songs.length,109);
console.log('PASS: 59/81 lines, repetitions and lyric variants, PT/ENG notes and Korean preservation, 16 unique cards, vocabulary, 10 exercises, catalog aliases and separate original outro.');
