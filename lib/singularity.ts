import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
export const singularitySections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:[
l('무언가 깨지는 소리','O som de algo se quebrando.',e('무언가','algo','Forma indefinida relacionada a 무엇인가; não identifica o que está quebrando.'),e('깨지는 소리','som de algo se quebrando','깨지다 = quebrar-se; -는 modifica 소리, som. Diferente de 깨다, quebrar algo.')),
l('난 문득 잠에서 깨','De repente, acordo do sono.',e('난 문득','eu, de repente','난 = 나는; 문득 = subitamente.'),e('잠에서 깨','acordo do sono','잠 = sono; -에서 indica o estado de que se sai; 깨다 = acordar. Aqui 깨 tem outro sentido que o de quebrar algo.')),
l('낮설음 가득한 소리','Um som cheio de estranheza.',e('낮설음','estranheza; falta de familiaridade','Grafia enviada com possível erro: o adjetivo padrão é 낯설다, não 낮설다. A nominalização padrão é 낯섦; 낯설음 também aparece informalmente.'),e('가득한 소리','som cheio de algo','가득하다 = estar cheio; -ㄴ modifica 소리, som. A estranheza completa aquilo de que o som está cheio.')),
l('귀를 막아 보지만 잠엘 들지 못해','Tento tapar os ouvidos, mas não consigo dormir.',e('귀를 막아 보지만','tento tapar os ouvidos, mas','귀 = ouvido; -를 objeto; 막다 = bloquear/tapar; -아 보다 = tentar; -지만 = mas.'),e('잠엘 들지 못해','não consigo pegar no sono','잠에 들다 = adormecer; a grafia enviada 잠엘 tem um ㄹ adicional em relação à expressão padrão 잠에.','들다 aqui é entrar num estado; -지 못하다 indica incapacidade. Não é simplesmente uma escolha de não dormir.')),
]},
{title:'Verso 2',lines:[
l('목이 자꾸 아파와','Minha garganta fica doendo repetidamente.',e('목이','a garganta','목 = garganta/pescoço; -이 sujeito. A menção à voz favorece garganta neste contexto.'),e('자꾸 아파와','continua a doer; a dor vem','자꾸 = repetidamente; 아프다 = doer; -아/어 오다 sugere que o estado vem se desenvolvendo ou se aproxima do falante.')),
l('감싸 보려하지만','Tento envolvê-la, mas…',e('감싸 보려하지만','tento envolver/proteger, mas','감싸다 = envolver, cobrir ou proteger; -아 보다 = tentar; -(으)려 하다 = ter intenção/tentar fazer; -지만 = mas.','A escrita com espaços mais claros seria 감싸 보려 하지만; o objeto, a garganta, fica implícito.')),
l('나에겐 목소리가','Quanto a mim, uma voz…',e('나에겐','para mim; no meu caso','Contração de 나에게는; -에게 indica a pessoa e -는 cria contraste.'),e('목소리가','uma voz','목소리 = voz; -가 sujeito. A negação aparece na linha seguinte; juntas, as linhas dizem não tenho voz.')),
l('없어 오늘도 그 소릴 들어','não tenho. Hoje também ouço aquele som.',e('없어','não há; não tenho','없다 completa 목소리가 da linha anterior. Não é uma ordem para ficar sem voz.'),e('오늘도 그 소릴','hoje também, aquele som','오늘 = hoje; -도 = também; 그 = aquele; 소릴 contrai 소리를, som + objeto.'),e('들어','ouço','듣다 = ouvir; 들어 mostra a irregularidade de ㄷ. Não é o verbo 들다, entrar, da expressão 잠에 들다.')),
]},
{title:'Refrão',lines:[
l('또 울리고있어 그 소리가','Aquele som está ecoando de novo.',e('또 울리고있어','está ressoando de novo','또 = novamente; 울리다 = ressoar; -고 있다 indica ação em andamento. A separação padrão é 울리고 있어.'),e('그 소리가','aquele som','그 = aquele; 소리 = som; -가 sujeito. O sujeito vem depois do verbo por ordem poética.')),
l('이얼어 붙은 호수에 또 금이 가','Neste lago congelado, surge outra rachadura.',e('이얼어 붙은 호수에','neste lago congelado','A sequência enviada pode ser separada como 이 얼어붙은 호수에: 이 = este; 얼어붙다 = congelar; -은 modifica 호수, lago; -에 situa.'),e('또 금이 가','surge outra rachadura','또 = de novo; 금 = rachadura neste contexto; 금이 가다 = rachar. 금 também pode significar ouro, mas não aqui.')),
l('그 호수에 내가 날 버렸잖아','Foi naquele lago que eu abandonei a mim mesmo, você sabe.',e('그 호수에','naquele lago','그 = aquele; 호수 = lago; -에 indica o lugar em que o eu é deixado.'),e('내가 날 버렸잖아','eu abandonei a mim mesmo, você sabe','내가 = eu + sujeito; 날 = 나를, a mim; 버리다 = abandonar; -었- passado.','-잖아 recorda ou insiste em algo tratado como sabido; aqui reforça a admissão do próprio abandono.')),
l('내 목소릴 널 위해 묻었 잖아','Eu enterrei minha voz por você, você sabe.',e('내 목소릴','minha voz','내 = meu; 목소릴 contrai 목소리를.'),e('널 위해','por você; em seu benefício','널 = 너를; 위해 vem de 위하다.'),e('묻었 잖아','enterrei, você sabe','묻다 aqui é enterrar; a escrita unida é 묻었잖아. -었- passado; -잖아 recorda/insiste.','Não é 묻다 no sentido de perguntar: esse sentido apresenta formas como 물었어.')),
]},
{title:'Verso 3',lines:[
l('날 버린 겨울 호수 위로','Sobre o lago de inverno em que abandonei a mim mesmo,',e('날 버린','em que abandonei a mim mesmo','날 = 나를; 버리다 = abandonar; -ㄴ modifica o nome seguinte. O contexto anterior identifica o próprio eu como quem abandona.'),e('겨울 호수 위로','sobre o lago de inverno','겨울 = inverno; 호수 = lago; 위 = parte de cima; -(으)로 indica direção/extensão sobre uma superfície.')),
l('두꺼운 얼음이 얼었네','formou-se uma camada espessa de gelo.',e('두꺼운 얼음이','gelo espesso','두껍다 = ser grosso/espesso; 두꺼운 modifica 얼음, gelo, com irregularidade de ㅂ; -이 sujeito.'),e('얼었네','congelou; formou-se pelo congelamento','얼다 = congelar; -었- passado; -네 expressa uma percepção ou constatação. 얼음이 얼다 literalmente é o gelo congelou.')),
l('잠시 들어간 꿈 속에도','Mesmo no sonho em que entrei por um instante,',e('잠시 들어간','em que entrei brevemente','잠시 = por um instante; 들어가다 = entrar; -ㄴ modifica 꿈.'),e('꿈 속에도','até dentro do sonho','꿈 = sonho; 속 = interior; -에 localiza; -도 acrescenta mesmo/também. A forma composta usual é 꿈속.')),
l('나를 괴롭히는 환상 통은 여전해','a dor fantasma que me atormenta continua a mesma.',e('나를 괴롭히는','que me atormenta','나를 = a mim; 괴롭히다 = atormentar; -는 modifica o nome seguinte.'),e('환상 통은','quanto à dor fantasma','A separação enviada 환상 통 corresponde provavelmente ao nome 환상통, escrito junto. Não é simplesmente uma fantasia ou uma alucinação.','O Instituto Nacional da Língua Coreana registra 환상통 como uma única palavra. Na imagem poética, a dor pode persistir em torno da voz/do eu perdido; essa relação é uma interpretação do contexto.'),e('여전해','continua a mesma','여전하다 = permanecer como antes.')),
]},
{title:'Ponte',lines:[
l('나는 날 잃은 걸까','Será que perdi a mim mesmo?',e('나는 날','eu, a mim mesmo','나는 marca o tópico; 날 = 나를, objeto.'),e('잃은 걸까','será que perdi?','잃다 = perder; -은 modifica 것; 걸까 contrai 것일까 e formula uma reflexão.')),
l('아님 널 잃은 걸까','Ou será que perdi você?',e('아님 널','ou você','아님 contrai 아니면, ou então; 널 = 너를.'),e('잃은 걸까','será que perdi?','Repete 잃다 + -은 것일까, agora com você como objeto.')),
l('나 문득 호수로 달려가','De repente, corro para o lago.',e('나 문득','eu, de repente','나 = eu, com partícula omitida; 문득 = subitamente.'),e('호수로 달려가','corro para o lago','호수 = lago; -(으)로 indica direção; 달려가다 = ir correndo.')),
l('오그 속에 내 얼굴있어','Oh, lá dentro está meu rosto.',e('오그 속에','oh, dentro dele','A junção enviada pode ser lida como 오, 그 속에: 오 = oh; 그 = aquele; 속 = interior; -에 localiza. Não é uma palavra única 오그.'),e('내 얼굴있어','meu rosto está lá','내 = meu; 얼굴 = rosto; 있다 = estar. A separação é 내 얼굴 있어, com sujeito omitido após 얼굴. O lago sugere a imagem refletida.')),
]},
{title:'Verso 4',lines:[
l('부탁해 아무 말도하지 마','Eu imploro: não diga nada.',e('부탁해','peço; imploro','부탁하다 = pedir um favor; informal.'),e('아무 말도하지 마','não diga palavra alguma','아무 말도 com negação significa nenhuma palavra; 하다 = fazer/dizer; -지 마 é pedido negativo/proibição informal. A separação clara é 아무 말도 하지 마.')),
l('입을 막으려 손을 뻗어 보지만','Estendo a mão para tapar a boca, mas…',e('입을 막으려','para tapar a boca','입 = boca; -을 objeto; 막다 = bloquear/tapar; -(으)려 indica intenção/finalidade. A pessoa cuja boca é tapada não é explícita.'),e('손을 뻗어 보지만','tento estender a mão, mas','손 = mão; -을 objeto; 뻗다 = estender; -어 보다 = tentar; -지만 = mas.')),
l('보지만 결국 엔 언젠가 봄이와','Mas, no fim, em algum momento a primavera chega.',e('보지만','tento, mas','Retoma -어 보다 da linha anterior; não precisa significar olhar aqui.'),e('결국 엔 언젠가','no fim, em algum momento','결국 = afinal/no fim; 결국 엔 é normalmente escrito 결국엔, redução de 결국에는; 언젠가 = algum dia.'),e('봄이와','a primavera chega','봄 = primavera; -이 sujeito; 오다 = vir/chegar; separação: 봄이 와.')),
l('얼음들은 녹아 내려 흘러 가','O gelo derrete e vai escorrendo.',e('얼음들은','quanto ao gelo','얼음 = gelo; -들 plural; -은 tópico. Em português, o nome de massa gelo costuma ficar no singular.'),e('녹아 내려','derrete e escorre para baixo','녹다 = derreter; 내리다 = descer; 녹아내리다 combina as ideias de derreter e escorrer.'),e('흘러 가','vai fluindo','흐르다 = fluir; 흘러 mostra a irregularidade de 르; -아/어 가다 sugere movimento para longe ou progressão. A forma composta usual é 흘러가다.')),
]},
{title:'Final',lines:[
l('Tell me 내 목소리가 가짜라면','Diga: se minha voz fosse falsa,',e('내 목소리가','minha voz','내 = meu; 목소리 = voz; -가 sujeito.'),e('가짜라면','se fosse falsa','가짜 = algo falso; -(이)라면 cria uma hipótese com nome + cópula. É uma pergunta hipotética, não a afirmação de que a voz é falsa.')),
l('날 버리지 말았어야했는지','se eu não deveria ter abandonado a mim mesmo.',e('날 버리지','abandonar a mim mesmo','날 = 나를; 버리다 = abandonar; -지 liga ao auxiliar negativo 말다.'),e('말았어야했는지','se não deveria ter feito','-지 말았어야 하다 expressa avaliação retrospectiva: deveria não ter feito.','-는지 forma uma pergunta indireta dependente de Tell me; a separação é 말았어야 했는지.')),
l('Tell me 고통조차 가짜라면','Diga: se até a dor fosse falsa,',e('고통조차','até mesmo a dor','고통 = dor/sofrimento; -조차 inclui um caso extremo, até aquilo que pareceria mais evidente.'),e('가짜라면','se fosse falsa','Repete a condição hipotética 가짜 + -(이)라면.')),
l('그 때 내가 무얼해야했는지','o que eu deveria ter feito naquela hora.',e('그 때 내가','eu, naquele momento','그때, naquele momento, é normalmente escrito junto; 내가 = eu + sujeito.'),e('무얼해야했는지','o que deveria ter feito','무얼 contrai 무엇을; 하다 = fazer; -았/었어야 하다 avalia o que deveria ter ocorrido; -는지 cria pergunta indireta.','A separação clara é 무얼 해야 했는지; completa Tell me da linha anterior.')),
]},
];
export const singularityVocabulary={
verbs:[
{ko:'깨지다',pt:'quebrar-se'},{ko:'깨다',pt:'acordar (neste contexto)'},{ko:'낯설다',pt:'ser estranho; pouco familiar'},
{ko:'가득하다',pt:'estar cheio'},{ko:'막다',pt:'tapar; bloquear'},{ko:'들다',pt:'entrar num estado; adormecer em 잠에 들다'},
{ko:'아프다',pt:'doer'},{ko:'감싸다',pt:'envolver; proteger'},{ko:'없다',pt:'não haver; não ter'},{ko:'듣다',pt:'ouvir'},
{ko:'울리다',pt:'ressoar'},{ko:'얼어붙다',pt:'congelar por completo'},{ko:'가다',pt:'ir; em 금이 가다, rachar'},
{ko:'버리다',pt:'abandonar'},{ko:'묻다',pt:'enterrar (neste contexto)'},{ko:'두껍다',pt:'ser espesso'},{ko:'얼다',pt:'congelar'},
{ko:'들어가다',pt:'entrar'},{ko:'괴롭히다',pt:'atormentar'},{ko:'여전하다',pt:'continuar como antes'},{ko:'잃다',pt:'perder'},
{ko:'달려가다',pt:'ir correndo'},{ko:'있다',pt:'estar; existir'},{ko:'부탁하다',pt:'pedir um favor'},{ko:'뻗다',pt:'estender'},
{ko:'오다',pt:'vir; chegar'},{ko:'녹아내리다',pt:'derreter e escorrer'},{ko:'흘러가다',pt:'fluir; ir escorrendo'},
{ko:'하다',pt:'fazer; dizer em 말하다'},
],
nouns:[
{ko:'소리',pt:'som'},{ko:'잠',pt:'sono'},{ko:'낯섦',pt:'estranheza; falta de familiaridade (forma padrão)'},
{ko:'귀',pt:'ouvido'},{ko:'목',pt:'garganta; pescoço'},{ko:'목소리',pt:'voz'},{ko:'호수',pt:'lago'},
{ko:'금',pt:'rachadura (neste contexto)'},{ko:'겨울',pt:'inverno'},{ko:'얼음',pt:'gelo'},{ko:'꿈',pt:'sonho'},
{ko:'환상통',pt:'dor fantasma'},{ko:'속',pt:'interior'},{ko:'얼굴',pt:'rosto'},{ko:'말',pt:'palavra; fala'},
{ko:'입',pt:'boca'},{ko:'손',pt:'mão'},{ko:'봄',pt:'primavera'},{ko:'가짜',pt:'algo falso; falsificação'},{ko:'고통',pt:'dor; sofrimento'},
]};
