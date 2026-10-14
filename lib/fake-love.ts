// Fake Love — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — fingir por amor.
const opening=[
 line('널 위해서라면','Se for por você.',[
  e('널','você (objeto)',['Contração de 너를: 너 (você, informal) + 를 (objeto)','Marca a pessoa por quem tudo é feito']),
  e('위해서라면','se for por, caso seja para',['위하다 = visar, ser em favor de','-아서/어서 = ligação de finalidade','-라면 = se for o caso: hipótese'])]),
 line('난 슬퍼도 기쁜 척 할 수가 있었어','Mesmo triste, eu conseguia fingir alegria.',[
  e('난','eu (tópico)',['Contração de 나는']),
  e('슬퍼도','mesmo estando triste',['슬프다 = ser triste','-어도 = mesmo que, ainda que']),
  e('기쁜 척','fingindo estar alegre',['기쁘다 = ser alegre','-ㄴ 척 = fingir que se está assim']),
  e('할 수가 있었어','eu conseguia fazer',['하다 = fazer','-(으)ㄹ 수 있다 = conseguir','-었- = passado','Se aplica ao fingimento: conseguir fingir'])]),
 line('널 위해서라면','Se for por você.',[
  e('널 위해서라면','se for por você',['Reprise: a condição amorosa se repete','널 + 위해서라면 mantém a hipótese'])]),
 line('난 아파도 강한 척 할 수가 있었어','Mesmo com dor, eu conseguia fingir força.',[
  e('아파도','mesmo doendo',['아프다 = doer','-어도 = mesmo que']),
  e('강한 척','fingindo ser forte',['강하다 = ser forte','-ㄴ 척 = fingimento']),
  e('할 수가 있었어','eu conseguia fazer',['Mesma estrutura do verso do sorriso fingido'])]),
 line('사랑이 사랑만으로 완벽하길','Que o amor seja perfeito só com amor.',[
  e('사랑이','o amor (sujeito)',['사랑 = amor','이 = sujeito']),
  e('사랑만으로','só com amor',['만 = apenas','-으로 = com, por meio de']),
  e('완벽하길','que seja perfeito',['완벽하다 = ser perfeito','-길 = desejo: que aconteça'])]),
 line('내 모든 약점들은 다 숨겨지길','Que todas as minhas fraquezas fiquem escondidas.',[
  e('내 모든 약점들은','todas as minhas fraquezas (tópico)',['약점 = ponto fraco','-들 = plural','-은 = tópico']),
  e('다 숨겨지길','que fiquem todas escondidas',['다 = todas','숨기다 = esconder','-어지다 = tornar-se escondido','-길 = desejo'])]),
 line('이뤄지지 않는 꿈속에서','Dentro de um sonho que não se realiza.',[
  e('이뤄지지 않는','que não se realiza',['이루다 = realizar','-어지다 = tornar-se realizado','-지 않는 = que não']),
  e('꿈속에서','dentro do sonho',['꿈 = sonho','속 = interior','-에서 = em'])]),
 line('피울 수 없는 꽃을 키웠어','Cultivei uma flor que não pode desabrochar.',[
  e('피울 수 없는','que não pode florescer',['피우다 = fazer florescer','-(으)ㄹ 수 없다 = não conseguir','-는 = relativo']),
  e('꽃을','a flor (objeto)',['꽃 = flor','을 = objeto']),
  e('키웠어','cultivei',['키우다 = criar, cultivar','-었어 = passado informal'])]),
];
// Refrão — a confissão do falso amor.
const chorus=[
 en("(I'm so afraid of, I'm so sick of this fake love)",'(Tenho tanto medo, estou tão farto deste falso amor.)'),
 en("I'm so sick of this fake love",'Estou tão farto deste falso amor.'),
 en('Fake love, fake love','Falso amor, falso amor.'),
 en("I'm so sorry, but it's fake love",'Sinto muito, mas é falso amor.'),
 en('Fake love, fake love','Falso amor, falso amor.'),
 en('I wanna be a good man just for you','Quero ser um homem bom só para você.'),
 line('세상을 줬네 just for you','Eu te dei o mundo, just for you.',[
  e('세상을','o mundo (objeto)',['세상 = mundo','을 = objeto']),
  e('줬네','dei, entreguei',['주다 = dar','-었- = passado','-네 = constatação: percebo que dei'])]),
 line('전부 바꿨어 just for you','Mudei tudo, just for you.',[
  e('전부','tudo, por inteiro',['Advérbio de totalidade']),
  e('바꿨어','mudei',['바꾸다 = trocar, mudar','-었어 = passado informal'])]),
 en('Now I don’t know me, who are you?','Agora não me reconheço, quem é você?'),
 line('Hey 우리만의 숲, 너는 없었어','Hey, na nossa floresta só nossa, você não estava.',[
  e('우리만의','só nosso',['우리 = nós','-만의 = só de, exclusivo']),
  e('숲','floresta',['Espaço íntimo dos dois na imagem da letra']),
  e('너는 없었어','você não estava',['없다 = não existir','-었어 = passado'])]),
 line('내가 왔던 route 잊어버렸어','Esqueci o caminho por onde vim.',[
  e('내가 왔던','por onde eu vim',['오다 = vir','-았던 = lembrança passada']),
  e('route','route, em inglês na letra',['Mantido como caminho ou rota']),
  e('잊어버렸어','acabei esquecendo',['잊다 = esquecer','-어 버리다 = acabar fazendo, com pesar'])]),
 line('나도 내가 누구였는지도 잘 모르게 됐어 (eh)','Nem eu sei mais quem eu era, acabei assim (eh).',[
  e('나도 내가','nem eu mesma',['나도 = eu também, nem eu','내가 = eu como sujeito']),
  e('누구였는지도','nem quem eu era',['누구 = quem','-였- = passado','-지도 = nem mesmo']),
  e('잘 모르게 됐어','acabei não sabendo',['모르다 = não saber','-게 되다 = chegar a essa situação','Perda de identidade: o tema central'])]),
 line('거울에다 지껄여봐, 너는 대체 누구니?','Fala para o espelho: afinal, quem é você?',[
  e('거울에다','para o espelho',['거울 = espelho','-에다 = para, direção enfática']),
  e('지껄여봐','tenta tagarelar, fala aí',['지껄이다 = tagarelar, falar sem pensar','-어 봐 = tente fazer']),
  e('너는 대체 누구니?','afinal, quem é você?',['대체 = afinal, diabos','-니 = pergunta informal'])])];
