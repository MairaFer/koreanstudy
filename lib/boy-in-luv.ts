// Boy in Luv (상남자) — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas morfológicas e lexicais termo a termo (com no mínimo duas notas cada).
// Linhas estritamente em inglês recebem a tradução correspondente com english: true.
import type {StudyLine,StudyEntry} from './spring-day';

const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Estrofe 1: Abertura (Intro)
const intro=[
 line('되고파 너의 오빠','Quero ser o seu namorado',[
  e('되고파','quero me tornar, quero ser',['되다 = tornar-se, virar','-고파 = contração coloquial e lírica de -고 싶어 (desejo de primeira pessoa)','Na fala cotidiana a forma completa seria 되고 싶어; a contração traz urgência e tom juvenil'],'되고파 é a redução poética de 되고 싶어. Em letras de música e poemas, -고파 reforça o desejo direto, quase impetuoso.'),
  e('너의','seu, sua',['너 = você (pronome informal neutro/íntimo)','-의 = partícula genitiva de posse: 너 + 의 → 너의 (teu/tua/seu/sua)']),
  e('오빠','oppa (irmão mais velho / namorado)',['Termo afetuoso usado por mulheres para rapazes mais velhos ou namorados','Aqui sintetiza o papel protetor, confiante e carinhoso almejado pelo eu-lírico'],'오빠 originalmente indica irmão mais velho para mulheres mais jovens. Na cultura coreana e no vocabulário romântico, é amplamente usado por namoradas para se referir aos parceiros.')
 ]),
 line('너의 사랑이 난 너무 고파','Tenho tanta fome do seu amor',[
  e('너의','seu, sua',['너 = você informal','-의 = partícula de posse (teu/sua)']),
  e('사랑이','o amor (sujeito)',['사랑 = amor, afeto','-이 = partícula de sujeito posposta a consoante final (ㅇ)']),
  e('난','eu (tópico)',['Contração informal de 나는 (나 = eu + -는 = partícula de tópico)','Coloca o falante como o centro da declaração']),
  e('너무','muito, demais',['Advérbio de intensidade que expressa excesso ou intensidade extrema',"Aqui intensifica 고파: a fome de amor é muito forte."]),
  e('고파','sinto fome; estou faminto',['고프다 = estar faminto; 배고프다 = estar com fome','배가 고프다 reduz-se aqui figurativamente com 사랑이: “ter fome do amor de alguém”'])
 ]),
 line('되고파 너의 오빠','Quero ser o seu namorado',[
  e('되고파','quero me tornar, quero ser',['되다 = tornar-se, virar','-고파 = contração coloquial de -고 싶어']),
  e('너의','seu, sua',['너 = você','-의 = partícula possessiva']),
  e('오빠','oppa (namorado)',['Termo carinhoso de relacionamento','A repetição do verso crava a ambição central da canção'])
 ]),
 line('널 갖고 말 거야 두고 봐','Vou ter você de qualquer jeito, espere e verá',[
  e('널','você (objeto direto)',['Contração informal de 너를 (너 = você + -를 = partícula de objeto)',"A partícula de objeto identifica a pessoa a quem a ação se dirige."]),
  e('갖고 말 거야','vou acabar conquistando / vou ter de qualquer jeito',['갖다 = ter, possuir, conquistar','-고 말다 = expressa determinação férrea de realizar a ação ou desfecho inevitável','-ㄹ 거야 = terminação informal de futuro/certeza (이다 + 거야)'],'A estrutura -고 말다 expressa que o falante levará a ação até as últimas consequências, custe o que custar.'),
  e('두고 봐','espere e verá',['두다 = colocar, deixar','보다 = ver, observar','두고 보다 = esperar o desenrolar dos fatos para conferir o resultado: “apenas observe”'])
 ])
];

// Estrofe 2: Refrão-pergunta (Hook)
const hook=[
 line('왜 내 맘을 흔드는 건데','Por que você fica balançando o meu coração?',[
  e('왜','por que?',['Advérbio interrogativo direto','Abre o refrão com indignação direta']),
  e('내','meu, minha',['Contração possessiva de 나의 (나 = eu + -의 = posse)','Expressa relação íntima de posse']),
  e('맘을','o meu coração / sentimento (objeto)',['맘 = forma contraída e expressiva de 마음 (coração, mente, sentimentos)','-을 = partícula de objeto direto']),
  e('흔드는 건데','por que fica agitando? / por que está mexendo?',['흔들다 = sacudir, balançar, agitar','-는 = sufixo modificador de presente relativo','건데 = fusão de 것 + 인데 (expressa estranheza ou cobrança emocional)'])
 ]),
 line('왜 내 맘을 흔드는 건데','Por que você fica balançando o meu coração?',[
  e('왜','por que?',['Pergunta retórica cheia de frustração','Repete a cobrança inicial']),
  e('내','meu',['Posse na primeira pessoa (나의)','Vem antes do substantivo de sentimento']),
  e('맘을','meu coração (objeto)',['맘 = 마음 (sentimentos/coração)','-을 = partícula de objeto']),
  e('흔드는 건데','por que está mexendo comigo?',['흔들다 = agitar, abalar sentimentos','-는 건데 = terminação explicativa de cobrança'])
 ]),
 line('왜 내 맘을 흔드는 건데','Por que você fica balançando o meu coração?',[
  e('왜','por que?',['Terceira repetição intensiva do gancho','Aumenta a carga de ansiedade do eu-lírico']),
  e('내','meu',['Possessivo íntimo de primeira pessoa','나 + 의 = 내']),
  e('맘을','meu coração',['맘 = sentimentos, coração interno','-을 = marca de objeto']),
  e('흔드는 건데','por que você balança tanto?',['흔들다 = balançar','건데 = 것 + 인데'])
 ]),
 line('흔드는 건데 흔드는 건데','Fica mexendo comigo, fica balançando tudo',[
  e('흔드는 건데','fica agitando / fica mexendo',['흔들다 = balançar, mexer com os sentimentos','-는 건데 = terminação explicativa e enfática']),
  e('흔드는 건데','fica mexendo / balança tudo',['A repetição do termo traduz a oscilação incontrolável do eu-lírico','Fecha o gancho rítmico da faixa'])
 ])
];

