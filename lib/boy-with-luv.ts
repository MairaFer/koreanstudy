// Boy With Luv — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — curiosidade e convite.
const opening=[
 line('모든 게 궁금해', 'Tudo me deixa curioso.', [
  e('모든 게', 'tudo (sujeito)', ['모든 = todo', '게 contrai 것이']),
  e('궁금해', 'fico curioso', ['궁금하다 = ter curiosidade', '해 forma informal'])]),
 en("how is your day", "Como está seu dia?"),
 line('Oh, tell me (oh-yeah, oh-yeah, ah-yeah, ah-yeah)', 'Oh, me conta.', [
  e('tell me', 'me conta em inglês na letra', ['Mantido para o convite'])]),
 line('뭐가 널 행복하게 하는지', 'O que te faz feliz.', [
  e('뭐가', 'o que (sujeito)', ['뭐 = o quê', '가 = sujeito']),
  e('널 행복하게 하는지', 'o que te faz feliz', ['행복하다 = ser feliz', '-게 하다 = fazer ficar', '-는지 = se, o que'])]),
 line('Your every picture', 'Cada foto sua.', []),
 line('내 머리맡에 두고 싶어 oh, bae', 'Quero deixar ao lado da minha cama, oh, bae.', [
  e('내 머리맡에', 'ao lado da minha cama', ['머리맡 = cabeceira', '에 = em']),
  e('두고 싶어', 'quero deixar', ['두다 = colocar', '-고 싶다 = querer'])]),
 line('Come be my teacher', 'Venha ser minha professora.', []),
 line('니 모든 걸 다 가르쳐줘', 'Ensina-me tudo de você.', [
  e('니 모든 걸', 'tudo de você (objeto)', ['니 = forma de 네, você', '걸 contrai 것을']),
  e('다 가르쳐줘', 'ensina tudo', ['가르치다 = ensinar', '-어 줘 = faça por mim'])]),
 line('Your one, your two', 'Seu um, seu dois.', []),
 line('Listen my, my baby 나는', 'Escuta, minha baby, eu.', [
  e('나는', 'eu (tópico)', ['나 + 는'])]),
 line('저 하늘을 높이 날고 있어', 'Estou voando alto naquele céu.', [
  e('저 하늘을', 'aquele céu (objeto)', ['저 = aquele', '을 = objeto']),
  e('높이 날고 있어', 'estou voando alto', ['높다 = ser alto', '날다 = voar', '-고 있다 = em progresso'])]),
 line('그때 니가 내게 줬던 두 날개로', 'Com as duas asas que você me deu naquela hora.', [
  e('그때', 'naquela hora', ['그 = aquele', '때 = hora']),
  e('니가 내게 줬던', 'que você me deu', ['주다 = dar', '-었던 = lembrança passada']),
  e('두 날개로', 'com duas asas', ['날개 = asa', '로 = com'])])];
// Refrão — voar alto com você.
const chorus=[
 line('이제 여긴 너무 높아', 'Agora aqui está alto demais.', [
  e('이제', 'agora', ['Advérbio de tempo']),
  e('여긴', 'aqui (tópico)', ['Contração de 여기는']),
  e('너무 높아', 'está alto demais', ['높다 = ser alto', '너무 = demais'])]),
 line('난 내 눈에 널 맞추고 싶어', 'Quero ajustar você aos meus olhos.', [
  e('난', 'eu (tópico)', ['Contração de 나는']),
  e('내 눈에', 'aos meus olhos', ['눈 = olho', '에 = em']),
  e('널 맞추고 싶어', 'quero ajustar você', ['맞추다 = ajustar', '-고 싶다 = querer'])]),
 en("Yeah, you makin me a boy with love (whoo)", "É, você me faz um garoto apaixonado."),
 en("Oh, my, my, my (uh)", "Oh, meu, meu, meu."),
 en("Oh, my, my, my", "Oh, meu, meu, meu."),
 en("I have waited all my life", "Esperei a vida inteira."),
 line('네 전부를 함께하고 싶어', 'Quero viver tudo de você junto.', [
  e('네 전부를', 'tudo de você (objeto)', ['네 = teu', '전부 = tudo', '를 = objeto']),
  e('함께하고 싶어', 'quero fazer junto', ['함께 = juntos', '-고 싶다 = querer'])]),
 en("Oh, my, my, my", "Oh, meu, meu, meu."),
 en("Oh, my, my, my", "Oh, meu, meu, meu."),
 en("Looking for something right", "Procurando algo certo."),
 line('이제 조금은 나 알겠어', 'Agora já me entendo um pouco.', [
  e('이제', 'agora', ['Marco de mudança']),
  e('조금은', 'um pouco', ['조금 = pouco', '은 = tópico']),
  e('나 알겠어', 'entendo a mim', ['알다 = saber', '-겠- = impressão'])]),
 en("I want something stronger (I want it)", "Quero algo mais forte."),
 en("(Ooh-ah, ooh-ah, ooh-ah, ooh-ah, ooh-ah)", "(Ooh-ah.)"),
 en("Than a moment, than a moment, love", "Que um momento, que um momento, amor."),
 en("(Ooh-ah, ooh-ah, ooh-ah, ooh-ah, ah)", "(Ooh-ah.)"),
 en("I have waited longer", "Esperei mais tempo."),
 en("(Ooh-ah, ooh-ah, ooh-ah, ooh-ah, ooh-ah)", "(Ooh-ah.)"),
 en("For a boy with, for a boy with love", "Por um garoto com, por um garoto apaixonado.")];
