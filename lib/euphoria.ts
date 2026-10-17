import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const verse1=[
l('너는 내 삶에 다시 뜬 햇빛','Você é a luz do sol que voltou a nascer na minha vida.',e('너는 내 삶에','você, na minha vida','너 = você; -는 tópico; 내 = meu; 삶 = vida, nome ligado a 살다; -에 situa.'),e('다시 뜬 햇빛','a luz do sol que voltou a nascer','다시 = novamente; 뜨다 = nascer/surgir, falando de astros; 뜬 modifica 햇빛, luz solar. A cópula é omitida nesta imagem poética.')),
l('어린 시절 내 꿈들의 재림','O retorno dos meus sonhos de infância.',e('어린 시절','na infância','어리다 = ser jovem/criança; 어린 modifica 시절, época da vida.'),e('내 꿈들의 재림','o retorno dos meus sonhos','내 = meu; 꿈 = sonho; -들 plural; -의 = de; 재림 = segunda vinda/retorno, aqui uma imagem para sonhos que voltam à vida.')),
l('모르겠어이 감정이 뭔지','Não sei o que é este sentimento.',e('모르겠어이','não sei; este','A sequência enviada junta 모르겠어 이: 모르다 = não saber; -겠- aqui suaviza a declaração de incerteza; 이 = este.'),e('감정이 뭔지','o que é o sentimento','감정 = sentimento; -이 sujeito; 뭔지 reduz 무엇인지. -(이)ㄴ지 forma uma pergunta indireta dependente de 모르겠어.')),
l('혹시 여기도 꿈속 인건지','Será que este lugar também está dentro de um sonho?',e('혹시 여기도','será que aqui também','혹시 introduz possibilidade/dúvida; 여기 = aqui; -도 = também.'),e('꿈속 인건지','se é dentro de um sonho','꿈속 = dentro de um sonho; a escrita mais clara é 꿈속인 건지.','-인 é a cópula que modifica 것; 건지 reduz 것인지, formulando uma dúvida indireta.')),
l('꿈은 사막의 푸른 신기루','O sonho é uma miragem azul em pleno deserto.',e('꿈은','quanto ao sonho','꿈 = sonho; -은 tópico.'),e('사막의 푸른 신기루','uma miragem azul do deserto','사막 = deserto; -의 liga; 푸르다 = ser azul/verde, conforme o contexto; 푸른 modifica 신기루, miragem. A tradução azul é contextual.')),
l('내 안 깊은 곳의 a priori','Um a priori no lugar mais profundo dentro de mim.',e('내 안 깊은 곳의','de um lugar profundo dentro de mim','내 = meu; 안 = interior; 깊다 = ser profundo; 깊은 modifica 곳, lugar; -의 liga à expressão seguinte.','a priori é uma expressão latina, não uma palavra coreana: algo pensado como anterior ou independente da experiência. Na letra, a relação é poética, sem desenvolver uma tese filosófica.')),
l('숨이 막힐 듯이 행복해져','Fico tão feliz que parece faltar o ar.',e('숨이 막힐 듯이','como se a respiração fosse parar','숨 = respiração; -이 sujeito; 막히다 = ficar bloqueado; -(으)ㄹ 듯이 = como se. É uma imagem de intensidade.'),e('행복해져','fico feliz; torno-me feliz','행복하다 = ser feliz; -아/어지다 indica mudança de estado.')),
l('주변이 점점 더 투명 해져','Tudo ao redor fica cada vez mais transparente.',e('주변이','os arredores','주변 = entorno; -이 sujeito.'),e('점점 더','cada vez mais','점점 indica progressão; 더 = mais.'),e('투명 해져','torna-se transparente','투명하다 = ser transparente; -아/어지다 = tornar-se; a forma unida é 투명해져.')),
];
const pre=[
l('저기 멀리서 바다가 들려','Lá longe, ouço o mar.',e('저기 멀리서','lá, de longe','저기 = ali/lá; 멀리 = longe; -서 reduz -에서 e indica origem do som.'),e('바다가 들려','o mar se faz ouvir','바다 = mar; -가 sujeito; 들리다 = ser ouvido. Em português, soa mais natural ouço o mar.')),
l('꿈을 건너서 수풀 너머로','Atravessando o sonho, para além da vegetação,',e('꿈을 건너서','atravessando o sonho','꿈 = sonho; -을 objeto; 건너다 = atravessar; -어서 liga o trajeto à continuação.'),e('수풀 너머로','para além da vegetação densa','수풀 = mata/vegetação densa; 너머 = o outro lado, além; -(으)로 indica direção.')),
l('선명 해지는 그곳으로가','vou àquele lugar que fica cada vez mais nítido.',e('선명 해지는','que fica nítido','선명하다 = ser nítido; -아/어지다 = tornar-se; -는 modifica 그곳. A forma unida é 선명해지는.'),e('그곳으로가','vou àquele lugar','그곳 = aquele lugar; -(으)로 direção; 가 vem de 가다. A separação é 그곳으로 가. O sujeito é implícito; a forma também permite um convite conforme a leitura.')),
];
const take=en('Take my hands now','Segure minhas mãos agora.');
const cause=en('You are the cause of my euphoria','Você é a razão da minha euforia.');
const eup=en('Euphoria','Euforia.');
const close=en('Close the door now','Feche a porta agora.');
const utopia=en("When I'm with you I'm in utopia",'Quando estou com você, estou numa utopia.');
const chorus1=[take,cause,eup,eup,take,cause];
const post=[eup,eup,take,cause,eup,eup,close,utopia];
const verse2=[
l('무지개처럼 지워진 꿈을 찾아 헤맸 을까','Será que vaguei procurando o sonho apagado como um arco-íris?',e('무지개처럼 지워진 꿈을','o sonho apagado como um arco-íris','무지개 = arco-íris; -처럼 = como; 지워지다 = ser apagado; -ㄴ modifica 꿈, sonho; -을 objeto. A comparação evoca algo que desaparece.'),e('찾아 헤맸 을까','será que vaguei procurando?','찾다 = procurar; 헤매다 = vagar sem rumo; 찾아 헤매다 = vagar à procura de algo.','A forma unida é 헤맸을까: passado -었- com -(으)ㄹ까, uma reflexão/pergunta sobre o que aconteceu.')),
l('운명 같은 흔한 말과 달라','É diferente de palavras comuns como “destino”.',e('운명 같은 흔한 말과','de palavras comuns como destino','운명 = destino; 같다 = ser como; 같은 modifica 말; 흔하다 = ser comum; 흔한 também modifica 말, palavra; -과 introduz a comparação.'),e('달라','é diferente','다르다 → 달라, com irregularidade de 르. -과 다르다 significa ser diferente de.')),
l('아픈 너의 눈빛이 나와 같은 곳을 보는 걸','Percebo que seu olhar ferido olha para o mesmo lugar que eu.',e('아픈 너의 눈빛이','seu olhar dolorido','아프다 = doer/estar ferido; 아픈 modifica 너의 눈빛, seu olhar; -이 sujeito.'),e('나와 같은 곳을','para o mesmo lugar que eu','나와 = comigo/em relação a mim; 같은 = igual; 곳 = lugar; -을 objeto de 보다.'),e('보는 걸','vejo/percebo que olha','보다 = ver/olhar; -는 modifica 것; 걸 é forma reduzida. Aqui a frase final pode apresentar uma constatação, com sentido próximo de -는걸; não é uma ordem.')),
en("Won't you please stay in dreams",'Por favor, fique nos sonhos.'),
];
const chorus2=[eup,eup,take,cause];
const bridge=[
l('모래 바닥이 갈라진 대도','Mesmo que o chão de areia se abra,',e('모래 바닥이','o chão de areia','모래 = areia; 바닥 = chão/fundo; -이 sujeito.'),e('갈라진 대도','mesmo que se abra em fendas','갈라지다 = rachar/separar-se; a separação enviada corresponde provavelmente a 갈라진대도.','-ㄴ대도 reduz -ㄴ다고 해도 e expressa concessão hipotética: mesmo que aconteça. Não confundir 대도 com um nome separado.')),
l('그 누가이 세겔 흔들어도','mesmo que alguém abale este mundo,',e('그 누가이','seja quem for, este','A junção enviada pode ser separada como 그 누가 이: 누가 = quem/alguém como sujeito; 그 reforça a expressão; 이 = este.'),e('세겔 흔들어도','mesmo que abale o mundo','세겔 contrai 세계를, mundo + objeto; 흔들다 = abalar/sacudir; -어도 expressa concessão.')),
l('잡은 손 절대 놓지 말아 줘','Por favor, nunca solte a mão que segurou.',e('잡은 손','a mão que segurou','잡다 = segurar; -은 modifica 손, mão. O possuidor e o sujeito de 잡다 ficam implícitos.'),e('절대 놓지 말아 줘','por favor, não solte de jeito nenhum','절대 com negação = nunca/de modo algum; 놓다 = soltar; -지 말다 = não fazer.','-아 주다 acrescenta o pedido em benefício do falante; -줘 torna o pedido informal.')),
l('제발 꿈에서 깨어나지 마','Por favor, não acorde deste sonho.',e('제발','por favor; eu imploro','Intensifica um pedido.'),e('꿈에서 깨어나지 마','não desperte do sonho','꿈 = sonho; -에서 indica o estado de que se sai; 깨어나다 = despertar; -지 마 faz um pedido negativo/proibição informal.')),
];
const preFinal=[
l('저기 멀리서 바다가 들려 (들려)','Lá longe, ouço o mar (ouço).',...(pre[0].entries ?? []),e('들려','ouço; faz-se ouvir','Repetição de 들리다 como resposta vocal.')),
l('꿈을 건너서 수풀 너머로 (제발 꿈에서 깨어나지 마)','Atravessando o sonho, para além da vegetação (por favor, não acorde deste sonho).',...(pre[1].entries ?? []),...(bridge[3].entries ?? [])),
l('선명해지는 그곳으로 가','vou àquele lugar que fica cada vez mais nítido.',e('선명해지는','que fica nítido','선명하다 + -아/어지다 indica tornar-se nítido; -는 modifica o lugar seguinte.'),e('그곳으로 가','vou àquele lugar','그곳 = aquele lugar; -(으)로 direção; 가다 = ir. O sujeito permanece implícito.')),
];
const final1=[en('Yeah yeah yeah yeah yeah yeah','Sim, sim, sim…'),en('Euphoria (euphoria, oh oh)','Euforia (euforia, oh, oh).'),take,cause];
const final2=[
en('Yeah yeah yeah yeah yeah yeah (yeah yeah yeah yeah)','Sim, sim, sim… (sim, sim…).'),
en('Yeah yeah yeah yeah yeah yeah (hu hu)','Sim, sim, sim… (hu, hu).'),eup,
en('Yeah yeah yeah yeah yeah yeah (ohhh)','Sim, sim, sim… (oh).'),
en('Close the door now (door now)','Feche a porta agora (a porta, agora).'),
en("When I'm with you, I'm in utopia",'Quando estou com você, estou numa utopia.'),
];
export const euphoriaSections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:verse1},{title:'Pré-refrão',lines:pre},{title:'Refrão',lines:chorus1},{title:'Pós-refrão',lines:post},
{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre},{title:'Refrão',lines:[take,cause,...chorus2]},
{title:'Ponte',lines:bridge},{title:'Pré-refrão',lines:preFinal},{title:'Refrão',lines:[take,cause,...final1]},{title:'Final',lines:final2},
];
export const euphoriaVocabulary={
verbs:[
{ko:'살다',pt:'viver'},{ko:'뜨다',pt:'nascer; surgir (sol/astros)'},{ko:'어리다',pt:'ser jovem; ser criança'},
{ko:'모르다',pt:'não saber'},{ko:'푸르다',pt:'ser azul ou verde, conforme o contexto'},{ko:'깊다',pt:'ser profundo'},
{ko:'막히다',pt:'ficar bloqueado'},{ko:'행복하다',pt:'ser feliz'},{ko:'투명하다',pt:'ser transparente'},
{ko:'들리다',pt:'ser ouvido'},{ko:'건너다',pt:'atravessar'},{ko:'선명하다',pt:'ser nítido'},{ko:'가다',pt:'ir'},
{ko:'지워지다',pt:'ser apagado'},{ko:'찾다',pt:'procurar; encontrar'},{ko:'헤매다',pt:'vagar sem rumo'},
{ko:'같다',pt:'ser igual; ser como'},{ko:'흔하다',pt:'ser comum'},{ko:'다르다',pt:'ser diferente'},{ko:'아프다',pt:'doer; estar ferido'},
{ko:'보다',pt:'ver; olhar'},{ko:'갈라지다',pt:'rachar; abrir-se em fendas'},{ko:'흔들다',pt:'abalar; sacudir'},
{ko:'잡다',pt:'segurar'},{ko:'놓다',pt:'soltar; deixar'},{ko:'깨어나다',pt:'acordar; despertar'},
],
nouns:[
{ko:'삶',pt:'vida'},{ko:'햇빛',pt:'luz do sol'},{ko:'시절',pt:'época da vida'},{ko:'꿈',pt:'sonho'},{ko:'재림',pt:'retorno; segunda vinda'},
{ko:'감정',pt:'sentimento'},{ko:'꿈속',pt:'interior de um sonho'},{ko:'사막',pt:'deserto'},{ko:'신기루',pt:'miragem'},
{ko:'안',pt:'interior'},{ko:'곳',pt:'lugar'},{ko:'숨',pt:'respiração'},{ko:'주변',pt:'arredores; entorno'},
{ko:'바다',pt:'mar'},{ko:'수풀',pt:'mata; vegetação densa'},{ko:'너머',pt:'o outro lado; além'},
{ko:'무지개',pt:'arco-íris'},{ko:'운명',pt:'destino'},{ko:'말',pt:'palavra; fala'},{ko:'눈빛',pt:'olhar; expressão dos olhos'},
{ko:'모래',pt:'areia'},{ko:'바닥',pt:'chão; fundo'},{ko:'세계',pt:'mundo'},{ko:'손',pt:'mão'},
]};
