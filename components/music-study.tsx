"use client";
import {lonelySections,lonelyVocabulary} from "@/lib/lonely";
import {hecticSections,hecticVocabulary} from "@/lib/hectic";
import {wildFlowerSections,wildFlowerVocabulary} from "@/lib/wild-flower";
import {no2Sections,no2Vocabulary} from "@/lib/no2";
import {nutsSections,nutsVocabulary} from "@/lib/nuts";
import {outOfLoveSections,outOfLoveVocabulary} from "@/lib/out-of-love";
import {domodachiSections,domodachiVocabulary} from "@/lib/domodachi";
import {groinSections,groinVocabulary} from "@/lib/groin";
import {lostRmSections,lostRmVocabulary} from "@/lib/lost-rm";
import {aroundWorldSections,aroundWorldVocabulary} from "@/lib/around-the-world-in-a-day";
import {comeBackSections,comeBackVocabulary} from "@/lib/come-back-to-me";
import {sexyNukimSections,sexyNukimVocabulary} from "@/lib/sexy-nukim";
import {closerSections,closerVocabulary} from '@/lib/closer';
import {forgetfulnessSections,forgetfulnessVocabulary} from '@/lib/forgetfulness';
import {allDaySections,allDayVocabulary} from '@/lib/all-day';
import {stillLifeSections,stillLifeVocabulary} from '@/lib/still-life';
import {yunSections,yunVocabulary} from '@/lib/yun';
import {skitOnTheStartLineSections,skitOnTheStartLineVocabulary} from '@/lib/skit-on-the-start-line';
import {seoulSections,seoulVocabulary} from '@/lib/seoul';
import {moonchildSections,moonchildVocabulary} from '@/lib/moonchild';
import {badbyeSections,badbyeVocabulary} from '@/lib/badbye';
import {uhgoodSections,uhgoodVocabulary} from '@/lib/uhgood';
import {everythingoesSections,everythingoesVocabulary} from '@/lib/everythingoes';
import {foreverRainSections,foreverRainVocabulary} from '@/lib/forever-rain';
import {outroCircleRoomCypherSections,outroCircleRoomCypherVocabulary} from '@/lib/outro-circle-room-cypher';
import {iLikeItSections,iLikeItVocabulary} from '@/lib/i-like-it';
import {skitCircleRoomTalkSections,skitCircleRoomTalkVocabulary} from '@/lib/skit-circle-room-talk';
import {weAreBulletproofPt2Sections,weAreBulletproofPt2Vocabulary} from '@/lib/we-are-bulletproof-pt2';
import {intro2Cool4SkoolSections,intro2Cool4SkoolVocabulary} from '@/lib/intro-2-cool-4-skool';
import {skitExpectationSections,skitExpectationVocabulary} from '@/lib/skit-expectation';
import {interludeWingsSections,interludeWingsVocabulary} from '@/lib/interlude-wings';
import {weOnSections,weOnVocabulary} from '@/lib/we-on';
import {introOrul82Sections,introOrul82Vocabulary} from '@/lib/intro-orul82';
import {skitRUHappyNowSections,skitRUHappyNowVocabulary} from '@/lib/skit-r-u-happy-now';
import {ifIRuledTheWorldSections,ifIRuledTheWorldVocabulary} from '@/lib/if-i-ruled-the-world';
import {coffeeSections,coffeeVocabulary} from '@/lib/coffee';
import {cypherPt1Sections,cypherPt1Vocabulary} from '@/lib/cypher-pt1';
import {attackOnBangtanSections,attackOnBangtanVocabulary} from '@/lib/attack-on-bangtan';
import {satooriRapSections,satooriRapVocabulary} from '@/lib/satoori-rap';
import {outroLuvInSkoolSections,outroLuvInSkoolVocabulary} from '@/lib/outro-luv-in-skool';
import {jumpSections,jumpVocabulary} from '@/lib/jump';
import {outroProposeSections,outroProposeVocabulary} from '@/lib/outro-propose';
import {cypherPt2Sections,cypherPt2Vocabulary} from '@/lib/cypher-pt2';
import {spineBreakerSections,spineBreakerVocabulary} from '@/lib/spine-breaker';
import {justOneDaySections,justOneDayVocabulary} from '@/lib/just-one-day';
import {tomorrowSections,tomorrowVocabulary} from '@/lib/tomorrow';
import {skitSoulmateSections,skitSoulmateVocabulary} from '@/lib/skit-soulmate';
import {whereYouFromSections,whereYouFromVocabulary} from '@/lib/where-you-from';
import {missRightSections,missRightVocabulary} from '@/lib/miss-right';
import {introSkoolLuvAffairSections,introSkoolLuvAffairVocabulary} from '@/lib/intro-skool-luv-affair';
import {doesThatMakeSenseSections,doesThatMakeSenseVocabulary} from '@/lib/does-that-make-sense';
import {introSerendipitySections,introSerendipityVocabulary} from '@/lib/intro-serendipity';
import {lookHereSections,lookHereVocabulary} from '@/lib/look-here';
import {secondGradeSections,secondGradeVocabulary} from '@/lib/2nd-grade';
import {blanketKickSections,blanketKickVocabulary} from '@/lib/blanket-kick';
import {heaven247Sections,heaven247Vocabulary} from '@/lib/24-7-heaven';
import {rainSections,rainVocabulary} from '@/lib/rain';
import {turnOffYourCellphoneSections,turnOffYourCellphoneVocabulary} from '@/lib/turn-off-your-cellphone';
import {skitBeSections,skitBeVocabulary} from '@/lib/skit-be';
import {hipHopLoverSections,hipHopLoverVocabulary} from '@/lib/hip-hop-lover';
import {letMeKnowSections,letMeKnowVocabulary} from '@/lib/let-me-know';
import {warOfHormoneSections,warOfHormoneVocabulary} from '@/lib/war-of-hormone';
import {whatAmIToYouSections,whatAmIToYouVocabulary} from '@/lib/what-am-i-to-you';
import {skitOneNightSections,skitOneNightVocabulary} from '@/lib/skit-one-night';
import {butterflyPrologueSections,butterflyPrologueVocabulary} from '@/lib/butterfly-prologue';
import {youngForeverSections,youngForeverVocabulary} from '@/lib/young-forever';
import {saveMeSections,saveMeVocabulary} from '@/lib/save-me';
import {neverMindSections,neverMindVocabulary} from '@/lib/never-mind';
import {houseOfCardsSections,houseOfCardsVocabulary} from '@/lib/house-of-cards';
import {whalien52Sections,whalien52Vocabulary} from '@/lib/whalien-52';
import {silverSpoonSections,silverSpoonVocabulary} from '@/lib/silver-spoon';
import {maCitySections,maCityVocabulary} from '@/lib/ma-city';
import {butterflySections,butterflyVocabulary} from '@/lib/butterfly';
import {loveIsNotOverFullSections,loveIsNotOverFullVocabulary} from '@/lib/love-is-not-over-full';
import {deadLeavesSections,deadLeavesVocabulary} from '@/lib/dead-leaves';
import {funBoysSections,funBoysVocabulary} from '@/lib/fun-boys';
import {converseHighSections,converseHighVocabulary} from '@/lib/converse-high';
import {dopeSections,dopeVocabulary} from '@/lib/dope';
import {holdMeTightSections,holdMeTightVocabulary} from '@/lib/hold-me-tight';
import {movingOnSections,movingOnVocabulary} from '@/lib/moving-on';

