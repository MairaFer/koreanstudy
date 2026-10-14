// Life Goes On — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Abertura — o mundo parou sem aviso.
const opening=[
 en('I remember, oh, ayy-yeah-yeah-yeah', 'Eu me lembro, oh.'),
 en('I remember, oh-oh-oh, oh-oh-oh', 'Eu me lembro, oh.'),
 line('어느 날 세상이 멈췄어, 아무런 예고도 하나 없이', 'Um dia o mundo parou, sem nenhum aviso.', [
  e('어느 날', 'um dia', ['어느 = certo, algum', '날 = dia']),
  e('세상이 멈췄어', 'o mundo parou', ['세상 = mundo', '멈추다 = parar', '-었어 = passado']),
  e('아무런 예고도 하나 없이', 'sem nenhum aviso', ['예고 = aviso prévio', '도 = também', '없이 = sem'])]),
 line('봄은 기다림을 몰라서, 눈치 없이 와버렸어', 'A primavera não conhece espera e veio sem perceber.', [
  e('봄은', 'a primavera (tópico)', ['봄 = primavera', '은 = tópico']),
  e('기다림을 몰라서', 'por não conhecer espera', ['기다림 = espera', '모르다 = não saber', '-아서 = porque']),
  e('눈치 없이 와버렸어', 'veio sem tato', ['눈치 = tato', '오다 = vir', '-아 버리다 = acabar'])]),
 line('발자국이 지워진 거리, 여기 넘어져 있는 나', 'Rua com pegadas apagadas, eu caído aqui.', [
  e('발자국이 지워진', 'com pegadas apagadas', ['발자국 = pegada', '지우다 = apagar', '-진 = relativo passado']),
  e('거리', 'rua', ['O espaço vazio']),
  e('여기 넘어져 있는 나', 'eu caído aqui', ['넘어지다 = cair', '-어 있다 = estado'])]),
 line('혼자 가네 시간이, 미안해 말도 없이, yeah', 'O tempo vai sozinho, desculpa, sem dizer nada.', [
  e('혼자 가네 시간이', 'o tempo vai sozinho', ['혼자 = sozinho', '가다 = ir', '-네 = constatação']),
  e('미안해 말도 없이', 'desculpa, sem dizer nada', ['미안하다 = sentir muito', '말 = palavra', '없이 = sem'])]),
 line('오늘도 비가 내릴 것 같아', 'Hoje também parece que vai chover.', [
  e('오늘도', 'hoje também', ['오늘 = hoje', '도 = também']),
  e('비가 내릴 것 같아', 'parece que vai chover', ['비 = chuva', '내리다 = cair', '-ㄹ 것 같다 = parecer'])]),
 line('흠뻑 젖어버렸네, 아직도 멈추질 않아', 'Fiquei encharcado, ainda não para.', [
  e('흠뻑 젖어버렸네', 'fiquei encharcado', ['흠뻑 = por completo', '젖다 = molhar', '-어 버리다 = acabar', '-네 = constatação']),
  e('아직도 멈추질 않아', 'ainda não para', ['아직 = ainda', '멈추다 = parar', '-지 않다 = não'])]),
 line('저 먹구름보다 빨리 달려가', 'Corro mais rápido que aquela nuvem escura.', [
  e('저 먹구름보다', 'que aquela nuvem escura', ['먹구름 = nuvem de chuva', '보다 = que']),
  e('빨리 달려가', 'corro rápido', ['빨리 = rápido', '달려가다 = ir correndo'])]),
 line('그럼 될 줄 알았는데, 나 겨우 사람인가 봐', 'Achei que ia dar certo, acho que sou só humano.', [
  e('그럼 될 줄 알았는데', 'achei que ia dar certo', ['되다 = dar certo', '-ㄹ 줄 알다 = achar que', '-는데 = mas']),
  e('나 겨우 사람인가 봐', 'acho que sou só humano', ['겨우 = apenas', '인가 봐 = acho que'])]),
 line('몹시 아프네, 세상이란 놈이 준 감기', 'Dói muito, o resfriado que esse tal mundo deu.', [
  e('몹시 아프네', 'dói muito', ['몹시 = muito', '아프다 = doer', '-네 = constatação']),
  e('세상이란 놈이 준 감기', 'o resfriado que esse mundo deu', ['놈 = cara', '주다 = dar', '감기 = resfriado'])]),
 line('덕분에 눌러보는 먼지 쌓인 되감기', 'Graças a isso aperto o rebobinar empoeirado.', [
  e('덕분에', 'graças a isso', ['덕분 = graças', '에 = a']),
  e('눌러보는', 'que aperto para ver', ['누르다 = apertar', '-어 보다 = tentar']),
  e('먼지 쌓인 되감기', 'rebobinar empoeirado', ['먼지 = poeira', '쌓이다 = acumular', '되감기 = rebobinar'])]),
 line('넘어진 채 청하는 엇박자의 춤', 'Caído, peço uma dança fora do ritmo.', [
  e('넘어진 채', 'caído', ['넘어지다 = cair', '-ㄴ 채 = no estado de']),
  e('청하는', 'que peço', ['청하다 = pedir', '-는 = relativo']),
  e('엇박자의 춤', 'dança fora do ritmo', ['엇박자 = contratempo', '춤 = dança'])]),
 line('겨울이 오면 내쉬자 더 뜨거운 숨', 'Quando o inverno vier, vamos soltar um sopro mais quente.', [
  e('겨울이 오면', 'quando o inverno vier', ['겨울 = inverno', '오다 = vir', '-면 = quando']),
  e('내쉬자', 'vamos soltar', ['내쉬다 = expirar', '-자 = vamos']),
  e('더 뜨거운 숨', 'um sopro mais quente', ['뜨겁다 = ser quente', '숨 = sopro'])])];
