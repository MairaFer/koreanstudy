// Body to Body — estudo detalhado da letra, no mesmo formato de Spring Day.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

const chorus=[
 en('I need some body to body','Preciso de corpo a corpo.'),
 en('All of your body beside me','Todo o seu corpo junto ao meu.'),
 line('저기 저 달에 닿게 손에 손','De mãos dadas, para alcançar aquela lua ali.',[
  e('저기 저','aquele ali',['저기 = ali, um pouco distante','-Aquele/aquela já distante de quem fala: 저']),
  e('달에','na lua',['달 = lua','-에 = partícula de local: para onde as mãos se direcionam']),
  e('닿게','para tocar, para alcançar',['닿다 = tocar, alcançar','-게 = “de modo a, para que”: mãos feitas para tocar a lua']),
  e('손에 손','mão com mão, de mãos',['손 = mão','-에 = em; a repetição 손에 손 pinta as mãos encaixadas'])]),
 line('너와 나 we on and on, yeah','Você e eu, seguimos sem parar.',[
  e('너와 나','você e eu',['너 = você (informal)','-와/과 = com: 너와 나 = você comigo, você e eu','나 = eu (informal) após partícula']),
  e('we on and on','seguimos em movimento (em inglês na letra)',['“We on and on” mantém o ritmo de show; o coreano anterior dá o sentido do casal em movimento'])]),
 en('Sunrise, but we don\'t go home','Nasce o sol, mas não vamos para casa.'),
 en('Somebody like you, ay / Somebody like you, oh / Somebody like you, ay','Alguém como você, ay / alguém como você, oh / alguém como você, ay.'),
 en('Somebody like you / Somebody like / Everybody like you','Alguém como você / alguém como / todo mundo gosta de você.')];

