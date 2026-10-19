export const compoundVowels=[
 {letter:'ㅐ',block:'애',parts:['ㅏ','ㅣ'],group:0,hint:'Na escrita, combine ㅏ com ㅣ. Hoje, ㅐ tem um núcleo vocálico só; não leia as duas letras em sílabas separadas.',connection:'Em 김태형, nome real de V, o bloco 태 contém ㅐ.'},
 {letter:'ㅔ',block:'에',parts:['ㅓ','ㅣ'],group:0,hint:'Na escrita, combine ㅓ com ㅣ. ㅔ é a letra da vogal; 에 é o bloco completo com ㅇ inicial silencioso.',connection:'Em 제이홉, nome de j-hope em Hangul, 제 contém ㅔ.'},
 {letter:'ㅒ',block:'얘',parts:['ㅑ','ㅣ'],group:0,hint:'Comece com um deslize curto parecido com “y” e chegue ao som de ㅐ. 얘 continua sendo uma única sílaba.',connection:''},
 {letter:'ㅖ',block:'예',parts:['ㅕ','ㅣ'],group:0,hint:'Comece com um deslize curto parecido com “y” e chegue ao som de ㅔ. A escrita se parece com ㅒ, mas a base é diferente.',connection:''},
 {letter:'ㅘ',block:'와',parts:['ㅗ','ㅏ'],group:1,hint:'Na escrita, ㅗ se combina com ㅏ. Na leitura de 와, faça um deslize curto parecido com “w” até o som de ㅏ, em uma só sílaba.',connection:''},
 {letter:'ㅙ',block:'왜',parts:['ㅗ','ㅐ'],group:1,hint:'Combine ㅗ com ㅐ. A leitura começa com um deslize parecido com “w”; não pronuncie os componentes escritos um após o outro como sílabas.',connection:''},
 {letter:'ㅚ',block:'외',parts:['ㅗ','ㅣ'],group:1,hint:'A composição escrita é ㅗ com ㅣ. Na fala atual, é comum ouvir 외 com um deslize parecido com “w”, próximo de 웨. Evite ler como 오 seguido de 이.',connection:''},
 {letter:'ㅝ',block:'워',parts:['ㅜ','ㅓ'],group:1,hint:'Combine ㅜ com ㅓ. Faça um deslize curto parecido com “w” até o som de ㅓ. Compare a forma com ㅘ: o traço vertical muda de lado.',connection:''},
 {letter:'ㅞ',block:'웨',parts:['ㅜ','ㅔ'],group:1,hint:'Combine ㅜ com ㅔ. O início tem um deslize parecido com “w”. Observe a escrita: ㅞ parte de ㅜ, enquanto ㅙ parte de ㅗ.',connection:''},
 {letter:'ㅟ',block:'위',parts:['ㅜ','ㅣ'],group:1,hint:'A composição escrita é ㅜ com ㅣ. É comum ouvir 위 com um deslize parecido com “w” até o som de ㅣ, em uma só sílaba.',connection:'Em 뷔, nome de V em Hangul, a vogal é ㅟ.'},
 {letter:'ㅢ',block:'의',parts:['ㅡ','ㅣ'],group:2,hint:'Combine ㅡ com ㅣ. No bloco 의 em início de palavra, como em 의자, comece pelo som de ㅡ e deslize até ㅣ sem separar em duas sílabas.',connection:''}
] as const;
export const compoundVowelRounds=[
 {prompt:'Qual letra vocálica aparece no bloco 에?',target:'ㅔ',options:['ㅐ','ㅔ','ㅖ'],feedback:'에 tem ㅇ inicial silencioso e a vogal ㅔ. A letra ㅔ se forma na escrita com ㅓ e ㅣ.'},
 {prompt:'Qual vogal resulta da combinação escrita ㅏ + ㅣ?',target:'ㅐ',options:['ㅚ','ㅐ','ㅖ'],feedback:'ㅏ e ㅣ se combinam na escrita para formar ㅐ. Com ㅇ inicial, temos 애, com uma sílaba.'},
 {prompt:'Qual vogal aparece em 왜?',target:'ㅙ',options:['ㅚ','ㅞ','ㅙ'],feedback:'왜 usa ㅙ, formada por ㅗ com ㅐ. Em 웨, a vogal é ㅞ; a grafia é diferente, mesmo quando os sons se aproximam.'},
 {prompt:'Qual vogal resulta da combinação escrita ㅜ + ㅣ?',target:'ㅟ',options:['ㅟ','ㅚ','ㅢ'],feedback:'ㅜ com ㅣ forma ㅟ. Com ㅇ, temos 위. Essa mesma vogal aparece em 뷔.'},
 {prompt:'Qual vogal resulta da combinação escrita ㅜ + ㅔ?',target:'ㅞ',options:['ㅙ','ㅘ','ㅞ'],feedback:'ㅜ com ㅔ forma ㅞ. O bloco com ㅇ é 웨. Para formar ㅙ, a base seria ㅗ com ㅐ.'},
 {prompt:'Qual vogal resulta da combinação escrita ㅡ + ㅣ?',target:'ㅢ',options:['ㅔ','ㅢ','ㅚ'],feedback:'ㅡ com ㅣ forma ㅢ. Com ㅇ inicial, escrevemos 의. Sua leitura em palavras depende do contexto.'}
] as const;
