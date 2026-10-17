// Moon — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — a lua e a terra.
const opening=[
 line('달과 지구는 언제부터','Desde quando a lua e a terra,',[
  e('달과 지구는','a lua e a terra (tópico)',['달 = lua','-과 = e, com','지구 = terra','-는 = tópico']),
  e('언제부터','desde quando',['언제 = quando','-부터 = desde'])]),
 line('이렇게 함께했던 건지','será que estão juntos assim?',[
   e('이렇게 함께했던 건지','será que estão juntos assim',['이렇게 = assim; 함께하다 = estar/fazer junto','-았/었던 modifica retrospectivamente uma experiência passada','건지 contrai 것인지: o fato + cópula + pergunta indireta; retoma 언제부터'])]),
 line('존재로도 빛나는 너','Você que brilha só por existir.',[
  e('존재로도','só por existir também',['존재 = existência','-로 = por, por meio de','-도 = também, até']),
  e('빛나는 너','você que brilha',['빛나다 = brilhar','-는 = relativo'])]),
 line('그 곁을 나 지켜도 될지','Será que eu posso guardar esse teu lado?',[
  e('그 곁을','esse lado (objeto)',['그 = esse','곁 = lado','-을 = objeto']),
  e('나 지켜도 될지','será que posso guardar',['지키다 = guardar, proteger','-아도 되다 = poder','-ㄹ지 = será que'])])];
// Refrão — você é a minha terra.
const chorus=[
 line('너는 나의 지구','Você é a minha terra.',[
  e('너는','você (tópico)',['너 = você','-는 = tópico']),
  e('나의 지구','minha terra',['나의 = minha','지구 = terra'])]),
 line('네게 난 just a moon','Para você, eu sou só uma lua.',[
  e('네게 난','eu, para você',['네게 = a você','난 contrai 나는: eu (tópico)']),
  e('just a moon','só uma lua em inglês na letra',['Mantido para o ritmo do refrão'])]),
 line('네 맘을 밝혀주는 너의 작은 별','A tua pequena estrela que ilumina o teu coração.',[
  e('네 맘을','teu coração (objeto)',['네 = teu','맘 = coração','-을 = objeto']),
  e('밝혀주는','que ilumina',['밝히다 = iluminar','-아 주다 = fazer em favor de alguém']),
  e('너의 작은 별','tua pequena estrela',['너의 = tua','작다 = ser pequeno','별 = estrela'])]),
 line('너는 나의 지구','Você é a minha terra.',[
  e('너는','você (tópico)',['너 = você','-는 = tópico']),
  e('나의 지구','minha terra',['Reprise do refrão'])]),
 en('And all I see is you','E tudo o que vejo é você.'),
 line('이렇게 그저 널 바라볼 뿐인 걸','Assim, só fico olhando para você.',[
  e('이렇게 그저','assim, só',['이렇게 = assim','그저 = só, apenas']),
  e('널 바라볼 뿐인 걸','que só fico olhando para você',['널 contrai 너를','바라보다 = olhar para','-뿐- = só','걸 retoma 것 (fato/coisa); no fim desta frase, acrescenta constatação ou explicação, em tom informal'])])];
