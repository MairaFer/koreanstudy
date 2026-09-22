// Texto fornecido pela usuária no chat. Apenas separação de frases e espaços foi organizada.
export type StudyLine={text:string;translation:string;grammar:string};
const line=(text:string,translation:string,grammar:string):StudyLine=>({text,translation,grammar});
const chorus=[
line('눈꽃이 떨어져요','Flocos de neve caem.','눈꽃 significa literalmente “flor de neve”, imagem para a neve em flocos ou cristais. 이 marca o sujeito. 떨어져요 é 떨어지다 (cair) no presente educado: 지 + 어요 → 져요.'),
line('또 조금씩 멀어져요','E, pouco a pouco, nos afastamos.','또 significa novamente ou também; 조금씩, pouco a pouco. 멀어지다 combina 멀다 (ser distante) com -어지다, que indica mudança de estado. O sujeito não está expresso: pelo contexto, a distância entre as pessoas aumenta.'),
line('보고 싶다 (보고 싶다)','Sinto sua falta (sinto sua falta).','보다 (ver) + -고 싶다 (querer fazer) significa literalmente querer ver. Ao falar de alguém ausente, a tradução natural é sentir saudade. 다 é uma terminação simples, usada aqui na expressão lírica; 보고 싶어요 é uma versão educada.'),
line('보고 싶다 (보고 싶다)','Sinto sua falta (sinto sua falta).','A repetição intensifica a saudade. O sujeito e a pessoa de quem se sente falta ficam implícitos. Os parênteses preservam a repetição vocal do texto fornecido.'),
line('얼마나 기다려야?','Quanto tempo preciso esperar?','얼마나 pergunta quanto. 기다리다 (esperar) + -어야 dá 기다려야. A construção de necessidade costuma continuar com 하다: 기다려야 해? Aqui o final fica subentendido, produzindo uma pergunta suspensa.'),
line('또 몇 밤을 더 새워야?','Por quantas noites mais preciso ficar acordado?','몇 pergunta quantidade; 밤 é noite. 을 marca o objeto de 새우다, passar a noite sem dormir. 더 significa mais. 새워야 vem de 새우다 + -어야, novamente com a continuação de necessidade implícita.'),
line('널 보게 될까? (널 보게 될까?)','Será que vou conseguir te ver? (Será que vou te ver?)','널 contrai 너를, “você” como objeto. 보다 + -게 되다 apresenta chegar à situação de ver alguém. -(으)ㄹ까 expressa aqui uma dúvida dirigida a si mesmo, sem afirmar que o encontro acontecerá.'),
line('만나게 될까? (만나게 될까?)','Será que vamos nos encontrar? (Será que vamos nos encontrar?)','만나다 significa encontrar alguém. -게 되다 destaca o resultado ou as circunstâncias que levam ao encontro. 될까 acrescenta uma pergunta incerta sobre essa possibilidade.')];
const refrain=[
line('추운 겨울 끝을 지나','Passando pelo fim do inverno frio,','춥다 é um verbo descritivo irregular em ㅂ: antes de -(으)ㄴ, vira 추운, que modifica 겨울. 끝 é fim; 을 marca aquilo por que se passa. 지나 vem de 지나다 e conecta a imagem à continuação.'),
line('다시 봄날이 올 때까지','até o dia de primavera voltar,','다시 significa de novo. 봄날 é um dia de primavera e 이 marca o sujeito. 오다 + -(으)ㄹ 때 forma 올 때, “quando vier”. 까지 estabelece o limite: até esse momento.'),
line('꽃 피울 때까지','até fazer as flores desabrocharem,','피우다 é fazer florescer ou produzir uma flor; 피다 é florescer. Aqui 꽃 aparece sem a partícula de objeto 을, omissão comum na fala e na poesia. 피울 때까지 significa até o momento de fazer florescer; o sujeito é implícito.'),
line('그곳에 좀 더 머물러줘, 머물러줘','Fique aí mais um pouco, fique.','그곳 é esse lugar; 에 indica onde permanecer. 좀 더 significa um pouco mais. 머무르다 tem irregularidade de 르: 머무르 + 어 → 머물러. -어 줘 faz um pedido informal para que a pessoa realize a ação em favor de quem fala.')];
export const springDaySections:{title:string;lines:StudyLine[]}[]=[
{title:'Saudade e distância',lines:[
line('보고 싶다, 이렇게 말하니까 더 보고 싶다','Sinto sua falta; dizer isso me faz sentir ainda mais saudade.','보고 싶다 expressa querer ver alguém ou sentir saudade. 이렇게 é assim, deste jeito. 말하다 + -니까 → 말하니까 apresenta a causa ou a circunstância percebida: ao dizer isso. 더 acrescenta “mais”.'),
line('너희 사진을 보고 있어도 보고 싶다','Mesmo olhando as fotos de vocês, sinto sua falta.','너희 é vocês, em registro informal. 사진을 é fotos como objeto. 보고 있다 indica a ação em andamento; -어도 acrescenta concessão: mesmo estando olhando. O coreano não obriga a marcar o plural de 사진.'),
line('너무 야속한 시간 나는 우리가 밉다','O tempo é tão cruel; sinto raiva de nós.','너무 intensifica 야속하다, que descreve algo insensível ou decepcionante. 야속한 modifica 시간. Em 나는 우리가 밉다, 나는 apresenta quem sente e 우리가 é o alvo do sentimento descrito por 밉다. “Sinto raiva de nós” preserva esse conflito afetivo.'),
line('이젠 얼굴 한 번 보는 것 조차 힘들어진 우리가','De nós, para quem até ver o rosto um do outro uma vez ficou difícil.','이젠 contrai 이제는, agora. 보는 것 transforma ver em uma expressão nominal; 조차 acrescenta “até mesmo” e normalmente se escreve junto: 것조차. 힘들어지다 é tornar-se difícil; 힘들어진 modifica 우리. A frase permanece suspensa, retomando o “nós” anterior.') ]},
{title:'Um inverno por dentro',lines:[
line('여긴 온통 겨울 뿐이야 8월에도 겨울이 와','Aqui só há inverno; até em agosto o inverno chega.','여긴 contrai 여기는. 온통 significa inteiramente. 겨울뿐이야 (“é só inverno”) tem 뿐, somente, normalmente junto ao substantivo. 8월 lê-se 팔월, agosto. 에도 combina referência temporal e inclusão: até em agosto.'),
line('마음은 시간을 달려가네 홀로 남은 설국열차','Meu coração corre pelo tempo: um Expresso do Amanhã que ficou sozinho.','마음은 é coração ou mente como tópico; 시간을 é o percurso figurado da corrida. 달려가다 combina correr e ir; -네 acrescenta constatação ou expressividade. 남은 modifica 설국열차, título coreano de Snowpiercer (“Expresso do Amanhã”), usado aqui como imagem poética. 홀로 significa sozinho.'),
line('니 손 잡고 지구 반대편까지 가 이 겨울을 끝내고파','Quero pegar sua mão, ir até o outro lado da Terra e acabar com este inverno.','니 é uma forma coloquial de 네, seu. 손 aparece sem 을. 잡고 conecta pegar à ação seguinte. 반대편까지 significa até o lado oposto. 끝내고파 contrai 끝내고 싶어: quero pôr fim. A sequência encadeia ações desejadas.'),
line('그리움들이 얼마나 눈처럼 내려야 그 봄날이 올까, friend?','Quanta saudade terá de cair como neve para aquele dia de primavera chegar, amigo?','그리움 é saudade, derivada de 그립다. 들 pluraliza poeticamente esse sentimento. 처럼 faz a comparação com 눈, neve. 내려야 apresenta uma condição necessária; 올까 expressa dúvida sobre a chegada. friend é a palavra inglesa para amigo.') ]},
{title:'A hipótese da neve',lines:[
line('허공을 떠도는 작은먼지처럼, 작은 먼지처럼','Como uma pequena poeira vagando no ar, como uma pequena poeira,','허공 é o espaço vazio ou o ar. 떠도는, de 떠돌다, modifica 먼지: poeira que vaga. O ㄹ da base cai antes de -는. 작은, de 작다, significa pequena. 처럼 indica comparação; a grafia usual é 작은 먼지, com espaço.'),
line('날리는 눈이 나라면','se eu fosse essa neve que flutua ao vento,','날리는 modifica 눈: neve que se espalha ou flutua no ar. 나라면 vem de 나 + (이)라면, “se fosse eu”. A construção imagina uma identidade hipotética, não uma condição real já estabelecida.'),
line('조금 더 빨리 네게 닿을 수 있을 텐데?','eu poderia chegar até você um pouco mais depressa…','조금 더 빨리 significa um pouco mais depressa. 네게 é a você. 닿다 + -(으)ㄹ 수 있다 indica possibilidade de alcançar. -(으)ㄹ 텐데 acrescenta uma expectativa hipotética e uma continuação implícita; aqui sugere desejo e pesar. O ponto de interrogação foi mantido como enviado.') ]},
{title:'Refrão · à espera do encontro',lines:chorus},
{title:'Até a primavera',lines:refrain},
{title:'O que mudou entre nós',lines:[
line('네가 변한 건지? (네가 변한 건지?)','Será que foi você que mudou? (Será que foi você que mudou?)','네가 é você como sujeito. 변한 modifica 것, indicando uma mudança já ocorrida. 건지 contrai 것인지: não saber se é o caso. A frase termina em uma dúvida, com a oração principal omitida.'),
line('아니면 내가 변한 건지? (내가 변한 건지?)','Ou será que fui eu que mudei? (Será que fui eu que mudei?)','아니면 introduz a alternativa, ou então. 내가 é eu como sujeito. 변한 건지 repete a estrutura de dúvida da frase anterior e desloca a possibilidade da mudança para quem fala.'),
line('이 순간 흐르는 시간조차 미워','Neste momento, tenho raiva até do tempo que passa.','이 순간 significa neste momento. 흐르는, de 흐르다, modifica 시간: o tempo que flui. 조차 inclui algo inesperado: até o tempo. 미워 é a forma informal de 밉다, com a mudança irregular de ㅂ para 우 e a contração em 워.'),
line('우리가 변한 거지 뭐? 모두가 그런 거지, 뭐?','Nós mudamos, fazer o quê? Todo mundo é assim, não é?','거 é a forma coloquial de 것. -지 apresenta uma conclusão ou confirmação; 뭐, nesse uso final, pode dar resignação, algo como “fazer o quê”. 모두가 significa todos. 그런 vem de 그렇다 e retoma a situação de mudar.') ]},
{title:'Lembrar e tentar deixar ir',lines:[
line('그래, 밉다 니가 넌 떠났지만','É, tenho raiva de você; embora você tenha partido,','그래 é uma concordância ou admissão. 니가 é a forma coloquial usada aqui por 네가. A ordem 밉다 니가 enfatiza o sentimento antes de nomear seu alvo. 넌 contrai 너는. 떠났지만 une o passado de 떠나다 (partir) à concessão ou contraste -지만.'),
line('단 하루도 너를 잊은 적이 없었지 난','eu não passei um dia sequer sem me lembrar de você.','단 하루도 significa nem um único dia, com a negação posterior. 잊은 적이 없다 é não ter a experiência de esquecer; 없었지 coloca essa afirmação no passado com tom de confirmação. 난, contração de 나는, aparece no final por ênfase.'),
line('솔직히 보고 싶은데 이만 너를 지울게','Sinceramente, sinto sua falta, mas agora vou tentar apagar você de mim.','솔직히 é sinceramente. 보고 싶은데 apresenta o desejo de ver como pano de fundo para um contraste. 이만 sugere encerrar algo neste ponto. 지울게, de 지우다 + -(으)ㄹ게, anuncia uma intenção voltada à outra pessoa. Apagar alguém é uma imagem para tentar deixá-lo ir.'),
line('그게 널 원망하기보단 덜 아프니까','porque isso dói menos do que guardar ressentimento de você.','그게 contrai 그것이: isso como sujeito. 널 é 너를. 원망하기 nominaliza ressentir-se ou culpar; 보단 contrai 보다는, marcando comparação. 덜 é menos. 아프니까 apresenta a razão: porque dói.'),
line('시린 널 불어내 본다','Tento soprar para fora essa lembrança fria e dolorosa de você.','시린, de 시리다, modifica 널 (너를) em uma imagem de frio e dor. 불어내다 significa expelir soprando. -어 보다 indica experimentar ou tentar a ação; 본다 é sua forma declarativa simples. “Lembrança” explicita uma leitura da metáfora; não é um substantivo presente na frase.'),
line('연기처럼, 하얀 연기처럼','Como fumaça, como fumaça branca.','연기 significa fumaça neste contexto, não atuação. 처럼 indica comparação. 하얀, de 하얗다, modifica o substantivo e mostra uma forma irregular em ㅎ: fumaça branca.'),
line('말로는 지운다 해도','Mesmo que eu diga, em palavras, que apaguei você,','말로 é por palavras; 는 cria contraste com a realidade. 지운다 해도 é uma forma contraída de 지운다고 해도: mesmo dizendo que apaga. O presente coreano é mantido na explicação; em português, “que apaguei” torna natural a afirmação de que já teria deixado a pessoa para trás.'),
line('사실 난 아직 널 보내지 못하는데','na verdade, ainda não consigo deixar você ir.','사실 é na verdade; 아직, ainda. 보내다 significa enviar ou deixar partir. -지 못하다 expressa não conseguir. -는데 termina com um pano de fundo ou contraste ainda aberto, opondo o sentimento real ao que foi dito.') ]},
{title:'Refrão · a saudade continua',lines:chorus},
{title:'Nenhuma estação dura para sempre',lines:[
line("You know it all, you're my best friend",'Você sabe de tudo; você é meu melhor amigo.','Esta frase está em inglês. you’re contrai you are, e my best friend significa meu melhor amigo. Não há uma construção gramatical coreana nesta linha.'),
line('아침은 다시 올 거야','A manhã vai voltar.','아침은 coloca a manhã como tópico. 다시 significa outra vez. 올 거야 vem de 오다 + -(으)ㄹ 것이야, construção informal de futuro ou previsão. A frase transmite confiança na chegada de um novo dia.'),
line('어떤 어둠도, 어떤 계절도','Nenhuma escuridão, nenhuma estação,','어떤 significa qual ou qualquer, conforme o contexto. 도 inclui cada possibilidade. Com a negação da frase seguinte, 어떤 … 도 ganha o sentido de nenhuma. Esta linha precisa ser lida junto à continuação.'),
line('영원할 순 없으니까','pode durar para sempre.','영원하다 significa ser eterno. 순 contrai 수는 em 영원할 수는 없다: não poder ser eterno. -(으)니까 apresenta a razão da esperança anterior: a manhã voltará porque nenhuma escuridão ou estação pode durar para sempre.') ]},
{title:'Sinais de primavera',lines:[
line('벚꽃이 피나봐요','Parece que as flores de cerejeira estão florescendo.','벚꽃 é flor de cerejeira; 이 marca o sujeito. 피다 é florescer. -나 봐요 expressa uma suposição baseada em sinais percebidos. A separação usual é 피나 봐요; a linha mantém o texto enviado.'),
line('이 겨울도 끝이 나요','Este inverno também está chegando ao fim.','이 겨울도 significa este inverno também. 끝이 나다 é a expressão chegar ao fim: literalmente, surgir um fim. 나요 é o presente educado de 나다.'),
...chorus.slice(2,4)]},
{title:'A promessa de reencontro',lines:[
line('조금만 기다리면 (기다리면)','Se você esperar só mais um pouco (se esperar),','조금만 combina um pouco com 만, apenas. 기다리다 + -(으)면 cria a condição. A promessa que depende dessa espera vem nas linhas seguintes; o sujeito você é inferido do pedido.'),
line('며칠 밤만 더 새우면','se passar só mais algumas noites acordado,','며칠 significa alguns dias ou quantos dias; junto a 밤, conta-se um período de algumas noites. 만 limita a quantidade e 더 acrescenta mais. 새우면 combina passar a noite sem dormir com a condição -면.'),
line('만나러 갈게 (만나러 갈게)','Vou te encontrar (vou te encontrar).','만나다 + -(으)러 indica a finalidade de um deslocamento: ir para encontrar. 갈게, de 가다, expressa intenção ou promessa dirigida à pessoa que ouve. Não é apenas uma previsão neutra do futuro.'),
line('데리러 갈게 (데리러 갈게, yeah, yeah)','Vou te buscar (vou te buscar, sim, sim).','데리러 가다 significa ir buscar alguém para trazê-lo ou acompanhá-lo. -(으)러 marca a finalidade de ir, e -(으)ㄹ게 reforça a promessa. yeah é uma interjeição inglesa.') ]},
{title:'Último pedido · fique mais um pouco',lines:refrain}
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