// Rap — estrela, destino e promessa.
const rap1=[
 line('널 알게 된 이후 ya (oh)', 'Desde que te conheci, ya.', [
  e('널 알게 된 이후', 'desde que te conheci', ['알다 = conhecer', '-게 되다 = chegar a', '이후 = depois']),
  e('ya (oh)', 'ya em inglês na letra', ['Interjeição'])]),
 line('내 삶은 온통 너 ya (ya)', 'Minha vida é toda você, ya.', [
  e('내 삶은', 'minha vida (tópico)', ['삶 = vida', '은 = tópico']),
  e('온통 너', 'toda você', ['온통 = inteiramente'])]),
 line('사소한 게 사소하지 않게 만들어버린 너라는 별 (oh, no)', 'A estrela chamada você, que fez o pequeno não ser pequeno.', [
  e('사소한 게', 'o que é pequeno', ['사소하다 = ser trivial', '게 contrai 것이']),
  e('사소하지 않게', 'para não ser pequeno', ['-지 않게 = para não']),
  e('만들어버린 너라는 별', 'a estrela chamada você que fez', ['만들다 = fazer', '-어 버리다 = acabar', '별 = estrela'])]),
 line('하나부터 열까지 ayy, ayy', 'Do um ao dez, ayy.', [
  e('하나부터 열까지', 'do um ao dez', ['하나 = um', '열 = dez', '-부터 = desde', '-까지 = até'])]),
 line('모든 게 특별하지 ayy', 'Tudo é especial, ayy.', [
  e('모든 게 특별하지', 'tudo é especial', ['특별하다 = ser especial', '-지 confirmação'])]),
 line('너의 관심사, 걸음걸이, 말투와', 'Teus interesses, teu andar e teu jeito de falar.', [
  e('너의 관심사', 'teus interesses', ['관심사 = interesse']),
  e('걸음걸이', 'andar, passo', ['Jeito de caminhar']),
  e('말투와', 'e jeito de falar', ['말투 = jeito de falar', '와 = e'])]),
 line('사소한 작은 습관들까지 (Hope World) ayy', 'Até os pequenos hábitos triviais, ayy.', [
  e('사소한 작은 습관들까지', 'até os pequenos hábitos', ['습관 = hábito', '들 = plural', '까지 = até'])]),
 line('다 말하지, 너무 작던 내가 영웅이 된 거라고 (oh, no)', 'Dizem, que eu tão pequeno virei herói.', [
  e('다 말하지', 'dizem tudo', ['말하다 = dizer', '-지 citação']),
  e('너무 작던 내가', 'eu que era tão pequeno', ['작다 = ser pequeno', '-던 = lembrança']),
  e('영웅이 된 거라고', 'que virei herói', ['영웅 = herói', '되다 = tornar-se'])]),
 line('난 말하지, 운명 따윈 처음부터 내 게 아니었다고 (oh, no)', 'Eu digo, destino nunca foi meu desde o início.', [
  e('난 말하지', 'eu digo', ['말하다 = dizer']),
  e('운명 따윈', 'destino e coisas assim', ['따위 = e coisas do tipo', '는 = tópico']),
  e('처음부터 내 게 아니었다고', 'que nunca foi meu', ['처음 = início', '아니다 = não ser'])]),
 line('세계의 평화 (no way)', 'Paz mundial, nem pensar.', [
  e('세계의 평화', 'paz mundial', ['세계 = mundo', '평화 = paz'])]),
 line('거대한 질서 (no way)', 'Ordem gigante, nem pensar.', [
  e('거대한 질서', 'ordem gigante', ['거대하다 = ser gigante', '질서 = ordem'])]),
 line('그저 널 지킬 거야 난 (boy with love)', 'Só vou proteger você, eu.', [
  e('그저', 'apenas', ['Advérbio de limitação']),
  e('널 지킬 거야', 'vou proteger você', ['지키다 = proteger', '-ㄹ 거야 = futuro']),
  e('난', 'eu', ['Contração de 나는'])]),
 line('You got me high so fast', 'Você me levou alto tão rápido.', []),
 line('You got me fly so fast', 'Você me fez voar tão rápido.', []),
 line('Love is nothing stronger (I want it)', 'Amor não há mais forte.', [])];
