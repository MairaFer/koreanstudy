const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');const original=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return original.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {dopeSections:sections,dopeVocabulary:vocab}=require('../lib/dope.ts'),{songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const expected=`어서 와 방탄은 처음이지?
Ayo ladies & gentleman
준비가 됐다면 부를게 yeah!
딴 녀석들과는 다르게
내 스타일로 내 내 내 내 스타일로 에오!
밤새 일했지 everyday
니가 클럽에서 놀 때 yeah
자 놀라지 말고 들어 매일
I got a feel, I got a feel
난 좀 쩔어!
아 쩔어 쩔어 쩔어 우리 연습실 땀내
봐 쩌렁 쩌렁 쩌렁한
내 춤이 답해
모두 비실이 찌질이 찡찡이 띨띨이들
나랑은 상관이 없어
Cuz 난 희망이 쩔어 haha
Ok 우린 머리부터 발끝까지 전부 다
쩌 쩔어
하루의 절반을 작업에 쩌 쩔어
작업실에 쩔어 살어 청춘은 썩어가도
덕분에 모로 가도 달리는 성공가도
소녀들아 더 크게 소리질러 쩌 쩌렁
밤새 일했지 everyday
니가 클럽에서 놀 때 yeah
딴 녀석들과는 다르게
I don't wanna say yes
I don't wanna say yes
소리쳐봐 all right
몸이 타버리도록 all night (all night)
Cause we got fire (fire!)
Higher (higher!)
I gotta make it, gotta gotta make it
쩔어!
거부는 거부해
난 원래 너무해
모두 다 따라 해
쩔어
거부는 거부해
전부 나의 노예
모두 다 따라 해
쩔어
3포세대? 5포세대?
그럼 난 육포가 좋으니까 6포세대
언론과 어른들은 의지가 없다며
우릴 싹 주식처럼 매도해
왜 해보기도 전에 죽여 걔넨 enemy enemy enemy
왜 벌써부터 고개를 숙여 받아 energy energy energy
절대 마 포기 you know you not lonely
너와 내 새벽은 낮보다 예뻐
So can I get a little bit of hope? (yeah)
잠든 청춘을 깨워 go
밤새 일했지 everyday
니가 클럽에서 놀 때 yeah
딴 녀석들과는 다르게
I don't wanna say yes
I don't wanna say yes
소리쳐봐 all right
몸이 타버리도록 all night (all night)
Cause we got fire (fire!)
Higher (higher!)
I gotta make it, gotta gotta make it
쩔어!
거부는 거부해
난 원래 너무해
모두 다 따라 해
쩔어
거부는 거부해
전부 나의 노예
모두 다 따라 해
쩔어
이런 게 방탄 스타일
거짓말 wack들과는 달라
매일이 hustle life
I gotta make it fire baby
이런 게 방탄 스타일
거짓말 wack들과는 달라
매일이 hustle life
I gotta make it, gotta gotta make it
난 좀 쩔어!
Say what!
Say wo... wo...
Say what!
쩔어`.split('\n');
const all=sections.flatMap(s=>s.lines);assert.deepEqual(all.map(l=>l.text),expected);assert.equal(all.length,83);for(const [a,b] of [[5,9],[6,10],[7,11]])assert.deepEqual(sections[a].lines,sections[b].lines);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const tok of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(tok)),tok);assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
const id='dope',song=songs.find(s=>s.id===id);assert.equal(song.exercises.length,5);assert.equal(vocab.verbs.length,29);assert.equal(vocab.nouns.length,29);
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const result=addMusicCuriosities(id,sections);assert.equal(result.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,result),result);
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();for(const t of ['Dope','쩔어','Dope (쩔어)'])assert.equal(lookup(t),id);for(const t of ['Dope (Live)','Dope (Japanese Ver.)','Dope (Remix)'])assert.equal(lookup(t),undefined);
console.log('PASS: Dope: all 83 supplied lines, repeated refrains, colloquial spelling, Korean coverage, contextual PT/ENG, 8 unique cards, 58 vocabulary items and 5 exercises.');
