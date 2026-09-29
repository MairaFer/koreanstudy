// No More Dream — estudo detalhado da letra, no mesmo formato de Body to Body.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// A pergunta que abre e atravessa a música.
const askLine=line('얌마, 네 꿈은 뭐니? (뭐니?)','E aí, qual é o seu sonho? (qual é?)',[
 e('얌마','e aí; oí',['Interjeição informal de chamada, quase uma batida no ombro.','Preservada porque carrega o tom provocador de quem provoca em vez de perguntar educado.'],'얌마 não é educado: é como se alguém te puxasse pela gola da camisa para perguntar isso.'),
 e('네 꿈은','o seu sonho (tópico)',['네 é a contração de 너 (você, informal) com o final de posse 의, e significa “de você”.','꿈 é sonho.','은 marca o tópico: quanto ao seu sonho, a pergunta se abre por ele.'],'A forma padrão seria 너의 꿈; a contração 네 é o que se fala na rua.'),
 e('뭐니?','o que é? (informal)',['뭐 é a forma curta de 무엇, o que.','-니 é a marca de pergunta informal, muito comum entre jovens.','A versão educada seria 뭐예요?.'],'Repetida quatro vezes no refrão: a música não pede informação, ela cobra uma resposta.')
]);
const questionLines=[askLine,askLine,askLine,
 line('니 꿈은 겨우 그거니?','E o seu sonho é só aquilo?',[
  e('니 꿈은','o seu sonho (como assunto)',['니 é a forma contraída de 너의, de você.','꿈 é sonho e 은 marca o tópico.','Mais curta e mais brusca que 네, usada para manter o ritmo.']),
  e('겨우','só isso; apenas (com desprezo)',['Advérbio que reduz o valor do que vem depois.','Aqui não é “conseguir com dificuldade”: é “apenas, nem mais que isso”.'],'겨우 muda o tom da pergunta inteira: não basta ter sonho, ele ainda diz que o seu é pequeno.'),
  e('그거니?','é aquilo? (informal)',['그거 = aquilo, contração de 그것','-니 encerra a pergunta informal','-“겨우 그거” forma um bloco único de deboche'])
 ])];

