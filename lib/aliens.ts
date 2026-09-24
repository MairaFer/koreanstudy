// Letra fornecida pela usuária. Análises estáticas, compartilhadas entre repetições.
import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,notes:string[],card?:string):StudyEntry=>({term,meaning,notes,card});
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const worry=line('도대체 뭘 더 고민해? (고민해)','Afinal, o que mais você está pensando tanto? (pensando tanto)',[
 e('도대체','afinal; mas, afinal de contas',['Advérbio que intensifica a pergunta. Pode transmitir impaciência ou dificuldade de entender a hesitação.']),
 e('뭘','o quê, como objeto',['Contração de 무엇을: 무엇, o quê, + 을, partícula de objeto. A forma intermediária 뭐를 também é usada.']),
 e('더','mais',['Advérbio que acrescenta a ideia de continuar pensando ou ter algo adicional para considerar.']),
 e('고민해','fica pensando; se preocupa; hesita',['고민하다 → 고민해, no registro informal. O contexto de convite permite “por que ainda hesitar?”.','A pergunta não escreve um pronome. “Você” é uma escolha contextual da tradução; o eco entre parênteses repete o verbo.'])
]);
const clap=line('박수 쳐, 흔들어, 중모리','Bata palmas, balance — jungmori.',[
 e('박수','palmas; aplausos',['박수를 치다 é a expressão para bater palmas. Aqui 을, partícula de objeto, está omitida.']),
 e('쳐','bate; bata',['치다 + -어 → 쳐: ㅣ + ㅓ se contrai em ㅕ. O significado de 치다 é determinado por 박수.','Nesta chamada ao público, a forma informal funciona como comando. Não é uma terminação de passado.']),
 e('흔들어','balance; mexa',['흔들다 + -어 → 흔들어. O objeto, como o corpo ou os braços, não é especificado.','O ㄹ da base permanece antes da vogal 어. Não é a mesma contração de 치어 → 쳐.']),
 e('중모리','jungmori, um ciclo rítmico tradicional coreano',['Nome de um 장단, padrão/ciclo rítmico, de andamento moderado, tradicionalmente organizado em 12 tempos.','É usado em gêneros como pansori e sanjo. A palavra não é um verbo e não significa “balançar a cabeça”.'],'A menção a um ritmo tradicional cria uma referência cultural. Só a letra não permite concluir que toda a gravação segue esse ciclo rítmico.')
]);
const soWhat=line('뭐 어쩔래? Just move for me, yeah, move for me','E aí, vai fazer o quê? Só se mexe pra mim, é, se mexe pra mim.',[
 e('뭐','o quê; e daí',['Forma curta de 무엇. Nesta pergunta provocativa, ajuda a transmitir “e aí?” ou “e daí?”.']),
 e('어쩔래','o que vai fazer?',['어쩌다 + -(으)ㄹ래 → 어쩔래. A terminação pergunta pela intenção ou vontade do interlocutor.','No contexto, soa desafiador. Não é uma pergunta polida para fazer a desconhecidos; o tom vai além do significado isolado da terminação.'])
]);
const alphabet=line('From the 가나 to the 하, 우리 보고 배워 놔, yeah, we aliens','Do ga-na ao ha, olhe para nós e aprenda, é, somos aliens.',[
 e('가나','ga-na, começo de uma sequência de sílabas',['Aqui a combinação com 하 evoca a ordem 가, 나, 다… 하, usada para ensinar e ordenar o Hangul.','Não é uma referência necessária ao país Gana. A imagem é aproximadamente “do começo ao fim” ou “do A ao Z”.']),
 e('하','ha, final da sequência evocada',['É a sílaba 하, após 파 na sequência básica mencionada. Não é a base do verbo 하다 neste trecho.','“Do A ao Z” comunica a analogia em português, mas não descreve literalmente todas as letras do sistema coreano.']),
 e('우리','nós; a gente',['É o alvo de 보다, olhar/ver. A partícula de objeto 를 está omitida: 우리(를) 보고.']),
 e('보고','olhando; veja e…',['보다 + -고 liga a ação de observar à ação seguinte, aprender.','Não é 보고, o substantivo relatório. Neste contexto, a leitura é “olhe para nós e aprenda”.']),
 e('배워 놔','aprenda e guarde; trate de aprender',['배우다 + -어 → 배워. O auxiliar 놓다 aparece como 놓아 → 놔.','-아/어 놓다 apresenta a ação feita com seu resultado mantido ou disponível para depois. A ordem não é apenas olhar, mas reter o aprendizado.'],'A forma informal de 놓다, “pôr/deixar”, vira um auxiliar: aprender e deixar esse conhecimento adquirido.')
]);
const shoes=line('If you wanna hit my house, 신발은 벗어 놔, yeah, we aliens','Se quiser vir à minha casa, tire os sapatos e deixe-os tirados, é, somos aliens.',[
 e('신발은','os sapatos, quanto a eles',['신발 é calçado/sapatos. 은 marca o tópico e pode contrastar esse item com outras coisas.','Os sapatos são aquilo que se tira; a função de tópico substitui aqui a partícula de objeto mais direta, 을.']),
 e('벗어 놔','tire e deixe tirado',['벗다 + -어 → 벗어: tirar roupa, calçado ou algo que se usa no corpo. O ㅅ permanece nesta conjugação.','놓아 → 놔 mantém o estado resultante da retirada. É a mesma construção de 배워 놔, aplicada a outra ação.'],'Tirar os sapatos ao entrar em casa é um costume comum na Coreia. A linha formula uma regra da casa com tom direto; 벗어 주세요 seria um pedido mais educado.')
]);
const manners=line('어쩜 그래 shameless? 예의를 차려, we aliens','Como pode ser tão sem vergonha? Tenha modos, somos aliens.',[
 e('어쩜','como é possível; como pode',['Forma reduzida de 어쩌면. Aqui expressa espanto ou reprovação, não a hipótese neutra “talvez”.']),
 e('그래','ser assim; agir assim',['Forma informal de 그렇다. Na pergunta, reage à maneira de agir descrita por shameless.','어쩜 그래 pode funcionar como “como você pode ser/agir assim?”. O sujeito não está escrito.']),
 e('예의를','boas maneiras; respeito, como objeto',['예의 é etiqueta ou comportamento respeitoso. 를 marca o objeto porque 예의 termina em vogal.']),
 e('차려','tenha; observe; mantenha',['차리다 + -어 → 차려. A expressão 예의를 차리다 significa observar as boas maneiras ou agir com respeito.','차리다 também aparece com refeições e preparativos, mas aqui não significa literalmente pôr uma mesa.'])
]);
const sunrise=line('해는 동쪽에서, risin\' aliens, aliens','O sol, no leste — aliens surgindo, aliens.',[
 e('해는','o sol, como tópico',['해 pode significar sol ou ano; 동쪽, leste, favorece aqui o sentido sol. 는 marca o tópico.']),
 e('동쪽에서','no leste; a partir do leste',['동쪽 é leste. 에서 pode marcar o lugar de um acontecimento ou seu ponto de partida.','O verbo coreano 뜨다, nascer/erguer-se, não foi escrito. A linha usa risin’ em inglês, deixando a relação entre a imagem do sol e os aliens aberta à interpretação.'],'A tradução conserva a imagem e a pausa da letra. A associação entre ascensão e leste é uma leitura poética, não uma frase coreana completa com todos os termos expressos.')
]);
const faster=line('뭐든 더 빠르게 (ooh-ooh, ooh)','Seja o que for, mais rápido (ooh-ooh, ooh).',[
 e('뭐든','qualquer coisa; seja o que for',['Forma curta de 무엇이든. A ideia de -든 é que a escolha não importa: qualquer que seja a coisa.']),
 e('더','mais',['Modifica a intensidade da velocidade: mais rápido.']),
 e('빠르게','rapidamente',['빠르다 + -게 forma uma expressão de modo. Como -게 começa por consoante, a base 빠르- permanece.','Compare 빨라, conjugação em vogal, que apresenta a irregularidade de 르. Não há verbo principal expresso nesta linha.'])
]);
const allNight=line('매일 밤새워 대 (ooh-ooh-ooh)','Todo dia, a gente vive virando a noite (ooh-ooh-ooh).',[
 e('매일','todos os dias',['Expressão de frequência. Não significa “toda a noite”; essa ideia vem da ação seguinte.']),
 e('밤새워','passando a noite acordado',['밤새우다 + -어 → 밤새워. A vogal final 우 se contrai com 어.','밤새우다 é passar a noite sem dormir, e não apenas anoitecer.']),
 e('대','continua fazendo sem parar',['Forma informal do auxiliar 대다, na construção -아/어 대다. Ela enfatiza repetição ou intensidade da ação.','밤새워 대 sugere noites viradas repetidamente. Não é 대 com sentido de unidade, geração ou tamanho. O sujeito “a gente” é contextual.'])
]);
const wanted=line('시대가 우릴 원해 (ooh-ooh-ooh)','Esta época quer a gente (ooh-ooh-ooh).',[
 e('시대가','a época, como sujeito',['시대 significa época/era. 가 é a partícula de sujeito, depois da vogal final.','A época é personificada como quem deseja ou procura os artistas.']),
 e('우릴','nos; a nós',['Contração de 우리를: 우리 + 를, objeto. Compare 우린, que contrai 우리는 e marca tópico.']),
 e('원해','quer; deseja',['원하다 → 원해, presente informal.','Aqui o sujeito é 시대가 e o objeto é 우릴: a era deseja “nós”, não o contrário.'])
]);
const pre:StudyLine[]=[en('Hello, this your, hello, this your new honey','Olá, este é o seu, olá, este é o seu novo amor.'),clap,en('Oh, my God, do I look too funny?','Meu Deus, estou parecendo engraçado demais?'),soWhat];
const post:StudyLine[]=[alphabet,shoes,manners,sunrise];
const chorus:StudyLine[]=[en('Every night, every day (ooh-ooh-ooh)','Toda noite, todo dia (ooh-ooh-ooh).'),faster,allNight,en("Yeah, we livin' that aliens, aliens",'É, vivemos essa vida de aliens, aliens.'),en('Every night, every day (ooh-ooh-ooh)','Toda noite, todo dia (ooh-ooh-ooh).'),faster,wanted,en("Yeah, we livin' that aliens, aliens",'É, vivemos essa vida de aliens, aliens.')];
const outro:StudyLine[]=[en('yeah, we land on it','É, a gente pousa aqui.'),line('(헛 둘) and stand on it','(Um, dois) e fica de pé aqui.',[
 e('헛 둘','um, dois, numa marcação de ritmo',['Chamado rítmico que lembra a cadência de marcha 하나, 둘. 헛 representa o grito que marca o primeiro tempo; 둘 é dois.','Não é a forma padrão dos números para contar objetos nem uma afirmação literal de que 헛 significa um em qualquer contexto.'])
]),line('(헛 둘) 찍어 put that stamp on it','(Um, dois) carimba, deixa essa marca.',[
 e('헛 둘','um, dois, em cadência',['Repete a chamada que sincroniza o movimento e a ação. O texto mantém a forma expressiva 헛 em vez de substituir por 하나.']),
 e('찍어','carimba; imprime uma marca',['찍다 + -어 → 찍어. O contexto stamp favorece o sentido de marcar/carimbar.','찍다 também pode significar fotografar ou escolher uma opção, mas essas leituras não são as mais diretas aqui. A tradução escolhe o comando informal.'])
]),en('Stamp on it, stamp on it','Carimba, carimba.')];
export const aliensSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Primeiro verso · convite ao estádio',lines:[
  en("This gon' be the jam of the year (ay)",'Essa vai ser a música do ano (ay).'),
  line('지루하고 따분해 모든 게 (모든 게)','Tudo está chato e monótono (tudo).',[
   e('지루하고','tedioso e…',['지루하다, ser tedioso, recebe -고 para ligar a descrição à seguinte.','É um verbo descritivo; -고 conecta as qualidades, sem indicar causa por si só.']),
   e('따분해','é monótono; é enfadonho',['따분하다 → 따분해, presente informal. Reforça a impressão de tédio.']),
   e('모든 게','tudo, como sujeito',['모든 significa todo/todos e modifica 것, coisa. 게 contrai 것이: 것 + 이.','O sujeito vem depois do predicado na letra. A ordem mais neutra seria 모든 게 지루하고 따분해.'])
  ]),
  line('시간은 참 빨라 tick-tock, stadium으로 집합','O tempo passa mesmo rápido, tic-tac; todo mundo para o estádio.',[
   e('시간은','o tempo, como tópico',['시간 é tempo. 은, depois de consoante, destaca o tema da frase.']),
   e('참','realmente; muito',['Advérbio de intensidade, próximo de “mesmo” na tradução. Não é “verdade” como substantivo neste uso.']),
   e('빨라','é rápido',['빠르다 → 빨라, na conjugação irregular de 르: surge um ㄹ na sílaba anterior e 르 se combina com 아.','O coreano diz literalmente que o tempo é rápido. “Passa rápido” torna a imagem natural em português.']),
   e('stadium으로','para o estádio',['A palavra inglesa recebe a partícula coreana (으)로, aqui com sentido de direção/destino.','No equivalente 스타디움, o final ㅁ pede 으로. Após vogal ou ㄹ, usa-se normalmente 로.']),
   e('집합','reunião; todos reunidos!',['Substantivo de origem sino-coreana que pode funcionar sozinho como uma ordem de reunir-se.','O verbo 집합하다 não está conjugado na linha. A chamada curta cria o efeito de convocação.'])
  ]),worry,
  line('태생부터 다른 seven aliens (ay, ay)','Sete aliens diferentes desde o nascimento (ay, ay).',[
   e('태생부터','desde o nascimento; desde a origem',['태생 é nascimento/origem. 부터 marca o ponto inicial, aqui temporal ou de formação.']),
   e('다른','diferentes',['다르다 recebe -ㄴ para modificar o nome seguinte: 다른 seven aliens.','Não é passado. A forma apresenta uma característica atribuída aos sete aliens.'])
  ]),
  line('우릴 부러워하네 저 civilians (ay, ay)','Aqueles civis têm inveja da gente (ay, ay).',[
   e('우릴','a nós; a gente, como objeto',['Contração de 우리를. Marca as pessoas que despertam inveja ou admiração.']),
   e('부러워하네','invejam; olha como invejam',['부러워하다 significa sentir inveja ou admiração pelo que alguém tem. A terminação -네 dá tom de constatação.','Não confunda com 부럽다, que descreve o sentimento de quem fala. Aqui o verbo permite apresentar a reação de outras pessoas.']),
   e('저','aqueles',['Determinante demonstrativo de algo afastado de quem fala e de quem ouve. Modifica civilians.','O sujeito aparece no final sem partícula explícita: “aqueles civis”. “Civis” contrasta figuradamente com os aliens; não identifica um grupo real.'])
  ]),
  line('굳이 설명하기 입 아파, stadium으로 집합','Nem vale gastar saliva explicando; todo mundo para o estádio.',[
   e('굳이','fazendo questão; dando-se ao trabalho',['Com o restante da expressão, sugere que explicar seria um esforço desnecessário.']),
   e('설명하기','explicar, como atividade',['설명하다 + -기 transforma a ação em uma expressão nominal. A linha é abreviada e não explicita todas as relações entre as partes.']),
   e('입','boca',['É a parte do corpo que dói na expressão 입(이) 아프다. A partícula 이 está omitida.']),
   e('아파','dói',['아프다 → 아파: o ㅡ cai antes de 아. “A boca dói de explicar” pode indicar cansaço de repetir algo.','“Nem vale gastar saliva” é uma tradução idiomática. A letra não descreve necessariamente dor física real.']),
   e('stadium으로 집합','reunir-se no estádio; todos para o estádio',['(으)로 marca direção após stadium. 집합 é uma convocação nominal curta, repetida do verso anterior.'])
  ]),worry
 ]},
 {title:'Pré-refrão · palmas e ritmo',lines:pre},
 {title:'Identidade e regras da casa',lines:post},
 {title:'Refrão · ritmo de vida',lines:chorus},
 {title:'Segundo verso · linguagem e referências culturais',lines:[
  en('It goes, let me, honey, talk about the business','É assim: deixa eu, meu bem, falar dos negócios.'),
  en('Everybody know now where the K is','Agora todo mundo sabe onde está o K.'),
  line('어디까지 가니, 이런 제길?','Até onde você vai, droga?',[
   e('어디까지','até onde',['어디 é onde; 까지 estabelece o limite ou ponto de chegada.']),
   e('가니','vai?',['가다 + -니 forma uma pergunta informal. Aqui a pontuação e o sentido favorecem a leitura interrogativa, não o conector causal -(으)니.','O sujeito está omitido; pode se referir ao interlocutor ou a algo discutido no contexto.']),
   e('이런 제길','droga; mas que droga',['이런 pode introduzir uma exclamação de surpresa ou irritação. 제길 é uma interjeição rude.','A tradução preserva o tom irritado sem tratar a expressão como vocabulário neutro de conversa formal.'])
  ]),
  line('저주하니 아직? 흉즉대길','Ainda está amaldiçoando? O mau presságio se transforma em grande sorte.',[
   e('저주하니','está amaldiçoando?',['저주하다, amaldiçoar, recebe -니 numa pergunta informal. Não há objeto explícito.']),
   e('아직','ainda',['O advérbio aparece depois do verbo, dando ênfase. Em ordem mais neutra: 아직 저주하니?']),
   e('흉즉대길','grande sorte onde se esperava mau agouro',['Expressão de origem sino-coreana, 凶則大吉, associada à interpretação de presságios: um destino muito ruim pode ser lido como o seu contrário, extremamente favorável.','흉 remete ao infortúnio; 대길, a uma grande boa sorte. A expressão não é uma conjugação verbal comum.','Neste verso, pode funcionar como uma resposta confiante às maldições. Essa função poética é uma interpretação contextual, não uma garantia sobre a sorte.'])
  ]),
  line('Pardon, 김구 선생님, tell me how you feel (how you feel)','Com licença, senhor Kim Gu, diga como se sente (como se sente).',[
   e('김구','Kim Gu',['Nome próprio de uma figura histórica do movimento de independência coreano, também conhecido como Baekbeom.','Sua valorização do poder da cultura oferece contexto para a referência. A letra o chama diretamente; não reproduz aqui uma fala dele.']),
   e('선생님','senhor; mestre, como tratamento respeitoso',['선생 significa professor/mestre e 님 acrescenta respeito. Também pode ser usado como tratamento respeitoso fora da sala de aula.','Aqui acompanha o nome 김구. Traduzir por “senhor” evita afirmar que ele era professor dos cantores.'],'A associação com o ideal de força cultural de Kim Gu ajuda a ler a referência, mas não comprova sozinha uma intenção específica do autor da canção.')
  ]),
  line('영어는 또 나밖에 못 해, but that is how we kill','E, em inglês, só eu dou conta — mas é assim que a gente arrasa.',[
   e('영어는','quanto ao inglês',['영어 é a língua inglesa. 는 a coloca como tópico, possivelmente em contraste com outras capacidades.']),
   e('또','de novo; além disso',['Pode retomar um assunto ou acrescentar outra observação, conforme o tom. A tradução usa “e” para dar continuidade.']),
   e('나밖에','ninguém além de mim',['나 é eu informal; 밖에 significa “além de”, numa construção que normalmente exige negação.','나밖에 못 해 diz que não há outra pessoa capaz de fazer: só eu consigo. Não significa “só eu não consigo”.']),
   e('못 해','não consegue fazer/falar',['못 indica impossibilidade ou incapacidade; 해 vem de 하다. Com 영어, fazer é entendido como falar inglês.','O conjunto 밖에 + 못 해 produz o sentido exclusivo. Trata-se da voz e do exagero da letra, não de uma avaliação factual do inglês de cada integrante.'])
  ]),
  line('눈만 또 허벌나게 큰 너희가 말하길','Vocês, com esses olhos enormes, dizem:',[
   e('눈만','só os olhos',['눈 significa olhos neste contexto; 만 restringe ou enfatiza esse elemento.','A frase destaca os olhos de maneira provocativa. Não identifica explicitamente uma etnia nem exige essa interpretação.']),
   e('또','mais uma vez; ainda por cima',['Acrescenta ênfase ou retoma o tom de observação do verso anterior.']),
   e('허벌나게','enormemente; muito mesmo',['Expressão regional e coloquial, associada especialmente a variedades de Jeolla, usada como intensificador.','Aqui intensifica 큰, grandes. Não precisa ser interpretada literalmente como um substantivo ou como uma ofensa sexual.']),
   e('큰','grandes',['크다 + -ㄴ → 큰. A forma modifica 너희: vocês, cujos olhos são grandes.','큰 descreve tamanho. Não é o passado de um verbo correr.']),
   e('너희가','vocês, como sujeito',['너희 é a forma plural informal de você. 가 marca quem diz o que vem depois.']),
   e('말하길','dizem; segundo o que dizem',['Forma reduzida de 말하기를: 말하다 + -기 + 를. Introduz o conteúdo de uma fala.','A pergunta em inglês na linha seguinte é o que eles dizem. Aqui não é simplesmente a terminação de desejo de uma frase como 행복하길.'])
  ]),
  en('Are they for real? For real? (For real?)','Eles são mesmo de verdade? É sério? (É sério?)')
 ]},
 {title:'Pré-refrão · retorno',lines:pre},
 {title:'Identidade e regras da casa · retorno',lines:post},
 {title:'Refrão · retorno',lines:chorus},
 {title:'Final · deixar a marca',lines:[...outro,...outro]}
];
export const aliensVocabulary={
 verbs:[{ko:'지루하다',pt:'ser tedioso; verbo descritivo'},{ko:'따분하다',pt:'ser monótono; verbo descritivo'},{ko:'빠르다',pt:'ser rápido; verbo descritivo'},{ko:'고민하다',pt:'pensar muito; preocupar-se'},{ko:'다르다',pt:'ser diferente; verbo descritivo'},{ko:'부러워하다',pt:'invejar; admirar o que outro tem'},{ko:'설명하다',pt:'explicar'},{ko:'아프다',pt:'doer; verbo descritivo'},{ko:'치다',pt:'bater, em bater palmas'},{ko:'흔들다',pt:'balançar'},{ko:'보다',pt:'ver; olhar'},{ko:'배우다',pt:'aprender'},{ko:'놓다',pt:'pôr; deixar; auxiliar de resultado mantido'},{ko:'벗다',pt:'tirar roupa ou calçado'},{ko:'차리다',pt:'observar, em observar as boas maneiras'},{ko:'밤새우다',pt:'passar a noite acordado'},{ko:'대다',pt:'auxiliar de repetição/intensidade'},{ko:'원하다',pt:'querer; desejar'},{ko:'가다',pt:'ir'},{ko:'저주하다',pt:'amaldiçoar'},{ko:'하다',pt:'fazer'},{ko:'크다',pt:'ser grande; verbo descritivo'},{ko:'말하다',pt:'falar; dizer'},{ko:'찍다',pt:'carimbar; deixar uma marca, aqui'}],
 nouns:[{ko:'시간',pt:'tempo'},{ko:'집합',pt:'reunião; ato de reunir'},{ko:'태생',pt:'nascimento; origem'},{ko:'입',pt:'boca'},{ko:'박수',pt:'palmas; aplausos'},{ko:'중모리',pt:'ciclo rítmico tradicional jungmori'},{ko:'신발',pt:'calçado; sapatos'},{ko:'예의',pt:'boas maneiras; etiqueta'},{ko:'해',pt:'sol, neste contexto'},{ko:'동쪽',pt:'leste'},{ko:'시대',pt:'época; era'},{ko:'선생님',pt:'professor; tratamento respeitoso'},{ko:'영어',pt:'língua inglesa'},{ko:'눈',pt:'olhos, neste contexto'},{ko:'흉즉대길',pt:'expressão sobre mau agouro interpretado como grande sorte'}]
};
