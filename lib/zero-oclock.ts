import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const verse1=[
l('그런 날 있잖아','Sabe aqueles dias?',e('그런 날','dias assim','그런 = desse tipo; 날 = dia. Aqui 날 não é a contração 나를, a mim.'),e('있잖아','tem, você sabe','있다 = existir/haver; -잖아 apresenta algo tratado como compartilhado com o ouvinte.')),
l('이유 없이 슬픈 날','Dias tristes sem motivo.',e('이유 없이','sem motivo','이유 = razão; 없이 = sem.'),e('슬픈 날','dia triste','슬프다 = ser triste; -ㄴ modifica 날, dia: um dia triste.')),
l('몸은 무겁고','O corpo está pesado,',e('몸은','quanto ao corpo','몸 = corpo; -은 tópico.'),e('무겁고','está pesado e','무겁다 = ser pesado; -고 liga à continuação. Aqui também sugere cansaço.')),
l('나 빼곤 모두 다','e todos, menos eu,',e('나 빼곤','exceto eu','나 = eu; 빼곤 reduz 빼고는, de 빼다, excluir/tirar, com contraste.'),e('모두 다','todos, sem exceção','모두 e 다 reforçam a totalidade. A descrição dessas pessoas vem na próxima linha.')),
l('바쁘고 치열해 보이는 날','parecem ocupados e empenhados numa luta intensa.',e('바쁘고','ocupados e','바쁘다 = estar ocupado; -고 liga os estados.'),e('치열해 보이는 날','um dia em que parecem lutar intensamente','치열하다 = ser intenso/acirrado; -아/어 보이다 = parecer; -는 modifica 날.','O sujeito todos está na linha anterior. A expressão descreve a impressão do narrador, sem afirmar que conhece a vida de todos.')),
l('발걸음이 떨어지질 않아','Não consigo dar um passo.',e('발걸음이','os passos','발걸음 = passo/movimento dos pés; -이 sujeito.'),e('떨어지질 않아','não se desprendem','떨어지다 = separar-se/cair; -질 reduz -지를, com ênfase antes de 않다, negação.','발걸음이 떨어지지 않다 é a imagem dos pés que não saem do lugar, por peso, hesitação ou falta de ânimo.')),
l('벌써 늦은 것 같은데 말야','Parece que já estou atrasado, sabe?',e('벌써','já','Indica que algo aconteceu mais cedo do que se esperava.'),e('늦은 것 같은데','parece que estou atrasado','늦다 = estar atrasado; -은 것 같다 expressa impressão; -는데 introduz contexto/contraste.'),e('말야','sabe; estou dizendo','Redução coloquial de 말이야, usada para reforçar ou retomar o que se diz.')),
l('온 세상이 얄밉네','O mundo inteiro parece irritante.',e('온 세상이','o mundo inteiro','온 = inteiro/todo; 세상 = mundo; -이 sujeito.'),e('얄밉네','parece irritante; dá raiva','얄밉다 = ser antipático/irritante de um jeito que causa ressentimento; -네 marca constatação. A frase expressa o sentimento momentâneo do narrador.')),
];
const verse2=[
l('Yeah 곳곳에 덜컥거리는 과속방지턱','Sim, por toda parte, lombadas que me fazem chacoalhar.',e('곳곳에','em toda parte','곳곳 = vários lugares; -에 localiza.'),e('덜컥거리는','que provocam trancos','덜컥거리다 = produzir repetidamente um ruído ou movimento brusco; -는 modifica 과속방지턱.'),e('과속방지턱','lombada','과속 = excesso de velocidade; 방지 = prevenção; 턱 = ressalto. Aqui as lombadas também sugerem obstáculos no caminho.')),
l('맘은 구겨지고 말은 자꾸 없어져','Meu coração fica amassado e as palavras vão sumindo.',e('맘은 구겨지고','o coração fica amassado e','맘 reduz 마음, coração/mente; -은 tópico; 구겨지다 = ficar amarrotado; -고 liga. É uma imagem emocional.'),e('말은 자꾸 없어져','as palavras desaparecem repetidamente','말 = fala/palavra; -은 tópico; 자꾸 = repetidamente; 없어지다 = desaparecer, de 없다 + -어지다.')),
l('도대체 왜 나 열심히 뛰었는데','Afinal, por quê? Eu corri tanto,',e('도대체 왜','afinal, por quê','도대체 intensifica a pergunta; 왜 = por quê.'),e('나 열심히 뛰었는데','eu me esforcei correndo, mas','나 = eu; 열심히 = com empenho; 뛰다 = correr; -었- passado; -는데 destaca contraste com o resultado decepcionante.')),
l('오 내게 왜','oh, por que isso acontece comigo?',e('오 내게 왜','oh, por que comigo','오 = oh; 내게 = 나에게, a mim; 왜 = por quê. A ação fica implícita.')),
];
const pre=[
l('집에 와','Chego em casa,',e('집에 와','venho/chego em casa','집 = casa; -에 destino; 오다 → 와. Na sequência narrativa, lemos chego, embora a forma isolada também possa ser uma ordem para vir.')),
l('침대에 누워','deito na cama,',e('침대에 누워','deito na cama','침대 = cama; -에 lugar; 눕다 = deitar-se; 누워 mostra a irregularidade de ㅂ.')),
l('생각해봐','tento pensar:',e('생각해봐','tento pensar','생각하다 = pensar; -아/어 보다 = experimentar/tentar. Aqui continua a reflexão do narrador; a forma também serve como convite para pensar.')),
l('내 잘못이었을까','será que a culpa foi minha?',e('내 잘못이었을까','será que foi culpa minha','내 = meu; 잘못 = erro/culpa; -이었- é a cópula no passado; -(으)ㄹ까 expressa dúvida/reflexão.')),
l('어지러운 밤','Uma noite confusa.',e('어지러운 밤','noite confusa; vertiginosa','어지럽다 = sentir tontura/ser confuso; 어지러운 modifica 밤, noite, com mudança irregular de ㅂ para 우.')),
l('문득 시곌 봐','De repente, olho o relógio.',e('문득','de repente','Algo que ocorre subitamente.'),e('시곌 봐','olho o relógio','시곌 reduz 시계를, relógio + objeto; 보다 → 봐, olhar.')),
l('곧 12시','É quase meia-noite.',e('곧 12시','logo serão doze horas','곧 = em breve; 시 = hora. 12시 lê-se 열두 시; o título e o contexto noturno indicam meia-noite, não meio-dia.')),
];
const buildup=[
l('뭔가 달라질까','Será que algo vai mudar?',e('뭔가','algo','Forma reduzida de 무엇인가.'),e('달라질까','será que vai ficar diferente','다르다 = ser diferente; -아/어지다 = tornar-se; -(으)ㄹ까 expressa dúvida.')),
l('그런 건 아닐 거야','Provavelmente não é bem assim.',e('그런 건','quanto a algo assim','그런 = assim/desse tipo; 건 reduz 것은.'),e('아닐 거야','provavelmente não será','아니다 = não ser; -(으)ㄹ 거야 pode expressar previsão/conjectura.')),
l('그래도 이 하루가','Mesmo assim, este dia',e('그래도','mesmo assim','Introduz uma continuação que contrasta com a expectativa anterior.'),e('이 하루가','este dia','이 = este; 하루 = um dia; -가 sujeito. O verbo continua na linha seguinte.')),
l('끝나잖아','chega ao fim, você sabe.',e('끝나잖아','acaba, você sabe','끝나다 = chegar ao fim; -잖아 recorda algo que o ouvinte pode reconhecer. Completa 이 하루가.')),
l('초침과','Quando o ponteiro dos segundos',e('초침과','o ponteiro dos segundos e','초침 = ponteiro dos segundos; -과 liga ao nome na próxima linha.')),
l('분침이 겹칠 때','e o dos minutos se sobrepõem,',e('분침이','o ponteiro dos minutos','분침 = ponteiro dos minutos; -이 sujeito.'),e('겹칠 때','quando se sobrepõem','겹치다 = sobrepor-se; -(으)ㄹ 때 situa um acontecimento no tempo.')),
l('세상은 아주 잠깐 숨을 참아','o mundo prende a respiração por um breve instante.',e('세상은','o mundo','세상 = mundo; -은 tópico.'),e('아주 잠깐','por um instante muito breve','아주 = muito; 잠깐 = por um momento.'),e('숨을 참아','prende a respiração','숨 = respiração; -을 objeto; 참다 = conter/aguentar. O mundo é personificado na imagem da pausa.')),
en("Zero O'Clock",'Zero hora; meia-noite.'),
];
const happy=en('And you gonna be happy','E você vai ser feliz.');
const turn=en('Turn this all around','Vamos mudar tudo isso.');
const newLine=l('모든 게 새로운','Tudo se torna novo,',e('모든 게','todas as coisas; tudo','모든 = todo; 게 reduz 것이, coisa + sujeito.'),e('새로운','novo','새롭다 = ser novo; 새로운 é a forma que modifica um nome, aqui o horário Zero O’Clock na linha seguinte. A tradução explicita a renovação sugerida.'));
const zero=en("Zero O'Clock",'Zero hora; meia-noite.');
const chorus=[happy,happy,
l('막 내려앉은 저 눈처럼','Como aquela neve que acabou de pousar,',e('막 내려앉은','que acabou de pousar','막 = há pouco/acabou de; 내려앉다 = descer e assentar-se; -은 modifica 눈.'),e('저 눈처럼','como aquela neve','저 = aquela, mais distante; 눈 aqui é neve, não olho; -처럼 = como.')),
l('숨을 쉬자 처음처럼','vamos respirar como na primeira vez.',e('숨을 쉬자','vamos respirar','숨 = respiração; 쉬다 = respirar em 숨을 쉬다; -자 convida a fazer algo juntos.'),e('처음처럼','como na primeira vez','처음 = começo/primeira vez; -처럼 = como.')),
happy,happy,turn,newLine,zero,
];
const verse3=[
l('조금씩 박자가 미끄러져','Aos poucos, vou escapando do compasso.',e('조금씩','aos poucos','조금 = um pouco; -씩 distribui por pequenas quantidades/etapas.'),e('박자가 미끄러져','o compasso escorrega','박자 = compasso/ritmo; -가 sujeito; 미끄러지다 = escorregar. A tradução aproxima a imagem de perder o tempo da música.')),
l('쉬운 표정이 안 지어져','Nem uma expressão simples consigo fazer.',e('쉬운 표정이','uma expressão simples','쉽다 = ser fácil; 쉬운 modifica 표정, expressão facial, com irregularidade de ㅂ.'),e('안 지어져','não se forma','안 nega; 짓다 = fazer/formar, com irregularidade de ㅅ; 지어지다 apresenta a formação da expressão.')),
l('익숙한 가사 자꾸 잊어','Fico esquecendo letras que conheço bem.',e('익숙한 가사','letras familiares','익숙하다 = ser familiar; -ㄴ modifica 가사, letra de música.'),e('자꾸 잊어','esqueço repetidamente','자꾸 = repetidamente; 잊다 = esquecer. A partícula do objeto 가사 é omitida.')),
l('내 맘 같은 게 뭐 하나 없어','Não há uma única coisa que saia como eu queria.',e('내 맘 같은 게','algo como eu quero','내 = meu; 맘 = 마음, coração/vontade; 같다 = ser como; 게 = 것이. A expressão sugere corresponder à própria vontade.'),e('뭐 하나 없어','não há sequer uma coisa','뭐 = algo/o quê; 하나 = um; 없다 = não haver. No contexto negativo, a combinação reforça nenhuma coisa.')),
l('그래 다 지나간 일들이야','É, tudo isso já passou.',e('그래 다','é, tudo','그래 = sim/é isso; 다 = tudo.'),e('지나간 일들이야','são acontecimentos passados','지나가다 = passar; -ㄴ modifica 일, acontecimento; -들 plural; -이야 cópula informal.')),
l('혼잣말해도 참 쉽지 않아','Mesmo dizendo isso a mim mesmo, não é nada fácil.',e('혼잣말해도','mesmo falando sozinho','혼잣말하다 = falar consigo mesmo; -아/어도 expressa concessão.'),e('참 쉽지 않아','não é nada fácil','참 = realmente; 쉽다 = ser fácil; -지 않다 nega.')),
en('Is it my fault?','A culpa é minha?'),
en('Is it my wrong?','Fui eu que errei?'),
l('답이 없는','Sem resposta,',e('답이 없는','que não tem resposta','답 = resposta; -이 sujeito; 없다 = não haver; -는 modifica 메아리 na próxima linha.')),
l('나의 메아리만','só o meu eco.',e('나의 메아리만','somente o meu eco','나의 = meu; 메아리 = eco; -만 restringe. Junto à linha anterior: só o meu eco sem resposta.')),
];
const bridge=[
l('두 손 모아','Junto as duas mãos,',e('두 손 모아','reunindo as duas mãos','두 = dois antes de contador/nome; 손 = mão; 모으다 = juntar; 모아 perde ㅡ na conjugação. O objeto pode ficar sem partícula.')),
l('기도하네','e faço uma oração.',e('기도하네','faço uma oração','기도하다 = orar; -네 expressa percepção/constatação.')),
l('내일은 좀','Que amanhã eu possa',e('내일은 좀','amanhã, um pouco','내일 = amanhã; -은 tópico/contraste; 좀 reduz 조금 e suaviza o desejo que continua.')),
l('더 웃기를','sorrir um pouco mais.',e('더 웃기를','que eu sorria mais','더 = mais; 웃다 = sorrir; -기 nominaliza e -를 marca o conteúdo desejado. Em final de frase, -기를 pode expressar um desejo, com 바라다, desejar, implícito.')),
en('For me','Por mim.'),
l('좀 낫기를','Que as coisas melhorem um pouco.',e('좀 낫기를','que fique um pouco melhor','좀 = um pouco; 낫다 = ser melhor/melhorar; -기를 expressa desejo.','낫다 não é 낮다, ser baixo. O que deve melhorar fica implícito no contexto.')),
en('For me','Por mim.'),
];
const bridge2=[
l('이 노래가','Quando esta canção',e('이 노래가','esta canção','이 = esta; 노래 = canção; -가 sujeito. A condição continua na próxima linha.')),
l('끝이 나면','chegar ao fim,',e('끝이 나면','quando chegar ao fim','끝 = fim; 끝이 나다 = terminar; -(으)면 indica condição ou momento futuro.')),
l('새 노래가','uma nova canção',e('새 노래가','uma nova canção','새 = novo, antes de um nome; 노래 = canção; -가 sujeito.')),
l('시작되리','vai começar.',e('시작되리','começará','시작되다 = começar/ter início; -(으)리 é uma terminação literária de previsão ou convicção. Não é a forma cotidiana mais comum para falar do futuro.')),
l('좀 더 행복하기를 yeah','Que eu seja um pouco mais feliz, sim.',e('좀 더','um pouco mais','좀 = 조금; 더 = mais.'),e('행복하기를','que seja feliz','행복하다 = ser feliz; -기를 expressa desejo, com o verbo desejar implícito. O destinatário pode ampliar-se ao ouvinte; a seção parte do pedido por si mesmo.')),
];
const finalChorus=[happy,happy,
l('아주 잠깐 숨을 참고','Prendo a respiração por um breve instante,',e('아주 잠깐','por um instante muito breve','아주 = muito; 잠깐 = por um momento.'),e('숨을 참고','prendendo a respiração e','숨 = respiração; -을 objeto; 참다 = conter; -고 liga à ação seguinte.')),
l('오늘도 나를 토닥여','e hoje também dou um carinho em mim mesmo.',e('오늘도 나를','hoje também, a mim','오늘 = hoje; -도 = também; 나를 = a mim.'),e('토닥여','dou leves tapinhas; conforto','토닥이다 = dar leves tapinhas para acalmar/consolar. Aqui o próprio eu recebe o gesto: ofereço acolhimento a mim mesmo.')),
happy,happy,turn,newLine,zero,
];
export const zeroOclockSections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:verse1},{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre},{title:'Pré-refrão',lines:buildup},
{title:'Refrão',lines:chorus},{title:'Verso 3',lines:verse3},{title:'Pré-refrão',lines:pre},{title:'Pré-refrão',lines:buildup},
{title:'Refrão',lines:chorus},{title:'Ponte',lines:bridge},{title:'Ponte',lines:bridge2},{title:'Refrão',lines:finalChorus},
];
export const zeroOclockVocabulary={
verbs:[
{ko:'있다',pt:'existir; haver'},{ko:'슬프다',pt:'ser triste'},{ko:'무겁다',pt:'ser pesado'},{ko:'빼다',pt:'tirar; excluir'},
{ko:'바쁘다',pt:'estar ocupado'},{ko:'치열하다',pt:'ser intenso; acirrado'},{ko:'보이다',pt:'parecer; ser visto'},
{ko:'떨어지다',pt:'separar-se; cair'},{ko:'늦다',pt:'estar atrasado'},{ko:'얄밉다',pt:'ser irritante; antipático'},
{ko:'덜컥거리다',pt:'chacoalhar; produzir trancos'},{ko:'구겨지다',pt:'ficar amarrotado'},{ko:'없어지다',pt:'desaparecer'},
{ko:'뛰다',pt:'correr'},{ko:'오다',pt:'vir; chegar'},{ko:'눕다',pt:'deitar-se'},{ko:'생각하다',pt:'pensar'},
{ko:'어지럽다',pt:'ser confuso; sentir tontura'},{ko:'보다',pt:'ver; olhar'},{ko:'달라지다',pt:'ficar diferente'},
{ko:'끝나다',pt:'terminar'},{ko:'겹치다',pt:'sobrepor-se'},{ko:'참다',pt:'conter; aguentar'},{ko:'내려앉다',pt:'descer e pousar'},
{ko:'쉬다',pt:'respirar, em 숨을 쉬다'},{ko:'새롭다',pt:'ser novo'},{ko:'미끄러지다',pt:'escorregar'},
{ko:'쉽다',pt:'ser fácil'},{ko:'짓다',pt:'formar; fazer'},{ko:'익숙하다',pt:'ser familiar'},{ko:'잊다',pt:'esquecer'},
{ko:'없다',pt:'não haver'},{ko:'지나가다',pt:'passar'},{ko:'혼잣말하다',pt:'falar consigo mesmo'},
{ko:'모으다',pt:'juntar'},{ko:'기도하다',pt:'orar'},{ko:'웃다',pt:'sorrir'},{ko:'낫다',pt:'ser melhor; melhorar'},
{ko:'시작되다',pt:'começar; ter início'},{ko:'행복하다',pt:'ser feliz'},{ko:'토닥이다',pt:'dar tapinhas de consolo; acolher'},
],
nouns:[
{ko:'날',pt:'dia'},{ko:'이유',pt:'motivo'},{ko:'몸',pt:'corpo'},{ko:'발걸음',pt:'passo'},{ko:'세상',pt:'mundo'},
{ko:'과속방지턱',pt:'lombada'},{ko:'맘',pt:'coração; mente (마음)'},{ko:'말',pt:'palavra; fala'},
{ko:'집',pt:'casa'},{ko:'침대',pt:'cama'},{ko:'잘못',pt:'erro; culpa'},{ko:'밤',pt:'noite'},{ko:'시계',pt:'relógio'},
{ko:'하루',pt:'um dia'},{ko:'초침',pt:'ponteiro dos segundos'},{ko:'분침',pt:'ponteiro dos minutos'},{ko:'숨',pt:'respiração'},
{ko:'눈',pt:'neve (neste contexto)'},{ko:'처음',pt:'primeira vez; começo'},{ko:'박자',pt:'compasso; ritmo'},
{ko:'표정',pt:'expressão facial'},{ko:'가사',pt:'letra de música'},{ko:'일',pt:'acontecimento; assunto'},
{ko:'답',pt:'resposta'},{ko:'메아리',pt:'eco'},{ko:'손',pt:'mão'},{ko:'내일',pt:'amanhã'},
{ko:'노래',pt:'canção'},{ko:'끝',pt:'fim'},
]};