import {loveNotOverSections,loveNotOverVocabulary} from '@/lib/outro-love-is-not-over';

import {introHyyhSections,introHyyhVocabulary} from '@/lib/intro-hyyh';

import {supplementaryStorySections,supplementaryStoryVocabulary} from '@/lib/supplementary-story';

import {outroWingsSections,outroWingsVocabulary} from '@/lib/outro-wings';

import {notTodaySections,notTodayVocabulary} from '@/lib/not-today';

import {twoThreeSections,twoThreeVocabulary} from '@/lib/two-three';

import {centuryGirlSections,centuryGirlVocabulary} from '@/lib/21st-century-girl';

import {amIWrongSections,amIWrongVocabulary} from '@/lib/am-i-wrong';

import {cypher4Sections,cypher4Vocabulary} from '@/lib/cypher-pt4';

import {lostSections,lostVocabulary} from '@/lib/lost';

import {mamaSections,mamaVocabulary} from '@/lib/mama';

import {awakeSections,awakeVocabulary} from '@/lib/awake';

import {reflectionSections,reflectionVocabulary} from '@/lib/reflection';

import {firstLoveSections,firstLoveVocabulary} from '@/lib/first-love';

import {lieSections,lieVocabulary} from '@/lib/lie';

import {stigmaSections,stigmaVocabulary} from '@/lib/stigma';

import {beginSections,beginVocabulary} from '@/lib/begin';

import {piedPiperSections,piedPiperVocabulary} from '@/lib/pied-piper';
import {boyMeetsEvilSections,boyMeetsEvilVocabulary} from '@/lib/boy-meets-evil';
import {normalKoreanSections,normalKoreanVocabulary} from '@/lib/normal-korean';
import {comeOverSections,comeOverVocabulary} from '@/lib/come-over';
import {loveMazeSections,loveMazeVocabulary} from '@/lib/love-maze';
import {soWhatSections,soWhatVocabulary} from '@/lib/so-what';
import {plutoSections,plutoVocabulary} from '@/lib/pluto';
import {paradiseSections,paradiseVocabulary} from '@/lib/paradise';
import {anpanmanSections,anpanmanVocabulary} from '@/lib/anpanman';
import {micDropSections,micDropVocabulary} from '@/lib/mic-drop';
import {goGoSections,goGoVocabulary} from '@/lib/go-go';
import {magicShopSections,magicShopVocabulary} from '@/lib/magic-shop';
import {imFineSections,imFineVocabulary} from '@/lib/im-fine';
import {airplanePt2Sections,airplanePt2Vocabulary} from '@/lib/airplane-pt2';
import {tearSections,tearVocabulary} from '@/lib/tear';
import {bestOfMeSections,bestOfMeVocabulary} from '@/lib/best-of-me';
import {triviaLoveSections,triviaLoveVocabulary} from '@/lib/trivia-love';
import {truthUntoldSections,truthUntoldVocabulary} from '@/lib/the-truth-untold';
import {serendipitySections,serendipityVocabulary} from '@/lib/serendipity';
import {epiphanySections,epiphanyVocabulary} from '@/lib/epiphany';
import {answerLoveMyselfSections,answerLoveMyselfVocabulary} from '@/lib/answer-love-myself';
import {homeSections,homeVocabulary} from '@/lib/home';
import {mikrokosmosSections,mikrokosmosVocabulary} from '@/lib/mikrokosmos';
import {allNightSections,allNightVocabulary} from '@/lib/all-night';
import {brandNewDaySections,brandNewDayVocabulary} from '@/lib/a-brand-new-day';
import {dreamGlowSections,dreamGlowVocabulary} from '@/lib/dream-glow';
import {heartbeatSections,heartbeatVocabulary} from '@/lib/heartbeat';
import {eternalSections,eternalVocabulary} from '@/lib/we-are-bulletproof-eternal';
import {respectSections,respectVocabulary} from '@/lib/respect';
import {innerChildSections,innerChildVocabulary} from '@/lib/inner-child';

