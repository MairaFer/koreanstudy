// N.O — estudo detalhado da letra, no mesmo formato de Body to Body e No More Dream.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — a lista de bens que a letra repete e contesta.
const opening=[
 line('좋은 집 (좋은 집)','Uma boa casa (uma boa casa)',[
  e('좋은','bom, boa',['좋다 = ser bom','-은 = forma relativa: “a que é boa”','A palavra abre a lista exatamente com o que se deseja ter'],'좋은 집 é o primeiro item da lista de desejos que a música recusa: a casa aparece como bem material, não como lar.'),
  e('집','casa',['Casa como bem material, não como lar','Na Coreia, o apartamento é também medida de status social'])
 ]),
 line('좋은 차 (좋은 차)','Um bom carro (um bom carro)',[
  e('좋은','bom, boa (aqui: um bom)',['Mesma palavra da linha anterior','A repetição monta a lista: casa boa, carro bom']),
  e('차','carro',['차 = carro (também chá; o contexto decide)','O objeto aparece sem partícula: é item de lista, não de frase'])
 ]),
 line('그런 게 행복일 수 있을까? (있을까)','Será que esse tipo de coisa pode ser felicidade? (será que pode)',[
  e('그런 게','esse tipo de coisa',['그런 = desse tipo, assim','-게 = contração de 것이, a coisa','O sujeito fica vago de propósito: é tudo o que foi listado antes']),
  e('행복일 수 있을까?','será que pode ser felicidade?',['행복 = felicidade','-일 = seria (이다 + ㄹ)','-수 있을까 = será que é possível?','A pergunta não espera resposta: espera que você pense'])
 ]),
 en('In Seoul (In Seoul)','Em Seul (em Seul)'),
 en('To the SKY (to the SKY),','Até o céu (até o céu),'),
 line('부모님은 정말 행복해질까? (해질까)','Será que os pais vão mesmo ficar felizes? (ficar felizes)',[
  e('부모님은','os pais (tópico, com respeito)',['부모 = pai e mãe','-님 = sufixo de respeito obrigatório','-은 = tópico: são eles o centro da pergunta']),
  e('정말','de verdade, mesmo',['Advérbio que reforça a dúvida: não é “se”, é “de verdade”','Sozinho antes do verbo, ele carrega toda a descrença da frase']),
  e('행복해질까?','será que vão ficar felizes?',['행복하다 = ser feliz','-해지다 = tornar-se (mudança de estado)','-ㄹ까 = será que (hipótese em forma de pergunta)'])
 ])
];

