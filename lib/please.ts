// Texto fornecido pela usuária; análise e traduções contextuais preparadas.
import type {StudyLine,StudyEntry} from './spring-day';
const en=(text:string,translation:string):StudyLine=>({text,translation,english:true,entries:[]});
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const refrainEntries:StudyEntry[][]=[
 [e('세상이','o mundo (sujeito)','세상 é mundo; 이 marca o sujeito após consoante.','A letra personifica o mundo como aquilo que separa as pessoas.'),
 e('우릴','a nós (objeto)','Contração de 우리를: 우리 + 를.','É o objeto de 갈라놓다, separar; não a marca de sujeito.'),
 e('갈라놓을','que separará; quando separar','갈라놓다 significa separar ou afastar pessoas. -을 modifica 때.','-(으)ㄹ 때 situa uma circunstância: quando o mundo nos separar. Não é uma promessa do narrador.'),
 e('때','quando; momento','Substantivo dependente que recebe a oração anterior como modificador.','O verso continua semanticamente na promessa da linha seguinte.')],
 [e('한','um','Forma de 하나 usada antes de um nome contado.','Modifica 걸음: um passo.'),
 e('걸음','passo','Substantivo ligado ao ato de caminhar.','한 걸음 더 corresponde a um passo a mais.'),
 e('더','mais','Advérbio que acrescenta intensidade ou quantidade.','Aqui indica uma aproximação adicional.'),
 e('다가설게','vou me aproximar','다가서다 + -(으)ㄹ게 → 다가설게.','-ㄹ게 expressa uma intenção ou compromisso do falante voltado ao interlocutor, em registro informal. Não equivale a todo uso de futuro.')],
 [e('함께해줘','fique comigo; esteja junto de mim','함께하다 + -여 주다 → 함께해 주다; 줘 é a forma informal de 주다.','O auxiliar -아/어 주다 apresenta a ação como um favor. A grafia junta da letra foi preservada.'),
 e('나의','meu; minha','나 + 의, partícula possessiva.','Modifica o inglês worst day: meu pior dia. Não é uma partícula de objeto.')],
 [e('널','você (objeto)','Contração de 너를.','Marca a pessoa que recebe o abraço.'),
 e('더','mais','Advérbio de acréscimo ou intensidade.','Aqui aumenta a força do abraço.'),
 e('세게','forte; com força','세다, ser forte, recebe -게 para indicar o modo da ação.','Não é o verbo 세다 de contar números; o contexto do abraço seleciona força.'),
 e('안을게','vou abraçar','안다 + -을게: 안- + -을게 → 안을게.','A raiz termina em ㄴ e recebe -을게. É um compromisso informal, não uma ordem para a outra pessoa abraçar.')]
];
function chorus(n:number):StudyLine[]{
 const first=n===1?'':n===3?' (yeah, yeah)':' (갈라놓을 때)';
 const second=n===1?'':n===2?' (걸음 더 다가설게)':' (더 다가설게)';
 return [
 l('Baby, oh, please'+(n===4?' (please)':'')+', 세상이 우릴 갈라놓을 때'+first,'Amor, por favor, quando o mundo nos separar…'+(n===2||n===4?' (quando nos separar).':n===3?' (sim, sim).':''),refrainEntries[0]),
 l('Baby, oh, please'+(n===3?' (oh, please)':'')+', 한 걸음 더 다가설게'+second,'Amor, por favor, vou dar mais um passo para perto de você.'+(n>1?' (Vou me aproximar mais.)':''),refrainEntries[1]),
 l("I'm on my knees"+(n===2||n===4?' (on my knees)':'')+', 함께해줘 나의 worst day'+(n===2?' (ay)':n===3?' (나의 worst, worst day)':''),'Estou de joelhos, fique comigo no meu pior dia.'+(n===3?' (No meu pior, pior dia.)':n===2?' (ay)':''),refrainEntries[2]),
 l("널 더 세게 안을게 right now, even hell, I'm down",'Vou te abraçar mais forte agora mesmo; até no inferno, eu topo.',refrainEntries[3]),
 en('All I want is you','Tudo que eu quero é você.')
 ];
}
const verse=[
 l('네가 있는 곳이라면 나 따라가리','Se for onde você está, eu seguirei você.',[
  e('네가','você (sujeito)','너 com a partícula de sujeito 가 aparece como 네가.','Não é aqui 내가, eu como sujeito, nem o possessivo 네, seu.'),
  e('있는','onde há; em que está','있다 recebe -는 para modificar 곳.','네가 있는 곳 forma um grupo nominal: o lugar onde você está.'),
  e('곳이라면','se for um lugar','곳 + 이다 + -라면 → 곳이라면.','O conjunto põe como condição ser o lugar em que a pessoa está, sem limitar a um endereço específico.'),
  e('나','eu','Pronome informal, aqui sem partícula expressa.','É o sujeito da promessa de seguir.'),
  e('따라가리','seguirei','따라가다, seguir alguém, com -(으)리 em tom literário ou solene.','Aqui expressa determinação do narrador; não é a forma cotidiana educada 따라갈게요.')
 ]),
 l('가시밭길쯤은 나 쉽게 즈려밟지','Um caminho de espinhos desses, eu piso e atravesso com facilidade.',[
  e('가시밭길쯤은','quanto a um mero caminho de espinhos','가시밭길 é um caminho cheio de espinhos, também imagem de sofrimento; 쯤 relativiza sua importância e 은 marca tópico.','Não se trata de uma medida exata. A combinação minimiza o obstáculo em contraste com a determinação de seguir.'),
  e('나','eu','Pronome informal sem partícula explícita.','Retoma o sujeito da ação que vem depois.'),
  e('쉽게','facilmente','쉽다 + -게 forma um advérbio de modo.','O ㅂ permanece diante da consoante ㄱ; compare 쉬운, em que há alternância diante de vogal.'),
  e('즈려밟지','piso firmemente; atravesso pisando','즈려밟다 é uma forma de registro poético associada a pisar com força; a forma padrão de referência é 지르밟다.','-지 dá tom afirmativo ou de convicção. A letra foi preservada, sem apresentar essa grafia como modelo neutro de escrita cotidiana.')
 ]),
 l('세상은 말야 항상 우리 사이를 막지','O mundo, sabe, sempre se põe entre nós.',[
  e('세상은','quanto ao mundo','세상 + 은, partícula de tópico.','Agora o mundo é apresentado como assunto, em vez de receber o 이 do refrão.'),
  e('말야','sabe; veja bem','Redução coloquial de 말이야.','Funciona como marca de conversa ou ênfase; não é aqui a ordem “fale”.'),
  e('항상','sempre','Advérbio de frequência.','Apresenta os obstáculos como recorrentes na experiência descrita.'),
  e('우리','nós; nosso','Pronome de primeira pessoa do plural.','Com 사이, forma 우리 사이, o espaço ou a relação entre nós.'),
  e('사이를','o espaço/relação entre nós (objeto)','사이 indica entremeio ou relação; 를 marca objeto.','Com 막다, a imagem é de criar uma barreira entre as pessoas.'),
  e('막지','bloqueia; impede','막다 + -지.','A terminação reforça uma constatação; não é negação, pois não há 않다 nem uma proibição com 말다.')
 ]),
 l('결국엔 우린 돌고 돌아서 제자리','No fim, damos voltas e mais voltas e voltamos ao mesmo lugar.',[
  e('결국엔','no fim; afinal','결국에 + 는 se contrai em 결국엔.','Marca o resultado final depois dos obstáculos.'),
  e('우린','nós (tópico)','Contração de 우리는.','Compare 우릴 no refrão: 는 marca tópico, 를 marca objeto.'),
  e('돌고','girando e; dando voltas e','돌다 + -고 conecta ações.','A repetição 돌고 돌아서 enfatiza o percurso cheio de voltas.'),
  e('돌아서','depois de dar voltas; dando a volta','돌다 + -아서 → 돌아서.','O contexto repetitivo favorece dar voltas e retornar; não é necessário interpretar como virar as costas à pessoa.'),
  e('제자리','o mesmo lugar; lugar de origem','Substantivo que indica o lugar original ou devido.','O verso omite um verbo final explícito. “Voltamos” torna a tradução natural, mas é uma reconstrução contextual.')
 ])
];
const second=[
 l('나 기쁨을 느꼈다면, 너에게 오직','Se senti alegria, foi só com você.',[
  e('나','eu','Pronome informal sem partícula expressa.','É a pessoa que relata ter sentido alegria.'),
  e('기쁨을','alegria (objeto)','기쁨 é alegria; 을 marca o objeto de 느끼다.','A palavra se relaciona ao descritivo 기쁘다, estar feliz, mas aqui funciona como substantivo.'),
  e('느꼈다면','se senti; se tiver sentido','느끼다 + -었- → 느꼈-; -다면 introduz condição ou hipótese.','A tradução mantém o caráter condicional; não é uma simples declaração de passado.'),
  e('너에게','a você; em relação a você','너 + 에게 marca um destinatário ou referência pessoal.','A ligação da expressão ao sentimento está elíptica. “Foi só com você” é uma leitura contextual do fragmento, não uma tradução literal da partícula.'),
  e('오직','somente; exclusivamente','Advérbio de restrição.','A posição final dá ênfase, embora a ordem seja poética e a oração esteja incompleta.')
 ]),
 l('봐, 내 잔이 넘치니, come and get a sip','Olhe, meu cálice transborda; venha tomar um gole.',[
  e('봐','olhe; veja','보다 + -아 → 봐, forma informal.','Aqui funciona como chamado para observar, não como um substantivo.'),
  e('내','meu','Contração de 나의.','Modifica 잔; a posse está explícita.'),
  e('잔이','o copo/cálice (sujeito)','잔 é um recipiente para beber; 이 marca sujeito após consoante.','“Cálice” é uma escolha poética de tradução; a palavra também pode ser copo ou taça.'),
  e('넘치니','já que transborda; transbordando','넘치다 + -니 liga a situação ao convite seguinte.','Aqui a leitura é causal ou de contexto: como transborda, venha beber. Não é uma pergunta terminada em -니?')
 ]),
 l('Yeah, 염원하며 영원히 서로의 영혼이','Sim, desejando profundamente, para sempre, as almas um do outro…',[
  e('염원하며','desejando ardentemente','염원하다 + -며 conecta uma ação simultânea ou associada.','É um desejo intenso, de registro mais solene que simplesmente 원하다. Seu objeto não está expresso nesta palavra.'),
  e('영원히','eternamente; para sempre','Advérbio de duração sem fim.','A semelhança sonora com 염원하며 e 영혼 cria um efeito de repetição; isso não torna as palavras sinônimas.'),
  e('서로의','um do outro; recíprocas','서로 indica reciprocidade; 의 liga essa ideia ao nome seguinte.','Qualifica 영혼; não é equivalente ao pronome “eu”.'),
  e('영혼이','a alma/as almas (sujeito)','영혼 é alma; 이 marca sujeito. O plural é recuperado da reciprocidade.','O verso suspende a oração. A continuação muda para uma vontade em primeira pessoa; a análise preserva essa liberdade poética, sem tratá-la como uma oração regular única.')
 ]),
 l('그대 안에 기댈래, baby, baby, please','Quero me apoiar em você, amor, amor, por favor.',[
  e('그대','você (tratamento poético)','Pronome de segunda pessoa frequente em canções e poesia.','Não é simplesmente uma forma honorífica que substitua qualquer “você” em conversas cotidianas.'),
  e('안에','dentro de; no interior de','안 + 에 indica localização.','그대 안에 significa literalmente dentro de você; apoiar-se emocionalmente na pessoa é uma interpretação da imagem.'),
  e('기댈래','quero me apoiar; vou me apoiar','기대다, apoiar-se, recebe -(으)ㄹ래 → 기댈래.','Expressa vontade ou escolha em registro informal. Não confundir 기대다 com 기대하다, esperar/ter expectativas.')
 ])
];
const pre=()=>[en('You and me just all day, all night','Você e eu, o dia todo, a noite toda.'),en('Hug me from the front, back, left, right','Me abrace pela frente, por trás, pela esquerda, pela direita.'),en('I need you like, oh, me, oh, my','Preciso de você, ah, meu Deus.'),en('Oh, you got me, oh, you got me like','Oh, você me deixa, oh, você me deixa assim…')];
const post=(last=false)=>[
 en("If you wanna, if you wanna, I'll do that thing for ya (ay)",'Se você quiser, se quiser, faço isso por você (ay).'),
 en("If you wanna, if you wanna, I'll do a thing for ya",'Se você quiser, se quiser, faço algo por você.'),
 en("If you wanna, if you wanna, I'll do that thing for ya",'Se você quiser, se quiser, faço isso por você.'),
 en(last?'If you wanna, if you wanna':"If you wanna, if you wanna, I'll do a thing- (whoo)",last?'Se você quiser, se quiser.':'Se você quiser, se quiser, faço algo… (whoo).')
];
export const pleaseSections:{title:string;lines:StudyLine[]}[]=[
 {title:"Abertura",lines:[en("If you wanna, if you wanna, I'll do that thing for ya",'Se você quiser, se quiser, faço isso por você.'),en('If you wanna, if you wanna','Se você quiser, se quiser.')]},
 {title:"Refrão",lines:chorus(1)},
 {title:"Verso 1",lines:verse},
 {title:"Pré-refrão",lines:pre()},
 {title:"Refrão",lines:chorus(2)},
 {title:"Pós-refrão",lines:post()},
 {title:"Verso 2",lines:second},
 {title:"Pré-refrão",lines:pre()},
 {title:"Refrão",lines:chorus(3)},
 {title:"Pós-refrão",lines:post(true)},
 {title:"Refrão",lines:chorus(4)}
];
export const pleaseVocabulary={verbs:[
 {ko:'갈라놓다',pt:'separar; afastar pessoas'},{ko:'다가서다',pt:'aproximar-se'},{ko:'함께하다',pt:'estar junto; compartilhar'},{ko:'주다',pt:'dar; fazer algo por alguém (auxiliar)'},{ko:'세다',pt:'ser forte (descritivo)'},{ko:'안다',pt:'abraçar'},{ko:'있다',pt:'estar; existir'},
 {ko:'따라가다',pt:'seguir; ir atrás de alguém'},{ko:'쉽다',pt:'ser fácil (descritivo)'},{ko:'지르밟다',pt:'pisar com força; relacionado à forma poética 즈려밟다'},{ko:'막다',pt:'bloquear; impedir'},{ko:'돌다',pt:'girar; dar voltas'},{ko:'느끼다',pt:'sentir'},{ko:'보다',pt:'ver; olhar'},{ko:'넘치다',pt:'transbordar'},{ko:'염원하다',pt:'desejar ardentemente'},{ko:'기대다',pt:'apoiar-se; encostar-se'}
 ],nouns:[{ko:'세상',pt:'mundo'},{ko:'때',pt:'momento; ocasião (dependente)'},{ko:'걸음',pt:'passo'},{ko:'곳',pt:'lugar'},{ko:'가시밭길',pt:'caminho de espinhos; caminho de dificuldades'},{ko:'사이',pt:'espaço entre; relação'},{ko:'제자리',pt:'lugar de origem; mesmo lugar'},{ko:'기쁨',pt:'alegria'},{ko:'잔',pt:'copo; taça; cálice'},{ko:'영혼',pt:'alma'},{ko:'안',pt:'interior; parte de dentro'}]};
