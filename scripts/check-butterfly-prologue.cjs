const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {butterflyPrologueSections:sections,butterflyPrologueVocabulary:vocab}=require('../lib/butterfly-prologue.ts'),{butterflySections}=require('../lib/butterfly.ts'),{songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const expected=`아무것도 생각하지 마
넌 아무 말도 꺼내지도 마
그냥 내게 웃어줘
난 아직도 믿기지가 않아
이 모든 게 다 꿈인 것 같아
사라지려 하지마
Is it true? Is it true?
You You
너무 아름다워 두려워
Untrue Untrue
You You You
곁에 머물러줄래
내게 약속해줄래
손 대면 날아갈까 부서질까
겁나 겁나 겁나
시간을 멈출래
이 순간이 지나면
없었던 일이 될까 널 잃을까
겁나 겁나 겁나
Butterfly, like a Butterfly
마치 Butterfly, bu butterfly 처럼
Butterfly, like a butterfly
마치 Butterfly, bu butterfly 처럼
햇살에 조금 찌푸린 니 눈썹에
보드랍게 흔들리는 니 솜털에
니 향기에 취해 맘이 간질거려
두 볼을 어루만지는 니 품처럼
한가로이 표류하는 먼지처럼
넌 거기 있지만 왠지 닿질 않아
Is it true? Is it true?
You You
너무 아름다워 두려워
Untrue Untrue
You You You
곁에 머물러줄래
내게 약속해줄래
손 대면 날아갈까 부서질까
겁나 겁나 겁나
시간을 멈출래
이 순간이 지나면
없었던 일이 될까 널 잃을까
겁나 겁나 겁나
Butterfly, like a butterfly
마치 Butterfly, bu butterfly 처럼
Butterfly, like a butterfly
마치 Butterfly, bu butterfly 처럼
아무것도 생각하지 마
넌 아무 말도 꺼내지도 마
그냥 내게 웃어줘`.split('\n');
const all=sections.flatMap(s=>s.lines),id='butterfly-prologue',song=songs.find(s=>s.id===id),ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
assert.deepEqual(all.map(l=>l.text),expected);assert.equal(all.length,49);assert.deepEqual(sections[0].lines,sections.at(-1).lines);assert.equal(all.filter(l=>l.text==='겁나 겁나 겁나').length,4);assert.equal(all.filter(l=>l.text==='마치 Butterfly, bu butterfly 처럼').length,4);
assert.ok(!all.some(l=>l.text.includes('카프카')||l.text.includes('나비효과')),'Do not import the other version’s rap');assert.ok(butterflySections.flatMap(s=>s.lines).some(l=>l.text==='나의 해변의 카프카여'),'Original study retained');assert.ok(all.find(l=>l.text==='보드랍게 흔들리는 니 솜털에').entries[0].notes[0].includes('não uma roupa'));
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else{assert.equal(l.english,true);assert.equal(l.entries.length,0);}}
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const before=JSON.stringify(sections),enhanced=addMusicCuriosities(id,sections);assert.equal(JSON.stringify(sections),before);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);assert.ok(vocab.verbs.length>=20&&vocab.nouns.length>=15);assert.ok(!vocab.nouns.some(w=>w.ko==='카프카'||w.ko==='숲'));
assert.equal(song.exercises.length,5);for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3);}
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const alias of ['Butterfly (Prologue Mix)','Butterfly prologue mix','Butterfly Prologue'])assert.equal(lookup(alias),id);assert.equal(lookup('Butterfly'),'butterfly');for(const title of ['Butterfly (Alternative Mix)','Butterfly (Prologue Mix) (Live)','Butterfly (Prologue Mix) (Japanese Ver.)','Butterfly (Prologue Mix) (Remix)','Butterfly (Prologue Mix) (Instrumental)'])assert.equal(lookup(title),undefined);
assert.ok(songs.length>=118);console.log('PASS: Butterfly Prologue 49 supplied lines, exact capitalization and repetitions, six distinct sensory lines, original study retained, PT/ENG notes, eight unique cards, vocabulary, five exercises and version-specific catalog aliases.');
