// Letra enviada pela usuária; imagens e fragmentos preservados.
import type {StudyLine,StudyEntry} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const chorus=(last=false)=>[en('You call, I run','Você chama, eu corro.'),en(last?'Dark days (dark days) and find the sun':'Dark days and find the sun','Dias escuros… e encontrar o sol.'),en(last?"I don't care (don't care), how far":"I don't care how far",'Não me importa a distância.'),en('Just wait, dawn','Só espere pelo amanhecer.')];
const first=[
 en('Baby, what you want? Baby, what you need?','Amor, o que você quer? Amor, do que você precisa?'),
 en("Tell me how you feel, every night I'm thinkin' of, mm",'Me diga como se sente; toda noite estou pensando… mm.'),
 l('해 질 때의 바람, 해 뜰 때의 온도','O vento ao pôr do sol, a temperatura ao nascer do sol.',[
 e('해','sol','Substantivo que aparece duas vezes: o sol se põe e o sol nasce.','A partícula de sujeito está omitida; formas explícitas seriam 해가 질 때 e 해가 뜰 때.'),
 e('질','que se põe; ao se pôr','지다 + -ㄹ modifica 때.','Com 해, 지다 é pôr-se, não perder uma disputa.'),
 e('때의','do momento em que','때 é momento; 의 liga a expressão temporal ao nome seguinte.','해 질 때의 바람 é o vento do momento em que o sol se põe.'),
 e('바람','vento','Substantivo para o movimento do ar.','Embora 바람 também possa significar desejo, o par com temperatura favorece aqui vento.'),
 e('뜰','que nasce; ao nascer','뜨다 + -ㄹ modifica 때.','Com 해, descreve o nascer do sol. Não confundir com 틀, de 트다, no verso sobre o amanhecer.'),
 e('온도','temperatura','Substantivo que recebe o modificador 해 뜰 때의.','Completa o par de sensações entre entardecer e amanhecer.')]),
 l('네가 느껴야 할 저녁부터 아침의 볕','Do entardecer à luz da manhã que você deveria sentir…',[
 e('네가','você (sujeito)','너 com 가 aparece como 네가.','É o sujeito da ação de sentir, não um possessivo.'),
 e('느껴야','deveria sentir; precisa sentir','느끼다 + -어야 → 느껴야.','Inicia a construção -아/어야 하다 de necessidade ou obrigação.'),
 e('할','que deve fazer','하다 + -ㄹ modifica o grupo nominal seguinte.','느껴야 할 significa que deveria sentir. A tradução “deveria” é contextual, não uma marca de passado no coreano.'),
 e('저녁부터','desde o entardecer','저녁 é tarde/noite; 부터 marca o ponto inicial.','Não há 까지 explícito na outra ponta; a tradução recupera o intervalo poético.'),
 e('아침의','da manhã','아침 + 의.','Liga a manhã à luz solar mencionada depois.'),
 e('볕','luz/calor do sol','Substantivo que destaca os raios solares e seu calor.','Distingue-se de 빛, luz em sentido mais amplo; a imagem atravessa o escuro até a manhã.')]),
 l('잃은 너의 것, 좀 이른 어둠의 문턱, oh, oh','Aquilo que você perdeu; o limiar de uma escuridão um pouco precoce, oh, oh.',[
 e('잃은','perdido; que perdeu','잃다 + -은 modifica um nome.','O grupo 잃은 너의 것 tem ordem poética: interpretamos aquilo seu que foi perdido; a pessoa que perdeu não é marcada por uma partícula aqui.'),
 e('너의','seu; de você','너 + 의, posse.','Modifica 것, aquilo que pertence à pessoa.'),
 e('것','coisa; aquilo','Substantivo dependente para uma entidade não especificada.','A letra não determina concretamente qual perda está sendo descrita.'),
 e('좀','um pouco','Redução coloquial de 조금.','Modifica a intensidade de 이른.'),
 e('이른','cedo; precoce','Forma adnominal de 이르다, ser cedo.','Não é uma forma de 잃다: 잃은 e 이른 são palavras diferentes que se aproximam sonoramente.'),
 e('어둠의','da escuridão','어둠 + 의.','Qualifica o limiar por uma imagem de chegada do escuro.'),
 e('문턱','soleira; limiar','Literalmente a parte inferior da entrada de uma porta.','Aqui a leitura de passagem para a escuridão é figurada; o fragmento não possui verbo final explícito.')]),
 l('동이 틀 때까지 난 (yeah)','Até amanhecer, eu… (yeah)',[
 e('동이','o leste/o amanhecer (sujeito)','동 com 이 integra a expressão 동이 트다, o céu clarear ao amanhecer.','O conjunto deve ser aprendido como expressão; não é qualquer sentido isolado de 동.'),
 e('틀','quando clarear','트다 + -ㄹ → 틀.','Modifica 때; é diferente de 뜰, de 뜨다, usado com o sol.'),
 e('때까지','até o momento em que','때 + 까지 marca limite temporal.','A ação do narrador continua na linha seguinte.'),
 e('난','eu (tópico)','Contração de 나는.','Apresenta quem permanece ao lado da outra pessoa até o amanhecer.')]),
 l('널 지키며 into the sun, uh, uh (ooh)','Protegendo você, rumo ao sol, uh, uh (ooh).',[
 e('널','você (objeto)','Contração de 너를.','Marca a pessoa protegida.'),
 e('지키며','protegendo; enquanto protege','지키다 + -며 liga ações simultâneas ou associadas.','Aqui é proteger/cuidar de alguém, não cumprir uma regra, outro uso possível de 지키다.')])
];
const second=[en('24, 24-7 feel like 24 (24, 24)','24, o tempo todo, parece 24 (24, 24).'),
 l('태양을 향해 뛰어도 (뛰어도)','Mesmo que eu corra em direção ao sol (mesmo que corra)…',[
 e('태양을','o sol (alvo)','태양 é sol; 을 marca o alvo da expressão 향하다.','Tem o mesmo referente geral de 해, com vocabulário sino-coreano.'),
 e('향해','em direção a','Forma de 향하다, dirigir-se ou orientar-se para.','태양을 향해 indica direção, não que se chegue ao sol.'),
 e('뛰어도','mesmo correndo','뛰다 + -어도 introduz concessão.','뛰다 pode ser correr ou saltar; o movimento em direção ao sol favorece correr.')]),
 l("가까워지진 않아도 (않아도), oh, no",'Mesmo que eu não consiga me aproximar (mesmo que não), oh, não…',[
 e('가까워지진','quanto a ficar mais perto…','가깝다 → 가까워 + 지다 indica tornar-se próximo; -지는 se contrai em -진.','O 는 destaca a ação negada no segmento seguinte. Não é passado.'),
 e('않아도','mesmo que não','않다 + -아도; com -지 forma a negação -지 않다.','A concessão mantém a determinação apesar de não diminuir a distância.')]),
 l("Don't be afraid, 기억해",'Não tenha medo, lembre-se.',[
 e('기억해','lembre-se','Forma informal de 기억하다: 기억하여 → 기억해.','Aqui funciona como pedido; a forma 해 também pode ser declarativa em outro contexto.')]),
 l('그저 잠시뿐인 걸, 어두운 밤을 지나','É só por um instante; atravessando a noite escura…',[
 e('그저','somente; apenas','Advérbio que limita ou suaviza a afirmação.','Reforça que o período difícil é temporário.'),
 e('잠시뿐인','que é só por um instante','잠시 é um breve momento; 뿐 limita; 인 vem da cópula 이다 modificando 걸.','Aqui 뿐 significa apenas, não uma pessoa nem um contador.'),
 e('걸','o fato de que; que…','Contração de 것을.','Pode retomar 기억해: lembre-se de que é só temporário. A pontuação poética também permite um tom de constatação, sem transformar a forma em ordem.'),
 e('어두운','escura','어둡다 com -은 alterna ㅂ para 우: 어두운.','Modifica 밤.'),
 e('밤을','a noite (percurso)','밤 + 을.','É o intervalo atravessado por 지나다.'),
 e('지나','passando por; atravessando','지나다 + -아 → 지나.','Conecta a travessia da noite à chegada da manhã.')]),
 l('아침이 오는 걸 맞으며 눈을 떠 into the sun','Recebendo a chegada da manhã, abra os olhos rumo ao sol.',[
 e('아침이','a manhã (sujeito)','아침 + 이.','É o sujeito de 오다, chegar.'),
 e('오는','que chega; vindo','오다 + -는 modifica 걸.','아침이 오는 것 é o fato de a manhã chegar.'),
 e('걸','a chegada; o fato de que (objeto)','Contração de 것을.','Aqui o grupo nominal é objeto de 맞다, acolher/receber.'),
 e('맞으며','acolhendo; enquanto recebe','맞다 + -으며.','Neste contexto significa receber a chegada da manhã, não estar correto nem apanhar.'),
 e('눈을','os olhos (objeto)','눈 + 을.','눈을 뜨다 é abrir os olhos; não significa aqui neve.'),
 e('떠','abra','뜨다 + -어 → 떠.','O contexto favorece um convite a abrir os olhos; é outro uso de 뜨다 além de o sol nascer.')])
];
const third=[
 l('개와 늑대의 시간','A hora do cão e do lobo.',[
 e('개와','o cão e','개 é cão; 와 coordena nomes após vogal.','Não é aqui o contador genérico 개.'),
 e('늑대의','do lobo','늑대 + 의.','Na expressão, a posse relaciona 시간 ao conjunto cão e lobo.'),
 e('시간','hora; tempo','Substantivo final do grupo nominal.','A expressão evoca um período de penumbra e incerteza. A leitura simbólica não deve ser confundida com uma referência específica a uma obra comprovada pelo verso.')]),
 l('부서진 짐승들의 나침반','A bússola das feras despedaçadas.',[
 e('부서진','quebradas; despedaçadas','부서지다 + -ㄴ modifica 짐승들.','O verbo descreve quebrar-se; não é a forma ativa 부수다, quebrar algo.'),
 e('짐승들의','das feras/dos animais','짐승 + plural 들 + possessivo 의.','Feras é uma opção expressiva de tradução; o nome também pode ser simplesmente animais.'),
 e('나침반','bússola','Instrumento que indica direção.','A imagem pode sugerir busca de orientação; isso é interpretação poética, não um significado novo do dicionário.')]),
 l('우리들의 피난, 소란들과 미련 앞','Nosso refúgio, diante do tumulto e dos apegos que restam…',[
 e('우리들의','nosso; de nós','우리 + 들 + 의.','우리 já é plural; 들 pode dar ênfase ao grupo.'),
 e('피난','refúgio; fuga de um perigo','Substantivo para escapar e buscar abrigo diante de uma ameaça.','Não é 피난처, o lugar de refúgio, embora a tradução possa usar refúgio para a experiência descrita.'),
 e('소란들과','os tumultos e','소란 é agitação ou tumulto; 들 pluraliza e 과 coordena.','Conecta o ruído exterior a 미련.'),
 e('미련','apego persistente; pesar','Substantivo para algo que ainda não se consegue deixar para trás.','Não confundir com 미련하다, ser tolo; o contexto favorece apego ou arrependimento.'),
 e('앞','diante; à frente','Substantivo espacial usado também figuradamente.','A partícula 에 está omitida; a imagem introduz aquilo diante do qual se reage.')]),
 l('숨 쉬며 반항하는 인간 (-하는 인간)','Um ser humano que respira e resiste (que resiste).',[
 e('숨','respiração; fôlego','Substantivo da expressão 숨을 쉬다.','A partícula 을 pode ser omitida, como na letra.'),
 e('쉬며','respirando','쉬다 + -며 conecta a ação simultânea.','Com 숨, é respirar; não é aqui descansar.'),
 e('반항하는','que resiste; que se rebela','반항하다 + -는 modifica 인간.','Descreve reação contra uma imposição ou autoridade; o verso não especifica uma ação violenta.'),
 e('인간','ser humano','Nome modificado por 반항하는.','O fragmento descreve uma figura humana sem predicado final explícito.'),
 e('하는','eco de -하는 em 반항하는','O trecho entre parênteses repete parte da expressão anterior.','A sílaba verbal não acrescenta aqui uma nova ação independente.')])
];
const fourth=[
 l('난 집에 가고파, 네가 있는 곳','Quero ir para casa, para onde você está.',[
 e('난','eu (tópico)','Contração de 나는.','O desejo é apresentado em primeira pessoa.'),
 e('집에','para casa','집 é casa; 에 marca destino com 가다.','A linha identifica casa com o lugar onde está a outra pessoa.'),
 e('가고파','quero ir','Contração expressiva de 가고 싶어: 가다 + -고 싶다.','É frequente em linguagem lírica; a forma mais neutra para aprender é 가고 싶어/가고 싶어요.'),
 e('네가','você (sujeito)','Forma de 너 + 가.','Marca quem está no lugar descrito.'),
 e('있는','em que está','있다 + -는 modifica 곳.','Constrói uma oração relativa sem pronome equivalente a onde.'),
 e('곳','lugar','Substantivo modificado por 네가 있는.','Retoma o destino chamado casa; não há uma partícula final expressa.')]),
 l('풀이 뜨고 별 지는 곳','O lugar onde a erva se eleva e as estrelas se põem.',[
 e('풀이','a erva/o capim (sujeito)','풀 + 이.','Preservamos 풀이 como enviado. A tradução toma 풀 como vegetação, sem trocar silenciosamente a palavra por outra.'),
 e('뜨고','se eleva e; flutua e','뜨다 + -고 conecta as imagens.','풀이 뜨다 é uma combinação incomum. A leitura literal é mantida como imagem poética; não a ensinamos como expressão usual para a grama crescer.'),
 e('별','estrela; estrelas','Substantivo sem plural obrigatório.','A partícula de sujeito está omitida antes de 지는.'),
 e('지는','que se põem; que desaparecem','지다 + -는 modifica 곳.','A leitura é o desaparecimento dos astros, em paralelo com o sol se pôr, não perder uma disputa.'),
 e('곳','lugar','Nome final da oração relativa.','O verso continua descrevendo o destino do desejo anterior.')]),
 l('불을 건네 줘, 이 기름 속','Me passe o fogo, aqui neste óleo.',[
 e('불을','o fogo (objeto)','불 + 을.','Forma uma imagem de fogo e combustível; é linguagem poética, não uma instrução de uso prático.'),
 e('건네','passe; entregue','건네다 + -어 → 건네.','O verbo é passar algo a alguém; o destinatário está implícito.'),
 e('줘','faça por mim; por favor','Forma informal de 주다.','O auxiliar -아/어 주다 apresenta entregar como favor solicitado.'),
 e('이','este','Determinante demonstrativo.','Modifica 기름; não é aqui a partícula de sujeito.'),
 e('기름','óleo; combustível','Substantivo que pode designar óleo ou combustível conforme o contexto.','A tradução conserva óleo sem especificar gasolina, que a palavra não exige.'),
 e('속','dentro; interior','Substantivo espacial.','이 기름 속 é um fragmento de localização, sem partícula explícita.')]),
 l('너는 멋지고 달은 아마 뜨지 않을 거야 오늘 (hm)','Você é incrível e a lua provavelmente não vai nascer hoje (hm).',[
 e('너는','você (tópico)','너 + 는.','Contrasta com 달은, outro tópico da linha.'),
 e('멋지고','é incrível e','멋지다 + -고 conecta descrições.','Pode significar elegante, impressionante ou admirável; incrível é uma escolha contextual.'),
 e('달은','quanto à lua','달 + 은.','É o astro sobre o qual se faz a suposição seguinte.'),
 e('아마','provavelmente; talvez','Advérbio de incerteza.','A previsão da letra não é apresentada como certeza.'),
 e('뜨지','nascer (antes da negação)','뜨다 + -지 inicia -지 않다.','Com 달, significa a lua surgir no horizonte.'),
 e('않을','que não irá','않다 + -을 modifica 거.','Nega o nascimento da lua na construção prospectiva.'),
 e('거야','vai; será','Contração informal de 것이야, de 것 + cópula.','Com -(으)ㄹ, participa da expressão de previsão. Não indica posse aqui.'),
 e('오늘','hoje','Expressão de tempo deslocada para o fim.','O deslocamento é possível na fala e na poesia; em ordem neutra costuma aparecer antes do predicado.')]),
 en("And if we run out of time, I'll chase the feeling",'E, se nosso tempo acabar, vou perseguir esse sentimento.'),en('Never too far behind','Nunca longe demais para trás.')
];
export const intoTheSunSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:[en('Baby, you remind me','Amor, você me faz lembrar…'),en('I want someone like you, ooh','Quero alguém como você, ooh.'),en('Fires are never dying','As chamas nunca se apagam.'),en('I want someone like you, ooh-whoa','Quero alguém como você, ooh-whoa.'),en('Nobody knows me, honey','Ninguém me conhece, amor.'),en('No one like you, ooh','Ninguém como você, ooh.'),en('If you wanna go there','Se você quiser ir até lá,'),en("I'm ready to be with you, no-oh",'Estou pronto para estar com você, no-oh.')]},
 {title:"Refrão",lines:chorus()},
 {title:"Verso 1",lines:first},
 {title:"Verso 2",lines:second},
 {title:"Refrão",lines:chorus()},
 {title:"Ponte",lines:third},
 {title:"Verso final",lines:fourth},
 {title:"Refrão",lines:chorus(true)},
 {title:"Final",lines:[en("I'll follow you into the sun",'Vou seguir você rumo ao sol.'),en('Into the sun, into the sun','Rumo ao sol, rumo ao sol.'),en("I'll follow you into the sun",'Vou seguir você rumo ao sol.'),en('Into the sun, into the sun','Rumo ao sol, rumo ao sol.'),en("I'll follow you into the sun (sun, ah)",'Vou seguir você rumo ao sol (sol, ah).'),en('Into the sun, into the sun','Rumo ao sol, rumo ao sol.'),en("I'll follow you into the sun (you, oh)",'Vou seguir você rumo ao sol (você, oh).'),en('Into the sun (you), into the sun','Rumo ao sol (você), rumo ao sol.')]}
];
export const intoTheSunVocabulary={verbs:[{ko:'지다',pt:'pôr-se; desaparecer (astros)'},{ko:'뜨다',pt:'nascer (astro); elevar-se; abrir os olhos em 눈을 뜨다'},{ko:'느끼다',pt:'sentir'},{ko:'잃다',pt:'perder'},{ko:'이르다',pt:'ser cedo (descritivo)'},{ko:'트다',pt:'clarear, em 동이 트다'},{ko:'지키다',pt:'proteger; guardar'},{ko:'향하다',pt:'dirigir-se para'},{ko:'뛰다',pt:'correr; saltar'},{ko:'가까워지다',pt:'ficar mais perto'},{ko:'기억하다',pt:'lembrar-se'},{ko:'어둡다',pt:'ser escuro (descritivo)'},{ko:'지나다',pt:'passar; atravessar'},{ko:'오다',pt:'vir; chegar'},{ko:'맞다',pt:'receber; acolher (neste contexto)'},{ko:'부서지다',pt:'quebrar-se'},{ko:'쉬다',pt:'respirar, em 숨 쉬다'},{ko:'반항하다',pt:'resistir; rebelar-se'},{ko:'가다',pt:'ir'},{ko:'있다',pt:'estar; existir'},{ko:'건네다',pt:'passar; entregar'},{ko:'주다',pt:'dar; fazer por alguém (auxiliar)'},{ko:'멋지다',pt:'ser admirável; ser elegante (descritivo)'}],nouns:[{ko:'해',pt:'sol'},{ko:'때',pt:'momento (dependente)'},{ko:'바람',pt:'vento'},{ko:'온도',pt:'temperatura'},{ko:'저녁',pt:'entardecer; início da noite'},{ko:'아침',pt:'manhã'},{ko:'볕',pt:'luz e calor do sol'},{ko:'어둠',pt:'escuridão'},{ko:'문턱',pt:'soleira; limiar'},{ko:'동',pt:'leste, em 동이 트다, amanhecer'},{ko:'태양',pt:'sol'},{ko:'밤',pt:'noite'},{ko:'눈',pt:'olho; olhos'},{ko:'개',pt:'cão'},{ko:'늑대',pt:'lobo'},{ko:'시간',pt:'tempo; hora'},{ko:'짐승',pt:'animal; fera'},{ko:'나침반',pt:'bússola'},{ko:'피난',pt:'fuga em busca de abrigo'},{ko:'소란',pt:'tumulto; agitação'},{ko:'미련',pt:'apego persistente; pesar'},{ko:'숨',pt:'respiração; fôlego'},{ko:'인간',pt:'ser humano'},{ko:'집',pt:'casa'},{ko:'곳',pt:'lugar'},{ko:'풀',pt:'erva; capim (leitura da palavra enviada)'},{ko:'별',pt:'estrela'},{ko:'불',pt:'fogo'},{ko:'기름',pt:'óleo; combustível'},{ko:'속',pt:'interior'},{ko:'달',pt:'lua'}]};
