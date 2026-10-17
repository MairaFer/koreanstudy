import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const verse1=[
l('유난히도 반짝였던 서울','Seul, que brilhava de um jeito especial.',e('유난히도','de modo especialmente marcante','유난히 = excepcionalmente; -도 reforça a intensidade.'),e('반짝였던','que brilhava','반짝이다 = cintilar; -였던 recorda um estado ou experiência passada e modifica 서울.'),e('서울','Seul','Nome da capital sul-coreana.')),
l('처음 보는 또 다른 세상','Um outro mundo que eu via pela primeira vez.',e('처음 보는','que vejo pela primeira vez','처음 = primeira vez; 보다 = ver; -는 modifica 세상.'),e('또 다른 세상','um outro mundo','또 = mais/outro; 다른 = diferente, de 다르다; 세상 = mundo.')),
l('땀에 잔뜩 밴 채 만난 넌','Você, que conheci encharcado de suor,',e('땀에 잔뜩 밴 채','encharcado de suor','땀 = suor; -에 indica aquilo de que se está impregnado; 잔뜩 = muito, intensamente.','배다 = impregnar-se; 밴 modifica 채. -ㄴ 채 indica manter um estado enquanto outra ação acontece. O sujeito desse estado não é explicitado.'),e('만난 넌','você que conheci','만나다 = conhecer/encontrar; -ㄴ modifica 너; 넌 contrai 너는.')),
l('뭔가 이상했었던 아이','era alguém um tanto estranho.',e('뭔가','algo; de algum modo','Redução de 무엇인가; aqui sugere uma impressão difícil de definir.'),e('이상했었던 아이','alguém que era estranho','이상하다 = ser estranho; -했었던 retoma uma lembrança passada.','아이 = criança/garoto; aqui é uma maneira familiar de falar daquela pessoa.')),
l('난 달에서, 넌 별에서','Eu, da Lua; você, de uma estrela.',e('난 달에서','eu, da Lua','난 = 나는; 달 = Lua; -에서 indica origem neste trecho elíptico.'),e('넌 별에서','você, de uma estrela','넌 = 너는; 별 = estrela. A imagem apresenta os dois como vindos de mundos diferentes.')),
l('우리 대화는 숙제 같았지','Nossas conversas pareciam lição de casa.',e('우리 대화는','quanto às nossas conversas','우리 = nosso; 대화 = conversa; -는 tópico.'),e('숙제 같았지','pareciam tarefa de casa','숙제 = dever de casa; 같다 = parecer/ser como; 같았지 é passado informal com tom de lembrança compartilhada.')),
l('하루는 베프, 하루는 웬수','Um dia, melhores amigos; no outro, inimigos.',e('하루는 베프','um dia, melhores amigos','하루 = um dia; -는 cria contraste; 베프 abrevia 베스트 프렌드, melhor amigo.'),e('하루는 웬수','outro dia, inimigos','웬수 é forma coloquial de 원수, inimigo. Aqui soa como provocação entre amigos, não uma inimizade literal.')),
en('I just wanna understand','Eu só quero entender.'),
];
const pre1=[
en('Hello my alien','Olá, meu alienígena.'),
l('우린 서로의 mystery','Somos o mistério um do outro.',e('우린','nós','Contração de 우리는.'),e('서로의','um do outro','서로 = reciprocamente; -의 = de. O nome em inglês mystery completa a expressão.')),
l('그래서 더 특별한 걸까','Será que é por isso que somos ainda mais especiais?',e('그래서 더','por isso, ainda mais','그래서 = por isso; 더 = mais.'),e('특별한 걸까','será que somos especiais?','특별하다 = ser especial; 걸까 contrai 것일까, uma pergunta ou reflexão sobre a situação.')),
];
const chorus=[
l('언젠가 이 함성 멎을 때 stay hey','Um dia, quando estes gritos se calarem, fique.',e('언젠가','algum dia','Tempo futuro não determinado.'),e('이 함성','estes gritos de entusiasmo','이 = este; 함성 = aclamação, gritos de uma multidão; a partícula de sujeito pode ficar omitida.'),e('멎을 때','quando cessarem','멎다 = parar/cessar; -(으)ㄹ 때 situa o momento em que algo acontece.')),
l('내 옆에 함께 있어줘','Fique aqui ao meu lado.',e('내 옆에','ao meu lado','내 = meu; 옆 = lado; -에 = localização.'),e('함께 있어줘','fique comigo','함께 = junto; 있다 = estar; -어 주다 apresenta a ação em benefício de alguém; -줘 faz um pedido informal.')),
l('영원히 계속 이곳에 stay hey','Fique aqui para sempre, sem ir embora.',e('영원히 계속','para sempre, continuamente','영원히 = eternamente; 계속 = continuamente.'),e('이곳에','neste lugar; aqui','이곳 = este lugar; -에 marca localização. O verbo fica em inglês: stay.')),
l('네 작은 새끼손가락처럼','Como o seu pequeno dedo mindinho.',e('네 작은','seu pequeno','네 = seu; 작은 é a forma de 작다 que modifica um nome.'),e('새끼손가락처럼','como o dedo mindinho','새끼손가락 = dedo mindinho; -처럼 = como.','A imagem pode evocar uma promessa de mindinho; 새끼손가락 é um nome comum e não um palavrão.')),
];
const post=[
l('일곱 번의 여름과 추운 겨울보다','Mais do que sete verões e invernos frios,',e('일곱 번의','de sete vezes','일곱 = sete, numeral nativo; 번 conta ocorrências; -의 liga ao nome seguinte.'),e('여름과','verões e','여름 = verão; -과 liga nomes.'),e('추운 겨울보다','mais do que invernos frios','춥다 = ser frio; 추운 modifica 겨울, inverno, com mudança irregular de ㅂ para 우.','-보다 marca comparação; 오래, na linha seguinte, completa a ideia de durar mais tempo.')),
l('오래','por mais tempo.',e('오래','por muito tempo; por mais tempo','Advérbio de duração; com -보다 na linha anterior, assume leitura comparativa.')),
l('수많은 약속과 추억들보다','Mais do que tantas promessas e lembranças,',e('수많은','inúmeras','수많다 = ser incontável/numeroso; -은 modifica os nomes seguintes.'),e('약속과','promessas e','약속 = promessa; -과 = e.'),e('추억들보다','mais do que as lembranças','추억 = lembrança afetiva; -들 plural; -보다 comparação. A duração é completada por 오래.')),
l('오래','por mais tempo.',e('오래','por muito tempo; por mais tempo','Repete a ideia de duração além das experiências mencionadas.')),
];
const verse2=[
l('우리 교복 차림이 기억나','Lembro de nós usando uniforme escolar.',e('우리 교복 차림이','a nossa aparência de uniforme','우리 = nós/nosso; 교복 = uniforme escolar; 차림 = modo de se vestir; -이 sujeito.'),e('기억나','lembro; vem à memória','기억나다 = vir à lembrança; a experiência lembrada aparece como sujeito em coreano.')),
l('우리 추억 한 편 한 편 영화','Cada uma de nossas lembranças é um filme.',e('우리 추억','nossas lembranças','우리 = nosso; 추억 = lembrança afetiva.'),e('한 편 한 편','cada uma das obras','한 = um; 편 é contador de filmes, textos e outras obras. A repetição destaca uma a uma.'),e('영화','filme','A cópula está omitida: as lembranças são apresentadas como filmes.')),
l('만두 사건은 코미디 영화 yeah yeah','O episódio dos bolinhos é um filme de comédia, sim.',e('만두 사건은','quanto ao episódio dos bolinhos','만두 = bolinho recheado; 사건 = episódio/incidente; -은 tópico. A letra cita uma lembrança compartilhada sem explicar seus detalhes.'),e('코미디 영화','filme de comédia','코미디 é empréstimo de comedy; 영화 = filme.')),
l('하교 버스를 채운 속 얘기들','As confidências que enchiam o ônibus na volta da escola.',e('하교 버스를','o ônibus da volta da escola','하교 = saída/volta da escola; 버스 = ônibus; -를 objeto.'),e('채운','que encheram','채우다 = encher; -ㄴ modifica 얘기들.'),e('속 얘기들','confidências; conversas íntimas','속 = interior; 얘기 é redução de 이야기, conversa/história; -들 plural.')),
l('이젠 함께 drive를 나가','Agora saímos juntos para dar uma volta de carro.',e('이젠 함께','agora, juntos','이젠 contrai 이제는; 함께 = junto.'),e('drive를 나가','saímos para uma volta de carro','-를 marca como objeto a palavra inglesa drive; 나가다 = sair. Mistura de idiomas comum na letra.')),
l('한결같애, 그때의 우리들','Continuamos os mesmos, nós daquela época.',e('한결같애','continuamos os mesmos','Grafia coloquial enviada; a forma padrão é 한결같아, de 한결같다: permanecer constante, sem mudar.'),e('그때의 우리들','nós daquela época','그때 = naquele tempo; -의 liga; 우리들 destaca o grupo de pessoas.')),
l('"Hey 지민, 오늘"','“Ei, Jimin, hoje…”',e('지민','Jimin','Nome próprio, chamado diretamente na fala.'),e('오늘','hoje','A fala fica incompleta, evocando uma conversa familiar.')),
];
const pre2=[
l('내 방의 드림캐쳐','O filtro dos sonhos do meu quarto.',e('내 방의','do meu quarto','내 = meu; 방 = quarto; -의 marca relação/posse.'),e('드림캐쳐','filtro dos sonhos','Empréstimo do inglês dreamcatcher; nome de um objeto.')),
l('7년간의 history','Uma história de sete anos.',e('7년간의','de sete anos','년 = ano; -간 = durante um período; -의 liga a expressão a history. O numeral 7 é lido 칠 neste contador.')),
pre1[2],
];
const bridge=[
l('네 새끼손가락','Seu dedo mindinho…',e('네 새끼손가락','seu dedo mindinho','네 = seu; 새끼손가락 = dedo mindinho. A comparação continua na linha seguinte.')),
l('처럼 우린 여전해','como ele, seguimos os mesmos.',e('처럼','como','Liga-se a 네 새끼손가락 na linha anterior; a quebra da letra separa a partícula do nome.'),e('우린 여전해','continuamos os mesmos','우린 = 우리는; 여전하다 = continuar como antes.')),
l('네 모든 걸 알아','Sei tudo sobre você.',e('네 모든 걸','tudo de você','네 = seu; 모든 = todo; 걸 contrai 것을, coisa + objeto.'),e('알아','sei; conheço','알다 = saber/conhecer; presente informal.')),
l('서로 믿어야만 돼','Precisamos mesmo confiar um no outro.',e('서로','um no outro','Expressa reciprocidade.'),e('믿어야만 돼','é preciso mesmo confiar','믿다 = confiar; -어야 되다 = ser necessário; -만 reforça que essa condição precisa ser cumprida.')),
l('잊지 마','Não se esqueça.',e('잊지 마','não esqueça','잊다 = esquecer; -지 마 é proibição ou pedido negativo informal.')),
l('고맙단 그 뻔한 말 보단','Mais do que aquela frase previsível de “obrigado”,',e('고맙단','que diz obrigado','고맙다 = ser grato; 고맙단 reduz 고맙다고 하는, uma fala citada que modifica 말.'),e('그 뻔한 말','aquela frase previsível','그 = aquela; 뻔하다 = ser óbvio/previsível; 말 = palavra/fala.'),e('보단','em vez de; mais do que','Contração de 보다는, partícula de comparação acrescida de contraste.')),
l('너와 나','você e eu,',e('너와 나','você e eu','너 = você; -와 = e, ligando nomes; 나 = eu.')),
l('내일은 정말 싸우지 않기로 해','vamos combinar de não brigar amanhã, de verdade.',e('내일은 정말','amanhã, de verdade','내일 = amanhã; -은 tópico/contraste; 정말 = realmente.'),e('싸우지 않기로 해','vamos decidir não brigar','싸우다 = brigar; -지 않다 nega.','-기로 하다 indica decisão ou acordo; 해 aqui funciona como proposta informal de combinar algo.')),
];
const finalChorus=[chorus[0],en('You are my soulmate','Você é minha alma gêmea.'),chorus[2],en('You are my soulmate','Você é minha alma gêmea.')];
export const friendsSections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:verse1},{title:'Pré-refrão',lines:pre1},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},
{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre2},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},
{title:'Ponte',lines:bridge},{title:'Refrão',lines:finalChorus},{title:'Pós-refrão',lines:post},{title:'Refrão',lines:finalChorus},{title:'Final',lines:post},
];
export const friendsVocabulary={
verbs:[
{ko:'반짝이다',pt:'brilhar; cintilar'},{ko:'보다',pt:'ver'},{ko:'배다',pt:'ficar impregnado; ensopar-se'},{ko:'만나다',pt:'encontrar; conhecer'},
{ko:'이상하다',pt:'ser estranho'},{ko:'같다',pt:'ser como; parecer'},{ko:'특별하다',pt:'ser especial'},{ko:'멎다',pt:'cessar; parar'},
{ko:'있다',pt:'estar; existir'},{ko:'작다',pt:'ser pequeno'},{ko:'춥다',pt:'ser frio'},{ko:'수많다',pt:'ser muito numeroso'},
{ko:'기억나다',pt:'vir à memória'},{ko:'채우다',pt:'encher'},{ko:'나가다',pt:'sair'},{ko:'한결같다',pt:'permanecer constante'},
{ko:'여전하다',pt:'continuar como antes'},{ko:'알다',pt:'saber; conhecer'},{ko:'믿다',pt:'confiar; acreditar'},{ko:'잊다',pt:'esquecer'},
{ko:'고맙다',pt:'ser grato'},{ko:'뻔하다',pt:'ser óbvio; previsível'},{ko:'싸우다',pt:'brigar'},
],
nouns:[
{ko:'서울',pt:'Seul'},{ko:'세상',pt:'mundo'},{ko:'땀',pt:'suor'},{ko:'아이',pt:'criança; garoto'},{ko:'달',pt:'Lua'},{ko:'별',pt:'estrela'},
{ko:'대화',pt:'conversa'},{ko:'숙제',pt:'tarefa de casa'},{ko:'베프',pt:'melhor amigo (gíria)'},{ko:'웬수',pt:'inimigo (coloquial; aqui, brincadeira)'},
{ko:'함성',pt:'gritos de entusiasmo; aclamação'},{ko:'옆',pt:'lado'},{ko:'새끼손가락',pt:'dedo mindinho'},{ko:'여름',pt:'verão'},{ko:'겨울',pt:'inverno'},
{ko:'약속',pt:'promessa; compromisso'},{ko:'추억',pt:'lembrança afetiva'},{ko:'교복',pt:'uniforme escolar'},{ko:'차림',pt:'modo de se vestir'},
{ko:'영화',pt:'filme'},{ko:'만두',pt:'bolinho recheado'},{ko:'사건',pt:'episódio; incidente'},{ko:'하교',pt:'volta da escola'},
{ko:'버스',pt:'ônibus'},{ko:'얘기',pt:'conversa; história'},{ko:'방',pt:'quarto'},{ko:'드림캐쳐',pt:'filtro dos sonhos'},{ko:'말',pt:'palavra; fala'},
]};
