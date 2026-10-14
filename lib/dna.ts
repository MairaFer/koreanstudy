// DNA — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — reconhecimento à primeira vista.
const opening=[
 line('첫눈에 널 알아보게 됐어','À primeira vista, acabei reconhecendo você.',[
  e('첫눈에','à primeira vista',['첫눈 = primeiro olhar; 첫 (primeiro) + 눈 (olho, olhar)','에 = partícula de lugar-tempo: no momento do primeiro olhar']),
  e('널','você (objeto)',['Contração de 너를: 너 (você, informal) + 를 (objeto)','Marca quem é reconhecido na cena']),
  e('알아보게 됐어','acabei reconhecendo',['알아보다 = reconhecer, aqui: identificar alguém','-게 되다 = chegar a uma nova situação, sem ser decisão planejada','됐어 contrai 되었어: 되다 + -었- (passado) + -어 (informal)'],'-게 되다 não descreve uma ordem nem uma capacidade: descreve que as circunstâncias levaram a reconhecer.')]),
 line('서롤 불러왔던 것처럼','Como se tivéssemos nos chamado um ao outro.',[
  e('서롤','como enviado; provável 서로',['A letra enviada traz 서롤, sem sentido próprio isolado','A leitura contextual é 서로: um ao outro, mutuamente','서롤 troca a ordem das sílabas de 서로: hipótese de erro de transcrição']),
  e('불러왔던 것처럼','como se tivéssemos nos chamado',['부르다 = chamar','-아/어 오다 = vir fazendo: chamar em direção a si','-았던 = lembrança de estado anterior','-처럼 = como: comparação poética'])]),
 line('내 혈관 속 DNA가 말해줘','O DNA dentro das minhas veias me diz.',[
  e('내 혈관 속','dentro das minhas veias',['내 = meu, minha (나의 contraído)','혈관 = veia, vaso sanguíneo','속 = interior: 혈관 속 = dentro das veias']),
  e('DNA가','o DNA (sujeito)',['Empréstimo mantido em maiúsculas','가 = partícula de sujeito: quem diz algo']),
  e('말해줘','me diz',['말하다 = dizer','-아/어 주다 = fazer em favor de quem escuta','줘 contrai 주어: forma informal de pedido ou declaração próxima'])]),
 line('내가 찾아 헤매던 너라는 걸','Que você é quem eu procurava vagando.',[
  e('내가 찾아 헤매던','que eu procurava vagando',['찾다 = procurar','-아 헤매다 = fazer vagando, sem rumo','-던 = lembrança retrospectiva: o que eu vivia procurando']),
  e('너라는 걸','que é você',['너 = você','-라는 = chamado, identificado como','걸 contrai 것을: a coisa, o fato'])]),
 line('우리 만남은 수학의 공식','Nosso encontro é a fórmula da matemática.',[
  e('우리 만남은','nosso encontro (tópico)',['우리 = nós, também nosso','만남 = encontro (만나다 + ㅁ)','은 = tópico: quanto ao nosso encontro']),
  e('수학의 공식','a fórmula da matemática',['수학 = matemática','의 = posse: de','공식 = fórmula'])]),
 line('종교의 율법 우주의 섭리','A lei da religião, a providência do universo.',[
  e('종교의 율법','a lei da religião',['종교 = religião','율법 = lei, mandamento']),
  e('우주의 섭리','a providência do universo',['우주 = universo','섭리 = providência, ordem oculta','A linha é um fragmento nominal: lista o que o encontro seria, sem verbo final'])]),
 line('내게 주어진 운명의 증거','A prova do destino que me foi dada.',[
  e('내게 주어진','que me foi dada',['내게 = a mim','주다 = dar','-어지다 = voz passiva: ser dado','-ㄴ = relativo: a que foi dada']),
  e('운명의 증거','a prova do destino',['운명 = destino','증거 = prova, evidência'])]),
 line('너는 내 꿈의 출처','Você é a origem do meu sonho.',[
  e('너는','você (tópico)',['너 = você','는 = tópico']),
  e('내 꿈의 출처','a origem do meu sonho',['꿈 = sonho','출처 = origem, fonte'])]),
];
// Pré-refrão — mão estendida e certeza.
const pre=[
 line('Take it take it','Pegue, pegue',[]),
 line('너에게 내민 내 손은 정해진 숙명','A minha mão estendida para você é um destino decidido.',[
  e('너에게','para você',['너 = você','-에게 = para: direção da entrega']),
  e('내민','estendida',['내밀다 = estender, oferecer','-ㄴ = relativo: a mão que estendi']),
  e('내 손은','minha mão (tópico)',['손 = mão','은 = tópico']),
  e('정해진 숙명','destino decidido',['정하다 = decidir','-어지다 = tornar-se decidido','숙명 = destino inevitável'])]),
 line('걱정하지 마 love','Não se preocupe, love.',[
  e('걱정하지 마','não se preocupe',['걱정하다 = preocupar-se','-지 마 = proibição informal: não faça']),
  e('love','love, em inglês na letra',['Mantido para o ritmo do refrão'])]),
 line('이 모든 건 우연이 아니니까','Tudo isso não é por acaso, porque.',[
  e('이 모든 건','tudo isso',['이 = este','모든 = todo','건 contrai 것은: a coisa']),
  e('우연이 아니니까','porque não é coincidência',['우연 = acaso, coincidência','-이 아니다 = não ser','-니까 = porque: liga a causa ao que vem depois'])]),
 line('우린 완전 달라 baby','Nós somos totalmente diferentes, baby.',[
  e('우린','nós (tópico)',['Contração de 우리는: 우리 (nós) + 는 (tópico)']),
  e('완전 달라','totalmente diferentes',['완전 = totalmente','다르다 = ser diferente','달라 é a forma informal'])]),
 line('운명을 찾아낸 둘이니까','Porque somos os dois que encontramos o destino.',[
  e('운명을','o destino (objeto)',['운명 = destino','을 = objeto']),
  e('찾아낸','que encontramos',['찾다 = procurar, encontrar','-아 내다 = conseguir fazer até o fim']),
  e('둘이니까','porque somos dois',['둘 = dois','-이 = cópula','-니까 = porque'])])];