// Estrofe 3: Verso 1 (Suga)
const verse1=[
 line('아빠, 아빤 대체 어떻게','Pai, afinal como o senhor',[
  e('아빠,','papai,',['Forma carinhosa e informal para pai (아버지)','O eu-lírico recorre ao pai em busca de respostas']),
  e('아빤','quanto ao papai (tópico)',['Contração coloquial de 아빠는 (아빠 + -는)','Coloca o pai no centro do tópico']),
  e('대체','afinal de contas, afinal',['Advérbio de ênfase para indagações inquietas','Demonstra perplexidade do falante']),
  e('어떻게','de que maneira, como',['Forma adverbial interrogativa de 어떻다 (ser como)','Pergunta pelo método da conquista'])
 ]),
 line('엄마한테 고백한 건지','se declarou para a mamãe?',[
  e('엄마한테','para a mamãe',['엄마 = mamãe','-한테 = partícula dativa informal para pessoas: a, para']),
  e('고백한 건지','será como você se declarou?',['고백하다 = declarar-se, confessar o amor (告白)','-ㄴ = terminação relativa pretérita','건지 = contração de 것인지 (것 + 이다 + -ㄴ지, dúvida indireta)'])
 ]),
 line('편지라도 써야 될런지','Será que devo ao menos escrever uma carta?',[
  e('편지라도','ao menos uma carta / nem que seja uma carta',['편지 = carta','-라도 = partícula que indica opção mínima aceitável: “ao menos, nem que seja”']),
  e('써야','ter que escrever',['쓰다 = escrever','-어야 = marca de condição necessária: ter que escrever']),
  e('될런지','será que vai dar certo? / será que seria o caso?',['되다 = dar certo, resolver-se','-ㄹ런지 = forma coloquial de -(으)ㄹ는지 (marca incerteza, dúvida reflexiva)'])
 ]),
 line('뭔지, 니 앞에서 난 먼지','Não sei o que é: na sua frente viro poeira',[
  e('뭔지,','o que é isso? / não sei bem o que é,',['Contração de 무엇인지 (무엇 = o que + 이다 + -ㄴ지 = dúvida)','Indica confusão mental']),
  e('니 앞에서','na sua frente',['니 = forma falada e coloquial para 네 (você/teu)','앞 = frente; -에서 = partícula locativa: diante de']),
  e('난','eu (tópico)',['Contração de 나는 (나 + -는)','Marca o contraste do eu-lírico diminuído']),
  e('먼지','poeira, pó',['Jogo sonoro entre 뭔지 (o que quer que seja) e 먼지 (poeira insignificante)','Ilustra como se sente pequeno perto de quem ama'],'O verso explora um trocadilho poético entre 뭔지 (não sei o que é) e 먼지 (grão de poeira), ilustrando como o jovem se sente miúdo e tímido perto de quem ama.')
 ])
];


