const initials=['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const medials=['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const finals=['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
export type SyllableParts={initial:string;vowel:string;final:string};
export function joinSyllable({initial,vowel,final}:SyllableParts){const i=initials.indexOf(initial),v=medials.indexOf(vowel),f=finals.indexOf(final);return i<0||v<0||f<0?'':String.fromCodePoint(0xac00+(i*21+v)*28+f);}
export function splitSyllable(block:string):SyllableParts|null{if([...block].length!==1)return null;const n=block.codePointAt(0)!-0xac00;if(n<0||n>=11172)return null;return {initial:initials[Math.floor(n/588)],vowel:medials[Math.floor(n/28)%21],final:finals[n%28]};}
export const labInitials=['ㄱ','ㄴ','ㄹ','ㅁ','ㅂ','ㅇ','ㅎ'];
export const labVowels=['ㅏ','ㅓ','ㅗ','ㅜ','ㅡ','ㅣ'];
export const labFinals=['','ㄱ','ㄴ','ㄹ','ㅁ','ㅂ','ㅇ'];
export const assemblyChallenges=[
 {target:'한',hint:'Procure ㅎ para a consoante inicial, ㅏ para a vogal e ㄴ para o 받침. A vogal é vertical; a consoante final ocupa a base.'},
 {target:'글',hint:'Escolha ㄱ, a vogal horizontal ㅡ e o 받침 ㄹ. As três partes ficam empilhadas: inicial, vogal e consoante final.'},
 {target:'국',hint:'Escolha ㄱ na posição inicial, ㅜ como vogal e outro ㄱ na base. A mesma consoante pode ocupar duas posições no bloco.'}
];
export const wordBlocks=[
 {ko:'한글',pt:'alfabeto coreano',image:'book'},
 {ko:'한국어',pt:'língua coreana',image:'speech'},
 {ko:'나무',pt:'árvore',image:'tree'},
 {ko:'바다',pt:'mar',image:'sea'},
 {ko:'우유',pt:'leite',image:'milk'}
] as const;
export const orderPieces=['어','한','국'];
