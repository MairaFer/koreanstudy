export type SoundPlace='back'|'tip'|'lips'|'gap'|'throat'|'silent';
export const consonants:{letter:string;name:string;place:SoundPlace;hint:string}[]=[
 {letter:'ㄱ',name:'기역',place:'back',hint:'O fundo da língua faz contato com a região posterior do céu da boca e solta o ar. É uma consoante simples: seu som varia com a posição na palavra; não é sempre um “g” português.'},
 {letter:'ㄴ',name:'니은',place:'tip',hint:'A ponta da língua toca a região logo atrás dos dentes superiores. O ar passa pelo nariz: é uma consoante nasal, próxima de “n”.'},
 {letter:'ㄷ',name:'디귿',place:'tip',hint:'A ponta da língua bloqueia o ar na região atrás dos dentes superiores e depois solta. É simples; não a prenda a um “d” português em qualquer posição.'},
 {letter:'ㄹ',name:'리을',place:'tip',hint:'Em muitas posições entre vogais, a ponta da língua dá um toque breve atrás dos dentes superiores. Em final de sílaba, o som é diferente, mais próximo de “l”. Não é o “r” forte de rua.'},
 {letter:'ㅁ',name:'미음',place:'lips',hint:'Feche os dois lábios e deixe o ar passar pelo nariz. É uma consoante nasal, próxima de “m”.'},
 {letter:'ㅂ',name:'비읍',place:'lips',hint:'Feche os lábios para bloquear o ar e depois solte. É a consoante simples desta família; não é sempre um “b” português.'},
 {letter:'ㅅ',name:'시옷',place:'gap',hint:'A língua se aproxima da região atrás dos dentes superiores, deixando uma passagem estreita para o ar. Há fricção, próxima de “s”; diante de ㅣ, a qualidade do som muda.'},
 {letter:'ㅇ',name:'이응',place:'silent',hint:'No começo do bloco, ocupa a posição de consoante inicial sem acrescentar som. No final do bloco, soa como “ng”, sem soltar um “g” separado.'},
 {letter:'ㅈ',name:'지읒',place:'gap',hint:'O som começa com um bloqueio e termina em fricção, na região atrás dos dentes superiores. É a consoante simples da família de ㅈ, ㅊ e ㅉ.'},
 {letter:'ㅊ',name:'치읓',place:'gap',hint:'Começa com bloqueio e termina em fricção, como a família de ㅈ. A soltura tem um sopro mais perceptível: é uma consoante aspirada.'},
 {letter:'ㅋ',name:'키읔',place:'back',hint:'Use a região posterior da língua, como em ㄱ, mas com um sopro mais perceptível na soltura. É a consoante aspirada da família.'},
 {letter:'ㅌ',name:'티읕',place:'tip',hint:'Use a região atrás dos dentes superiores, como em ㄷ, com um sopro mais perceptível na soltura. É uma consoante aspirada.'},
 {letter:'ㅍ',name:'피읖',place:'lips',hint:'Os lábios se fecham e se abrem com um sopro mais perceptível que na consoante simples da família. É aspirada; não é o “f” português.'},
 {letter:'ㅎ',name:'히읗',place:'throat',hint:'Há passagem de ar na glote, na região da garganta. No início de 하, há um sopro audível; não confunda com o ㅇ inicial silencioso.'}
];
export const consonantFamilies=[
 {letters:['ㄱ','ㅋ','ㄲ'],blocks:['가','카','까'],place:'back'},
 {letters:['ㄷ','ㅌ','ㄸ'],blocks:['다','타','따'],place:'tip'},
 {letters:['ㅂ','ㅍ','ㅃ'],blocks:['바','파','빠'],place:'lips'},
 {letters:['ㅈ','ㅊ','ㅉ'],blocks:['자','차','짜'],place:'gap'}
] as const;
export const soundKinds=[
 {title:'Simples',description:'Uma soltura sem exagerar o sopro nem a tensão. O som depende da posição e do contexto; não é uma cópia exata de uma consoante portuguesa.'},
 {title:'Aspirada',description:'A soltura vem acompanhada de um sopro mais perceptível. A palavra aspiração descreve essa saída de ar, não uma vogal extra depois da consoante.'},
 {title:'Tensa',description:'O início do som é mais firme e compacto, sem acrescentar o sopro da aspirada. Não significa gritar nem pronunciar a consoante duas vezes.'}
] as const;
export const consonantListening=[
 {target:'카',options:['가','카','까'],hint:'카 tem a consoante aspirada ㅋ. Compare a soltura com 가 e 까, mantendo a mesma vogal.'},
 {target:'따',options:['타','다','따'],hint:'따 tem a consoante tensa ㄸ. A escrita dupla representa uma só consoante inicial; o bloco continua com uma sílaba.'},
 {target:'바',options:['바','빠','파'],hint:'바 tem a consoante simples ㅂ. Compare com a aspirada em 파 e a tensa em 빠.'},
 {target:'짜',options:['자','짜','차'],hint:'짜 tem a consoante tensa ㅉ. Compare com 자 e 차; a vogal continua sendo ㅏ.'},
 {target:'싸',options:['사','싸','하'],hint:'싸 tem a consoante tensa ㅆ. O par é 사 e 싸; ㅎ não é uma versão aspirada de ㅅ.'},
 {target:'아',options:['하','아','나'],hint:'Em 아, o ㅇ inicial é silencioso. Em 하, o ㅎ participa do som. Não são a mesma consoante.'}
];
const initials=['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const builderVowels=['ㅏ','ㅗ','ㅜ'] as const;
const vowelIndices=[0,8,13];
export {builderVowels};
export function composeInitial(initial:string,vowel:string){const i=initials.indexOf(initial),v=builderVowels.indexOf(vowel as typeof builderVowels[number]);if(i<0||v<0)return '';return String.fromCodePoint(0xac00+i*588+vowelIndices[v]*28);}