// Primeiro verso — o conforto que não precisa de sonho.
const verse1=[
 en('I wanna big house, big cars and big rings','Eu quero uma casa grande, carros grandes e anéis grandes.'),
 line('But 사실은 I don\u0027t have any big dreams (yeah)','Mas na verdade eu não tenho nenhum sonho grande (é)',[
  e('사실은','na verdade; por assim dizer',['사실 = realidade, fato','-은 marca o tópico: no que diz respeito ao fato','-A partícula abre a contradição entre o que se quer e o que se tem']),
  e('big dreams','grandes sonhos (em inglês na letra)',['A troca para inglês solta a frase: o desejo material é falado em inglês, e o vazio, em coreano','-O vazio não aparece em inglês: a confissão volta para o coreano'],'A letra troca de idioma no meio do verso: o sonho comprado é em inglês, e a confissão de que não há sonho nenhum vem em coreano.'),
 ]),
 line('하, 난 참 편하게 살어','Ah, eu vivo bem tranquilo',[
  e('하','ah (suspiro)',['Interjeição de cansaço ou de quem se entrega ao conforto','-Não é a negação 안: aqui é só respiração, som que abre a frase']),
  e('난','eu (sujeito)',['Contração de 나는, o eu informal','-Aparece como sujeito da autoavaliação que vem a seguir']),
  e('참','de fato; realmente',['Advérbio que confirma o que foi dito','-Reforça o tom de quem já se conformou com a própria preguiça']),
  e('편하게','com tranquilidade; sem esforço',['편하다 = ser confortável, fácil','-게 = forma adverbial: “de um jeito confortável”','-A letra faz o conforto parecer mérito, e é exatamente isso que será contestado']),
  e('살어','vivo (informal)',['살다 = viver','-어 encerra a afirmação informal; o educado seria 살아요','-A forma curta é a mesma da fala de quem não se dá ao trabalho de ser educado'])
 ]),
 line('꿈 따위 안 꿔도 아무도 뭐라 안 하잖어','Nem sonho com nada e ninguém me diz nada',[
  e('꿈 따위','sonhos e coisas assim',['꿈 = sonho','-따위 é uma partícula de depreciação: “e coisas do tipo”','-Só se usa com quem ou o que se considera desprezível'],'따위 é a palavra que denuncia o narrador: ele trata o próprio sonho como algo pequeno demais para valer a pena.'),
  e('안 꿔도','mesmo sem sonhar',['안 = não (por vontade)','-꾸다 = sonhar','-도 = mesmo: “mesmo que não sonhe”','-꿔 é 꿈꾸다 contraído: 꿈 + 꾸다 vira 꿔']),
  e('아무도','ninguém (com negação)',['아무 = qualquer pessoa','-도 = também','-Com 안, forma a negação total: ninguém, em hipótese nenhuma']),
  e('뭐라','algo; palavra alguma',['뭐라 = de 뭐라고 하다 (dizer algo)','-Antes de 안, o verbo é omitido: “ninguém diz nada”','-뭐라 fica curto porque o verbo foi cortado pela fala']),
  e('안 하잖어','não fazem, sabe?',['안 = não','-하다 = fazer ou dizer neste contexto','-잖어 encerra com um apelo de quem busca confirmação: “não é mesmo?”','-É informalíssimo e arrasta quem escuta para dentro da frase'])
 ]),
 line('전부 다-다-다 똑가-같이 나처럼 생각하고 있어','Todos pensam exatamente igual a mim, tudo igualzinho',[
  e('전부','todos; por inteiro',['Advérbio de totalidade','-Aqui abrange as pessoas ao redor: todo mundo pensa do mesmo jeito']),
  e('다-다-다','tudo, tudo, tudo (batida)',['Repetição de 다, totalidade','-As travessões marcam a repetição cantada: o ritmo repete antes do sentido entrar','-É recurso de performance, não de gramática']),
  e('똑가-같이','do mesmo jeito; igualzinho',['Forma coloquial de 똑같이 (do mesmo jeito)','-똑 = igual; -같이 = como, do modo de','-A versão sem contração é 똑같이, mais neutra']),
  e('나처럼','como eu',['나 = eu','-처럼 = como, à maneira de','-A comparação estabelece o grupo: pensar como o narrador é a norma']),
  e('생각하고 있어','está pensando (em progresso)',['생각하다 = pensar','-고 있어 = estar no meio da ação','-Com 전부 다, o verbo confirma que o pensamento é coletivo e é agora'])
 ]),
 line('새까-까-까맣게 까먹은 꿈 많던 어린 시절','A infância cheia de sonhos, que eu já apaguei bem fundo',[
  e('새까맣게','bem preto; completamente',['새까맣다 = bem preto, a partir de 새 (novo, fresco)','-히/-게 = forma adverbial','-Preto aqui é apagado: o que se apaga fica sem luz']),
  e('까먹은','que esqueci; que me escapou',['까먹다 = esquecer-se de algo, geralmente comida ou detalhe','-은 = relativo presente: “que apaguei”','-O verbo é informal e coloquial: esquecer de propósito, do jeito que se esquece de uma refeição'],'까먹다 costuma aparecer com comida no lugar do objeto: usá-lo com 꿈 sugere que o sonho foi engolido pelo esquecimento.'),
  e('꿈 많던','que tinha muitos sonhos',['꿈 = sonho','-많던 = que costumava ser muito (na lembrança)','-던 indica memória do passado, algo que existia e não existe mais','-É o mesmo -던 das músicas sobre o que se perdeu']),
  e('어린 시절','infância; criança que se foi',['어리다 = ser jovem, ingênuo','-시절 = período, época','-A frase inteira é uma saudade que o narrador mesmo não sabe por que está contando'])
 ]),
 line('대학은 걱정 마, 멀리라도 갈 거니까','Não se preocupe com a faculdade, vou para longe de qualquer jeito',[
  e('대학은','a faculdade (tópico)',['대학 = universidade','-은 marca o assunto do consolo: quanto à faculdade…']),
  e('걱정 마','não se preocupe',['걱정하다 = preocupar-se','-마 = a forma mais curta de 하지 마, não faça','-É direto e íntimo: quem fala é um filho para uma mãe']),
  e('멀리라도','mesmo que seja longe',['멀리 = longe','-라도 = mesmo que seja: abre a hipótese mais provável','-Se não for longe, então: qualquer distância serve']),
  e('갈 거니까','porque vou ir',['가다 = ir','-거 = marca o futuro como suposição ou promessa','-니까 = porque','-Junto, é a promessa que encerra a frase: vou ir, então não se preocupe'])
 ]),
 line('알았어 엄마, 지금 독서실 간다니까','Tá bom, mãe, eu tô indo pra sala de estudos agora',[
  e('알았어','tá bom, entendi',['알다 = saber; com -었어, o passado que aqui vale “ficou claro”','-É o “está bom” de quem já não quer mais ouvir']),
  e('엄마','mãe',['Vocativo afetuoso; no lugar de mãe, a palavra já é a chamada','-Só se usa com quem se tem intimidade real']),
  e('지금','agora, neste momento',['지금 = agora, neste instante','-É o agora que dá pressa à desculpa: “já estou saindo”']),
  e('독서실','sala de estudos pública',['Espaço privado onde se paga para estudar, comum na Coreia','-독서 = leitura; -실 = sala','-É o alibi perfeito para quem sai sem saber para onde vai']),
  e('간다니까','eu estou indo, tá?',['가다 = ir','-ㄴ다 = presente informal','-니까 acrescenta o apelo: “já te disse que estou indo”','-Encerra a frase como quem encerra a conversa com a mãe'])
 ]),

 line('니가 꿈꿔온 니 모습이 뭐여?','Como era a pessoa que você sonhava em ser?',[
  e('니가','você (sujeito)',['네 = você (informal) + 가 = partícula de sujeito','-Forma de 너의 + 가, mas aqui é o sujeito: você é quem sonhou']),
  e('꿈꿔온','que sonhou ser; que sonhava',['꿈꾸다 = sonhar com algo','-온 = relativo que veio até aqui: “o que você sonhou até hoje”','-Indica um processo que começa no passado e ainda está valendo']),
  e('니 모습이','a sua imagem; quem você era',['모습 = aparência, feição, figura','-니 = sua (forma falada de 너의)','-이 marca o sujeito da pergunta']),
  e('뭐여?','o que é? (informal)',['뭐여 é a forma mais coloquial de 뭐야, o que é.','-A pergunta é retórica: o narrador já sabe que não há resposta boa.'])
 ]),
 line('지금 니 거울 속엔 누가 보여? I gotta say','Agora quem aparece no seu espelho? Eu tenho que dizer',[
  e('지금','agora',['Advérbio de tempo presente','-Serve de contraste com 꿈꿔온: o sonho é de antes, o espelho é de agora']),
  e('니','a sua (forma falada de 너의)',['니 é a contração de 너의, de você','-Aparece antes de 거울: o espelho é seu, e a pergunta também']),
  e('거울 속엔','no espelho (tópico)',['거울 = espelho','-속 = dentro','-엔 = contrai 에 + 는, indicando o lugar que agora vira assunto da frase']),
  e('누가 보여?','quem aparece?',['누구 = quem; 누가 é a forma com partícula de sujeito','-보여 = 보이다 (aparecer, ser visto) contraído','-A forma informal faz a pergunta bater direto, sem rodeio educado'])
 ]),
 line('너의 길을 가라고, 단 하루를 살아도','Vá pelo seu caminho, mesmo que seja um único dia vivo',[
  e('너의 길을','o seu caminho (objeto)',['너의 = seu (de você)','-길 = caminho','-을 = partícula de objeto: é o caminho que se percorre']),
  e('가라고','para ir; que você vá',['가다 = ir','-라고 marca a orientação ou ordem indireta: “para você ir”','-Não é o verbo dito, e sim o conselho que se repete']),
  e('단 하루를','um único dia sequer',['단 = apenas, somente','-하루 = um dia','-를 = objeto: esse dia é o que se gasta','-O reforço “apenas um” torna o pedido pequeno de propósito']),
  e('살아도','mesmo vivendo',['살다 = viver','-도 = mesmo: concessão','-A construção abre a hipótese mínima: mesmo só um dia já basta para começar'])
 ]),
 line('뭐라도 하라고, 나약함은 담아둬','Faça qualquer coisa, guarde a fraqueza',[
  e('뭐라도','qualquer coisa que seja',['뭐라도 = algo, qualquer coisa','-É o jeito de dizer “não importa o quê”','-Encurta a exigência: qualquer ação já conta']),
  e('하라고','faça (ordem indireta)',['하다 = fazer','-라고 marca a ordem ou pedido que se repete','-É o chamado que sustenta a letra inteira']),
  e('나약함은','a fraqueza (tópico)',['나약하다 = ser fraco, frágil','-함 = o sufixo que forma o substantivo abstrato de um adjetivo','-은 marca o assunto: quanto à fraqueza…']),
  e('담아둬','guarde; deixe de lado',['담다 = colocar, acomodar','-두다 = deixar feito, guardar o resultado','-É informal; o educado seria 담아두세요','-Junto a 나약함: guarde isso, não carregue o peso'])
 ]),


];

