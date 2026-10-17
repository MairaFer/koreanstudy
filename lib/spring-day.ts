// Spring Day — estudo com análise palavra a palavra.
// Cada linha em coreano recebe entradas termo a termo: tradução, gramática e cards de curiosidade.
// Linhas em inglês recebem apenas a tradução, sem explicação de gramática.
export type StudyEntry={term:string;meaning:string;notes?:string[];card?:string;cardSource?:string};
export type StudyLine={text:string;translation:string;entries?:StudyEntry[];grammar?:string;english?:boolean};
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

const chorus=[
line('눈꽃이 떨어져요','Flocos de neve caem.',[
 e('눈꽃이','os flocos de neve (sujeito)',['눈꽃 = flor de neve: 눈 (neve) + 꽃 (flor) — a imagem de um floco ou cristal de neve','이 = partícula de sujeito, usada porque o nome termina em vogal']),
 e('떨어져요','caem (presente educado)',['떨어지다 = cair','떨어지 + 어요 → 떨어져요: presente educado -아/어요'])]),
line('또 조금씩 멀어져요','E, pouco a pouco, nos afastamos.',[
 e('또','de novo, novamente; também'),
 e('조금씩','pouco a pouco',['조금 = um pouco','씩 = cada vez, em partes: 조금씩 = aos poucos, devagar']),
 e('멀어져요','nos afastamos / vai ficando distante',['멀다 = ser distante, estar longe','-어지다 = indica mudança de estado: 멀다 + -어지다 → 멀어지다 (afastar-se)','어요 = presente educado','O sujeito fica implícito: a distância entre as pessoas é que cresce'])]),
line('보고 싶다 (보고 싶다)','Sinto sua falta (sinto sua falta).',[
 e('보고 싶다','quero ver · sinto sua falta',['보다 = ver','-고 싶다 = querer fazer alguma coisa: radical do verbo + -고 싶다','다 é uma terminação simples e lírica; a forma educada é 보고 싶어요'],'보고 싶다 geralmente significa “estou com saudade”, porque em coreano é muito comum expressar saudade de uma pessoa através da ideia de querer vê-la.'),
 e('(보고 싶다)','a repetição intensifica a saudade',['O sujeito e a pessoa ausente ficam implícitos','Os parênteses preservam a repetição vocal da letra'])]),
line('보고 싶다 (보고 싶다)','Sinto sua falta (sinto sua falta).',[
 e('보고 싶다','quero ver · sinto sua falta',['보다 = ver','-고 싶다 = querer fazer alguma coisa: radical do verbo + -고 싶다','Ao falar de alguém ausente, a tradução natural é sentir saudade'],'보고 싶다 geralmente significa “estou com saudade”, porque em coreano é muito comum expressar saudade de uma pessoa através da ideia de querer vê-la.'),
 e('(보고 싶다)','a repetição mantém a ideia em suspensão',['A segunda repetição fecha o par sem resposta','Em uma conversa, a forma educada seria 보고 싶어요'])]),
line('얼마나 기다려야?','Quanto tempo preciso esperar?',[
 e('얼마나','quanto, quanta (pergunta pela medida)'),
 e('기다려야','preciso esperar / quanta espera',['기다리다 = esperar','-어야 / -아야 = necessidade: “é preciso, é necessário”','기다리 + 어야 → 기다려야','A continuação com 하다 fica omitida: 기다려야 해? (preciso mesmo esperar?) — a frase fica suspensa'])]),
line('또 몇 밤을 더 새워야?','Por quantas noites mais preciso ficar acordado?',[
 e('또','de novo, mais uma vez'),
 e('몇','quantos; junto de um período, alguns'),
 e('밤을','as noites (objeto)',['밤 = noite','을 = partícula de objeto: aquilo sobre o que recai a ação']),
 e('더','mais, ainda'),
 e('새워야','preciso passar a noite sem dormir',['새우다 = passar a noite acordado','-어야 = necessidade, igual a 기다려야','Mais uma vez a frase termina aberta, como uma pergunta sem resposta'])]),
line('널 보게 될까? (널 보게 될까?)','Será que vou conseguir te ver? (Será que vou te ver?)',[
 e('널','você (objeto)',['너를 se contrai em 널: 너 (você, informal) + 를 (partícula de objeto)']),
 e('보게 될까','será que vou chegar a ver?',['보다 = ver','-게 되다 = chegar a, vir a: chegar à situação de ver alguém','-(으)ㄹ까? = dúvida dirigida a si mesmo, sem afirmar que o encontro vai acontecer'])]),
line('만나게 될까? (만나게 될까?)','Será que vamos nos encontrar? (Será que vamos nos encontrar?)',[
 e('만나다','encontrar-se, ver alguém'),
 e('게 되다','chegar a, vir a (mudança de circunstância)',['A terminação destaca o resultado ou as circunstâncias que levam ao encontro','-게 se liga ao radical: 만나 + 게']),
 e('될까','será que será? (dúvida)',['되다 = tornar-se; 되 + ㄹ까 → 될까','A pergunta é para quem fala, sobre uma possibilidade'])])];