// Primeiro verso — a esteira de escola, casa e lan house.
const verse1=[
 line('꿈 없어졌지 숨쉴 틈도 없이','O sonho sumiu, sem nem tempo de respirar',[
  e('꿈','sonho',['꿈 = sonho e também o ato de sonhar dormindo','Aqui é o sonho de futuro, apagado pela rotina']),
  e('없어졌지','desapareceu, né',['없다 = não existir','-어지다 = tornar-se (mudança de estado)','-었 = passado','-지 = busca concordância: sumiu, e você sabe disso']),
  e('숨쉴 틈도 없이','sem nem uma brecha para respirar',['숨쉴 = 숨을 쉴, de respirar','틈 = brecha, intervalo','-도 = nem mesmo','-없이 = sem','A respiração vira a primeira coisa que se perde'])
 ]),
 line('학교와 집 아니면','A escola e a casa — ou então',[
  e('학교와','a escola e',['학교 = escola','-와 = e, com (depois de vogal)','A rotina se resume a dois lugares ligados por 와']),
  e('집 아니면','casa, ou então',['집 = casa','아니면 = se não, ou então','A frase corta o resto do mundo: sobram dois lugares e um terceiro no verso seguinte'])
 ]),
 line('피씨방이 다인 쳇바퀴','A roda de hamster em que a lan house é tudo',[
  e('피씨방이','a lan house (sujeito)',['피씨방 = PC방, casa de jogos em rede','-이 = partícula de sujeito','O lugar entra na lista como o único espaço próprio da idade']),
  e('다인','que é tudo',['다 = tudo','-인 = que é (이다 + ㄴ)','Ligado a 쳇바퀴: o que resta da vida cabe nesses três lugares']),
  e('쳇바퀴','roda de hamster; rotina que gira',['쳇바퀴 = a roda onde o hamster corre sem sair do lugar','A imagem é de esforço que não leva a lugar nenhum'],'쳇바퀴 é a roda de exercício do hamster. Na fala, virou sinônimo de rotina repetitiva: muito movimento, nenhum deslocamento.')
 ]),
 line('같은 삶들을 살며','vivendo vidas iguais',[
  e('같은','iguais, do mesmo tipo',['같다 = ser igual','-은 = forma relativa']),
  e('삶들을','as vidas (objeto plural)',['삶 = vida vivida','-들 = plural','-을 = objeto direto de 살다','O plural importa: não é uma vida, são muitas idênticas']),
  e('살며','vivendo (e…)',['살다 = viver','-며 = enquanto, e também — encadeia a ação anterior'])
 ]),
 line('일등을 강요','Imposição do primeiro lugar',[
  e('일등을','o primeiro lugar (objeto)',['일등 = primeiro lugar, o número um','-을 = objeto de 강요하다','A palavra mede a pessoa por uma posição na fila']),
  e('강요','imposição; impor',['강요 = imposição, coerção','O verbo 강요하다 aparece sem terminação: a frase fica suspensa, como um cartaz'])
 ]),
 line('받는 학생은 꿈과','O estudante que recebe isso fica entre o sonho e',[
  e('받는','que recebe (relativo)',['받다 = receber','-는 = forma relativa presente','A coerção é algo que se recebe, não que se escolhe']),
  e('학생은','o estudante (tópico)',['학생 = estudante','-은 = marca o tópico: quanto ao estudante…']),
  e('꿈과','o sonho e',['꿈 = sonho','-과 = e (depois de consoante)','Liga o sonho à realidade que aparece na linha seguinte'])
 ]),
 line('현실 사이의 이중간첩','é um espião duplo entre a realidade',[
  e('현실 사이의','da realidade e do meio; no meio da realidade',['현실 = realidade','사이 = meio, intervalo entre dois lados','-의 = de','Junto: 이중간첩 entre a realidade e o sonho']),
  e('이중간첩','espião duplo',['이중 = duplo','-간첩 = espião, agente infiltrado','A imagem acusa o estudante de servir a dois lados ao mesmo tempo'],'이중간첩 é quem espiada para os dois lados ao mesmo tempo. Na letra, o estudante é obrigado a viver entre o que deseja e o que lhe mandam querer.')
 ])
];