// Refrão — eco, flecha e vida que segue.
const chorus=[
 line('끝이 보이지 않아, 출구가 있긴 할까?', 'Não vejo o fim, será que há saída.', [
  e('끝이 보이지 않아', 'não vejo o fim', ['끝 = fim', '보이다 = ser visto', '-지 않다 = não']),
  e('출구가 있긴 할까?', 'será que há saída', ['출구 = saída', '있다 = haver', '-ㄹ까 = será'])]),
 line('발이 떼지질 않아, 않아, oh', 'O pé não desgruda, não, oh.', [
  e('발이 떼지질 않아', 'o pé não desgruda', ['발 = pé', '떼다 = soltar', '떼지질 contrai 떼어지질: não se solta'])]),
 line('잠시 두 눈을 감아, 여기 내 손을 잡아', 'Feche os olhos um instante, segure minha mão aqui.', [
  e('잠시', 'por um instante', ['Advérbio de pausa']),
  e('두 눈을 감아', 'feche os olhos', ['눈 = olho', '감다 = fechar', '아 forma de pedido']),
  e('여기 내 손을 잡아', 'segure minha mão aqui', ['손 = mão', '잡다 = segurar'])]),
 line('저 미래로 달아나자', 'Vamos fugir para aquele futuro.', [
  e('저 미래로', 'para aquele futuro', ['미래 = futuro', '로 = para']),
  e('달아나자', 'vamos fugir', ['달아나다 = fugir', '-자 = vamos'])]),
 en('Like an echo in the forest', 'Como um eco na floresta.'),
 line('하루가 돌아오겠지', 'O dia vai voltar.', [
  e('하루가', 'o dia (sujeito)', ['하루 = um dia', '가 = sujeito']),
  e('돌아오겠지', 'vai voltar', ['돌아오다 = voltar', '-겠- = futuro', '-지 = né'])]),
 line('아무 일도 없단 듯이', 'Como se nada tivesse acontecido.', [
  e('아무 일도', 'nada', ['아무 = nenhum', '일 = fato', '도 = também']),
  e('없단 듯이', 'como se não houvesse', ['없다 = não haver', '-단 듯이 = como se'])]),
 en('Yeah, life goes on', 'É, a vida segue.'),
 en('Like an arrow in the blue sky', 'Como flecha no céu azul.'),
 line('또 하루 더 날아가지', 'Mais um dia voa.', [
  e('또 하루 더', 'mais um dia', ['또 = de novo', '더 = mais']),
  e('날아가지', 'voa', ['날아가다 = voar para longe', '-지 confirmação'])]),
 en('On my pillow, on my table', 'No meu travesseiro, na minha mesa.'),
 en('Yeah, life goes on like this again', 'É, a vida segue assim de novo.')];
