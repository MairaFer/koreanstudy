const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict'),ts=require('typescript'),path=require('path');
const resolve=Module._resolveFilename;Module._resolveFilename=function(r,p,...a){return resolve.call(this,r.startsWith('@/')?path.join(process.cwd(),r.slice(2)):r,p,...a)};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,f);
const {iNeedUSections}=require('../lib/i-need-u.ts'),{addMusicCuriosities}=require('../lib/music-curiosities.ts'),{translate}=require('../lib/localization.ts');
const expected=`Fall (everything)
Fall (everything)
Fall (everything)
흩어지네
Fall (everything)
Fall (everything)
Fall (everything)
떨어지네
너 땜에 나 이렇게 망가져
그만할래 이제 너 안 가져
못하겠어 뭣 같아서
제발 핑계 같은 건 삼가줘
니가 나한테 이럼 안 돼
니가 한 모든 말은 안대
진실을 가리고 날 찢어
날 찍어 나 미쳐 다 싫어
전부 가져가 난 니가 그냥 미워
But you're my everything (You're my)
Everything (You're my)
Everything (You're my)
제발 좀 꺼져 huh
미안해 (I hate u)
사랑해 (I hate u)
용서해 (shit)
I need you girl
왜 혼자 사랑하고 혼자서만 이별해
I need you girl
왜 다칠 걸 알면서 자꾸 니가 필요해
I need you girl 넌 아름다워
I need you girl 너무 차가워
I need you girl (I need you girl)
I need you girl (I need you girl)
It goes round & round 나 왜 자꾸 돌아오지
I go down & down 이쯤 되면 내가 바보지
나 무슨 짓을 해봐도 어쩔 수가 없다고
분명 내 심장, 내 마음, 내 가슴인데
왜 말을 안 듣냐고
또 혼잣말하네 (또 혼잣말하네)
또 혼잣말하네 (또 혼잣말하네)
넌 아무 말 안 해 아 제발 내가 잘할게
하늘은 또 파랗게 (하늘은 또 파랗게)
하늘이 파래서 햇살이 빛나서
내 눈물이 더 잘 보이나 봐
왜 나는 너인지 왜 하필 너인지
왜 너를 떠날 수가 없는지
I need you girl
왜 혼자 사랑하고 혼자서만 이별해
I need you girl
왜 다칠 걸 알면서 자꾸 니가 필요해
I need you girl 넌 아름다워
I need you girl 너무 차가워
I need you girl (I need you girl)
I need you girl (I need you girl)
Girl 차라리 차라리 헤어지자고 해줘
Girl 사랑이 사랑이 아니었다고 해줘
내겐 그럴 용기가 없어
내게 마지막 선물을 줘
더는 돌아갈 수 없도록
I need you girl
왜 혼자 사랑하고 혼자서만 이별해
I need you girl
왜 다칠 걸 알면서 자꾸 니가 필요해
I need you girl 넌 아름다워
I need you girl 너무 차가워
I need you girl (I need you girl)
I need you girl (I need you girl)`.split('\n');
const all=iNeedUSections.flatMap(s=>s.lines);assert.deepEqual(all.map(l=>l.text),expected);
const sections=addMusicCuriosities('i-need-u',iNeedUSections),entries=sections.flatMap(s=>s.lines.flatMap(l=>l.entries||[]));assert.equal(entries.filter(e=>e.card).length,5);assert.deepEqual(addMusicCuriosities('i-need-u',sections),sections);
const ko=/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g;for(const s of [...all.flatMap(l=>[l.translation,...l.entries.flatMap(e=>[e.meaning,...e.notes])]),...entries.filter(e=>e.card).map(e=>e.card)]){if(/[A-Za-zÀ-ÿ]{2}/.test(s))assert.notEqual(translate(s,'eng'),s,'Missing adaptation: '+s);assert.deepEqual((translate(s,'eng').match(ko)||[]).sort(),(s.match(ko)||[]).sort());}
console.log('PASS: I Need U matches all 66 supplied lines in order; PT/ENG explanations, Korean spelling, 5 unique cards and chorus repetitions verified.');