import {ughSections,ughVocabulary} from '@/lib/ugh';
import {louderThanBombsSections,louderThanBombsVocabulary} from '@/lib/louder-than-bombs';
import {myTimeSections,myTimeVocabulary} from '@/lib/my-time';
import {blackSwanSections,blackSwanVocabulary} from '@/lib/black-swan';
import {interludeShadowSections,interludeShadowVocabulary} from '@/lib/interlude-shadow';
import {dionysusSections,dionysusVocabulary} from '@/lib/dionysus';
/* localized-returns */
import {useLocale,Localized} from '@/components/localization';
import {useState,type ReactNode} from 'react';
import {Music2} from 'lucide-react';
import {Checkbox} from '@/components/ui/checkbox';
import {koreanPattern} from '@/lib/audio-text';
import {addMusicCuriosities} from '@/lib/music-curiosities';
import {songs,Song} from '@/lib/songs';
import {springDaySections,springDayVocabulary,StudyLine} from '@/lib/spring-day';
import {takeTwoSections,takeTwoVocabulary,takeTwoSong} from '@/lib/take-two';
import {thePlanetSections,thePlanetVocabulary,thePlanetSong} from '@/lib/the-planet';
import {myUniverseSections,myUniverseVocabulary,myUniverseSong} from '@/lib/my-universe';
import {makeItRightLauvSections,makeItRightLauvVocabulary,makeItRightLauvSong} from '@/lib/make-it-right-lauv';
import {seaSections,seaVocabulary,seaSong} from '@/lib/sea';
import {fourOclockSections,fourOclockVocabulary,fourOclockSong} from '@/lib/four-oclock';
import {bicycleSections,bicycleVocabulary,bicycleSong} from '@/lib/bicycle';
import {gajahSections,gajahVocabulary,gajahSong} from '@/lib/gajah';
import {loserSections,loserVocabulary,loserSong} from '@/lib/loser';
import {ropeItSections,ropeItVocabulary,ropeItSong} from '@/lib/rope-it';
import {withTheCloudsSections,withTheCloudsVocabulary,withTheCloudsSong} from '@/lib/with-the-clouds';
import {backgroundSections,backgroundVocabulary,backgroundSong} from '@/lib/background';
import {toMeTodaySections,toMeTodayVocabulary,toMeTodaySong} from '@/lib/to-me-today';
import {nothingWithoutYourLoveSections,nothingWithoutYourLoveVocabulary,nothingWithoutYourLoveSong} from '@/lib/nothing-without-your-love';
import {bodyToBodySections,bodyToBodyVocabulary} from '@/lib/body-to-body';
import {hooliganSections,hooliganVocabulary} from '@/lib/hooligan';
import {twoPointZeroSections,twoPointZeroVocabulary} from '@/lib/two-point-zero';
import {aliensSections,aliensVocabulary} from '@/lib/aliens';
import {fyaSections,fyaVocabulary} from '@/lib/fya';
import {bornSingerSections,bornSingerVocabulary} from '@/lib/born-singer';
import {intoTheSunSections,intoTheSunVocabulary} from '@/lib/into-the-sun';
import {pleaseSections,pleaseVocabulary} from '@/lib/please';
import {oneMoreNightSections,oneMoreNightVocabulary} from '@/lib/one-more-night';
import {theyDontKnowSections,theyDontKnowVocabulary} from '@/lib/they-dont-know-bout-us';
import {merryGoRoundSections,merryGoRoundVocabulary} from '@/lib/merry-go-round';
import {noMoreDreamSections,noMoreDreamVocabulary} from '@/lib/no-more-dream';
import {nOSections,nOVocabulary} from '@/lib/n-o';
import {fireSections,fireVocabulary} from '@/lib/fire';
import {runSections,runVocabulary} from '@/lib/run';
import {iNeedUSections,iNeedUVocabulary} from '@/lib/i-need-u';
import {dangerSections,dangerVocabulary} from '@/lib/danger';
import {boyInLuvSections,boyInLuvVocabulary} from '@/lib/boy-in-luv';
import {dnaSections,dnaVocabulary} from '@/lib/dna';
import {fakeLoveSections,fakeLoveVocabulary} from '@/lib/fake-love';
import {bstSections,bstVocabulary} from '@/lib/blood-sweat-tears';
import {idolSections,idolVocabulary} from '@/lib/idol';
import {bwlSections,bwlVocabulary} from '@/lib/boy-with-luv';
import {onSections,onVocabulary} from '@/lib/on';
import {lgoSections,lgoVocabulary} from '@/lib/life-goes-on';
import {ytcSections,ytcVocabulary} from '@/lib/yet-to-come';
import {runBtsSections,runBtsVocabulary} from '@/lib/run-bts';
import {personaSections,personaVocabulary} from '@/lib/persona';
import {staySections,stayVocabulary} from '@/lib/stay';
import {egoSections,egoVocabulary} from '@/lib/ego';
import {friendsSections,friendsVocabulary} from '@/lib/friends';
import {filterSections,filterVocabulary} from '@/lib/filter';
import {herSections,herVocabulary} from '@/lib/her';
import {singularitySections,singularityVocabulary} from '@/lib/singularity';
import {euphoriaSections,euphoriaVocabulary} from '@/lib/euphoria';
import {justDanceSections,justDanceVocabulary} from '@/lib/just-dance';
import {zeroOclockSections,zeroOclockVocabulary} from '@/lib/zero-oclock';
import {dimpleSections,dimpleVocabulary} from '@/lib/dimple';
import {forYouthSections,forYouthVocabulary} from '@/lib/for-youth';
import {flyToMyRoomSections,flyToMyRoomVocabulary} from '@/lib/fly-to-my-room';
import {blueGreySections,blueGreyVocabulary} from '@/lib/blue-grey';
import {telepathySections,telepathyVocabulary} from '@/lib/telepathy';
import {disEaseSections,disEaseVocabulary} from '@/lib/dis-ease';
import {makeItRightSections,makeItRightVocabulary} from '@/lib/make-it-right';
import {cypherPt3Sections,cypherPt3Vocabulary} from '@/lib/cypher-pt3';
import {seesawSections,seesawVocabulary} from '@/lib/seesaw';
import {moonSections,moonVocabulary} from '@/lib/moon';
import {jamaisVuSections,jamaisVuVocabulary} from '@/lib/jamais-vu';
import {useProgress} from '@/lib/progress';
import {ExerciseCard} from './exercise';
import {KoreanText,AudioButton} from './korean-audio';