// Rap 2 — abrir o jogo e voar até você.
const rap2=[
 line('툭 까놓고 말할게', 'Vou falar abrindo o jogo.', [
  e('툭 까놓고', 'abrindo o jogo', ['툭 = de supetão', '까놓다 = expor']),
  e('말할게', 'vou falar', ['말하다 = dizer', '-ㄹ게 = promessa'])]),
 line('나도 모르게 힘이 들어가기도 했어', 'Sem perceber, fiz força também.', [
  e('나도 모르게', 'sem nem eu perceber', ['모르다 = não saber', '-게 = sem']),
  e('힘이 들어가기도 했어', 'fiz força também', ['힘 = força', '들어가다 = entrar', '-기도 = também'])]),
 line('높아버린 sky 커져버린 hall', 'Céu que subiu, salão que cresceu.', [
  e('높아버린', 'que subiu', ['높다 = ser alto', '-어 버리다 = acabar']),
  e('커져버린', 'que cresceu', ['크다 = ser grande'])]),
 line('때론 도망치게 해달라며 기도했어', 'Às vezes rezei pedindo para me deixar fugir.', [
  e('때론', 'às vezes', ['Contração de 때로는']),
  e('도망치게 해달라며', 'pedindo para deixar fugir', ['도망치다 = fugir', '-게 해달라 = peça para deixar']),
  e('기도했어', 'rezei', ['기도하다 = rezar'])]),
 line('But 너의 상처는 나의 상처', 'Mas tua ferida é minha ferida.', [
  e('너의 상처는', 'tua ferida (tópico)', ['상처 = ferida', '는 = tópico']),
  e('나의 상처', 'minha ferida', ['Ferida compartilhada'])]),
 line('깨달았을 때, 나 다짐했던걸 (yeah)', 'Quando percebi, eu prometi.', [
  e('깨달았을 때', 'quando percebi', ['깨닫다 = perceber', '-았을 때 = quando']),
  e('나 다짐했던걸', 'eu prometi', ['다짐하다 = prometer', '-었던 = lembrança'])]),
 line('니가 준 이카루스의 날개로 (uh)', 'Com as asas de Ícaro que você me deu.', [
  e('니가 준', 'que você me deu', ['주다 = dar', 'ㄴ = relativo']),
  e('이카루스의 날개로', 'com as asas de Ícaro', ['날개 = asa', '로 = com'])]),
 line('태양이 아닌 너에게로', 'Não ao sol, mas em sua direção.', [
  e('태양이 아닌', 'não o sol', ['태양 = sol', '아니다 = não ser']),
  e('너에게로', 'em sua direção', ['-에게로 = para'])]),
 line('Let me fly', 'Deixe-me voar.', [])];
export const bwlSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Rap 1',lines:rap1},
 {title:'Refrão',lines:chorus},
 {title:'Rap 2',lines:rap2},
 {title:'Refrão',lines:chorus}];
export const bwlVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'궁금하다',pt:'ter curiosidade'},
  {ko:'행복하다',pt:'ser feliz (descritivo)'},
  {ko:'두다',pt:'colocar, deixar'},
  {ko:'가르치다',pt:'ensinar'},
  {ko:'날다',pt:'voar'},
  {ko:'주다',pt:'dar'},
  {ko:'높다',pt:'ser alto (descritivo)'},
  {ko:'맞추다',pt:'ajustar'},
  {ko:'함께하다',pt:'fazer junto'},
  {ko:'알다',pt:'saber, conhecer'},
  {ko:'만들다',pt:'fazer'},
  {ko:'말하다',pt:'dizer'},
  {ko:'작다',pt:'ser pequeno (descritivo)'},
  {ko:'되다',pt:'tornar-se'},
  {ko:'지키다',pt:'proteger'},
  {ko:'까놓다',pt:'expor, abrir'},
  {ko:'모르다',pt:'não saber'},
  {ko:'들어가다',pt:'entrar'},
  {ko:'크다',pt:'ser grande, crescer'},
  {ko:'도망치다',pt:'fugir'},
  {ko:'기도하다',pt:'rezar'},
  {ko:'깨닫다',pt:'perceber'},
  {ko:'다짐하다',pt:'prometer'}],
 nouns:[
  {ko:'것',pt:'coisa'},
  {ko:'머리맡',pt:'cabeceira'},
  {ko:'하늘',pt:'céu'},
  {ko:'날개',pt:'asa'},
  {ko:'때',pt:'hora, momento'},
  {ko:'눈',pt:'olho'},
  {ko:'전부',pt:'tudo'},
  {ko:'함께',pt:'companhia; juntos'},
  {ko:'삶',pt:'vida'},
  {ko:'이후',pt:'depois'},
  {ko:'별',pt:'estrela'},
  {ko:'관심사',pt:'interesse'},
  {ko:'걸음걸이',pt:'andar, passo'},
  {ko:'말투',pt:'jeito de falar'},
  {ko:'습관',pt:'hábito'},
  {ko:'영웅',pt:'herói'},
  {ko:'운명',pt:'destino'},
  {ko:'처음',pt:'início'},
  {ko:'세계',pt:'mundo'},
  {ko:'평화',pt:'paz'},
  {ko:'질서',pt:'ordem'},
  {ko:'힘',pt:'força'},
  {ko:'상처',pt:'ferida'},
  {ko:'태양',pt:'sol'}]};