// Pós-refrão — mentira bonita e boneca.
const post=[
 en('Love you so bad, love you so bad','Te amo tanto, te amo tanto.'),
 line('널 위해 예쁜 거짓을 빚어내','Por você, moldo uma bela mentira.',[
  e('널 위해','por você',['위하다 = ser em favor de','위해 = por, em favor de']),
  e('예쁜 거짓을','uma bela mentira (objeto)',['예쁘다 = ser bonito','거짓 = mentira','을 = objeto']),
  e('빚어내','moldo, esculpo',['빚다 = moldar, modelar','-어 내다 = produzir até o fim'])]),
 en("Love it's so mad, love it's so mad",'O amor é tão louco, o amor é tão louco.'),
 line('날 지워 너의 인형이 되려 해','Apago a mim e tento virar sua boneca.',[
  e('날 지워','apagando a mim',['날 = 나를','지우다 = apagar']),
  e('너의 인형이','sua boneca (sujeito)',['인형 = boneca','이 = sujeito']),
  e('되려 해','tento me tornar',['되다 = tornar-se','-려 하다 = tentar'])]),
 en('Love you so bad, love you so bad','Te amo tanto, te amo tanto.'),
 line('널 위해 예쁜 거짓을 빚어내','Por você, moldo uma bela mentira.',[
  e('널 위해 예쁜 거짓을 빚어내','moldo uma bela mentira por você',['Reprise: a mentira como oferta de amor'])]),
 en("Love it's so mad, love it's so mad",'O amor é tão louco, o amor é tão louco.'),
 line('날 지워 너의 인형이 되려 해','Apago a mim e tento virar sua boneca.',[
  e('날 지워 너의 인형이 되려 해','apago-me para virar sua boneca',['Reprise: apagar-se para caber no desejo do outro'])])];