// Verso 2 — o nós que não mudou.
const verse=[
 line('이 음악을 빌려 너에게 나 전할게 (ayy)', 'Empresto esta música para te dizer.', [
  e('이 음악을 빌려', 'empresto esta música', ['음악 = música', '빌리다 = emprestar', '려 forma de finalidade']),
  e('너에게 나 전할게', 'vou te transmitir', ['전하다 = transmitir', '-ㄹ게 = promessa'])]),
 line('사람들은 말해 세상이 다 변했대 (yo)', 'Dizem que o mundo mudou todo.', [
  e('사람들은 말해', 'as pessoas dizem', ['사람 = pessoa', '들 = plural', '말하다 = dizer']),
  e('세상이 다 변했대', 'que o mundo mudou todo', ['변하다 = mudar', '-었대 = dizem que'])]),
 en('Mmm-mmm-mmm-mmm', 'Mmm-mmm-mmm-mmm.'),
 line('다행히도 우리 사이는 아직 여태 안 변했네', 'Por sorte, o nosso nós ainda não mudou.', [
  e('다행히도', 'por sorte', ['다행 = sorte', '히 = modo', '도 = também']),
  e('우리 사이는', 'o nosso nós (tópico)', ['사이 = relação', '는 = tópico']),
  e('아직 여태 안 변했네', 'ainda não mudou', ['아직 = ainda', '변하다 = mudar', '-네 = constatação'])]),
 line('늘 하던 시작과 끝 안녕이란 말로', 'Com o de sempre oi e tchau de começo e fim.', [
  e('늘 하던', 'que sempre fazíamos', ['늘 = sempre', '-던 = lembrança']),
  e('시작과 끝', 'começo e fim', ['시작 = começo', '끝 = fim', '과 = e']),
  e('안녕이란 말로', 'com a palavra oi', ['안녕 = oi, tchau', '-이란 = chamado', '말 = palavra'])]),
 line('오늘과 내일을 또 함께 이어보자고', 'Vamos ligar hoje e amanhã juntos de novo.', [
  e('오늘과 내일을', 'hoje e amanhã (objeto)', ['오늘 = hoje', '내일 = amanhã', '을 = objeto']),
  e('또 함께 이어보자고', 'vamos ligar juntos de novo', ['함께 = juntos', '잇다 = ligar', '-어 보자 = vamos tentar'])]),
 en('Ooh-ooh-ooh-ooh-ooh-ah', 'Ooh-ooh-ooh-ooh-ooh-ah.'),
 line('멈춰있지만 어둠에 숨지 마, 빛은 또 떠오르니깐', 'Parado, mas não se esconda no escuro, pois a luz nasce de novo.', [
  e('멈춰있지만', 'parado, mas', ['멈추다 = parar', '-어 있다 = estado', '-지만 = mas']),
  e('어둠에 숨지 마', 'não se esconda no escuro', ['어둠 = escuridão', '숨다 = esconder-se', '-지 마 = não']),
  e('빛은 또 떠오르니깐', 'pois a luz nasce de novo', ['빛 = luz', '떠오르다 = nascer', '-니깐 = pois'])]),
 line('또 하루 더 날아가지 (날아가지)', 'Mais um dia voa.', [
  e('또 하루 더 날아가지', 'mais um dia voa', ['Reprise com eco vocal'])]),
 en('I remember, oh, ayy-yeah-yeah-yeah', 'Eu me lembro, oh.'),
 en('I remember, oh-oh-oh, oh-oh-oh', 'Eu me lembro, oh.'),
 en('I remember, oh, ayy-yeah-yeah-yeah', 'Eu me lembro, oh.'),
 en('I remember, oh-oh-oh, oh-oh-oh', 'Eu me lembro, oh.')];