const refrain=[
line('추운 겨울 끝을 지나','Passando pelo fim do inverno frio,',[
 e('추운','frio (modifica 겨울)',['춥다 = ser frio: verbo descritivo irregular em ㅂ','Antes de -(으)ㄴ a consoante ㅂ vira 우: 춥 + 은 → 추운']),
 e('겨울','inverno'),
 e('끝을','pelo fim, através do fim',['끝 = fim','을 = partícula de objeto: aquilo por que se passa']),
 e('지나','passando por, atravessando',['지나다 = passar, atravessar','A forma ligada -어 conecta a ação à continuação da frase'])]),
line('다시 봄날이 올 때까지','até o dia de primavera voltar,',[
 e('다시','de novo, outra vez'),
 e('봄날이','o dia de primavera (sujeito)',['봄날 = dia de primavera: 봄 (primavera) + 날 (dia)','이 = partícula de sujeito']),
 e('올 때까지','até que volte / até o momento em que vier',['오다 → 올 = futuro -(으)ㄹ de 오다 (vir)','때 = momento, hora','까지 = até: estabelece o limite do tempo'])]),
line('꽃 피울 때까지','até fazer as flores desabrocharem,',[
 e('꽃','flor (objeto implícito, sem 을)',['A omissão da partícula de objeto 을 é comum na fala e na poesia']),
 e('피울','fazer florescer / fazer brotar',['피우다 = fazer florescer (causativo de 피다, florescer)','-(으)ㄹ liga o verbo a 때까지: até o momento de fazer florescer']),
 e('때까지','até o momento em que',['때 = momento','까지 = até'])]),
line('그곳에 좀 더 머물러줘, 머물러줘','Fique aí mais um pouco, fique.',[
 e('그곳에','naquele lugar',['그곳 = aquele lugar (그 + 곳)','에 = partícula de lugar: onde se permanece']),
 e('좀 더','um pouco mais',['좀 = forma curta de 조금 (um pouco)','더 = mais']),
 e('머물러줘','fique aí para mim / fique mais um pouco',['머무르다 = permanecer; o ㄹ final troca de lugar: 머무르 + 어 → 머물러','-어 주다 = fazer algo em favor de quem fala; 머물러줘 é um pedido informal','A repetição 머물러줘, 머물러줘 reforça o pedido'])])];