// Segundo bloco — a pergunta sobre quem construiu tudo isso.
const verse2=[
 line('우릴 공부하는 기계로','A nós, em máquinas que só estudam',[
  e('우릴','a nós (objeto)',['우리 = nós','-ㄹ = contração de 를, objeto','Aparece como objeto de 만들다, fazer: nós somos o material']),
  e('공부하는','que estuda; que só estuda',['공부하다 = estudar','-는 = forma relativa presente','A palavra descreve a pessoa inteira pelo que ela faz']),
  e('기계로','como máquina; em máquina',['기계 = máquina','-로 = como, em (mudança de estado)','Junto de 만들다: transformar gente em máquina'])
 ]),
 line('만든 건 누구?','Quem foi que fez isso?',[
  e('만든 건','o que fez (a coisa feita)',['만들다 = fazer, criar','-ㄴ = relativo passado','-건 = contração de 것은','A pergunta joga a responsabilidade para fora de quem sofre']),
  e('누구?','quem?',['Interrogativo de pessoa','A pergunta volta várias vezes na música, sempre sem resposta explícita'])
 ]),
 line('일등이 아니면 낙오로 구분','Quem não é o primeiro é separado como fracasso',[
  e('일등이','o primeiro lugar (sujeito)',['일등 = primeiro lugar','-이 = partícula de sujeito, porque 등 termina em consoante']),
  e('아니면','se não for, ou então',['아니다 = não ser','-면 = se (condição)','A construção só admite dois resultados: primeiro ou nada']),
  e('낙오로','como quem ficou para trás',['낙오 = ficar para trás, fracassar','-로 = como, em (classificação)','A palavra vem de 낙오자: o que se perdeu do grupo']),
  e('구분','divisão, separação',['구분 = distinção, separação','O verbo 구분하다 aparece sem terminação: separar em dois grupos'])
 ]),
 line('짓게 만든 건 틀에 가둔 건','Quem fez vocês agirem assim? Quem trancou no molde?',[
  e('짓게','para que aja assim; fazendo agir',['-게 = de modo a, para que','-짓게 만들다 = fazer alguém agir de determinado jeito','O verbo 짓다 cobre ações e também construções']),
  e('만든 건','o que fez',['-ㄴ = relativo passado','-건 = contração de 것은','Repete a pergunta anterior com a mesma estrutura']),
  e('틀에','dentro do molde',['틀 = molde, forma, quadro','-에 = dentro de','A forma pronta que já vem antes da pessoa']),
  e('가둔 건','o que trancou',['가두다 = prender, confinar','-ㄴ = relativo passado','-건 = 것은','O molde aparece como cela: forma e prisão na mesma imagem'])
 ]),
 line('어른이란 걸 쉽게 수긍','aceitar sem esforço o que chamam de “ser adulto”',[
  e('어른이란 걸','essa tal coisa de ser adulto',['어른 = adulto','-이란 = que é, chamado de (definição)','-걸 = contração de 것을']),
  e('쉽게','facilmente',['쉽다 = ser fácil','-게 = forma adverbial','Aceitar sem complicar é justamente o que o sistema pede']),
  e('수긍','aceitação, concordância',['수긍 = aceitar uma razão, concordar','수긍하다 aparece sem terminação: engolir a explicação'])
 ])
];

// Fim do mesmo bloco — a estrofe continua com a lei da selva.
const verse2b=[
 line('할 수밖에 단순하게','só resta aceitar, de forma simples',[
  e('할 수밖에','não há como não fazer; só resta',['-ㄹ 수밖에 = não existe outra opção além de','할 = fazer (forma futura relativa)','A construção tira a escolha da mão de quem age']),
  e('단순하게','de forma simples; sem complicar',['단순하다 = ser simples','-게 = forma adverbial','Pensar simples é o que se espera de quem obedece'])
 ]),
 line('생각해도 약육강식 아래','mesmo pensando nisso, debaixo da lei do mais forte',[
  e('생각해도','mesmo pensando; ainda que pense',['생각하다 = pensar','-아도 = mesmo que','Marca concessão: até refletindo, a conclusão é a mesma']),
  e('약육강식','a lei do mais forte devora o mais fraco',['약육 = fraco e forte','강식 = os fortes devoram','É o hanja da lei da selva: o fraco serve de comida'],'약육강식 é o termo para a lei da selva. Na letra, ele descreve a escola: quem não é o primeiro vira alimento de quem é.'),
  e('아래','abaixo; debaixo de',['Abaixo, sob, na posição inferior','Aqui indica o lugar de quem está embaixo nessa lei'])
 ]),
 line('친한 친구도 밟고 올라서게','faz até o amigo próximo ser pisado para você subir',[
  e('친한 친구도','até o amigo próximo',['친하다 = ser íntimo, chegado','-ㄴ = forma relativa','친구 = amigo','-도 = até mesmo','O 도 coloca o amigo dentro da competição']),
  e('밟고','pisando em',['밟다 = pisar, pisotear','-고 = e (encadeia a ação seguinte)']),
  e('올라서게','para que suba por cima',['올라서다 = subir pisando em algo','-게 = de modo a, para que','A imagem é literal: o corpo do outro vira degrau'])
 ]),
 line('만든 게 누구라 생각해 what?','Quem você acha que fez isso, hein?',[
  e('만든 게','o que fez (a coisa)',['만들다 = fazer','-ㄴ = relativo passado','-게 = contração de 것이']),
  e('누구라','que é quem; dizendo que é quem',['누구 = quem','-라 = como, dizendo que (citação)','A pergunta outra vez empurra a autoria para o outro']),
  e('생각해','você acha; pense (informal)',['생각하다 = pensar, achar','-해 = forma informal do presente','Fecha a estrofe devolvendo a pergunta'])
 ])
];

