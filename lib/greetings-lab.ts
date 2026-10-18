export const greetingPhrases=[
 {id:'hello',ko:'안녕하세요',meaning:'Olá.',use:'Para cumprimentar com educação ao encontrar alguém. Serve em diferentes momentos do dia.',scene:'meet'},
 {id:'meet',ko:'만나서 반가워요',meaning:'Prazer em conhecer você.',use:'Para um primeiro encontro ou uma apresentação. Não é a despedida de quem vai embora.',scene:'meet'},
 {id:'thanks',ko:'감사합니다',meaning:'Obrigado(a).',use:'Para agradecer de forma respeitosa. A expressão não muda conforme o gênero de quem fala.',scene:'thanks'},
 {id:'sorry',ko:'죄송합니다',meaning:'Desculpe-me.',use:'Para pedir desculpas de forma respeitosa, por exemplo após esbarrar sem querer em alguém.',scene:'sorry'},
 {id:'go',ko:'안녕히 가세요',meaning:'Tchau. Vá bem.',use:'Despedida dirigida a quem está indo embora. Observe a outra pessoa, não apenas quem fala.',scene:'farewell'},
 {id:'stay',ko:'안녕히 계세요',meaning:'Tchau. Fique bem.',use:'Despedida dirigida a quem permanece no local enquanto você sai.',scene:'farewell'},
 {id:'yes',ko:'네',meaning:'Sim.',use:'Uma resposta educada de confirmação. Também pode mostrar que você está acompanhando a conversa.',scene:'agree'},
 {id:'no',ko:'아니요',meaning:'Não.',use:'Uma resposta negativa educada. Não é uma palavra para pedir desculpas.',scene:'agree'}
] as const;
export const farewellScenes=[
 {title:'Você sai; a outra pessoa fica',youLeave:true,otherLeaves:false,answer:'안녕히 계세요',explanation:'Você se dirige a quem fica. 계세요 se relaciona a permanecer. Por isso, ao sair de uma loja, esta é uma despedida adequada para quem continua lá.'},
 {title:'Você fica; a outra pessoa sai',youLeave:false,otherLeaves:true,answer:'안녕히 가세요',explanation:'Você se dirige a quem vai. 가세요 se relaciona a ir. Se uma visita está saindo da sua casa, esta é uma despedida adequada.'},
 {title:'Vocês dois vão embora',youLeave:true,otherLeaves:true,answer:'안녕히 가세요',explanation:'A outra pessoa também está indo embora. Cada um pode dizer 안녕히 가세요 ao outro. A escolha acompanha o movimento de quem recebe a despedida.'}
] as const;
export const greetingDialogues=[
 {title:'Primeiro encontro',scene:'meet',context:'Você conhece uma colega no curso de coreano. Os dois escolhem uma forma educada de conversar.',lines:[{speaker:0,ko:'안녕하세요.',meaning:'Olá.'},{speaker:1,ko:'안녕하세요. 만나서 반가워요.',meaning:'Olá. Prazer em conhecer você.'},{speaker:0,ko:'만나서 반가워요.',meaning:'Prazer em conhecer você.'}],note:'안녕하세요 abre a conversa; 만나서 반가워요 reconhece o primeiro encontro. Você pode responder com a mesma expressão.'},
 {title:'Uma gentileza antes de sair',scene:'thanks',context:'Uma colega empresta uma caneta. Você agradece e vai embora; ela continua na sala.',lines:[{speaker:0,ko:'감사합니다.',meaning:'Obrigado(a).'}, {speaker:1,ko:'네.',meaning:'Certo.'},{speaker:0,ko:'안녕히 계세요.',meaning:'Tchau. Fique bem.'},{speaker:1,ko:'안녕히 가세요.',meaning:'Tchau. Vá bem.'}],note:'O 네 desta cena é uma breve resposta ao agradecimento, não uma tradução palavra por palavra de “de nada”. Na despedida, cada pessoa escolhe a expressão conforme quem fica e quem sai.'},
 {title:'Um pequeno imprevisto',scene:'sorry',context:'Você esbarra de leve em alguém sem querer. A outra pessoa diz que está tudo bem.',lines:[{speaker:0,ko:'죄송합니다.',meaning:'Desculpe-me.'},{speaker:1,ko:'괜찮아요.',meaning:'Tudo bem.'}],note:'Aqui, 괜찮아요 acolhe o pedido de desculpas. Em outros contextos, pode falar de estar bem ou de algo ser aceitável. Aprenda o sentido dentro da situação.'}
] as const;
export const greetingChallenges=[
 {scene:'meet',prompt:'Você cumprimenta uma pessoa que acabou de conhecer. Qual é a escolha educada?',options:['안녕','안녕하세요','아니요'],answer:'안녕하세요',feedback:'안녕하세요 é uma escolha educada para começar a conversa. 안녕 é informal e depende de uma relação próxima.'},
 {scene:'thanks',prompt:'Alguém ajudou você. Como agradecer de forma respeitosa?',options:['감사합니다','죄송합니다','안녕히 계세요'],answer:'감사합니다',feedback:'감사합니다 agradece a ajuda. 죄송합니다 pede desculpas; não substitui um agradecimento.'},
 {scene:'sorry',prompt:'Você esbarrou sem querer em uma pessoa. O que dizer?',options:['만나서 반가워요','안녕히 가세요','죄송합니다'],answer:'죄송합니다',feedback:'죄송합니다 é um pedido respeitoso de desculpas para esse pequeno imprevisto.'},
 {scene:'farewell',youLeave:true,otherLeaves:false,prompt:'Você sai e a outra pessoa permanece. Qual despedida você diz a ela?',options:['안녕히 가세요','안녕히 계세요','안녕하세요'],answer:'안녕히 계세요',feedback:'A pessoa que ouve permanece no local. Por isso, você diz 안녕히 계세요.'},
 {scene:'farewell',youLeave:false,otherLeaves:true,prompt:'Você fica e a outra pessoa vai embora. Qual despedida você diz a ela?',options:['안녕히 가세요','안녕히 계세요','만나서 반가워요'],answer:'안녕히 가세요',feedback:'A pessoa que ouve está indo embora. Por isso, você diz 안녕히 가세요.'},
 {scene:'meet',prompt:'Depois do olá em um primeiro encontro, como dizer que foi um prazer conhecer a pessoa?',options:['아니요','죄송합니다','만나서 반가워요'],answer:'만나서 반가워요',feedback:'만나서 반가워요 expressa prazer pelo encontro. Não é uma resposta de sim ou não.'}
] as const;
