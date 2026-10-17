import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const verse1=[
l('너의 따분한 그 표정 지루한 발끝','Essa sua expressão entediada, seus pés sem ânimo.',e('너의 따분한 그 표정','essa sua expressão entediada','너의 = seu; 따분하다 = estar entediado/ser monótono; -ㄴ modifica 표정, expressão facial; 그 = essa.'),e('지루한 발끝','as pontas dos pés entediadas','지루하다 = ser entediante/estar entediado; 발끝 = ponta dos pés. É uma imagem poética que estende o tédio à postura do corpo.')),
en('Please look at me now','Por favor, olhe para mim agora.'),
l('핸드폰은 내려놔 고개 돌릴 생각도 마','Abaixe o celular; nem pense em virar o rosto.',e('핸드폰은 내려놔','abaixe o celular','핸드폰 = celular; -은 tópico; 내려놔 contrai 내려놓아, de 내려놓다, pôr para baixo. É uma ordem informal.'),e('고개 돌릴 생각도 마','nem pense em virar a cabeça','고개 = cabeça, especialmente em movimentos; 돌리다 = virar; -(으)ㄹ modifica 생각, pensamento/intenção.','-도 reforça nem sequer; 마 vem de 말다, não fazer. 생각도 마 é não pense nem nisso.')),
en('Let me know your type','Me diga qual é o seu tipo.'),
l('날 골라 쓰면 돼 Yeah','É só me escolher e usar, sim.',e('날','a mim','Contração de 나를, eu + objeto.'),e('골라 쓰면 돼','basta escolher e usar','고르다 = escolher, com conjugação irregular 골라; 쓰다 = usar.','-(으)면 되다 indica que uma condição basta: é só fazer isso. A imagem é a de escolher um filtro.')),
];
const pre1=[
l('Oh 너의 눈을 나의 손으로 포개','Oh, cubro seus olhos com minhas mãos.',e('너의 눈을','seus olhos','너의 = seu; 눈 = olho; -을 objeto.'),e('나의 손으로','com minhas mãos','나의 = meu; 손 = mão; -(으)로 indica instrumento.'),e('포개','cubro; sobreponho','포개다 = sobrepor, colocar uma coisa sobre outra; aqui descreve cobrir os olhos com as mãos.')),
l('Oh 다가가 비밀에','Oh, me aproximo de um segredo.',e('다가가','aproximo-me','다가가다 = aproximar-se; forma informal. O destino aparece depois do verbo por ordem poética.'),e('비밀에','de um segredo','비밀 = segredo; -에 indica o destino da aproximação. A imagem prepara a revelação seguinte.')),
l('널 데려갈게 완전히 새로운 세상에','Vou te levar a um mundo completamente novo.',e('널 데려갈게','vou te levar','널 = 너를; 데려가다 = levar alguém consigo; -(으)ㄹ게 expressa compromisso do falante.'),e('완전히 새로운 세상에','a um mundo completamente novo','완전히 = completamente; 새롭다 = ser novo; 새로운 modifica 세상, mundo, com irregularidade de ㅂ. -에 indica destino.')),
l('Yeah 네 감은 눈을 떠봐 이제 Go','Sim, tente abrir os olhos que fechou; agora, vamos.',e('네 감은 눈을','seus olhos fechados','네 = seu; 감다 = fechar os olhos; -은 modifica 눈; -을 objeto.'),e('떠봐','tente abrir','뜨다 = abrir os olhos; 떠 é a conjugação com queda de ㅡ; -아/어 보다 sugere experimentar uma ação.'),e('이제','agora','Indica a passagem à próxima ação.')),
];
const chorus=[
l('팔레트 속 색을 섞어 Pick your filter','Misture as cores da paleta; escolha seu filtro.',e('팔레트 속 색을','as cores dentro da paleta','팔레트 = paleta; 속 = interior; 색 = cor; -을 objeto.'),e('섞어','misture','섞다 = misturar; a forma informal funciona como convite/ordem.')),
l('어떤 나를 원해','Que versão de mim você quer?',e('어떤 나를','que tipo de eu; qual versão de mim','어떤 pergunta qual tipo; 나 = eu; -를 objeto. A ideia de versão é uma tradução contextual.'),e('원해','quer','원하다 = querer/desejar; o tom da frase faz uma pergunta, sem terminação interrogativa específica.')),
l("너의 세상을 변화시킬 I'm your filter",'Sou seu filtro, aquele que vai transformar seu mundo.',e('너의 세상을','seu mundo','너의 = seu; 세상 = mundo; -을 objeto.'),e('변화시킬','que vai transformar','변화시키다 = transformar/fazer mudar; -(으)ㄹ modifica o nome seguinte, aqui o inglês filter.','-시키다 tem sentido causativo: provocar uma mudança.')),
l('네 맘에 씌워줘','Coloque-me sobre seu coração como um filtro.',e('네 맘에','em seu coração','네 = seu; 맘 contrai 마음, coração/mente; -에 indica o lugar de aplicação.'),e('씌워줘','coloque por cima, por favor','씌우다 = pôr algo sobre algo, cobrir; -어 주다 acrescenta a ideia de fazer para alguém.','A imagem é aplicar um filtro ao coração/percepção; não significa costurar, que seria outro verbo. O objeto fica implícito.')),
];
const verse2=[
l('(OK) 어때 조금 느낌이 와? 아직 모자라?','Tudo bem, o que acha? Já está sentindo um pouco? Ainda falta algo?',e('어때','o que acha?; como está?','Forma informal de 어떻다, usada para perguntar uma impressão.'),e('조금 느낌이 와','já vem um pouco da sensação?','조금 = um pouco; 느낌 = sensação; -이 sujeito; 오다 = vir. 느낌이 오다 é começar a sentir/entender algo.'),e('아직 모자라','ainda não basta?','아직 = ainda; 모자라다 = faltar, ser insuficiente.')),
en('(Yes) girl you have your chance','Sim, garota, você tem sua chance.'),
en('I can be your Genie','Posso ser seu gênio da lâmpada.'),
en("How 'bout Aladdin?",'Que tal Aladdin?'),
l('뭐든 돼 줄게','Vou ser o que você quiser.',e('뭐든','qualquer coisa','Redução de 무엇이든; -(이)든 aceita qualquer alternativa.'),e('돼 줄게','vou me tornar para você','되다 = tornar-se; 돼 contrai 되어; -어 주다 apresenta benefício para alguém; -(으)ㄹ게 indica compromisso.')),
verse1[4],
];
const pre2=[
l('Oh 네 꿈처럼 널 감싸 안을 거야','Oh, vou te envolver num abraço, como nos seus sonhos.',e('네 꿈처럼','como seu sonho','네 = seu; 꿈 = sonho; -처럼 = como.'),e('널 감싸 안을 거야','vou te envolver num abraço','널 = 너를; 감싸 안다 = envolver e abraçar; -(으)ㄹ 거야 indica intenção/futuro informal.')),
l('Oh 은밀한 Spec이야','Oh, é uma característica secreta.',e('은밀한','secreta; reservada','은밀하다 = ser secreto/discreto; -ㄴ modifica a palavra inglesa Spec, característica/especificação.'),e('Spec이야','é uma característica','-이야 é a cópula informal após consoante. Spec é inglês; a linha apresenta uma qualidade reservada, sem detalhá-la.')),
l('난 너를 위해 매일 새로울 거야','Vou ser novo a cada dia, por você.',e('난 너를 위해','eu, por você','난 = 나는; 너를 위해 = por você/em seu benefício, de 위하다.'),e('매일 새로울 거야','vou ser novo todos os dias','매일 = todo dia; 새롭다 → 새로울, com irregularidade de ㅂ; -(으)ㄹ 거야 expressa intenção ou previsão.')),
l('늘 똑같은 건 재미없잖아','Ser sempre igual não tem graça, você sabe.',e('늘 똑같은 건','quanto a ser sempre igual','늘 = sempre; 똑같다 = ser exatamente igual; 건 contrai 것은, nominalizando o estado.'),e('재미없잖아','não tem graça, você sabe','재미없다 = ser sem graça/entediante; -잖아 lembra ao ouvinte algo tratado como compartilhado ou evidente.')),
];
const bridge=[
l('불현듯 아이로 변한 날 봐','Olhe para mim, que de repente virei uma criança.',e('불현듯','de repente','Advérbio para algo que surge inesperadamente.'),e('아이로 변한','que virou uma criança','아이 = criança; -(으)로 indica o resultado da transformação; 변하다 = mudar; -ㄴ modifica 날.'),e('날 봐','olhe para mim','날 = 나를; 봐 vem de 보다 e funciona como pedido/ordem informal.')),
l('볼수록 귀여워 미치도록','Quanto mais você olha, mais fofo eu pareço, de enlouquecer.',e('볼수록','quanto mais olha','보다 + -(으)ㄹ수록 estabelece uma relação progressiva: quanto mais uma coisa, mais outra.'),e('귀여워','sou fofo; pareço fofo','귀엽다 = ser fofo; 귀여워 apresenta a irregularidade de ㅂ.'),e('미치도록','a ponto de enlouquecer','미치다 = enlouquecer; -도록 indica grau/limite. É uma hipérbole de intensidade.')),
l('취향도 기준도 뛰어넘어','Ultrapasso gostos e padrões.',e('취향도 기준도','tanto gostos quanto padrões','취향 = gosto/preferência; 기준 = critério/padrão; a repetição de -도 inclui ambos.'),e('뛰어넘어','ultrapasso; vou além','뛰어넘다 = saltar por cima, superar; aqui o sentido é figurado.')),
l('넌 오직 나만을 원하게 돼','Você acaba querendo somente a mim.',e('넌 오직 나만을','você, somente a mim','넌 = 너는; 오직 = somente; 나 = eu; -만 restringe; -을 objeto.'),e('원하게 돼','acaba querendo','원하다 = querer; -게 되다 apresenta uma mudança ou resultado, não uma ordem.')),
l('Yeah 날 만든 사람 바로 너니까','Sim, porque quem me criou foi justamente você.',e('날 만든 사람','a pessoa que me criou','날 = 나를; 만들다 = criar/fazer; 만든 modifica 사람, pessoa, com queda de ㄹ diante de ㄴ.'),e('바로 너니까','porque é justamente você','바로 = justamente; 너 = você; -(이)니까 apresenta motivo. Aqui a imagem é a versão de si moldada pela escolha do outro.')),
];
const finalChorus=[
l('난 여태 네가 본 적 없는 Brand new filter','Sou um filtro novinho que você nunca viu até hoje.',e('난 여태','eu, até agora','난 = 나는; 여태 = até este momento.'),e('네가 본 적 없는','que você nunca viu','네가 = você + sujeito; 보다 = ver; -ㄴ 적 있다/없다 indica ter/não ter uma experiência.','없는 modifica o nome inglês filter: um filtro que você não teve a experiência de ver.')),
l('내게 널 맡겨봐','Experimente se entregar a mim.',e('내게 널','a mim, você','내게 = 나에게, a mim; 널 = 너를, você como objeto.'),e('맡겨봐','tente confiar; entregue','맡기다 = confiar algo/alguém aos cuidados de outro; -어 보다 sugere experimentar.')),
l('더 짜릿한 걸 볼 수 있게 Pick your filter','Escolha seu filtro para poder ver algo mais eletrizante.',e('더 짜릿한 걸','algo mais eletrizante','더 = mais; 짜릿하다 = provocar uma emoção intensa; 걸 contrai 것을.'),e('볼 수 있게','para que possa ver','보다 = ver; -(으)ㄹ 수 있다 = poder; -게 apresenta a finalidade/condição desejada.')),
l('나만을 담아봐','Experimente captar só a mim.',e('나만을','somente a mim','나 = eu; -만 restringe; -을 objeto.'),e('담아봐','tente captar; enquadrar','담다 = conter, colocar dentro; pode ser captar em imagem ou guardar na mente/coração.','-아 보다 convida a experimentar. A imagem mantém a metáfora de filtro e enquadramento.')),
];
const outro=[
en('Na na na na na na na na na','Vocalização: na, na, na…'),
l('Pick your filter 나만을 담아봐','Escolha seu filtro; experimente captar só a mim.',...(finalChorus[3].entries ?? [])),
en('Na na na na na na na na na','Vocalização: na, na, na…'),
l("I'm your filter 내게 널 맡겨봐",'Sou seu filtro; experimente se entregar a mim.',...(finalChorus[1].entries ?? [])),
l('새로운 우리가 될 거야','Vamos nos tornar uma nova versão de nós.',e('새로운 우리가','um novo nós','새롭다 = ser novo; 새로운 modifica 우리, nós; -가 sujeito.','O coreano usa 우리 como nome modificado: nós renovados, uma nova relação entre nós.'),e('될 거야','vamos nos tornar','되다 = tornar-se; -(으)ㄹ 거야 indica previsão/intenção informal.')),
l('Ay 날 네 맘에 씌워줘','Ei, coloque-me sobre seu coração como um filtro.',e('날','a mim','Contração de 나를; explicita o objeto de 씌워줘.'),...(chorus[3].entries ?? [])),
];
export const filterSections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:verse1},{title:'Pré-refrão',lines:pre1},{title:'Refrão',lines:chorus},
{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre2},{title:'Refrão',lines:chorus},
{title:'Ponte',lines:bridge},{title:'Refrão',lines:finalChorus},{title:'Final',lines:outro},
];
export const filterVocabulary={
verbs:[
{ko:'따분하다',pt:'ser monótono; estar entediado'},{ko:'지루하다',pt:'ser entediante; estar entediado'},{ko:'내려놓다',pt:'pôr para baixo; deixar de lado'},
{ko:'돌리다',pt:'virar; girar'},{ko:'고르다',pt:'escolher'},{ko:'쓰다',pt:'usar'},{ko:'포개다',pt:'sobrepor; cobrir'},
{ko:'다가가다',pt:'aproximar-se'},{ko:'데려가다',pt:'levar alguém consigo'},{ko:'새롭다',pt:'ser novo'},{ko:'감다',pt:'fechar os olhos'},
{ko:'뜨다',pt:'abrir os olhos'},{ko:'보다',pt:'ver; olhar'},{ko:'섞다',pt:'misturar'},{ko:'원하다',pt:'querer; desejar'},
{ko:'변화시키다',pt:'transformar; fazer mudar'},{ko:'씌우다',pt:'pôr sobre; cobrir'},{ko:'오다',pt:'vir'},{ko:'모자라다',pt:'ser insuficiente; faltar'},
{ko:'되다',pt:'tornar-se'},{ko:'감싸 안다',pt:'envolver num abraço'},{ko:'은밀하다',pt:'ser secreto; discreto'},
{ko:'똑같다',pt:'ser exatamente igual'},{ko:'재미없다',pt:'ser sem graça'},{ko:'변하다',pt:'mudar'},
{ko:'귀엽다',pt:'ser fofo'},{ko:'미치다',pt:'enlouquecer'},{ko:'뛰어넘다',pt:'ultrapassar; superar'},{ko:'만들다',pt:'fazer; criar'},
{ko:'맡기다',pt:'confiar aos cuidados de alguém'},{ko:'짜릿하다',pt:'ser eletrizante; emocionante'},{ko:'담다',pt:'conter; captar; guardar'},
],
nouns:[
{ko:'표정',pt:'expressão facial'},{ko:'발끝',pt:'ponta dos pés'},{ko:'핸드폰',pt:'celular'},{ko:'고개',pt:'cabeça (em movimentos)'},
{ko:'생각',pt:'pensamento; intenção'},{ko:'눈',pt:'olho'},{ko:'손',pt:'mão'},{ko:'비밀',pt:'segredo'},{ko:'세상',pt:'mundo'},
{ko:'팔레트',pt:'paleta'},{ko:'속',pt:'interior'},{ko:'색',pt:'cor'},{ko:'맘',pt:'coração; mente (forma de 마음)'},
{ko:'느낌',pt:'sensação; impressão'},{ko:'꿈',pt:'sonho'},{ko:'아이',pt:'criança'},{ko:'취향',pt:'gosto; preferência'},
{ko:'기준',pt:'critério; padrão'},{ko:'사람',pt:'pessoa'},
]};