const bridge=[
 line('돌아보지 말아','Não olhe para trás.',[
  e('돌아보지 말아','não olhe para trás',['돌아보다 = olhar para trás','-지 말다 = pedir para não fazer','말아 é a forma informal'])]),
 line('운명을 찾아낸 우리니까','Porque somos nós que encontramos o destino.',[
  e('운명을 찾아낸','que encontramos o destino',['찾아내다 = conseguir encontrar','-ㄴ = relativo']),
  e('우리니까','porque somos nós',['우리 = nós','-이 = cópula','-니까 = porque'])]),
 line('후회하지 말아 baby','Não se arrependa, baby.',[
  e('후회하지 말아','não se arrependa',['후회하다 = arrepender-se','-지 말아 = pedido informal para não fazer'])]),
 line('영원히 영원히 영원히 영원히','Para sempre, para sempre, para sempre, para sempre.',[
  e('영원히','para sempre',['영원 = eternidade','-히 = forma adverbial','A repetição alonga o voto de permanência'])]),
 line('함께니까','Porque estamos juntos.',[
  e('함께니까','porque estamos juntos',['함께 = juntos','-니까 = porque'])])];
// Refrão — universo, séculos e eternidade.
const chorus=[
 line('우주가 생긴 그 날부터 계속','Desde o dia em que o universo nasceu, sem parar.',[
  e('우주가 생긴','em que o universo nasceu',['우주 = universo','생기다 = nascer, surgir','-ㄴ = relativo passado']),
  e('그 날부터 계속','desde aquele dia, sem parar',['날 = dia','-부터 = desde','계속 = continuamente'])]),
 line('무한의 세기를 넘어서 계속','Atravessando séculos infinitos, sem parar.',[
  e('무한의 세기를','os séculos infinitos (objeto)',['무한 = infinito','세기 = século','를 = objeto']),
  e('넘어서 계속','atravessando, sem parar',['넘다 = atravessar','-어서 = e então','계속 = continuamente'])]),
 line('우린 전생에도 아마 다음 생에도','Nós, na vida passada e talvez na próxima também.',[
  e('우린','nós (tópico)',['Contração de 우리는']),
  e('전생에도','na vida passada também',['전생 = vida anterior','-에도 = em + também']),
  e('아마 다음 생에도','talvez na próxima vida também',['아마 = talvez','다음 = próximo','생 = vida'])]),
 line('영원히 함께니까','Porque estamos juntos para sempre.',[
  e('영원히','para sempre',['영원 = eternidade','-히 = adverbial']),
  e('함께니까','porque estamos juntos',['함께 = juntos','-니까 = porque'])]),
 line('이 모든 건 우연이 아니니까','Tudo isso não é por acaso.',[
  e('이 모든 건','tudo isso',['건 contrai 것은: a coisa']),
  e('우연이 아니니까','porque não é coincidência',['우연 = acaso','-니까 = porque'])]),
 line('운명을 찾아낸 둘이니까','Porque somos os dois que encontramos o destino.',[
  e('운명을 찾아낸','que encontramos o destino',['찾아내다 = conseguir encontrar','-ㄴ = relativo']),
  e('둘이니까','porque somos dois',['둘 = dois','-니까 = porque'])]),
 line('DNA','DNA.',[]),
 en('I want it this love I want it real love','Eu quero este amor, eu quero um amor real.'),
 line('난 너에게만 집중해','Eu me concentro só em você.',[
  e('난','eu (tópico)',['Contração de 나는']),
  e('너에게만','só em você',['-에게 = para','-만 = apenas']),
  e('집중해','concentro-me',['집중하다 = concentrar-se','forma informal'])]),
 line('좀 더 세게 날 이끄네','Me puxa com ainda mais força.',[
  e('좀 더 세게','com um pouco mais de força',['좀 = um pouco','더 = mais','세게 = fortemente']),
  e('날 이끄네','me conduz',['날 = 나를','이끌다 = conduzir','-네 = constatação'])]),
 line('태초의 DNA가 널 원하는데','O DNA do início quer você, e.',[
  e('태초의','do início',['태초 = início dos tempos','의 = de']),
  e('DNA가','o DNA (sujeito)',['가 = sujeito']),
  e('널 원하는데','quer você, e',['원하다 = querer','-는데 liga ao contraste'])]),
 en('이건 필연이야 I love us','Isto é inevitável, I love us.'),
 en('우리만이 true lovers','Só nós somos true lovers.')];
