export const finalSounds=[
 {final:'ㄱ',letters:'ㄱ · ㄲ · ㅋ',ko:'국',meaning:'sopa',ipa:'[k̚]',cue:'A parte de trás da língua fecha a passagem do ar. Termine sem soltar um novo sopro e sem acrescentar uma vogal.'},
 {final:'ㄴ',letters:'ㄴ',ko:'눈',meaning:'neve',ipa:'[n]',cue:'A ponta da língua toca a região atrás dos dentes de cima. O ar passa pelo nariz; não acrescente uma vogal.'},
 {final:'ㄷ',letters:'ㄷ · ㅅ · ㅆ · ㅈ · ㅊ · ㅌ',ko:'옷',meaning:'roupa',ipa:'[t̚]',cue:'A ponta da língua fecha a passagem do ar atrás dos dentes de cima. Em pausa, não solte um s nem uma vogal depois.'},
 {final:'ㄹ',letters:'ㄹ',ko:'달',meaning:'lua',ipa:'[l]',cue:'A ponta da língua faz contato atrás dos dentes de cima e o ar passa pelos lados. É um som lateral; não é o r forte de rua.'},
 {final:'ㅁ',letters:'ㅁ',ko:'밤',meaning:'castanha',ipa:'[m]',cue:'Feche os lábios e deixe o ar passar pelo nariz. A sílaba termina com os lábios unidos.'},
 {final:'ㅂ',letters:'ㅂ · ㅍ',ko:'밥',meaning:'arroz cozido; refeição',ipa:'[p̚]',cue:'Feche os lábios para interromper o ar. Termine sem abrir os lábios para produzir um novo sopro ou uma vogal.'},
 {final:'ㅇ',letters:'ㅇ',ko:'공',meaning:'bola',ipa:'[ŋ]',cue:'A parte de trás da língua se aproxima do céu da boca e o ar passa pelo nariz. É um ng sem soltar um g separado.'}
] as const;
export const linkingExamples=[
 {ko:'밥',meaning:'arroz cozido; refeição',written:'밥이',reading:'바비',final:'ㅂ',moves:true,note:'O ㅂ liga-se à vogal seguinte. Na fala contínua, 밥이 soa como 바비. O ㅇ inicial não acrescenta som.'},
 {ko:'옷',meaning:'roupa',written:'옷이',reading:'오시',final:'ㅅ',moves:true,note:'Antes da partícula 이, o ㅅ é ouvido no início da próxima sílaba: 옷이 soa como 오시. Não use o som ㄷ da pausa aqui.'},
 {ko:'꽃',meaning:'flor',written:'꽃이',reading:'꼬치',final:'ㅊ',moves:true,note:'O ㅊ é ouvido antes da vogal seguinte: 꽃이 soa como 꼬치. A escrita original continua sendo 꽃이.'},
 {ko:'달',meaning:'lua',written:'달이',reading:'다리',final:'ㄹ',moves:true,note:'O ㄹ liga-se ao 이 seguinte: 달이 soa como 다리. Entre vogais, esse ㄹ tem um toque rápido da língua.'},
 {ko:'공',meaning:'bola',written:'공이',reading:'공이',final:'ㅇ',moves:false,note:'O 받침 ㅇ mantém seu som nasal no final do primeiro bloco. 공이 continua 공이; não vira 고이. Não aplicamos a mesma mudança a todos os 받침.'}
] as const;
export const batchimRounds=[
 {ko:'밥',prompt:'Qual é o 받침 desta palavra?',options:['ㅂ','ㅏ','ㅁ'],answer:'ㅂ',feedback:'Em 밥, ㅂ ocupa a base. ㅏ é a vogal; o ㅂ inicial fica na parte superior esquerda.'},
 {ko:'눈',prompt:'Qual é o 받침 desta palavra?',options:['ㅇ','ㄴ','ㅜ'],answer:'ㄴ',feedback:'눈 tem ㄴ no início e também na base. O ㄴ da base é o 받침.'},
 {ko:'옷',prompt:'Em pausa, qual é o som final representativo?',options:['ㅅ','ㅇ','ㄷ'],answer:'ㄷ',feedback:'A escrita mantém ㅅ, mas 옷 em pausa termina com uma oclusão como ㄷ, sem soltura audível.'},
 {ko:'밥',prompt:'Como 밥이 é pronunciado?',options:['바비','밥이 com pausa entre blocos','바미'],answer:'바비',feedback:'O ㅂ liga-se à vogal da partícula 이. A escrita é 밥이; a indicação de pronúncia é [바비].'},
 {ko:'꽃',prompt:'Como 꽃이 é pronunciado?',options:['꼬디','꼬치','꼬이'],answer:'꼬치',feedback:'O ㅊ reaparece antes da vogal: 꽃이 [꼬치]. A forma em colchetes explica o som; não substitui a escrita.'},
 {ko:'공',prompt:'Qual leitura preserva o 받침 ㅇ em 공이?',options:['고이','고기','공이'],answer:'공이',feedback:'O ㅇ final continua nasal. Ele não desaparece nem se transforma em um g separado.'}
] as const;
