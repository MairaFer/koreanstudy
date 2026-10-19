const fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),assert=require('node:assert/strict'),ts=require('typescript');
const root=process.cwd(),resolve=Module._resolveFilename;
Module._resolveFilename=function(request,parent,...rest){return resolve.call(this,request.startsWith('@/')?path.join(root,request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=(module,file)=>module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText,file);
const React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),{LocaleProvider}=require('../components/localization.tsx'),{translate}=require('../lib/localization.ts');
const {EverydayLesson,DailyRequests,DailyInformation,DailyRepair}=require('../components/everyday-lesson.tsx'),{dailyItems,dailyPlaces,dailyPrices,dailyRepairs,okayScenes,dailyChallenges,dailyRequest,dailyWhere}=require('../lib/everyday-lab.ts'),{lessons,isCorrect}=require('../lib/course.ts');
const render=(node,locale)=>renderToStaticMarkup(React.createElement(LocaleProvider,{initialLocale:locale},node));
const text=html=>html.replace(/<[^>]*>/g,'').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&amp;/g,'&');
assert.deepEqual([dailyRequest(0,1),dailyRequest(1,2),dailyRequest(2,3),dailyRequest(3,4)],['물 한 잔 주세요.','커피 두 잔 주세요.','포토카드 세 장 주세요.','응원봉 네 개 주세요.']);
assert.deepEqual([0,1,2].map(dailyWhere),['카페가 어디예요?','출구가 어디예요?','화장실이 어디예요?']);
assert.equal(dailyPlaces[0].answer,'왼쪽에 있어요.');assert.equal(dailyPlaces[2].answer,'오른쪽에 있어요.');
assert.deepEqual(dailyPrices.map(p=>p.ko),['삼천 원이에요.','이만 원이에요.','사천 원이에요.']);assert.equal(dailyRepairs.length,4);assert.equal(okayScenes.length,2);assert.ok(okayScenes[1].you.startsWith('아니요'));
assert.equal(dailyChallenges.length,8);for(const q of dailyChallenges){assert.ok(q.options.includes(q.answer));assert.equal(new Set(q.options).size,3);for(const key of ['situation','feedback','npcMeaning','followMeaning'])assert.notEqual(translate(q[key],'eng'),q[key],key);}
for(const locale of ['pt','eng']){
 for(let item=0;item<4;item++)for(const quantity of [1,4])for(const ask of [false,true])for(const stock of [false,true]){
  const html=render(React.createElement(DailyRequests,{initialItem:item,initialQuantity:quantity,initialAsk:ask,initialStock:stock,initialReply:true}),locale),visible=text(html);
  assert.ok(visible.includes(ask?dailyItems[item].noun+' 있어요?':dailyRequest(item,quantity)));assert.ok(visible.includes(stock?(ask?'네, 있어요.':'네, 여기 있어요.'):'죄송해요. 지금 없어요.'));assert.equal(html.includes(locale==='pt'?'QUANTAS UNIDADES?':'HOW MANY?'),!ask);assert.ok(html.includes(locale==='pt'?'simulação':'simulated'));
 }
 for(let place=0;place<3;place++){const html=render(React.createElement(DailyInformation,{initialPlace:place}),locale);assert.ok(text(html).includes(dailyWhere(place)));assert.ok(text(html).includes(dailyPlaces[place].answer));assert.ok(html.includes(`data-position="${place}"`));}
 for(let product=0;product<3;product++){const html=render(React.createElement(DailyInformation,{initialPrice:true,initialProduct:product}),locale);assert.ok(text(html).includes(dailyPrices[product].ko));assert.ok(text(html).includes(translate(dailyPrices[product].meaning,locale)));assert.ok(html.includes(locale==='pt'?'preços são inventados':'prices are made up'));assert.ok(html.includes('천'));assert.ok(html.includes('만'));}
 for(let repair=0;repair<4;repair++)for(let okay=0;okay<2;okay++){const html=render(React.createElement(DailyRepair,{initialRepair:repair,initialOkay:okay}),locale);assert.ok(text(html).includes(dailyRepairs[repair].ko));assert.ok(text(html).includes(okayScenes[okay].you));assert.ok(text(html).includes(translate(okayScenes[okay].note,locale)));}
 for(let step=0;step<4;step++){const html=render(React.createElement(EverydayLesson,{initialStep:step}),locale);assert.ok(html.includes('aria-current="step"'));if(step===3){assert.ok(html.includes('href="#everyday-practice"'));assert.ok(html.includes('disabled=""'));}if(locale==='eng')assert.ok(!/Peça e verifique|Localização ou preço|Cuide da conversa|Um encontro ARMY|Conferir minha resposta/.test(html));}
}
const lesson=lessons.find(l=>l.id==='1-10');assert.equal(lesson.cards.length,8);assert.deepEqual(lesson.exercises.map(e=>e.id),['1-10-1','1-10-2','1-10-3','1-10-4','1-10-5']);for(const e of lesson.exercises)assert.ok(isCorrect(e,e.answer[0]));
const page=fs.readFileSync('app/page.tsx','utf8');assert.ok(page.includes("current.id==='1-10'?<EverydayLesson/>"));assert.ok(page.includes("current.id==='1-10'?'everyday-practice'"));
console.log('PASS: lesson 10 in PT/ENG; 32 request/availability/stock combinations, three correctly marked location questions, three practice prices, four repair phrases, both meanings of 괜찮아요, eight dialogue challenges, and original progress exercises preserved.');