// Estrofe 4: Verso 1 continuação (RM)
const verse2=[
 line('괜히 틱틱대고','Fico agindo com birra à toa,',[
  e('괜히','à toa, em vão, sem motivo',['Advérbio que expressa ação desnecessária ou sem justificativa real','Mostra o arrependimento do eu-lírico por sua atitude']),
  e('틱틱대고','reclamando com grosseria e…',['틱틱대다 = falar com rispidez, resmungar, dar respostas curtas por birra','-고 = conjunção coordenativa: e…'])
 ]),
 line('씩씩대고 징징대게 돼','bufo de raiva e começo a choramingar',[
  e('씩씩대고','bufando de irritação e…',['씩씩대다 = respirar pesadamente por raiva ou frustração','-고 = conjunção coordenativa: e…']),
  e('징징대게 돼','acabo choramingando feito criança',['징징대다 = resmungar, manhar, choramingar repetidamente','-게 되다 = acabar caindo em determinado estado sem controle voluntário'])
 ]),
 line('나는 진지한데','Eu estou falando sério, mas',[
  e('나는','eu (tópico contrastivo)',['나 = eu','-는 = partícula de contraste']),
  e('진지한데','estou sério, mas…',['진지하다 = ser sincero, sério (眞摯)','-ㄴ데 = terminação de contexto prévio com leve contraste'])
 ]),
 line('찌질하게 시비나 걸게 돼','acabo arranjando briga que nem um perdedor',[
  e('찌질하게','de forma patética, feito um perdedor',['찌질하다 = gíria para agir de modo imaturo, inseguro ou mesquinho','-게 = sufixo adverbial']),
  e('시비나','ao menos uma provocação / briga à toa',['시비 = briga, provocação, implicância (是非)','-나 = partícula de resignação: “ao menos, implicância mesmo”']),
  e('걸게 돼','acabo puxando briga',['시비를 걸다 = arrumar encrenca, provocar conversa fiada','-게 되다 = acabar fazendo, virar consequência involuntária'])
 ]),
 line('뭔데 신경 쓰여','O que você tem que me deixa tão encucado?',[
  e('뭔데','o que é você? / o que está acontecendo?',['뭐 = o que','-ㄴ데 = terminação interrogativa coloquial']),
  e('신경 쓰여','fico incomodado / não consigo tirar da cabeça',['신경 = nervo, atenção (神經)','쓰이다 = ser usado, ser afetado (voz passiva de 쓰다)','신경이 쓰이다 = preocupar-se, ficar encucado, importar-se'])
 ]),
 line('다 큰 날 애로 만들어','Você faz de mim, já tão crescido, uma criança',[
  e('다 큰','totalmente crescido / já adulto',['다 = completamente, tudo','크다 = crescer; 큰 = forma relativa pretérita: “que já cresceu”']),
  e('날','a mim (objeto)',['Contração de 나를 (나 + -를)',"나 é eu; 를 marca o objeto, por isso a tradução neste contexto é a mim."]),
  e('애로','em uma criança',['애 = forma reduzida de 아이 (criança, garoto)','-로 = partícula de direção ou transformação: em']),
  e('만들어','transforma, faz ficar',['만들다 = fazer, transformar','-어 = terminação de presente informal'])
 ]),
 line('거꾸로 뒤집을껴','Vou virar isso tudo do avesso',[
  e('거꾸로','ao contrário, do avesso, de cabeça para baixo',['Advérbio de inversão de ordem ou sentido','Anuncia a virada radical de atitude']),
  e('뒤집을껴','vou virar tudo',['뒤집다 = virar pelo avesso, inverter','-을껴 = variação dialetal e informal carismática de -(으)ㄹ 거야 (vou fazer)'])
 ]),
 line('인연을 연인으로','de um mero encontro casual para namorados',[
  e('인연을','o destino / o laço fortuito (objeto)',['인연 = laço kármico, conexão predestinada ou laço de convivência (因緣)','-을 = partícula de objeto']),
  e('연인으로','em amantes / em namorados',['연인 = amantes, namorados, casal amoroso (戀人)','-으로 = partícula que indica transformação para outro status'],'O verso faz um brilhante palíndromo sonoro: inverter as sílabas de 인연 (conhecidos pelo destino) gera 연인 (namorados).')
 ])
];


// Estrofe 5: Verso 2 (j-hope)
const verse3=[
 line('대학까지도 너랑 간다면','Se eu for até a faculdade com você',[
  e('대학까지도','até mesmo a universidade',['대학 = universidade, faculdade (大學)','-까지 = até','-도 = até mesmo, também']),
  e('너랑','com você',['너 = você','-랑 = partícula coloquial de companhia: com']),
  e('간다면','se eu for junto',['가다 = ir','-ㄴ다면 = conjunção condicional hipotética: se for'])
 ]),
 line('참 잘 갈 것 같아','acho que vou estudar muito bem',[
  e('참','realmente, deveras, com certeza',['Advérbio de afirmação calorosa','Reforça a certeza bem-humorada do verso']),
  e('잘','bem',['Advérbio de êxito e competência','Indica sucesso nas ações']),
  e('갈 것 같아','acho que vou me dar bem / acho que irei com gosto',['가다 = ir','-ㄹ 것 같다 = parecer que, achar que: probabilidade subjetiva'])
 ]),
 line('가나다라마바사아 하쿠나마타타!','Ga-na-da-ra-ma-ba-sa-a, Hakuna Matata!',[
  e('가나다라마바사아','as primeiras letras do alfabeto coreano (Hangeul)',['Ordem alfabética coreana: ㄱ(g), ㄴ(n), ㄷ(d), ㄹ(r), ㅁ(m), ㅂ(b), ㅅ(s), ㅇ(a)','Simboliza voltar ao básico do estudo infantil']),
  e('하쿠나마타타!','Hakuna Matata!',['Expressão célebre em suaíli (“sem problemas”) popularizada na animação O Rei Leão','Traz leveza e ritmo animado ao rap'])
 ]),
 line('똑같은 프로필 사진','A mesma foto de perfil',[
  e('똑같은','idêntica, a mesmíssima',['똑같다 = ser exatamente igual','-은 = forma relativa modifier']),
  e('프로필 사진','foto de perfil (rede social)',['프로필 = perfil (empréstimo do inglês)','사진 = fotografia (寫眞)'])
 ]),
 line('왜 자꾸 확인할까','por que será que fico checando sem parar?',[
  e('왜','por que?',['Indagação reflexiva','Pergunta a si mesmo por que age assim']),
  e('자꾸','repetidamente, sem parar, direto',['Advérbio que marca ação repetitiva e insistente','Expressa hábito involuntário']),
  e('확인할까','será que fico conferindo?',['확인하다 = conferir, checar (確認)','-ㄹ까 = pergunta reflexiva dirigida a si mesmo'])
 ]),
 line('그렇다고 착각하지마','Mas não vá se iludir com isso',[
  e('그렇다고','mesmo sendo assim / só por causa disso',['그렇다 = ser assim','-다고 = citativo causal: “só por ser assim”']),
  e('착각하지마','não se confunda, não tenha ilusões',['착각하다 = iludir-se, enganar-se (錯覺)','-지 마 = comando negativo informal: não faça'])
 ]),
 line('쉬운 남자 아냐','não sou nenhum cara fácil',[
  e('쉬운','fácil',['쉽다 = ser fácil (irregular em ㅂ: 쉽 + ㄴ → 쉬운)','Modifica 남자']),
  e('남자','homem, rapaz',['남자 = homem, rapaz (男子)','Refere-se ao próprio eu-lírico']),
  e('아냐','não sou',['아니다 = não ser','아냐 = contração informal coloquial de 아니야'])
 ])
];

