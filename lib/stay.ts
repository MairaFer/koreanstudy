// Stay — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — o sonho e o pedido.
const opening=[
 line('꿈이었을까','Será que foi um sonho?',[
  e('꿈이었을까','será que foi sonho',['꿈 = sonho','-이었- = era (cópula no passado)','-까 = será que: dúvida ou suposição'])]),
 line('널 본 것 같아','Acho que te vi.',[
  e('널','você (objeto)',['Contração de 너를: 너 (você) + 를 (objeto)']),
  e('본 것 같아','acho que vi',['보다 = ver','-ㄴ 것 = nominalização: o fato de ver','-같다 = parecer: acho que'])]),
 line('눈뜨면 다시','Se abrir os olhos, de novo.',[
  e('눈뜨면','se abrir os olhos',['눈 = olho','뜨다 = abrir','-면 = se, quando']),
  e('다시','de novo',['Advérbio de repetição'])]),
 line('아무도 없는 방','Um quarto onde não há ninguém.',[
  e('아무도 없는','sem ninguém',['아무도 = ninguém','없다 = não existir, não ter']),
  e('방','quarto',['O espaço vazio onde se acorda'])]),
 line('가만히 난 주문을 걸어','Em silêncio, eu lanço um feitiço.',[
  e('가만히','em silêncio, quieto',['Modo de fazer algo sem perturbar']),
  e('난','eu (tópico)',['Contração de 나는: eu (tópico)']),
  e('주문을 걸어','lanço um feitiço',['주문 = feitiço, encanto','-을 = objeto','걸다 = pendurar, lançar'])]),
 line('그 어느 때보다 크게 뛰는 heart','Um coração batendo mais forte do que nunca.',[
  e('그 어느 때보다','mais do que nunca',['그 = aquele','어느 = algum','때 = momento','-보다 = mais que: comparação']),
  e('크게 뛰는','batendo forte',['크다 = ser grande, forte','뛰다 = bater, pular','-는 = relativo']),
  e('heart','coração em inglês na letra',['Empréstimo ritmado com o refrão'])]),
 line('이 순간 우리 언제라도 어디 있대도','Neste momento, estando onde quer que estejamos.',[
  e('이 순간','neste momento',['이 = este','순간 = momento']),
  e('우리 언제라도 어디 있대도','estando nós onde quer que seja',['우리 = nós','언제라도 = a qualquer momento','어디 = onde','-있다 = estar','-아대도 = mesmo que (concessivo)'])]),
 line('Together, wherever yeah','Juntos, onde quer que seja, yeah.',[
  e('Together, wherever','juntos, onde quer que seja',['Expressão em inglês mantida na letra'])]),
 en('(Wherever yeah)','(Onde quer que seja, yeah.)'),
 line('반복도 복인 것 같아','Até a repetição parece uma bênção.',[
  e('반복도','até a repetição',['반복 = repetição','-도 = também, até']),
  e('복인 것 같아','parece uma bênção',['복 = bênção, sorte','-인 = que é','것 같다 = parece que'])]),
 line('나도 모르겠어 나의 속을','Não sei nem o que sinto por dentro.',[
  e('나도 모르겠어','não sei também',['나 = eu','-도 = também','모르겠다 = não vou saber']),
  e('나의 속을','o meu interior',['나의 = meu','속 = interior, por dentro'])]),
 line('널 볼 순 없을까','Será que não posso te ver?',[
  e('널 볼 순 없을까','será que não posso te ver',['보다 = ver','-(으)ㄹ 수 있다 = poder','-ㄹ까 = será que (pergunta)'])]),
 line('가만히 모아보네 두 손을','Junto quietinho as duas mãos.',[
  e('가만히 모아보네','junto quietinho, vejo',['모으다 = juntar','-아 보다 = fazer e ver','-네 = constatação']),
  e('두 손을','as duas mãos',['두 = dois','손 = mão','-을 = objeto'])]),
 line('변하지 않는 내일','Um amanhã que não muda.',[
  e('변하지 않는','que não muda',['변하다 = mudar','-지 않는다 = não muda','-는 = relativo']),
  e('내일','amanhã',['O tempo que não se altera'])]),
 line("미친놈처럼 I keep sayin'",'Como um louco, eu continuo dizendo.',[
  e('미친놈처럼','como um louco',['미친놈 = louco','-처럼 = como: comparação']),
  e("I keep sayin'",'eu continuo dizendo em inglês na letra',['Mantido para o ritmo do refrão'])]),
];

