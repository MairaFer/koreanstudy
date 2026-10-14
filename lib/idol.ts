// IDOL — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — artista, idol e liberdade.
const opening=[
 en('You can call me artist (artist)','Você pode me chamar de artista (artista).'),
 en('You can call me idol (idol)','Você pode me chamar de idol (idol).'),
 line('아님 어떤 다른 뭐라 해도 (해도)','Ou digam qualquer outra coisa (digam).',[
  e('아님','ou então',['Redução de 아니면']),
  e('어떤 다른 뭐라 해도','digam o que disserem',['어떤 = qual, que tipo','뭐라 = algo, de dizer','-어도 = mesmo que'])]),
 en("I do not care","Não me importo."),
 en("I am proud of it","Tenho orgulho disso."),
 line('난 자유롭네','Sou livre.',[
  e('난','eu (tópico)',['Contração de 나는']),
  e('자유롭네','sou livre',['자유롭다 = ser livre','-네 = constatação'])]),
 en('No more irony','Chega de ironia.'),
 line('나는 항상 나였기에','Porque sempre fui eu.',[
  e('나는','eu (tópico)',['나 + 는']),
  e('항상 나였기에','porque sempre fui eu',['항상 = sempre','-였- = passado','-기에 = porque'])]),
];
// Verso 1 — apontam o dedo, eu sigo.
const verse=[
 line('손가락질 해, 나는 전혀 신경 쓰지 않네','Apontam o dedo, não me importo nem um pouco.',[
  e('손가락질 해','apontam o dedo',['손가락질 = apontar com o dedo','해 = faz']),
  e('나는 전혀 신경 쓰지 않네','eu nem ligo',['전혀 = de jeito nenhum','신경 쓰다 = importar-se','-네 = constatação'])]),
 line('나를 욕하는 너의 그 이유가 뭐든 간에','Seja qual for tua razão para me xingar.',[
  e('나를 욕하는','que me xinga',['욕하다 = xingar','-는 = relativo']),
  e('너의 그 이유가 뭐든 간에','seja qual for tua razão',['이유 = razão','뭐든 = o que quer que seja','-간에 = seja'])]),
 en('I know what I am','Sei o que sou.'),
 en('I know what I want','Sei o que quero.'),
 en("I never gon change","Nunca vou mudar."),
 en("I never gon trade","Nunca vou trocar."),
 en('(Trade off)','(Troca.)'),
 line('뭘 어쩌고 저쩌고 떠들어대셔','Falam isso e aquilo sem parar.',[
  e('뭘 어쩌고 저쩌고','isso e aquilo',['Expressão de falatório vago']),
  e('떠들어대셔','vivem falando',['떠들다 = falar alto','-어대다 = fazer sem parar'])]),
 line('I do what I do, 그니까 넌 너나 잘하셔','Faco o que faco, entao cuide da sua vida.',[
  e('그니까','então, por isso',['Contração de 그러니까']),
  e('넌 너나 잘하셔','cuide de você',['너나 = você mesmo','잘하다 = fazer bem'])]),
 en("You can not stop me lovin myself","Você não pode me impedir de amar a mim mesmo."),
 line('얼쑤 좋다','E isso ai, que bom.',[
  e('얼쑤','exclamação de animação',['Interjeição tradicional de festa']),
  e('좋다','é bom',['Verbo descritivo'])]),
 en("You can not stop me lovin myself","Você não pode me impedir de amar a mim mesmo."),
 line('지화자 좋다','Que bom, que beleza.',[
  e('지화자','refrão tradicional',['Interjeição de música popular']),
  e('좋다','é bom',['Reprise da celebração'])])];
// Refrão — festa tradicional.
const chorus=[
 en('OHOHOHOH','OHOHOHOH.'),
 en('OHOHOHOHOHOH','OHOHOHOHOHOH.'),
 en('OHOHOHOH','OHOHOHOH.'),
 line('덩기덕 쿵더러러','Dung-gideok kung-deoreoreo.',[
  e('덩기덕 쿵더러러','sons de tambor tradicional',['Onomatopeias de percussão','Ritmo de festa popular'])]),
 line('얼쑤','E isso ai.',[
  e('얼쑤','exclamação de animação',['Reprise do grito de festa'])])];
