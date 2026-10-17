import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const intro=[
l('또 져버린 것 같아','Parece que perdi de novo.',[e('또','de novo','Advérbio de repetição.'),e('져버린','que acabou perdendo','지다 = perder; 지어 → 져.','-아/어 버리다 apresenta a ação concluída, aqui com frustração; -ㄴ modifica 것.'),e('것 같아','parece que','-ㄴ 것 같다 expressa uma impressão sobre algo ocorrido; 같아 é informal.')]),
l('넌 화가 나 보여','Você parece estar com raiva.',[e('넌','você','Contração de 너는: você + tópico.'),e('화가 나 보여','parece estar com raiva','화가 나다 = ficar com raiva.','-아/어 보이다 expressa aparência: 나 + 아 보여 → 나 보여.')]),
l('아른대는 game over over over','A mensagem de fim de jogo fica pairando diante dos olhos.',[e('아른대는','que fica aparecendo de modo difuso','아른대다 = tremular ou pairar na visão/lembrança.','-는 modifica a expressão inglesa seguinte; a imagem sugere uma derrota que não sai da cabeça.')]),
];
const verse1=[
l('만약 게임이라면','Se fosse um jogo,',[e('만약','se; caso','Introduz uma hipótese.'),e('게임이라면','se fosse um jogo','게임 = jogo; substantivo com consoante final + 이라면.','-(이)라면 introduz uma condição hipotética.')]),
l('또 load하면 되겠지만','bastaria carregar de novo, mas…',[e('또','de novo','Marca repetição.'),e('load하면','se carregar','O inglês load recebe 하다; -면 = se.'),e('되겠지만','provavelmente bastaria, mas','-으면 되다 = basta fazer; -겠- indica avaliação hipotética; -지만 estabelece contraste.')]),
en('I guess I gotta deal with this','Acho que preciso lidar com isso.'),en('Deal with this','Lidar com isso.'),en('Real world','Mundo real.'),
l('차라리 게임이면 좋겠지','Seria melhor se fosse um jogo.',[e('차라리','seria melhor; antes','Expressa preferência por uma alternativa à situação atual.'),e('게임이면','se fosse um jogo','게임 + 이면: condição com substantivo.'),e('좋겠지','seria bom, não é?','좋다 = ser bom; -겠- expressa desejo/hipótese; -지 compartilha uma avaliação.')]),
l('너무 아프니까','Porque dói demais.',[e('너무','demais','Intensifica a dor.'),e('아프니까','porque dói','아프다 = doer; -(으)니까 apresenta o motivo.')]),
en('I need to heal my medic','Preciso curar quem cuida de mim.'),en("But I'm another star",'Mas sou outra estrela.'),
l('완벽하지 못했던 나를 탓해','Culpo a mim mesmo por não ter conseguido ser perfeito.',[e('완벽하지 못했던','que não conseguiu ser perfeito','완벽하다 = ser perfeito; -지 못하다 = não conseguir.','-았/었던 retoma um estado passado e modifica 나.'),e('나를','a mim','나 = eu; -를 marca objeto.'),e('탓해','culpo','탓하다 = culpar; forma informal presente, com sujeito implícito.')]),
en('Brake in my head','Um freio na minha cabeça.'),en('Brake in my step always','Um freio nos meus passos, sempre.'),
l('그저 잘하고 싶었고','Eu só queria fazer bem,',[e('그저','só; simplesmente','Limita a intenção a algo simples.'),e('잘하고','fazer bem','잘 = bem; 하다 = fazer; -고 conecta-se a 싶다.'),e('싶었고','queria, e','-고 싶다 = querer fazer; -었- = passado; -고 liga à próxima ideia.')]),
l('웃게 해주고 싶었는데 damn','queria fazer você sorrir, mas… droga.',[e('웃게','sorrir','웃다 = sorrir/rir; -게 integra a construção causativa.'),e('해주고','fazer por alguém','-게 하다 = fazer alguém fazer; -아/어 주다 acrescenta benefício.'),e('싶었는데','queria, mas…','-고 싶었다 = queria; -는데 apresenta contexto e contraste com o resultado.')]),
];
const remedy=(first='Please give me a remedy',last=true):StudyLine[]=>[
en(first,first.startsWith('So')?'Então, me dê um remédio.':'Por favor, me dê um remédio.'),
l('멈춰버린 심장을 뛰게 할 remedy','Um remédio que fará meu coração parado voltar a bater.',[e('멈춰버린','que acabou parando','멈추다 = parar; -어 버리다 enfatiza a conclusão; -ㄴ modifica 심장.'),e('심장을','o coração','심장 = coração como órgão; -을 = objeto.'),e('뛰게 할','que fará bater','뛰다 = bater/pular; -게 하다 = fazer acontecer; -ㄹ modifica remedy com sentido prospectivo.')]),
l('이제 어떻게 해야 해','O que eu devo fazer agora?',[e('이제','agora','Marca a situação atual ou uma nova etapa.'),e('어떻게','como; de que maneira','Pergunta pela maneira de agir.'),e('해야 해','devo fazer','하다 + -아/어야 하다 = ter de fazer; informal.')]),
l('날 살려줘 다시 기회를 줘','Me salve; me dê outra chance.',[e('날','a mim','Contração de 나를.'),e('살려줘','me salve','살리다 = salvar/manter vivo; -어 줘 pede uma ação em favor de alguém.'),e('다시','outra vez','Advérbio de repetição.'),e('기회를','uma chance','기회 = oportunidade; -를 marca objeto.'),e('줘','dê','주다 → 줘: pedido informal.')]),
...(last?[en('Please give me a','Por favor, me dê um…')]:[])];
const post=[
en('A remedy a melody','Um remédio, uma melodia.'),
l('오직 내게만 남겨질 그 memory','Aquela lembrança que ficará somente para mim.',[e('오직','somente','Reforça a exclusividade.'),e('내게만','só para mim','내게 = 나에게; -만 = apenas.'),e('남겨질','que será deixada','남기다 = deixar; 남겨지다 = ser deixado; -ㄹ modifica memory.'),e('그','aquela','Demonstrativo que retoma algo conhecido.')]),
l('이쯤에서 그만하면','Se eu parar por aqui,',[e('이쯤에서','por aqui; neste ponto','이쯤 = aproximadamente este ponto; -에서 marca o ponto da ação.'),e('그만하면','se parar','그만하다 = parar; -면 = condição.')]),
l('꺼버리면 모든 게 다 편해질까','se desligar tudo, será que tudo ficará mais fácil?',[e('꺼버리면','se desligar de vez','끄다 → 꺼; -어 버리다 = concluir de vez; -면 = se.','O objeto é implícito; retoma a imagem do jogo.'),e('모든 게','tudo','모든 = todo; 게 contrai 것이, coisa + sujeito.'),e('다','tudo; inteiramente','Reforça a totalidade.'),e('편해질까','será que ficará mais tranquilo?','편하다 = ser confortável; -아/어지다 = tornar-se; -(으)ㄹ까 = pergunta/reflexão.')]),
];
const verse2=[
l('괜찮지만 괜찮지 않아','Estou bem, mas não estou bem.',[e('괜찮지만','estou bem, mas','괜찮다 = estar bem; -지만 = mas.'),e('괜찮지 않아','não estou bem','-지 않다 nega o predicado; 않아 é informal.')]),
l('익숙하다고 혼잣말했지만','Disse a mim mesmo que já estava acostumado, mas…',[e('익숙하다고','que estou acostumado','익숙하다 = ser familiar/estar acostumado; -다고 introduz discurso indireto.'),e('혼잣말했지만','falei sozinho, mas','혼잣말하다 = falar consigo mesmo; -했- = passado; -지만 = mas.')]),
l('늘 처음인 것처럼 아파','Sempre dói como se fosse a primeira vez.',[e('늘','sempre','Expressa continuidade ou repetição habitual.'),e('처음인 것처럼','como se fosse a primeira vez','처음 = primeira vez; -인 nominaliza a cópula para modificar 것; -처럼 = como.'),e('아파','dói','아프다 perde ㅡ e recebe 아: 아파.')]),
l('부족한 gamer','Um jogador que ainda tem falhas.',[e('부족한','insuficiente; que tem falhas','부족하다 = ser insuficiente; -ㄴ modifica gamer.')]),
l('맞아 날 control 못하지','É isso: não consigo me controlar.',[e('맞아','isso mesmo','맞다 = estar certo; forma informal.'),e('날','a mim','나를 contraído: objeto de controlar.'),e('못하지','não consigo fazer','못 + 하다 nega capacidade; -지 afirma algo reconhecido pelo falante.')]),
l("계속 아파 'cause",'Continua doendo, porque…',[e('계속','continuamente','Indica persistência.'),e('아파','dói','아프다 = doer; o sujeito não é explicitado.')]),
l('시행착오와 오만 가지','Tentativas e erros, e inúmeras coisas…',[e('시행착오와','tentativas e erros, e','시행착오 = tentativa e erro; -와 conecta nomes.'),e('오만 가지','inúmeras coisas','오만 = cinquenta mil, usado como exagero; 가지 conta tipos/variedades.')]),
l('내 노래 가사 몸짓 하나','Cada letra minha, cada gesto…',[e('내','meu','Forma possessiva de 나.'),e('노래 가사','letra de música','노래 = canção; 가사 = letra.'),e('몸짓 하나','um único gesto','몸짓 = gesto corporal; 하나 = um. A enumeração continua na próxima linha.')]),
l('말 한마디 다','cada palavra, tudo…',[e('말 한마디','uma palavra; uma fala','말 = fala; 한 = um; 마디 conta unidades de fala.'),e('다','tudo','Engloba os itens da enumeração.')]),
l('내 미시감에 무서워지고','Fico com medo diante do meu jamais vu,',[e('내','meu','Possessivo.'),e('미시감에','diante da sensação de estranheza do familiar','미시감 (未視感) = jamais vu; -에 indica aqui o motivo/contexto emocional.','É a sensação de algo conhecido parecer novo ou estranho.'),e('무서워지고','vou ficando com medo, e','무섭다 → 무서워; -어지다 = mudança de estado; -고 = e.')]),
l('또 늘 도망가려 해','e sempre tento fugir de novo.',[e('또','de novo','Repetição.'),e('늘','sempre','Hábito persistente.'),e('도망가려 해','tento fugir; estou prestes a fugir','도망가다 = fugir; -(으)려고 하다 → -(으)려 하다 expressa intenção/tentativa.')]),
l('But 잡네 그래도 네가','Mas, ainda assim, você me segura.',[e('잡네','segura; percebo que segura','잡다 = segurar; -네 expressa constatação. O objeto fica implícito.'),e('그래도','ainda assim','Conector concessivo.'),e('네가','você','너 + partícula de sujeito, forma escrita 네가. O sujeito aparece depois do verbo, por efeito poético.')]),
l('내 그림자는 커져가도','Mesmo que minha sombra continue crescendo,',[e('내','minha','Possessivo.'),e('그림자는','a sombra','그림자 = sombra; -는 = tópico.'),e('커져가도','mesmo que vá crescendo','크다 → 커지다 = crescer; -어 가다 = evolução progressiva; -아/어도 = concessão.')]),
l('내 삶과 넌 equal sign','Minha vida e você são um sinal de igualdade.',[e('내 삶과','minha vida e','삶 = vida; -과 conecta nomes.'),e('넌','você','너는 contraído; tópico. O sinal de igualdade funciona como metáfora da equivalência.')]),
l('So 내 remedy는 your remedy','Então, meu remédio é o seu remédio.',[e('내','meu','Possessivo.'),e('remedy는','o remédio, como tópico','A partícula coreana -는 é ligada à palavra inglesa remedy. A cópula final fica implícita.')]),
];
const bridge=[en('Remedy','Remédio.'),
l('또 다시 뛰고 또 넘어지고','Corro de novo e volto a cair,',[e('또 다시','de novo, mais uma vez','Dois advérbios reforçam a repetição.'),e('뛰고','corro, e','뛰다 = correr/pular; -고 conecta ações.'),e('또','de novo','Repetição.'),e('넘어지고','caio, e','넘어지다 = cair/tropeçar; -고 = e.')]),
en('Honestly','Sinceramente.'),
l('수없이 반복된대도','Mesmo que se repita incontáveis vezes,',[e('수없이','incontáveis vezes','수없다 = ser incontável; -이 forma advérbio.'),e('반복된대도','mesmo que se repita','반복되다 = repetir-se; -ㄴ대도 contrai -ㄴ다고 해도: mesmo supondo/admitindo que.')]),
l('난 또 뛸 거라고','Eu digo que vou correr de novo.',[e('난','eu','나는 contraído.'),e('또','de novo','Marca a retomada.'),e('뛸 거라고','que vou correr','뛰다 + -(으)ㄹ 것이다 = intenção/futuro; -라고 retoma uma declaração, com verbo de dizer implícito.')])];
const ending=[
en('Please give me a remedy','Por favor, me dê um remédio.'),
l('성공인가 돌아왔어','Será que deu certo? Voltei.',[e('성공인가','será um sucesso?','성공 = sucesso; -인가 pergunta com cópula.'),e('돌아왔어','voltei','돌아오다 = voltar em direção ao ponto de referência; -았어 = passado informal.')]),
remedy()[1],
l('집중해서 꼭 네게 닿고 말겠어','Vou me concentrar e chegar até você, custe o que custar.',[e('집중해서','concentrando-me','집중하다 = concentrar-se; -아서/어서 liga meio e ação.'),e('꼭','com certeza; sem falta','Reforça determinação.'),e('네게','até você; a você','Forma reduzida de 너에게.'),e('닿고 말겠어','vou acabar alcançando','닿다 = alcançar/tocar; -고 말다 = acabar fazendo; -겠- manifesta determinação.')]),
l('떨어지고 넘어지고','Caindo e tropeçando…',[e('떨어지고','caindo, e','떨어지다 = cair; -고 = e.'),e('넘어지고','tropeçando, e','넘어지다 = cair/tombar; -고 encadeia ações.')]),
remedy()[2],
l('익숙한 아픔이 똑같이 날 덮쳐','A dor familiar me atinge do mesmo jeito.',[e('익숙한','familiar','익숙하다 + -ㄴ modifica 아픔.'),e('아픔이','a dor','아프다 → 아픔: nominalização; -이 = sujeito.'),e('똑같이','exatamente do mesmo jeito','똑같다 = ser idêntico; -이 forma advérbio.'),e('날','a mim','나를 contraído.'),e('덮쳐','me atinge; me assola','덮치다 = atacar de repente/cair sobre; forma informal.')]),
l('날 살려줘','Me salve.',[e('날','a mim','나를 contraído.'),e('살려줘','me salve','살리다 + -어 주다: pedido em benefício do falante.')]),
l('이번에도 쉽지 않아','Desta vez também não é fácil.',[e('이번에도','desta vez também','이번 = esta vez; -에 = ocasião; -도 = também.'),e('쉽지 않아','não é fácil','쉽다 = ser fácil; -지 않다 = negação.')]),
l('다시 기회를 줘','Me dê outra chance.',[e('다시','outra vez','Repetição.'),e('기회를','uma oportunidade','기회 + -를: objeto.'),e('줘','dê','주다 → 줘: pedido informal.')]),
l('관둘 거냐고 no no never','Você pergunta se vou desistir? Não, nunca.',[e('관둘 거냐고','se vou desistir, você pergunta?','관두다 contrai 그만두다: parar/desistir.','-(으)ㄹ 거냐고 retoma uma pergunta sobre intenção/futuro; o verbo de perguntar é implícito.')]),
en("I won't give up",'Não vou desistir.')];
export const jamaisVuSections:{title:string;lines:StudyLine[]}[]=[{title:'Abertura',lines:intro},{title:'Verso 1',lines:verse1},{title:'Refrão',lines:remedy()},{title:'Pós-refrão',lines:post},{title:'Verso 2',lines:verse2},{title:'Refrão',lines:remedy()},{title:'Ponte',lines:bridge},{title:'Refrão',lines:remedy('So give me a remedy',false)},{title:'Final',lines:ending}];
export const jamaisVuVocabulary={verbs:[{ko:'지다',pt:'perder'},{ko:'아프다',pt:'doer'},{ko:'탓하다',pt:'culpar'},{ko:'웃다',pt:'sorrir; rir'},{ko:'멈추다',pt:'parar'},{ko:'뛰다',pt:'correr; pular; bater (coração)'},{ko:'살리다',pt:'salvar; manter vivo'},{ko:'남기다',pt:'deixar'},{ko:'끄다',pt:'desligar'},{ko:'도망가다',pt:'fugir'},{ko:'잡다',pt:'segurar'},{ko:'넘어지다',pt:'cair; tropeçar'},{ko:'닿다',pt:'alcançar; tocar'},{ko:'관두다',pt:'desistir; parar'}],nouns:[{ko:'게임',pt:'jogo'},{ko:'심장',pt:'coração (órgão)'},{ko:'기회',pt:'oportunidade; chance'},{ko:'혼잣말',pt:'fala consigo mesmo'},{ko:'시행착오',pt:'tentativa e erro'},{ko:'가사',pt:'letra de música'},{ko:'몸짓',pt:'gesto corporal'},{ko:'말',pt:'palavra; fala'},{ko:'미시감',pt:'jamais vu; estranheza diante do familiar'},{ko:'그림자',pt:'sombra'},{ko:'삶',pt:'vida'},{ko:'성공',pt:'sucesso'},{ko:'아픔',pt:'dor'}]};
