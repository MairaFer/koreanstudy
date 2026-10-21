const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const expectedCity=`니가 어디에 살건
내가 어디에 살건
한참을 달렸네
나 다시 또 한참을 달렸네
Yeah I'll be ridin' and I'll be dyin'
In ma city
I don't know what to say 나 죽어도 말 못해
내게 억만 금을 주고 딴 데 살라고?
Ah no thanks
일산. 내가 죽어도 묻히고픈 곳
It's the city of the flower, city of 몬
집 같던 라페스타 또 웨스턴돔
어린 시절 날 키워낸 후곡 학원촌 uh
세상에서 가장 조화로운 곳 uh
자연과 도시, 빌딩과 꽃 uh
한강보다 호수공원이 더 좋아 난
작아도 훨씬 포근히 안아준다고 널
내가 나를 잃는 것 같을 때
그 곳에서 빛바래 오래된 날 찾네
Remember 너의 냄새 또 everything
You're my summer, autumn, winter and every spring
자 부산의 바다여
Say la la la la la
푸른 하늘아래 this sky line
Say la la la la la
아재들은 손을 들어
아지매도 손 흔들어
Ma City로 와
Come to ma city
잘 봐 주길 바래
Know how to party
날 키워준 city
그래 babe babe
이게 나의 city city
(Welcome to ma city)
한참을 달렸네
나 다시 또 한참을 달렸네
Yeah I'll be ridin' and I'll be dyin'
In ma city, city
Ma city, ma city yeah
나 전라남도 광주 baby
내 발걸음이 산으로 간대도
무등산 정상에 매일 매일
내 삶은 뜨겁지, 남쪽의 열기
이열치열 법칙 포기란 없지
나 KIA넣고 시동 걸어 미친 듯이 bounce
오직 춤 하나로 가수란 큰 꿈을 키워
이젠 현실에서 음악과 무대 위에 뛰어
다 봤지 열정을 담았지
내 광주 호시기다 전국 팔도는 기어
날 볼라면 시간은 7시 모여 집합
모두다 눌러라 062-518
자 부산의 바다여
Say la la la la la
푸른 하늘아래 this sky line
Say la la la la la
아재들은 손을 들어
아지매들 손 흔들어
Ma City로 와
Come to ma city
잘 봐 주길 바래
Know how to party
날 키워준 city
그래 babe babe
이게 나의 city city
(Welcome to ma city)
대구에서 태어나 대구에서 자랐지
수혈 받기엔 좀 힘들어
몸 속에는 파란 피
이 새끼는 매 앨범마다
대구 얘기를 해도
지겹지도 않나 봐 생각을 할 수도 있지만
I'ma D boy 그래 난 D boy
솔직하게 말해 대구
자랑할 게 별 게 없어
내가 태어난 것 자체가 대구의 자랑
그래 아 그래
자랑할 게 없기에 자랑스러워
질 수 밖에 안 그래?
Ayo 대구 출신 가장 성공한 놈이래
이런 소리를 들을 거야 잘 봐라 이젠
내가 대구의 자랑 새 시대 새로운 바람
대구의 과거이자 현재 그리고 미래
Come to ma city
잘 봐 주길 바래
Know how to party
날 키워준 city
그래 babe babe
이게 나의 city city
(Welcome to ma city)
한참을 달렸네
나 다시 또 한참을 달렸네
Yeah I'll be ridin' and I'll be dyin'
In ma city, city
Ma city, ma city yeah
La la la la la la la la
La la la la la la la la
어디 살건 어디 있건
Ma city, city
Ma city, ma city yeah yeah
Ha ha ha`.split('\n');
const expectedButterfly=`아무것도 생각하지 마
넌 아무 말도 꺼내지도 마
그냥 내게 웃어줘
난 아직도 믿기지가 않아
이 모든 게 다 꿈인 것 같아
사라지려 하지마
Is it true? is it true?
You you
너무 아름다워 두려워
Untrue untrue
You you you
곁에 머물러줄래
내게 약속해줄래
손 대면 날아갈까 부서질까
겁나 겁나 겁나
시간을 멈출래
이 순간이 지나면
없었던 일이 될까 널 잃을까
겁나 겁나 겁나
Butterfly, like a butterfly
마치 butterfly, bu butterfly 처럼
Butterfly, like a butterfly
마치 butterfly, bu butterfly 처럼
넌 마치 butterfly
멀리서 훔쳐봐 손 닿으면 널 잃을까
이 칠흑 같은 어둠 속 날 밝히는 나비효과
니 작은 손짓 한 번에 현실을 잊어 난
살며시 쓰다듬는 바람 같아
살포시 표류하는 먼지 같아
넌 거기 있지만 왠지 닿지 않아 stop
꿈 같은 넌 내게 butterfly, high
Untrue untrue
You you you
곁에 머물러줄래
내게 약속해줄래
손 대면 날아갈까 부서질까
겁나 겁나 겁나
시간을 멈출래
이 순간이 지나면
없었던 일이 될까 널 잃을까
겁나 겁나 겁나
심장은 메마른 소리를 내
꿈인지 현실인지 알 수 없네
나의 해변의 카프카여
저기 숲으로 가진 말아줘
내 마음은 아직 너 위에 부서져
조각조각 까맣게 녹아 흘러
(난 그냥 이대로 증발하고 싶어)
내 사랑은 영원인 걸
It's all free for you baby
곁에 머물러줄래
내게 약속해줄래
손 대면 날아갈까 부서질까
겁나 겁나 겁나
시간을 멈출래
이 순간이 지나면
없었던 일이 될까 널 잃을까
겁나 겁나 겁나
Butterfly, like a butterfly
마치 butterfly, bu butterfly 처럼
Butterfly, like a butterfly
마치 butterfly, bu butterfly 처럼`.split('\n');
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,v,expected]of [['ma-city','maCity',expectedCity],['butterfly','butterfly',expectedButterfly]]){
const d=require('../lib/'+id+'.ts'),sections=d[v+'Sections'],vocab=d[v+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.deepEqual(all.map(l=>l.text),expected);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=28&&vocab.nouns.length>=25);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x)&&!['La la la la la la la la.','Ha ha ha.','Ilsan','Busan','Gwangju','Daegu'].includes(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const enhanced=addMusicCuriosities(id,sections);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);
assert.equal(lookup(song.title),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Instrumental)',' (Remix)'])assert.equal(lookup(song.title+suffix),undefined);
for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3);}
if(id==='ma-city'){assert.deepEqual(sections[4].lines,sections[8].lines);assert.deepEqual(sections[4].lines,sections[10].lines);assert.deepEqual(sections[5].lines,sections[11].lines);assert.notEqual(sections[3].lines[5].text,sections[7].lines[5].text);assert.ok(musicCuriosities[id].some(c=>c.term.includes('7시')&&c.card.includes('discriminação')));}else{assert.deepEqual(sections[3].lines,sections[8].lines);assert.deepEqual(sections[3].lines,sections[10].lines);assert.deepEqual(sections[4].lines,sections[11].lines);assert.equal(lookup('Butterfly (Prologue Mix)'),undefined);assert.equal(lookup('Butterfly (Alternative Mix)'),undefined);}
}
assert.ok(songs.length>=111);console.log('PASS: Ma City 101 lines and Butterfly 62 lines; exact supplied lyrics, repeats and variants; contextual PT/ENG notes, Korean preserved, 16 unique cards, vocabulary, 10 exercises and original-only catalog links.');