// Pré-refrão — o conselho que os adultos repetem.
const preChorus=[
 line('어른들은 내게 말하지','Os adultos me dizem',[
  e('어른들은','os adultos (tópico plural)',['어른 = adulto','-들 = plural','-은 = tópico: são eles que dizem, e dizem sempre o mesmo']),
  e('내게','a mim',['나 = eu','-에게 contrai em 내게: a mim','A forma sem honorífico soa íntima e direta']),
  e('말하지','dizem (informal)',['말하다 = falar, dizer','-지 = presente informal','O -지 dá ao verbo um ar de constatação cansada'])
 ]),
 line('힘든 건 지금뿐이라고','que a parte difícil é só agora',[
  e('힘든 건','a parte difícil; o que é difícil',['힘들다 = ser difícil, custoso','-ㄴ = forma relativa','-건 = contração de 것은']),
  e('지금뿐이라고','que é só agora',['지금 = agora','-뿐 = apenas, somente','-이라고 = que é (citação)','O consolo é sempre o mesmo: só agora, depois melhora'])
 ]),
 line('조금 더 참으라고 나중에 하라고','que eu aguente mais um pouco, que faça depois',[
  e('조금 더','um pouco mais',['조금 = um pouco','더 = mais','Juntas, as duas palavras medem o adiamento']),
  e('참으라고','que eu aguente, que tenha paciência',['참다 = aguentar, suportar','-으라고 = ordem citada: “aguente”']),
  e('나중에','mais tarde, depois',['나중 = depois, mais tarde','-에 = marca de tempo','A palavra volta em toda a música como promessa adiada']),
  e('하라고','que faça, para fazer',['하다 = fazer','-라고 = ordem citada: “faça depois”'])
 ])
];

// Linhas em inglês que se repetem no refrão.
const sayNo=en('Everybody say NO!','Todo mundo diz NÃO!');
const weRoll1=en('We roll (We roll)','Nós seguimos em frente (nós seguimos)');
const weRoll2=en('We roll (We roll) We roll','Nós seguimos em frente (nós seguimos), nós seguimos');