// Refrão — o eu te conheço, você sempre fica.
const chorus=[
 en('Wherever you are','Onde quer que você esteja.'),
 en('I know you always stay','Eu sei que você sempre fica.'),
 line('저 구름이 지나간 자리에','No lugar por onde aquela nuvem passou.',[
  e('저 구름이','aquela nuvem (sujeito)',['저 = aquele (distante)','구름 = nuvem']),
  e('지나간 자리에','no lugar por onde passou',['지나가다 = passar','-ㄴ = relativo','자리 = lugar','-에 = em'])]),
 line('Stay','Fique.',[
  e('Stay','fique em inglês na letra',['O verbo que nomeia a música'])]),
 line('마른 입술로 너에게 말해','Com lábios secos, eu digo a você.',[
  e('마른 입술로','com lábios secos',['마르다 = estar seco','입술 = lábios','-로 = com: meio']),
  e('너에게 말해','eu digo a você',['너 = você','-에게 = a','말하다 = dizer'])]),
 en('Stay, stay, stay, stay (Always)','Fique, fique, fique, fique (sempre).'),
 en('Yeah I know you always stay','Yeah, eu sei que você sempre fica.'),
 en('Yeah I know you always stay','Yeah, eu sei que você sempre fica.'),
 en('Yeah I know you always stay','Yeah, eu sei que você sempre fica.'),
 line('찬란한 오늘의','O resplandecente hoje.',[
  e('찬란한','resplandecente',['찬란하다 = resplandecer, brilhar']),
  e('오늘의','de hoje',['오늘 = hoje','-의 = de'])]),
 line('그 모두를 위해','Por todos eles.',[
  e('그 모두를 위해','por todos eles',['모두 = todos','-를 = objeto','위해 = por: finalidade'])]),
 en('Oh every night and day','Oh, toda noite e todo dia.'),
 en('Yeah, I know you always stay','Yeah, eu sei que você sempre fica.'),
];