// Estrofe 6: Ponte antes do refrão (Jungkook / V)
const preChorus1=[
 line('안달 났어 나 안달 났어','Estou ficando impaciente, estou desesperado',[
  e('안달 났어','fiquei ansioso / estou desesperado',['안달 = inquietação, afobação, ansiedade extrema','나다 = surgir, brotar; 안달이 나다 = ficar angustiado de ansiedade','-았어 = passado que indica o estado presente']),
  e('나','eu',['Pronome de primeira pessoa informal','Reforça o sujeito da ansiedade']),
  e('안달 났어','estou angustiado',['Repetição enfática do estado de agitação emocional','Dá ritmo acelerado ao pré-refrão'])
 ]),
 line('니가 뭔데?','Quem você pensa que é?',[
  e('니가','você (sujeito falado)',['Forma coloquial de 네가 (você + -가, sujeito)','Usado na fala direta e emotiva']),
  e('뭔데?','o que você é afinal?',['뭐 = o que','-ㄴ데 = terminação de confronto ou indagação'])
 ]),
 line('너만 잘났어?','Só você é a boazona?',[
  e('너만','apenas você, só você',['너 = você','-만 = partícula de exclusividade: somente']),
  e('잘났어?','é tão boa assim? / é tão superior?',['잘나다 = ser talentoso, bem-sucedido ou convencido','-았어 = presente de estado informal em tom de provocação'])
 ]),
 line('왜 나를 자꾸 놀려 놀려','Por que fica caçoando de mim o tempo todo?',[
  e('왜','por que?',['Pergunta desafiadora','Expressa indignação e frustração']),
  e('나를','de mim (objeto)',['나 = eu','-를 = partícula de objeto direto']),
  e('자꾸','direto, sem parar',['Advérbio de repetição insistente','Ação contínua e incômoda']),
  e('놀려 놀려','caçoa, brinca comigo',['놀리다 = zombar, caçoar, provocar','Repetição da palavra denotando exasperação'])
 ]),
 line("너 이제 그만 hol' up hol' up","Agora você para com isso, espere aí",[
  e('너','você',['Pronome informal de segunda pessoa','Dirige-se diretamente à interlocutora']),
  e('이제','agora',['Advérbio temporal','Marca o ponto de ruptura da paciência']),
  e('그만','chega, pare',['Advérbio que exige interrupção imediata','Usado com verbos ou sozinho como ordem']),
  e("hol' up hol' up","segura a onda, peraí",["Expressão coloquial em inglês (hold up) para pedir uma pausa","Adiciona atitude hip-hop à transição para o refrão"])
 ])
];

// Estrofe 7 & 8: Refrão principal (Chorus)
const chorusLines=[
 line('꽉 잡아 날 덮치기 전에','Segure firme antes que eu me lance sobre você',[
  e('꽉','com firmeza, apertado',['Advérbio onomatopeico de firmeza total','Expressa aperto sem folga']),
  e('잡아','segure, agarre',['잡다 = agarrar, segurar','-아 = modo imperativo informal']),
  e('날','a mim (objeto)',['Contração de 나를 (나 + -를)','Marca o alvo da ação de segurar']),
  e('덮치기 전에','antes de eu avançar / antes de cobrir você',['덮치다 = avançar sobre, abater-se, atacar de supetão','-기 전에 = conjunção subordinativa temporal: antes de realizar a ação'])
 ]),
 line('내 맘이 널 놓치기 전에','antes que meu coração perca você',[
  e('내 맘이','meu coração (sujeito)',['내 = meu (나의)','맘 = coração (마음)','-이 = partícula de sujeito']),
  e('널','você (objeto)',['Contração de 너를','Objeto que corre o risco de ser perdido']),
  e('놓치기 전에','antes de perder / deixar escapar',['놓치다 = perder a chance, deixar escapar das mãos','-기 전에 = antes de realizar a ação'])
 ]),
 en('Say what you want','Diga o que você quer'),
 en('Say what you want','Diga o que você quer'),
 line('니가 진짜로 원하는 게 뭐야','O que é que você de fato deseja?',[
  e('니가','você (sujeito)',['Pronome falado coloquial para você','네가 com pronúncia 니가']),
  e('진짜로','de verdade, de fato',['진짜 = verdade, autêntico','-로 = partícula de modo: sinceramente']),
  e('원하는 게','aquilo que você quer',['원하다 = desejar, querer','-는 = forma relativa presente','게 = contração de 것이 (a coisa que)']),
  e('뭐야','o que é?',['뭐 = o que','-야 = terminação informal afirmativa/interrogativa de 이다'])
 ])
];

