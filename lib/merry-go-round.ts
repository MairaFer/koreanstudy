// Letra enviada pela usuária; a construção ambígua é preservada e comentada.
import type {StudyLine,StudyEntry} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const e=(term:string,meaning:string,notes:string[],card?:string):StudyEntry=>({term,meaning,notes,card});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const opening=[
 en("I wish that I could tell you that it's over (over)",'Eu queria poder te dizer que acabou (acabou).'),
 en('I wish that I could walk away from pain','Eu queria poder me afastar da dor.'),
 en('My life is like a broken roller coaster','Minha vida é como uma montanha-russa quebrada.'),
 en("But maybe I'm the only one to blame",'Mas talvez eu seja o único culpado.')
];
const chorus=[
 en("I can't get off this merry-go-round",'Não consigo sair deste carrossel.'),
 en('It spins me around (around, around)','Ele me faz girar (girar, girar).'),
 en("I do my best, but I can't slow down",'Dou o meu melhor, mas não consigo desacelerar.'),
 en('This merry-go-round','Este carrossel.')
];
const post=[
 en("And I, I can't get off of this ride",'E eu, eu não consigo sair deste brinquedo.'),
 en("(I can't get off of this ride)",'(Não consigo sair deste brinquedo.)'),
 en('I try, this happens every time','Eu tento; isso acontece toda vez.'),
 en("(I can't get off of this ride)",'(Não consigo sair deste brinquedo.)')
];
const first=[
 l('어른이 된 것 같은 기분이지만','Embora eu tenha a sensação de ter me tornado adulto…',[
  e('어른이','adulto (com partícula 이)',['어른 é adulto. Na construção 어른이 되다, 이 marca aquilo em que alguém se torna.','Não é aqui o 이 da cópula 이다: o predicado seguinte é 되다, tornar-se.']),
  e('된','que se tornou',['되다 perde 다 e recebe -ㄴ: 되- + -ㄴ → 된.','Essa forma modifica 것 e apresenta a mudança como realizada em relação à sensação descrita.']),
  e('것','coisa; fato',['Substantivo dependente que dá forma nominal à oração anterior: 어른이 된 것, o fato de ter se tornado adulto.','Junto de 같다, participa de uma avaliação ou impressão, não de uma certeza absoluta.']),
  e('같은','como; que parece',['같다, ser igual ou parecer, recebe -은 para modificar 기분.','어른이 된 것 같은 기분 é a sensação de parecer ter se tornado adulto.']),
  e('기분이지만','é uma sensação, mas; embora sinta',['기분 significa sensação ou estado de espírito. 기분 + 이다 + -지만 → 기분이지만.','-지만 introduz contraste: apesar de sentir que cresceu, as preocupações continuam. A oração prossegue no verso seguinte.'])
 ]),
 l('고민은 뭐 여전하지 (oh, yeah, oh, yeah)','As preocupações, bem, continuam as mesmas (oh, yeah, oh, yeah).',[
  e('고민은','quanto às preocupações',['고민 é preocupação, dilema ou reflexão difícil. 은 marca o tópico após consoante.','O contraste é entre crescer e continuar com os mesmos dilemas. O plural é uma escolha natural em português.']),
  e('뭐','bem; enfim',['Forma de 무엇, o que, mas aqui atua como comentário coloquial ou preenchimento da fala.','Não é uma pergunta “o quê?” nesta sequência.']),
  e('여전하지','continua igual, né',['여전하다 descreve algo que permanece como antes. 여전하- + -지 → 여전하지.','-지 dá um tom de constatação ou de algo reconhecido. Não é a negação -지 않다: 않다 não aparece.'])
 ]),
 l('매일 같은 일상 속 회전목마나','Na rotina igual de todo dia, seja um carrossel…',[
  e('매일','todos os dias',['Expressão de tempo usada aqui adverbialmente.','Apresenta a repetição diária que sustenta a imagem circular.']),
  e('같은','igual; a mesma',['Forma de 같다 que modifica um substantivo: 같- + -은 → 같은.','Aqui caracteriza 일상 como repetitiva; no primeiro verso, fazia parte da expressão de uma impressão.']),
  e('일상','cotidiano; rotina',['Substantivo para a vida habitual de todos os dias.','같은 일상 corresponde à mesma rotina, não a um evento excepcional.']),
  e('속','dentro; no interior',['Substantivo espacial: 일상 속, dentro da rotina.','A partícula de localização está omitida; uma formulação mais explícita seria 일상 속에서.']),
  e('회전목마나','um carrossel ou…',['회전목마 significa carrossel. 나 se liga a nomes terminados em vogal para colocar alternativas lado a lado.','A comparação só se completa no verso seguinte: 회전목마나 쳇바퀴나 매한가지.'])
 ]),
 l('쳇바퀴나 매한가지 (매한가지)','…uma roda que gira sem sair do lugar, dá no mesmo (dá no mesmo).',[
  e('쳇바퀴나','ou uma roda; ou a roda da rotina',['쳇바퀴 nomeia o aro de uma peneira e, em usos figurados de girar, evoca uma rotina repetitiva sem progresso.','나 repete a estrutura do nome anterior. “Roda que gira sem sair do lugar” explicita a imagem contextual; não se deve traduzir literalmente o nome como “hamster”.']),
  e('매한가지','a mesma coisa; dá no mesmo',['Substantivo usado para dizer que, no essencial, não há diferença.','A cópula pode ficar subentendida no verso: 매한가지야 seria uma conclusão informal mais explícita.'],'A construção A나 B나 매한가지 aproxima duas alternativas: seja A ou B, no fim dá no mesmo. A letra contrapõe um brinquedo de diversão à sensação de repetição cansativa.')
 ]),
 l('Oh, 답이 없는 질문','Oh, perguntas sem resposta.',[
  e('답이','resposta (sujeito)',['답 é resposta; 이 marca o sujeito de 없다.','O conjunto 답이 없다 afirma que não existe resposta.']),
  e('없는','que não tem; sem',['없다 recebe -는 quando modifica um nome: 없- + -는 → 없는.','답이 없는 modifica 질문: uma pergunta para a qual não há resposta.']),
  e('질문','pergunta',['Substantivo que recebe toda a descrição anterior.','O verso é um grupo nominal, sem um verbo final independente; o português permite o mesmo efeito de imagem.'])
 ]),
 l('미궁 속에서의 질주','Uma corrida desenfreada dentro de um labirinto.',[
  e('미궁','labirinto; situação sem solução clara',['O substantivo evoca um lugar de caminhos difíceis e também uma questão enigmática.','Aqui se liga à imagem de perguntas sem resposta. A leitura emocional é contextual.']),
  e('속에서의','de dentro; que ocorre dentro de',['속 significa interior; 에서 marca o lugar em que uma ação acontece.','의 liga essa expressão de lugar ao nome seguinte: 미궁 속에서의 질주, uma corrida que acontece dentro do labirinto.']),
  e('질주','corrida veloz; disparada',['Substantivo que enfatiza correr com velocidade.','A tradução “desenfreada” interpreta o contraste entre correr e não encontrar uma saída.'])
 ]),
 l('다들 괜찮은 척하며','Todo mundo fingindo estar bem…',[
  e('다들','todos; todo mundo',['다 indica totalidade; 들 acrescenta uma referência ao grupo de pessoas.','O sujeito coletivo será retomado por 모두 다 no verso seguinte.']),
  e('괜찮은','que está bem',['괜찮다 é estar bem, ser aceitável. 괜찮- + -은 → 괜찮은.','Modifica 척, formando o conteúdo da aparência fingida: estar bem.']),
  e('척하며','enquanto finge; fingindo',['척하다 expressa fingir ou fazer de conta. A construção anterior é 괜찮은 척하다.','하- + -며 liga a ação de fingir à de sorrir, apresentando-as como simultâneas. A frase continua em 웃고 있지.'])
 ]),
 l('웃고 있지 모두 다, 다, 다, 다','Estão sorrindo, todos, todos, todos, todos.',[
  e('웃고','sorrir + ligação -고',['웃다 pode ser rir ou sorrir. 웃- + -고 prepara a construção progressiva.','Não basta ler -고 como “e”: junto de 있다, forma -고 있다.']),
  e('있지','estão; estão fazendo, né',['있다 funciona aqui como auxiliar em 웃고 있다, estar sorrindo.','-지 acrescenta constatação. 웃고 있지 não significa “não sorri”.']),
  e('모두 다','todos, sem exceção',['모두 e 다 reforçam a totalidade do grupo.','A repetição de 다 intensifica o verso. O sujeito aparece depois do predicado, numa ordem expressiva da letra.'])
 ])
];
const bridge=[
 en("Spinnin' up, down, just round and round",'Girando para cima, para baixo, só dando voltas e voltas.'),
 en("I'm fallin' apart, still bound to ground",'Estou desmoronando, ainda preso ao chão.'),
 l('멈출 수 없는 굴레 속 내 동심이 소리치잖아 (yeah, yeah, yeah, yeah)','Dentro deste ciclo do qual não consigo parar, meu lado criança está gritando, sabe (yeah, yeah, yeah, yeah).',[
  e('멈출','parar, na construção de possibilidade',['멈추다 recebe -ㄹ: 멈추- + -ㄹ → 멈출.','Aqui -ㄹ não deve ser traduzido sozinho como futuro: integra -(으)ㄹ 수 없다.']),
  e('수 없는','que não se pode; impossível de',['수 é um substantivo dependente na expressão de possibilidade. 없다 a nega.','없는 modifica 굴레. 멈출 수 없는 descreve aquilo que não se consegue parar.']),
  e('굴레','laço que prende; amarras; ciclo opressivo',['O sentido literal se relaciona à cabeçada que controla um animal. Figuradamente, é algo que limita ou prende.','“Ciclo” aproxima essa imagem da roda e do carrossel, mas não é a única tradução possível.']),
  e('속','dentro',['Situa o eu lírico no interior dessas amarras.','A partícula pode ser recuperada pelo contexto, como em 굴레 속에서.']),
  e('내','meu; minha',['Contração de 나의: 나, eu, + 의, posse.','Aqui modifica 동심; não é 네, seu/sua.']),
  e('동심이','o espírito de criança (sujeito)',['동심 é a sensibilidade ou o coração infantil; 이 marca o sujeito.','“Meu lado criança” é uma tradução contextual da imagem, não a indicação de outra pessoa presente.']),
  e('소리치잖아','está gritando, você sabe',['소리치다 significa gritar. A base 소리치- recebe -잖아.','-잖아 apresenta a afirmação como algo perceptível ou conhecido pelo interlocutor. Não é uma negação de gritar.'])
 ]),
 l('나 원 없이 탈 만큼 탔으니, please, take me out, ma','Eu já andei nisso até me fartar; por favor, me tira daqui, mãe.',[
  e('나','eu',['Pronome informal de primeira pessoa; a partícula de tópico está omitida.','O sujeito ajuda a interpretar o pedido feito no fim da linha.']),
  e('원 없이','à vontade; até se satisfazer',['원 significa desejo ou anseio neste uso; 없이 indica ausência.','A expressão sugere fazer algo sem ficar com vontade de mais. “Até me fartar” adapta a expressão ao cansaço do contexto.']),
  e('탈','andar num veículo ou brinquedo, como modificador',['Vem de 타다, subir em/andar de/usar um brinquedo de parque. 타- + -ㄹ → 탈.','O contexto do carrossel seleciona esse sentido, não 타다 no sentido de queimar.']),
  e('만큼','tanto quanto; na medida de',['Substantivo dependente que expressa grau ou quantidade depois da forma modificadora.','탈 만큼 탔다 comunica ter andado o quanto havia para andar, ter feito isso o suficiente.']),
  e('탔으니','já andei, então; como já andei',['타다 + -았- → 탔-. -(으)니 apresenta o motivo para o pedido seguinte.','A terminação é -으니 porque 탔- termina em consoante. O pedido continua em inglês.'])
 ])
];
const finalVerse=[
 l('침대는 나의 관, my bed is my coffin','A cama é meu caixão; minha cama é meu caixão.',[
  e('침대는','quanto à cama',['침대 significa cama. 는 marca o tópico após vogal.','A frase coreana omite a cópula; o inglês seguinte torna a comparação explícita.']),
  e('나의','meu; minha',['나, eu, + 의, posse. É a forma não contraída de 내.','Modifica 관: o caixão apresentado como pertencente ao eu lírico.']),
  e('관','caixão',['관 tem homônimos, mas o inglês coffin confirma este sentido na linha.','A associação entre cama e caixão é uma imagem poética de aprisionamento ou exaustão; não define por si só uma situação literal.'])
 ]),
 l('어쩜 내 세상은 거대한 caffeine','Talvez meu mundo seja uma imensa dose de cafeína.',[
  e('어쩜','talvez; quem sabe',['Pode ser uma redução de 어쩌면. Também aparece em exclamações de surpresa.','A tradução adota “talvez”, preservando a natureza figurada da frase.']),
  e('내','meu; minha',['Contração de 나의.','Modifica 세상, mundo.']),
  e('세상은','quanto ao mundo',['세상 significa mundo; 은 marca o tópico após consoante.','O comentário compara esse mundo à cafeína, palavra escrita em inglês.']),
  e('거대한','enorme; gigantesco',['거대하다 recebe -ㄴ: 거대하- + -ㄴ → 거대한.','Modifica caffeine, mesmo sendo uma palavra inglesa. “Dose de” é uma adaptação do português, não um substantivo escrito em coreano.'])
 ]),
 l('매일 널 죽으러 가 꿈을 끌 순 없나?','Todo dia vou morrer… não dá para desligar esse sonho? [A ligação de 널 com 죽으러 é ambígua no texto enviado.]',[
  e('매일','todos os dias',['Expressão de tempo que repete a ideia de rotina.','O verso seguinte mantém a imagem de uma ação que não para.']),
  e('널','você (objeto)',['Contração de 너를: 너, você, + 를, objeto.','No texto enviado, aparece diante de 죽으러, formado de 죽다, morrer. Como 죽다 normalmente não recebe esse objeto direto, a relação entre as palavras não é clara.']),
  e('죽으러','para morrer',['죽다, morrer, + -으러, finalidade de um deslocamento.','Não equivale a 죽이러, “para matar”, que viria de 죽이다. A análise não troca uma forma pela outra.']),
  e('가','vou; vai',['Forma informal de 가다, ir.','죽으러 가 corresponde literalmente a ir para morrer; o sujeito é interpretado pelo contexto.']),
  e('꿈을','o sonho (objeto)',['꿈 é sonho; 을 marca o objeto depois de consoante.','É o objeto da ação de desligar, numa imagem poética.']),
  e('끌','desligar; apagar, como modificador',['Vem de 끄다, desligar/apagar: 끄- + -ㄹ → 끌.','Nesta leitura de 꿈을 끄다, o sonho é tratado como algo que se poderia desligar. Não é necessário interpretar 끌 como 끌다, puxar.']),
  e('순','quanto à possibilidade de…',['Contração de 수는: 수, substantivo dependente de possibilidade, + 는, tópico ou contraste.','꿈을 끌 수는… apresenta a possibilidade de desligar o sonho.']),
  e('없나','não há?; não dá?',['없다 + -나 forma uma pergunta informal ou uma indagação para si.','끌 순 없나 equivale a perguntar se não existe uma maneira de desligar. Não é uma afirmação categórica de impossibilidade.'],'O texto foi mantido como enviado. A tradução da primeira parte é parcial porque 널 + 죽으러 não forma uma ligação transitiva regular. Não se deve ensinar esse trecho como modelo de “matar você”; uma confirmação da transcrição pode esclarecer a intenção.')
 ]),
 l('멈출 수 없는 춤을 추고 있잖아','Estou dançando uma dança que não consigo parar, sabe.',[
  e('멈출 수 없는','que não se pode parar',['멈추다 + -(으)ㄹ 수 없다 expressa impossibilidade de parar.','없는 faz toda a construção modificar 춤, o substantivo seguinte.']),
  e('춤을','a dança (objeto)',['춤 é dança; 을 marca o objeto de 추다.','춤을 추다 é a combinação para dançar.']),
  e('추고','dançar + ligação -고',['추다 perde 다 e recebe -고.','Com 있다, expressa uma ação em andamento: 추고 있다.']),
  e('있잖아','estou fazendo, você sabe',['있다 é o auxiliar progressivo; -잖아 acrescenta a atitude de lembrar algo evidente ou compartilhado.','O sujeito não é escrito neste verso; “estou” retoma a primeira pessoa do contexto.'])
 ]),
 l('또 생각에, 생각에, 생각에, 생각','De novo, em pensamentos, pensamentos, pensamentos, pensamentos.',[
  e('또','de novo; outra vez',['Advérbio de repetição.','Retoma o movimento circular do refrão.']),
  e('생각에','nos pensamentos; em pensamentos',['생각 significa pensamento; 에 marca uma relação como lugar ou causa, conforme a construção.','Como o verso é fragmentado e não traz um predicado, a tradução escolhe “em pensamentos” sem completar uma oração inexistente.']),
  e('생각','pensamento',['O último substantivo aparece sem 에.','A repetição da mesma palavra reproduz a sensação de ruminação.'])
 ]),
 l('생각하지 말잔 생각을 해 난','Eu penso: “vamos parar de pensar”.',[
  e('생각하지','pensar + ligação -지',['생각하다 significa pensar. 생각하- + -지 prepara a proibição com 말다.','O conjunto seguinte fala em deixar de fazer algo, não em ser incapaz de fazê-lo.']),
  e('말잔','de que não pensemos; “vamos não…”',['Forma coloquial reduzida de 말자는 neste contexto: a proposta negativa 말자 passa a modificar 생각.','생각하지 말자는 생각 é o pensamento “vamos não pensar”. Não é o passado de 말하다, dizer.']),
  e('생각을','o pensamento (objeto)',['생각 recebe 을 como objeto de 해.','O conteúdo desse pensamento é dado pela expressão anterior, criando o paradoxo de pensar em não pensar.']),
  e('해','faço; tenho este pensamento',['Forma informal de 하다: 하여 → 해.','생각을 하다 equivale a pensar ou ter um pensamento.']),
  e('난','eu, quanto a mim',['Contração de 나는: 나 + 는.','O tópico aparece no final do verso por efeito expressivo, após o predicado.'])
 ]),
 l('빙글 또 빙글 행복하니?','Gira, gira de novo… você está feliz?',[
  e('빙글','girando; dando uma volta',['Advérbio expressivo de movimento circular. Não é um verbo conjugado.','A palavra reaparece após 또, imitando o giro repetido.']),
  e('또','de novo',['Acrescenta uma nova volta à imagem.','Liga as duas ocorrências de 빙글.']),
  e('행복하니','você está feliz?',['행복하다, ser/estar feliz, + -니, terminação interrogativa informal.','O interlocutor fica implícito: pode ser alguém, o próprio eu lírico ou um destinatário imaginado. A letra não determina essa identidade.'])
 ]),
 l('웃어 줘 끝까지','Sorria por mim até o fim.',[
  e('웃어','sorria',['웃다, rir/sorrir, recebe -어.','Aqui se liga ao auxiliar 주다, formando um pedido.']),
  e('줘','faça isso por mim; por favor',['주다 + -어 → 주어 → 줘. Em -아/어 주다, a ação é feita em benefício de alguém.','웃어 줘 pode ser traduzido como “sorria para mim” ou “por favor, sorria”. O beneficiário não está escrito.']),
  e('끝까지','até o fim',['끝 significa fim; 까지 marca o limite final.','Indica até quando manter o sorriso; não é uma marca de passado.'])
 ])
];
export const merryGoRoundSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:opening},
 {title:"Refrão",lines:chorus},
 {title:"Pós-refrão",lines:post},
 {title:"Verso 1",lines:first},
 {title:"Abertura",lines:opening},
 {title:"Refrão",lines:chorus},
 {title:"Pós-refrão",lines:post},
 {title:"Ponte",lines:bridge},
 {title:"Verso final",lines:finalVerse}
];
export const merryGoRoundVocabulary={verbs:[
 {ko:'되다',pt:'tornar-se'},{ko:'같다',pt:'ser igual; parecer (descritivo)'},{ko:'여전하다',pt:'continuar igual (descritivo)'},
 {ko:'없다',pt:'não haver; não existir (descritivo)'},{ko:'괜찮다',pt:'estar bem (descritivo)'},{ko:'척하다',pt:'fingir; fazer de conta (auxiliar)'},
 {ko:'웃다',pt:'rir; sorrir'},{ko:'있다',pt:'estar; existir; auxiliar em -고 있다'},{ko:'멈추다',pt:'parar'},
 {ko:'소리치다',pt:'gritar'},{ko:'타다',pt:'andar de; usar um brinquedo de parque'},{ko:'거대하다',pt:'ser enorme (descritivo)'},
 {ko:'죽다',pt:'morrer; não confundir com 죽이다, matar'},{ko:'가다',pt:'ir'},{ko:'끄다',pt:'desligar; apagar'},
 {ko:'추다',pt:'dançar, em 춤을 추다'},{ko:'생각하다',pt:'pensar'},{ko:'말다',pt:'deixar de fazer, no auxiliar -지 말다'},
 {ko:'하다',pt:'fazer'},{ko:'행복하다',pt:'estar feliz (descritivo)'},{ko:'주다',pt:'dar; fazer algo por alguém como auxiliar'}
 ],nouns:[
 {ko:'어른',pt:'adulto'},{ko:'기분',pt:'sensação; estado de espírito'},{ko:'고민',pt:'preocupação; dilema'},
 {ko:'일상',pt:'cotidiano; rotina'},{ko:'속',pt:'interior; dentro'},{ko:'회전목마',pt:'carrossel'},
 {ko:'쳇바퀴',pt:'aro de peneira; imagem de rotina circular'},{ko:'매한가지',pt:'a mesma coisa'},
 {ko:'답',pt:'resposta'},{ko:'질문',pt:'pergunta'},{ko:'미궁',pt:'labirinto; enigma'},{ko:'질주',pt:'corrida veloz'},
 {ko:'굴레',pt:'cabeçada; figuradamente, amarras'},{ko:'동심',pt:'espírito de criança'},{ko:'원',pt:'desejo, em 원 없이'},
 {ko:'침대',pt:'cama'},{ko:'관',pt:'caixão, neste contexto'},{ko:'세상',pt:'mundo'},{ko:'꿈',pt:'sonho'},
 {ko:'춤',pt:'dança'},{ko:'생각',pt:'pensamento'},{ko:'끝',pt:'fim'}
 ]};
