import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const verse1=[
l('꼭꼭 숨었다가 웃으면 나타나','Ficam bem escondidas e aparecem quando você sorri.',e('꼭꼭 숨었다가','ficam bem escondidas e depois','꼭꼭 reforça a ideia de esconder cuidadosamente; 숨다 = esconder-se; -었다가 marca a passagem de um estado/ação para outro.'),e('웃으면 나타나','aparecem quando sorri','웃다 = sorrir/rir; -(으)면 = se/quando; 나타나다 = aparecer. As covinhas são o sujeito implícito de esconder-se e aparecer.')),
l('어디서 온 걸까','De onde será que vieram?',e('어디서','de onde','Contração de 어디에서, origem.'),e('온 걸까','será que vieram','오다 = vir; 온 modifica 것; 걸까 reduz 것일까 e expressa dúvida/reflexão.')),
l('거짓말하지마 천사가 맞잖아','Não minta: você é mesmo um anjo, vai.',e('거짓말하지마','não minta','거짓말하다 = mentir; -지 마 é pedido negativo/proibição informal. A separação clara é 거짓말하지 마.'),e('천사가 맞잖아','é mesmo um anjo, você sabe','천사 = anjo; -가 sujeito; 맞다 aqui é estar correto/ser isso mesmo; -잖아 insiste em algo tratado como evidente. É um elogio figurado.')),
l('니 정체가 뭐야','Afinal, quem é você de verdade?',e('니 정체가','sua verdadeira identidade','니 é forma coloquial de 네, seu; 정체 = identidade/natureza real; -가 sujeito.'),e('뭐야','o que é?','뭐 = 무엇, o quê; -야 é cópula informal. A pergunta intensifica a surpresa diante do encanto.')),
];
const pre1=[
en('But you','Mas você…'),
l('그 미소는 잔인하다 못해','Esse sorriso vai além de cruel…',e('그 미소는','esse sorriso','그 = esse; 미소 = sorriso; -는 tópico.'),e('잔인하다 못해','vai além de ser cruel','잔인하다 = ser cruel; -다 못해 indica que um grau é ultrapassado, frequentemente levando a algo ainda mais intenso.','A continuação é o inglês Cruel, que repete a ideia para ênfase. Não é simplesmente 못하다 como incapacidade de agir.')),
en('Cruel','Cruel.'),
l('그 볼을 못 봤어야 해','Eu não deveria ter visto essas bochechas.',e('그 볼을','essas bochechas','그 = essas; 볼 = bochecha; -을 objeto. 볼 aqui é nome, não uma forma de 보다.'),e('못 봤어야 해','seria melhor não ter visto','못 보다 = não conseguir/ver impedido; -았/었어야 하다 faz uma avaliação retrospectiva do que deveria ter ocorrido.','No contexto, expressa arrependimento por ter visto e se encantado, não uma ordem dirigida ao ouvinte.')),
en('You','Você…'),
l('사실 진짜 위험한 건','Na verdade, o que é realmente perigoso',e('사실 진짜','na verdade, realmente','사실 = na verdade; 진짜 = realmente/de verdade.'),e('위험한 건','quanto ao que é perigoso','위험하다 = ser perigoso; -ㄴ modifica 것; 건 reduz 것은. A explicação continua na linha seguinte.')),
l('너에게만 있는 거야','é algo que só você tem.',e('너에게만','somente em você; só para você','너 = você; -에게 indica a pessoa associada; -만 restringe.'),e('있는 거야','é algo que existe/está','있다 = existir/ter; -는 modifica 것; 거야 reduz 것이야 e apresenta uma explicação. Aqui: algo presente somente em você.')),
];
const chorus=[
l('그 보조갠 illegal','Essas covinhas são ilegais.',e('그 보조갠','quanto a essas covinhas','그 = essas; 보조개 = covinha, especialmente na bochecha; 보조갠 reduz 보조개는.','illegal significa ilegal. A letra exagera o encanto das covinhas como se fosse proibido; não descreve uma infração real.')),
l('안돼 위험해 oh yes','Não pode, é perigoso, oh, sim.',e('안돼','não pode; isso não dá','Neste sentido de proibição/impossibilidade, a separação padrão é 안 돼, negação 안 + 돼 de 되다.'),e('위험해','é perigoso','위험하다 = ser perigoso; informal. O perigo é uma imagem de atração intensa.')),
en('So I call you illegirl','Por isso te chamo de “illegirl”: um jogo entre illegal e girl.'),
l('존재 자체가 범죄','Sua própria existência é um crime.',e('존재 자체가','a própria existência','존재 = existência; 자체 = a própria coisa em si; -가 sujeito.'),e('범죄','crime','Nome usado como exagero elogioso; a cópula é omitida. O trocadilho illegirl combina o som de illegal, ilegal, com girl, garota; não é uma palavra coreana.')),
];
const post=[
l('천사가 남긴 실수였나','Será que foi um erro deixado por um anjo?',e('천사가 남긴','que um anjo deixou','천사 = anjo; -가 sujeito; 남기다 = deixar algo; -ㄴ modifica 실수.'),e('실수였나','será que foi um erro','실수 = engano/erro; -였- cópula no passado; -나 expressa pergunta/reflexão. A origem das covinhas é imaginada poeticamente.')),
l('아니면 진한 키스였나','Ou será que foi um beijo intenso?',e('아니면','ou então','Apresenta uma alternativa.'),e('진한 키스였나','será que foi um beijo intenso','진하다 = ser intenso/forte; -ㄴ modifica 키스, beijo; -였나 é pergunta sobre uma situação passada.')),
chorus[0],
en('But I want it anyway anyway anyway','Mas eu quero mesmo assim, mesmo assim, mesmo assim.'),
];
const verse2=[
l('내게는 없어서 너에게만 있어서','Porque eu não tenho e só você tem,',e('내게는 없어서','porque não tenho','내게는 = 나에게는, para mim com contraste; 없다 = não haver/ter; -어서 indica causa.'),e('너에게만 있어서','porque só você tem','너에게 = em/para você; -만 = só; 있다 = haver/ter; -어서 repete a causa. O objeto da comparação são as covinhas.')),
l('이렇게 힘든 걸까','será que é por isso que é tão difícil?',e('이렇게','assim; desse jeito','Retoma a situação anterior.'),e('힘든 걸까','será que é difícil','힘들다 = ser difícil/penoso; 힘든 modifica 것, com queda de ㄹ; 걸까 reduz 것일까.')),
l('빠져 죽고 싶어 잠겨 죽고 싶어','Quero me afogar, quero morrer submerso.',e('빠져 죽고 싶어','quero me afogar','빠지다 = cair dentro/afundar; 빠져 죽다 = morrer afogado; -고 싶다 expressa desejo.','A letra usa uma hipérbole de se perder na atração, continuada pela imagem do lago na próxima linha.'),e('잠겨 죽고 싶어','quero morrer submerso','잠기다 = ficar submerso; 잠겨 é sua conjugação; 죽다 = morrer; -고 싶다 = querer.')),
l('넌 내게 호수야','Você é um lago para mim.',e('넌 내게','você, para mim','넌 reduz 너는; 내게 reduz 나에게.'),e('호수야','é um lago','호수 = lago; -야 é cópula informal após vogal. A imagem liga a atração por alguém à ideia de submergir.')),
];
const pre2=[
en('Cause you','Porque você…'),
l('웃을 때면 어질어질해','Sempre que sorri, fico tonto.',e('웃을 때면','sempre que sorri','웃다 = sorrir; -(으)ㄹ 때 = quando; -면 reforça a situação que se repete.'),e('어질어질해','fico tonto','어질어질하다 = sentir tontura; a repetição sonora reforça a sensação. O sujeito de sorrir e o de sentir tontura são distintos e ficam implícitos.')),
en('True','É verdade.'),
l('너 제발 조심해줄래','Você pode, por favor, tomar cuidado?',e('너 제발','você, por favor','너 = você; 제발 intensifica um pedido.'),e('조심해줄래','pode tomar cuidado por mim?','조심하다 = ter cuidado; -어 주다 apresenta benefício para alguém; -(으)ㄹ래 pergunta disposição/vontade. Aqui funciona como pedido informal.')),
en('You','Você…'),
l('사실 좀 더 위험한 건','Na verdade, o que é um pouco mais perigoso',e('사실 좀 더','na verdade, um pouco mais','사실 = na verdade; 좀 = 조금, um pouco; 더 = mais.'),e('위험한 건','quanto ao que é perigoso','위험하다 + -ㄴ 것; 건 contrai 것은. A frase se completa na linha seguinte.')),
pre1[6],
];
const bridge=[
l('볼 때마다 마음이 위험해져','Toda vez que olho, meu coração fica em perigo.',e('볼 때마다','toda vez que olho','보다 = ver; -(으)ㄹ 때마다 = toda vez que. Aqui 볼 é forma verbal, diferente do nome 볼, bochecha, usado antes.'),e('마음이 위험해져','o coração fica em perigo','마음 = coração/mente; -이 sujeito; 위험하다 = ser perigoso; -아/어지다 marca mudança de estado.')),
l('볼 때마다 점점 위험해져','Toda vez que olho, fica cada vez mais perigoso.',e('볼 때마다','toda vez que olho','Repete 보다 + -(으)ㄹ 때마다.'),e('점점 위험해져','fica cada vez mais perigoso','점점 = progressivamente; 위험해지다 = tornar-se perigoso. O sujeito é implícito e retoma a atração/o coração.')),
en('Oh baby no hey','Oh, meu bem, não, ei.'),
en('Oh baby no hey','Oh, meu bem, não, ei.'),
l('이 세상에 있긴 너무 위험한 걸','É perigoso demais para existir neste mundo.',e('이 세상에 있긴','para existir neste mundo','이 = este; 세상 = mundo; -에 localiza; 있다 = existir. 있긴 é forma contraída com contraste; aqui a leitura natural é 있기에는, para existir.'),e('너무 위험한 걸','é perigoso demais, sabe','너무 = demais; 위험하다 = ser perigoso; -ㄴ걸 pode concluir uma constatação com tom de admiração. Mantém o exagero de atração do refrão.')),
];
export const dimpleSections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:verse1},{title:'Pré-refrão',lines:pre1},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},
{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre2},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},
{title:'Ponte',lines:bridge},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},
{title:'Final',lines:[en('Illegal','Ilegal.'),en('Illegal','Ilegal.'),post[3]]},
];
export const dimpleVocabulary={
verbs:[
{ko:'숨다',pt:'esconder-se'},{ko:'웃다',pt:'sorrir; rir'},{ko:'나타나다',pt:'aparecer'},{ko:'오다',pt:'vir'},
{ko:'거짓말하다',pt:'mentir'},{ko:'맞다',pt:'estar correto; ser isso mesmo'},{ko:'잔인하다',pt:'ser cruel'},
{ko:'보다',pt:'ver; olhar'},{ko:'위험하다',pt:'ser perigoso'},{ko:'있다',pt:'existir; ter'},
{ko:'되다',pt:'ser possível; dar certo'},{ko:'남기다',pt:'deixar algo'},{ko:'진하다',pt:'ser intenso; forte'},
{ko:'없다',pt:'não haver; não ter'},{ko:'힘들다',pt:'ser difícil; penoso'},{ko:'빠지다',pt:'cair dentro; afundar'},
{ko:'죽다',pt:'morrer'},{ko:'잠기다',pt:'ficar submerso'},{ko:'어질어질하다',pt:'sentir tontura'},
{ko:'조심하다',pt:'ter cuidado'},{ko:'위험해지다',pt:'ficar perigoso'},
],
nouns:[
{ko:'천사',pt:'anjo'},{ko:'정체',pt:'identidade; natureza real'},{ko:'미소',pt:'sorriso'},{ko:'볼',pt:'bochecha'},
{ko:'보조개',pt:'covinha'},{ko:'존재',pt:'existência'},{ko:'자체',pt:'a própria coisa em si'},{ko:'범죄',pt:'crime'},
{ko:'실수',pt:'erro; engano'},{ko:'키스',pt:'beijo'},{ko:'호수',pt:'lago'},{ko:'마음',pt:'coração; mente'},{ko:'세상',pt:'mundo'},
]};
