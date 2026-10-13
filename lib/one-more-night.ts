// Letra fornecida pela usuária; fragmentos poéticos preservados.
import type {StudyLine,StudyEntry} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const opening=[
 l('언젠가 너로 인해 한참을 울게 되겠지','Algum dia, por sua causa, vou acabar chorando por um bom tempo, imagino.',[
  e('언젠가','algum dia','Advérbio de tempo indefinido.','Aqui aponta para um futuro imaginado; em outros contextos pode se referir a um momento do passado.'),
  e('너로','por você; por sua causa','너 é você informal; 로 liga o nome à expressão de causa 인해.','너로 인해 deve ser lido como um conjunto, não como movimento em direção à pessoa.'),
  e('인해','em razão de','Forma de 인하다, ser causado por.','A construção nome + (으)로 인해 apresenta uma causa, sem necessariamente atribuir culpa.'),
  e('한참을','por bastante tempo','한참 indica um intervalo considerável; 을 marca aqui a duração.','Não expressa um número exato de minutos ou horas.'),
  e('울게','a chorar','울다, chorar, recebe -게.','Com 되다, forma -게 되다: acabar entrando numa situação ou passando a fazer algo.'),
  e('되겠지','vou acabar, imagino','되다 + -겠- + -지. -겠- apresenta uma projeção ou suposição.','-지 dá um tom de expectativa reconhecida pelo narrador. Não é uma previsão factual garantida.')
 ]),
 l('난 그 골목길에 서 있었어','Eu estava de pé naquela ruela.',[
  e('난','eu (tópico)','Contração de 나는: 나 + 는.','É uma forma informal, não o pronome educado 저.'),
  e('그','aquela; essa','Determinante que aponta para algo reconhecível no contexto.','Modifica 골목길 e não recebe aqui uma partícula própria.'),
  e('골목길에','na ruela','골목길 é rua estreita ou ruela; 에 marca a localização.','Com 서 있다, indica onde a pessoa permanece de pé.'),
  e('서','de pé; tendo se levantado','Forma de 서다 com -어: 서- + -어 → 서.','A construção 서 있다 descreve o estado de estar em pé; 서 não é aqui uma partícula causal.'),
  e('있었어','estava','있다 + -었어, passado informal.','Com 서, situa no passado o estado de permanecer de pé.')
 ]),
 en("Fallin' back to me",'Voltando para mim.'),en('I feel you back to me','Sinto você voltando para mim.'),
 l('두려운 건, 벌써 슬픈 건','O que dá medo, o que já entristece…',[
  e('두려운','que dá medo; temido','두렵다 tem alternância ㅂ: 두렵- + -은 → 두려운.','A forma modifica 것, reduzido no segmento seguinte.'),
  e('건','o que…; quanto ao fato de…','Contração de 것은, substantivo dependente 것 + tópico 은.','Nas duas ocorrências, transforma a descrição anterior em assunto: o que dá medo / o que entristece.'),
  e('벌써','já','Advérbio que indica algo ocorrido ou sentido antes do esperado.','Aqui a tristeza é antecipada, antes da possível separação.'),
  e('슬픈','triste; que entristece','슬프다 + -ㄴ → 슬픈, forma que modifica um nome.','O predicado permanece suspenso até a imagem do verso seguinte.')
 ]),
 l('너무 닮아버린 그림자','…é a sombra que acabou ficando parecida demais.',[
  e('너무','demais; muito','Advérbio de intensidade.','A tradução “demais” acompanha o receio do verso anterior.'),
  e('닮아버린','que acabou se tornando semelhante','닮다 significa parecer-se; -아 버리다 destaca uma ação ou mudança como consumada. 버린 modifica 그림자.','O auxiliar pode carregar pesar ou outras emoções conforme o contexto; não significa literalmente jogar fora a sombra.'),
  e('그림자','sombra','Substantivo sem marca explícita de plural.','A imagem pode sugerir proximidade e semelhança entre duas pessoas; o verso não explicita de quem é cada sombra. Essa leitura é interpretativa.')
 ])
];
const dream=l('꿈이면 깨기 싫어, 내','Se for um sonho, não quero acordar, minha…',[
 e('꿈이면','se for um sonho','꿈 + 이다 + -(으)면 → 꿈이면.','A condição é aplicada a um substantivo; não significa “quando eu sonhei”.'),
 e('깨기','acordar (ação nominalizada)','깨다, acordar, recebe -기 para apresentar a ação como um nome.','Aqui não é o outro sentido de 깨다, quebrar algo.'),
 e('싫어','não quero; não gosto','Forma informal de 싫다. -기 싫다 expressa aversão ou falta de vontade de fazer algo.','A frase não afirma incapacidade de acordar; afirma o desejo de não fazê-lo.'),
 e('내','minha','Forma possessiva contraída de 나의.','Fica ligada ao inglês Fantasy no verso seguinte: “minha fantasia”. Não é uma frase completa isolada.')
]);
const pre=()=>[en('Twenty-four hours in the tub','Vinte e quatro horas na banheira.'),en('Twenty-four hours of your thought','Vinte e quatro horas pensando em você.'),en("Z-Z-Z, don't wake me up",'Z-Z-Z, não me acorde.'),dream];
const chorus=(n:number)=>[
 en('Fantasy'+(n===1?'':n===2?' (we in the right place)':' (in the right place)'),'Fantasia'+(n===1?'.':' (no lugar certo).')),
 en("It's a fantasy"+(n===1?' (ay, you next to me)':' (you next to me)'),'É uma fantasia (você ao meu lado).'),
 en("It's a fantasy"+(n===3?' (one more night)':' (oh)'),'É uma fantasia'+(n===3?' (mais uma noite).':' (oh).')),
 en("You're my fantasy"+(n===1?' (take that)':''),'Você é minha fantasia'+(n===1?' (toma essa).':'.')),
 en("Let's repeat it one more night"+(n===1?'':' (one more night)'),'Vamos repetir por mais uma noite'+(n===1?'.':' (mais uma noite).')),
 en('Give me one more night'+(n===1?'':' (one more night)'),'Me dê mais uma noite'+(n===1?'.':' (mais uma noite).')),
 en('Give me one more','Me dê mais uma…'),en('Fantasy, fantasy','Fantasia, fantasia.')
];
const verse=[
 l('기분은 온종일 like cloud nine','Meu humor fica nas nuvens o dia inteiro.',[
  e('기분은','quanto ao humor; a sensação','기분 é estado de espírito ou sensação; 은 marca o tópico.','O restante do verso descreve esse estado com uma expressão inglesa de grande felicidade.'),
  e('온종일','o dia inteiro','Expressão de duração usada adverbialmente.','Não indica apenas a manhã; abrange o dia todo.')
 ]),en("All day, walkin' it side by side",'O dia todo, caminhando lado a lado.'),
 l('이런 변화에 나도 놀라','Até eu me surpreendo com essa mudança.',[
  e('이런','este tipo de; uma… assim','Forma determinante que caracteriza o nome seguinte.','Modifica 변화: uma mudança como esta.'),
  e('변화에','com essa mudança','변화 é mudança; 에 marca aqui aquilo que provoca a reação.','Em 놀라다, pode indicar o estímulo da surpresa, não um lugar.'),
  e('나도','eu também; até eu','나 + 도.','“Até eu” destaca que o próprio narrador percebe a transformação.'),
  e('놀라','me surpreendo','Forma informal de 놀라다, surpreender-se ou se assustar.','O contexto feliz favorece surpresa; não necessariamente medo.')
 ]),
 l('존재 자체로 선물이야','Sua própria existência já é um presente.',[
  e('존재','existência; presença','Substantivo para o fato de existir ou um ser existente.','O possessivo “sua” é recuperado do contexto, não está expresso nesta palavra.'),
  e('자체로','por si só; em si','자체 é a própria coisa; 로 apresenta essa existência em si como suficiente.','존재 자체로 enfatiza o simples fato de a pessoa existir.'),
  e('선물이야','é um presente','선물 + cópula informal 이야, usada após consoante.','Não é uma ordem para dar um presente; é uma identificação afetiva.')
 ]),
 l('너와 함께 맞는 아침','A manhã que recebo junto de você…',[
  e('너와','com você','너 é você informal; 와 liga alguém à companhia de outra pessoa.','Junto de 함께, enfatiza a experiência compartilhada.'),
  e('함께','junto; juntos','Advérbio de companhia ou ação compartilhada.','Modifica o ato de receber a manhã.'),
  e('맞는','que recebe; que acolhe','맞다 + -는 modifica 아침.','Aqui 맞다 é receber/encontrar a chegada de algo, não estar correto nem ser atingido.'),
  e('아침','manhã','Substantivo qualificado por 너와 함께 맞는.','O verso é um grupo nominal poético; não acrescentamos um verbo inexistente à análise gramatical.')
 ]),
 l('말이 없어도 다 알기에','Porque, mesmo sem palavras, eu entendo tudo…',[
  e('말이','palavras (sujeito)','말 pode ser palavra ou fala; 이 marca o sujeito de 없다.','Não há marca obrigatória de plural em coreano.'),
  e('없어도','mesmo que não haja','없다 + -어도 introduz uma concessão.','A ausência de palavras não impede a compreensão.'),
  e('다','tudo','Advérbio com ideia de totalidade.','Aqui indica compreender por completo o que importa no contexto, não saber todos os fatos do mundo.'),
  e('알기에','porque entende/sei','알다 + -기에 introduz a razão da ideia seguinte.','A pessoa gramatical não aparece no verbo; “eu entendo” é uma escolha contextual. Não é aqui a construção avaliativa -기에 좋다.')
 ]),
 l('굳이 대단한 말 대신','Em vez de insistir em grandes palavras…',[
  e('굳이','fazendo questão; necessariamente','Advérbio que destaca insistência ou esforço deliberado.','Neste contexto sugere que uma declaração grandiosa é desnecessária.'),
  e('대단한','grandes; extraordinárias','대단하다 + -ㄴ modifica 말.','A grandeza é figurada: palavras marcantes, não tamanho físico.'),
  e('말','palavras; fala','Substantivo ligado a 대신.','Retoma a possibilidade de expressar o sentimento verbalmente.'),
  e('대신','em vez de','Nome que apresenta substituição: 말 대신, no lugar de palavras.','A alternativa é o pedido de companhia no verso seguinte.')
 ]),
 l('그저 곁에만 있어줘','Só fique ao meu lado, por favor.',[
  e('그저','simplesmente; apenas','Advérbio que apresenta um desejo simples.','Combina com a recusa de grandes declarações no verso anterior.'),
  e('곁에만','apenas ao lado','곁 é proximidade ou lado; 에 localiza; 만 restringe.','“Meu” está implícito na situação, não dentro da palavra 곁.'),
  e('있어줘','fique por mim; fique, por favor','있다 + -어 주다, em pedido informal 줘.','주다 apresenta a permanência como feita em benefício de alguém. Não é uma forma honorífica.')
 ])
];
const bridge=[en('One more night','Mais uma noite.'),en("Fallin'",'Caindo…'),
 l('헤어나올 수 없이 수놓인','Bordados de um jeito do qual não consigo escapar…',[
  e('헤어나올','escapar; conseguir sair','헤어나오다 remete a sair de uma situação que envolve a pessoa; -ㄹ antecede 수.','Não é 헤어지다, separar-se. O contexto descreve encantamento do qual é difícil sair.'),
  e('수','possibilidade; capacidade','Substantivo dependente de -(으)ㄹ 수 있다/없다.','Não é aqui o numeral ou a palavra número; faz parte da construção de possibilidade.'),
  e('없이','sem; sem poder','Forma adverbial associada a 없다.','헤어나올 수 없이 significa sem conseguir escapar; modifica poeticamente a imagem que vem depois.'),
  e('수놓인','bordados; salpicados como bordado','수놓이다 é a forma passiva de 수놓다, bordar; -ㄴ modifica 별들 no próximo verso.','As estrelas são representadas como bordado. É uma imagem figurada, não uma descrição literal de costura no céu.')
 ]),
 l('별들과 너를','…as estrelas e você…',[
  e('별들과','as estrelas e','별 é estrela; 들 marca plural; 과 conecta o nome terminado em consoante a outro.','Completa a imagem de 수놓인: estrelas que parecem bordadas.'),
  e('너를','você (objeto)','너 + 를, partícula de objeto.','O trecho não explicita um verbo coreano que governe esse objeto; a tradução preserva o fragmento, sem inventar uma ação como se estivesse escrita.')
 ]),en('One more night','Mais uma noite.'),en("Rollin'",'Girando…'),
 l("깨어나올 수 없이 bad mornin'",'Sem conseguir despertar e sair, uma manhã ruim…',[
  e('깨어나올','despertar e sair','깨어나다, despertar, combinado à ideia de sair em 나오다; -ㄹ antecede 수.','É distinto de 헤어나올: aqui há explicitamente a imagem de acordar do sonho.'),
  e('수','possibilidade; capacidade','Substantivo dependente na expressão -(으)ㄹ 수.','Liga o ato de despertar à impossibilidade no segmento seguinte.'),
  e('없이','sem; sem conseguir','Modifica a expressão como ausência de possibilidade.','O verso mistura um fragmento coreano com inglês; não é uma oração formal completa.')
 ]),
 l('한여름 밤의 꿈을','Um sonho de uma noite em pleno verão…',[
  e('한여름','pleno verão','한- intensifica a estação: o auge do verão.','Não se deve segmentar aqui como o numeral 한, um, mais 여름.'),
  e('밤의','da noite','밤 é noite; 의 liga o nome a 꿈.','O grupo 밤의 꿈 caracteriza o sonho como pertencente à noite.'),
  e('꿈을','um sonho (objeto)','꿈 + 을, marca de objeto após consoante.','Como 너를, encerra um fragmento sem verbo explícito. A análise não atribui uma referência literária como fato comprovado apenas pela expressão.')
 ])
];
const lastVerse=[
 l('떠오른 moonlight','A luz da lua que surgiu…',[
  e('떠오른','que surgiu; que se elevou','떠오르다 recebe -ㄴ para modificar o nome seguinte, aqui em inglês.','Pode descrever algo que sobe ou vem à mente; moonlight favorece a leitura visual de aparecer.')
 ]),
 l('Selene 같은 너 (ay)','Você, como Selene (ay).',[
  e('같은','como; semelhante a','같다 + -은 modifica 너.','Selene 같은 너 compara a pessoa à figura lunar Selene; 같은 não marca passado.'),
  e('너','você','Pronome informal de segunda pessoa.','É o nome modificado pelo grupo Selene 같은; não há partícula explícita neste fragmento.')
 ]),
 l('어젯밤처럼 아름다워줘','Seja linda como ontem à noite, por mim.',[
  e('어젯밤처럼','como ontem à noite','어젯밤 significa ontem à noite; 처럼 introduz comparação.','O ㅅ integra a grafia de 어젯밤; não é uma partícula separada.'),
  e('아름다워줘','seja bela/belo, por mim','아름답다 tem alternância ㅂ: 아름다워; liga-se a 줘, de 주다.','É um pedido poético aplicado a uma qualidade. Não é um modelo neutro de ordem cotidiana; o coreano não marca o gênero que a tradução escolhe.')
 ]),
 l('내 곁에서 어둠을 깨서','Ao meu lado, rompendo a escuridão…',[
  e('내','meu','Contração possessiva de 나의.','Desta vez o possuidor de 곁 está explícito.'),
  e('곁에서','ao lado; junto','곁 + 에서 marca o lugar em que ocorre uma ação.','Compare 곁에 있어줘: 에 localiza a permanência; 에서 apresenta o cenário de romper a escuridão.'),
  e('어둠을','a escuridão (objeto)','어둠 + 을.','A escuridão é a imagem sobre a qual a ação recai.'),
  e('깨서','rompendo; ao romper','깨다 + -어서 → 깨서. Aqui 깨다 é romper, não acordar como em 깨기.','-어서 conecta a ação à sequência. Como o verso é fragmentário, a tradução não impõe uma relação causal única.')
 ]),en('Yeah, yeah','Sim, sim.'),
 l('단 한 밤만 더 볼 수 있다면','Se eu pudesse te ver por só mais uma noite…',[
  e('단','só; apenas','Palavra que limita a quantidade mencionada.','Reforça a pequena extensão do pedido, junto com 만.'),
  e('한','uma','Forma de 하나 usada antes de um nome contado.','Aqui é o numeral uma; difere de 한여름, pleno verão.'),
  e('밤만','apenas uma noite','밤 significa noite; 만 restringe a duração.','A letra escreve 한 밤 separadamente; a análise conserva essa contagem de uma noite.'),
  e('더','mais','Advérbio de acréscimo.','Pede uma noite adicional, não apenas uma noite em geral.'),
  e('볼','ver','보다 + -ㄹ, forma que antecede 수.','O objeto da visão está implícito; a tradução recupera a pessoa amada.'),
  e('수','possibilidade','Substantivo dependente em -(으)ㄹ 수 있다.','Junto de 볼 e 있다, expressa poder ver.'),
  e('있다면','se houver; se puder','있다 + -다면 apresenta uma hipótese.','O conjunto 볼 수 있다면 é “se puder ver”. A letra deixa o resultado desejado aberto ao contexto.')
 ]),
 l('새벽을 지나','Passando pela madrugada…',[
  e('새벽을','a madrugada (percurso temporal)','새벽 é madrugada ou o período próximo ao amanhecer; 을 marca aquilo que se atravessa.','A leitura temporal depende do verbo seguinte, não de um deslocamento por um lugar físico.'),
  e('지나','passando por; atravessando','Forma de 지나다: 지나- + -아 → 지나.','Conecta o percurso da madrugada ao convite seguinte em inglês.')
 ]),en('Hit it, get it, do it again','Manda ver, vai nessa, faz de novo.')
];
export const oneMoreNightSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:opening},
 {title:"Pré-refrão",lines:pre()},
 {title:"Refrão",lines:chorus(1)},
 {title:"Verso",lines:verse},
 {title:"Pré-refrão",lines:pre()},
 {title:"Refrão",lines:chorus(2)},
 {title:"Ponte",lines:bridge},
 {title:"Verso final",lines:lastVerse},
 {title:"Pré-refrão",lines:pre()},
 {title:"Refrão",lines:chorus(3)},
 {title:"Final",lines:[en('Close your eyes, tell me what you see','Feche os olhos, me diga o que vê.'),en("(Ain't nothin' but a dream tonight)",'(Esta noite, não passa de um sonho.)'),en('Baby, I, baby, I give it to you all night, yeah','Amor, eu, amor, eu te dou isso a noite toda, sim.'),en('Every night is our fantasy','Toda noite é nossa fantasia.'),en("(Ain't nothin' but a dream tonight)",'(Esta noite, não passa de um sonho.)'),en('Baby, I, baby, I, give me, right at your time, yeah','Amor, eu, amor, eu… me dê, no seu tempo, sim.')]}
];
export const oneMoreNightVocabulary={verbs:[
 {ko:'인하다',pt:'ser causado por; decorrer de'},{ko:'울다',pt:'chorar'},{ko:'되다',pt:'tornar-se; acabar por, em -게 되다'},{ko:'서다',pt:'ficar de pé'},{ko:'있다',pt:'estar; existir'},
 {ko:'두렵다',pt:'ter medo; ser temível (descritivo)'},{ko:'슬프다',pt:'estar triste (descritivo)'},{ko:'닮다',pt:'parecer-se'},{ko:'깨다',pt:'acordar; em outro uso, romper algo'},{ko:'싫다',pt:'não gostar; não querer (descritivo)'},
 {ko:'놀라다',pt:'surpreender-se; assustar-se'},{ko:'맞다',pt:'receber; acolher a chegada (neste contexto)'},{ko:'없다',pt:'não haver (descritivo)'},{ko:'알다',pt:'saber; compreender'},{ko:'대단하다',pt:'ser extraordinário (descritivo)'},{ko:'주다',pt:'dar; fazer por alguém (auxiliar)'},
 {ko:'헤어나오다',pt:'sair; escapar de uma situação envolvente'},{ko:'수놓다',pt:'bordar'},{ko:'수놓이다',pt:'ser bordado; estar ornamentado'},{ko:'깨어나다',pt:'despertar'},{ko:'떠오르다',pt:'surgir; elevar-se'},{ko:'같다',pt:'ser semelhante (descritivo)'},{ko:'아름답다',pt:'ser belo (descritivo)'},{ko:'보다',pt:'ver'},{ko:'지나다',pt:'passar; atravessar'}
 ],nouns:[{ko:'한참',pt:'um bom tempo'},{ko:'골목길',pt:'ruela; rua estreita'},{ko:'그림자',pt:'sombra'},{ko:'꿈',pt:'sonho'},{ko:'기분',pt:'humor; estado de espírito'},{ko:'변화',pt:'mudança'},{ko:'존재',pt:'existência; presença'},{ko:'자체',pt:'a própria coisa; em si'},{ko:'선물',pt:'presente'},{ko:'아침',pt:'manhã'},{ko:'말',pt:'palavra; fala'},{ko:'곁',pt:'lado; proximidade'},{ko:'별',pt:'estrela'},{ko:'한여름',pt:'pleno verão'},{ko:'밤',pt:'noite'},{ko:'어젯밤',pt:'ontem à noite'},{ko:'어둠',pt:'escuridão'},{ko:'새벽',pt:'madrugada; aurora'}]};