// Verso — conexão e ondas.
const verse=[
 line('바로 지금 난 널 생각해','Agora mesmo eu penso em você.',[
  e('바로 지금','agora mesmo',['바로 = exatamente, direto','지금 = agora']),
  e('난','eu (tópico)',['Contração de 나는']),
  e('널 생각해','penso em você',['생각하다 = pensar','-아/어 = forma ligada'])]),
 line('니가 어디에 있던지','Onde quer que você esteja.',[
  e('니가 어디에 있던지','onde você estiver',['너 = você','-이 = sujeito','어디 = onde','있다 = estar','-던지 = qualquer que seja'])]),
 line('그게 뭐가 중요해','O que isso importa?',[
  e('그게 뭐가 중요해','o que isso importa',['그 = isso','-가 = sujeito','뭐 = o quê','중요하다 = importar'])]),
 line('We connect to 7G','Nós conectamos ao 7G.',[
  e('We connect to 7G','nós conectamos ao 7G em inglês na letra',['Mantido para o ritmo do verso'])]),
 en("It ain't the end of the world",'Não é o fim do mundo.'),
 en('The present, it shine like a pearl','O presente brilha como uma pérola.'),
 line('이건 몇 파동에 불과','Isso não passa de algumas ondas.',[
  e('이건','isto',['이것 = isto','-ㄴ contrai 은: tópico']),
  e('몇 파동에 불과','não passa de algumas ondas',['몇 = algumas','파동 = onda','-에 = em','불과 = não passar de'])]),
 line('하지만 내가 널 바꿔놓을 거야','Mas eu vou te mudar.',[
  e('하지만','mas',['Conjunção adversativa']),
  e('내가','eu (sujeito)',['나 = eu','-가 = sujeito']),
  e('널 바꿔놓을 거야','vou te mudar',['바꾸다 = mudar','-아 놓다 = fazer de propósito','-(으)ㄹ 것이다 = futuro','-야 = ênfase'])]),
 line('가만히 난 주문을 걸어','Em silêncio, eu lanço um feitiço.',[
  e('가만히 난 주문을 걸어','em silêncio eu lanço um feitiço',['Reprise da abertura: o mesmo gesto de fé'])]),
 line('그 어느 때보다 밝게 보이는 star','Uma estrela brilhando mais do que nunca.',[
  e('그 어느 때보다','mais do que nunca',['그 어느 때 = aquele momento','-보다 = mais que']),
  e('밝게 보이는','brilhando',['밝다 = ser brilhante','-게 = advérbio','보이다 = parecer, mostrar','-는 = relativo']),
  e('star','estrela em inglês na letra',['Empréstimo rítmico'])]),
 line('이 순간 우린 언제라도 어디 있대도','Neste momento, estando onde quer que estejamos.',[
  e('이 순간','neste momento',['이 = este','순간 = momento']),
  e('우린 언제라도 어디 있대도','estando nós onde quer que seja',['우린 = nós (tópico)','언제라도 = a qualquer momento','어디 = onde','-아대도 = mesmo que'])]),
 en('Wherever you are','Onde quer que você esteja.'),
 en('I know you always stay','Eu sei que você sempre fica.'),
 line('저 바람이 지나간 바다에','No mar por onde aquele vento passou.',[
  e('저 바람이','aquele vento (sujeito)',['저 = aquele (distante)','바람 = vento']),
  e('지나간 바다에','no mar por onde passou',['지나가다 = passar','-ㄴ = relativo','바다 = mar','-에 = em'])]),
 line('Stay','Fique.',[
  e('Stay','fique em inglês na letra',['Repetição do verbo que nomeia a música'])]),
 line('굳은 입술로 네게 말을 해','Com lábios cerrados, eu digo a você.',[
  e('굳은 입술로','com lábios cerrados',['굳다 = estar duro, cerrado','입술 = lábios','-로 = com']),
  e('네게 말을 해','eu digo a você',['너 = você','-에게 contrai 네게: a você','말 = palavra','-을 = objeto','하다 = fazer, dizer'])]),
 en('Stay, stay, stay, stay (Always)','Fique, fique, fique, fique (sempre).'),
 en('Yeah I know you always stay','Yeah, eu sei que você sempre fica.'),
 en('Yeah I know you always stay','Yeah, eu sei que você sempre fica.'),
 en('Yeah I know you always stay','Yeah, eu sei que você sempre fica.'),
 line('찬란한 오늘의','O resplandecente hoje.',[
  e('찬란한 오늘의','o resplandecente hoje',['Reprise do refrão: a luz do presente'])]),
 line('그 모두를 위해','Por todos eles.',[
  e('그 모두를 위해','por todos eles',['Reprise: o motivo de ficar'])]),
 en('Oh every night and day','Oh, toda noite e todo dia.'),
 en('Yeah, I know you always stay','Yeah, eu sei que você sempre fica.'),
 line('찬바람이 불어와','Um vento frio sopra.',[
  e('찬바람이','vento frio (sujeito)',['찬 = frio','바람 = vento']),
  e('불어와','sopra',['불다 = soprar','-어 오다 = vir fazendo: soprar em direção a mim'])]),
 line('손 내밀어 네 숨결을 느껴','Estendo a mão e sinto a sua respiração.',[
  e('손 내밀어','estendo a mão',['손 = mão','내밀다 = estender']),
  e('네 숨결을 느껴','sinto a sua respiração',['네 = seu (contração de 너의)','숨결 = respiração','-을 = objeto','느끼다 = sentir'])]),
 line('눈 감은 어느새','Quando fecho os olhos, sem perceber.',[
  e('눈 감은','de olhos fechados',['눈 = olho','감다 = fechar','-은 = relativo']),
  e('어느새','sem perceber, antes que eu note',['Advérbio: algo que acontece despercebido'])]),
 line('우린 함께인 걸','Estamos juntos.',[
  e('우린 함께인 걸','estamos juntos',['우린 = nós (tópico)','함께 = juntos','걸 contrai 것을: o fato de'])]),
];




export const staySections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Verso',lines:verse}];
export const stayVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'보다',pt:'ver, olhar'},
  {ko:'뜨다',pt:'abrir'},
  {ko:'걸다',pt:'pendurar, lançar'},
  {ko:'뛰다',pt:'bater, pular'},
  {ko:'모으다',pt:'juntar'},
  {ko:'변하다',pt:'mudar'},
  {ko:'지나가다',pt:'passar'},
  {ko:'말하다',pt:'dizer'},
  {ko:'생각하다',pt:'pensar'},
  {ko:'바꾸다',pt:'mudar'},
  {ko:'보이다',pt:'parecer, mostrar'},
  {ko:'불다',pt:'soprar'},
  {ko:'느끼다',pt:'sentir'},
  {ko:'감다',pt:'fechar'}],
 nouns:[
  {ko:'꿈',pt:'sonho'},
  {ko:'방',pt:'quarto'},
  {ko:'주문',pt:'feitiço, encanto'},
  {ko:'순간',pt:'momento'},
  {ko:'반복',pt:'repetição'},
  {ko:'복',pt:'bênção, sorte'},
  {ko:'속',pt:'interior, por dentro'},
  {ko:'손',pt:'mão'},
  {ko:'구름',pt:'nuvem'},
  {ko:'입술',pt:'lábios'},
  {ko:'오늘',pt:'hoje'},
  {ko:'파동',pt:'onda'},
  {ko:'바람',pt:'vento'},
  {ko:'바다',pt:'mar'},
  {ko:'숨결',pt:'respiração'}]};
