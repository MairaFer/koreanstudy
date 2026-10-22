const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts'),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const source=fs.readFileSync('components/bts-catalog.tsx','utf8'),cat=source.match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const spec=[{"id":"we-on","name":"weOn","count":132,"lengths":[1,8,31,12,8,25,12,15,12,8],"aliases":["we on"]},{"id":"intro-orul82","name":"introOrul82","count":21,"lengths":[8,2,4,3,4],"aliases":["intro: o!rul8,2?","intro: o!rul8,2","intro : o!rul8,2?","intro: o!rul8, 2?"]},{"id":"skit-r-u-happy-now","name":"skitRUHappyNow","count":52,"lengths":[15,12,16,9],"aliases":["skit: r u happy now?","skit : r u happy now?","skit: r u happy now"]},{"id":"if-i-ruled-the-world","name":"ifIRuledTheWorld","count":84,"lengths":[4,21,6,5,16,6,5,10,6,5],"aliases":["if i ruled the world"]},{"id":"coffee","name":"coffee","count":81,"lengths":[5,21,10,15,10,10,10],"aliases":["coffee"]},{"id":"cypher-pt1","name":"cypherPt1","count":60,"lengths":[25,19,16],"aliases":["bts cypher, pt.1","bts cypher pt. 1","bts cypher pt.1","bts cypher, pt. 1"]},{"id":"attack-on-bangtan","name":"attackOnBangtan","count":91,"lengths":[3,5,18,6,6,6,19,6,5,5,6,6],"aliases":["attack on bangtan","attack on bangtan (진격의 방탄; jingyeogui bangtan)","진격의 방탄"]},{"id":"satoori-rap","name":"satooriRap","count":113,"lengths":[3,8,13,11,10,13,8,1,30,8,8],"aliases":["satoori rap","paldogangsan","satoori rap (팔도강산; paldogangsan)","팔도강산"]},{"id":"outro-luv-in-skool","name":"outroLuvInSkool","count":25,"lengths":[6,4,3,6,6],"aliases":["outro: luv in skool","outro : luv in skool"]}];

assert.deepEqual(spec.map(s=>s.count),[132,21,52,84,81,60,91,113,25]);
const sameAllowed=new Set(['Caramel macchiato.','trainee','beat','Bang. Tan. So. Nyeon. Dan.']);
const loaded={};
for(const {id,name,count,lengths,aliases} of spec){
 const data=require('../lib/'+id+'.ts'),sections=data[name+'Sections'],vocabulary=data[name+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);loaded[id]={sections,all,song};
 assert.equal(all.length,count);assert.deepEqual(sections.map(s=>s.lines.length),lengths);assert.deepEqual(all.map(l=>l.text),fs.readFileSync('scripts/fixtures/'+id+'.txt','utf8').trim().split(/\r?\n/));
 assert.ok(vocabulary.verbs.length>=8&&vocabulary.nouns.length>=8);assert.equal(song.exercises.length,5);
 for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(ko)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0)}}
 const localized=[...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),...Object.values(vocabulary).flat().map(w=>w.pt),song.topic,song.intro,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation])];
 for(const x of localized){const eng=translate(x,'eng');if(!sameAllowed.has(x))assert.notEqual(eng,x,'Missing adaptation: '+x);assert.deepEqual((eng.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);assert.ok(!eng.includes('\u200b'))}
 const original=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),original);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
 for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3)}
 for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Remix)',' (Instrumental)'])assert.equal(lookup(alias+suffix),undefined)}
}
function has(id,text){assert.ok(loaded[id].all.some(l=>l.text===text),id+' missing '+text)}
function note(id,text,part){has(id,text);assert.ok(loaded[id].all.find(l=>l.text===text).entries[0].notes[0].includes(part))}
const w=loaded['we-on'].sections;for(const i of [4,9])assert.deepEqual(w[1].lines,w[i].lines);for(const i of [6,8])assert.deepEqual(w[3].lines,w[i].lines);
for(const x of ['H-here for my muzik','R-real for my muzik','가방끈이 짧아, 7부','니 "감"은 썩었어, 도려내'])has('we-on',x);
note('we-on','너흰 그냥 그린벨트','desenvolvimento');
note('intro-orul82','가슴에 손을 얹고','-고');assert.equal(loaded['intro-orul82'].all.at(-1).text,'어 진짜 뭐였지');
assert.equal(loaded['skit-r-u-happy-now'].all.filter(l=>l.text.startsWith('Jungkook:')).length,4);has('skit-r-u-happy-now','Jungkook: ZZzzz');has('skit-r-u-happy-now','Jungkook: ZZZzz');has('skit-r-u-happy-now','V: 우리 휴게소 안들... 안들려요?');
const f=loaded['if-i-ruled-the-world'].sections;for(const i of [5,8])assert.deepEqual(f[2].lines,f[i].lines);for(const i of [6,9])assert.deepEqual(f[3].lines,f[i].lines);has('if-i-ruled-the-world','노래 제목은 애구가');note('if-i-ruled-the-world','난 힙합계의 김정은이 되서','돼서');
const c=loaded.coffee.sections;for(const i of [4,6])assert.deepEqual(c[2].lines,c[i].lines);has('coffee','1,2,3,4');has('coffee','너가 생각나며 rewind');note('coffee','너가 생각나며 rewind','네가');
has('cypher-pt1',"Blockin'em, like the Cassius' lance. Imma");has('cypher-pt1','난 절때 안 변해 태어날 때부터 난 모태');note('cypher-pt1','난 절때 안 변해 태어날 때부터 난 모태','절대');
const a=loaded['attack-on-bangtan'].sections;assert.deepEqual(a[3].lines,a[7].lines);assert.deepEqual(a[8].lines,a[4].lines.slice(0,5));assert.equal(a[4].lines.at(-1).text,'우리가 누구 누구진격의 방탄');assert.equal(a[10].lines.at(-1).text,'우리가 누구 누구 진격의 방탄');
const s=loaded['satoori-rap'].sections;for(const i of [9,10])assert.deepEqual(s[1].lines,s[i].lines);assert.equal(s[6].lines.at(-1).text,'(우린) 멋져부러 허벌라게');has('satoori-rap','[J-Hope and Suga talking]');note('satoori-rap','아직 팔구월 풍월 나 애가졌소','incerta');note('satoori-rap','표준인 만큼 정직해','persona');
const l=loaded['outro-luv-in-skool'].sections;assert.deepEqual(l[0].lines,l[3].lines);assert.equal(l.at(-1).lines.at(-1).text,'모든 게 꿈인 것 같아 oh baby');
assert.equal(lookup('ON'),'on');assert.equal(lookup('Skit'),undefined);assert.ok(source.includes('function studyForAlbum'));
console.log('PASS: nine O!RUL8,2 studies, complete 659 supplied lines and speech cues, chorus variants, dialect uncertainty, contextual references, PT/ENG coverage, 72 cards, 45 exercises and precise catalog aliases.');