// Segundo verso — a cobrança direta de quem não aceita desculpa.
const verse2=[
 line('왜 말 못하고 있어? 공부는 하기 싫다면서','Por que está calado? Se diz que não quer estudar',[
  e('왜','por que',['Advérbio interrogativo de causa','-Abre a pergunta com acusação, não com curiosidade']),
  e('말 못하고 있어?','está sem conseguir falar?',['말 = palavra, fala','-못하다 = não conseguir','-고 있어 = estar no meio da ação, aqui em progresso','-Junto: você está parado, incapaz de dizer o que quer']),
  e('공부는','o estudo (tópico)',['공부 = estudo','-는 marca o tópico: quanto a estudar…']),
  e('하기 싫다면서','dizendo que não quer fazer',['하기 = forma nominal de 하다, fazer','-싫다 = não querer','-면서 = enquanto diz que; introduz a fala de outra pessoa ou a sua própria','-A letra usa a sua própria desculpa contra você'])
 ]),
 line('학교 때려 치기는 겁나지?','Largar a escola te dá medo, não é?',[
  e('학교','escola',['Casa de estudo obrigatória; aqui é o sistema escolar inteiro','-때려 치다 combina largar com violência: abandonar de vez, sem meio-termo']),
  e('때려 치기는','quanto a largar tudo de vez',['때려 치다 = largar, abandonar, desistir com força','-기는 = quanto a, no que diz respeito a (e não a outra coisa)','-A repetição de 는 forma o contraste: largar você quer, mas tem medo']),
  e('겁나지?','te dá medo, né?',['겁나다 = dar medo, sentir medo','-지 = busca confirmação de quem escuta','-A pergunta fecha como provocação: admite que o medo existe'])
 ]),
 line('이거 봐, 등교할 준비하네 벌써','Olha isso, já está se preparando para ir à escola',[
  e('이거 봐','olha isso',['이거 = isto; 봐 = veja (imperativo informal de 보다)','-Chama a atenção para o próprio corpo, que se move sem querer']),
  e('등교할','de ir à escola; para ir à escola',['등교 = ir à escola','-할 = forma futura que modifica o nome seguinte','-등교할 준비: a preparação para a ida à escola']),
  e('준비하네','está se preparando, veja só',['준비하다 = preparar','-네 = constatação com espanto leve, quase ironia','-É o NE de quem observa e comenta o que vê']),
  e('벌써','já; tão cedo',['Advérbio de tempo que marca o adiantamento','-Encerra com a ironia: você já está pronto, apesar do discurso'])
 ]),
 line('철 좀 들어, 제발 좀','Amadureça um pouco, por favor',[
  e('철','juízo, maturidade, senso',['철이 들다 = amadurecer, ganhar juízo','-A palavra 철 também significa estação do ano: o juízo que chega com o tempo']),
  e('좀','um pouco; por favor',['Contração de 조금','-Suaviza a ordem, mas a repetição logo depois a endurece']),
  e('들어','entre; seja tomado por',['들다 = entrar','-Aqui 철이 들다 é o bloco fixo: “o juízo entra em você”','-Forma de comando informal, sem 요']),
  e('제발','por favor; pelo amor de Deus',['Advérbio de súplica já impaciente','-Usado duas vezes na música, sempre no limite da paciência','-Depois de 좀, fecha a frase como quem já pediu demais'])
 ]),
 line('너 입만 살아가지고 임마, 유리멘탈 boy (stop!)','Você só tem boca, cara — mente de vidro, boy (pare!)',[
  e('너','você (informal)',['Pronome de segunda pessoa sem marca de respeito','-Vem solto no começo do verso, como um dedo apontado']),
  e('입만 살아가지고','só a boca está viva; só fala e nada mais',['입 = boca','-만 = somente','-살아가지고 = literalmente “vivendo com a boca”, isto é, tem lábia e nada além'],'입만 살았다 é uma expressão fixa: a pessoa fala bem, promete muito, mas não faz nada.'),
  e('임마','cara; ó (chamada brusca)',['Contração de 이놈아, usada entre homens ou por quem quer provocar','-Aqui intensifica o tom de bronca']),
  e('유리멘탈','mente de vidro; mental frágil',['Empréstimo do inglês mental com 유리 (vidro)','-Expressão coloquial coreana para quem se quebra fácil','-O vidro é o corpo que se estilhaça com a menor pressão']),
  e('boy','garoto (em inglês)',['Intercalado no coreano para quebrar o tom e reforçar a provocação','-A letra volta ao inglês justo na palavra mais condescendente']),
  e('(stop!)','(pare!)',['A ordem que interrompe o próprio discurso','-Preservada nos parênteses porque vem da gravação original'])
 ]),
 line('자신에게 물어봐, 언제 니가 열심히 노력했냐고','Pergunte a si mesmo: quando foi que você se esforçou de verdade?',[
  e('자신에게','a si mesmo',['자신 = si mesmo, próprio','-에게 = partícula de destinatário','-A pergunta é pedida a você mesmo, não ao outro']),
  e('물어봐','pergunte (informal)',['묻다 = perguntar','-봐 = tentar, experimentar: faça a pergunta e veja','-O verbo no comando informal é o mesmo do refrão']),
  e('언제','quando',['Advérbio interrogativo de tempo','-Abre a pergunta que o narrador já responde no silêncio']),
  e('니가','você (sujeito)',['네가 é a forma padrão do sujeito; 니가 é como se escreve e se canta para não confundir com 내가','-É uma mudança de escrita e de fala corrente']),
  e('열심히','com afinco; esforçadamente',['열심 = zelo, dedicação','-히 = forma adverbial','-A palavra é o oposto exato do conforto cantado no primeiro verso']),
  e('노력했냐고','se você se esforçou? (citando a pergunta)',['노력하다 = esforçar-se','-했 = passado','-냐고 = marca a pergunta citada, aqui a que se manda fazer','-A frase inteira é a pergunta dentro da pergunta'])
 ])
];