// Refrão — a recusa em forma de palavra de ordem.
const chorus=[
 sayNo,
 line('더는 나중이란 말로 안돼','Não dá mais com essa história de “depois”',[
  e('더는','mais; não mais',['더 = mais','-는 = marca negativa: não mais, daqui em diante não','A palavra abre as duas frases do refrão']),
  e('나중이란 말로','com a palavra “depois”',['나중 = depois','-이란 = que se chama, do tipo','말 = palavra','-로 = com, por meio de','A promessa é tratada como argumento gasto']),
  e('안돼','não pode, não dá',['안 되다 = não dar, não funcionar','-돼 = contração de 되어','É a negação mais usada para dizer “isso não vale mais”'])
 ]),
 line('더는 남의 꿈에 갇혀 살지 마','Pare de viver trancado no sonho dos outros',[
  e('더는','mais (não mais)',['Mesma abertura da frase anterior','A repetição transforma a queixa em refrão']),
  e('남의 꿈에','no sonho dos outros',['남 = outro, alheio','-의 = de (aqui abreviado)','꿈 = sonho','-에 = dentro de, no lugar onde se está preso']),
  e('갇혀','preso, trancado',['갇히다 = ficar preso, ser trancado','-여 se liga ao verbo seguinte: preso e vivendo assim']),
  e('살지 마','não viva (proibição)',['살다 = viver','-지 마 = não faça','A ordem vem no informal, direta como um grito'])
 ]),
 weRoll1,
 weRoll2,
 sayNo,
 line('정말 지금이 아니면 안돼','Se não for agora de verdade, não dá',[
  e('정말','de verdade, mesmo',['Advérbio que reforça: não é “agora” qualquer, é agora de verdade','Sem ele, a frase seria só uma condição']),
  e('지금이 아니면','se não for agora',['지금 = agora','-이 = partícula de sujeito','아니면 = se não for','Juntas: a única janela possível é o presente']),
  e('안돼','não pode, não dá',['Mesma negação do início do refrão','Fecha a condição: agora ou nunca'])
 ]),
 line('아직 아무것도 해본 게 없잖아','Ainda não experimentamos nada, sabe?',[
  e('아직','ainda',['Advérbio de tempo que não fechou','Marca o que continua aberto: a vida ainda não começou']),
  e('아무것도','nada (com verbo negativo)',['아무 = qualquer','-것 = coisa','-도 = também','Com a negação, passa a significar “absolutamente nada”']),
  e('해본 게','o que já se tentou fazer',['하다 = fazer','-아/어 보다 = experimentar fazer','-ㄴ = relativo passado','-게 = contração de 것이']),
  e('없잖아','não existe, né (com apelo)',['없다 = não existir','-잖아 = você sabe disso, não é?','A terminação cobra a concordância de quem ouve'])
 ]),
 weRoll1,
 weRoll2,
 sayNo
];

// Terceiro bloco — o desejo simples e a conta que não fecha.
const verse3=[
 line('놀고 먹고 싶어','Quero brincar e comer',[
  e('놀고','brincar e; brincando',['놀다 = brincar, divertir-se','-고 = e (liga dois verbos)','O desejo é o mais básico possível: brincar']),
  e('먹고','comer e; comendo',['먹다 = comer','-고 = e','Junto de 놀고, forma o par mais simples de contentamento']),
  e('싶어','quero',['-고 싶다 = querer fazer alguma coisa','-어 = forma informal','A frase é o desejo sem disfarce, sem justificativa'])
 ]),
 line('교복 찢고 싶어','Quero rasgar o uniforme escolar',[
  e('교복','uniforme escolar',['교복 = roupa escolar obrigatória','A peça é o símbolo visível de quem manda no corpo do estudante']),
  e('찢고 싶어','quero rasgar',['찢다 = rasgar, romper','-고 싶어 = quero','Rasgar o tecido é rasgar a obrigação'])
 ]),
 en('Make money good money','Ganhar dinheiro, bom dinheiro'),
 line('벌써 삐딱한 시선','Já um olhar de traverso',[
  e('벌써','já, tão cedo',['Advérbio de tempo que marca o adiantamento','O julgamento chega antes de qualquer ato']),
  e('삐딱한','torto, atravessado',['삐딱하다 = ser torto, inclinado','-ㄴ = forma relativa','Descreve o olhar de reprovação, de quem já decidiu sobre você']),
  e('시선','olhar; linha do olhar',['시선 = linha de visão','A palavra se usa para o olhar dos outros sobre alguém'])
 ]),
 line('막연함뿐인 통장,','Uma conta bancária que só tem indefinição',[
  e('막연함뿐인','que só tem vagueza',['막연하다 = ser vago, indefinido','-함 = forma o substantivo abstrato','-뿐인 = que é só isso','A falta de dinheiro aparece como falta de direção']),
  e('통장','caderneta, extrato bancário',['통장 = caderneta e extrato da conta','O objeto material mede o que não existe: dinheiro e futuro'])
 ]),
 line('내 불행은 한도초과지','Minha infelicidade estourou o limite',[
  e('내','meu, minha',['나의 = meu; contraído em 내','O possessivo coloca o sofrimento em primeira pessoa']),
  e('불행은','a infelicidade (tópico)',['불행 = infelicidade','-은 = marca o tópico','O oposto de 행복, que abre a música']),
  e('한도초과지','estourou o limite, né',['한도 = limite, teto','초과 = excesso, ultrapassagem','-지 = confirmação','A imagem é bancária: o cartão não passa, mas a conta do sofrimento cresce'])
 ]),
 line('공부하는 한숨 공장,','Uma fábrica de suspiros que só estuda',[
  e('공부하는','que estuda',['공부하다 = estudar','-는 = forma relativa presente','Aqui funciona como etiqueta da fábrica']),
  e('한숨','suspiro',['한숨 = suspiro','한숨 쉬다 = suspirar','O produto da fábrica é o ar que se solta sem querer']),
  e('공장','fábrica',['공장 = fábrica, indústria','A escola aparece como linha de produção de cansaço'])
 ]),
 line('계속되는 돌려막기','Um remendo atrás do outro, sem parar',[
  e('계속되는','que continua, que não para',['계속 = continuação','-되다 = ser feito (passivo)','-는 = forma relativa']),
  e('돌려막기','tapar um buraco com o recurso de outro lugar',['돌려막다 = fazer um remendo com o dinheiro de outro compromisso','-기 = forma nominal','A palavra vem do mundo das dívidas: pagar uma com outra'])
 ])
];