// Rap — susto, fôlego e coração acelerado.
const rap=[
 line('그녀를 볼 때마다 소스라치게 놀라','Toda vez que a vejo, me assusto de sobressalto.',[
  e('그녀를','ela (objeto)',['그녀 = ela','를 = objeto']),
  e('볼 때마다','toda vez que vejo',['보다 = ver','-ㄹ 때마다 = toda vez que']),
  e('소스라치게 놀라','assusto-me de sobressalto',['소스라치다 = sobressaltar-se','-게 = adverbial','놀라다 = assustar-se'])]),
 line('신기하게 자꾸만 숨이 멎는 게 참 이상해 설마','É curioso, minha respiração para sem parar; é tão estranho, imagina.',[
  e('신기하게','curiosamente',['신기하다 = ser curioso','-게 = adverbial']),
  e('자꾸만','sem parar, vivendo',['자꾸 = repetidamente','-만 = apenas']),
  e('숨이 멎는 게','o fato de a respiração parar',['숨 = respiração','멎다 = parar','-는 게 = o fato de']),
  e('참 이상해 설마','é tão estranho, imagina',['참 = tão','이상하다 = ser estranho','설마 = imagina, duvido'])]),
 line('이런 게 말로만 듣던 사랑이란 감정일까','Será que isto é aquele sentimento chamado amor, que eu só ouvia falar?',[
  e('이런 게','uma coisa assim',['이런 = assim','게 contrai 것이']),
  e('말로만 듣던','que eu só ouvia falar',['말 = palavra','-로 = por meio de','듣다 = ouvir','-던 = lembrança']),
  e('사랑이란 감정일까','será o sentimento chamado amor?',['사랑 = amor','-이란 = chamado','감정 = sentimento','-일까 = será?'])]),
 line('애초부터 내 심장은 널 향해 뛰니까','Desde o início meu coração bate em sua direção, porque.',[
  e('애초부터','desde o início',['애초 = início','-부터 = desde']),
  e('내 심장은','meu coração (tópico)',['심장 = coração','은 = tópico']),
  e('널 향해 뛰니까','porque corre em sua direção',['향하다 = dirigir-se','뛰다 = correr, bater','-니까 = porque'])])];