// Estrofe 11: Verso 3 (j-hope / RM rap 2)
const verse4=[
 en('겉으론 bad bad girl','Por fora uma garota má, má'),
 en('속은 더 bad bad girl','por dentro mais garota má ainda'),
 line('나 같은 남잘 놓치면','Se você deixar escapar um cara como eu',[
  e('나 같은','como eu, igual a mim',['나 = eu','같다 = ser parecido; 같은 = forma relativa']),
  e('남잘','um cara (objeto)',['Contração coloquial de 남자를 (남자 + -를)','남자 = homem']),
  e('놓치면','se você perder, se deixar escapar',['놓치다 = perder, deixar escapar','-면 = conjunção condicional: se'])
 ]),
 line('후회하게 될 걸','vai acabar se arrependendo com certeza',[
  e('후회하게','a se arrepender',['후회하다 = arrepender-se (後悔)','-게 = marca adverbial conectada a 되다']),
  e('될 걸','você vai acabar vendo / vai se arrepender',['되다 = tornar-se','-(으)ㄹ걸 = terminação que expressa previsão segura ou advertência em tom provocador'])
 ]),
 line('메신저 확인해놓고','Você lê a mensagem no chat e',[
  e('메신저','aplicativo de mensagens / chat',['Empréstimo do inglês (messenger), como KakaoTalk','Refere-se à comunicação digital do dia a dia']),
  e('확인해놓고','depois de checar e manter visto',['확인하다 = verificar, abrir','-아/어 놓다 = manter o estado concluído da ação','-고 = conjunção: e em seguida'])
 ]),
 line('누르지 않는 너의 행위','sua atitude de não responder ao toque',[
  e('누르지 않는','que não pressiona / que não responde',['누르다 = apertar, tocar na tela','-지 않다 = negação auxiliar','-는 = forma relativa presente']),
  e('너의','sua',['너 = você','-의 = partícula de posse']),
  e('행위','ação, comportamento, atitude',['행위 = conduta, ato (行為)','Vocábulo formal usado ironicamente para criticar o vácuo'])
 ]),
 line('"1" 자리 없어 짐과 동시에 속만','e no exato instante em que o número "1" some, por dentro',[
  e('"1"','o número "1" do KakaoTalk',['No aplicativo de mensagens coreano KakaoTalk, o "1" ao lado da mensagem indica que o receptor ainda não leu. Quando o "1" some, a mensagem foi visualizada (visto).',"O verso usa esse indicador visual como imagem da espera por uma resposta."],'O algarismo 1 no KakaoTalk marca mensagens não lidas. Quando o número se apaga sem resposta subsequente, configura o famoso 읽씹 (visualizar e ignorar).'),
  e('자리','lugar, dígito, espaço',['자리 = posição, espaço de caractere','Refere-se ao espaço do número na tela']),
  e('없어 짐과','com o sumiço / ao desaparecer',['없어지다 = desaparecer (없다 + -어지다)','-ㅁ = sufixo nominalizador de ação','-과 = partícula de companhia ou concomitância: junto de']),
  e('동시에','ao mesmo tempo, simultaneamente',['동시 = mesmo tempo (同時)','-에 = partícula temporal']),
  e('속만','apenas por dentro / a raiva interna',['속 = interior, estômago, sentimentos profundos','-만 = partícula de exclusividade: somente'])
 ]),
 line('타지 네비게이션이나 살까 봐','me queimo por inteiro: acho que vou ter que comprar um GPS',[
  e('타지','queima, arde',['타다 = queimar de ansiedade ou fogo','-지 = constatação coloquial enfática: 속이 타다 = ferver de ansiedade']),
  e('네비게이션이나','nem que seja um aparelho de navegação GPS',['네비게이션 = navegação GPS (do inglês)','-이나 = partícula para opção substitutiva: “nem que seja”']),
  e('살까 봐','com receio de ter que comprar / acho que vou ter que comprar',['사다 = comprar','-(으)ㄹ까 보다 = considerar fazer ou recear ter que fazer'])
 ]),
 line('(빠름 빠름 빠름) 어필하려고','Tentando impressionar com rapidez, rapidez, rapidez',[
  e('(빠름 빠름 빠름)','rápido, rápido, rápido',['빠르다 = ser rápido; nominalizado em 빠름 (recorrência de famoso comercial de telecomunicações coreano da Olleh LTE)','Simboliza velocidade frenética']),
  e('어필하려고','para me promover / chamar a sua atenção',['어필하다 = atrair atenção, agradar (do inglês appeal)','-(으)려고 = partícula de finalidade de ação: a fim de'])
 ]),
 line('계속 난 (아둥 바둥 바둥)','eu sigo sem parar esperneando de ansiedade',[
  e('계속','continuamente, sem parar (繼續)',['Advérbio de continuidade','Ação persistente']),
  e('난','eu (나는)',['Contração informal de primeira pessoa com tópico',"나 + 는 se contrai em 난, colocando o falante como tópico da frase."]),
  e('(아둥 바둥 바둥)','esperneando, me debatendo',['아둥바둥 (ou 아등바등) = onomatopeia que expressa debater-se desesperadamente com esforço fútil','Expressa aflição cômica'])
 ]),
 line("진심? (I got 'em) 뒷심? (I got 'em)",'Sinceridade? Tenho de sobra. Garra no final? Tenho de sobra.',[
  e('진심?','coração sincero? sinceridade?',['진심 = coração verdadeiro, sinceridade (眞心)','Mostra que seus sentimentos são reais']),
  e("뒷심?",'fôlego final? perseverança?',['뒷심 = vigor ou força de reserva para sustentar o final de uma disputa','Garante que não vai desistir']),
  e("(I got 'em)",'eu tenho tudo isso',["Expressão em inglês: eu tenho, dou conta","Dá segurança confiante à rima"])
 ]),
 line('내가 유일하게 갖지 못한 건','A única coisa que não pude possuir',[
  e('내가','eu (sujeito agentivo)',['나 = eu + -가 = partícula de sujeito','Marca o sujeito que não conseguiu']),
  e('유일하게','unicamente, exclusivamente',['유일하다 = ser único (唯一)','-게 = sufixo adverbial']),
  e('갖지 못한 건','o fato de não ter conseguido conquistar',['갖다 = ter, possuir','-지 못하다 = impossibilidade objetiva','-ㄴ = relativo passado','건 = contração de 것은'])
 ]),
 line('너의 (아름 아름 다움)','é a sua beleza estonteante',[
  e('너의','sua',['너 = você','-의 = partícula possessiva']),
  e('(아름 아름 다움)','beleza, formosura',['Jogo métrico rítmico dividindo a palavra 아름다움 (beleza) em três pulsações: 아름 + 아름 + 다움','Enfatiza o encanto irresistível da interlocutora'])
 ])
];

