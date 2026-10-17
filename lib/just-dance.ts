import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const verse1=[
l('내게 그 순간을 묻는다면','Se você me perguntasse sobre aquele momento,',e('내게 그 순간을','a mim, sobre aquele momento','내게 = 나에게, a mim; 그 = aquele; 순간 = instante; -을 objeto.'),e('묻는다면','se perguntasse','묻다 = perguntar; -는다면 introduz hipótese. Aqui não significa enterrar.')),
l('환하게 내리쬔 sunshine','a luz do sol que brilhava intensamente.',e('환하게','de modo luminoso','환하다 = ser claro/luminoso; -게 transforma o estado em modo.'),e('내리쬔','que incidia de cima','내리쬐다 = incidir intensamente, usado para a luz solar; -ㄴ modifica sunshine. É uma imagem que responde à pergunta anterior.')),
l('그 느낌을 묻는다면','Se perguntasse sobre aquela sensação,',e('그 느낌을','aquela sensação','그 = aquela; 느낌 = sensação/impressão; -을 objeto.'),e('묻는다면','se perguntasse','Repete 묻다 + -는다면, hipótese sobre uma pergunta.')),
l('자연스레 내 눈에 one shot','naturalmente, um único enquadramento diante dos meus olhos.',e('자연스레','naturalmente','Advérbio ligado a 자연스럽다, ser natural.'),e('내 눈에','aos meus olhos','내 = meu; 눈 = olho; -에 situa. one shot é uma imagem em inglês de uma tomada/um enquadramento, sem verbo explícito.')),
l('그 분위기 속 음악을 틀고','Naquele clima, colocamos a música para tocar,',e('그 분위기 속','naquele ambiente','그 = aquele; 분위기 = clima/atmosfera; 속 = dentro. A partícula de lugar é omitida.'),e('음악을 틀고','colocando a música para tocar','음악 = música; -을 objeto; 틀다 = ligar/pôr para tocar; -고 liga à continuação.')),
l('각자의 스트레칭','cada um fazendo seu alongamento.',e('각자의 스트레칭','o alongamento de cada um','각자 = cada pessoa; -의 = de; 스트레칭 = alongamento, empréstimo do inglês stretching. A ação fica implícita.')),
l('긴장은 풀려 지금 내 마음을 숨긴다면','A tensão se desfaz; se eu escondesse o que sinto agora…',e('긴장은 풀려','a tensão se desfaz','긴장 = tensão; -은 tópico; 풀리다 = soltar-se/desfazer-se.'),e('지금 내 마음을','agora, meu coração/sentimento','지금 = agora; 내 = meu; 마음 = coração/estado interior; -을 objeto.'),e('숨긴다면','se escondesse','숨기다 = esconder; -ㄴ다면 cria uma hipótese cuja continuação está na linha seguinte.')),
l('후회했어 너와의 sunset','Me arrependi — aquele pôr do sol com você.',e('후회했어','me arrependi','후회하다 = arrepender-se; -했어 é passado informal.','A transcrição enviada usa passado, apesar da hipótese na linha anterior. A ligação entre as frases é elíptica; não se substitui silenciosamente por uma forma de futuro ou conjectura.'),e('너와의','com você; nosso','너 = você; -와 = com; -의 liga essa relação ao nome sunset, pôr do sol.')),
en('Hey, dance with me dance with me','Ei, dance comigo, dance comigo.'),
l('어떤 바운스도 좋아 dance with me','Qualquer balanço serve; dance comigo.',e('어떤 바운스도','qualquer balanço','어떤 = qual/tipo de; 바운스 é empréstimo de bounce, movimento ritmado; -도 inclui qualquer alternativa.'),e('좋아','está bom; gosto','좋다 = ser bom/agradável; aqui aceita qualquer movimento.')),
l('어디서 왔고, 왜 춤을 추고','De onde veio, por que dança…',e('어디서 왔고','de onde veio e','어디서 = 어디에서, de onde; 오다 = vir; 왔- passado; -고 liga.'),e('왜 춤을 추고','por que dança e','왜 = por quê; 춤 = dança; -을 objeto; 추다 = dançar; -고 mantém a enumeração aberta. 춤을 추다 é a expressão usual para dançar.')),
l('자연스러운 대화 say something','Uma conversa natural; diga alguma coisa.',e('자연스러운 대화','conversa natural','자연스럽다 → 자연스러운, com mudança irregular de ㅂ para 우; 대화 = conversa.')),
l('이상해, 너무 잘 맞기에','É estranho, porque combinamos tão bem.',e('이상해','é estranho','이상하다 = ser estranho; informal.'),e('너무 잘 맞기에','porque combinamos tão bem','너무 = muito/demais; 잘 = bem; 맞다 = combinar/encaixar; -기에 indica motivo. O sujeito nós é contextual.')),
l('뭐든지 잘 될 거 같아','Parece que tudo vai dar certo.',e('뭐든지','qualquer coisa; tudo que for','Redução de 무엇이든지; admite qualquer alternativa.'),e('잘 될 거 같아','parece que vai dar certo','잘되다 = dar certo; -(으)ㄹ 것 같다 expressa previsão/impressão. 거 같아 é redução coloquial de 것 같아.')),
en("But you're my Friend, yeah my Friend",'Mas você é minha amiga, sim, minha amiga.'),
en('Just...','Só…'),
];
const chorus=[
l('함께 하는 느낌이 좋아, 너와','Gosto da sensação de estar junto, com você.',e('함께 하는 느낌이','a sensação de fazer algo juntos','함께 = junto; 하다 = fazer; -는 modifica 느낌, sensação; -이 sujeito. A atividade compartilhada é contextual.'),e('좋아, 너와','é bom; com você','좋다 = ser bom/agradável; 너와 = com você. Em português, gosto dessa sensação expressa naturalmente a experiência.')),
l('함께 하는 춤들이 좋아, 너와','Gosto das danças que dançamos juntos, com você.',e('함께 하는 춤들이','as danças que fazemos juntos','함께 = junto; 하는 modifica 춤, dança; -들 plural; -이 sujeito.'),e('좋아, 너와','gosto; com você','좋다 exprime agrado; 너 + -와 significa com você, colocado no fim por ritmo.')),
en('I just wanna, wanna, wanna','Eu só quero, quero, quero…'),
en('I really wanna, wanna, wanna','Eu realmente quero, quero, quero…'),
en('Just dance','Só dançar.'),
];
const post=[
l('음악의 리듬대로','Conforme o ritmo da música,',e('음악의 리듬대로','conforme o ritmo da música','음악 = música; -의 = de; 리듬 = ritmo; -대로 depois de um nome indica conforme/seguindo.')),
l('그저 몸이 가는대로','simplesmente seguindo o movimento do corpo.',e('그저 몸이','simplesmente o corpo','그저 = apenas/simplesmente; 몸 = corpo; -이 sujeito.'),e('가는대로','conforme vai','가다 = ir; -는 대로 = conforme/da maneira que. A separação padrão é 가는 대로.')),
l('우린 달빛 아래 shadow','Somos sombras sob a luz da lua.',e('우린','nós','Contração de 우리는.'),e('달빛 아래','sob a luz da lua','달빛 = luar; 아래 = embaixo/sob. shadow completa a imagem em inglês; a cópula fica omitida.')),
en('Fall in... fall in...','Me apaixonando… me apaixonando…'),
];
const verse2=[
l('Uh 진흙 같은 내 삶 속','Uh, dentro da minha vida que parecia lama,',e('진흙 같은','como lama','진흙 = lama; 같다 = ser como; 같은 modifica 삶.'),e('내 삶 속','dentro da minha vida','내 = meu; 삶 = vida; 속 = interior. É uma comparação sobre dificuldades, não uma descrição literal.')),
l('Uh 한 송이 너란 꽃','Uh, uma flor: você.',e('한 송이','uma flor, uma unidade','한 = um; 송이 é contador para flores e certos cachos.'),e('너란 꽃','a flor que é você','너 = você; -란 reduz -라고 하는 e apresenta uma identidade/nomeação; 꽃 = flor.')),
l('Uh 꽉 막힌 연습실도','Uh, até a sala de ensaio apertada,',e('꽉 막힌','completamente fechada; sufocante','꽉 = firmemente/completamente; 막히다 = ficar bloqueado; -ㄴ modifica 연습실. A sensação de espaço sufocante é contextual.'),e('연습실도','até a sala de ensaio','연습 = prática; 실 = sala; -도 = também/até.')),
l('Uh 함께라면 낙원으로','uh, se estivermos juntos, vira um paraíso.',e('함께라면','se estivermos juntos','함께 = junto; -라면 cria uma hipótese com a cópula implícita.'),e('낙원으로','em um paraíso','낙원 = paraíso; -(으)로 aponta resultado/destino. O verbo de transformação fica implícito, completando a sala da linha anterior.')),
l('Ay 답도 없던 꿈도 이제','Ei, até o sonho que não tinha resposta, agora…',e('답도 없던 꿈도','até o sonho que não tinha resposta','답 = resposta; -도 reforça nem sequer com 없다; -던 recorda um estado passado e modifica 꿈, sonho; o segundo -도 inclui o sonho.'),e('이제','agora','A continuação vem na linha seguinte.')),
l('Ay 공감대 형성이 매일 돼','ei, todo dia se forma uma compreensão compartilhada.',e('공감대 형성이','a formação de uma compreensão compartilhada','공감대 = base comum de empatia/entendimento; 형성 = formação; -이 sujeito.'),e('매일 돼','acontece todos os dias','매일 = diariamente; 되다 = acontecer/tornar-se; 형성이 되다 = formar-se. A ligação poética com o sonho anterior não explicita todos os participantes.')),
l('Ay 우리의 리듬은 맞기에','Ei, porque nossos ritmos combinam,',e('우리의 리듬은','quanto ao nosso ritmo','우리의 = nosso; 리듬 = ritmo; -은 tópico.'),e('맞기에','porque combina','맞다 = encaixar/combinar; -기에 indica motivo.')),
l('춤이 있었기에, 그 운명적인 박','porque havia dança — aquela batida que parecia destino.',e('춤이 있었기에','porque havia dança','춤 = dança; -이 sujeito; 있다 = haver; -었기에 indica motivo no passado.'),e('그 운명적인 박','aquela batida ligada ao destino','그 = aquela; 운명 = destino; -적 dá sentido de relacionado a; -인 modifica 박, tempo/batida musical. Aqui 박 não é um sobrenome.')),
en("Let's get it on POP",'Vamos começar, vamos com tudo.'),
l('웨이브로 물결치는 감','A sensação de ondular com um wave.',e('웨이브로','com um wave','웨이브 é empréstimo de wave, aqui um movimento ondulatório da dança; -(으)로 indica meio/modo.'),e('물결치는 감','a sensação que ondula','물결치다 = formar ondas/ondular; -는 modifica 감, sensação. A linguagem aproxima o corpo de ondas.')),
l('심장의 뜀박 하나 되는 동작','As batidas do coração, os movimentos se tornando um só.',e('심장의 뜀박','o pulsar do coração','심장 = coração como órgão; -의 = de; 뜀박 = corrida, aqui imagem do pulsar acelerado.'),e('하나 되는 동작','movimentos que se tornam um','하나 = um; 되다 = tornar-se; -는 modifica 동작, movimento. A partícula de resultado pode ficar omitida: 하나가 되다.')),
l('너로 알아가는 지금 내 마음','Meu coração de agora, que vou conhecendo por meio de você.',e('너로 알아가는','que vou conhecendo por você','너 = você; -(으)로 indica meio; 알다 = conhecer; -아/어 가다 expressa processo gradual; -는 modifica 마음.'),e('지금 내 마음','meu coração neste momento','지금 = agora; 내 = meu; 마음 = sentimentos/estado interior.')),
l('계속 이어 나가고 싶은 걸','Eu quero continuar levando isso adiante.',e('계속 이어 나가고 싶은 걸','quero continuar levando adiante','계속 = continuamente; 잇다 = ligar/continuar, cuja forma irregular é 이어; 이어 나가다 = prosseguir.','-고 싶다 indica desejo; 걸 pode funcionar como final coloquial de constatação, com a ideia de é isso que eu quero. O que continua é contextual: dança/relação.')),
l('춤을 좋아했듯이, 널','Como eu gostava da dança, de você também.',e('춤을 좋아했듯이','como gostava da dança','춤 = dança; -을 objeto; 좋아하다 = gostar; -했듯이 compara com uma experiência passada, assim como.'),e('널','de você; você como objeto','Contração de 너를. O verbo gostar fica implícito depois do objeto, preparando a declaração seguinte.')),
en("So you're my love, yeah my love",'Então você é meu amor, sim, meu amor.'),
en("That's what i like",'É disso que eu gosto.'),
];
const bridgeStart=[
l('느꼈어 baby','Eu senti, meu bem.',e('느꼈어','senti; percebi','느끼다 = sentir/perceber; -었어 é passado informal.')),
l('순간 너와 나 baby','Naquele instante, você e eu, meu bem.',e('순간 너와 나','naquele instante, você e eu','순간 = momento/instante; 너 = você; -와 = e; 나 = eu. O predicado continua na linha seguinte.')),
l('그 모든 합이 공식같이 맞춰진 걸 baby','Percebi que toda aquela combinação se ajustou como uma fórmula, meu bem.',e('그 모든 합이','toda aquela combinação','그 = aquela; 모든 = todo; 합 = soma/combinação; -이 sujeito. A imagem é de sintonia.'),e('공식같이 맞춰진 걸','que se ajustou como uma fórmula','공식 = fórmula; -같이 = como; 맞추다 = ajustar/fazer corresponder; -어지다 apresenta o resultado; -ㄴ modifica 것.','걸 reduz 것을; a oração completa 느꼈어, senti/percebi, da primeira linha.')),
];
const bridge1=[...bridgeStart,
l('막연함도 baby','Até a incerteza, meu bem,',e('막연함도','a incerteza também','막연하다 = ser vago/indefinido; -ㅁ forma o nome 막연함; -도 inclui.')),
l('큰 힘듦도 baby','até as grandes dificuldades, meu bem,',e('큰 힘듦도','as grandes dificuldades também','크다 → 큰, grande; 힘들다 = ser difícil/penoso; -ㅁ forma 힘듦, dificuldade; -도 inclui.')),
l('너 하나로 다 위로가 된다는 걸 baby','tudo vira consolo só com você, meu bem.',e('너 하나로 다','só com você, tudo','너 = você; 하나 = um; -(으)로 indica meio/causa; 다 = tudo.'),e('위로가 된다는 걸','que se torna consolo','위로 = consolo; -가 되다 = tornar-se; -ㄴ다는 modifica 것 por citação de um fato; 걸 = 것을. A oração também se liga a 느꼈어.')),
];
const bridge2=[...bridgeStart,
l('거친 숨도 baby','Até a respiração ofegante, meu bem,',e('거친 숨도','a respiração ofegante também','거칠다 = ser áspero/intenso; 거친 modifica 숨, respiração, com queda de ㄹ; -도 inclui.')),
l('흘린 땀도baby','até o suor derramado, meu bem,',e('흘린 땀도','o suor derramado também','흘리다 = derramar; -ㄴ modifica 땀, suor; -도 inclui. A transcrição junta 땀도 ao inglês baby; são unidades separadas.')),
l('너 하나로 다 의미가 된다는 걸 baby','tudo ganha sentido só com você, meu bem.',e('너 하나로 다','só com você, tudo','너 = você; 하나 = um; -(으)로 indica meio/causa; 다 = tudo.'),e('의미가 된다는 걸','que se torna significado','의미 = significado/sentido; -가 되다 = tornar-se; -ㄴ다는 것 apresenta um fato como conteúdo percebido; 걸 = 것을. Em português, ganha sentido soa mais natural.')),
];
export const justDanceSections:{title:string;lines:StudyLine[]}[]=[
{title:'Verso 1',lines:verse1},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},{title:'Refrão',lines:chorus},
{title:'Verso 2',lines:verse2},{title:'Refrão',lines:chorus},{title:'Pós-refrão',lines:post},{title:'Refrão',lines:chorus},
{title:'Ponte',lines:bridge1},{title:'Ponte',lines:bridge2},{title:'Refrão',lines:chorus},
];
export const justDanceVocabulary={
verbs:[
{ko:'묻다',pt:'perguntar (neste contexto)'},{ko:'환하다',pt:'ser luminoso'},{ko:'내리쬐다',pt:'incidir intensamente (luz solar)'},
{ko:'자연스럽다',pt:'ser natural'},{ko:'틀다',pt:'ligar; pôr música para tocar'},{ko:'풀리다',pt:'soltar-se; desfazer-se'},
{ko:'숨기다',pt:'esconder'},{ko:'후회하다',pt:'arrepender-se'},{ko:'좋다',pt:'ser bom; agradável'},{ko:'오다',pt:'vir'},
{ko:'추다',pt:'dançar, em 춤을 추다'},{ko:'이상하다',pt:'ser estranho'},{ko:'맞다',pt:'combinar; encaixar'},
{ko:'잘되다',pt:'dar certo'},{ko:'하다',pt:'fazer'},{ko:'가다',pt:'ir'},{ko:'같다',pt:'ser como; ser igual'},
{ko:'막히다',pt:'ficar bloqueado'},{ko:'되다',pt:'tornar-se; acontecer'},{ko:'있다',pt:'haver; existir'},
{ko:'물결치다',pt:'ondular'},{ko:'알다',pt:'conhecer; saber'},{ko:'잇다',pt:'ligar; continuar'},
{ko:'좋아하다',pt:'gostar'},{ko:'느끼다',pt:'sentir; perceber'},{ko:'맞추다',pt:'ajustar; fazer corresponder'},
{ko:'막연하다',pt:'ser vago; indefinido'},{ko:'크다',pt:'ser grande'},{ko:'힘들다',pt:'ser difícil; penoso'},
{ko:'거칠다',pt:'ser áspero; intenso'},{ko:'흘리다',pt:'derramar'},
],
nouns:[
{ko:'순간',pt:'instante'},{ko:'느낌',pt:'sensação; impressão'},{ko:'눈',pt:'olho'},{ko:'분위기',pt:'clima; atmosfera'},
{ko:'음악',pt:'música'},{ko:'스트레칭',pt:'alongamento'},{ko:'긴장',pt:'tensão'},{ko:'마음',pt:'coração; sentimentos'},
{ko:'바운스',pt:'balanço ritmado; bounce'},{ko:'춤',pt:'dança'},{ko:'대화',pt:'conversa'},{ko:'리듬',pt:'ritmo'},
{ko:'몸',pt:'corpo'},{ko:'달빛',pt:'luar'},{ko:'진흙',pt:'lama'},{ko:'삶',pt:'vida'},{ko:'꽃',pt:'flor'},
{ko:'연습실',pt:'sala de ensaio'},{ko:'낙원',pt:'paraíso'},{ko:'답',pt:'resposta'},{ko:'꿈',pt:'sonho'},
{ko:'공감대',pt:'base comum de empatia; compreensão compartilhada'},{ko:'형성',pt:'formação'},{ko:'운명',pt:'destino'},
{ko:'박',pt:'tempo; batida musical'},{ko:'웨이브',pt:'movimento ondulatório de dança'},{ko:'감',pt:'sensação'},
{ko:'심장',pt:'coração (órgão)'},{ko:'뜀박',pt:'corrida; aqui, imagem do pulsar'},{ko:'동작',pt:'movimento'},
{ko:'합',pt:'soma; combinação'},{ko:'공식',pt:'fórmula'},{ko:'막연함',pt:'incerteza; indefinição'},
{ko:'힘듦',pt:'dificuldade; esforço penoso'},{ko:'위로',pt:'consolo'},{ko:'숨',pt:'respiração'},{ko:'땀',pt:'suor'},{ko:'의미',pt:'significado; sentido'},
]};