// Verso — o mar escuro e a confissão.
const verse=[
 line('모두들 내가 아름답다 하지만','Todos dizem que sou bonito, mas…',[
  e('모두들 내가','todos, eu (sujeito)',['모두 = todos','-들 = plural','내가 = eu (sujeito)']),
  e('아름답다 하지만','dizem que é bonito, mas',['아름답다 = ser bonito','-다고 하다 = dizer que','-지만 = mas'])]),
 line('내 바다는 온통 까만 걸','Meu mar é todo negro.',[
  e('내 바다는','meu mar (tópico)',['내 = meu','바다 = mar','-는 = tópico']),
  e('온통 까만 걸','que é todo negro',['온통 = inteiramente','까맣다 = ser negro','걸 contrai 것을: o fato'])]),
 line('꽃들이 피고 하늘이 새파란 별','A estrela onde flores desabrocham e o céu é azul.',[
  e('꽃들이 피고','flores desabrocham e',['꽃 = flor','-들 = plural','-이 = sujeito','피다 = desabrochar','-고 = e']),
  e('하늘이 새파란 별','a estrela de céu azul',['하늘 = céu','-이 = sujeito','새파랗다 = ser bem azul','별 = estrela'])]),
 line('정말 아름다운 건 너야','O que é realmente bonito é você.',[
  e('정말 아름다운 건','o que é realmente bonito',['정말 = realmente','아름답다 = ser bonito','건 contrai 것은: a coisa']),
  e('너야','é você',['너 = você','-야 = é (informal)'])]),
 line('문득 생각해 너도 날 지금 보고 있을까','De repente penso: será que você me vê agora?',[
  e('문득 생각해','penso de repente',['문득 = de repente','생각하다 = pensar']),
  e('너도 날 지금 보고 있을까','será que você também me vê agora',['너 = você','-도 = também','날 contrai 나를','지금 = agora','보다 = ver','-고 있다 = estar fazendo','-ㄹ까 = será que'])]),
 line('내 아픈 상처까지 네게 다 들키진 않을까','Será que minhas feridas não serão descobertas por você?',[
  e('내 아픈 상처까지','até minhas feridas doloridas',['내 = minhas','아프다 = doer','상처 = ferida','-까지 = até']),
  e('네게 다 들키진 않을까','será que não serão descobertas por você',['네게 = a você','다 = tudo','들키다 = ser descoberto','-지 않다 = não','-ㄹ까 = será que'])]),
 line('네 주위를 맴돌게','Vou orbitar ao seu redor.',[
  e('네 주위를','ao teu redor (objeto)',['네 = teu','주위 = arredores','-를 = objeto']),
  e('맴돌게','vou orbitar ao seu redor',['맴돌다 = girar, rondar; aqui, orbitar','맴돌- + -게: realização de -(으)ㄹ게 com ㄹ já presente no radical; expressa compromisso do falante'])]),
 line('네 곁에 있어 줄게','Vou ficar ao teu lado.',[
  e('네 곁에','ao teu lado',['네 = teu','곁 = lado','-에 = em']),
  e('있어 줄게','vou ficar por ti',['있다 = estar','-아 주다 = fazer por alguém','-ㄹ게 = promessa'])]),
 line('네 빛이 되어 줄게','Vou me tornar a tua luz.',[
  e('네 빛이','tua luz (sujeito)',['네 = tua','빛 = luz','-이 = sujeito']),
  e('되어 줄게','vou me tornar por ti',['되다 = tornar-se','-아 주다 = fazer por alguém','-ㄹ게 = promessa'])]),
 en('All for you','Tudo por você.')];
// Pré-refrão — antes de te conhecer.
const pre=[
 line('난 이름조차 없었어','Eu nem tinha nome.',[
  e('난 이름조차','eu, nem nome',['난 contrai 나는: eu (tópico)','이름 = nome','-조차 = nem mesmo']),
  e('없었어','não tinha',['없다 = não existir, não ter','-었- = passado'])]),
 line('내가 널 만나기 전까진','Até antes de eu te conhecer.',[
  e('내가 널','eu, você (objeto)',['내가 = eu (sujeito)','널 contrai 너를']),
  e('만나기 전까진','até antes de conhecer',['만나다 = conhecer','-기 전 = antes de','-까지 = até','전까진 contrai 전까지는: 는 é partícula de tópico'])]),
 line('넌 내게 사랑을 줬고','Você me deu amor e…',[
  e('넌 내게','você, a mim',['넌 contrai 너는','내게 = a mim']),
  e('사랑을 줬고','deu amor e',['사랑 = amor','-을 = objeto','주다 = dar','-었- = passado','-고 = e'])]),
 line('이제는 내 이유가 됐어','Agora se tornou o meu motivo.',[
  e('이제는','agora (tópico)',['이제 = agora','-는 = tópico']),
  e('내 이유가 됐어','se tornou meu motivo',['내 = meu','이유 = motivo','-가 = sujeito','되다 = tornar-se','-었- = passado'])])];