// Estrofe 12: Verso 4 (Suga / Jin / V)
const verse5=[
 line('이 내가 어떻게','Como é que alguém como eu',[
  e('이 내가','este eu aqui / eu mesmo',['이 = este','내가 = eu (sujeito)']),
  e('어떻게','de que modo, como',['Advérbio interrogativo','Pergunta pelo caminho ou solução'])
 ]),
 line("변하면 되겠니, hol' up","deveria mudar afinal? Espera aí",[
  e('변하면','se mudar, se transformar',['변하다 = mudar (變)','-면 = condicional: se']),
  e('되겠니,','será que estaria bom? / resolveria?',['되다 = dar certo, resolver','-겠- = marca de suposição futura','-니 = terminação interrogativa informal']),
  e("hol' up","espera aí",["Expressão coloquial em inglês","Pede uma pausa dramática antes da reflexão"])
 ]),
 line('밀당? 어장?','Jogos de sedução? Aquário de contatinhos?',[
  e('밀당?','joguinho de sedução? empurra-e-puxa?',['Contração das palavras 밀고 당기기 (empurrar e puxar): a dinâmica de se aproximar e afastar no flerte','Expressão do vocabulário moderno coreano de namoro'],'밀당 une 밀다 (empurrar) e 당기다 (puxar), descrevendo o clássico jogo de desinteresse e interesse nos relacionamentos modernos.'),
  e('어장?','aquário de contatinhos? rede de pretendentes?',['어장 = viveiro de peixes (漁場); forma curta de 어장관리 (gerenciar contatinhos como quem alimenta peixes num tanque)','Crítica à manipulação de pretendentes'],'어장관리 (gestão de aquário) é a gíria coreana para manter vários pretendentes por perto dando falsas esperanças, sem namorar nenhum.')
 ]),
 line('그런 거 난 잘 몰러','dessas coisas eu não entendo nada',[
  e('그런 거','esse tipo de coisa',['그런 = tal, esse tipo','거 = coisa (것)']),
  e('난','eu (tópico)',['Contração de 나는','Define a posição sincera do falante']),
  e('잘','bem',['Advérbio de intensidade / modo',"Modifica o verbo seguinte, indicando que a ação é realizada bem."]),
  e('몰러','não sei, não entendo',['Variação dialetal e coloquial de 몰라 (de 모르다: não saber/ignorar)','Traz sotaque autêntico e direto'])
 ]),
 line('대신 아프면','Mas se você passar mal',[
  e('대신','em vez disso, por outro lado (代身)',['Substantivo adverbial de substituição ou compensação','Oferece dedicação sincera']),
  e('아프면','se ficar doente, se sentir dor',['아프다 = doer, estar doente','-면 = condicional: se'])
 ]),
 line('119 말고 날 불러','não ligue para o 119, chame a mim',[
  e('119','número de emergência e ambulância da Coreia do Sul',['O 119 é o número oficial sul-coreano para socorro médico, corpo de bombeiros e ambulâncias de resgate','Equivalente ao 192 ou 193'],'O 119 na Coreia do Sul equivale ao 192/193 no Brasil: o serviço nacional de socorro médico de emergência e resgate.'),
  e('말고','em vez de, e não…',['-말고 = partícula de exclusão comparativa: em vez de X, faça Y','Prefira a mim antes de qualquer outro']),
  e('날','a mim (나를)',['Alvo do chamado',"나 é eu; 를 marca o objeto, por isso a tradução neste contexto é a mim."]),
  e('불러','chame, invoque',['부르다 = chamar; 불러 = imperativo informal','Comando afetuoso de socorro imediato'])
 ]),
 line('니가 울라면 울어','Se você mandar eu chorar, eu choro',[
  e('니가','você (sujeito)',['Pronome de segunda pessoa coloquial',"Corresponde à forma coloquial de 네가, com a partícula de sujeito -가."]),
  e('울라면','se mandar eu chorar',['울다 = chorar','-(으)라면 = contração coloquial de -(으)라고 하면 (se disser/mandar fazer)']),
  e('울어','eu choro',['울다 no presente informal afirmativo','Expressa submissão voluntária pelo afeto'])
 ]),
 line('웃으라면 웃어, 구르라면 굴러','se mandar sorrir, eu sorrio; se mandar rolar no chão, eu rolo',[
  e('웃으라면','se mandar sorrir',['웃다 = sorrir, rir','-(으)라면 = se ordenar que']),
  e('웃어,','eu sorrio,',['웃다',"웃다 significa sorrir ou rir; 웃어 é sua forma informal, aqui uma declaração do falante."]),
  e('구르라면','se mandar rolar',['구르다 = rolar, estatelar-se','-(으)라면 = se disser para']),
  e('굴러','eu rolo pelo chão',['구르다 conjugado irregularmente em 굴러','Mostra prontidão absoluta'])
 ])
];