// Final — la la la e destino.
const outro=[
 line('DNA','DNA.',[]),
 line('La la la la la','La la la la la.',[]),
 line('La la la la la','La la la la la.',[]),
 line('우연이 아니니까','Porque não é por acaso.',[
  e('우연이 아니니까','porque não é coincidência',['우연 = acaso','-니까 = porque'])]),
 line('La la la la la','La la la la la.',[]),
 line('La la la la la','La la la la la.',[]),
 line('우연이 아니니까','Porque não é por acaso.',[
  e('우연이 아니니까','porque não é coincidência',['Reprise que fecha a tese da música'])]),
 line('DNA','DNA.',[])];
export const dnaSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Pré-refrão',lines:pre},
 {title:'Refrão',lines:chorus},
 {title:'Rap',lines:rap},
 {title:'Pré-refrão',lines:pre},
 {title:'Refrão',lines:chorus},
 {title:'Ponte',lines:bridge},
 {title:'Pré-refrão',lines:pre},
 {title:'Final',lines:outro}];
export const dnaVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'알아보다',pt:'reconhecer, identificar'},
  {ko:'부르다',pt:'chamar'},
  {ko:'말하다',pt:'dizer, falar'},
  {ko:'찾다',pt:'procurar, encontrar'},
  {ko:'헤매다',pt:'vagar, andar perdido'},
  {ko:'만나다',pt:'encontrar alguém'},
  {ko:'주다',pt:'dar'},
  {ko:'내밀다',pt:'estender, oferecer'},
  {ko:'정하다',pt:'decidir'},
  {ko:'걱정하다',pt:'preocupar-se'},
  {ko:'다르다',pt:'ser diferente (descritivo)'},
  {ko:'찾아내다',pt:'conseguir encontrar'},
  {ko:'생기다',pt:'nascer, surgir'},
  {ko:'넘다',pt:'atravessar'},
  {ko:'집중하다',pt:'concentrar-se'},
  {ko:'이끌다',pt:'conduzir, guiar'},
  {ko:'원하다',pt:'querer, desejar'},
  {ko:'보다',pt:'ver'},
  {ko:'놀라다',pt:'assustar-se'},
  {ko:'소스라치다',pt:'sobressaltar-se'},
  {ko:'멎다',pt:'parar (respiração, movimento)'},
  {ko:'듣다',pt:'ouvir'},
  {ko:'뛰다',pt:'correr; bater (coração)'},
  {ko:'향하다',pt:'dirigir-se a'},
  {ko:'돌아보다',pt:'olhar para trás'},
  {ko:'후회하다',pt:'arrepender-se'},
  {ko:'되다',pt:'tornar-se; -게 되다: acabar fazendo'}],
 nouns:[
  {ko:'첫눈',pt:'primeiro olhar'},
  {ko:'눈',pt:'olho; olhar (também: neve)'},
  {ko:'혈관',pt:'vaso sanguíneo, veia'},
  {ko:'속',pt:'interior'},
  {ko:'만남',pt:'encontro'},
  {ko:'수학',pt:'matemática'},
  {ko:'공식',pt:'fórmula'},
  {ko:'종교',pt:'religião'},
  {ko:'율법',pt:'lei, mandamento'},
  {ko:'우주',pt:'universo'},
  {ko:'섭리',pt:'providência'},
  {ko:'운명',pt:'destino'},
  {ko:'증거',pt:'prova, evidência'},
  {ko:'꿈',pt:'sonho'},
  {ko:'출처',pt:'origem, fonte'},
  {ko:'손',pt:'mão'},
  {ko:'숙명',pt:'destino inevitável'},
  {ko:'우연',pt:'acaso, coincidência'},
  {ko:'둘',pt:'dois'},
  {ko:'세기',pt:'século'},
  {ko:'무한',pt:'infinito'},
  {ko:'날',pt:'dia'},
  {ko:'전생',pt:'vida passada'},
  {ko:'생',pt:'vida'},
  {ko:'영원',pt:'eternidade'},
  {ko:'함께',pt:'companhia; juntos'},
  {ko:'태초',pt:'início dos tempos'},
  {ko:'그녀',pt:'ela'},
  {ko:'숨',pt:'respiração'},
  {ko:'말',pt:'palavra, fala'},
  {ko:'사랑',pt:'amor'},
  {ko:'감정',pt:'sentimento, emoção'},
  {ko:'심장',pt:'coração'},
  {ko:'애초',pt:'início, começo'}]};