// Rap — herói, Anpanman e vários eus.
const rap=[
 en('Face off like John Woo, ay','Cara a cara como John Woo, ay.'),
 en('Top star with that spotlight, ay','Estrela no topo sob o holofote, ay.'),
 line('때론 슈퍼히어로가 돼','Às vezes viro super-herói.',[
  e('때론','às vezes',['Contração de 때로는']),
  e('슈퍼히어로가 돼','viro super-herói',['되다 = tornar-se','돼 forma informal'])]),
 line('돌려대 너의 Anpanman','Giro sem parar, teu Anpanman.',[
  e('돌려대','giro sem parar',['돌리다 = girar','-어대다 = sem parar']),
  e('너의 Anpanman','teu Anpanman',['Herói que dá parte de si'])]),
 line('24시간이 적지','24 horas são pouco.',[
  e('24시간이','24 horas (sujeito)',['시간 = hora, tempo','이 = sujeito']),
  e('적지','é pouco',['적다 = ser pouco','-지 constatação'])]),
 line('헷갈림, 내겐 사치','Confusão, para mim é luxo.',[
  e('헷갈림','confusão',['헷갈리다 + ㅁ = ato de confundir']),
  e('내겐 사치','para mim é luxo',['내게 = para mim','사치 = luxo'])]),
 en('I do my thang','Faço minhas coisas.'),
 en('I love myself','Eu me amo.'),
 en('I love myself, I love my fans','Eu me amo, amo meus fãs.'),
 en('Love my dance and my what','Amo minha dança e meu resto.'),
 line('내 속안엔 몇 십 몇 백명의 내가 있어','Dentro de mim há dezenas, centenas de eus.',[
  e('내 속안엔','dentro de mim',['속 = interior','안 = dentro','엔 contrai 에는']),
  e('몇 십 몇 백명의','dezenas, centenas de',['몇 = alguns','명 = pessoa']),
  e('내가 있어','há eus',['있다 = existir'])]),
 line('오늘 또 다른 날 맞이해','Hoje recebo outro eu.',[
  e('오늘','hoje',['Tempo presente']),
  e('또 다른 날 맞이해','recebo outro eu',['맞이하다 = receber','해 forma informal'])]),
 line('어차피 전부 다 나이기에','Pois tudo é eu mesmo.',[
  e('어차피','de todo modo',['Advérbio de resignação']),
  e('전부 다 나이기에','porque tudo é eu',['전부 = tudo','-기에 = porque'])]),
 line('고민보다는 걍 달리네','Em vez de pensar, só corro.',[
  e('고민보다는','em vez de pensar',['고민 = preocupação','-보다는 = em vez de']),
  e('걍 달리네','só corro',['걍 = só, forma de 그냥','달리다 = correr','-네 = constatação'])]),
 en("Runnin man","Homem correndo."),
 en("Runnin man","Homem correndo."),
 en("Runnin man","Homem correndo.")];
// Ponte — bem onde eu for.
const bridge=[
 en("I am so fine wherever I go","Estou tão bem onde quer que eu vá."),
 line('가끔 멀리 돌아가도','Mesmo dando às vezes uma volta longa.',[
  e('가끔','às vezes',['Advérbio de frequência']),
  e('멀리 돌아가도','mesmo indo longe',['멀리 = longe','돌아가다 = dar a volta','-어도 = mesmo que'])]),
 en("It is okay, I am in love with my myself","Tudo bem, amo a mim mesmo."),
 en("It is okay, this moment I am happy","Tudo bem, neste momento sou feliz.")];
export const idolSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Verso 1',lines:verse},
 {title:'Refrão',lines:chorus},
 {title:'Refrão',lines:chorus},
 {title:'Rap',lines:rap},
 {title:'Verso 1',lines:verse},
 {title:'Refrão',lines:chorus},
 {title:'Refrão',lines:chorus},
 {title:'Ponte',lines:bridge},
 {title:'Refrão',lines:chorus},
 {title:'Refrão',lines:chorus}];
export const idolVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'자유롭다',pt:'ser livre (descritivo)'},
  {ko:'신경 쓰다',pt:'importar-se'},
  {ko:'욕하다',pt:'xingar'},
  {ko:'떠들다',pt:'falar alto'},
  {ko:'잘하다',pt:'fazer bem'},
  {ko:'좋다',pt:'ser bom (descritivo)'},
  {ko:'되다',pt:'tornar-se'},
  {ko:'돌리다',pt:'girar'},
  {ko:'적다',pt:'ser pouco (descritivo)'},
  {ko:'헷갈리다',pt:'ficar confuso'},
  {ko:'있다',pt:'haver, existir'},
  {ko:'맞이하다',pt:'receber'},
  {ko:'달리다',pt:'correr'},
  {ko:'돌아가다',pt:'dar a volta, retornar'}],
 nouns:[
  {ko:'이유',pt:'razão, motivo'},
  {ko:'손가락질',pt:'apontar com o dedo'},
  {ko:'시간',pt:'hora, tempo'},
  {ko:'사치',pt:'luxo'},
  {ko:'속',pt:'interior'},
  {ko:'안',pt:'dentro'},
  {ko:'명',pt:'pessoa (contador)'},
  {ko:'오늘',pt:'hoje'},
  {ko:'고민',pt:'preocupação'},
  {ko:'전부',pt:'tudo'}]};