export const springDaySections:{title:string;lines:StudyLine[]}[]=[
{title:"",lines:[
 line('보고 싶다, 이렇게 말하니까 더 보고 싶다','Sinto sua falta; dizer isso me faz sentir ainda mais saudade.',[
  e('보고 싶다','quero ver · sinto sua falta',['보다 = ver','-고 싶다 = querer fazer alguma coisa: radical do verbo + -고 싶다'],'보고 싶다 geralmente significa “estou com saudade”, porque em coreano é muito comum expressar saudade de uma pessoa através da ideia de querer vê-la.'),
  e('이렇게','assim | desse jeito | desta maneira',['이렇다 = ser assim','-게 forma o advérbio: 이렇게 = desse jeito']),
  e('말하니까','porque eu disse isso / ao dizer isso',['말하다 = falar / dizer','-(으)니까 = porque… / já que…','partícula que pode estabelecer uma relação de causa, razão ou circunstância que leva ao resultado da frase']),
  e('더','ainda mais, mais do que antes',['더 se liga ao desejo já declarado: “dizer isso faz eu sentir ainda mais falta”'])]),
 line('너희 사진을 보고 있어도 보고 싶다','Mesmo olhando as fotos de vocês, sinto sua falta.',[
  e('너희','vocês (registro informal)'),
  e('사진을','as fotos (objeto)',['사진 = foto','을 = partícula de objeto','O coreano não obriga a marcar o plural: 사진 pode ser “foto” ou “fotos”']),
  e('보고 있어도','mesmo olhando / mesmo estando olhando',['보 + 고 있다 = estar olhando: ação em andamento','-어도 = mesmo assim, ainda que: concessão']),
  e('보고 싶다','sinto sua falta',['보다 = ver','-고 싶다 = querer fazer; de uma pessoa ausente, o sentido natural é saudade'])]),
 line('너무 야속한 시간 나는 우리가 밉다','O tempo é tão cruel; sinto raiva de nós.',[
  e('너무','tão, excessivamente (intensifica o que vem depois)'),
  e('야속한','cruel, insensível, que decepciona (modifica 시간)',['야속하다 = ser insensível ou cruel com alguém','-(으)ㄴ é o modificador que descreve o substantivo seguinte']),
  e('시간','o tempo'),
  e('나는','eu, quem sente (tópico)',['나 = eu (informal)','는 = partícula de tópico: marca quem sente']),
  e('우리가','nós, o alvo do sentimento (sujeito)',['우리 = nós','가 = partícula de sujeito']),
  e('밉다','sinto raiva de · desperta desgosto em mim',['Verbo descritivo com irregularidade em ㅂ: antes de -아/어요 a base vira 우: 밉 + 어요 → 미워요','A ordem 밉다 + 우리가 coloca o sentimento antes de nomear seu alvo'])]),
 line('이젠 얼굴 한 번 보는 것 조차 힘들어진 우리가','De nós, para quem até ver o rosto um do outro uma vez ficou difícil.',[
  e('이젠','agora',['이제 = agora','은/는 marca o tópico e se contrai: 이제 + 는 → 이젠']),
  e('얼굴 한 번','o rosto uma única vez',['얼굴 = rosto','한 번 = uma vez (한 um + 번 vez)']),
  e('보는 것','ver (transformado em substantivo)',['보다 + -는 것 = “o ato de ver” (nominalização)',' 것 ocupa o lugar de um substantivo na frase']),
  e('조차','até mesmo (inclui o mais inesperado)',['Normalmente se escreve junto do substantivo: 것조차']),
  e('힘들어진','que ficou difícil / que se tornou difícil',['힘들다 = ser difícil, difícil de aguentar','-어지다 = tornar-se: mudança de estado → 힘들어지다','-(으)ㄴ modifica 우리가: 힘들어진 우리가']),
  e('우리가','nós (sujeito)',['A frase fica suspensa e retoma o “nós” da linha anterior'])])]},
{title:"",lines:[
 line('여긴 온통 겨울 뿐이야 8월에도 겨울이 와','Aqui só há inverno; até em agosto o inverno chega.',[
  e('여긴','aqui (aqui como tópico)',['여기 = aqui','는 marca o tópico e se contrai: 여기 + 는 → 여긴']),
  e('온통','inteiramente, totalmente, só'),
  e('겨울 뿐이야','é só inverno',['겨울 = inverno','뿐 = somente, apenas; normalmente fica junto do substantivo: 겨울뿐','(이)야 = forma informal de 이다 (é): 겨울뿐이야 = “é só inverno”']),
  e('8월에도','até em agosto',['8월 = 팔월 (월 = mês): agosto','에 marca o tempo','도 = também, até: inclui agosto na afirmação']),
  e('겨울이 와','o inverno chega',['겨울 + 이 = partícula de sujeito','오다 → 와 = presente informal de 오다 (vir)'])]),
 line('마음은 시간을 달려가네 홀로 남은 설국열차','Meu coração corre pelo tempo: um Expresso do Amanhã que ficou sozinho.',[
  e('마음은','meu coração / minha mente (tópico)',['마음 = coração, mente, sentimento','는 = partícula de tópico']),
  e('시간을','pelo tempo (objeto figurado)',['시간 = tempo','을 = partícula de objeto: aqui é o “percurso” da corrida']),
  e('달려가네','corre adiante, está correndo',['달리다 → 달려 (forma ligada) + 가다 (ir): correr indo adiante','-네 dá tom de constatação ou expressividade, como quem percebe algo de repente']),
  e('홀로','sozinho, na solidão'),
  e('남은','que ficou, que restou',['남다 = restar, permanecer','-(으)ㄴ modifica 설국열차: 남은 설국열차']),
  e('설국열차','“Trem do País da Neve” — título coreano de Snowpiercer',['Usado aqui como imagem poética: um trem que segue sozinho pelo inverno'])]),
 line('니 손 잡고 지구 반대편까지 가 이 겨울을 끝내고파','Quero pegar sua mão, ir até o outro lado da Terra e acabar com este inverno.',[
  e('니','seu / tua (forma coloquial de 네)'),
  e('손','mão (objeto implícito, sem 을)'),
  e('잡고','segurando e...',['잡다 = segurar, pegar','-고 conecta uma ação à seguinte']),
  e('지구 반대편까지','até o outro lado da Terra',['지구 = Terra, planeta','반대편 = lado oposto (반대 oposto + 편 lado)','까지 = até o limite']),
  e('가','ir (forma ligada de 가다)',['A forma ligada encadeia a ação seguinte: “ir até lá e...”']),
  e('이 겨울을','este inverno (objeto)',['이 = este','겨울 = inverno','을 = partícula de objeto']),
  e('끝내고파','quero pôr fim a isso',['끝내다 = pôr fim, terminar','-고 싶다 = querer fazer','끝내고 싶어 se contrai em 끝내고파 na fala poética e informal'])]),
 line('그리움들이 얼마나 눈처럼 내려야 그 봄날이 올까, friend?','Quanta saudade terá de cair como neve para aquele dia de primavera chegar, amigo?',[
  e('그리움들이','quantas saudades / as saudades (plural)',['그리움 = saudade, derivada de 그립다 (ter saudade)','들 pluraliza de forma poética','이 = partícula de sujeito']),
  e('얼마나','quanto, quanta'),
  e('눈처럼','como neve',['눈 = neve','처럼 = como, assim como (comparação)']),
  e('내려야','precisa cair / quanta espera que caia',['내리다 = descer, cair','-어야 = condição necessária: “é preciso que...”']),
  e('그 봄날이','aquele dia de primavera (sujeito)',['그 = aquele','봄날 = dia de primavera','이 = partícula de sujeito']),
  e('올까','será que vai chegar?',['오다 → 올 = futuro -(으)ㄹ de 오다','-(으)ㄹ까 = dúvida dirigida a si mesmo']),
  e('friend','a palavra inglesa para amigo, mantida na letra')])]},
{title:"",lines:[
 line('허공을 떠도는 작은먼지처럼, 작은 먼지처럼','Como uma pequena poeira vagando no ar, como uma pequena poeira,',[
  e('허공을','pelo espaço vazio, no ar',['허공 = espaço vazio, o ar','을 = partícula de objeto: aquilo por onde se vaga']),
  e('떠도는','que vagueia, vagueando',['떠돌다 = vagar, andar sem destino','O ㄹ da base cai antes de -는: 떠돌 + 는 → 떠도는','-는 modifica o substantivo seguinte (먼지)']),
  e('작은','pequeno, pequena (modifica 먼지)',['작다 = ser pequeno','-ㄴ é o modificador de substantivo: 작 + ㄴ → 작은']),
  e('먼지처럼','como poeira',['먼지 = poeira','처럼 = como (comparação)','A grafia usual é 작은 먼지, com espaço; a linha repete a imagem para criar ritmo'])]),
 line('날리는 눈이 나라면','se eu fosse essa neve que flutua ao vento,',[
  e('날리는','que voa ao vento, que se espalha no ar',['날리다 = fazer voar, espalhar-se pelo ar','-ㄴ modifica o substantivo seguinte: 날리는 눈 = a neve que se dispersa']),
  e('눈이','a neve (sujeito)',['눈 = neve (também pode significar olho, conforme o contexto)','이 = partícula de sujeito']),
  e('나라면','se eu fosse / se fosse eu',['나 = eu (informal)','(이)ㄹ Forma hipotética: “se fosse” — aqui imagina uma identidade, não uma condição real'])]),
 line('조금 더 빨리 네게 닿을 수 있을 텐데?','eu poderia chegar até você um pouco mais depressa…',[
  e('조금 더 빨리','um pouco mais depressa',['조금 = um pouco','더 = mais','빨리 = depressa, rápido (de 빠르다)']),
  e('네게','para você, até você',['너 = você (informal)','에게 = partícula que indica direção: “a, para”; se contrai em 게']),
  e('닿을 수 있을 텐데','poderia alcançar, eu chegaria…',['닿다 = alcançar, tocar','-(으)ㄹ 수 있다 = poder, ser capaz de (possibilidade)','-(으)ㄹ 텐데 = expectativa hipotética com continuação implícita: expressa desejo e pesar'])])]},
{title:"Refrão",lines:chorus},
{title:"",lines:refrain},
{title:"",lines:[
 line('네가 변한 건지? (네가 변한 건지?)','Será que foi você que mudou? (Será que foi você que mudou?)',[
  e('네가','você, quem mudou (sujeito)',['너 = você (informal)','가 = partícula de sujeito']),
  e('변한','que mudou / mudou?',['변하다 = mudar','-(으)ㄴ liga a ação ao substantivo seguinte (건지): “a mudança de você”']),
  e('건지','será que foi...? (dúvida)',['De 것인지: 것 (aquilo) + 이 + 지 (dúvida)','A oração principal fica omitida, como quem pergunta para si mesmo'])]),
 line('아니면 내가 변한 건지? (아니면 내가 변한 건지?)','Ou foi eu que mudei? (Ou foi eu que mudei?)',[
  e('아니면','ou, senão (abre uma alternativa)'),
  e('내가','eu, quem mudou (sujeito)',['나 = eu (informal)','가 = partícula de sujeito; quando é tópico, vira 나는 ou 난']),
  e('건지','será que fui eu? (mesma dúvida aberta)',['Mesma estrutura de 것인지 da linha anterior: 것 + 이 + 지','A repetição forma um par: você ou eu?'])]),
 line('이 순간 흐르는 시간조차 미워','Até o tempo que flui neste momento me faz raiva.',[
  e('이 순간','neste instante',['이 = este','순간 = instante']),
  e('흐르는','que flui, escorrendo',['흐르다 = fluir, escorrer','-는 modifica o substantivo seguinte (시간)']),
  e('시간조차','até o tempo',['시간 = tempo','조차 = até mesmo (normalmente junto: 시간조차)','조차 inclui o que seria de se poupar: nem o tempo escapa do desgosto']),
  e('미워','me faz raiva / tenho raiva (fala informal)',['De 밉다, com irregularidade em ㅂ: 밉 + 어 → 미워','Forma educada: 미워요'])]),
 line('우리가 변한 거지 뭐? 모두가 그런 거지, 뭐?','Nós mudamos, e daí? Todos mudam, e daí?',[
  e('우리가','nós (sujeito)',['우리 = nós','가 = partícula de sujeito']),
  e('변한 거지','mudamos, não é? / fomos nós que mudamos',['변하다 + -ㄴ 것 = aquilo de que mudamos','거 = forma coloquial de 것','-지 dá tom de conclusão ou confirmação: “não é mesmo?”']),
  e('뭐','e daí? / fazer o quê?',['No fim da frase, expressa resignação ou autoacalento: “fazer o quê, mudamos mesmo”']),
  e('모두가','todos, todo mundo (sujeito)',['모두 = todos','가 = partícula de sujeito']),
  e('그런','essa, essa mesma (situação)',['그렇다 + -ㄴ → 그런: “aquela coisa de mudar”'])])]},
{title:"",lines:[
 line('그래, 밉다 니가 넌 떠났지만','Sim, sinto raiva de você; você foi embora, mas...',[
  e('그래','sim, é; admitindo',['Expressa concordância ou resignação antes de uma verdade difícil']),
  e('밉다','sinto raiva de você',['Verbo descritivo com irregularidade em ㅂ (밉 → 미워)','A ordem inverte o normal: em vez de “eu te odeio”, a letra diz “raiva, você é que...”']),
  e('니가','você (sujeito)',['니 = forma coloquial de 너 (você)','가 = partícula de sujeito']),
  e('떠났지만','embora tenha partido',['떠나다 = partir, deixar um lugar','-았/었 = passado','-지만 = embora, mas: concessão'])]),
 line('단 하루도 너를 잊은 적이 없었지 난','Nem por um único dia eu esqueci de você.',[
  e('단','nem, apenas (reforça a negação)'),
  e('하루도','um único dia (nem mesmo)',['하루 = um dia','도 = também, até: “nem um dia” junto da negação']),
  e('너를','você (objeto)',['너 = você (informal)','를 = partícula de objeto']),
  e('잊은 적이 없었지','nunca esqueci (experiência negada no passado)',['잊다 = esquecer','-(으)ㄴ 적 = a experiência de...','-이 없다 = não haver, não ter','-었 = passado','-지 = confirmação: “não é mesmo?”','O conjunto 잊은 적이 없었다 é a forma coreana de “nunca”']),
  e('난','eu (ênfase no final)',['나 + 는 → 난: pronome informal com partícula de tópico'])]),
 line('솔직히 보고 싶은데 이만 너를 지울게','Sinceramente, sinto sua falta; por enquanto vou te apagar.',[
  e('솔직히','sinceramente, para ser sincero'),
  e('보고 싶은데','mas sinto sua falta',['보고 싶다 = querer ver, sentir saudade','-은데 = parte aberta que pede continuação: “eu sinto, mas...”','O contraste com a segunda metade da frase fica implícito']),
  e('이만','até aqui, por enquanto (chega assim)',['De 이만큼: “esta medida” — o suficiente por ora']),
  e('너를','você (objeto)'),
  e('지울게','vou apagar (promessa para você)',['지우다 = apagar','-(으)ㄹ게 = intenção voltada ao ouvinte: “vou fazer isso por você”'])]),
 line('그게 널 원망하기보단 덜 아프니까','Porque isso dói menos do que te culpar.',[
  e('그게','isso, essa situação',['그것 + 이 → 그게: aquilo + partícula de sujeito']),
  e('널','você (objeto: 너를)',['너 = você (informal)','를 = partícula de objeto; em fala rápida, 너를 → 널']),
  e('원망하기보단','do que culpar-te / ressentir-me de você',['원망하다 = ressentir-se, culpar','-기 = nominaliza o verbo: 원망하기 = “o ato de culpar”','-보다는 = do que (comparação) e se contrai em 보단']),
  e('덜','menos'),
  e('아프니까','porque dói (a razão da frase)',['아프다 = doer, estar dolorido; verbo descritivo','-니까 = porque… / já que…: estabelece a causa'])]),
 line('시린 널 불어내 본다','Eu tento soprar para fora a lembrança de você.',[
  e('시린','frio e doloroso, gelado pela saudade',['시리다 = estar gelado ou dolorido pelo frio (verbo descritivo)','-ㄴ é o modificador: 시린 널 = “você” que arrefece o peito']),
  e('널','você (objeto: 너를)'),
  e('불어내 본다','tento soprar para fora',['불다 = soprar','-아/내다 = fazer sair para fora: 불어내다 (soprar para fora)','-어 보다 = tentar fazer algo: 불어내 보다 → 불어내 본다'])]),
 line('연기처럼, 하얀 연기처럼','Como fumaça, como fumaça branca.',[
  e('연기','fumaça',['Neste contexto 연기 é fumaça; o mesmo som também significa “atuação” — o contexto decide']),
  e('처럼','como, assim como (comparação)'),
  e('하얀','branca (modifica 연기)',['하얗다 = ser branco; irregular em ㅎ: 하얗 + ㄴ → 하얀'])]),
 line('말로는 지운다 해도','Mesmo que eu diga que apago com palavras,',[
  e('말로는','pelas palavras (com contraste)',['말 = palavra, fala','로 = por meio de, com','-는 marca contraste: “pelas palavras, sim, mas...”']),
  e('지운다 해도','mesmo diga que apago',['지우다 = apagar','-(으)ㄴ다고 해도 = mesmo dizendo que... (concessão)'])]),
 line('사실 난 아직 널 보내지 못하는데','Na verdade, eu ainda não consigo te deixar ir.',[
  e('사실','na verdade, na realidade'),
  e('난','eu (tópico: 나 + 는 → 난)'),
  e('아직','ainda, ainda não'),
  e('널','você (objeto: 너를)'),
  e('보내지 못하는데','não consigo deixar ir (frase aberta)',['보내다 = enviar; deixar partir','-지 못하다 = não conseguir fazer','-데 = abre um fundo ou contraste; a frase fica sem fecho, esperando a compreensão do outro'])])]},
{title:"Refrão",lines:chorus},
{title:"",lines:[
 en("You know it all, you're my best friend","Você sabe de tudo; você é meu melhor amigo."),
 line('아침은 다시 올 거야','A manhã vai voltar, pode contar.',[
  e('아침은','a manhã (tópico)',['아침 = manhã','는 = partícula de tópico']),
  e('다시','de novo, outra vez'),
  e('올 거야','vai chegar (fala informal)',['오다 → 올 = futuro -(으)ㄹ','-거야 = forma informal de 것이다: previsão ou expectativa'])]),
 line('어떤 어둠도, 어떤 계절도','Nenhuma escuridão, nenhuma estação...',[
  e('어떤','qualquer / qual, que tipo de'),
  e('어둠도','escuridão também / até escuridão',['어둠 = escuridão','도 = também, até','Acompanhado da negação, 어떤 …도 vira “nenhuma”']),
  e('계절도','estação (do ano) também',['계절 = estação do ano','도 = também, até'])]),
 line('영원할 순 없으니까','Porque nada é para sempre.',[
  e('영원할','ser eterno, durar para sempre',['영원하다 = ser eterno','-(으)ㄹ = forma em futuro ou suposição antes da negação']),
  e('순','(não) pode / (não) é possível',['De 수는, abreviada na fala rápida: 영원할 수는 없다 = “não pode ser eterno”']),
  e('없으니까','porque não existe, porque não há',['없다 = não existir, não haver','-니까 = porque… / já que… (razão)'])])]},
{title:"",lines:[
 line('벚꽃이 피나봐요','Parece que as cerejeiras estão florescendo.',[
  e('벚꽃이','as flores de cerejeira (sujeito)',['벚꽃 = flor de cerejeira (벚 cerejeira + 꽃 flor)','이 = partícula de sujeito']),
  e('피나봐요','parece que florescem (dedução)',['피다 = florescer','-나 봐요 = “parece que...”: dedução baseada em algo visto ou ouvido','A forma é educada, mesmo sendo uma constatação'])]),
 line('이 겨울도 끝이 나요','Este inverno também chega ao fim.',[
  e('이 겨울도','este inverno também',['이 = este','겨울 = inverno','도 = também, até']),
  e('끝이 나요','chega ao fim / termina (registro educado)',['끝이 나다 = literalmente “surgir um fim”','-아/어요 = presente educado: 나요'])]),
 ...chorus.slice(2,4)]},
{title:"",lines:[
 line('조금만 기다리면 (기다리면)','Se esperar só um pouco (se esperar),',[
  e('조금만','só um pouco, apenas um pouco',['조금 = um pouco','만 = apenas, somente']),
  e('기다리면','se esperar / quando esperar',['기다리다 = esperar','-(으)면 = se, quando: condição']),
  e('(기다리면)','a repetição alonga a condição e pede paciência',['Repetir a condição dá tempo à frase, como quem segura o passo'])]),
 line('며칠 밤만 더 새우면','Se eu passar mais algumas noites acordado,',[
  e('며칠','alguns dias / quantos dias'),
  e('밤만','só as noites, apenas noites',['밤 = noite','만 = apenas']),
  e('더','mais'),
  e('새우면','se passar a noite sem dormir',['새우다 = passar a noite acordado','-(으)면 = se: condição'])]),
 line('만나러 갈게 (만나러 갈게)','Eu vou te encontrar (eu vou te encontrar).',[
  e('만나러','para encontrar (finalidade)',['만나다 = encontrar','-(으)러 = finalidade: “para fazer”']),
  e('갈게','eu vou (promessa para você)',['가다 = ir','-(으)ㄹ게 = promessa ou intenção voltada a quem escuta'])]),
 line('데리러 갈게 (데리러 갈게, yeah, yeah)','Eu vou te buscar (eu vou te buscar, yeah, yeah).',[
  e('데리러','para buscar alguém',['데리다 = levar, buscar alguém','-(으)러 = finalidade: “para fazer”']),
  e('갈게','eu vou te buscar (promessa para você)',['가다 = ir','-(으)ㄹ게 = promessa ou intenção voltada a quem escuta']),
  e('yeah, yeah','interjeição inglesa “sim, sim”, mantida para o ritmo')])]},
{title:"",lines:refrain},
];