// Refrão — a acusação de hipocrisia, com a pergunta sempre voltando.
const chorus=[
 line('거짓말이야 you such a liar','É mentira, você é um mentiroso',[
  e('거짓말이야','é mentira',['거짓 = falso, falso como mentira','-말 = palavra, dito','-이야 = é (cópula informal 이다 + 야)','-A palavra junta o falso e o dito: a mentira é uma fala construída']),
  e('you such a liar','você é um mentiroso desses',['Inglês intercalado na linha','-A acusação mais direta vem em inglês, como se o coreano não bastasse'])
 ]),
 line('See me, see me, ya 넌 위선자야','Veja-me, veja-me — você é um hipócrita',[
  e('넌','você (tópico)',['Contração de 너는','-O 는 isola o outro: quanto a você, a acusação é essa']),
  e('위선자야','é um hipócrita',['위선자 = hipócrita, quem finge virtude','-야 = cópula informal: “é”','-A palavra supõe duas faces: a que aparece e a que age'])
 ]),
 line('왜 자꾸 딴 길을 가래? 야, 너나 잘해','Por que insiste em me mandar por outro caminho? Ei, cuide de você',[
  e('왜','por que',['Interrogativo de causa','-Pergunta sem vontade real de ouvir a resposta']),
  e('자꾸','insistentemente; de novo e de novo',['Advérbio de repetição com incômodo','-É o verbo do outro que se repete, não o do narrador']),
  e('딴 길을','outro caminho (objeto)',['딴 = outro, diferente, de terceiro','-길 = caminho','-을 = objeto: o caminho que se quer impor']),
  e('가래?','está dizendo para eu ir?',['가다 = ir','-래 = citação de ordem ou de fala alheia','-A pergunta reproduz na boca do outro aquilo que não foi pedido']),
  e('야','ei; ó',['Interjeição de chamada, às vezes seca ou hostil','-Sozinha e com vírgula depois, soa como um empurrão']),
  e('너나 잘해','faça o seu próprio bem; cuide da sua vida',['너나 = pelo menos você, você mesmo','-잘해 = faça bem (잘하다 no comando informal)','-É uma expressão fixa de quem devolve a recomendação ao outro'],'너나 잘해 é o jeito de dizer “cuide da sua vida” sem sair do registro informal. A estrutura devolve ao outro aquilo que ele estava cobrando.')
 ]),
 line('제발 강요하진 말아줘 (everybody say)','Por favor, não me imponha nada (todo mundo diga)',[
  e('제발','por favor; pelo amor de Deus',['Súplica que aqui soa como limite alcançado','-Com 강요하진 말아줘, é a última tentativa antes da recusa']),
  e('강요하진','não imponha (com ênfase)',['강요하다 = impor, forçar alguém a algo','-진 = contração de -지는, que põe a ação em foco negativo','-O verbo descreve exatamente o que a música combate']),
  e('말아줘','não faça isso (por mim)',['말다 = deixar de fazer, abster-se','-아 주다 = fazer algo em favor de quem fala','-아줘 é a forma informal e afetiva: “por mim, não faça”','-Amacia uma frase que, sem ela, seria uma ordem seca'])
 ]),
 en('La-la-la, la-la','La-la-la, la-la (interjeição musical)'),
 line('네 꿈이 뭐니? 네 꿈이 뭐니-뭐니? (Say what?)','Qual é o seu sonho? Qual é o seu sonho? (diz o quê?)',[
  e('네 꿈이','o seu sonho (sujeito)',['네 = seu (informal)','-꿈 = sonho','-이 = partícula de sujeito, porque 꿈 termina em consoante']),
  e('뭐니?','o que é? (informal)',['뭐 = o que','-니 = pergunta informal direta','-A repetição 뭐니-뭐니 alonga a sílaba e transforma a pergunta em refrão'])
 ]),
 en('La-la-la, la-la','La-la-la, la-la (interjeição musical)'),
 line('고작 이거니? 고작 이거니-거니?','Só isso? Só isso mesmo?',[
  e('고작','apenas; só isso (com desdém)',['Advérbio que reduz o valor do que se apresenta','-Aqui substitui 겨우 do início da música, sem perder o desprezo']),
  e('이거니?','é isto?',['이거 = isto, contração de 이것','-니 = pergunta informal','-A pergunta se repete no final, agora sobre a resposta que o outro deu'])
 ])
];


