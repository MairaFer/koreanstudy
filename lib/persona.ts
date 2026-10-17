// Intro: Persona — estudo detalhado da letra enviada.
// Linhas em coreano recebem entradas termo a termo; linhas em inglês recebem só a tradução.
import type {StudyLine,StudyEntry} from './spring-day';
const line=(text:string,translation:string,entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const e=(term:string,meaning:string,notes?:string[],card?:string):StudyEntry=>({term,meaning,notes,card});

// Pergunta — quem sou eu?
const opening=[
 line('Yo 나는 누구인가 평생 물어온 질문', 'Yo, quem sou eu? A pergunta feita a vida toda.', [
  e('나는 누구인가', 'quem sou eu', ['나는 eu tópico', '누구 quem', '인가 forma interrogativa']),
  e('평생 물어온 질문', 'pergunta feita a vida inteira', ['평생 vida inteira', '물어오다 perguntar (vindo)', '질문 pergunta'])]),
 line('아마 평생 정답은 찾지 못할 그 질문', 'Talvez a resposta não se ache a vida toda, essa pergunta.', [
  e('아마', 'talvez', ['Advérbio de dúvida', 'Frequentemente usado em conjectura']),
  e('평생 정답은', 'a resposta da vida inteira', ['정답 = resposta', '은 = tópico']),
  e('찾지 못할', 'não achará', ['찾다 = achar', '지 못할 = negação com possibilidade']),
  e('그 질문', 'essa pergunta', ['그 = aquele, demonstrativo', '질문 = pergunta'])]),
 line('나란 놈을 고작 말 몇 개로 답할 수 있었다면', 'Se eu, esse cara, pudesse responder com só algumas palavras.', [
  e('나란 놈을', 'eu esse cara (objeto)', ['나란 = eu chamado', '놈 = cara', '을 = objeto']),
  e('고작 말 몇 개로', 'com só algumas palavras', ['고작 = só, apenas', '말 = palavra', '몇 = quantos', '개 = contador']),
  e('답할 수 있었다면', 'se pudesse responder', ['답하다 = responder', 'ㄹ 수 있다 = poder', '면 = se'])]),
 line('신께서 그 수많은 아름다움을 다 만드시진 않았겠지', 'Deus não criaria tanta beleza assim.', [
  e('신께서', 'Deus (tópico honorífico)', ['신 = deus', '께서 = honorífico do sujeito']),
  e('그 수많은 아름다움을', 'tanta beleza', ['수많다 = ser numeroso', '아름다움 = beleza', '을 = objeto']),
  e('다 만드시진 않았겠지', 'não criaria tudo', ['다 = tudo', '만들다 = criar', '시 honorífico', '않았겠지 = não teria feito'])]),
 line('How you feel? 지금 기분이 어때?', 'Como você se sente? Como está seu humor agora?', [
  e('지금', 'agora', ['Advérbio de tempo', 'Equivalente a 이제 no sentido de momento presente']),
  e('기분이 어때?', 'como está o humor?', ['기분 = humor', '이 = sujeito', '어때 = como está'])]),
 line('사실 난 너무 좋아, 근데 조금 불편해', 'Na verdade estou ótimo, mas um pouco desconfortável.', [
  e('사실 난', 'na verdade eu', ['사실 = na verdade', '난 = 나는 contraído']),
  e('너무 좋아', 'ótimo demais', ['너무 = demais', '좋다 = ser bom']),
  e('근데 조금 불편해', 'mas um pouco desconfortável', ['근데 = mas', '조금 = um pouco', '불편하다 = ser desconfortável'])]),
 line('나는 내가 개인지 돼진지 뭔지도 아직 잘 모르겠는데', 'Se sou um cão ou um porco, o que sou, ainda não sei bem.', [
  e('나는 내가', 'eu o meu eu', ['Reprise enfática de 나는', '내가 = eu como sujeito']),
  e('개인지 돼진지', 'se sou um cão ou um porco', ['개 = cão; 돼지 = porco; -인지 forma pergunta indireta: se é. A letra reduz 돼지인지 a 돼진지.']),
  e('뭔지도 아직 잘 모르겠는데', 'o que é ainda não sei bem', ['무슨 o que', '도 também', '아직 = ainda', '모르다 = não saber'])]),
 line('남들이 와서 진주목걸일 거네', 'Os outros vêm e penduram em mim um colar de pérolas.', [
  e('남들이 와서', 'os outros vêm', ['남들 = os outros', '와서 = vindo e']),
  e('진주목걸일 거네', 'penduram um colar de pérolas', ['진주목걸일 reduz 진주목걸이를, colar de pérolas + objeto. 거네 vem de 걸다, pendurar, com -네; o ㄹ cai antes de ㄴ. Aqui não é uma previsão com -(으)ㄹ 거.'])]),
 line('칵 퉤', 'Cof cof.', [
  e('칵', 'som de tossir', ['Onomatopeia de tosse', 'Só aparece na letra como efeito sonoro']),
  e('퉤', 'som de cuspir', ['Onomatopeia acompanhando a tosse', 'Par de 칵 퉤 imita tossir'])])];
// Verso — as vozes que cobram e a sombra.
const verse=[
 line('예전보단 자주 웃어', 'Sorrio mais do que antes.', [
  e('예전보단', 'do que antes', ['예전 = antes', '보다 = do que', 'ㄴ contrai 은']),
  e('자주 웃어', 'sorrio frequentemente', ['자주 = frequentemente', '웃다 = sorrir'])]),
 line('소원했던 superhero', 'O super-herói desejado.', [
  e('소원했던', 'desejado', ['소원 = desejo', '던 = partícula de memória']),
  e('superhero', 'super-herói em inglês na letra', ['O super-herói que ele quis ser', 'Empréstimo do inglês mantido na fala'])]),
 line('이젠 진짜 된 것 같어', 'Agora parece que virou de verdade.', [
  e('이젠 진짜', 'agora de verdade', ['이제 = agora', '진짜 = de verdade']),
  e('된 것 같어', 'parece que virou', ['되다 = virar', '것 = coisa', '같다 = parecer'])]),
 line('근데 갈수록 뭔 말들이 많어', 'Mas cada vez mais falas, cada vez mais.', [
  e('근데', 'mas', ['Conjunção coloquial', 'Forma falada de 그러나']),
  e('갈수록', 'cada vez mais', ['가다 = ir', '수록 = quanto mais']),
  e('뭔 말들이 많어', 'há muitas falas', ['무슨 = que', '말 = palavra', '들 = plural', '많다 = ser muito'])]),
 line('누군 달리라고 누군 멈춰서라 해', 'Uns mandam correr, outros parar.', [
  e('누군 달리라고', 'uns mandam correr', ['누구 = quem', '달리다 = correr', '라고 = discurso relatado']),
  e('누군 멈춰서라 해', 'outros mandam parar', ['멈추다 = parar', '아서라 해 = manda ficar parado'])]),
 line('얘는 숲을 보라고 걔는 들꽃을 보라 해', 'Esse manda ver a floresta, aquele a flor do campo.', [
  e('얘는 숲을 보라고', 'esse manda ver a floresta', ['얘 = este', '숲 = floresta', '보다 = ver']),
  e('걔는 들꽃을 보라 해', 'aquele manda ver a flor do campo', ['걔 = aquele (informal)', '들꽃 = flor do campo'])]),
 line('내 그림자, 나는 망설임이라 쓰고 불렀네', 'Minha sombra, escrevi e chamei de hesitação.', [
  e('내 그림자', 'minha sombra', ['그림자 = sombra', '내 = meu']),
  e('나는 망설임이라', 'chamei de hesitação', ['망설임 = hesitação', '이라 = chamado como']),
  e('쓰고 불렀네', 'escrevi e chami', ['쓰다 = escrever', '부르다 = chamar'])]),
 line('걘 그게 되고 나서 망설인 적이 없었네', 'Aquele nunca hesitou depois de virar isso.', [
  e('걘 그게', 'aquele isso', ['걔 = aquele (informal)', '그게 = aquilo, isso']),
  e('되고 나서', 'depois de virar', ['되다 = virar', '고 나서 = depois de']),
  e('망설인 적이 없었네', 'nunca hesitou', ['망설이다 = hesitar', '적 = vez', '없다 = não haver'])]),
 line('무대 아래든 아님 조명 아래든 자꾸 나타나', 'Debaixo do palco ou da luz, sempre aparece.', [
  e('무대 아래든', 'debaixo do palco', ['무대 = palco', '아래 = embaixo', '든 = quer que seja']),
  e('아님 조명 아래든', 'ou embaixo da luz', ['아니면 = ou', '조명 = luz']),
  e('자꾸 나타나', 'sempre aparece', ['자꾸 = sempre', '나타나다 = aparecer'])]),
 line('아지랑이처럼 뜨겁게 자꾸 날 노려보네 (oh, shit)', 'Como miragem quente, sempre me encara.', [
  e('아지랑이처럼', 'como miragem', ['아지랑이 = miragem', '처럼 = como']),
  e('뜨겁게 자꾸', 'quentemente sempre', ['뜨겁다 = ser quente', '게 = modo', '자꾸 = sempre']),
  e('날 노려보네', 'me encara', ['날 = me', '노려보다 = encarar'])])];
// Interrogatório — as dúvidas que voltam.
const refrain=[
 line('야, 이 짓을 왜 시작한 건지 벌써 잊었냐?', 'Ei, já esqueceu por que começou isso?', [
  e('야', 'ei', ['Chamado informal', 'Só entre conhecidos']),
  e('이 짓을 왜', 'por que essa coisa', ['이 = este', '짓 = coisa', '을 = objeto', '왜 = por que']),
  e('시작한 건지', 'o porquê de ter começado', ['시작하다 = começar', '건지 = se é que']),
  e('벌써 잊었냐?', 'já esqueceu?', ['벌써 = já', '잊다 = esquecer'])]),
 line('넌 그냥 들어주는 누가 있단 게 막 좋았던 거야', 'Você gostava de ter alguém só para te ouvir.', [
  e('넌 그냥', 'você só', ['너 = você', '그냥 = só']),
  e('들어주는 누가 있단 게', 'ter alguém que ouve', ['듣다 = ouvir', '누가 = quem', '있단 = que há']),
  e('막 좋았던 거야', 'gostava disso', ['막 = muito', '좋다 = gostar', '던 = memória'])]),
 line('가끔은 그냥 싹 다 헛소리 같아', 'Às vezes parece tudo conversa fiada.', [
  e('가끔은', 'às vezes', ['가끔 = às vezes', '은 = tópico']),
  e('그냥 싹 다', 'tudo de uma vez', ['그냥 = só', '싹 = completamente', '다 = tudo']),
  e('헛소리 같아', 'parece conversa fiada', ['헛소리 = conversa fiada', '같다 = parecer'])]),
 line('취하면 나오는 거 알지? Huh 치기 같아', 'Sabe, sai quando bebo? Huh, parece infantil.', [
  e('취하면 나오는 거', 'o que sai quando bebo', ['취하다 = ficar bêbado', '하면 = se', '나오다 = sair']),
  e('알지?', 'sabe, né?', ['알다 = saber', '지 busca confirmação do ouvinte']),
  e('치기 같아', 'parece infantil', ['치기 = idade infantil', '같다 = parecer'])]),
 line('나 따위가 무슨 music', 'Um como eu, que música?', [
  e('나 따위가', 'um como eu', ['따위 = tipo de', '가 = sujeito']),
  e('무슨 music', 'que música', ['무슨 = que, interrogativo', 'music = empréstimo do inglês'])]),
 line('나 따위가 무슨 truth', 'Um como eu, que verdade?', [
  e('나 따위가', 'um como eu', ['나 = eu', '따위 = tipo de, pejorativo', '가 = sujeito']),
  e('무슨 truth', 'que verdade', ['무슨 = que, interrogativo', 'truth = empréstimo do inglês'])]),
 line('나 따위가 무슨 소명', 'Um como eu, que vocação?', [
  e('나 따위가', 'um como eu', ['Repete o tom pejorativo de si mesmo', '따위 diminui o que vem antes']),
  e('무슨 소명', 'que vocação', ['무슨 = que', '소명 = vocação, chamado'])]),
 line('나 따위가 무슨 muse', 'Um como eu, que musa?', [
  e('나 따위가', 'um como eu', ['Mesma construção das linhas anteriores', 'Sujeito diminuído antes da pergunta']),
  e('무슨 muse', 'que musa', ['무슨 = que', 'muse = empréstimo do inglês'])]),
 line('내가 아는 나의 흠 어쩜 그게 사실 내 전부', 'As falhas que conheço em mim talvez sejam tudo.', [
  e('내가 아는 나의 흠', 'minhas falhas que conheço', ['아다 = saber', '흠 = falha']),
  e('어쩜 그게 사실 내 전부', 'talvez isso seja tudo', ['어쩜 = talvez', '사실 = de fato', '전부 = tudo'])]),
 line('세상은 사실 아무 관심 없어, 나의 서툼', 'O mundo não se importa com minha inaptidão.', [
  e('세상은 사실', 'o mundo de fato', ['세상 = mundo', '사실 = de fato']),
  e('아무 관심 없어', 'não tem interesse nenhum', ['아무 = nenhum', '관심 = interesse', '없다 = não haver']),
  e('나의 서툼', 'minha inaptidão', ['서툼 = inaptidão, falta de jeito', '나의 = meu'])])];
// Carta — as dores que ficam e a pergunta inicial.
const bridge=[
 line('이제 질리지도 않는 후회들과', 'Com arrependimentos que nem enjoam agora.', [
  e('이제', 'agora', ['Advérbio de tempo', 'Também em 이제는 para marcar mudança']),
  e('질리지도 않는', 'que nem enjoam', ['질리다 = enjoar, cansar-se', '지도 = nem sequer', '는 = relativo']),
  e('후회들과', 'e arrependimentos', ['후회 = arrependimento', '들 = plural', '과 = e'])]),
 line('매일 밤 징그럽게 뒹굴고', 'Role noite após noite nojentamente.', [
  e('매일 밤', 'toda noite', ['매일 = todo dia', '밤 = noite']),
  e('징그럽게', 'nojentamente', ['징그럽다 = ser nojento', '게 = modo']),
  e('뒹굴고', 'e rolo', ['뒹굴다 = rolar', '고 conecta as ações'])]),
 line('돌릴 길 없는 시간들을 습관처럼 비틀어도', 'Mesmo torcendo horas sem volta como hábito.', [
  e('돌릴 길 없는', 'sem volta possível', ['돌리다 = girar', '길 = caminho', '없다 = não haver']),
  e('시간들을', 'horas (objeto)', ['시간 = tempo, hora', '들 = plural', '를 = objeto']),
  e('습관처럼 비틀어도', 'mesmo torcendo como hábito', ['습관 = hábito', '처럼 = como', '비틀다 = torcer'])]),
 line('그때마다 날 또 일으켜 세운 것', 'Cada vez ele me levantou de novo.', [
  e('그때마다', 'cada vez', ['그때 = naquele momento', '마다 = cada']),
  e('날 또 일으켜 세운 것', 'me levantou de novo', ['날 = me', '또 = de novo', '일으켜 세우다 = levantar'])]),
 line('최초의 질문', 'A pergunta primeira.', [
  e('최초의 질문', 'a pergunta primeira', ['최초 = primeira', '의 = de'])]),
 line('내 이름 석 자', 'Os três caracteres do meu nome.', [
  e('내 이름', 'meu nome', ['이름 = nome', '내 = meu']),
  e('석 자', 'três caracteres', ['석 = três (sino-coreano)', '자 = caractere'])]),
 line('그 가장 앞에 와야 할 but', 'O but que deveria vir primeiro.', [
  e('그 가장 앞에', 'na frente de tudo', ['가장 = mais', '앞 = frente']),
  e('와야 할', 'que deveria vir', ['오다 = vir', '아야 하다 = dever', '을 = relativo'])]),
 en("So I'm askin' once again yeah", 'Então pergunto mais uma vez, é.'),
 en('Who the hell am I?', 'Quem diabos eu sou?'),
 en('Tell me yall, your names baby', 'Contem, seus nomes, bebê.'),
 en('Do you wanna die?', 'Você quer morrer?'),
 en('Oh, do you wanna go (go)?', 'Oh, você quer ir?'),
 en('Do you wanna fly (fly)?', 'Você quer voar?'),
 en("Where's your soul? Where's your dream?", 'Onde está sua alma? Onde está seu sonho?'),
 en("Do you think you're alive?", 'Você acha que está vivo?'),
 en('Oh, shit', 'Oh, merda.'),
 en('I do not know man', 'Eu não sei, cara.'),
 en('But I know one thing', 'Mas sei de uma coisa.'),
 en('Yeah, my name is R', 'É, meu nome é R.')];
// Os eus — todos os nus que ele veste.
const egos=[
 line('내가 기억하고 사람들이 아는 나', 'O eu que eu lembro e que as pessoas conhecem.', [
  e('내가 기억하고', 'que eu lembro', ['기억하다 = lembrar', '고 = e']),
  e('사람들이 아는 나', 'o eu que as pessoas conhecem', ['사람 = pessoa', '들 = plural', '알다 = saber'])]),
 line('날 토로하기 위해 내가 스스로 만들어낸 나', 'O eu que eu mesmo criei para me desabafar.', [
  e('날 토로하기 위해', 'para me desabafar', ['날 = me', '토로 = desabafo', '위해 = por causa de']),
  e('내가 스스로 만들어낸 나', 'o eu que eu mesmo criei', ['스스로 = por si mesmo', '만들어내다 = criar'])]),
 line('Yeah 난 날 속여왔을지도', 'É, talvez eu tenha me enganado.', [
  e('난 날', 'eu a mim', ['나는 eu tópico', '날 = 나를 contraído']),
  e('속여왔을지도', 'talvez tenha enganado', ['속이다 = enganar', '왔을지도 = talvez tenha (vindo fazendo)'])]),
 line('뻥쳐왔을지도', 'talvez tenha mentido também.', [
  e('뻥쳐왔을지도', 'talvez tenha mentido', ['뻥치다 = mentir (gíria)', '왔을지도 = talvez tenha'])]),
 line('But 부끄럽지 않아 이게 내 영혼의 지도', 'Mas não envergonho, este é o mapa da minha alma.', [
  e('부끄럽지 않아', 'não envergonho', ['부끄럽다 = ter vergonha', '지 않다 = negação']),
  e('이게 내 영혼의 지도', 'este é o mapa da minha alma', ['영혼 = alma', '지도 = mapa'])]),
 line('Dear myself 넌 절대로 너의 온도를 잃지 마', 'Querido eu, nunca perca sua temperatura.', [
  e('넌 절대로', 'você jamais', ['절대로 = jamais, absolutamente', '넌 = 너는 contraído']),
  e('너의 온도를 잃지 마', 'não perca sua temperatura', ['온도 = temperatura', '잃다 = perder', '지 마 = proibição'])]),
 line('따뜻히도 차갑게도 될 필요 없으니까', 'Não precisa nem ser quente nem frio.', [
  e('따뜻히도 차갑게도', 'nem quente nem frio', ['따뜻하다 = ser quente', '차갑다 = ser frio', '게 = modo']),
  e('될 필요 없으니까', 'não precisa virar', ['되다 = virar', '필요 = necessidade', '없다 = não haver'])]),
 line('가끔은 위선적이어도, 위악적이어도', 'Mesmo cínico às vezes, mesquinho também.', [
  e('가끔은', 'às vezes', ['가끔 = às vezes', '은 marca o tópico']),
  e('위선적이어도', 'mesmo cínico', ['위선적 = cínico', '어도 = mesmo que']),
  e('위악적이어도', 'mesmo mesquinho', ['위악적 = mesquinho, mau-caráter', '어도 repete a concessão'])]),
 line('이게 내가 걸어두고 싶은 내 방향의 척도', 'Este é o critério da minha direção que quero pendurar.', [
  e('이게', 'este é', ['이것 = isto', '게 contrai 것이']),
  e('내가 걸어두고 싶은', 'que quero pendurar', ['걸다 = pendurar', '싶다 = querer']),
  e('내 방향의 척도', 'o critério da minha direção', ['방향 = direção', '척도 = critério'])])];
// Fim — os eus que respiram agora.
const ending=[
 line('내가 되고 싶은 나', 'O eu em quero me tornar.', [
  e('내가 되고 싶은 나', 'o eu em quero me tornar', ['되다 = virar', '싶다 = querer'])]),
 line('사람들이 원하는 나', 'O eu que as pessoas querem.', [
  e('사람들이 원하는 나', 'o eu que as pessoas querem', ['사람 = pessoa', '원하다 = querer'])]),
 line('니가 사랑하는 나', 'O eu que você ama.', [
  e('니가 사랑하는 나', 'o eu que você ama', ['니 = você', '사랑하다 = amar'])]),
 line('또 내가 빚어내는 나', 'O eu que eu mesmo moldo.', [
  e('또 내가 빚어내는 나', 'o eu que eu mesmo moldo', ['또 = de novo', '빚어내다 = moldar'])]),
 line('웃고 있는 나', 'O eu que sorri.', [
  e('웃고 있는 나', 'o eu que sorri', ['웃다 = sorrir', '고 있다 = estar fazendo'])]),
 line('가끔은 울고 있는 나', 'O eu que chora às vezes.', [
  e('가끔은 울고 있는 나', 'o eu que chora às vezes', ['울다 = chorar', '고 있다 = estar fazendo'])]),
 line('지금도 매분 매순간 살아 숨쉬는', 'Que agora, a cada minuto e instante, vive e respira.', [
  e('지금도', 'agora também', ['지금 = agora', '도 = também']),
  e('매분 매순간', 'a cada minuto e instante', ['매 = cada', '분 = minuto', '순간 = instante']),
  e('살아 숨쉬는', 'vive e respira', ['살다 = viver', '숨쉬다 = respirar'])]),
 en('Persona (yeah)', 'Persona (é).'),
 en('Who the hell am I (yeah)', 'Quem diabos eu sou (é).'),
 en('I just wanna go (yeah)', 'Só quero ir (é).'),
 en('I just wanna fly (yeah)', 'Só quero voar (é).'),
 en('I just wanna give you all the voices till I die (yeah)', 'Quero dar todas as vozes até morrer (é).'),
 en('I just wanna give you all the shoulders when you cry (yeah)', 'Quero dar todos os ombros quando você chora (é).'),
 en('Persona (yeah)', 'Persona (é).'),
 en('Who the hell am I (yeah)', 'Quem diabos eu sou (é).'),
 en('I just wanna go (yeah)', 'Só quero ir (é).'),
 en('I just wanna fly (yeah)', 'Só quero voar (é).'),
 en('I just wanna give you all the voices till I die (yeah)', 'Quero dar todas as vozes até morrer (é).'),
 en('I just wanna give you all the shoulders when you', 'Quero dar todos os ombros quando você'),
 en('Cry', 'chora.')];
export const personaSections:{title:string;lines:StudyLine[]}[]=[
 {title:'Pergunta',lines:opening},
 {title:'Verso',lines:verse},
 {title:'Interrogatório',lines:refrain},
 {title:'Carta',lines:bridge},
 {title:'Verso',lines:verse},
 {title:'Interrogatório',lines:refrain},
 {title:'Carta',lines:bridge},
 {title:'Os eus',lines:egos},
 {title:'Fim',lines:ending}];
export const personaVocabulary:{verbs:{ko:string;pt:string}[];nouns:{ko:string;pt:string}[]}={
 verbs:[
  {ko:'물어오다',pt:'perguntar (vindo)'},
  {ko:'찾다',pt:'achar, procurar'},
  {ko:'만들다',pt:'criar, fazer'},
  {ko:'모르다',pt:'não saber'},
  {ko:'오다',pt:'vir'},
  {ko:'웃다',pt:'sorrir'},
  {ko:'되다',pt:'virar, tornar-se'},
  {ko:'가다',pt:'ir'},
  {ko:'멈추다',pt:'parar'},
  {ko:'보다',pt:'ver, olhar'},
  {ko:'쓰다',pt:'escrever'},
  {ko:'부르다',pt:'chamar'},
  {ko:'나타나다',pt:'aparecer'},
  {ko:'노려보다',pt:'encarar, fitar'},
  {ko:'잊다',pt:'esquecer'},
  {ko:'듣다',pt:'ouvir'},
  {ko:'시작하다',pt:'começar'},
  {ko:'취하다',pt:'ficar bêbado'},
  {ko:'나오다',pt:'sair'},
  {ko:'알다',pt:'saber'},
  {ko:'질리다',pt:'enjoar, cansar-se'},
  {ko:'돌리다',pt:'girar'},
  {ko:'비틀다',pt:'torcer'},
  {ko:'일으켜 세우다',pt:'levantar'},
  {ko:'기억하다',pt:'lembrar'},
  {ko:'토로하다',pt:'desabafar'},
  {ko:'만들어내다',pt:'criar'},
  {ko:'잃다',pt:'perder'},
  {ko:'원하다',pt:'querer'},
  {ko:'사랑하다',pt:'amar'},
  {ko:'빚어내다',pt:'moldar'},
  {ko:'살다',pt:'viver'},
  {ko:'숨쉬다',pt:'respirar'},
  {ko:'많다',pt:'ser muito (descritivo)'}],
  nouns:[
  {ko:'나',pt:'eu'},
  {ko:'누구',pt:'quem'},
  {ko:'평생',pt:'vida inteira'},
  {ko:'질문',pt:'pergunta'},
  {ko:'정답',pt:'resposta certa'},
  {ko:'놈',pt:'cara (informal)'},
  {ko:'말',pt:'palavra, fala'},
  {ko:'개',pt:'contador; cão'},
  {ko:'신',pt:'deus'},
  {ko:'아름다움',pt:'beleza'},
  {ko:'기분',pt:'humor'},
  {ko:'돼지',pt:'porco'},
  {ko:'진주목걸이',pt:'colar de pérolas'},
  {ko:'예전',pt:'antes, o passado'},
  {ko:'소원',pt:'desejo'},
  {ko:'것',pt:'coisa'},
  {ko:'숲',pt:'floresta'},
  {ko:'들꽃',pt:'flor do campo'},
  {ko:'그림자',pt:'sombra'},
  {ko:'망설임',pt:'hesitação'},
  {ko:'무대',pt:'palco'},
  {ko:'아래',pt:'embaixo'},
  {ko:'조명',pt:'luz, iluminação'},
  {ko:'아지랑이',pt:'miragem'},
  {ko:'짓',pt:'feito, coisa'},
  {ko:'헛소리',pt:'conversa fiada'},
  {ko:'치기',pt:'idade infantil'},
  {ko:'소명',pt:'vocação, chamado'},
  {ko:'흠',pt:'falha, defeito'},
  {ko:'전부',pt:'tudo'},
  {ko:'세상',pt:'mundo'},
  {ko:'관심',pt:'interesse'},
  {ko:'서툼',pt:'inaptidão'},
  {ko:'후회',pt:'arrependimento'},
  {ko:'습관',pt:'hábito'},
  {ko:'시간',pt:'tempo, hora'},
  {ko:'최초',pt:'primeiro, inicial'},
  {ko:'이름',pt:'nome'},
  {ko:'자',pt:'caractere'},
  {ko:'앞',pt:'frente'},
  {ko:'온도',pt:'temperatura'},
  {ko:'필요',pt:'necessidade'},
  {ko:'영혼',pt:'alma'},
  {ko:'지도',pt:'mapa'},
  {ko:'방향',pt:'direção'},
  {ko:'척도',pt:'critério'},
  {ko:'순간',pt:'instante'},
  {ko:'숨',pt:'fôlego'}]};