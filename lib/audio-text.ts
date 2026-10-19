export const koreanPattern=/[가-힣ㄱ-ㅎㅏ-ㅣ]/u;
export function koreanPhrases(text:string){return text.match(/[0-9]*[가-힣ㄱ-ㅎㅏ-ㅣ]+(?:[ \t]+[0-9]*[가-힣ㄱ-ㅎㅏ-ㅣ]+)*[.!?]?/gu)??[];}
export const letterReadings:Record<string,string>={'ㄱ':'기역','ㄲ':'쌍기역','ㄴ':'니은','ㄷ':'디귿','ㄸ':'쌍디귿','ㄹ':'리을','ㅁ':'미음','ㅂ':'비읍','ㅃ':'쌍비읍','ㅅ':'시옷','ㅆ':'쌍시옷','ㅇ':'이응','ㅈ':'지읒','ㅉ':'쌍지읒','ㅊ':'치읓','ㅋ':'키읔','ㅌ':'티읕','ㅍ':'피읖','ㅎ':'히읗','ㅏ':'아','ㅑ':'야','ㅓ':'어','ㅕ':'여','ㅗ':'오','ㅛ':'요','ㅜ':'우','ㅠ':'유','ㅡ':'으','ㅣ':'이','ㅐ':'애','ㅔ':'에','ㅒ':'얘','ㅖ':'예','ㅘ':'와','ㅙ':'왜','ㅚ':'외','ㅝ':'워','ㅞ':'웨','ㅟ':'위','ㅢ':'의'};
export function speechText(text:string){return text.normalize('NFC').replace(/[ㄱ-ㅎㅏ-ㅣ]/gu,c=>letterReadings[c]??c);}