export const bodyToBodySections:{title:string;lines:StudyLine[]}[]=[
 {title:'Intro · chamada ao público',lines:[
  en('I need the whole stadium to jump','Preciso que o estádio inteiro pule.'),
  en('Put your phone down, let\'s get all the fun','Guarde o celular, vamos curtir tudo.'),
  en('I got my eyes on the row in the front','Meus olhos estão na primeira fila.'),
  en('The vibe is high, if we bein\' blunt','A energia está alta, sendo bem diretos.'),
  en('The vibe is high, let the building (hey)','A energia está alta, deixe o prédio (hey).')]},
 {title:'Primeira parte · coreano',lines:[
  en('B-T-uh, from everywhere to Korea','B-T-uh, de todas as partes para a Coreia.'),
  line('총, 칼, 키보드, 다 좀 치워','Guardem armas, facas e teclados — tudo isso.',[
   e('총','arma de fogo',['Arma de tiro; em coreano, 총 é a palavra usada tanto para arma quanto para a contagem de tiros']),
   e('칼','faca',['Faca de cozinha ou de corte; figuradamente, palavras cortantes']),
   e('키보드','teclado',['Empréstimo do inglês keyboard; aqui é briga na internet — teclado também vira arma'],'No mesmo verso convivem arma, faca e teclado: a letra coloca violência física e briga online lado a lado.'),
   e('다','tudo, todos',['Adverbial de totalidade; acompanha o que já foi citado']),
   e('좀','um pouco; por favor',['Contração de 조금 (um pouco)','Suaviza pedidos e comandos: “me dá um tempo”']),
   e('치워','guardem, limpen (comando informal)',['치우다 = guardar, arrumar, limpar','-아/어라 forma comando, mas a letra usa a forma curta 치워, sem 요','Som direto ao público: “larguem isso agora”'])]),
  line('인생은 짧아, 증오는 비워','A vida é curta; esvaziem o ódio.',[
   e('인생은','a vida (tópico)',['인생 = vida vivida, a existência','-은/는 marca o tópico; 인생 termina em consoante, por isso 은']),
   e('짧아','é curta (informal)',['짧다 = ser curto; termina em ㅂ irregular','-아/어 é o presente informal: 짧다 → 짧아','A forma educada seria 짧아요']),
   e('증오는','o ódio (tópico)',['증오 = ódio, rancor','-는 marca o tópico porque 증오 termina em vogal (오)']),
   e('비워','esvaziem, deixem de lado (comando informal)',['비우다 = esvaziar, tirar de dentro','-아/어 → 비워: a letra pede que o ódio seja retirado','Forma educada: 비우세요'])]),
  en("It's bigger in real life (life)","É maior na vida real (vida)."),
  line('뭘 체면 따져, 내려놔, 야, 인마','Para de medir a aparência; abaixem a guarda, ô gente.',[
   e('뭘','o quê (objeto)',['무엇을 se contrai em 뭘: 무엇 (o que) + 을 (objeto)','Aqui indica ironia: “de que adianta tanto critério”']),
   e('체면','aparência, decoro',['O que os outros vão pensar; a “máscara” social','-A expressão 체면을 따지다 significa ser exigente com a aparência e a posição']),
   e('따져','medem, julgam (informal)',['따지다 = medir, julgar, barganhar','-아/어 명령 → 따져 (sem 요)','Compare com a forma educada: 따지지 마세요 (não fique julgando)']),
   e('내려놔','abaixem, deixem de lado (informal)',['내려놓다 = pôr para baixo, abandonar a pose','-아/어 명령 → 내려놔','Educado: 내려놓으세요 / 놓으세요']),
   e('야','ei, ô',['Interjeição para chamar alguém; muito comum entre amigos']),
   e('인마','gente, ô pessoa',['Forma antiga e coloquial de 사람 (pessoa)','Soa informal e afetuosa, como “ô gente”'])]),
  en('Hop in','Suba, entre na vibe.'),
  line('좀 더 가까이 와 skin to skin','Cheguem um pouco mais perto, pele com pele.',[
   e('좀 더','um pouco mais',['좀 (um pouco, de 조금) + 더 (mais)']),
   e('가까이','perto, mais perto',['De 가깝다 (estar perto); vira advérbio: 가까이 오다 (vir perto)']),
   e('와','venha (comando informal)',['오다 = vir','-아/어 명령 → 와 (informal)','A forma educada é 오세요 — a letra escolhe a proximidade do informal'])])]},
 {title:'Refrão · body to body',lines:chorus},
 {title:'Segunda parte · coreano',lines:[
  en("It's so tight","É tudo tão intenso (tão perto)."),
  line('I mean, 너와의 사이','Quero dizer, a relação entre nós dois.',[
   e('너와의','entre você e eu (…)',['너 = você (informal)','-와 = com','-의 = partícula possessiva: “de você e de mim”']),
 e('사이','relação, o que há entre',['Também significa intervalo; entre duas pessoas, é a relação','A expressão fica entre “we” e “style”: é o espaço que é só de vocês dois'])]),
  line('I mean, 우리만의 그 style','Quero dizer, um estilo que é só nosso.',[
   e('우리만의','somente nosso',['우리 = nós (inclusivo, típico do coreano)','-만 = somente, só','-의 = de nós: 우리만의 = que é só nosso']),
   e('그','aquele, aquele já conhecido',['Pronome demonstrativo para algo já mencionado ou partilhado'])]),
  en("I mean we livin' the life","Quero dizer, estamos vivendo a vida boa."),
  line('두 눈을 감지 않을 이 밤, uh','Esta noite em que não vou fechar os olhos.',[
   e('두 눈을','os dois olhos (objeto)',['두 = dois (com palavra contável)','눈 = olhos','-을 = partícula de objeto']),
   e('감지 않을','não vai fechar',['감다 = fechar (os olhos)','-지 않다 = negação: 감지 않다 = não fechar','-을/ㄹ = relativo de futuro: “que não vai fechar”','감지 않다 + 을 → 감지 않을: a noite que ainda não vai acabar de olhos fechados']),
   e('이 밤','esta noite',['이 = este/esta, perto de quem fala','밤 = noite'])]),
  line('솟구치는 겨레의 마음, mm','O coração do povo que se ergue.',[
   e('솟구치는','que transborda, que se ergue',['솟구치다 = jorrar, transbordar','-는 = relativo no presente: “que se ergue agora”']),
   e('겨레','povo, gente da mesma terra',['Palavra de carga afetiva: o povo coreano como uma grande família','-Compare com 민족 (nação/etnia) e 국민 (cidadãos de um país)']),
   e('의','do, da (possessivo)',['Partícula possessiva; 겨레 termina em vogal, então usamos 의']),
   e('마음','coração, sentimento',['Coração e mente numa só palavra: 마음이 높다 = o ânimo está alto'])]),
  en('Be about it, be about it, be about it','Bora fazer, bora fazer, bora fazer.'),
  en('You could see about it or you read about it','Dá para experimentar ou só ler sobre isso.')]},
 {title:'Refrão · repetição',lines:chorus},
 {title:'Arirang · trecho folclórico',lines:[
  line('아리랑, 아리랑, 아라리요','Arirang, arirang, arariyo (refrão tradicional).',[
   e('아리랑','Arirang',['Nome da canção folclórica e também de uma colina','Provavelmente vem de 아리다 (ser dolorido, belo) + -랑: “o caminho da beleza e da dor”'],'아리랑 é a canção folclórica mais famosa da Coreia, transmitida de geração em geração — e é o trecho que a letra canta para costurar tradição e show moderno.'),
   e('아라리요','arariyo (variante do refrão)',['Não é palavra de uso comum no dia a dia','Mantém a sonoridade e a rima do folclore'])]),
  line('아리랑 고개로 넘어간다','Atravessa a colina, Arirang.',[
   e('고개로','pela colina, pelo passo',['고개 = colina, caminho nas alturas; também “cabeça curvada”','-로/으로 = direção: para o outro lado da colina']),
   e('넘어간다','atravessa, passa para o outro lado',['넘어가다 = atravessar, cruzar','-ㄴ다 = presente informal de narração (como quem conta um conto)','Educado seria 넘어가요; aqui o tom é de cantiga'])]),
  line('나를 버리고 가시는 님은','O ser amado que me deixa e vai embora…',[
   e('나를','a mim (objeto)',['나 = eu (informal)','-를 = partícula de objeto']),
   e('버리고','deixa para trás e…',['버리다 = abandonar, deixar para trás','-고 = “e”: primeiro abandona, depois vai','-A palavra preserva um tom antigo e literário, próprio do folclore']),
   e('가시는','que vai (com respeito)',['가다 = ir','-시- = partícula honorífica: quem parte é tratado com respeito','-는 = relativo presente: “que vai embora”']),
   e('님은','o ser amado (tópico)',['님 = ser amado, pessoa respeitada (como “senhor/chefe” em português arcaico)','-은 = tópico: é dele que a frase fala'])]),
  line('십 리도 못 가서 발병난다','Nem anda dez li — e os pés acabam doendo.',[
   e('십 리','dez li (cerca de 3,9 km)',['리 = unidade tradicional de distância, ≈392 m','-São os “dez li” do provérbio: um pedaço grande de caminhada'],'De acordo com a medida tradicional, 십 리 equivale a quase quatro quilômetros: quem abandona o amante não consegue andar nem isso antes de os pés doerem.'),
   e('도','nem, também',['Também, ainda mais; com 못 nega o todo: “nem dez li”']),
   e('못 가서','por não conseguir ir',['못 = não conseguir (diferente de 안 = não por vontade)','-가서 = 가다 (ir) + -아서 (por, e então…)']),
   e('발병난다','ficam com os pés doentes',['발 (pé) + 병 (doença) + 나다 (surgir) → 발이 병이 나다 → 발병나다 (forma contraída)','-나다 = surgir, aparecer (problema)'])])]},
 {title:'Fechamento · de volta ao público',lines:[
  en('I need the whole stadium to jump','Preciso que o estádio inteiro pule.'),
  en('Put your phone down, let\'s get all the fun','Guarde o celular, vamos curtir tudo.'),
  en('You at the side, at the back, at the front','Você, do lado, lá atrás, na frente.')]},
];