// Quarto bloco — a confissão dos adultos e o desabafo de volta.
const verse4=[
 line('어른들이 하는 고백','A confissão que os adultos fazem',[
  e('어른들이','os adultos (sujeito plural)',['어른 = adulto','-들 = plural','-이 = partícula de sujeito']),
  e('하는','que fazem',['하다 = fazer','-는 = forma relativa presente','Ligado a 고백: a confissão que eles mesmos fazem']),
  e('고백','confissão',['고백 = confissão, declaração','A palavra costuma ser de amor; aqui a confissão revela um privilégio'])
 ]),
 line('너넨 참 편한 거래','Vocês têm uma vida bem confortável, hein',[
  e('너넨','vocês (tópico)',['너희 = vocês','-ㄴ = contração de 는','A forma é falada e soa confrontadora']),
  e('참','de fato, realmente',['Advérbio de reforço, aqui com um toque de ironia','Reforça o conforto que o narrador não tem']),
  e('편한 거래','uma troca confortável',['편하다 = ser confortável, fácil','-ㄴ = forma relativa','거래 = negócio, transação','거래 é gíria para a vida como negócio vantajoso'])
 ]),
 line('분에 넘치게 행복한 거래','Uma troca feliz além da própria medida',[
  e('분에','à própria medida, à altura de alguém',['분 = medida, proporção','-에 = conforme','분에 넘치다 = passar da medida: mais do que cabe a alguém']),
  e('넘치게','de forma excessiva',['넘치다 = transbordar, exceder','-게 = forma adverbial','O mesmo verbo volta no fim da estrofe, para o lado oposto']),
  e('행복한 거래','uma troca feliz',['행복하다 = ser feliz','-ㄴ = forma relativa','거래 = negócio, transação','A felicidade é descrita como cláusula de contrato'])
 ]),
 line('그럼 이렇게도 불행한 나는 뭔데','Então, e eu, que sou infeliz até deste jeito?',[
  e('그럼','então, nesse caso',['Conectivo que retoma a conclusão do outro','O narrador aceita a premissa para virar o argumento contra ela']),
  e('이렇게도','até assim, mesmo deste jeito',['이렇게 = assim, deste modo','-도 = até, mesmo','O advérbio estica a comparação até o limite']),
  e('불행한','infeliz (relativo)',['불행하다 = ser infeliz','-ㄴ = forma relativa','É a resposta exata de 행복한, da linha anterior']),
  e('나는 뭔데','e eu, o que sou então?',['나 = eu','-는 = marca o tópico','뭐 = o que','-ㄴ데 = mas então, e neste caso'])
 ]),
 line('공부 외엔 대화주제가 없어','Fora estudar, não sobra assunto',[
  e('공부 외엔','fora o estudo',['공부 = estudo','외 = fora de','-엔 = contração de 에는: quanto a fora isso…']),
  e('대화주제가','o assunto de conversa (sujeito)',['대화 = conversa','주제 = assunto, tema','-가 = partícula de sujeito']),
  e('없어','não existe, não tem',['없다 = não existir','-어 = forma informal','A vida social cabe dentro do único tema permitido'])
 ]),
 line('밖엔 나 같은 애가 넘쳐','Lá fora está cheio de gente como eu',[
  e('밖엔','lá fora (tópico)',['밖 = fora, exterior','-엔 = contração de 에는','O fora é o mundo que não caberia nessa rotina']),
  e('나 같은','gente como eu',['나 = eu','같은 = como, igual a','A comparação tira o caso do singular: não é só ele']),
  e('애가','a pessoa, o garoto (informal)',['애 = criança, garoto, pessoa jovem','-가 = partícula de sujeito','A palavra é informal e pode soar depreciativa']),
  e('넘쳐','transborda, é demais',['넘치다 = transbordar','-어 = forma informal','A quantidade vira imagem: tem gente demais na mesma situação'])
 ]),
 line('똑같은 꼭두각시 인생','A mesmíssima vida de fantoche',[
  e('똑같은','exatamente igual',['똑같다 = ser exatamente igual','-은 = forma relativa','Não é parecido: é igual, sem diferença nenhuma']),
  e('꼭두각시','fantoche, marionete',['꼭두각시 = boneco do teatro de marionetes coreano','A imagem é de alguém que se move pelos fios de outra pessoa'],'꼭두각시 é o boneco articulado do teatro tradicional coreano, movido por fios. Na letra, é a vida que se move por decisão alheia.'),
  e('인생','vida (percurso)',['인생 = vida vivida','Diferente de 생명 (vida biológica), 인생 é o caminho de uma pessoa'])
 ]),
 line('도대체 누가 책임져줘?','Afinal, quem vai assumir essa responsabilidade?',[
  e('도대체','afinal, raios',['Advérbio que reforça a pergunta com impaciência','Aparece quando a resposta já deveria ter vindo']),
  e('누가','quem (sujeito)',['누구 = quem','-가 = partícula de sujeito','A mesma pergunta de 만든 건 누구?, agora em forma de cobrança']),
  e('책임져줘?','assume a responsabilidade por mim?',['책임 = responsabilidade','-지다 = carregar, assumir','-아/어 주다 = fazer algo em favor de quem fala','-줘 é o pedido: faça isso por mim'])
 ])
];

