export const nativeUnits=['','하나','둘','셋','넷','다섯','여섯','일곱','여덟','아홉'] as const;
export const nativeTens=['','열','스물','서른','마흔','쉰','예순','일흔','여든','아흔'] as const;
export const sinoUnits=['','일','이','삼','사','오','육','칠','팔','구'] as const;
export function nativeNumber(n:number){if(!Number.isInteger(n)||n<1||n>99)return '';return nativeTens[Math.floor(n/10)]+nativeUnits[n%10];}
export function sinoNumber(n:number){if(!Number.isInteger(n)||n<0||n>99)return '';if(n===0)return '영';return (n>=10?(n<20?'':sinoUnits[Math.floor(n/10)])+'십':'')+sinoUnits[n%10];}
export function countingNumber(n:number){if(n===20)return '스무';const unit=n%10,base=nativeNumber(n);return unit>=1&&unit<=4?base.slice(0,-nativeUnits[unit].length)+['','한','두','세','네'][unit]:base;}
export const countingScenes=[
 {noun:'포토카드',counter:'장',label:'Photocards',meaning:'cartões e folhas',kind:'card',note:'장 é comum para objetos planos, como cartões, folhas e ingressos. Aqui contamos photocards.'},
 {noun:'응원봉',counter:'개',label:'Lightsticks',meaning:'objetos em geral',kind:'lightstick',note:'개 é um contador geral para objetos. Aqui usamos 응원봉, o bastão de luz usado para torcer.'},
 {noun:'아미',counter:'명',label:'Pessoas',meaning:'pessoas',kind:'person',note:'명 conta pessoas. Nesta cena imaginária, contamos ARMYs; o número é apenas um exemplo de prática.'},
 {noun:'커피',counter:'잔',label:'Café',meaning:'xícaras e copos de bebida',kind:'cup',note:'잔 conta porções servidas em xícaras ou copos. 커피 두 잔 indica dois cafés servidos dessa forma.'},
 {noun:'책',counter:'권',label:'Livros',meaning:'livros e volumes',kind:'book',note:'권 conta livros e volumes. Embora livros também sejam objetos, aqui usamos o contador específico.'}
] as const;
export function countedPhrase(scene:number,n:number){const item=countingScenes[scene];return `${item.noun} ${countingNumber(n)} ${item.counter}`;}
export function clockPhrase(hour:number,minute:number){return `${countingNumber(hour)} 시${minute?' '+sinoNumber(minute)+' 분':''}`;}
export function clockSentence(hour:number,minute:number){return `지금 ${clockPhrase(hour,minute)}${minute?'이에요':'예요'}.`;}
export const numberChallenges=[
 {prompt:'Escolha “duas pessoas”, usando 명.',options:['둘 명','두 명','이 명'],answer:'두 명',feedback:'Com 명, usamos o sistema nativo. 둘 se reduz a 두 antes do contador: 두 명.'},
 {prompt:'Como contar três photocards?',options:['포토카드 세 장','포토카드 셋 장','포토카드 삼 장'],answer:'포토카드 세 장',feedback:'Photocards são cartões: usamos 장. 셋 passa a 세 antes do contador, formando 포토카드 세 장.'},
 {prompt:'Escolha a expressão para quatro livros.',options:['책 넷 권','책 사 권','책 네 권'],answer:'책 네 권',feedback:'권 conta livros. O número nativo 넷 muda para 네 antes do contador: 책 네 권.'},
 {prompt:'Complete a contagem de 20 lightsticks: 응원봉 … 개.',options:['스물','스무','이십'],answer:'스무',feedback:'O 20 isolado é 스물. Antes de um contador, 20 vira 스무: 응원봉 스무 개.'},
 {prompt:'E se forem 21 photocards?',options:['포토카드 스무 하나 장','포토카드 이십일 장','포토카드 스물한 장'],answer:'포토카드 스물한 장',feedback:'Para 21, mantemos 스물 e encurtamos apenas 하나 para 한: 스물한 장. 스무 é a forma especial de 20 diante do contador.'},
 {prompt:'O relógio marca 1:05. Qual leitura combina com ele?',options:['일 시 오 분','한 시 오 분','한 시 다섯 분'],answer:'한 시 오 분',feedback:'Horas com 시 usam nativos: 한 시. Os cinco minutos usam sino-coreanos: 오 분. Juntos: 한 시 오 분.'},
 {prompt:'Escolha a leitura de 3:10 no relógio de 12 horas.',options:['세 시 십 분','삼 시 열 분','셋 시 십 분'],answer:'세 시 십 분',feedback:'셋 vira 세 antes de 시, e 10 minutos são 십 분. Por isso 3:10 se lê 세 시 십 분.'},
 {prompt:'Aqui 분 significa minutos. Como dizer “15 minutos”?',options:['열다섯 분','십오 분','열오 분'],answer:'십오 분',feedback:'Minutos usam o sistema sino-coreano. 15 é 십오: 십 + 오. Assim, dizemos 십오 분.'}
] as const;
