import type {StudyLine,StudyEntry} from './spring-day';
const e=(term:string,meaning:string,...notes:string[]):StudyEntry=>({term,meaning,notes});
const l=(text:string,translation:string,...entries:StudyEntry[]):StudyLine=>({text,translation,entries});
const en=(text:string,translation:string):StudyLine=>({text,translation,entries:[],english:true});
const intro=[
en("We're now going to progress to some steps which are a bit more difficult",'Agora vamos avançar para alguns passos um pouco mais difíceis.'),
en('Ready, set, and begin','Preparar, apontar e começar.'),
en('Bighit exclusive, exclusive','Exclusivo da Big Hit, exclusivo.'),
];
const verse1=[
l('매일 돌아가 본다고','Todo dia, tento voltar,',e('매일','todos os dias','Expressão de frequência.'),e('돌아가 본다고','tento voltar, eu digo/penso','돌아가다 = voltar; -아/어 보다 = tentar/experimentar.','-ㄴ다고 apresenta uma afirmação citada, com dizer/pensar implícito; aqui acompanha a reflexão do narrador.')),
l('그때의 나로','ao eu daquela época,',e('그때의','daquela época','그때 = naquele momento; -의 liga ao nome seguinte.'),e('나로','ao meu eu','나 = eu; -(으)로 pode indicar destino, condição ou identidade assumida.')),
l('포기를 선택한 삶으로','à vida em que escolhi desistir.',e('포기를','a desistência','포기 = desistência; -를 = objeto.'),e('선택한','em que escolhi','선택하다 = escolher; -ㄴ modifica 삶.'),e('삶으로','para uma vida','삶 = vida, nome ligado a 살다; -(으)로 = direção/condição. É uma vida alternativa imaginada.')),
l('날 놓아본다고','Tento me colocar nessa vida.',e('날','a mim','Contração de 나를.'),e('놓아본다고','tento colocar, eu digo/penso','놓다 = colocar; -아 보다 = experimentar; -ㄴ다고 retoma um pensamento.','O lugar é a vida alternativa da linha anterior; não é necessariamente abandonar a si mesmo.')),
l('But 세상에는 있지','Mas há coisas neste mundo,',e('세상에는','neste mundo','세상 = mundo; -에 situa; -는 destaca o contexto.'),e('있지','há, sim','있다 = haver; -지 expressa afirmação/confirmação.')),
l('변하지 않는 몆 진실','algumas verdades que não mudam.',e('변하지 않는','que não mudam','변하다 = mudar; -지 않다 nega; -는 modifica 진실.'),e('몆','algumas','A grafia enviada é 몆; a forma padrão esperada é 몇, algumas/quantas.'),e('진실','verdades','진실 = verdade; o plural é contextual, sem -들.')),
l('시간은 앞으로 흐른다는 것','Que o tempo corre para a frente,',e('시간은','quanto ao tempo','시간 = tempo; -은 tópico.'),e('앞으로','para a frente','앞 = frente; -(으)로 = direção.'),e('흐른다는 것','o fato de que flui','흐르다 = fluir; -ㄴ다는 contrai -ㄴ다고 하는 e modifica 것, fato/coisa.')),
l('만약은 없단 것','e que não existe um “e se”.',e('만약은','quanto ao e se','만약 normalmente introduz hipótese; aqui funciona como nome da possibilidade contrafactual, com -은.'),e('없단 것','o fato de que não há','없다 + -다는 → 없단, forma reduzida; 것 nominaliza a afirmação.')),
l('까마득해질 만하면 생각나 그 시절','Quando aquela época está prestes a ficar distante, ela me vem à memória.',e('까마득해질 만하면','quando está quase se tornando distante','까마득하다 = ser muito distante ou vago na memória; -아/어지다 = tornar-se.','-(으)ㄹ 만하다 + -면 situa o ponto/grau em que isso já começaria a ocorrer.'),e('생각나','vem à memória','생각나다 = vir à mente; informal.'),e('그 시절','aquela época','그 = aquela; 시절 = período da vida; aparece depois do verbo por ritmo.')),
l('악마의 손길과 운명의 recall','O toque do demônio e o chamado de volta do destino.',e('악마의','do demônio','악마 = demônio; -의 = de.'),e('손길과','o toque e','손길 = toque/mão estendida; -과 liga nomes.'),e('운명의','do destino','운명 = destino; -의 liga ao inglês recall. A imagem é figurada; recall sugere chamar de volta ou recordar.')),
l('궁금해 아직도 왜 다시 불렀는지도','Ainda me pergunto por que fui chamado de volta.',e('궁금해','tenho curiosidade; me pergunto','궁금하다 → 궁금해.'),e('아직도','ainda','아직 = ainda; -도 reforça a persistência.'),e('왜 다시','por que de novo','왜 = por quê; 다시 = outra vez.'),e('불렀는지도','por que chamou, também','부르다 = chamar; 불렀- é passado, com irregularidade 르.','-는지 forma pergunta indireta; -도 acrescenta inclusão/ênfase. O sujeito que chama fica implícito.')),
l('매일 ask me, guess it, 채찍, repeat, oh','Todo dia: pergunto a mim, tento descobrir, chicote, repito.',e('매일','todos os dias','Frequência.'),e('채찍','chicote','Nome, usado como imagem de cobrança ou disciplina sobre si mesmo; não é uma conjugação.')),
l('변할 건 없다며 결국 또','Dizendo que nada vai mudar, no fim, de novo,',e('변할 건','quanto ao que vai mudar','변하다 + -(으)ㄹ 것; 건 contrai 것은.'),e('없다며','dizendo que não há','없다 + -다며, redução de -다고 하며: ao dizer/pensar que.'),e('결국 또','no fim, de novo','결국 = afinal; 또 = novamente.')),
l('걱정을 억지로 잠궈, close','tranco minhas preocupações à força: fecho.',e('걱정을','as preocupações','걱정 = preocupação; -을 objeto.'),e('억지로','à força','억지 = insistência/força contra a vontade; -(으)로 indica modo.'),e('잠궈','tranco','A letra enviada usa 잠궈; a conjugação padrão de 잠그다 é 잠가.','A imagem de fechar/trancar as preocupações é completada pelo inglês close.')),
en('How much love? How much joy?','Quanto amor? Quanta alegria?'),
l('위안을 주며 stay calm, alone','Dando conforto a mim mesmo, fico calmo, sozinho.',e('위안을','conforto; consolo','위안 = consolo; -을 objeto.'),e('주며','dando; enquanto dou','주다 = dar; -(으)며 liga ações simultâneas. O destinatário não é explícito; o contexto favorece consolar a si mesmo.')),
];
const pre1=[
l("그래 I don't care, 전부 내",'É isso, não me importo; tudo é minha…',e('그래','é isso; certo','Afirmação informal.'),e('전부 내','tudo, minha…','전부 = tudo; 내 = meu/minha. O nome que completa a posse aparece na linha seguinte.')),
l("운명의 선택, so we're here",'escolha do destino; por isso estamos aqui.',e('운명의 선택','escolha do destino','운명 = destino; -의 = de; 선택 = escolha.','Lida com a linha anterior, a expressão associa o destino ao próprio caminho escolhido; a tradução mantém a imagem.')),
l("내 앞을 봐, the way is shinin'",'Olhe à minha frente: o caminho está brilhando.',e('내 앞을','à minha frente','내 = meu; 앞 = frente; -을 marca aquilo para que se olha.'),e('봐','olhe; veja','보다 → 봐; forma informal com sentido de convite/ordem neste contexto.')),
en("Keep goin' now",'Continue seguindo agora.'),
en('(Ready, set, and begin)','(Preparar, apontar e começar.)'),
];
const chorus=[
l('그 길로, 길로, 길로','Por esse caminho, caminho, caminho.',e('그 길로, 길로, 길로','por esse caminho','그 = esse; 길 = caminho; -(으)로 marca direção ou percurso.','A repetição dá ênfase musical à escolha de seguir o caminho.')),
en('Wherever my way','Seja onde for o meu caminho.'),
l('오직 ego, ego, ego','Só o ego, ego, ego.',e('오직','somente; exclusivamente','Advérbio que restringe o foco; ego é a palavra inglesa para eu/ego.')),
en('Just trust myself','Só confiar em mim mesmo.'),
];
const verse2=[
en('(2 Cool, 2 Cool 4 Skool)','(2 Cool, 2 Cool 4 Skool — título mantido.)'),
l('문득 스쳐가는 j-hope이 아닌 정호석의 삶','De repente passa pela mente a vida de Jung Ho-seok, sem ser j-hope.',e('문득','de repente','Algo surge inesperadamente na percepção ou pensamento.'),e('스쳐가는','que passa de relance','스치다 = roçar/passar brevemente; -어 가다 indica passagem; -는 modifica a ideia seguinte.'),e('j-hope이 아닌','que não é j-hope','Nome + -이, complemento de 아니다; 아닌 modifica 정호석의 삶.'),e('정호석의 삶','a vida de Jung Ho-seok','정호석 = nome pessoal; -의 = de; 삶 = vida. O verso imagina outra trajetória pessoal.')),
l("희망이란 없고 후회만 가득했겠지 'til I die",'Não haveria esperança, só arrependimento até eu morrer.',e('희망이란','quanto à esperança','희망 = esperança; -(이)란 aqui destaca o conceito, algo como o que se chama esperança.','Hope também ecoa o nome artístico j-hope.'),e('없고','não há, e','없다 + -고 liga estados.'),e('후회만','só arrependimento','후회 = arrependimento; -만 = apenas.'),e('가득했겠지','teria ficado cheio','가득하다 = estar cheio; -했- passado; -겠- conjectura; -지 tom de conclusão. É uma vida hipotética, não um fato ocorrido.')),
en('(2 Cool, 2 Cool 4 Skool)','(2 Cool, 2 Cool 4 Skool — título mantido.)'),
l('춤은 뜬 구름을 잡을 뿐 나의 꿈을 탓할 뿐','A dança seria só perseguir nuvens; eu só culparia meu sonho.',e('춤은','quanto à dança','춤 = dança; -은 tópico.'),e('뜬 구름을','as nuvens no ar','뜨다 = flutuar; -ㄴ modifica 구름, nuvem; -을 objeto.','뜬구름 잡다 é imagem de perseguir algo vago ou irrealizável; não pegar nuvens literalmente.'),e('잡을 뿐','apenas perseguir; agarrar','잡다 = agarrar; -(으)ㄹ 뿐 = apenas fazer.'),e('나의 꿈을','meu sonho','나의 = meu; 꿈 = sonho; -을 objeto.'),e('탓할 뿐','apenas culpar','탓하다 = culpar; -(으)ㄹ 뿐 restringe à ação. A leitura acompanha a vida alternativa imaginada.')),
l('살아 숨쉬는 거에 의문을','Questionaria o próprio viver e respirar.',e('살아 숨쉬는','que vive e respira','살다 = viver; 숨쉬다 = respirar; -는 modifica 거.'),e('거에','sobre o fato de','거 é forma coloquial de 것; -에 marca alvo/contexto.'),e('의문을','uma dúvida; um questionamento','의문 = dúvida; -을 objeto. O verbo levantar/ter dúvida fica implícito.')),
en('Oh my God (God, God, God)','Oh, meu Deus (Deus, Deus, Deus).'),
en('Uh, time goes by','Uh, o tempo passa.'),
l('7년의 걱정이 드디어 입 밖으로','As preocupações de sete anos finalmente saem pela boca.',e('7년의','de sete anos','년 conta anos; -의 liga à preocupação. Em coreano, 7년 é lido 칠 년.'),e('걱정이','as preocupações','걱정 + sujeito -이.'),e('드디어','finalmente','Indica a realização de algo aguardado.'),e('입 밖으로','para fora da boca','입 = boca; 밖 = fora; -(으)로 = direção. Metáfora de verbalizar o que estava guardado.')),
l('모두 해소되는 핍박','Toda a opressão vai se dissipando.',e('모두','toda; inteiramente','Totalidade.'),e('해소되는','que é dissipada; aliviada','해소되다 = ser resolvido/aliviado; -는 modifica 핍박.'),e('핍박','opressão; perseguição','Nome, não o verbo preocupar-se. A tradução adapta a ordem nominal da linha.')),
l('가장 믿던 그들의 답은 내 심장으로','A resposta daqueles em quem eu mais confiava vai ao meu coração.',e('가장','mais; acima de todos','Advérbio superlativo.'),e('믿던 그들의','daqueles em quem confiava','믿다 = confiar; -던 retoma estado passado; 그들 = eles; -의 possessivo.'),e('답은','quanto à resposta','답 = resposta; -은 tópico.'),e('내 심장으로','para meu coração','내 = meu; 심장 = coração; -(으)로 indica direção. O verbo de movimento fica implícito.')),
l('하나뿐인 hope, 하나뿐인 soul','Uma única esperança, uma única alma.',e('하나뿐인','único; só um','하나 = um; 뿐 = apenas; cópula -인 modifica os nomes ingleses. A expressão ocorre duas vezes.')),
l('하나뿐인 smile, 하나뿐인 너','Um único sorriso, uma única pessoa: você.',e('하나뿐인','único; só um','하나 + 뿐 + -인, modificador nominal.'),e('너','você','Pronome informal; não equivale ao nome ego.')),
l('세상 그 진실에 확실해진 답','Uma resposta que se tornou clara diante daquela verdade do mundo.',e('세상 그 진실에','diante daquela verdade do mundo','세상 = mundo; 그 = aquela; 진실 = verdade; -에 indica contexto/referência. A ligação entre nomes é elíptica.'),e('확실해진','que se tornou certa; clara','확실하다 = ser certo; -아/어지다 = tornar-se; -ㄴ modifica 답.'),e('답','resposta','Nome que conclui a construção.')),
l('변하지 않는 그 어떤 나, right','Esse eu, seja qual for, que não muda, certo.',e('변하지 않는','que não muda','변하다 + -지 않다 + -는, forma que modifica 나.'),e('그 어떤 나','qualquer versão desse eu','그 = esse; 어떤 = qual/qualquer; 나 = eu. Formulação poética sobre identidade.')),
];
const pre2=[
l("이제 I don't care, 전부 내",'Agora não me importo; tudo é minha…',e('이제','agora','Marca uma nova etapa.'),e('전부 내','tudo, minha…','전부 = tudo; 내 = meu/minha; a posse continua na linha seguinte.')),
...pre1.slice(1),
];
const ending=[
l('믿는 대로 가는 대로','Conforme acredito, conforme sigo,',e('믿는 대로','conforme acredito','믿다 = acreditar; -는 대로 = conforme, da maneira que.'),e('가는 대로','conforme sigo','가다 = ir; -는 대로 mantém a ideia de acompanhar o próprio percurso.')),
l('운명이 됐고 중심이 됐어','isso virou destino e se tornou meu centro.',e('운명이 됐고','tornou-se destino, e','운명 = destino; -이 complemento de 되다; 됐- contrai 되었-; -고 conecta.'),e('중심이 됐어','tornou-se o centro','중심 = centro/eixo; -이 complemento de 되다; -었어 passado informal.')),
l('힘든 대로 또 슬픈 대로','Com as dificuldades como vieram, e também com a tristeza,',e('힘든 대로','com as dificuldades como são','힘들다 = ser difícil/cansativo; 힘든 é forma adnominal, com queda de ㄹ.','-대로 recebe a situação tal como ela se apresenta; não significa literalmente rumo difícil.'),e('또','também','Adiciona outra experiência.'),e('슬픈 대로','com a tristeza como é','슬프다 = estar triste; 슬픈 modifica 대로. A construção admite cada estado à sua maneira.')),
l('위로가 됐고 날 알게 됐어','isso se tornou consolo, e passei a me conhecer.',e('위로가 됐고','tornou-se consolo, e','위로 = consolo; -가 complemento de 되다; -고 liga resultados.'),e('날','a mim','나를 contraído.'),e('알게 됐어','passei a conhecer','알다 = conhecer; -게 되다 descreve mudança de situação/resultado; 됐어 é passado informal.')),
en('Map of the Soul, map of the all (Map of the Soul)','Mapa da alma, mapa de tudo (mapa da alma).'),
en("That's my ego, that's my ego",'Esse é meu ego, esse é meu ego.'),
en('Map of the Soul, map of the all','Mapa da alma, mapa de tudo.'),
en("That's my ego, that's my ego (Map of the Soul)",'Esse é meu ego, esse é meu ego (mapa da alma).'),
];
export const egoSections:{title:string;lines:StudyLine[]}[]=[{title:'Abertura',lines:intro},{title:'Verso 1',lines:verse1},{title:'Pré-refrão',lines:pre1},{title:'Refrão',lines:chorus},{title:'Verso 2',lines:verse2},{title:'Pré-refrão',lines:pre2},{title:'Refrão',lines:chorus},{title:'Final',lines:ending}];
export const egoVocabulary={verbs:[{ko:'돌아가다',pt:'voltar'},{ko:'포기하다',pt:'desistir'},{ko:'선택하다',pt:'escolher'},{ko:'놓다',pt:'colocar; soltar'},{ko:'변하다',pt:'mudar'},{ko:'흐르다',pt:'fluir'},{ko:'생각나다',pt:'vir à memória'},{ko:'부르다',pt:'chamar'},{ko:'잠그다',pt:'trancar; fechar'},{ko:'주다',pt:'dar'},{ko:'보다',pt:'ver; olhar'},{ko:'스치다',pt:'passar de relance; roçar'},{ko:'탓하다',pt:'culpar'},{ko:'살다',pt:'viver'},{ko:'숨쉬다',pt:'respirar'},{ko:'해소되다',pt:'ser aliviado; ser resolvido'},{ko:'믿다',pt:'acreditar; confiar'},{ko:'되다',pt:'tornar-se'},{ko:'알다',pt:'saber; conhecer'},{ko:'힘들다',pt:'ser difícil/cansativo (descritivo)'},{ko:'슬프다',pt:'estar triste (descritivo)'},{ko:'확실하다',pt:'ser certo/claro (descritivo)'}],nouns:[{ko:'포기',pt:'desistência'},{ko:'선택',pt:'escolha'},{ko:'삶',pt:'vida'},{ko:'세상',pt:'mundo'},{ko:'진실',pt:'verdade'},{ko:'시간',pt:'tempo'},{ko:'시절',pt:'época; período da vida'},{ko:'악마',pt:'demônio'},{ko:'손길',pt:'toque; mão estendida'},{ko:'운명',pt:'destino'},{ko:'채찍',pt:'chicote; imagem de cobrança'},{ko:'걱정',pt:'preocupação'},{ko:'위안',pt:'consolo'},{ko:'길',pt:'caminho'},{ko:'희망',pt:'esperança'},{ko:'후회',pt:'arrependimento'},{ko:'춤',pt:'dança'},{ko:'구름',pt:'nuvem'},{ko:'꿈',pt:'sonho'},{ko:'의문',pt:'dúvida; questionamento'},{ko:'핍박',pt:'opressão; perseguição'},{ko:'심장',pt:'coração (órgão)'},{ko:'답',pt:'resposta'},{ko:'중심',pt:'centro; eixo'},{ko:'위로',pt:'consolo; conforto'}]};