export const bodyToBodyVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'치우다',pt:'guardar, arrumar, limpar'},
  {ko:'비우다',pt:'esvaziar, deixar de lado'},
  {ko:'내려놓다',pt:'pôr de lado, baixar a guarda'},
  {ko:'따지다',pt:'medir, julgar, ficar discutindo'},
  {ko:'오다',pt:'vir; 와 = venha (comando informal)'},
  {ko:'닿다',pt:'tocar, alcançar'},
  {ko:'감다',pt:'fechar (os olhos)'},
  {ko:'넘어가다',pt:'atravessar, passar para o outro lado'},
  {ko:'버리다',pt:'abandonar, deixar para trás'},
  {ko:'살다',pt:'viver (livin the life: viver a vida boa)'},
  {ko:'솟구치다',pt:'transbordar, erguer-se'},
  {ko:'병이 나다',pt:'ficar doente'}],
 nouns:[
  {ko:'총',pt:'arma de fogo'}, {ko:'칼',pt:'faca'}, {ko:'키보드',pt:'teclado (empréstimo do inglês)'},
  {ko:'인생',pt:'vida, existência'}, {ko:'증오',pt:'ódio'}, {ko:'체면',pt:'aparência, decoro'},
  {ko:'달',pt:'lua'}, {ko:'손',pt:'mão'}, {ko:'눈',pt:'olhos; também neve em outros contextos'},
  {ko:'밤',pt:'noite'}, {ko:'겨레',pt:'povo, gente da mesma terra'}, {ko:'마음',pt:'coração, sentimento'},
  {ko:'고개',pt:'colina, passo'}, {ko:'님',pt:'ser amado, pessoa respeitada'}, {ko:'리',pt:'unidade tradicional de distância (≈392 m)'}]
};