// Rap — quem sou eu agora.
const rap=[
 line("Why you sad? I don't know 난 몰라 (oh, yeah)",'Por que você está triste? Não sei, eu não sei (oh, yeah).',[
  e('난 몰라','eu não sei',['모르다 = não saber','몰라 forma informal'])]),
 line('웃어봐, "사랑해" 말해봐','Tenta sorrir, tenta dizer te amo.',[
  e('웃어봐','tenta sorrir',['웃다 = sorrir','-어 봐 = tente']),
  e('"사랑해" 말해봐','tenta dizer te amo',['말하다 = dizer','-어 봐 = tentativa'])]),
 line('나를 봐, 나조차도 버린 나 (oh, no)','Olhe para mim, um eu que até eu abandonei (oh, no).',[
  e('나를 봐','olhe para mim',['보다 = olhar','-아 forma de pedido informal']),
  e('나조차도 버린 나','um eu que até eu abandonei',['조차 = até mesmo','버리다 = abandonar','-ㄴ = relativo'])]),
 line('너조차 이해할 수 없는 나','Um eu que nem você consegue entender.',[
  e('너조차','nem você',['조차 = até mesmo, nem']),
  e('이해할 수 없는 나','um eu impossível de entender',['이해하다 = entender','-(으)ㄹ 수 없다 = não conseguir'])]),
 line('낯설다 하네, 니가 좋아하던 나로 변한 내가 (oh)','Dizem que estou estranho, eu mudado daquele eu que você gostava (oh).',[
  e('낯설다 하네','dizem que está estranho',['낯설다 = ser estranho','-다 하다 = dizer que','-네 = constatação']),
  e('니가 좋아하던 나로','naquele eu de que você gostava',['좋아하다 = gostar','-던 = lembrança','-로 = em, como']),
  e('변한 내가','eu mudado',['변하다 = mudar','-ㄴ = relativo'])]),
 line('아니라 하네, 예전에 니가 잘 알고 있던 내가 (oh)','Dizem que não sou, aquele eu que você conhecia bem antes (oh).',[
  e('아니라 하네','dizem que não sou',['아니다 = não ser','dizem que não é aquele']),
  e('잘 알고 있던 내가','eu que você conhecia bem',['알다 = saber, conhecer','-고 있던 = lembrança contínua'])]),
 line('아니긴 뭐가 아냐? 난 눈 멀었어','Como assim não sou? Fiquei cego.',[
  e('아니긴 뭐가 아냐?','como assim não sou?',['아니긴 = contestação: dizer que não é','뭐가 = o quê, afinal']),
  e('난 눈 멀었어','fiquei cego',['눈 = olho','멀다 = ficar cego','-었어 = passado'])]),
 line("사랑은 뭐가 사랑? It's all fake love",'O que há de amor no amor? É tudo falso amor.',[
  e('사랑은 뭐가 사랑?','o que há de amor no amor?',['사랑 = amor','뭐가 = o quê, afinal','Pergunta que esvazia a palavra'])]),
 en("Ooh, I don't know, I don't know, I don't know why",'Ooh, não sei, não sei, não sei por quê.'),
 line('Ooh 나도 날, 나도 날 모르겠어','Ooh, nem eu me conheço.',[
  e('나도 날 모르겠어','nem eu me conheço',['모르다 = não saber','-겠- = impressão presente','Perda total de referência'])]),
 en("Ooh, I just know, I just know, I just know why",'Ooh, só sei, só sei, só sei por quê.'),
 en("'Cause it's all fake love, fake love, fake love",'Porque é tudo falso amor, falso amor, falso amor.')];
export const fakeLoveSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Abertura',lines:opening},
 {title:'Pós-refrão',lines:post},
 {title:'Refrão',lines:chorus},
 {title:'Rap',lines:rap},
 {title:'Pós-refrão',lines:post},
 {title:'Refrão',lines:chorus},
 {title:'Final',lines:opening}];
export const fakeLoveVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'위하다',pt:'visar; ser em favor de'},
  {ko:'슬프다',pt:'ser triste (descritivo)'},
  {ko:'기쁘다',pt:'ser alegre (descritivo)'},
  {ko:'아프다',pt:'doer (descritivo)'},
  {ko:'강하다',pt:'ser forte (descritivo)'},
  {ko:'하다',pt:'fazer'},
  {ko:'완벽하다',pt:'ser perfeito (descritivo)'},
  {ko:'숨기다',pt:'esconder'},
  {ko:'이루다',pt:'realizar'},
  {ko:'피우다',pt:'fazer florescer'},
  {ko:'키우다',pt:'criar, cultivar'},
  {ko:'주다',pt:'dar'},
  {ko:'바꾸다',pt:'trocar, mudar'},
  {ko:'있다',pt:'haver, existir'},
  {ko:'없다',pt:'não existir'},
  {ko:'오다',pt:'vir'},
  {ko:'잊다',pt:'esquecer'},
  {ko:'모르다',pt:'não saber'},
  {ko:'지껄이다',pt:'tagarelar'},
  {ko:'말하다',pt:'dizer, falar'},
  {ko:'빚다',pt:'moldar, modelar'},
  {ko:'지우다',pt:'apagar'},
  {ko:'되다',pt:'tornar-se'},
  {ko:'웃다',pt:'sorrir, rir'},
  {ko:'보다',pt:'ver, olhar'},
  {ko:'버리다',pt:'abandonar, jogar fora'},
  {ko:'이해하다',pt:'entender'},
  {ko:'좋아하다',pt:'gostar'},
  {ko:'변하다',pt:'mudar'},
  {ko:'알다',pt:'saber, conhecer'},
  {ko:'멀다',pt:'ficar cego; ser distante'}],
 nouns:[
  {ko:'사랑',pt:'amor'},
  {ko:'약점',pt:'ponto fraco'},
  {ko:'꿈',pt:'sonho'},
  {ko:'꽃',pt:'flor'},
  {ko:'세상',pt:'mundo'},
  {ko:'전부',pt:'tudo, totalidade'},
  {ko:'숲',pt:'floresta'},
  {ko:'길',pt:'caminho (route na letra)'},
  {ko:'거울',pt:'espelho'},
  {ko:'거짓',pt:'mentira'},
  {ko:'인형',pt:'boneca'},
  {ko:'눈',pt:'olho'},
  {ko:'누구',pt:'quem'}]};