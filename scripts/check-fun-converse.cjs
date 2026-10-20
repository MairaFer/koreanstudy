const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');const original=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return original.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {songs}=require('../lib/songs.ts'),{translate}=require('../lib/localization.ts'),{musicCuriosities,addMusicCuriosities}=require('../lib/music-curiosities.ts');
const funExpected=`자 왔어 아 흥탄소년단
왔어 왔어 아 흥탄소년단
자 왔어 아 흥탄소년단
흥 (흥) 탄 (탄) 흥 (흥) 탄 (탄)
나도 날 잘 몰라
자 왔어 아 흥탄소년단
왔어 왔어 아 흥탄소년단
자 왔어 아 흥탄소년단
흥 (흥) 탄 (탄) 흥 (흥) 탄 (탄)
흥탄소년단 새벽달이 질 때까지
아 완전 신나 가식 따윈 집에 간 지
오래니까 니가 음치 혹은 박치라도
상관없어 눈치 따윈 빨리 줘 개나 줘
흥이 난다 흥이 흥이 흥이 나
여기 여기 붙어라 니 어깨춤이 보인다
Let’s ride go with me
저 위 정상들이 보이지
일상에 상을 하나 더해 난 이상해지지
정상인 상태로는 정상에 못 가요 baby
흥 흥, 시동은 됐고
흥 흥, 속도는 쾌속
다 봐라 봐라 오늘은 미칠 거야 말리지 말아
가라 가라 싫은 놈들 집으로 떠나라나라 (훠이)
음악이 흐르는 순간 난
미쳐버릴 것 같아 (hey)
내 몸에 흔들릴 거야 넌
지금 바로 이 순간
내게 묻지마 난 원래부터 이랬으니까
나도 날 몰라 처음부터 끝까지 난 나니까
자 왔어 아 흥탄소년단
왔어 왔어 아 흥탄소년단
자 왔어 아 흥탄소년단
흥 (흥) 탄 (탄) 흥 (흥) 탄 (탄)
나도 날 잘 몰라
치명적인 나의 몸짓
미친듯한 나의 똘끼
내 맘대로 다 하고 싶어
나 건들지 좀 말어
난 맏형이지만 (no no no)
나를 갖고 놀지만 (no no no)
뭐 어때 난 좋게
만족해 족해 ok
Yo! 내이름은 V
기선을 제압했지
야야야 stop stop! (아 죄송합니다)
다 골라 골라 호식이 골라
희망이 함께면 시간가는 줄을 몰라
땀으로 씻어볼까 치키차카초
오늘은 내가 술래 미니마니모
헛소리 하지마라 아 기 빨려
뒷담 할 생각도 마 나 눈치 빨러
너를 이빨로 물어 피 말려
밥 먹었니? 중국어로는 취빨러 마?
음악이 흐르는 순간 난
미쳐버릴 것 같아 (hey)
내 몸에 흔들릴 거야 넌
지금 바로 이 순간
내게 묻지마 난 원래부터 이랬으니까
나도 날 몰라 처음부터 끝까지 난 나니까
흥 탄 사람 모여라
다 여기 모여라
흥 탄 사람 더 있나
다 뒤로 붙어라
흥 탄 사람 모여라
다 여기 모여라
흥 탄 사람 더 있나
다 뒤로 붙어라
내게 묻지마 난 원래부터 이랬으니까
나도 날 몰라 처음부터 끝까지 난 나니까
자 왔어 아 흥탄소년단
왔어 왔어 아 흥탄소년단
자 왔어 아 흥탄소년단
흥 (흥) 탄 (탄) 흥 (흥) 탄 (탄)
나도 날 잘 몰라`.split('\n');
const converseExpected=`너의 컨버스하이
너의 컨버스하이
너의 컨버스하이
컨버스하이
너의 컨버스하이에 꽂혔나 봐
별 수 없나 봐 나는 wo
너의 컨버스하이에 꽂혔나 봐
너무 좋아 다 자꾸 wo
내게 하루만 시간이 있다면 난
컨버스하이 만든 사람을 만날 거야
그리곤 말하겠지 당신이 이 세상을 구했어
넌 저 여자들을 다시 태어나게 한 거야
F your Chanel F your Alexander
F your Raf simons 일단 이리 와서 check it
10만원이면 두 켤레를 사
넌 내가 원하는 걸 알지
흰 티에 청 반바지 빨간 컨버스하이 that’s it
Alright 빨주노초파남보
니 발에 무지개는 shot like 람보
날 저격해 탕탕 shout out wow wow
니 몸매와 함께면 더 하악하악
컨 taxi 컨 cycle 컨 subway
No thanks 난 컨 bus 타고 부릉부릉
저 하늘 별보단 오늘은
니 신발의 별을 볼래
하하 다 남준이 몰래
스치면 인연 스며들면 사랑
이라고 누가 말했었는데
넌 아예 내게 물들어버렸나
니가 좋아 그래도 컨버스로우는 신지 마
너의 컨버스하이에 꽂혔나 봐
별 수 없나 봐 나는 wo
너의 컨버스하이에 꽂혔나 봐
너무 좋아 다 자꾸 wo
너의 컨버스하이
I really really want yo
컨버스하이
I really really like yo
컨버스하이
I really really need yo
컨버스하이 컨버스하이
컨버스 컨버스 i really hate a 컨버스
화려한 니 겉모습에는 말야 검정스타킹에
아찔한 하이힐 그래 그것은 사기야
근데 더 어울리는 것은 조던 numbers
Ha 모르겠니 컨버스는 니
매력을 죽이는 옥의 티
아무튼 날 만날 때는 컨버스를 신지마
무엇보다 벗기가 무척이나 힘들잖아
스치면 인연 스며들면 사랑
이라고 누가 말했었는데
넌 아예 내게 물들어버렸나
니가 좋아 그래도 컨버스로우는 신지 마
너의 컨버스하이에 꽂혔나 봐
별 수 없나 봐 나는 wo
너의 컨버스하이에 꽂혔나 봐
너무 좋아 다 자꾸 wo
너의 컨버스하이
I really really want yo
컨버스하이
I really really like yo
컨버스하이
I really really need yo
컨버스하이 컨버스하이
너의 컨버스하이
I really really want yo
컨버스하이
I really really like yo
컨버스하이
I really really need yo
컨버스하이 컨버스하이
Converse High`.split('\n');
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;
const cat=fs.readFileSync('components/bts-catalog.tsx','utf8').match(/function studyFor\(title:string\)([\s\S]*?)\n/)[0],lookup=new Function(ts.transpileModule(cat,{compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText+';return studyFor;')();
for(const [id,variable,expected,aliases]of [['fun-boys','funBoys',funExpected,['Fun Boys','Boyz with Fun','Boys with Fun','흥탄소년단','Fun Boys (흥탄소년단)']],['converse-high','converseHigh',converseExpected,['Converse High']]]){
const data=require('../lib/'+id+'.ts'),sections=data[variable+'Sections'],vocab=data[variable+'Vocabulary'],all=sections.flatMap(s=>s.lines),song=songs.find(s=>s.id===id);assert.deepEqual(all.map(l=>l.text),expected);assert.equal(song.exercises.length,5);assert.ok(vocab.verbs.length>=28&&vocab.nouns.length>=29);
for(const l of all){assert.ok(l.translation);if(/[가-힣]/.test(l.text)){assert.ok(l.entries.length);for(const tok of l.text.match(/[가-힣]+/g)||[])assert.ok(l.entries.some(e=>e.term.includes(tok)),tok);assert.ok(l.entries[0].notes[0]);}else assert.ok(l.english);}
const allowedIdentity=new Set(['jade','Heung (heung), tan (tan), heung (heung), tan (tan)!']);
for(const x of [...sections.map(s=>s.title),...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...musicCuriosities[id].map(c=>c.card),song.intro,song.topic,song.example.pt,song.example.explanation,...song.exercises.flatMap(e=>[e.prompt,...e.options,e.explanation]),...Object.values(vocab).flat().map(w=>w.pt)]){const en=translate(x,'eng');if(/[A-Za-zÀ-ÿ]{2}/.test(x)&&!allowedIdentity.has(x))assert.notEqual(en,x,'Missing adaptation: '+x);assert.deepEqual((en.match(ko)||[]).sort(),(x.match(ko)||[]).sort(),'Korean changed: '+x);}
const withCards=addMusicCuriosities(id,sections);assert.equal(withCards.flatMap(s=>s.lines.flatMap(l=>l.entries)).filter(e=>e.card).length,8);assert.deepEqual(addMusicCuriosities(id,withCards),withCards);for(const a of aliases)assert.equal(lookup(a),id);assert.equal(lookup(aliases[0]+' (Live)'),undefined);assert.equal(lookup(aliases[0]+' (Japanese Ver.)'),undefined);
if(id==='fun-boys'){assert.deepEqual(sections[0].lines,sections.at(-1).lines);assert.deepEqual(sections[5].lines,sections[12].lines);}else{assert.deepEqual(sections[1].lines,sections[9].lines);assert.deepEqual(sections[6].lines,sections[11].lines);assert.ok(all.find(l=>l.text==='넌 아예 내게 물들어버렸나').entries[0].notes[0].includes('sujeito expresso é você'));}
}
console.log('PASS: Fun Boys and Converse High: 74 and 72 supplied lines, all repeats and finals, bilingual contextual notes, Korean preserved, names and catalog aliases, 16 unique cards, vocabulary and 10 exercises.');