// Estrofe 15: Ponte melódica antes do clímax (Jin / Jimin / V)
const preClimax=[
 line('되고파 너의 오빠','Quero ser o seu namorado',[
  e('되고파','quero me tornar',['되다 + -고파','Desejo ardente do falante']),
  e('너의','seu',['너 + -의','Relação de pertença amorosa']),
  e('오빠','oppa (namorado)',['Abertura do tema principal','Identidade romântica pretendida'])
 ]),
 line('너를 향한 나의 마음을 왜 몰라','Por que você não compreende o meu coração voltado a ti?',[
  e('너를 향한','voltado para você, em sua direção',['너를 = a você','향하다 = direcionar-se; 향한 = forma relativa pretérita: “que se volta para”']),
  e('나의 마음을','o meu coração / meus sentimentos (objeto)',['나의 = meu','마음 = coração, alma','-을 = objeto']),
  e('왜','por que?',['Indagação de mágoa e surpresa',"Advérbio interrogativo que pergunta a razão da situação descrita."]),
  e('몰라','não reconhece? não sabe?',['모르다 = não saber, desconhecer; presente informal 몰라','Cobrança de sensibilidade à amada'])
 ]),
 line('나를 모른 척해도 차가운 척해도','Mesmo que finja não me ver, mesmo que banque a indiferente',[
  e('나를','de mim (objeto)',['나 = eu','-를 = objeto']),
  e('모른 척해도','mesmo fingindo que não me conhece',['모르다 = não saber','-(으)ㄴ 척하다 = fingir fazer algo','-아/어도 = mesmo que (concessão)']),
  e('차가운 척해도','mesmo que finja ser fria',['차갑다 = ser gelado, frio (sentimento)','차가운 = forma relativa','척해도 = mesmo fingindo'])
 ]),
 line('널 밀어내진 못하겠어','não consigo de jeito nenhum empurrar você para longe',[
  e('널','você (objeto)',['Contração de 너를',"A partícula de objeto identifica a pessoa a quem a ação se dirige."]),
  e('밀어내진','empurrar para longe (com ênfase negativa)',['밀어내다 = empurrar para fora, afastar (밀다 + 내다)','-지 = sufixo nominalizador de negação','-ㄴ = contração de 는 (tópico contrastivo)']),
  e('못하겠어','não sou capaz de fazer',['못하다 = não conseguir fazer','-겠- = intenção/avaliação subjetiva do falante','-어 = terminação informal'])
 ]),
 line('되고파 너의 오빠','Quero ser o seu namorado',[
  e('되고파','quero ser',['되다 = tornar-se','-고파 = desejo informal']),
  e('너의','seu',['너 = você','-의 = posse']),
  e('오빠','namorado',['oppa afetivo',"Usado por uma mulher para um homem mais velho próximo; o sentido romântico depende do contexto e não equivale sempre a namorado."])
 ]),
 line('너의 남자가 될 거야 두고 봐','Vou me tornar o seu homem, espere e verá',[
  e('너의','seu',['너 + -의',"의 marca posse: 너의 liga a pessoa você ao substantivo seguinte."]),
  e('남자가','o homem (complemento de 되다)',['남자 = homem','-가 = partícula de complemento de 되다']),
  e('될 거야','vou me tornar com certeza',['되다 = tornar-se','-(으)ㄹ 거야 = futuro informal de forte certeza']),
  e('두고 봐','apenas espere para ver',['Expressão idiomática de determinação','Desafio confiante'])
 ]),
 line('나의 마음이 네게 닿도록','Para que os meus sentimentos alcancem você',[
  e('나의 마음이','o meu coração (sujeito)',['나의 = meu','마음 = coração, sentimento','-이 = partícula de sujeito']),
  e('네게','a você',['네 = você informal','-에게 reduzido a -게: a você, até você']),
  e('닿도록','de modo a alcançar / tocar',['닿다 = tocar, alcançar, chegar até','-도록 = conjunção subordinativa que expressa meta ou grau: de modo que'])
 ]),
 line('지금 달려갈 거야','vou sair correndo agora mesmo até ti',[
  e('지금','neste exato momento, agora (只今)',['Advérbio temporal de urgência',"Situa a ação de correr em direção à outra pessoa no momento presente."]),
  e('달려갈 거야','vou sair correndo',['달려가다 = ir correndo (달리다 + 가다)','-(으)ㄹ 거야 = futuro informal resoluto'])
 ])
];

