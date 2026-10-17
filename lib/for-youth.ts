import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const opening=[
en('If I never met you','Se eu nunca tivesse conhecido você,'),
l('Oh 난 어떤 모습일까 baby','oh, como eu seria, meu bem?',e('난','eu','Contração de 나는.'),e('어떤 모습일까','que aparência/forma eu teria','어떤 = qual tipo; 모습 = aparência/aspecto, aqui o jeito de ser; -(이)ㄹ까 expressa uma reflexão hipotética. Completa a condição em inglês da linha anterior.')),
en('Every time I miss you','Toda vez que sinto sua falta,'),
l('습관이 돼버린 그 말','aquelas palavras que viraram hábito.',e('습관이 돼버린','que acabaram virando hábito','습관 = hábito; -이 되다 = tornar-se; 돼 = 되어; -아/어 버리다 reforça que a mudança se completou; -ㄴ modifica 말.'),e('그 말','aquelas palavras','그 = aquelas; 말 = palavra/fala. O coreano não precisa marcar o plural; a referência retoma a fala repetida em torno do refrão.')),
en("(It's so true)",'(É tão verdade.)'),
];
const verse1=[
l('눈을 떠보니 10년 전','Quando abri os olhos, era dez anos atrás.',e('눈을 떠보니','quando abri os olhos, percebi','눈 = olho; -을 objeto; 뜨다 = abrir os olhos; -어 보다 sugere experimentar; -니 apresenta a descoberta ao fazer algo.'),e('10년 전','dez anos atrás','년 = ano; 전 = antes/atrás. 10년 lê-se 십 년, usando numeral sino-coreano. A passagem é uma lembrança, não uma viagem literal no tempo.')),
l('논현동을 서성이던','Eu ficava vagando por Nonhyeon-dong,',e('논현동을','por Nonhyeon-dong','논현동 é nome de lugar; -을 pode marcar o espaço percorrido, não apenas um objeto.'),e('서성이던','que ficava andando sem rumo','서성이다 = andar de um lado para outro; -던 recorda uma ação habitual passada. A frase participa da descrição daquela época.')),
l('너무 쉽게 울었고','chorava tão facilmente,',e('너무 쉽게','muito facilmente','너무 = muito/demais; 쉽다 = ser fácil; -게 forma o advérbio 쉽게.'),e('울었고','chorava e','울다 = chorar; -었- passado; -고 liga à próxima lembrança.')),
l('너무 쉽게 웃던 때','na época em que também ria tão facilmente.',e('너무 쉽게','muito facilmente','Repete o modo da linha anterior, criando um contraste entre chorar e rir.'),e('웃던 때','a época em que ria','웃다 = rir/sorrir; -던 recorda hábito passado e modifica 때, época/momento.')),
];
const verse2=[
l('많은 계절 뒤에','Depois de muitas estações,',e('많은 계절 뒤에','depois de muitas estações','많다 = ser muito/numeroso; -은 modifica 계절, estação do ano; 뒤 = depois; -에 situa no tempo.')),
l('겨우 뒤돌아봤을 때','quando finalmente consegui olhar para trás,',e('겨우','finalmente; com dificuldade','Indica algo alcançado com esforço ou apenas a custo.'),e('뒤돌아봤을 때','quando olhei para trás','뒤돌아보다 = olhar para trás/relembrar; -았- passado; -(으)ㄹ 때 situa o momento de uma ação.')),
en('You always here with us together','Você sempre esteve aqui, junto de nós.'),
en('And every second was forever, oh','E cada segundo era uma eternidade, oh.'),
];
const verse3=[
l('측정할 수 없는 마음','Um sentimento que não se pode medir,',e('측정할 수 없는 마음','sentimento impossível de medir','측정하다 = medir; -(으)ㄹ 수 없다 = não poder; -는 modifica 마음, coração/sentimento. A imensidão do afeto é expressa como ausência de medida.')),
l('미끄러지던 내 삶','minha vida que ia escorregando.',e('미끄러지던','que vinha escorregando','미끄러지다 = escorregar; -던 recorda uma ação/estado passado. É uma imagem de instabilidade.'),e('내 삶','minha vida','내 = meu; 삶 = vida, nome ligado a 살다.')),
l('베개에 머리가 닿으면','Quando minha cabeça tocava o travesseiro,',e('베개에','no travesseiro','베개 = travesseiro; -에 indica ponto de contato.'),e('머리가 닿으면','quando a cabeça tocava','머리 = cabeça; -가 sujeito; 닿다 = tocar/alcançar; -(으)면 apresenta condição repetida no contexto passado.')),
l('깨지 않길 바랬던 밤 (Wake up)','nas noites em que desejava não acordar (acorde).',e('깨지 않길','não acordar','깨다 = acordar; -지 않다 nega; 않길 reduz 않기를, que marca o conteúdo desejado.'),e('바랬던 밤','noites em que desejava','A transcrição usa 바랬던; a forma padrão de 바라다, desejar, no passado é 바랐던. -던 modifica 밤, noite.','Não confundir 바라다, desejar, com 바래다, desbotar. A tradução mantém o desejo narrado na lembrança.')),
];
const pre=[
l('이젠 네가 있는 여기','Agora, aqui onde você está,',e('이젠','agora','Redução de 이제는, com contraste em relação ao passado.'),e('네가 있는 여기','aqui onde você está','네가 = você + sujeito; 있다 = estar; -는 modifica 여기, aqui/este lugar.')),
en('This a new home to me','Este é um novo lar para mim.'),
l('언제든 돌아올 테니까','Porque vou voltar a qualquer momento,',e('언제든','a qualquer momento','언제 = quando; -든 admite qualquer alternativa temporal.'),e('돌아올 테니까','porque voltarei','돌아오다 = voltar para cá; -(으)ㄹ 테니까 combina intenção/expectativa com uma razão para o que se diz a seguir.')),
en("Baby, don't you worry",'Meu bem, não se preocupe.'),
l('우리가 걷는 이 길이','Este caminho que percorremos,',e('우리가 걷는','que nós percorremos','우리 = nós; -가 sujeito; 걷다 = caminhar; -는 modifica 길.'),e('이 길이','este caminho','이 = este; 길 = caminho; -이 sujeito. A frase se completa na linha seguinte.')),
l('모두 다 길이 될 테니','tudo isso vai se tornar um caminho.',e('모두 다','tudo; por inteiro','모두 e 다 reforçam totalidade; a ligação com o caminho anterior é poética.'),e('길이 될 테니','porque se tornará um caminho','길 = caminho; -이 되다 = tornar-se; -(으)ㄹ 테니 apresenta expectativa e razão.','길이 aqui é 길 + partícula 이, antes de 되다, não necessariamente o advérbio 길이, para sempre. A repetição sugere o valor do percurso vivido.')),
];
const chorus=[...opening,
en("You're my best friend",'Você é meu melhor amigo.'),
en('For the rest of my life','Pelo resto da minha vida.'),
];
const verse4=[
l('하나 둘 셋','Um, dois, três.',e('하나 둘 셋','um, dois, três','Numerais nativos coreanos na forma de contagem, sem contador.')),
l('우리의 합','A nossa união,',e('우리의 합','a nossa combinação; união','우리 = nós; -의 = de; 합 = soma/combinação. Aqui descreve o que se forma juntos.')),
l('잊지 못해','não consigo esquecer',e('잊지 못해','não consigo esquecer','잊다 = esquecer; -지 못하다 expressa incapacidade. Não é uma proibição de esquecer.')),
l('모든 순간','nenhum daqueles momentos.',e('모든 순간','todos os momentos','모든 = todo; 순간 = instante. Liga-se a 잊지 못해: não consigo esquecer todos esses momentos, em português não esqueço nenhum deles.')),
l('Oh 나의 봄날을','Oh, os meus dias de primavera,',e('나의 봄날을','meus dias de primavera','나의 = meu; 봄날 = dia de primavera; -을 objeto de 책임져준 na próxima linha. Pode evocar uma fase luminosa da vida, além da estação.')),
l('책임져준 Flower 덕분에 나다웠어','graças à flor que cuidou deles, pude ser eu mesmo.',e('책임져준','que cuidou; assumiu responsabilidade','책임지다 = assumir responsabilidade/cuidar; -어 주다 apresenta benefício para alguém; -ㄴ modifica Flower, flor.'),e('덕분에','graças a','Expressa uma causa vista de modo favorável; aqui refere-se à flor mencionada.'),e('나다웠어','fui eu mesmo','나답다 = ser fiel ao próprio jeito; -았어 passado, com a conjugação 나다워. A flor funciona como imagem do destinatário que ajudou o narrador a florescer.')),
];
const verse5=[
l('날 위로해 준 너의 그 무수한 말','Suas incontáveis palavras que me consolaram,',e('날 위로해 준','que me consolaram','날 = 나를; 위로하다 = consolar; -어 주다 apresenta benefício; 준 modifica 말.'),e('너의 그 무수한 말','aquelas suas incontáveis palavras','너의 = seu; 그 = aquelas; 무수하다 = ser incontável; -ㄴ modifica 말, fala/palavra.')),
l('그게 날 만든 거야','foi isso que me fez ser quem sou.',e('그게','isso','Contração de 그것이, aquela coisa + sujeito; retoma as palavras de consolo.'),e('날 만든 거야','foi o que me formou','날 = 나를; 만들다 = fazer/criar; 만든 modifica 것, com queda de ㄹ; 거야 = 것이야. A identidade é vista como formada pelo apoio recebido.')),
l('그래 넌 나의 젊음','Sim, você é minha juventude,',e('그래 넌','sim, você','그래 = sim/é isso; 넌 = 너는.'),e('나의 젊음','minha juventude','나의 = meu; 젊음 é nome ligado a 젊다, ser jovem. A cópula fica implícita.')),
l('또 나의 청춘','e também minha mocidade,',e('또 나의 청춘','também a minha juventude','또 = também; 나의 = meu; 청춘 = juventude, frequentemente evocando essa fase de vida e seu vigor. A repetição reforça o afeto.')),
l('고마운 벗','meu querido amigo, a quem sou grato.',e('고마운 벗','amigo a quem sou grato','고맙다 = ser grato; 고마운 modifica 벗, amigo de tom literário, com irregularidade de ㅂ.')),
];
const verse6=[
l('내 자랑 내 천국 또 Love','Meu orgulho, meu paraíso e meu amor.',e('내 자랑 내 천국 또','meu orgulho, meu paraíso e também','내 = meu; 자랑 = orgulho/motivo de orgulho; 천국 = paraíso; 또 = também. Love completa a enumeração em inglês.')),
l('사방이 깜깜했지','Tudo ao redor estava escuro.',e('사방이','todos os lados','사방 = todas as direções; -이 sujeito.'),e('깜깜했지','estava completamente escuro','깜깜하다 = estar muito escuro; -했- passado; -지 dá tom de lembrança/afirmação.')),
l('그 사이 한줄기 빛','E, no meio disso, um raio de luz.',e('그 사이','no meio disso','그 = aquele; 사이 = intervalo/espaço entre coisas, aqui a situação evocada.'),e('한줄기 빛','um raio de luz','한 = um; 줄기 conta feixes/fluxos; 빛 = luz. A separação mais clara é 한 줄기 빛.')),
l('정말 그대여서 다행이야 참','Ainda bem que foi você, de verdade.',e('정말 그대여서','realmente, porque era você','정말 = realmente; 그대 = você em registro poético; -여서 é a forma contraída de -이어서, cópula + causa.'),e('다행이야 참','é um alívio, de verdade','다행 = boa sorte/alívio de algo ter dado certo; -이야 cópula informal; 참 reforça sinceridade.')),
l('함께임에 우린 빛나잖아','É por estarmos juntos que brilhamos, você sabe.',e('함께임에','por estarmos juntos','함께 = junto; -임 nominaliza a cópula, o fato de ser/estar; -에 aqui marca a causa, em registro poético.'),e('우린 빛나잖아','nós brilhamos, você sabe','우린 = 우리는; 빛나다 = brilhar; -잖아 recorda/afirma algo tratado como compartilhado.')),
];
const bridge=[
l('달리고','Corremos,',e('달리고','correndo e','달리다 = correr; -고 liga as ações da sequência.')),
l('또 넘어지고','caímos de novo,',e('또 넘어지고','caindo de novo e','또 = novamente; 넘어지다 = cair/tropeçar; -고 continua a enumeração.')),
l('일으켜주고','ajudamos a levantar,',e('일으켜주고','ajudando a levantar e','일으키다 = levantar alguém/algo; -어 주다 apresenta benefício para outro; -고 liga. O objeto fica implícito no apoio recíproco.')),
l('쓰러지기도 Oh','e às vezes desabamos, oh.',e('쓰러지기도','também desabar','쓰러지다 = cair/desabar; -기 nominaliza; -도 inclui outra ação possível, com 하다 implícito.')),
l('그 손 내밀어 주겠니','Você estenderia essa mão para mim?',e('그 손','essa mão','그 = essa; 손 = mão; a partícula do objeto está omitida.'),e('내밀어 주겠니','poderia estender por mim?','내밀다 = estender para fora; -어 주다 apresenta benefício; -겠니 pergunta disposição em registro familiar.')),
l('몇 번이든 일어날 테니','porque vou me levantar quantas vezes forem necessárias.',e('몇 번이든','quantas vezes forem','몇 = quantos; 번 conta ocorrências; -(이)든 admite qualquer alternativa.'),e('일어날 테니','porque vou me levantar','일어나다 = levantar-se; -(으)ㄹ 테니 indica intenção/expectativa como razão. Diferente de 일으키다, levantar outra pessoa.')),
];
const bridge2=[
l('힘들면 잠시 쉬어도 돼','Se estiver difícil, pode descansar um pouco.',e('힘들면','se for difícil','힘들다 = ser difícil/penoso; -(으)면 cria condição.'),e('잠시 쉬어도 돼','pode descansar por um momento','잠시 = brevemente; 쉬다 = descansar; -어도 되다 expressa permissão. Não é obrigação de continuar sem pausa.')),
l('널 기다리며 언제나 이곳에','Esperando você, sempre aqui.',e('널 기다리며','enquanto espero você','널 = 너를; 기다리다 = esperar; -(으)며 liga ações/estados simultâneos.'),e('언제나 이곳에','sempre neste lugar','언제나 = sempre; 이곳 = este lugar; -에 localiza. A ideia de permanecer fica implícita.')),
en('Daydreaming about us facing','Sonhando acordado com nós dois encarando…'),
en("Really don't wanna say it but",'Eu realmente não quero dizer isso, mas…'),
];
const outro=[
en('I wish I could turn back time','Queria poder voltar no tempo.'),
l('모든 게 쉽던 그때','Àquela época em que tudo era fácil.',e('모든 게','tudo','모든 = todo; 게 reduz 것이, coisa + sujeito.'),e('쉽던 그때','aquela época em que era fácil','쉽다 = ser fácil; -던 recorda um estado passado e modifica 그때, aquele momento/época.')),
l('더 많이 해줄 걸 그 말','Eu deveria ter dito mais vezes aquelas palavras.',e('더 많이 해줄 걸','deveria ter feito mais por você','더 = mais; 많이 = muito; 해 주다 = fazer para alguém; -(으)ㄹ걸 expressa arrependimento por uma ação que não se realizou. A escrita de final é 해줄걸.'),e('그 말','aquelas palavras','그 = aquelas; 말 = fala/palavra. O texto não traz 말하다 explicitamente; a tradução interpreta 해 주다 como dizer aquelas palavras, por causa desse complemento posposto.')),
en("I'll be with you",'Vou ficar com você.'),
en('For the rest of my life','Pelo resto da minha vida.'),
en('Rest of my life','O resto da minha vida.'),
];
export const forYouthSections:{title:string;lines:StudyLine[]}[]=[
{title:'Abertura',lines:opening},{title:'Verso 1',lines:verse1},{title:'Verso 2',lines:verse2},{title:'Verso 3',lines:verse3},
{title:'Pré-refrão',lines:pre},{title:'Refrão',lines:chorus},{title:'Verso 4',lines:verse4},{title:'Verso 5',lines:verse5},{title:'Verso 6',lines:verse6},
{title:'Ponte',lines:bridge},{title:'Ponte',lines:bridge2},{title:'Refrão',lines:chorus},{title:'Final',lines:outro},
];
export const forYouthVocabulary={
verbs:[
{ko:'되다',pt:'tornar-se'},{ko:'뜨다',pt:'abrir os olhos'},{ko:'서성이다',pt:'andar de um lado para outro'},
{ko:'쉽다',pt:'ser fácil'},{ko:'울다',pt:'chorar'},{ko:'웃다',pt:'rir; sorrir'},{ko:'많다',pt:'ser numeroso'},
{ko:'뒤돌아보다',pt:'olhar para trás; relembrar'},{ko:'측정하다',pt:'medir'},{ko:'미끄러지다',pt:'escorregar'},
{ko:'닿다',pt:'tocar; alcançar'},{ko:'깨다',pt:'acordar'},{ko:'바라다',pt:'desejar'},{ko:'있다',pt:'estar; haver'},
{ko:'돌아오다',pt:'voltar para cá'},{ko:'걷다',pt:'caminhar'},{ko:'잊다',pt:'esquecer'},{ko:'책임지다',pt:'assumir responsabilidade; cuidar'},
{ko:'나답다',pt:'ser fiel ao próprio jeito'},{ko:'위로하다',pt:'consolar'},{ko:'무수하다',pt:'ser incontável'},{ko:'만들다',pt:'fazer; formar'},
{ko:'고맙다',pt:'ser grato'},{ko:'깜깜하다',pt:'estar completamente escuro'},{ko:'빛나다',pt:'brilhar'},
{ko:'달리다',pt:'correr'},{ko:'넘어지다',pt:'cair; tropeçar'},{ko:'일으키다',pt:'levantar alguém/algo'},{ko:'쓰러지다',pt:'cair; desabar'},
{ko:'내밀다',pt:'estender para fora'},{ko:'일어나다',pt:'levantar-se'},{ko:'힘들다',pt:'ser difícil; penoso'},
{ko:'쉬다',pt:'descansar'},{ko:'기다리다',pt:'esperar'},{ko:'주다',pt:'dar; fazer algo para alguém como auxiliar'},
],
nouns:[
{ko:'모습',pt:'aspecto; jeito de ser'},{ko:'습관',pt:'hábito'},{ko:'말',pt:'palavra; fala'},{ko:'눈',pt:'olho'},
{ko:'논현동',pt:'Nonhyeon-dong (nome de lugar)'},{ko:'계절',pt:'estação do ano'},{ko:'마음',pt:'coração; sentimento'},
{ko:'삶',pt:'vida'},{ko:'베개',pt:'travesseiro'},{ko:'머리',pt:'cabeça'},{ko:'밤',pt:'noite'},{ko:'길',pt:'caminho'},
{ko:'합',pt:'soma; combinação; união'},{ko:'순간',pt:'instante'},{ko:'봄날',pt:'dia de primavera'},
{ko:'젊음',pt:'juventude'},{ko:'청춘',pt:'mocidade; juventude'},{ko:'벗',pt:'amigo (literário)'},
{ko:'자랑',pt:'orgulho; motivo de orgulho'},{ko:'천국',pt:'paraíso'},{ko:'사방',pt:'todos os lados'},
{ko:'빛',pt:'luz'},{ko:'다행',pt:'alívio; boa sorte por algo dar certo'},{ko:'손',pt:'mão'},
]};
