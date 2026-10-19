export const routineVerbs=[
 {dictionary:'먹다',stem:'먹',vowel:'ㅓ',family:'어요',present:'먹어요',meaning:'comer',picture:'eat',formula:'먹 + 어요 → 먹어요',note:'A última vogal de 먹 é ㅓ. O ㄱ final não escolhe a terminação: aqui usamos 어요.'},
 {dictionary:'살다',stem:'살',vowel:'ㅏ',family:'아요',present:'살아요',meaning:'morar; viver',picture:'home',formula:'살 + 아요 → 살아요',note:'A última vogal de 살 é ㅏ. Mantemos o ㄹ final e acrescentamos 아요.'},
 {dictionary:'가다',stem:'가',vowel:'ㅏ',family:'아요',present:'가요',meaning:'ir',picture:'go',formula:'가 + 아요 → 가요',note:'A base 가 já termina em ㅏ. As vogais iguais se juntam: 가요, sem repetir 아.'},
 {dictionary:'보다',stem:'보',vowel:'ㅗ',family:'아요',present:'봐요',meaning:'ver; assistir',picture:'watch',formula:'보 + 아요 → 봐요',note:'ㅗ combina com ㅏ e forma ㅘ. Por isso 보 + 아요 se contrai em 봐요.'},
 {dictionary:'마시다',stem:'마시',vowel:'ㅣ',family:'어요',present:'마셔요',meaning:'beber',picture:'drink',formula:'마시 + 어요 → 마셔요',note:'Olhe para 시, a última sílaba da base, não para 마. ㅣ + ㅓ vira ㅕ: 마셔요.'},
 {dictionary:'배우다',stem:'배우',vowel:'ㅜ',family:'어요',present:'배워요',meaning:'aprender',picture:'study',formula:'배우 + 어요 → 배워요',note:'A última vogal está em 우: ㅜ + ㅓ forma ㅝ. A forma contraída é 배워요.'},
 {dictionary:'읽다',stem:'읽',vowel:'ㅣ',family:'어요',present:'읽어요',meaning:'ler',picture:'read',formula:'읽 + 어요 → 읽어요',note:'A vogal de 읽 é ㅣ, então usamos 어요. O 받침 liga-se à vogal seguinte; escute a palavra inteira.'},
 {dictionary:'오다',stem:'오',vowel:'ㅗ',family:'아요',present:'와요',meaning:'vir',picture:'come',formula:'오 + 아요 → 와요',note:'Assim como em 봐요, ㅗ + ㅏ forma ㅘ. Aqui 오 + 아요 vira 와요.'},
 {dictionary:'공부하다',stem:'공부하',vowel:'ㅏ',family:'하다 → 해요',present:'공부해요',meaning:'estudar',picture:'study',formula:'공부하다 → 공부해요',note:'Reconheça 하다 antes de aplicar os outros caminhos. 하여요 costuma se contrair em 해요: 공부해요, e não 공부하아요.'}
] as const;
export const routineTimes=[
 {ko:'매일',meaning:'todos os dias',note:'매일 já indica frequência; nesta frase não acrescentamos 에.'},
 {ko:'아침에',meaning:'de manhã',note:'아침 significa manhã. Aqui 에 marca quando a atividade acontece.'},
 {ko:'저녁에',meaning:'à noite',note:'저녁 pode indicar o período da tarde/noite ou o jantar. Nesta frase, 저녁에 situa a atividade no começo da noite.'},
 {ko:'주말에',meaning:'no fim de semana',note:'주말 é fim de semana. Acrescentamos 에 para indicar quando a atividade acontece.'}
] as const;
export const routineActivities=[
 {object:'한국어를',predicate:'공부해요',meaning:'estudar coreano',mine:'estudo coreano',his:'estuda coreano',picture:'study'},
 {object:'커피를',predicate:'마셔요',meaning:'beber café',mine:'bebo café',his:'bebe café',picture:'drink'},
 {object:'방탄소년단 영상을',predicate:'봐요',meaning:'assistir a vídeos do BTS',mine:'assisto a vídeos do BTS',his:'assiste a vídeos do BTS',picture:'watch'},
 {object:'책을',predicate:'읽어요',meaning:'ler um livro',mine:'leio um livro',his:'lê um livro',picture:'read'}
] as const;
export function routineSentence(time:number,activity:number,person:number){return `${person===0?'저는':'진은'} ${routineTimes[time].ko} ${routineActivities[activity].object} ${routineActivities[activity].predicate}.`;}
export const routineContexts=[
 {label:'Um hábito',ko:'매일 영상을 봐요.',meaning:'Assisto a vídeos todos os dias.',note:'매일 indica um hábito. A forma 봐요 não muda para marcar a repetição.'},
 {label:'Agora',ko:'지금 영상을 봐요.',meaning:'Estou assistindo a um vídeo agora.',note:'지금 situa a ação no momento atual. O contexto permite essa leitura com 봐요; há outras formas de enfatizar uma ação em andamento.'},
 {label:'Um plano',ko:'내일 영상을 봐요.',meaning:'Vou assistir a um vídeo amanhã.',note:'내일 significa amanhã. Em uma conversa sobre um plano combinado, a mesma forma pode apontar para o futuro. 봐요 não é uma marca exclusiva de “agora”.'}
] as const;
export const routineChallenges=[
 {prompt:'Qual é a base de 마시다?',options:['마','마시','마셔요'],answer:'마시',feedback:'Retire apenas o 다 final da forma de dicionário: 마시다 → 마시. Depois observe a última vogal, ㅣ.'},
 {prompt:'Qual forma educada completa 먹다?',options:['먹아요','먹어요','먹해요'],answer:'먹어요',feedback:'A última vogal da base 먹 é ㅓ. Acrescentamos 어요: 먹어요.'},
 {prompt:'Transforme 보다 para uma conversa educada.',options:['봐요','보해요','보어요'],answer:'봐요',feedback:'보 recebe 아요. A combinação de ㅗ com ㅏ forma ㅘ: 보 + 아요 → 봐요.'},
 {prompt:'Escolha o presente educado de 공부하다.',options:['공부하아요','공부하어요','공부해요'],answer:'공부해요',feedback:'Os verbos com 하다 seguem o caminho 해요: 공부하다 → 공부해요.'},
 {prompt:'Complete a rotina: 저는 아침에 커피를 …',options:['마셔요','읽어요','가요'],answer:'마셔요',feedback:'커피를 é o objeto de beber. 마시다 vira 마셔요: 저는 아침에 커피를 마셔요.'},
 {prompt:'Qual frase tem o sentido de “Assisto a vídeos do BTS todos os dias”?',options:['매일 방탄소년단 영상을 봐요.','지금 방탄소년단 영상을 봐요.','내일 방탄소년단 영상을 봐요.'],answer:'매일 방탄소년단 영상을 봐요.',feedback:'매일 indica “todos os dias”. 지금 significa “agora” e 내일, “amanhã”. O contexto muda; 봐요 permanece.'},
 {prompt:'Transforme a afirmação 공부해요. em uma pergunta educada.',options:['공부해요?','공부다?','공부해?'],answer:'공부해요?',feedback:'Na escrita, trocamos o ponto por interrogação: 공부해요? Na fala, uma entonação de pergunta ajuda a comunicar a intenção. O contexto continua importante.'},
 {prompt:'Qual par mantém o mesmo verbo e muda apenas de quem se fala?',options:['저는 먹어요. / 진은 먹어요.','저는 먹어요. / 진은 읽어요.','저는 봐요. / 진은 가요.'],answer:'저는 먹어요. / 진은 먹어요.',feedback:'먹어요 pode ser usado com 저는 ou 진은. Neste estilo, a forma verbal não muda de acordo com a pessoa ou o plural; o contexto identifica quem faz a ação.'}
] as const;
