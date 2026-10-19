export const particleFamilies=[
 {label:'Tópico',ko:'은 / 는',closed:'은',open:'는',hint:'Sobre quem ou sobre o que vamos falar? O tópico também pode criar um contraste.'},
 {label:'Sujeito',ko:'이 / 가',closed:'이',open:'가',hint:'Quem ou o que participa da situação como sujeito? Em uma resposta a “quem?”, essa marca pode destacar a pessoa.'},
 {label:'Objeto',ko:'을 / 를',closed:'을',open:'를',hint:'Qual é o objeto pedido pelo verbo? Em “ler um livro”, é aquilo que se lê.'}
] as const;
export const particleNouns=[{ko:'책',meaning:'livro'},{ko:'노래',meaning:'canção'},{ko:'진',meaning:'Jin'},{ko:'아미',meaning:'ARMY'}] as const;
export function particleHasFinal(word:string){const n=word.codePointAt(word.length-1)!-0xac00;return n>=0&&n<11172&&n%28!==0;}
export function particleForm(word:string,family:number){return particleHasFinal(word)?particleFamilies[family].closed:particleFamilies[family].open;}
export const particleFocusScenes=[
 {label:'Vamos falar sobre Jin',context:'A conversa passa a ser sobre Jin. Você apresenta uma informação sobre ele.',ko:'진은 노래를 불러요.',meaning:'Quanto a Jin, ele canta uma canção.',particle:'은',note:'은 apresenta Jin como tópico. Não é preciso traduzir “quanto a” em toda frase; essa expressão só ajuda a perceber o foco.'},
 {label:'Quem está cantando?',context:'Na cena imaginada, alguém pergunta quem está cantando. Você identifica a pessoa.',ko:'진이 노래를 불러요.',meaning:'É Jin quem canta uma canção.',particle:'이',note:'이 marca Jin como sujeito. Neste contexto, a resposta destaca quem realiza a ação. Isso não significa que 이/가 sempre marque uma informação nova.'},
 {label:'E uma comparação?',context:'Na nossa ilustração de prática, Jin lê e Jimin canta. Comparamos o que cada um faz nessa cena.',ko:'진은 책을 읽어요. 지민은 노래를 불러요.',meaning:'Jin lê um livro; Jimin canta uma canção.',particle:'은',note:'은 ajuda a construir o contraste. A frase não diz que Jin só lê ou que Jimin nunca lê. O contexto é uma cena inventada para estudar, não uma citação ou informação sobre a rotina deles.'}
] as const;
export const particlePlaces=[
 {kind:'go',label:'Ir ao local',ko:'공연장에 가요.',meaning:'Vou ao local do show.',before:'공연장',after:'가요.',answer:'에',cue:'DESTINO',note:'Com 가요, o local é o destino do movimento. 공연장 é o local do show; 에 indica para onde se vai.'},
 {kind:'stay',label:'Estar no local',ko:'공연장에 있어요.',meaning:'Estou no local do show.',before:'공연장',after:'있어요.',answer:'에',cue:'PRESENÇA',note:'Com 있어요, dizemos onde alguém está. Nesta frase de localização, 공연장 recebe 에.'},
 {kind:'sing',label:'Fazer algo no local',ko:'공연장에서 노래를 불러요.',meaning:'Canto uma canção no local do show.',before:'공연장',after:'노래를 불러요.',answer:'에서',cue:'LOCAL DA AÇÃO',note:'Com 노래를 불러요, a ação de cantar acontece naquele local. Aqui, 공연장 recebe 에서.'}
] as const;
export const particleChallenges=[
 {prompt:'Use a partícula de tópico: 아미… 노래를 불러요.',before:'아미',after:'노래를 불러요.',options:['은','는','을'],answer:'는',ko:'아미는 노래를 불러요.',feedback:'아미 termina em vogal. Para a função de tópico pedida, escolhemos 는. A forma completa é 아미는.'},
 {prompt:'Responda quem canta, usando a partícula de sujeito: 지민… 노래를 불러요.',before:'지민',after:'노래를 불러요.',options:['가','를','이'],answer:'이',ko:'지민이 노래를 불러요.',feedback:'A pergunta pede o sujeito. 지민 termina com 받침 ㄴ, então usamos 이: 지민이.'},
 {prompt:'Marque o objeto de ler: 책… 읽어요.',before:'책',after:'읽어요.',options:['을','를','가'],answer:'을',ko:'책을 읽어요.',feedback:'책 é o objeto de 읽어요 e termina com 받침. Escolhemos 을 e escrevemos 책을, sem espaço antes da partícula.'},
 {prompt:'Marque o objeto de cantar: 노래… 불러요.',before:'노래',after:'불러요.',options:['이','을','를'],answer:'를',ko:'노래를 불러요.',feedback:'노래 termina em vogal. Como é o objeto de cantar, recebe 를: 노래를.'},
 {prompt:'O local é o destino: 공연장… 가요.',before:'공연장',after:'가요.',options:['에서','에','을'],answer:'에',ko:'공연장에 가요.',feedback:'가요 indica ir. Nesta cena, 에 marca o destino: o local do show.'},
 {prompt:'Diga onde você está: 공연장… 있어요.',before:'공연장',after:'있어요.',options:['를','에서','에'],answer:'에',ko:'공연장에 있어요.',feedback:'Aqui 있어요 expressa presença em um local, então usamos 에. O sentido depende também do predicado.'},
 {prompt:'O canto acontece no local: 공연장… 노래를 불러요.',before:'공연장',after:'노래를 불러요.',options:['에서','에','가'],answer:'에서',ko:'공연장에서 노래를 불러요.',feedback:'에서 marca o local onde acontece a ação de cantar. Não é o destino de um deslocamento nesta frase.'},
 {prompt:'Qual frase mantém a partícula junto à palavra e o espaço antes do verbo?',before:'',after:'',options:['노래 를 들어요.','노래를 들어요.','노래를들어요.'],answer:'노래를 들어요.',ko:'노래를 들어요.',feedback:'Escrevemos 노래를 junto. Depois vem um espaço antes de 들어요. O espaço separa grupos da frase, não a palavra de sua partícula.'}
] as const;