export const boyInLuvSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:intro},
 {title:"Refrão",lines:hook},
 {title:"Verso 1",lines:verse1},
 {title:"Verso 2",lines:verse2},
 {title:"Verso 3",lines:verse3},
 {title:"Ponte",lines:preChorus1},
 {title:"Refrão",lines:[...chorusLines,...chorusLines]},
 {title:"Refrão",lines:hook},
 {title:"Verso 4",lines:verse4},
 {title:"Verso 5",lines:verse5},
 {title:"Ponte",lines:preChorus1},
 {title:"Refrão",lines:[...chorusLines,...chorusLines]},
 {title:"Clímax",lines:preClimax},
 {title:"Refrão",lines:[...chorusLines,...chorusLines]}
];

export const boyInLuvVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'되다',pt:'tornar-se, virar'},
  {ko:'고프다',pt:'ter fome, estar faminto'},
  {ko:'갖다',pt:'ter, possuir, conquistar'},
  {ko:'두다',pt:'colocar, deixar'},
  {ko:'보다',pt:'ver, olhar'},
  {ko:'흔들다',pt:'balançar, agitar, sacudir'},
  {ko:'고백하다',pt:'declarar-se, confessar o amor'},
  {ko:'쓰다',pt:'escrever; usar'},
  {ko:'틱틱대다',pt:'resmungar, ser ranzinza ou grosseiro'},
  {ko:'씩씩대다',pt:'bufar de raiva ou agitação'},
  {ko:'징징대다',pt:'choramingar, fazer birra'},
  {ko:'진지하다',pt:'ser sério, sincero (verbo descritivo)'},
  {ko:'찌질하다',pt:'ser patético, agir como perdedor (verbo descritivo)'},
  {ko:'걸다',pt:'puxar briga (시비를 걸다); pendurar'},
  {ko:'크다',pt:'crescer; ser grande'},
  {ko:'만들다',pt:'fazer, transformar'},
  {ko:'뒤집다',pt:'virar pelo avesso, inverter'},
  {ko:'가다',pt:'ir'},
  {ko:'확인하다',pt:'conferir, checar, verificar'},
  {ko:'착각하다',pt:'iludir-se, enganar-se'},
  {ko:'놀리다',pt:'zombar, caçoar, provocar'},
  {ko:'잡다',pt:'segurar, agarrar'},
  {ko:'덮치다',pt:'atacar de supetão, avançar sobre'},
  {ko:'놓치다',pt:'deixar escapar, perder a chance'},
  {ko:'원하다',pt:'desejar, querer'},
  {ko:'후회하다',pt:'arrepender-se'},
  {ko:'누르다',pt:'apertar, pressionar'},
  {ko:'사다',pt:'comprar'},
  {ko:'변하다',pt:'mudar, transformar-se'},
  {ko:'부르다',pt:'chamar; cantar'},
  {ko:'울다',pt:'chorar'},
  {ko:'웃다',pt:'sorrir, rir'},
  {ko:'구르다',pt:'rolar no chão'},
  {ko:'향하다',pt:'direcionar-se, apontar para'},
  {ko:'밀어내다',pt:'empurrar para longe, afastar'},
  {ko:'닿다',pt:'tocar, alcançar'},
  {ko:'달려가다',pt:'ir correndo, correr em direção a'}
 ],
 nouns:[
  {ko:'오빠',pt:'oppa (namorado ou irmão mais velho)'},
  {ko:'사랑',pt:'amor, afeto'},
  {ko:'맘',pt:'coração, sentimento (forma curta de 마음)'},
  {ko:'마음',pt:'coração, mente, alma'},
  {ko:'아빠',pt:'papai'},
  {ko:'엄마',pt:'mamãe'},
  {ko:'고백',pt:'declaração, confissão amorosa'},
  {ko:'편지',pt:'carta'},
  {ko:'먼지',pt:'poeira, grão de pó'},
  {ko:'시비',pt:'implicância, briga à toa'},
  {ko:'애',pt:'criança, garoto (forma curta de 아이)'},
  {ko:'인연',pt:'laço cármico, conexão do destino'},
  {ko:'연인',pt:'namorados, casal apaixonado'},
  {ko:'대학',pt:'universidade, faculdade'},
  {ko:'사진',pt:'fotografia, imagem'},
  {ko:'남자',pt:'homem, rapaz'},
  {ko:'행위',pt:'ação, conduta, comportamento'},
  {ko:'자리',pt:'lugar, espaço, dígito'},
  {ko:'속',pt:'interior, sentimentos internos, estômago'},
  {ko:'네비게이션',pt:'navegação GPS'},
  {ko:'진심',pt:'sinceridade, coração verdadeiro'},
  {ko:'뒷심',pt:'vigor final, perseverança de encerramento'},
  {ko:'밀당',pt:'jogo de sedução (empurra-e-puxa)'},
  {ko:'어장',pt:'aquário de contatinhos'}
 ]
};