// Terceiro verso — o dia que se repete e a recusa em ser o que os outros querem.
const verse3=[
 line('Okay 이 지겨운 same day (same day)','Okay, este mesmo dia tão entediante (mesmo dia)',[
  e('이','este, esta',['Demonstrativo de proximidade, aqui apontando o dia que se vive','-Junto de 지겨운, aponta o incômodo: este dia, este mesmo']),
  e('지겨운','entediante, cansativo, de tanto repetir',['지겹다 = ser entediante, enfastiar','-ㄴ = forma relativa: “o que entedia”','-Atenção à irregularidade: 지겹다 perde o ㅂ e vira 지겨운']),
  e('same day','o mesmo dia (em inglês)',['A linha volta ao inglês para dizer o que o coreano já disse','-A repetição entre parênteses imita a própria rotina: mesma linha, mesmo dia'])
 ]),
 line('반복되는 매일에 (매일에)','Nos dias de todo dia, que se repetem (todo dia)',[
  e('반복되는','que se repete',['반복 = repetição','-되다 = ser feito (voz passiva)','-는 = forma relativa: “o que se repete”']),
  e('매일에','em cada dia; em todos os dias',['매일 = todos os dias, cada dia','-에 = partícula de tempo: no interior desses dias','-A expressão não marca um dia específico, e sim a soma deles'])
 ]),
 line('어른들과 부모님은 틀에 박힌 꿈을 주입해','Os adultos e os pais injetam o sonho enquadrado no molde',[
  e('어른들과','os adultos e',['어른 = adulto','-들 = plural: o grupo de gente já crescida','-과 = e, com: une os adultos e os pais numa só voz']),
  e('과','e (com)',['Partícula de acompanhamento, usada depois de consoante','-Une 어른들 e 부모님 numa só voz']),
  e('부모님은','os pais (tópico, com respeito)',['부모 = pai e mãe','-님 = sufixo de respeito obrigatório aqui','-은 = marca o tópico: são eles os que impõem']),
  e('틀에 박힌','encravado num molde',['틀 = molde, forma, quadro','-에 박히다 = estar cravado dentro','-박힌 = forma relativa de 박히다: “o que foi fixado”','-A imagem é de um sonho que já vem com a forma pronta']),
  e('꿈을','o sonho (objeto)',['꿈 = sonho','을 marca o objeto direto de 주입하다']),
  e('주입해','injeta; inculca (informal)',['주입하다 = injetar, incutir','-여/해 = forma informal do presente','-O verbo trata o sonho como substância: algo que se mete para dentro'])
 ]),
 line('장래희망 넘버원 (boo) 공무원?','A aspiração número um (buu) funcionário público?',[
  e('장래희망','o que se quer ser no futuro',['장래 = futuro','-희망 = esperança, aspiração','-É a expressão usada em redações escolares sobre “o que quero ser”']),
  e('넘버원','número um',['Empréstimo do inglês number one','-A mistura de idiomas marca a resposta ensaiada pela sociedade']),
  e('(boo)','(buu; vaia)',['Interjeição de desaprovação entre parênteses','-O som dissolve por um instante a aspiração “número um”']),
  e('공무원?','funcionário público?',['공무 = serviço público','-원 = pessoa que exerce uma função','-A pergunta repete a carreira mais recomendada como se fosse uma piada'])
 ]),
 line('강요된 꿈은 아냐, 9회말 구원투수','Não é um sonho imposto: sou o arremessador de salvamento na nona entrada',[
  e('강요된','imposto, forçado',['강요하다 = impor','-되다 = ser feito, voz passiva','-ㄴ = relativo passado: “o que foi imposto”']),
  e('꿈은','o sonho (tópico)',['꿈 = sonho; 은 marca o tópico, porque 꿈 termina em consoante','-O assunto vem primeiro para a negação cair no fim: o sonho, este não é imposto']),
  e('아냐','não é (informal)',['Forma reduzida de 아니야','-Encerra a negação sem rodeio, colada na afirmação seguinte']),
  e('9회말','a parte de baixo da nona entrada',['회 = rodada, entrada','-말 = segunda metade, parte final','-Em beisebol, é o último momento possível para virar o jogo'],'Na nona entrada, quando só resta o terço final, ainda é possível reverter o placar: a letra escolhe esse instante para falar de esperança tardia.'),
  e('구원투수','arremessador de salvamento',['구원 = salvação, resgate','-투수 = arremessador (no beisebol)','-É quem entra no fim para salvar o jogo'])
 ]),
 line('시간 낭비인 야자에 돌직구를 날려 (날려)','Arremessa uma bola direta contra o estudo noturno, que é perda de tempo (arremessa)',[
  e('시간 낭비인','que é perda de tempo',['시간 = tempo','-낭비 = desperdício','-이다 + ㄴ = forma relativa: “que é um desperdício”']),
  e('야자에','no estudo noturno obrigatório',['야자 é a redução de 야간자율학습, estudo autônomo noturno','-É a rotina extra que ocupa a noite dos estudantes no ensino médio','-에 marca o alvo: é contra isso que a bola é lançada']),
  e('에','em; contra',['Partícula de lugar ou de alvo: contra aquilo se lança a bola','-Aqui marca o alvo da crítica, não um lugar físico']),
  e('돌직구를','a bola reta e rápida (objeto)',['돌 = pedra, de duro','-직구 = bola reta, arremesso sem curva','-Diferente da bola curva, a reta vai direto ao ponto'],'돌직구 é a bola rápida que vai sem desvio. Usada como imagem, significa falar sem rodeios, ir direto ao assunto incômodo.'),
  e('날려','arremessa; manda voar (informal)',['날리다 = fazer voar, disparar','-Forma informal de comando','-O verbo repete a imagem esportiva do verso anterior'])
 ]),
 line('지옥 같은 사회에 반항해, 꿈을 특별사면 (사면)','Rebele-se contra esta sociedade infernal, dá indulto especial ao sonho (indulto)',[
  e('지옥','inferno',['Lugar de sofrimento; aqui é imagem para o sistema que aperta','-Com 같은, a comparação transforma a sociedade num lugar sem saída']),
  e('같은','como; igual a',['같다 = ser igual','-은 = forma relativa: “que é como”','-A comparação transforma a sociedade inteira em inferno']),
  e('사회에','à sociedade',['사회 = sociedade','-에 = contra, em direção a: o alvo da rebeldia']),
  e('반항해','rebele-se (informal)',['반항하다 = rebelar-se, resistir','-여/해 = presente informal','-O verbo exige enfrentamento, não fuga']),
  e('꿈을','o sonho (objeto)',['Objeto direto de 사면하다, dar indulto a algo','-O mesmo objeto de antes, agora pedindo perdão em vez de imposição']),
  e('특별사면','indulto especial',['특별 = especial','-사면 = perdão, anistia','-A palavra vem do direito: perdão oficial concedido a quem já foi condenado','-Aqui o sonho é quem estava preso'])
 ]),
 line('자신에게 물어봐 니 꿈의 profile','Pergunte a si mesmo o perfil do seu sonho',[
  e('자신에게','a si mesmo',['자신 = si mesmo','-에게 = destinatário da pergunta','-Volta aqui como conclusão do que já foi pedido antes']),
  e('물어봐','pergunte (informal)',['묻다 = perguntar','-아 봐 = experimente fazer: faça a pergunta e encare a resposta']),
  e('니 꿈의','do seu sonho',['니 = seu (forma falada de 너의)','-꿈 = sonho','-의 = partícula de posse']),
  e('profile','perfil (em inglês)',['Empréstimo do inglês','-A palavra fecha a lista de empréstimos da música: number one, boy, profile'])
 ]),
 line('억압만 받던 인생, 니 삶의 주어가 되어봐','Uma vida que só recebeu opressão: torne-se o sujeito da sua própria vida',[
  e('억압만','apenas opressão',['억압 = opressão, repressão','-만 = somente','-O advérbio resume a vida como uma soma de pressões']),
  e('받던','que vinha recebendo',['받다 = receber','-던 = forma relativa de hábito no passado: “que recebia”','-Não é uma ação única, e sim uma rotina de sofrer']),
  e('인생','vida vivida',['Diferente de 생명 (vida biológica), 인생 é o percurso de uma pessoa','-Aqui aparece sem partícula, como um bloco posto ao lado de 받던: uma vida que só apanhava']),
  e('니 삶의','da sua vida',['삶 = vida como experiência vivida','-의 = de','-Comparado a 인생, 삶 é mais concreto e íntimo']),
  e('주어가','o sujeito (gramatical)',['주어 = sujeito da frase','-가 = partícula de sujeito','-A imagem empresta a gramática para a vida: quem age, quem faz a frase acontecer']),
  e('되어봐','torne-se; experimente ser (informal)',['되다 = tornar-se','-아 봐 = experimente: faça a tentativa','-O verso termina em convite, não em ordem'])
 ])
];


