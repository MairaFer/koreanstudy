const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
const whalien=`이 넓은 바다 그 한가운데
한 마리 고래가 나즈막히 외롭게 말을 해
아무리 소리쳐도 닿지 않는 게
사무치게 외로워 조용히 입 다무네
아무렴 어때 뭐가
됐던 이젠 뭐 I don't care
외로움이란 녀석만 내 곁에서 머물 때
온전히 혼자가 돼 외로이 채우는 자물쇠
누군 말해 새끼 연예인 다 됐네
Oh fuck that, 그래 뭐 어때 누군가 곁에
머물 수 없다 한대도 그걸로 족해
날 향해 쉽게 얘기하는
이 말은 곧 벽이 돼
외로움조차 니들 눈엔 척이 돼
그 벽에 갇혀서
내 숨이 막혀도
저 수면 위를 향해
Hey oh, oh hey oh yeah
Lonely lonely lonely whale
이렇게 혼자 노래불러
외딴 섬 같은 나도
밝게 빛날 수 있을까
Lonely lonely lonely whale
이렇게 또 한 번 불러봐
대답 없는 이 노래가
내일에 닿을 때까지
No more, no more baby
No more, no more
끝없는 무전 하나 언젠가 닿을 거야
저기 지구 반대편까지 다
No more, no more baby
No more, no more
눈먼 고래들조차 날 볼 수 있을 거야
오늘도 다시 노래하지 나
세상은 절대로 몰라
내가 얼마나 슬픈지를
내 아픔은 섞일 수 없는 물과 기름
그저 난 수면 위에서만
숨을 쉴 때 관심 끝 외로운 바닷속 꼬마
나도 알리고 싶네 내 가치를 everyday
걱정의 멀미를 해 늘 스티커는 귀 밑에
Never end, 왜 끝은 없고 매번 hell
시간이 가도 차가운 심연 속의 neverland
But 늘 생각해
지금 새우잠 자더라도 꿈은 고래답게
다가올 큰 칭찬이
매일 춤을 추게 할거야
나답게 ye I'm swimmin'
내 미래를 향해 가
저 푸른 바다와
내 헤르츠를 믿어
Hey oh, oh hey oh yeah
Lonely lonely lonely whale
이렇게 혼자 노래불러
외딴 섬 같은 나도
밝게 빛날 수 있을까
Lonely lonely lonely whale
이렇게 또 한 번 불러봐
대답 없는 이 노래가
내일에 닿을 때까지
어머니는 바다가 푸르다 하셨어
멀리 힘껏 니 목소릴 내라 하셨어
그런데 어떡하죠 여긴 너무 깜깜하고
온통 다른 말을 하는 다른
고래들 뿐인데 I just can't hold it ma
사랑한다 말하고 싶어
혼자 하는 돌림 노래,
같은 악보 위를 되짚어
이 바다는 너무 깊어
그래도 난 다행인 걸
(눈물 나도 아무도 모를테니)
I'm a whalien
Lonely lonely lonely whale
이렇게 혼자 노래불러
외딴 섬 같은 나도
밝게 빛날 수 있을까
Lonely lonely lonely whale
이렇게 또 한 번 불러봐
대답 없는 이 노래가
내일에 닿을 때까지
No more, no more baby
No more, no more
끝없는 무전 하나 언젠가 닿을 거야
저기 지구 반대편까지 다
No more, no more baby
No more, no more
눈먼 고래들조차 난 볼 수 있을 거야
오늘도 다시 노래하지 나`.split('\n');
const silver=`They call me 뱁새
욕봤지 이 세대
빨리 chase 'em
황새 덕에 내 가랑인 탱탱
So call me 뱁새
욕봤지 이 세대
빨리 chase 'em
금수저로 태어난 내 선생님
알바 가면 열정페이
학교 가면 선생님
상사들은 행패
언론에선 맨날 몇 포 세대
룰 바꿔 change change
황새들은 원해 원해 maintain
그렇게는 안 되지 BANG BANG
이건 정상이 아냐
이건 정상이 아냐
아 노력노력 타령 좀 그만둬
아 오그라들어 내 두 손발도
아 노력 노력 아 노력 노력
아 노랗구나 싹수가
역시 황새
노력타령 좀 그만둬
아 오그라들어 내 두 손발도
아 노력 노력 아 노력 노력
아 노랗구나 싹수가
(역시 황새야) 실망 안 시켜
(역시 황새야) 이름 값 하네
(역시 황새야) 다 해먹어라
(역시 황새야) 황새야
They call me 뱁새
욕봤지 이 세대
빨리 chase 'em
황새 덕에 내 가랑인 탱탱
So call me 뱁새
욕봤지 이 세대
빨리 chase 'em
금수저로 태어난 내 선생님
난 뱁새다리 넌 황새다리
걔넨 말하지 '내 다린 백만 불짜리'
내 게 짧은데 어찌 같은 종목 하니?
They say '똑같은 초원이면 괜찮잖니!'
Never Never Never
룰 바꿔 change change
황새들은 원해 원해 maintain
그렇게는 안 되지 BANG BANG
이건 정상이 아냐
이건 정상이 아냐
아 노력노력 타령 좀 그만둬
아 오그라들어 내 두 손발도
아 노력 노력 아 노력 노력
아 노랗구나 싹수가
(역시 황새!)
노력 타령 좀 그만둬
아 오그라들어 내 두 손발도
아 노력 노력 아 노력 노력
아 노랗구나 싹수가
(역시 황새야)
내 탓이라니 너 농담이지
공평하다니 oh are you crazy
이게 정의라니 you mu be kiddin' me
You mu be kiddin' me
You you mu be kiddin' me
아 노력노력 타령 좀 그만둬
아 오그라들어 내 두 손발도
아 노력 노력 아 노력 노력
아 노랗구나 싹수가
(역시 황새!)
노력 타령 좀 그만둬
아 오그라들어 내 두 손발도
아 노력 노력 아 노력 노력
아 노랗구나 싹수가
(우린 뱁새야) 실망 안 시켜
(우린 뱁새야) 이름값하네
(우린 뱁새야) 같이 살자고
(우린 뱁새야) 뱁새야
They call me 뱁새
욕봤지 이 세대
빨리 chase 'em
황새 덕에 내 가랑인 탱탱
So call me 뱁새
욕봤지 이 세대
빨리 chase 'em
금수저로 태어난 내 선생님`.split('\n');
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
for(const [id,v,expected,aliases]of [['whalien-52','whalien52',whalien,['Whalien 52']],['silver-spoon','silverSpoon',silver,['Silver Spoon','Baepsae','뱁새','Silver Spoon (뱁새; Baepsae)']]]){
const d=require('../lib/'+id+'.ts'),sections=d[v+'Sections'],vocab=d[v+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.deepEqual(all.map(l=>l.text),expected);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=18&&vocab.nouns.length>=29);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const token of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(token)));assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x)&&x!=='Hey oh, oh hey oh, yeah.')assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const enhanced=addMusicCuriosities(id,sections);assert.equal(enhanced.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,enhanced),enhanced);for(const c of musicCuriosities[id])if(c.source)assert.ok(new URL(c.source).protocol==='https:');
for(const alias of aliases){assert.equal(lookup(alias),id);for(const suffix of [' (Live)',' (Japanese Ver.)',' (Instrumental)',' (Remix)'])assert.equal(lookup(alias+suffix),undefined);}for(const e of song.exercises){assert.ok(e.options.includes(e.answer[0]));assert.equal(new Set(e.options).size,3);}
if(id==='whalien-52'){assert.deepEqual(sections[2].lines,sections[6].lines);assert.deepEqual(sections[2].lines,sections[8].lines);assert.notEqual(sections[3].lines[6].text,sections[9].lines[6].text);assert.ok(sections[9].lines[6].entries[0].notes[0].includes('objeto'));}else{assert.deepEqual(sections[0].lines,sections[6].lines);assert.deepEqual(sections[0].lines,sections[15].lines);assert.deepEqual(sections[2].lines,sections[8].lines);assert.deepEqual(sections[9].lines,sections[12].lines);assert.ok(musicCuriosities[id].some(c=>c.card.includes('berço de ouro')));}
}
assert.ok(songs.length>=113);console.log('PASS: Whalien 52 88 lines and Silver Spoon 84 lines; exact supplied lyrics and pronoun/spacing variants; contextual PT/ENG, Korean preserved, 16 unique cards, vocabulary, 10 exercises and original catalog aliases.');