// Ponte — as noites de lua.
const bridge=[
 en('In the crescent moon night','Na noite de lua crescente.'),
 line('두 눈을 감아도 넌 파랗게 내게 밀려와','Mesmo de olhos fechados, você me invade em azul.',[
  e('두 눈을 감아도','mesmo fechando os dois olhos',['두 = dois','눈 = olho','-을 = objeto','감다 = fechar','-아도 = mesmo que']),
  e('넌 파랗게 내게 밀려와','você me invade em azul',['넌 contrai 너는','파랗다 = ser azul','-게 = modo','내게 = a mim','밀려오다 = invadir, vir empurrando'])]),
 en('In the full moon night','Na noite de lua cheia.'),
 line('두 눈을 뜨고서 널 담아도 괜찮은 걸까','Será que posso te guardar de olhos abertos?',[
  e('두 눈을 뜨고서','abrindo os dois olhos',['눈 = olho','뜨다 = abrir','-고서 = e então']),
  e('널 담아도 괜찮은 걸까','será que posso te guardar',['널 contrai 너를','담다 = guardar, conter','-아도 = mesmo que','괜찮다 = estar bem','-ㄹ까 = será que'])])];
// Variação final — será que você se conhece?
const finale=[
 line('문득 생각해 너는 널 정말 알고 있을까','De repente penso: será que você realmente se conhece?',[
  e('문득 생각해','penso de repente',['문득 = de repente','생각하다 = pensar']),
  e('너는 널 정말 알고 있을까','será que você realmente conhece a si',['너 = você','-는 = tópico','널 contrai 너를','정말 = realmente','알다 = conhecer','-고 있다 = estar fazendo','-ㄹ까 = será que'])]),
 line('네 존재가 얼마나 예쁜지 너 알고 있을까','Será que você sabe o quanto a tua existência é linda?',[
  e('네 존재가','tua existência (sujeito)',['네 = tua','존재 = existência','-가 = sujeito']),
  e('얼마나 예쁜지','o quanto é linda',['얼마나 = o quanto','예쁘다 = ser lindo','-ㄴ지 = se, o quanto: dúvida']),
  e('너 알고 있을까','será que você sabe',['너 = você','알다 = saber','-고 있다 = estar fazendo','-ㄹ까 = será que'])]),
 line('네 주위를 맴돌게','Vou orbitar ao seu redor.',[
  e('네 주위를','ao teu redor (objeto)',['네 = teu','주위 = arredores','-를 = objeto']),
  e('맴돌게','vou orbitar ao seu redor',['맴돌다 = girar, rondar; aqui, orbitar','맴돌- + -게: realização de -(으)ㄹ게 com ㄹ já presente no radical; expressa compromisso do falante'])]),
 line('네 곁에 있어 줄게','Vou ficar ao teu lado.',[
  e('네 곁에','ao teu lado',['네 = teu','곁 = lado','-에 = em']),
  e('있어 줄게','vou ficar por ti',['있다 = estar','-아 주다 = fazer por alguém','-ㄹ게 = promessa'])]),
 line('네 빛이 되어 줄게','Vou me tornar a tua luz.',[
  e('네 빛이','tua luz (sujeito)',['네 = tua','빛 = luz','-이 = sujeito']),
  e('되어 줄게','vou me tornar por ti',['되다 = tornar-se','-아 주다 = fazer por alguém','-ㄹ게 = promessa'])]),
 en('All for you','Tudo por você.')];