// Ponte — o despertar: primeiro a confissão da ignorância, depois o convite ao movimento.
const bridge=[
 line('살아가는 법을 몰라','Não sei o jeito de seguir vivendo',[
  e('살아가는','o modo de ir vivendo',['살다 = viver','-아 가다 = ir fazendo, seguir fazendo','-는 = forma relativa: “o jeito que se vive”']),
  e('법을','o modo, o método (objeto)',['법 = jeito, método, regra','-을 = objeto direto de 모르다','-A palavra trata a vida como técnica que se deveria aprender']),
  e('몰라','não sei (informal)',['모르다 = não saber','-Forma informal curta; o educado seria 몰라요','-Repetida quatro vezes, a negativa passa a ser o próprio refrão'])
 ]),
 line('날아가는 법을 몰라','Não sei o jeito de sair voando',[
  e('날아가는','o modo de ir voando',['날다 = voar','-아 가다 = ir fazendo, afastar-se fazendo','-A imagem tira a pessoa do chão: não é andar, é voar']),
  e('법을','o jeito, o método (objeto)',['법 = jeito, método','-을 = objeto direto de 모르다','-A segunda negação repete a estrutura: o corpo não sabe voar']),
  e('몰라','não sei (informal)',['모르다 = não saber','-Mesma forma curta do verso anterior','-A repetição transforma a negativa em refrão'])
 ]),
 line('결정하는 법을 몰라','Não sei o jeito de decidir',[
  e('결정하는','o modo de decidir',['결정 = decisão','-하다 = fazer','-는 = forma relativa: “o ato de decidir”','-A terceira negação sobe um grau: não é falta de sonho, é falta de escolha']),
  e('법을','o jeito, o método (objeto)',['Mesmo bloco dos versos anteriores','-을 marca o objeto de 모르다']),
  e('몰라','não sei (informal)',['모르다 = não saber','-Terceira repetição: a negativa já é o próprio som da estrofe'])
 ]),
 line('이젠 꿈꾸는 법도 몰라','Agora nem sei mais o jeito de sonhar',[
  e('이젠','agora, daqui em diante',['Contração de 이제는, com o 는 do contraste','-Marca a virada: antes não sabia viver, agora nem sonhar']),
  e('꿈꾸는','o modo de sonhar',['꿈꾸다 = sonhar (literal e figurado)','-는 = forma relativa']),
  e('법도','nem o jeito (também)',['법 = jeito','-도 = também, nem mesmo','-O 도 empurra a negativa ao limite: até o que restava foi perdido']),
  e('몰라','não sei (informal)',['모르다 = não saber','-Quarta repetição, agora com 이젠: a negação alcançou o sonho'])
 ]),
 line('눈을, 눈을, 눈을 떠라 다','Abra os olhos, abra os olhos, abram todos os olhos',[
  e('눈을','os olhos (objeto)',['눈 = olho','-을 = objeto de 뜨다, abrir','-Atenção: 눈 também significa neve, mesmo som e mesma escrita']),
  e('떠라','abram! (imperativo)',['뜨다 = abrir (os olhos), descolar, flutuar','-아라 = imperativo direto e enfático','-Diferente de 뜨겁다 (estar quente): aqui é o verbo de abrir']),
  e('다','todos; tudo',['Advérbio de totalidade','-Fecha a ordem incluindo quem ouve e quem canta'])
 ]),
 line('이제 춤을, 춤을, 춤을 춰봐 자','Agora experimente dançar, dançar, dançar — vamos',[
  e('이제','agora',['Advérbio de tempo que marca a mudança de fase','-Depois de abrir os olhos, o corpo se move']),
  e('춤을','a dança (objeto)',['춤 = dança','-을 = objeto','-춤을 추다 é a expressão fixa para dançar: o verbo 추다 não aparece sozinho']),
  e('춰봐','experimente dançar (informal)',['추다 = dançar','-어 봐 = experimente fazer','-춰 é a contração de 추어']),
  e('자','vamos (convite)',['Partícula final que chama à ação conjunta','-Diferente da ordem, 자 inclui quem fala: vamos todos'])
 ]),
 line('다시 꿈을, 꿈을, 꿈을 꿔봐 다','Sonhe de novo, sonhe, sonhe — sonhem todos',[
  e('다시','de novo',['Advérbio de repetição','-Retoma o começo da música sem ironia: agora é convite']),
  e('꿈을','o sonho (objeto)',['꿈 = sonho','-을 = objeto','-꿈을 꾸다 é a expressão fixa de sonhar: 꿈 não se “tem”, ele se “sonha”']),
  e('꿔봐','experimente sonhar (informal)',['꾸다 = sonhar','-어 봐 = experimente','-꿔 é a contração de 꾸어; aqui 꿈꾸다 perdeu a primeira parte e ficou só 꾸다'])
 ]),
 line('너 꾸물대지마','Você, não fique hesitando',[
  e('너','você (informal)',['Pronome direto, sem marca de respeito','-No comando, o pronome não deixa dúvida sobre quem deve mudar']),
  e('꾸물대지마','não fique enrolando (informal)',['꾸물대다 = hesitar, arrastar-se, demorar sem motivo','-지 마 = não faça','-A palavra descreve quem se mexe devagar justamente para não decidir'])
 ]),
 line('우물쭈물 대지마 what\'s up!','Não fique todo sem jeito — e aí!',[
  e('우물쭈물','hesitando, todo sem jeito',['Palavra expressiva que imita o gaguejar de quem não se decide','-Não tem tradução de uma palavra: é o som da indecisão']),
  e('대지마','não faça isso (informal)',['대다 = fazer (um gesto, um som, uma ação repetida)','-지 마 = não faça','-Com 우물쭈물, o verbo significa “ficar fazendo esse gesto”']),
  e('what\'s up!','e aí! (em inglês)',['Fecho em inglês que devolve energia à cena','-A música alterna ordem e descontração até o último segundo'])
 ])
];