export const springDayVocabulary={
verbs:[
{ko:'보다',pt:'ver; 보고 싶다: querer ver, sentir saudade'},
{ko:'기다리다',pt:'esperar'}, {ko:'만나다',pt:'encontrar alguém'},
{ko:'머무르다',pt:'permanecer, ficar'}, {ko:'떠나다',pt:'partir, deixar um lugar'},
{ko:'잊다',pt:'esquecer'}, {ko:'지우다',pt:'apagar'}, {ko:'보내다',pt:'enviar; deixar partir'},
{ko:'변하다',pt:'mudar'}, {ko:'흐르다',pt:'fluir, passar'}, {ko:'새우다',pt:'passar a noite sem dormir'},
{ko:'떨어지다',pt:'cair'}, {ko:'멀어지다',pt:'afastar-se, ficar distante'}, {ko:'닿다',pt:'alcançar, tocar'},
{ko:'피다',pt:'florescer'}, {ko:'피우다',pt:'fazer florescer'}, {ko:'끝내다',pt:'pôr fim, terminar'},
{ko:'원망하다',pt:'ressentir-se de alguém, culpar'}, {ko:'밉다',pt:'despertar aversão; verbo descritivo'},
{ko:'춥다',pt:'ser frio; verbo descritivo'}, {ko:'아프다',pt:'doer, estar dolorido; verbo descritivo'},
{ko:'시리다',pt:'estar gelado ou dolorido pelo frio; verbo descritivo'}],
nouns:[
{ko:'봄날',pt:'dia de primavera'}, {ko:'겨울',pt:'inverno'}, {ko:'시간',pt:'tempo'},
{ko:'그리움',pt:'saudade'}, {ko:'마음',pt:'coração, mente, sentimento'}, {ko:'사진',pt:'foto'},
{ko:'얼굴',pt:'rosto'}, {ko:'손',pt:'mão'}, {ko:'지구',pt:'Terra, planeta'}, {ko:'반대편',pt:'lado oposto'},
{ko:'눈',pt:'neve; em outros contextos, também olho'}, {ko:'눈꽃',pt:'flor de neve; floco ou cristal de neve'},
{ko:'먼지',pt:'poeira'}, {ko:'허공',pt:'espaço vazio, ar'}, {ko:'밤',pt:'noite'},
{ko:'아침',pt:'manhã'}, {ko:'꽃',pt:'flor'}, {ko:'벚꽃',pt:'flor de cerejeira'},
{ko:'연기',pt:'fumaça, neste contexto'}, {ko:'어둠',pt:'escuridão'}, {ko:'계절',pt:'estação do ano'},
{ko:'순간',pt:'instante'}, {ko:'끝',pt:'fim'}, {ko:'말',pt:'palavra, fala'}]
};