export function MusicStudy({initialSongId='spring-day'}:{initialSongId?:string}){
const song=[...songs,takeTwoSong,thePlanetSong,myUniverseSong,makeItRightLauvSong,seaSong,fourOclockSong,bicycleSong,gajahSong,nothingWithoutYourLoveSong,loserSong,ropeItSong,withTheCloudsSong,backgroundSong,toMeTodaySong].find(s=>s.id===initialSongId)??songs[0];
 return <Localized>{<><div className="intro"><div><p className="eyebrow">PALAVRAS, FRASES E DESCOBERTAS</p><h1>Aprenda coreano com BTS<span>.</span></h1><p>Toque nas palavras para ouvir uma voz sintetizada em coreano.</p></div><Music2 size={42}/></div><div className="song-tabs"><span className="pill">{song.title}</span></div><SongLesson key={song.id} song={song}/><p className="music-reference">TraduÃ§Ãµes e explicaÃ§Ãµes preparadas para estudo. Este projeto nÃ£o Ã© afiliado ao BTS.</p></>}</Localized>;
}
type StudyConfig={sections:{title:string;lines:StudyLine[]}[];vocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]};summary:string;heading:string;badge?:string;references?:ReactNode};
const studies:Record<string,StudyConfig>={
  'to-me-today':{sections:toMeTodaySections,vocabulary:toMeTodayVocabulary,summary:'â€œTo Me, Todayâ€ Ã© uma carta de coragem para si mesmo: soltar a preocupaÃ§Ã£o, confiar no presente e seguir o que o coraÃ§Ã£o indica. O estudo explora desejo, decisÃ£o, direÃ§Ã£o, continuidade e formas de encorajamento.',heading:'To Me, Today Â· letra e gramÃ¡tica',badge:'Jin Â· anÃ¡lise gramatical'},
  'background':{sections:backgroundSections,vocabulary:backgroundVocabulary,summary:'â€œBackgroundâ€ acompanha alguÃ©m que permanece no pano de fundo de uma histÃ³ria de amor encerrada. A anÃ¡lise explora memÃ³ria, condiÃ§Ã£o, concessÃ£o, formas retrospectivas e a linguagem poÃ©tica de eco, palco e vestÃ­gio.',heading:'Background Â· letra e gramÃ¡tica',badge:'Jin Â· anÃ¡lise gramatical'},
  'with-the-clouds':{sections:withTheCloudsSections,vocabulary:withTheCloudsVocabulary,summary:'â€œWith The Cloudsâ€ transforma nuvens, chuva e cÃ©u em imagens de acolhimento. A anÃ¡lise guia condiÃ§Ãµes, finalidade, promessas, modificadores e a decisÃ£o de continuar sonhando juntos.',heading:'With The Clouds Â· letra e gramÃ¡tica',badge:'Jin Â· anÃ¡lise gramatical'},
  'rope-it':{sections:ropeItSections,vocabulary:ropeItVocabulary,summary:'â€œRope Itâ€ transforma a imagem de danÃ§ar na corda em uma mensagem de coragem e movimento. O estudo trabalha maneiras, tempo, condiÃ§Ã£o, razÃ£o e expressÃµes para escolher, soltar o apego e agir com confianÃ§a.',heading:'Rope It Â· letra e gramÃ¡tica',badge:'Jin Â· anÃ¡lise gramatical'},
  'loser':{sections:loserSections,vocabulary:loserVocabulary,summary:'â€œLoserâ€ usa uma provocaÃ§Ã£o amorosa para mostrar que terminar seria uma perda dos dois lados. A anÃ¡lise explora citaÃ§Ãµes de fala, condiÃ§Ãµes, previsÃµes, concessÃµes e a escolha de relevar.',heading:'Loser Â· letra e gramÃ¡tica',badge:'Jin Â· anÃ¡lise gramatical'},
 'nothing-without-your-love':{sections:nothingWithoutYourLoveSections,vocabulary:nothingWithoutYourLoveVocabulary,summary:'Nothing Without Your Love transforma a pessoa amada em razÃ£o, luz e vida. A anÃ¡lise acompanha o eu que se completa, atravessa a escuridÃ£o e pede permanÃªncia.',heading:'Nothing Without Your Love Â· letra e gramÃ¡tica',badge:'Letra enviada Â· anÃ¡lise gramatical preparada'},
 'gajah':{sections:gajahSections,vocabulary:gajahVocabulary,summary:'Gajah confronta a pressÃ£o por produtividade e sucesso com a defesa do prÃ³prio passo. A anÃ¡lise explora o excesso de informaÃ§Ã£o, a metÃ¡fora do elefante, dissonÃ¢ncia, fama e respeito por si.',heading:'Gajah (feat. RM) Â· letra e gramÃ¡tica',badge:'Letra enviada Â· anÃ¡lise gramatical preparada'},
 'bicycle':{sections:bicycleSections,vocabulary:bicycleVocabulary,summary:'Bicycle transforma uma pedalada em liberdade emocional. A anÃ¡lise percorre solidÃ£o, vento, tristeza, pequenas alegrias e a permissÃ£o de chorar sem abandonar a felicidade.',heading:'Bicycle Â· letra e gramÃ¡tica',badge:'Letra enviada Â· anÃ¡lise gramatical preparada'},
 'four-oclock':{sections:fourOclockSections,vocabulary:fourOclockVocabulary,summary:'4 Oâ€™Clock transforma uma carta Ã  lua em caminhada pela madrugada. A anÃ¡lise explora o parque crepuscular, a noite que traz manhÃ£, o cansaÃ§o cotidiano e o acolhimento azul da luz lunar.',heading:'4 Oâ€™Clock Â· letra e gramÃ¡tica',badge:'Letra enviada Â· anÃ¡lise gramatical preparada'},
 'sea':{sections:seaSections,vocabulary:seaVocabulary,summary:'Sea transforma mar, deserto e miragem em imagens de esperanÃ§a, Ãªxito e medo. A anÃ¡lise acompanha as dÃºvidas, as concessÃµes e o modo como a provaÃ§Ã£o permanece mesmo quando o deserto se torna mar.',heading:'SEA Â· letra e gramÃ¡tica',badge:'Letra e…26681 tokens truncated…,"love is not over (full length edition)":"love-is-not-over-full","love is not over (full length)":"love-is-not-over-full","autumn leaves":"dead-leaves","dead leaves":"dead-leaves","ê³ ì—½":"dead-leaves","dead leaves (ê³ ì—½)":"dead-leaves","autumn leaves (ê³ ì—½)":"dead-leaves","dead leaves (ê³ ì—½; goyeob)":"dead-leaves","fun boys":"fun-boys","boyz with fun":"fun-boys","boys with fun":"fun-boys","í¥íƒ„ì†Œë…„ë‹¨":"fun-boys","fun boys (í¥íƒ„ì†Œë…„ë‹¨)":"fun-boys","converse high":"converse-high","dope":"dope","ì©”ì–´":"dope","dope (ì©”ì–´)":"dope","hold me tight":"hold-me-tight","ìž¡ì•„ì¤˜":"hold-me-tight","hold me tight (ìž¡ì•„ì¤˜)":"hold-me-tight","moving on":"moving-on","move":"moving-on","ì´ì‚¬":"moving-on","move (ì´ì‚¬)":"moving-on","moving on (ì´ì‚¬)":"moving-on","outro: love is not over":"outro-love-is-not-over","outro : love is not over":"outro-love-is-not-over","a supplementary story: you never walk alone":"supplementary-story","a supplementary story : you never walk alone":"supplementary-story","intro: the most beautiful moment in life":"intro-hyyh","intro : the most beautiful moment in life":"intro-hyyh","intro: the most beautiful moment in life (í™”ì–‘ì—°í™”)":"intro-hyyh","intro: í™”ì–‘ì—°í™”":"intro-hyyh","not today":"not-today","outro: wings":"outro-wings","outro : wings":"outro-wings","21st century girl":"21st-century-girl","21st century girls":"21st-century-girl","21ì„¸ê¸° ì†Œë…€":"21st-century-girl","21st century girls (21ì„¸ê¸° ì†Œë…€)":"21st-century-girl","21st century girl (21ì„¸ê¸° ì†Œë…€)":"21st-century-girl","2! 3!":"two-three","two! three!":"two-three","two! three! (still wishing there will be better days)":"two-three","2! 3! (still wishing there will be better days)":"two-three","ë‘˜! ì…‹!":"two-three","ë‘˜! ì…‹! (ê·¸ëž˜ë„ ì¢‹ì€ ë‚ ì´ ë” ë§Žê¸°ë¥¼)":"two-three","bts cypher 4":"cypher-pt4","cypher 4":"cypher-pt4","bts cypher pt.4":"cypher-pt4","bts cypher pt. 4":"cypher-pt4","am i wrong":"am-i-wrong","mama":"mama","lost":"lost","reflection":"reflection","awake":"awake","lie":"lie","first love":"first-love","begin":"begin","stigma":"stigma","pied piper":"pied-piper","intro: boy meets evil":"boy-meets-evil","intro : boy meets evil":"boy-meets-evil","boy meets evil":"boy-meets-evil","normal (korean ver.)":"normal-korean","normal (korean ver)":"normal-korean","normal (korean version)":"normal-korean","come over":"come-over","love maze":"love-maze","so what":"so-what","134340":"134340","paradise":"paradise","ë‚™ì›":"paradise","paradise (ë‚™ì›)":"paradise","ë‚™ì› (paradise)":"paradise","paradise (ë‚™ì›; nagwon)":"paradise","anpanman":"anpanman","mic drop":"mic-drop",'gogo':'go-go','go, go':'go-go','go go':'go-go','ê³ ë¯¼ë³´ë‹¤ go':'go-go','ê³ ë¯¼ë³´ë‹¤ go (go, go)':'go-go','magic shop':'magic-shop',"i'm fine":'im-fine','im fine':'im-fine','airplane pt. 2':'airplane-pt2','airplane pt.2':'airplane-pt2','airplane, pt. 2':'airplane-pt2','tear':'tear','outro: tear':'tear','outro : tear':'tear','best of me':'best-of-me','trivia æ‰¿: love':'trivia-love','trivia æ‰¿ : love':'trivia-love','trivia: love':'trivia-love','the truth untold':'the-truth-untold','the truth untold (feat. steve aoki)':'the-truth-untold','ì „í•˜ì§€ ëª»í•œ ì§„ì‹¬':'the-truth-untold','the truth untold (ì „í•˜ì§€ ëª»í•œ ì§„ì‹¬)':'the-truth-untold','serendipity (full length edition)':'serendipity','serendipity (full length)':'serendipity','serendipity':'serendipity','epiphany':'epiphany','answer: love myself':'answer-love-myself','answer : love myself':'answer-love-myself','answer love myself':'answer-love-myself','home':'home','mikrokosmos':'mikrokosmos','ì†Œìš°ì£¼':'mikrokosmos','mikrokosmos (ì†Œìš°ì£¼)':'mikrokosmos','ì†Œìš°ì£¼ (mikrokosmos)':'mikrokosmos','ugh!':'ugh',"we are bulletproof: the eternal":'we-are-bulletproof-eternal',"we are bulletproof : the eternal":'we-are-bulletproof-eternal',"we are bulletproof the eternal":'we-are-bulletproof-eternal',"we are bulletproof : eternal":'we-are-bulletproof-eternal',"a brand new day":'a-brand-new-day',"a brand new day (pt. 2)":'a-brand-new-day',"a brand new day (bts world original soundtrack) [pt. 2]":'a-brand-new-day',"all night":'all-night',"all night (pt. 3)":'all-night',"all night (bts world original soundtrack) [pt. 3]":'all-night','dream glow':'dream-glow','dream glow (pt. 1)':'dream-glow','heartbeat':'heartbeat','respect':'respect','inner child':'inner-child','ugh':'ugh','ìš±':'ugh','ugh! (ìš±)':'ugh','louder than bombs':'louder-than-bombs','my time':'my-time','ì‹œì°¨':'my-time','my time (ì‹œì°¨)':'my-time','ì‹œì°¨ (my time)':'my-time','black swan':'black-swan','interlude: shadow':'interlude-shadow','interlude : shadow':'interlude-shadow','shadow':'interlude-shadow','dionysus':'dionysus','make it right':'make-it-right','dis-ease':'dis-ease','ë³‘':'dis-ease','dis-ease (ë³‘)':'dis-ease','telepathy':'telepathy','ìž ì‹œ':'telepathy','telepathy (ìž ì‹œ)':'telepathy','blue & grey':'blue-grey','blue and grey':'blue-grey','fly to my room':'fly-to-my-room','ë‚´ ë°©ì„ ì—¬í–‰í•˜ëŠ” ë²•':'fly-to-my-room','fly to my room (ë‚´ ë°©ì„ ì—¬í–‰í•˜ëŠ” ë²•)':'fly-to-my-room','burning up (fire)':'fire','fire':'fire','ë¶ˆíƒ€ì˜¤ë¥´ë„¤':'fire','run':'run','i need u':'i-need-u','danger':'danger','born singer':'born-singer','into the sun':'into-the-sun','please':'please','one more night':'one-more-night',"they don't know 'bout us":'they-dont-know-bout-us',"they don't know bout us":'they-dont-know-bout-us','merry go round':'merry-go-round','fya':'fya','aliens':'aliens','2.0':'two-point-zero','hooligan':'hooligan','body to body':'body-to-body','no more dream':'no-more-dream','n.o':'n-o','boy in luv':'boy-in-luv','ìƒë‚¨ìž':'boy-in-luv','fake love':'fake-love','blood sweat and tears':'blood-sweat-tears','blood sweat & tears':'blood-sweat-tears','í”¼ ë•€ ëˆˆë¬¼':'blood-sweat-tears','spring day':'spring-day','life goes on':'life-goes-on','boy with luv (feat. halsey)':'boy-with-luv','on':'on','on (feat. sia)':'on','yet to come':'yet-to-come','dna':'dna','idol':'idol','run bts':'run-bts','intro : persona':'intro-persona','intro: persona':'intro-persona','trivia è½‰ : seesaw':'seesaw','trivia è½‰: seesaw':'seesaw','trivia: seesaw':'seesaw','bts cypher pt.3 : killer (feat. supreme boi)':'cypher-pt3','bts cypher, pt. 3: killer (feat. supreme boi)':'cypher-pt3','bts cypher pt.3 : killer':'cypher-pt3','bts cypher pt. 3: killer':'cypher-pt3','outro : ego':'ego','outro: ego':'ego',"00:00 (zero o'clock)":'zero-oclock',"zero o'clock":'zero-oclock','for youth':'for-youth','dimple':'dimple','ë³´ì¡°ê°œ':'dimple','ë³´ì¡°ê°œ (dimple)':'dimple','just dance':'just-dance','trivia èµ·: just dance':'just-dance','trivia èµ· : just dance':'just-dance','trivia: just dance':'just-dance','euphoria':'euphoria','euphoria: theme of love yourself wonder':'euphoria','euphoria : theme of love yourself wonder':'euphoria','singularity':'singularity','intro: singularity':'singularity','intro : singularity':'singularity','her':'her','outro: her':'her','outro : her':'her','filter':'filter','friends':'friends','ì¹œêµ¬':'friends','ego':'ego','seesaw':'seesaw','moon':'moon','jamais vu':'jamais-vu','stay':'stay'} as Record<string,string>)[s]}
const remixOrInstrumental=/(instrumental|remix)/i;
const blockedTitles=['PERMISSION TO DANCE ON STAGE (LIVE)','SWIM - Single','Dreamers (Music from the','Yet To Come (Hyundai Ver.)','Bad Decisions','My Universe (Supernova 7 Mix)','Permission to Dance - Single','Butter - Single','Who (feat. BTS)','FAKE LOVE (Rocking Vibe Mix)'];
const isBlocked=(title:string)=>blockedTitles.some(b=>normalized(title).includes(normalized(b)));
const discography:Album[]=catalog.filter(a=>!hiddenAlbums.has(a.artist+':'+a.id)&&!remixOrInstrumental.test(a.title)&&!isBlocked(a.title)).map(a=>({...a,tracks:a.tracks.filter(t=>!hiddenTracks.has(a.artist+':'+t.id)&&!remixOrInstrumental.test(t.title)&&!isBlocked(t.title))})).filter(a=>a.tracks.length>0);
const isSingle=(a:Album)=>/ - single$/i.test(a.title);
const sc=(q:string)=>'https://soundcloud.com/search?q='+encodeURIComponent(q);
const soundCloudOnly=[
 {id:'sc-sea',title:'SEA',artist:'BTS',url:sc('BTS SEA')},
 {id:'sc-4-oclock',title:"4 O'Clock",artist:'RM, V Â· BTS',url:sc("BTS 4 O'Clock")},
];
type ListenItem={title:string;artist:string;apple:string;soundcloud?:string};
type Listen=(item:ListenItem)=>void;
function platformLinks(item:ListenItem){return [
 ...(item.soundcloud?[{label:'SoundCloud',href:item.soundcloud}]:[]),
 {label:'YouTube',href:'https://www.youtube.com/results?search_query='+encodeURIComponent(item.artist+' '+item.title+' official audio')},
 {label:'Spotify',href:'https://open.spotify.com/search/'+encodeURIComponent(item.artist+' '+item.title)},
 {label:item.apple.includes('soundcloud.com/')?'SoundCloud':'Apple Music',href:item.apple}
];}
function studyForAlbum(title:string,albumTitle:string,artist:string){const normalizedTitle=title.trim().toLowerCase();if(normalizedTitle==='to me, today'||normalizedTitle==='to me today'||normalizedTitle==='ì˜¤ëŠ˜ì˜ ë‚˜ì—ê²Œ')return 'to-me-today';if(normalizedTitle==='background')return 'background';if(normalizedTitle==='with the clouds'||normalizedTitle==='with the clouds (êµ¬ë¦„ê³¼ ë– ë‚˜ëŠ” ì—¬í–‰)')return 'with-the-clouds';if(normalizedTitle==='rope it')return 'rope-it';if(normalizedTitle==='loser')return 'loser';if(normalizedTitle==='nothing without your love')return 'nothing-without-your-love';if(normalizedTitle==='gajah (feat. rm)')return 'gajah';if(normalizedTitle==='bicycle')return 'bicycle';if(normalizedTitle==='make it right (feat. lauv)')return 'make-it-right-lauv';if(normalizedTitle==='my universe')return 'my-universe';if(normalizedTitle==='the planet')return 'the-planet';if(normalizedTitle==='take two')return 'take-two';if(normalizedTitle==='skit')return albumTitle.trim().toUpperCase()==='BE'&&artist==='BTS'?'skit-be':undefined;return studyFor(title)}
function ListenModal({item,onClose}:{item:ListenItem;onClose:()=>void}){
 return createPortal(<div className="listen-overlay" onClick={onClose}><div className="listen-box" role="dialog" aria-modal="true" aria-label="Escolher plataforma" onClick={e=>e.stopPropagation()}><button type="button" className="listen-close" aria-label="Fechar" onClick={onClose}>Ã—</button><p className="eyebrow">ESCOLHA A PLATAFORMA</p><h3>Ouvir â€œ{item.title}â€</h3><p className="listen-artist">{item.artist}</p><ul className="listen-platforms">{platformLinks(item).map(p=><li key={p.label}><a href={p.href} target="_blank" rel="noreferrer">{p.label} â†—</a></li>)}</ul></div></div>,document.body);
}
function AlbumCard({album,query,onListen}:{album:Album;query:string;onListen:Listen}){const {locale}=useLocale();
 return <Localized>{<details className="album" open={query.trim()?true:undefined}>
  <summary><img src={album.artwork} width="72" height="72" alt="" loading="lazy"/><span><strong translate="no">{album.title}</strong><small>{new Date(album.date+'T12:00:00Z').toLocaleDateString(locale==='eng'?'en-US':'pt-BR',{timeZone:'UTC'})} Â· {album.tracks.length} faixas</small></span><span className="album-expand" aria-hidden="true">ï¼‹</span></summary>
  <div className="album-tracks"><button type="button" className="text-button" onClick={()=>onListen({title:album.title,artist:album.artist,apple:album.url})}>Ouvir Ã¡lbum â†—</button><ol>{album.tracks.filter(t=>!query||normalized(album.title).includes(normalized(query))||normalized(t.title).includes(normalized(query))).map(track=><li key={track.id}><span className="track-number">{track.disc>1?track.disc+'.':''}{String(track.number).padStart(2,'0')}</span><span className="track-title"><span translate="no"><KoreanText text={track.title} localize={false}/></span>{track.artist!=='BTS'&&<small translate="no">{track.artist}</small>}</span><span className="track-actions">{studyForAlbum(track.title,album.title,album.artist)&&<a href={'#bts/estudos/'+studyForAlbum(track.title,album.title,album.artist)}>Estudar</a>}<button type="button" onClick={()=>onListen({title:track.title,artist:track.artist,apple:track.url})} aria-label={'Ouvir '+track.title+' em outra plataforma'}>Ouvir â†—</button></span></li>)}</ol></div>
 </details>}</Localized>;
}
export function BtsCatalog(){
 const [study,setStudy]=useState(''),[query,setQuery]=useState(''),[artist,setArtist]=useState('BTS');
 const [listen,setListen]=useState<ListenItem|null>(null);
 useEffect(()=>{const read=()=>{const parts=location.hash.split('/');setStudy(parts[1]==='estudos'?(parts[2]||'spring-day'):'');setArtist(artists.find(a=>artistSlug(a)===parts[1])||'BTS');setQuery('')};read();addEventListener('hashchange',read);return()=>removeEventListener('hashchange',read)},[]);
 const match=(a:Album)=>normalized(a.title+' '+a.tracks.map(t=>t.title).join(' ')).includes(normalized(query));
 const found=discography.filter(a=>a.artist===artist).filter(match);
 const albums=found.filter(a=>!isSingle(a));
 const singles=found.filter(a=>isSingle(a));
 const others=(artist==='BTS'?soundCloudOnly:[]).filter(s=>!query||normalized(s.title+' '+s.artist).includes(normalized(query)));
 return <Localized>{<><nav className="artist-tabs" aria-label="Escolher artista">{artists.map(a=><a key={a} className={a===artist?'selected':''} aria-current={a===artist?'page':undefined} href={a==='BTS'?'#bts':'#bts/'+artistSlug(a)}><span translate="no">{a}</span> MÃºsicas</a>)}</nav>{!study&&<div className="intro"><div><p className="eyebrow">SUA MÃšSICA, SUAS DESCOBERTAS</p><h1>{artist==='BTS'?'Aprenda coreano com BTS':<><span translate="no">{artist}</span> MÃºsicas</>}<span>.</span></h1><p>{artist==='BTS'?'Escolha um Ã¡lbum, encontre a mÃºsica e clique em â€œEstudarâ€ para descobrir a traduÃ§Ã£o, a gramÃ¡tica e as palavras em coreano. O botÃ£o aparece nas mÃºsicas com estudo preparado.':'Explore os lanÃ§amentos do mais recente ao mais antigo e descubra suas faixas favoritas.'}</p></div></div>}{study&&<a className="text-button back" href="#bts">â† Voltar Ã  discografia</a>}{study?<MusicStudy key={study} initialSongId={study}/>:<>
 <div className="catalog-search"><label htmlFor="music-search">Buscar Ã¡lbum ou mÃºsica</label><input id="music-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Nome da mÃºsica ou do Ã¡lbumâ€¦"/><p>{found.length} lanÃ§amentos no Apple Music{others.length?` Â· ${others.length} sÃ³ no SoundCloud`:''} Â· Ã¡lbuns, singles e colaboraÃ§Ãµes creditadas a {artist}</p></div>
 <p className="muted">Ao clicar em â€œOuvirâ€ abre um seletor de plataforma: SoundCloud (quando existir), YouTube, Spotify e Apple Music. VersÃµes instrumentais e remixes nÃ£o sÃ£o exibidos â€” sÃ³ as originais e as versÃµes oficiais (por exemplo, a versÃ£o coreana). Uma mÃºsica pode aparecer em vÃ¡rios Ã¡lbuns. Os estudos disponÃ­veis tÃªm um botÃ£o prÃ³prio; as demais faixas ainda nÃ£o tÃªm traduÃ§Ã£o ou explicaÃ§Ã£o no BoraLang.</p>
 {albums.length>0&&<><h2 className="discography-heading">Ãlbuns</h2><div className="album-list">{albums.map(album=><AlbumCard key={album.id} album={album} query={query} onListen={setListen}/>)}</div></>}
 {singles.length>0&&<><h2 className="discography-heading">Singles</h2><div className="album-list">{singles.map(album=><AlbumCard key={album.id} album={album} query={query} onListen={setListen}/>)}</div></>}
 {others.length>0&&<><h2 className="discography-heading">Outros</h2><div className="album-list"><div className="soundcloud-list">{others.map(song=><div className="soundcloud-song" key={song.id}><span><strong translate="no">{song.title}</strong><small><span translate="no">{song.artist}</span> Â· sÃ³ no SoundCloud</small></span><span className="track-actions"><button type="button" onClick={()=>setListen({title:song.title,artist:song.artist,apple:'https://music.apple.com/us/search?term='+encodeURIComponent(song.artist+' '+song.title),soundcloud:song.url})}>Ouvir â†—</button></span></div>)}</div></div></>}
 {listen&&<ListenModal item={listen} onClose={()=>setListen(null)}/>}
 {!found.length&&!others.length&&<p className="empty-state">Nenhuma mÃºsica encontrada. Tente outro tÃ­tulo.</p>}
 <p className="music-reference">CatÃ¡logo digital consultado em 22/09/2026. LanÃ§amentos japoneses nÃ£o incluÃ­dos; versÃµes instrumentais e remixes removidas. EdiÃ§Ãµes regionais podem variar. Faixas de discos fÃ­sicos adicionadas manualmente aparecem identificadas, como Skit: On The Start Line (Hidden Track). Fontes: <a href="https://music.apple.com/us/artist/bts/883131348" target="_blank" rel="noreferrer">Apple Music</a>, <a href="https://bts.ibighit.com/eng/discography/" target="_blank" rel="noreferrer">BIGHIT MUSIC</a>, os catÃ¡logos oficiais dos integrantes no Apple Music e o <a href="https://soundcloud.com/search?q=BTS" target="_blank" rel="noreferrer">SoundCloud</a>.</p>
</>}</>}</Localized>;
}