export const noMoreDreamSections:{title:string;lines:StudyLine[]}[]=[
 {title:'A pergunta que abre a música',lines:questionLines},
 {title:'Primeiro verso · o conforto que dispensa sonho',lines:verse1.slice(0,8)},
 {title:'Pré-refrão · o espelho',lines:verse1.slice(8)},
 {title:'Segundo verso · a cobrança',lines:verse2},
 {title:'Refrão',lines:chorus},
 {title:'Terceiro verso · o mesmo dia',lines:verse3},
 {title:'Pré-refrão e refrão',lines:[...verse1.slice(8),...chorus]},
 {title:'Ponte · acordar',lines:bridge},
 {title:'Fechamento',lines:[
  ...chorus,
  en('To all the youngsters without dreams, haha','Para todos os jovens sem sonhos, haha.')
 ]}
];

export const noMoreDreamVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'살다',pt:'viver; 살아가다: ir vivendo'},
  {ko:'꾸다',pt:'sonhar; 꿈꾸다: sonhar (com um sonho)'},
  {ko:'모르다',pt:'não saber'},
  {ko:'알다',pt:'saber; 알았어: tá bom, entendi'},
  {ko:'묻다',pt:'perguntar; 물어봐: pergunte'},
  {ko:'가다',pt:'ir; 가라고: que vá, para ir'},
  {ko:'하다',pt:'fazer'},
  {ko:'받다',pt:'receber'},
  {ko:'되다',pt:'tornar-se, virar'},
  {ko:'주입하다',pt:'injetar, inculcar'},
  {ko:'강요하다',pt:'impor, forçar'},
  {ko:'반항하다',pt:'rebelar-se, resistir'},
  {ko:'날리다',pt:'fazer voar, arremessar'},
  {ko:'추다',pt:'dançar (em 춤을 추다)'},
  {ko:'뜨다',pt:'abrir (os olhos); flutuar, descolar'},
  {ko:'까먹다',pt:'esquecer (informal)'},
  {ko:'날아가다',pt:'ir voando, voar para longe'},
  {ko:'결정하다',pt:'decidir'},
  {ko:'노력하다',pt:'esforçar-se'},
  {ko:'걱정하다',pt:'preocupar-se; 걱정 마: não se preocupe'},
  {ko:'준비하다',pt:'preparar(-se)'},
  {ko:'담다',pt:'guardar, acomodar dentro'},
  {ko:'두다',pt:'deixar (feito); -아/어 두다: deixar guardado'},
  {ko:'싫다',pt:'não querer, não gostar'},
  {ko:'겁나다',pt:'dar medo, sentir medo'},
  {ko:'들다',pt:'entrar; 철이 들다: amadurecer'},
  {ko:'꾸물대다',pt:'hesitar, enrolar, arrastar-se'},
  {ko:'대다',pt:'fazer (gesto ou som repetido)'},
  {ko:'보이다',pt:'aparecer, ser visto; 보여: mostra-se'}
 ],
 nouns:[
  {ko:'꿈',pt:'sonho'},
  {ko:'얌마',pt:'ei, ó você (chamada brusca)'},
  {ko:'거울',pt:'espelho'},
  {ko:'엄마',pt:'mãe'},
  {ko:'대학',pt:'faculdade, universidade'},
  {ko:'독서실',pt:'sala de estudos (paga, para estudar em silêncio)'},
  {ko:'학교',pt:'escola'},
  {ko:'등교',pt:'ida à escola'},
  {ko:'철',pt:'juízo, maturidade (que chega com o tempo)'},
  {ko:'임마',pt:'cara, ó (chamada brusca entre conhecidos)'},
  {ko:'자신',pt:'si mesmo'},
  {ko:'거짓말',pt:'mentira'},
  {ko:'위선자',pt:'hipócrita'},
  {ko:'어른',pt:'adulto'},
  {ko:'부모님',pt:'os pais (forma respeitosa)'},
  {ko:'틀',pt:'molde, forma, quadro'},
  {ko:'장래희망',pt:'o que se quer ser no futuro'},
  {ko:'공무원',pt:'funcionário público'},
  {ko:'회말',pt:'segunda metade de uma entrada (beisebol)'},
  {ko:'구원투수',pt:'arremessador de salvamento'},
  {ko:'시간',pt:'tempo; hora'},
  {ko:'낭비',pt:'desperdício'},
  {ko:'야자',pt:'estudo noturno obrigatório (야간자율학습)'},
  {ko:'지옥',pt:'inferno'},
  {ko:'사회',pt:'sociedade'},
  {ko:'특별사면',pt:'indulto especial'},
  {ko:'인생',pt:'vida (como percurso)'},
  {ko:'삶',pt:'vida vivida, existência'},
  {ko:'주어',pt:'sujeito (da frase)'},
  {ko:'법',pt:'jeito, método, regra'},
  {ko:'눈',pt:'olho (também: neve)'},
  {ko:'춤',pt:'dança'}
 ]
};