// Encerramento — dia e noite ao teu lado.
const closing=[
 line('환한 낮에도','Mesmo no dia claro.',[
  e('환한 낮에도','mesmo no dia claro',['환하다 = ser claro','낮 = dia','-에도 = mesmo em'])]),
 line('까만 밤에도','Mesmo na noite escura.',[
  e('까만 밤에도','mesmo na noite escura',['까맣다 = ser negro','밤 = noite','-에도 = mesmo em'])]),
 line('내 곁을 지켜주는 너','Você que guarda o meu lado.',[
  e('내 곁을','meu lado (objeto)',['내 = meu','곁 = lado','-을 = objeto']),
  e('지켜주는 너','você que guarda',['지키다 = guardar','-아 주다 = fazer por alguém','-는 = relativo'])]),
 line('슬플 때에도','Mesmo quando estou triste.',[
  e('슬플 때에도','mesmo quando triste',['슬프다 = ser triste','-ㄹ 때 = quando','-에도 = mesmo'])]),
 line('아플 때에도','Mesmo quando dói.',[
  e('아플 때에도','mesmo quando dói',['아프다 = doer','-ㄹ 때 = quando','-에도 = mesmo'])]),
 line('그저 날 비추는 너','Você que só me ilumina.',[
  e('그저 날','só a mim',['그저 = só','날 contrai 나를']),
  e('비추는 너','você que ilumina',['비추다 = iluminar','-는 = relativo'])]),
 line('어떤 말보다','Mais do que qualquer palavra.',[
  e('어떤 말보다','mais do que qualquer palavra',['어떤 = algum, qualquer','말 = palavra','-보다 = mais que'])]),
 line('고맙단 말보다','Mais do que dizer obrigado.',[
  e('고맙단 말보다','mais do que dizer obrigado',['고맙다 = ser grato; 고맙단 = 고맙다고 하는, que diz obrigado','말 = palavra/fala; -보다 = em comparação com, mais do que'])]),
 line('난 너의 곁에 있을게','Vou ficar ao teu lado.',[
  e('난 너의 곁에','eu, ao teu lado',['난 contrai 나는','너의 = teu','곁 = lado','-에 = em']),
  e('있을게','vou ficar',['있다 = estar','-ㄹ게 = promessa'])]),
 line('캄캄한 밤에','Na noite escura.',[
  e('캄캄한 밤에','na noite escura',['캄캄하다 = ser escuro','밤 = noite','-에 = em'])]),
 line('훨씬 더 환하게','De forma bem mais clara.',[
  e('훨씬 더 환하게','bem mais claramente',['훨씬 = bem mais','더 = mais','환하다 = ser claro','-게 = modo'])]),
 line('너의 곁을 지킬게','Vou guardar o teu lado.',[
  e('너의 곁을','teu lado (objeto)',['너의 = teu','곁 = lado','-을 = objeto']),
  e('지킬게','vou guardar',['지키다 = guardar','-ㄹ게 = promessa'])])];

export const moonSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Verso 1',lines:verse.slice(0,4)},
 {title:'Pré-refrão',lines:verse.slice(4)},
 {title:'Verso 2',lines:pre},
 {title:'Refrão',lines:chorus},
 {title:'Ponte',lines:bridge},
 {title:'Pré-refrão',lines:verse.slice(4)},
 {title:'Verso 3',lines:closing},
 {title:'Final',lines:finale}];
export const moonVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'빛나다',pt:'brilhar'},
  {ko:'지키다',pt:'guardar, proteger'},
  {ko:'밝히다',pt:'iluminar'},
  {ko:'바라보다',pt:'olhar para'},
  {ko:'피다',pt:'desabrochar'},
  {ko:'생각하다',pt:'pensar'},
  {ko:'보다',pt:'ver, olhar'},
  {ko:'들키다',pt:'ser descoberto'},
  {ko:'맴돌다',pt:'rondar'},
  {ko:'있다',pt:'estar, existir'},
  {ko:'되다',pt:'tornar-se'},
  {ko:'만나다',pt:'conhecer, encontrar'},
  {ko:'주다',pt:'dar'},
  {ko:'감다',pt:'fechar'},
  {ko:'뜨다',pt:'abrir'},
  {ko:'담다',pt:'guardar, conter'},
  {ko:'비추다',pt:'iluminar'}],
 nouns:[
  {ko:'달',pt:'lua'},
  {ko:'지구',pt:'terra'},
  {ko:'존재',pt:'existência'},
  {ko:'곁',pt:'lado'},
  {ko:'맘',pt:'coração'},
  {ko:'별',pt:'estrela'},
  {ko:'바다',pt:'mar'},
  {ko:'하늘',pt:'céu'},
  {ko:'상처',pt:'ferida'},
  {ko:'주위',pt:'arredores'},
  {ko:'빛',pt:'luz'},
  {ko:'이름',pt:'nome'},
  {ko:'사랑',pt:'amor'},
  {ko:'이유',pt:'motivo'},
  {ko:'눈',pt:'olho'},
  {ko:'낮',pt:'dia'},
  {ko:'밤',pt:'noite'},
  {ko:'말',pt:'palavra'}]};