export const lgoSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Abertura',lines:opening},
 {title:'Refrão',lines:chorus},
 {title:'Verso 2',lines:verse},
 {title:'Refrão',lines:chorus}];
export const lgoVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'멈추다',pt:'parar'},
  {ko:'모르다',pt:'não saber'},
  {ko:'오다',pt:'vir'},
  {ko:'지우다',pt:'apagar'},
  {ko:'넘어지다',pt:'cair'},
  {ko:'가다',pt:'ir'},
  {ko:'내리다',pt:'cair (chuva, neve)'},
  {ko:'젖다',pt:'molhar-se'},
  {ko:'달려가다',pt:'ir correndo'},
  {ko:'되다',pt:'tornar-se; dar certo'},
  {ko:'아프다',pt:'doer (descritivo)'},
  {ko:'주다',pt:'dar'},
  {ko:'누르다',pt:'apertar'},
  {ko:'쌓이다',pt:'acumular-se'},
  {ko:'청하다',pt:'pedir'},
  {ko:'내쉬다',pt:'expirar, soltar o ar'},
  {ko:'뜨겁다',pt:'ser quente (descritivo)'},
  {ko:'보이다',pt:'ser visto'},
  {ko:'있다',pt:'haver, existir'},
  {ko:'떼다',pt:'soltar, desgrudar'},
  {ko:'감다',pt:'fechar'},
  {ko:'잡다',pt:'segurar'},
  {ko:'달아나다',pt:'fugir'},
  {ko:'돌아오다',pt:'voltar'},
  {ko:'없다',pt:'não haver'},
  {ko:'날아가다',pt:'voar para longe'},
  {ko:'빌리다',pt:'emprestar'},
  {ko:'전하다',pt:'transmitir'},
  {ko:'말하다',pt:'dizer'},
  {ko:'변하다',pt:'mudar'},
  {ko:'잇다',pt:'ligar, conectar'},
  {ko:'숨다',pt:'esconder-se'},
  {ko:'떠오르다',pt:'nascer (sol, luz)'}],
 nouns:[
  {ko:'날',pt:'dia'},
  {ko:'세상',pt:'mundo'},
  {ko:'예고',pt:'aviso prévio'},
  {ko:'봄',pt:'primavera'},
  {ko:'기다림',pt:'espera'},
  {ko:'눈치',pt:'tato, percepção'},
  {ko:'발자국',pt:'pegada'},
  {ko:'거리',pt:'rua'},
  {ko:'시간',pt:'tempo'},
  {ko:'말',pt:'palavra'},
  {ko:'비',pt:'chuva'},
  {ko:'먹구름',pt:'nuvem de chuva'},
  {ko:'감기',pt:'resfriado'},
  {ko:'놈',pt:'cara (informal)'},
  {ko:'덕분',pt:'graças'},
  {ko:'먼지',pt:'poeira'},
  {ko:'되감기',pt:'rebobinar'},
  {ko:'엇박자',pt:'contratempo'},
  {ko:'춤',pt:'dança'},
  {ko:'겨울',pt:'inverno'},
  {ko:'숨',pt:'sopro, respiração'},
  {ko:'끝',pt:'fim'},
  {ko:'출구',pt:'saída'},
  {ko:'발',pt:'pé'},
  {ko:'눈',pt:'olho'},
  {ko:'손',pt:'mão'},
  {ko:'미래',pt:'futuro'},
  {ko:'하루',pt:'um dia'},
  {ko:'일',pt:'fato, assunto'},
  {ko:'음악',pt:'música'},
  {ko:'사람',pt:'pessoa'},
  {ko:'다행',pt:'sorte'},
  {ko:'사이',pt:'relação'},
  {ko:'시작',pt:'começo'},
  {ko:'안녕',pt:'oi; tchau'},
  {ko:'오늘',pt:'hoje'},
  {ko:'내일',pt:'amanhã'},
  {ko:'함께',pt:'companhia; juntos'},
  {ko:'어둠',pt:'escuridão'},
  {ko:'빛',pt:'luz'}]};