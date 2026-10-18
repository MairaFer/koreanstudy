export const vowels=[
 {letter:'ㅏ',block:'아',roman:'a',layout:'vertical',mouth:'open',hint:'Abra a boca com naturalidade, sem arredondar os lábios. É próximo do “a” de casa.',paths:['M50 16V104','M50 54H82']},
 {letter:'ㅑ',block:'야',roman:'ya',layout:'vertical',mouth:'open',hint:'Comece com um deslize curto de “y” e chegue ao som de ㅏ. Tudo cabe em uma sílaba.',paths:['M50 16V104','M50 43H82','M50 75H82']},
 {letter:'ㅓ',block:'어',roman:'eo',layout:'vertical',mouth:'open',hint:'Abra a boca sem fazer um bico. A boca fica mais aberta que em ㅗ. “eo” representa uma só vogal: não leia “e + o”.',paths:['M28 54H60','M60 16V104']},
 {letter:'ㅕ',block:'여',roman:'yeo',layout:'vertical',mouth:'open',hint:'Acrescente um deslize curto de “y” ao som de ㅓ. Não transforme a escrita “yeo” em três vogais.',paths:['M28 43H60','M28 75H60','M60 16V104']},
 {letter:'ㅗ',block:'오',roman:'o',layout:'horizontal',mouth:'round',hint:'Arredonde os lábios para um “o” fechado. O tracinho aponta para cima; o som não é o mesmo de ㅓ.',paths:['M60 25V67','M18 67H102']},
 {letter:'ㅛ',block:'요',roman:'yo',layout:'horizontal',mouth:'round',hint:'Um deslize curto de “y” leva ao som de ㅗ, com lábios arredondados. Dois tracinhos, uma sílaba.',paths:['M43 25V67','M77 25V67','M18 67H102']},
 {letter:'ㅜ',block:'우',roman:'u',layout:'horizontal',mouth:'round',hint:'Faça um bico menor que em ㅗ, aproximando o som de “u”. O tracinho aponta para baixo.',paths:['M18 47H102','M60 47V91']},
 {letter:'ㅠ',block:'유',roman:'yu',layout:'horizontal',mouth:'round',hint:'Um deslize curto de “y” leva ao som de ㅜ. Mantenha tudo em uma sílaba, como em 유.',paths:['M18 47H102','M43 47V91','M77 47V91']},
 {letter:'ㅡ',block:'으',roman:'eu',layout:'horizontal',mouth:'flat',hint:'Mantenha a língua alta e mais para trás, com lábios relaxados, sem bico. “eu” é uma só vogal; não é o pronome português “eu”.',paths:['M18 60H102']},
 {letter:'ㅣ',block:'이',roman:'i',layout:'vertical',mouth:'flat',hint:'Mantenha a língua alta e mais à frente, com lábios sem bico. O som se aproxima do “i” de vida.',paths:['M60 16V104']}
] as const;
export type Vowel=typeof vowels[number];
export const vowelPairs=[['ㅏ','ㅑ'],['ㅓ','ㅕ'],['ㅗ','ㅛ'],['ㅜ','ㅠ']] as const;
export const listeningRounds=[
 {target:'오',options:['어','오','우']},
 {target:'어',options:['오','어','아']},
 {target:'우',options:['으','오','우']},
 {target:'으',options:['우','으','이']},
 {target:'야',options:['아','여','야']},
 {target:'여',options:['여','야','어']}
];