export const nOSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura · o bom apartamento e o bom carro',lines:opening},
 {title:'Primeiro verso · a esteira',lines:verse1},
 {title:'Segundo bloco · quem fez isso?',lines:[...verse2,...verse2b]},
 {title:'Pré-refrão · o conselho dos adultos',lines:preChorus},
 {title:'Refrão',lines:chorus},
 {title:'Abertura outra vez',lines:opening},
 {title:'Terceiro bloco · vontade de parar',lines:verse3},
 {title:'Quarto bloco · a confissão dos adultos',lines:verse4},
 {title:'Último pré-refrão e refrão',lines:[...preChorus,...chorus]},
 {title:'Fechamento',lines:[sayNo,sayNo,sayNo,sayNo]}
];


export const nOVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'이다',pt:'ser (cópula)'},
  {ko:'아니다',pt:'não ser'},
  {ko:'되다',pt:'tornar-se, virar; 안 되다: não dar'},
  {ko:'있다',pt:'haver, existir, ter'},
  {ko:'없다',pt:'não existir, faltar'},
  {ko:'없어지다',pt:'desaparecer, sumir'},
  {ko:'좋다',pt:'ser bom'},
  {ko:'살다',pt:'viver'},
  {ko:'놀다',pt:'brincar, divertir-se'},
  {ko:'먹다',pt:'comer'},
  {ko:'찢다',pt:'rasgar, romper'},
  {ko:'만들다',pt:'fazer, criar'},
  {ko:'짓다',pt:'construir; cometer (uma ação)'},
  {ko:'강요하다',pt:'impor, forçar'},
  {ko:'받다',pt:'receber'},
  {ko:'구분하다',pt:'separar, distinguir'},
  {ko:'가두다',pt:'prender, confinar'},
  {ko:'갇히다',pt:'ficar preso'},
  {ko:'수긍하다',pt:'aceitar, concordar'},
  {ko:'생각하다',pt:'pensar, achar'},
  {ko:'밟다',pt:'pisar, pisotear'},
  {ko:'올라서다',pt:'subir pisando em algo'},
  {ko:'넘치다',pt:'transbordar, exceder'},
  {ko:'참다',pt:'aguentar, ter paciência'},
  {ko:'말하다',pt:'falar, dizer'},
  {ko:'하다',pt:'fazer'},
  {ko:'계속되다',pt:'continuar, seguir sem parar'},
  {ko:'돌려막다',pt:'tapar um buraco com o recurso de outro lugar'},
  {ko:'책임지다',pt:'assumir a responsabilidade'}
 ],
 nouns:[
  {ko:'꿈',pt:'sonho'},
  {ko:'집',pt:'casa'},
  {ko:'차',pt:'carro (também: chá)'},
  {ko:'행복',pt:'felicidade'},
  {ko:'불행',pt:'infelicidade'},
  {ko:'부모님',pt:'os pais (forma respeitosa)'},
  {ko:'어른',pt:'adulto'},
  {ko:'학교',pt:'escola'},
  {ko:'학생',pt:'estudante'},
  {ko:'교복',pt:'uniforme escolar'},
  {ko:'피씨방',pt:'lan house (PC방)'},
  {ko:'쳇바퀴',pt:'roda de hamster; rotina que gira'},
  {ko:'삶',pt:'vida vivida'},
  {ko:'인생',pt:'vida (como percurso)'},
  {ko:'일등',pt:'primeiro lugar'},
  {ko:'낙오',pt:'ficar para trás, fracassar'},
  {ko:'현실',pt:'realidade'},
  {ko:'이중간첩',pt:'espião duplo'},
  {ko:'기계',pt:'máquina'},
  {ko:'틀',pt:'molde, forma, quadro'},
  {ko:'약육강식',pt:'a lei do mais forte'},
  {ko:'친구',pt:'amigo'},
  {ko:'말',pt:'palavra, fala'},
  {ko:'나중',pt:'depois, mais tarde'},
  {ko:'시선',pt:'olhar, linha do olhar'},
  {ko:'통장',pt:'caderneta, extrato bancário'},
  {ko:'한도',pt:'limite, teto'},
  {ko:'한숨',pt:'suspiro'},
  {ko:'공장',pt:'fábrica, indústria'},
  {ko:'고백',pt:'confissão'},
  {ko:'거래',pt:'negócio, transação'},
  {ko:'대화',pt:'conversa'},
  {ko:'주제',pt:'assunto, tema'},
  {ko:'애',pt:'garoto, pessoa jovem (informal)'},
  {ko:'꼭두각시',pt:'fantoche, marionete'},
  {ko:'책임',pt:'responsabilidade'}
 ]
};









