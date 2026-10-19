import type {StudyLine} from './spring-day';
export type MusicCuriosity={term:string;card:string;source?:string};
// Editorial additions: one occurrence per song; original cards remain unchanged.
export const musicCuriosities:Record<string,MusicCuriosity[]>=
{
"pied-piper":[
  {
    "term": "그만해 뮤비는 나중에 해석하고",
    "card": "A música interrompe a sedução para falar de assistir a vídeos, olhar fotos e interpretar clipes. É uma ironia sobre o próprio conteúdo que atrai o fã: a voz manda estudar e logo volta a convidar para ouvir. O exagero do tempo que some reforça essa tensão, sem ser uma medida literal do uso de telas."
  },
  {
    "term": "이 노랜 내가 네게 주는 상",
    "card": "상, prêmio, prepara o contraste com 벌, punição. O elogio 착해 soa como recompensa por seguir a voz, e o pré-refrão insiste que não há castigo. Essas escolhas mantêm a ambiguidade entre carinho, brincadeira e domínio no personagem que canta."
  },
  {
    "term": "널 이끄는 피리 부는 사나이처럼",
    "card": "O título remete ao Flautista de Hamelin. Na versão literária de Robert Browning, a música do flautista faz ratos e depois crianças segui-lo. A canção reaproveita a força de atração do som para construir uma voz sedutora; isso não torna o eu lírico um retrato literal do personagem da história.",
    "source": "https://www.gutenberg.org/cache/epub/18343/pg18343-images.html"
  },
  {
    "term": "알면서도 이끌리는 선악과처럼",
    "card": "선악과 nomeia o fruto do conhecimento do bem e do mal, ligado à narrativa de Gênesis. A comparação destaca ser atraído mesmo sabendo que há uma proibição. A letra não identifica uma espécie de fruta; traduzir como maçã acrescentaria algo que o verso não diz.",
    "source": "https://bible.usccb.org/bible/genesis/3"
  },
  {
    "term": "널 구하러 온 거야 널 망치러 온 거야",
    "card": "Salvar e arruinar ocupam a mesma construção de finalidade. A repetição coloca o conforto e o risco lado a lado, em vez de escolher um sentido simples para a voz. A doçura, a ideia de prazer culpado e o pedido de perdão prolongam essa tensão."
  }
],
"boy-meets-evil":[
  {
    "term": "칼은 무뎌져",
    "card": "A lâmina primeiro é afiada todos os dias pela ambição, depois perde o fio diante do desejo que o eu não contém. Mais adiante, é a realidade que corta e rasga. A imagem transforma um instrumento de determinação em vulnerabilidade."
  },
  {
    "term": "외쳤지만 저버렸지 내 양심을",
    "card": "저버리다 é abandonar, trair ou deixar de honrar algo, aqui a própria consciência. A grafia se aproxima de 져 버리다, acabar perdendo, mas são construções diferentes. O objeto posposto mostra o que foi abandonado e impede trocar o sentido do verbo."
  },
  {
    "term": "그 욕심이 지옥을 부르는 나팔이 될 지는",
    "card": "A frase anterior diz que o eu não tinha imaginado; esta linha completa o que ele não previa. A trombeta que chama o inferno amplia a consequência do desejo. A referência funciona dentro do campo de demônio, culpa e tentação construído pela letra, sem precisar atribuir uma cena específica a ela."
  },
  {
    "term": "But 이 죄를 벗기엔",
    "card": "A forma pode enganar quem reconhece 벗기다, tirar algo de alguém. Aqui a leitura é 벗다 + -기에는, reduzida a 벗기엔: para se livrar desta culpa. Ver a oração inteira evita decidir a gramática apenas pela aparência de uma palavra."
  },
  {
    "term": "놓치긴 싫었어 악마의 손길을",
    "card": "O eu reconhece a ameaça e ainda assim não quer perder o toque. O refrão inglês mantém a mesma contradição entre ruim e doce. A repetição final nomeia o mal, mas não apaga o conflito que a voz acabou de narrar."
  }
],
"normal-korean":[
  {
    "term": "유명세와 fame, yeah, the things we choose",
    "card": "유명세 não é simplesmente uma taxa oficial: a palavra compara as dificuldades de ser conhecido a um preço que se paga. Ao colocá-la junto de fame, a letra permite ouvir o reconhecimento e o seu custo ao mesmo tempo. A acepção coloquial de notoriedade também circula, mas não apaga esse contraste.",
    "source": "https://www.korean.go.kr/common/download.do%3Bfront%3DD69463770EF882E66C0BBB6A9FA3FF6C?c_file_name=ddd92678-70b3-4dbb-ac7c-ddfeaf23f3d7_0.pdf&file_path=reportData&o_file_name=%EA%B8%B0%EC%9E%90%EB%A5%BC+%EC%9C%84%ED%95%9C+%EC%8B%A0%EB%AC%B8%EC%96%B8%EC%96%B4+%EA%B8%B8%EC%9E%A1%EC%9D%B4.pdf"
  },
  {
    "term": "조명이 꺼지면 찾아드는 꿈",
    "card": "O sonho pode ser lido junto do desejo seguinte: que o mundo esqueça o eu por um instante. Apagar a iluminação muda a cena do espetáculo para uma vontade íntima. A leitura de sonho como desejo é contextual; a palavra também pode nomear o que se sonha dormindo."
  },
  {
    "term": "알아 이제 너무 익숙해진 걸",
    "card": "O inglês diz incomum, enquanto o coreano admite que isso já ficou familiar demais. A contradição sustenta o título: repetição pode tornar uma experiência habitual sem fazê-la confortável. O refrão questiona o nome normal em vez de resolver a tensão."
  },
  {
    "term": "무뎌지기도, 부서지기도 하는 인간이기에",
    "card": "A construção -기도…-기도 하다 dá lugar a estados diferentes da mesma pessoa. Ficar insensível e se quebrar não precisam ser uma identidade fixa. A linha seguinte traz a duração do esforço de suportar, por meio de -어 오다."
  },
  {
    "term": "평범이고 자시고 특별이고",
    "card": "Comum e especial começam como rótulos opostos, mas acabam comparados à mesma fumaça que se dispersa. A expressão -이고 자시고 afasta a própria discussão. A sequência passa da classificação à dificuldade de agarrar algo que se desfaz."
  }
],
"come-over":[
  {
    "term": "각자 이야긴 물어 둘까?",
    "card": "Há uma diferença importante na transcrição: 묻다, perguntar, vira 물어; 묻다, enterrar, mantém 묻어. A ideia de guardar as histórias do passado combina com a segunda forma, mas o texto enviado usa a primeira. Por isso a tradução está marcada como leitura contextual, e não como correção confirmada.",
    "source": "https://www.korean.go.kr/kornorms/m/m_regltn.do"
  },
  {
    "term": "다시 시작하는 우리",
    "card": "O eu imagina um nós que recomeça, mas a pergunta posso ir até você e a frase inglesa sobre não ser amado como antes mantêm a resposta em aberto. O desejo de reconciliação não equivale à confirmação de que o outro já aceitou."
  },
  {
    "term": "네 심장을 두드려 보란 듯이 right now",
    "card": "A porta da parte inglesa se transforma em coração. O eu diz que odeia metáforas enquanto fala de poeira, fumaça e depois de um coração em que se bate. Essa tensão pode mostrar a dificuldade de falar diretamente da própria dor."
  },
  {
    "term": "날카로워 또 베여도 그것도 나의 page",
    "card": "A página aproxima corte e escrita de uma história pessoal: mesmo o que dói entra no relato do eu. O trecho anterior contém 살 na transcrição enviada; não se deve ensinar essa grafia como se fosse 삶, vida. A nota preserva essa diferença e a incerteza da leitura."
  },
  {
    "term": "그래, 답을 찾은 rover, 난 노저어",
    "card": "Rover sugere quem vagueia; remar retoma deslocamento e travessia. Em 노를 젓다, o verbo 젓다 perde o ㅅ antes de -어 e vira 저어. No final, come over pede aproximação, enquanto not over nega o fim: o mesmo over participa de dois sentidos.",
    "source": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=75774"
  }
],
"love-maze":[
  {
    "term": "머리 쓰며 사랑한 적 없기에",
    "card": "Usar a cabeça aqui é calcular riscos e vantagens no amor. O verso anterior contrasta negócio com exercício: a relação é apresentada como algo vivido e praticado, não como uma conta que garante lucro. A análise acompanha essa escolha do eu lírico, sem dizer que pensar numa relação seja errado."
  },
  {
    "term": "내가 당겨도 오지 않아도 돼",
    "card": "Empurrar, cair, levantar e puxar formam uma sequência de movimento entre duas pessoas. O final, porém, permite não vir: a construção 오지 않아도 돼 deixa espaço para a decisão do outro. Ela contrasta com os pedidos intensos de não soltar as mãos."
  },
  {
    "term": "우리가 함께면 끝이 없는 미로조차 낙원",
    "card": "O inglês aproxima a maze, um labirinto, de amaze, surpreender. A formulação cantada é estilizada e não funciona como modelo de conjugação inglesa. Mais adiante, o labirinto sem fim vira paraíso quando há companhia: a solução poética não é apenas encontrar a saída, mas mudar a experiência do caminho."
  },
  {
    "term": "미지수의 그 기로도",
    "card": "공식, fórmula, e 미지수, incógnita, criam um campo matemático; 법, lei, e 섭리, providência, sugerem uma ordem maior. A letra aproxima a sensação de destino da incerteza real do caminho, que ainda exige escolha e tentativa."
  },
  {
    "term": "잡은 두 손이 지도가 되어",
    "card": "As mãos aparecem primeiro como algo que não se deve perder e terminam como mapa. O apoio compartilhado passa de vínculo a orientação. A passagem prepara o retorno de pegue minha mão no refrão, sem precisar prometer uma saída fácil."
  }
],
"so-what":[
  {
    "term": "이미 주사윈 던져진 지 오래",
    "card": "Os dados lançados figuram uma situação já posta em movimento, cujo resultado não se controla por completo. 던져진 é passivo; -ㄴ 지 오래 acrescenta que já faz tempo. Não é preciso transformar a cena em um jogo literal para entender a decisão de seguir."
  },
  {
    "term": "고민들의 9할은 니가 만들어 낸 상상의 늪",
    "card": "할 conta décimos: 9할 corresponde a nove décimos. A letra usa o número como exagero expressivo, não como dado de pesquisa. O pântano da imaginação descreve como ficar preso a cenários imaginados pode ampliar a preocupação."
  },
  {
    "term": "고민보다 Go Go 쫄지마렴 cheer up",
    "card": "A expressão retoma o título 고민보다 Go, também conhecido como Go, Go. Aqui a semelhança sonora de 고민 e Go transforma remoer em movimento. O registro coloquial de 쫄다, intimidar-se, reforça o tom de incentivo entre pessoas próximas."
  },
  {
    "term": "경계선 위에서 위태롭다 해도",
    "card": "A linha de limite, o vento e a corrida constroem uma imagem de avançar mesmo na incerteza. As concessões admitem instabilidade, erros e lágrimas; o refrão não depende de dizer que está tudo resolvido. O movimento é uma resposta à paralisia do eu."
  },
  {
    "term": "고통은 내 훈장",
    "card": "A medalha transforma a dor vivida em marca de resistência na voz do eu lírico. Não torna o sofrimento uma obrigação. A abertura volta no final com a mesma escolha de não se deixar definir pelos julgamentos: e daí funciona aqui como uma resposta a essas pressões."
  }
],
"134340":[
  {
    "term": "나에겐 이름이 없구나",
    "card": "134340 é o número de catálogo de Plutão, reclassificado como planeta anão em 2006. Ele manteve o nome e continua orbitando o Sol. A letra usa a perda de lugar como metáfora de abandono: o eu se sente reduzido a um número, embora sua órbita continue.",
    "source": "https://science.nasa.gov/dwarf-planets/pluto/"
  },
  {
    "term": "넌 정말로 Eris를 찾아낸 걸까",
    "card": "Eris é outro planeta anão; sua descoberta ajudou a motivar a discussão sobre a classificação de Plutão. Dentro da canção, perguntar por Eris pode sugerir a chegada de outra pessoa. Essa leitura é uma interpretação da metáfora, não uma afirmação sobre um relacionamento real.",
    "source": "https://science.nasa.gov/dwarf-planets/eris/"
  },
  {
    "term": "Us는 u의 복수형일 뿐",
    "card": "O eu desmonta a palavra us como se ela contivesse apenas u, a abreviação informal de you, repetido. A pergunta afetiva é se aquele nós alguma vez incluiu um eu. Em inglês, us é pronome objeto da primeira pessoa do plural; não é plural de you."
  },
  {
    "term": "난 헛돌고만 있어",
    "card": "맴돌다 é circular ao redor; 헛돌다 acrescenta a sensação de girar em falso, sem chegar a lugar algum. A órbita que não se rompe pode parecer permanência, mas a troca de verbo a transforma em desgaste sem encontro."
  },
  {
    "term": "니 향기 따윈 기억도 안나 잠깐",
    "card": "O verso primeiro despreza a própria lembrança e logo interrompe a fala com espera. O perfume reconhecido, a saudação comum e o coração disparado enfraquecem a declaração de indiferença. A narrativa mostra a contradição sem precisar declarar que o eu mentiu."
  }
],
"paradise":[
  {
    "term": "마라톤 마라톤",
    "card": "O número da linha seguinte retoma os 42,195 quilômetros de uma maratona. A corrida apresenta a promessa de recompensa no fim; o restante da letra pergunta o que acontece quando se exige correr sem destino. O paraíso vai sendo deslocado da chegada para os momentos da própria vida.",
    "source": "https://atletismosudamericano.org/maraton/en/the-distance/"
  },
  {
    "term": "우린 꿈을 남한테서 꿔 (빚처럼)",
    "card": "꾸다 pode significar sonhar, como em 꿈을 꾸다, ou tomar algo emprestado. De outras pessoas e como dívida fazem ouvir as duas leituras: um sonho pode vir das expectativas alheias e ser sentido como obrigação de pagar.",
    "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=14648"
  },
  {
    "term": "위대해져야 한다 배워 (빛처럼)",
    "card": "빚, dívida, e 빛, luz, têm 받침 diferentes, mas os dois isolados soam [빋]. Diante do ㅊ de 처럼, as finais também se neutralizam; 빚처럼 e 빛처럼 aproximam dívida e brilho. A escrita recupera os sentidos que o som sobrepõe.",
    "source": "https://www.korean.go.kr/nkview/nknews/199904/9_5.htm"
  },
  {
    "term": "너의 dream. 사실은 짐",
    "card": "A palavra inglesa dream se aproxima pelo som de 짐, fardo ou bagagem. O sonho que deveria inspirar vira peso. A sequência admite desejos pequenos e até não ter um grande plano: o alvo é a obrigação de sonhar de um jeito padronizado."
  },
  {
    "term": "꿈이 없어도 괜찮아",
    "card": "Tudo bem não ter um sonho não significa que sonhar seja errado. As concessões retiram a exigência de uma ambição grandiosa para merecer uma vida. A presença de momentos felizes e o valor das respirações do ouvinte sustentam essa leitura contextual."
  }
],
"anpanman":[
  {
    "term": "But 줄 수 있는 건 오직 Anpan",
    "card": "Anpanman é um herói cuja cabeça é um pão com pasta doce de feijão. Na história, ele oferece parte dela a quem está com fome. A letra transforma esse gesto de dar o que se tem em uma imagem de ajuda: o recurso do eu não é um carro extraordinário, mas uma canção e o reconhecimento do esforço de alguém.",
    "source": "https://www.anpanman.jp/about/qanda/"
  },
  {
    "term": "무릎팍 까지는 것 따윈 두렵지 않아",
    "card": "Aqui 까지는 vem de ficar ralado e modifica uma ação transformada em nome. Não é a partícula até. O joelho ralado da fantasia infantil reaparece na ponte como possibilidade de cair e errar; ajudar não exige ser invulnerável."
  },
  {
    "term": "눈 뜨니 hero but still in 미로",
    "card": "O herói em inglês e 미로, labirinto, se aproximam pelo som. A rima deixa uma tensão clara: receber o papel de herói não significa já saber o caminho. As feridas escondidas e o medo admitido na ponte desenvolvem essa diferença."
  },
  {
    "term": "과 수고했단 말뿐이다만",
    "card": "Dizer que alguém se esforçou reconhece o que a pessoa atravessou. Aqui esse reconhecimento aparece junto do pão: recursos simples, mas concretos, para apoiar alguém. O verso continua a lista da linha anterior; começar a leitura pelo e evita tratá-lo como uma frase isolada."
  },
  {
    "term": "또 진흙투성이겠지만",
    "card": "O sufixo -투성이 descreve estar cheio ou coberto de algo, muitas vezes desagradável: aqui, lama. A ponte repete concessões sobre cair, errar e se sujar antes de pedir confiança. O herói prometido inclui essas limitações."
  }
],
"mic-drop":[
  {
    "term": "I don't care 마이크 잡음 금수저 여럿 패",
    "card": "As colheres de diferentes materiais podem representar a situação econômica da família. 금수저 é a colher de ouro, alguém que nasce rico. A letra responde ao insulto à própria colher trocando o critério: o microfone passa a ser o instrumento com que o eu afirma seu valor.",
    "source": "https://kli.korean.go.kr/term/trgtWord/indexTrgtWord.do?trgtWordNo=223123583"
  },
  {
    "term": "우리 콘서트 절대 없어 포도",
    "card": "As uvas são uma imagem dos pontos que indicam lugares disponíveis no mapa de ingressos. Dizer que não há nenhuma comunica lotação esgotada. É uma leitura contextual do verso, apoiada pela sequência de convites, procura e troféus; não uma afirmação de que shows não vendem frutas."
  },
  {
    "term": "혹 배가 아프다면 고소해",
    "card": "A expressão de dor de barriga pode indicar inveja. A ordem de processar é confirmada pela linha inglesa seguinte, enquanto o som também permite ouvir satisfação pelo revés alheio e um sabor tostado. O campo da comida já vinha de bifes, mastigar e ratatouille; a tradução precisa acompanhar esse jogo."
  },
  {
    "term": "Hater들은 벌써 학을 떼",
    "card": "학을 떼다 é uma expressão de horror ou repulsa. O elemento 학 se liga historicamente à palavra para febres da malária, não a uma ave. No refrão, os rivais já não suportam a cena de sucesso; a tradução natural comunica essa reação sem reproduzir a origem ao pé da letra.",
    "source": "https://www.korean.go.kr/nkview/nklife/2002_2/2002_0212.pdf"
  },
  {
    "term": "사필귀정 ah",
    "card": "A linha anterior anuncia quatro caracteres: 사필귀정, escritos 事必歸正 em hanja. A ideia é que os acontecimentos acabam voltando ao que é correto. O eu usa a expressão para apresentar o sucesso como resposta aos críticos, com deboche e confiança; ela não significa simplesmente quatro palavras."
  }
],
  "born-singer": [
    {
      "term": "초심을",
      "card": "초심 é a disposição com que se começou: lembrar por que algo importava antes da rotina e do sucesso. Aqui não quer dizer continuar sem experiência, mas preservar o propósito inicial."
    },
    {
      "term": "피땀",
      "card": "피땀 junta sangue e suor para falar de esforço intenso. Assim como “dar o sangue” em português, a expressão pode valorizar dedicação sem descrever uma cena literal."
    }
  ],
  "into-the-sun": [
    {
      "term": "동이",
      "card": "Aprenda 동이 트다 como uma unidade: amanhecer. Não é preciso traduzir cada parte isoladamente. Outro jeito de falar da chegada da manhã é 날이 밝다, o dia clarear."
    }
  ],
  "please": [
    {
      "term": "가시밭길쯤은",
      "card": "Um caminho de espinhos também pode ser uma trajetória de dificuldades: 가시밭길을 걷다. A imagem do percurso transforma os obstáculos da relação em algo que se atravessa, não apenas algo que se sente."
    }
  ],
  "one-more-night": [
    {
      "term": "수놓인",
      "card": "수놓다 é bordar, mas também serve para descrever luzes ou estrelas que enfeitam uma paisagem. Em 별이 하늘을 수놓다, as estrelas “bordam” o céu: a língua transforma o cenário em tecido."
    }
  ],
  "they-dont-know-bout-us": [
    {
      "term": "촌놈",
      "card": "촌놈 pode soar depreciativo: um sujeito do interior, considerado sem sofisticação. Usado sobre si mesmo, como aqui, pode recuperar a própria origem com humor ou orgulho. O tom muda conforme quem fala e para quem."
    },
    {
      "term": "오지랖들은",
      "card": "오지랖 também é a parte da frente de uma roupa. Na expressão 오지랖이 넓다, passa a descrever quem se mete demais na vida alheia. A imagem do verso exagera essa intromissão, em vez de elogiar uma grande generosidade.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=261&pageIndex=1&qna_seq=320897"
    }
  ],
  "fire": [
    {
      "term": "수저길래",
      "card": "수저 evoca aqui rótulos de origem social: 금수저, colher de ouro, para uma família privilegiada, e 흙수저, colher de terra, para poucos recursos. A pergunta contesta classificar uma pessoa pelo que herdou.",
      "source": "https://kli.korean.go.kr/term/trgtWord/indexTrgtWord.do?trgtWordNo=2284540"
    },
    {
      "term": "삐이",
      "card": "삐이 imita um sinal sonoro, como um bipe de censura. Quando aparece no lugar esperado de uma palavra, o efeito faz parte da atitude da letra: não é uma palavra secreta que precise de tradução."
    }
  ],
  "run": [
    {
      "term": "멍청이의 뜀박질",
      "card": "뜀박질 tem uma sonoridade mais expressiva que o neutro 달리기, corrida. Junto de 멍청이, tolo, faz o esforço parecer uma corrida desajeitada e autodepreciativa, coerente com cair e continuar correndo."
    }
  ],
  "i-need-u": [
    {
      "term": "안대",
      "card": "Ouça o contraste: 안 돼 é “não pode”; 안대 é uma venda para os olhos. Os sons se aproximam, mas a escrita e o contexto mudam o sentido. A venda torna visível a ideia de esconder a verdade."
    }
  ],
  "danger": [
    {
      "term": "넌 귀요미",
      "card": "귀요미 é uma forma carinhosa e informal de chamar alguém de fofo. O contraste com a frustração do narrador mostra que um apelido afetuoso pode aparecer até numa reclamação. Não indica um nível formal de tratamento."
    },
    {
      "term": "난 지못미",
      "card": "지못미 encurta 지켜주지 못해 미안해: “desculpe por não conseguir proteger você”. Na internet, também pode expressar pena bem-humorada por uma situação constrangedora. Aqui, o narrador aplica a si essa imagem de coitado."
    }
  ],
  "fake-love": [
    {
      "term": "예쁜 거짓을",
      "card": "빚다 pode ser moldar algo, como argila. Aplicado à mentira, sugere fabricar uma versão cuidadosamente trabalhada para agradar ao outro. É uma escolha de imagem mais concreta do que simplesmente dizer uma mentira."
    }
  ],
  "blood-sweat-tears": [
    {
      "term": "피 땀 눈물",
      "card": "Sangue, suor e lágrimas condensam três imagens: ferida, esforço e sofrimento. Na letra, a oferta desse conjunto amplia a sensação de entrega; não é necessário tratar cada elemento como um acontecimento literal."
    },
    {
      "term": "주문",
      "card": "주문 pode ser uma encomenda ou um pedido num restaurante, mas também uma fórmula mágica. As imagens de encanto, tentação e castigo pedem aqui a leitura de feitiço, não de fazer um pedido comercial."
    }
  ],
  "idol": [
    {
      "term": "얼쑤",
      "card": "얼쑤 e 지화자 são exclamações de animação associadas a apresentações tradicionais coreanas. Funcionam como participação e incentivo, não como frases que precisam de uma tradução palavra por palavra.",
      "source": "https://www.hangeul.go.kr/webzine/202010/sub2_4.html"
    },
    {
      "term": "덩기덕 쿵더러러",
      "card": "Essas sílabas põem o ritmo na voz. Seu papel é sonoro: perceber a sequência e a energia ajuda mais do que procurar um significado de dicionário para cada pedaço."
    }
  ],
  "boy-with-luv": [
    {
      "term": "이카루스의 날개로",
      "card": "Ícaro, da mitologia grega, voou com asas de penas e cera, que derreteram perto demais do Sol. A letra redireciona o voo para a pessoa amada: a referência transforma altura e ambição em uma escolha de destino.",
      "source": "https://howthingsfly.si.edu/ask-an-explainer/why-flight-so-interesting"
    }
  ],
  "on": [
    {
      "term": "내 피와 살이",
      "card": "Algo que se torna 피와 살, sangue e carne, pode ser uma experiência incorporada à pessoa. Nesta leitura, a dificuldade não é só suportada: passa a fazer parte de quem o narrador é."
    }
  ],
  "life-goes-on": [
    {
      "term": "안녕이란 말로",
      "card": "Entre pessoas próximas, 안녕 pode servir tanto para encontrar quanto para se despedir. Essa mesma palavra liga começo e fim na canção. Com desconhecidos ou em situações formais, usam-se formas de tratamento mais educadas."
    }
  ],
  "yet-to-come": [
    {
      "term": "변화는 많았지만",
      "card": "변화 e 변함 se relacionam a mudança, mas 변함없다 significa permanecer o mesmo. O contraste permite dizer que muita coisa mudou sem que a essência tenha sido abandonada; não traduza 변함 sozinho como “imutabilidade”."
    }
  ],
  "run-bts": [
    {
      "term": "뛰는 놈 위에",
      "card": "O dito 뛰는 놈 위에 나는 놈 있다 lembra que acima de quem corre há quem voe: sempre pode haver alguém mais capaz. O verso acrescenta o BTS que corre, remodelando o provérbio em uma afirmação de identidade.",
      "source": "https://krdict.korean.go.kr/mon/dicSearch/SearchView?ParaWordNo=74124&nation=mon"
    }
  ],
  "intro-persona": [
    {
      "term": "진주목걸일 거네",
      "card": "O ditado 돼지 목에 진주목걸이 põe um colar de pérolas num porco: algo valioso dado a quem não o aprecia. A aproximação entre animais, pérolas e rótulos faz parte da provocação da letra, não de uma descrição literal do narrador.",
      "source": "https://krdict.korean.go.kr/kor/dicSearch/SearchView?ParaWordNo=62269"
    }
  ],
  "stay": [
    {
      "term": "반복도",
      "card": "O som 복 de 반복, repetição, reaparece em 복, sorte ou bênção. Essa proximidade sonora permite ouvir a rotina como algo precioso. É um jogo de palavras, não uma prova de que as duas palavras tenham a mesma origem."
    }
  ],
  "ego": [
    {
      "term": "뜬 구름을",
      "card": "뜬구름 잡다, agarrar nuvens, pode criticar uma ideia sem base ou um objetivo irreal. Compare 뜬구름 잡는 이야기, conversa vaga. Aqui a imagem expõe a dúvida sobre a própria vocação."
    }
  ],
  "friends": [
    {
      "term": "하루는 베프",
      "card": "베프 vem de 베스트 프렌드, adaptação de best friend. É um apelido informal. Alternar amizade íntima e briga no verso retrata intimidade com humor, sem transformar uma discussão em inimizade permanente."
    },
    {
      "term": "새끼손가락처럼",
      "card": "새끼손가락 é o dedo mínimo. Ligar os dedos mínimos pode representar uma promessa; essa associação ajuda a entender a imagem de permanecer juntos. A palavra sozinha nomeia o dedo, não significa promessa."
    }
  ],
  "filter": [
    {
      "term": "팔레트 속 색을",
      "card": "팔레트 é a paleta de cores. A letra aproxima escolher cores e escolher uma versão de alguém, como acontece com um filtro visual. O objeto concreto organiza a imagem da transformação, sem falar de uma configuração real de aplicativo."
    }
  ],
  "her": [
    {
      "term": "내 책장을",
      "card": "책장 pode nomear uma estante ou uma página de livro. Com 넘기다, virar, a leitura é virar as páginas. O verbo e a imagem da pessoa como livro resolvem a ambiguidade; não basta escolher a primeira tradução do dicionário."
    }
  ],
  "singularity": [
    {
      "term": "또 금이 가",
      "card": "금 não é sempre ouro: 금이 가다 também significa rachar. A superfície de gelo pede essa leitura. Em coreano, aprender combinações inteiras evita transformar uma rachadura em um metal precioso por engano."
    },
    {
      "term": "묻었 잖아",
      "card": "Compare 소리를 묻다, enterrar um som, e 길을 묻다, perguntar o caminho. Na forma passada, enterrado aparece como 묻었어, enquanto perguntou aparece como 물었어. A semelhança da forma de dicionário esconde usos diferentes."
    }
  ],
  "euphoria": [
    {
      "term": "내 안 깊은 곳의",
      "card": "A priori é uma expressão latina usada na filosofia para conhecimento ou justificação independente da experiência. Na canção, aparece dentro de uma imagem íntima; a referência filosófica não precisa transformar a letra numa tese literal.",
      "source": "https://plato.stanford.edu/entries/apriori/"
    }
  ],
  "just-dance": [
    {
      "term": "그 운명적인 박",
      "card": "박 pode nomear um pulso musical, enquanto 박자 fala de compasso ou ritmo. Aqui o campo da dança orienta a leitura. Não é o sobrenome 박 nem uma instrução para bater em alguém."
    }
  ],
  "zero-oclock": [
    {
      "term": "토닥여",
      "card": "토닥토닥 imita pequenas batidas suaves, como um carinho nas costas. 토닥이다 pode passar desse gesto físico para acolher ou encorajar alguém. Aplicado a si, sugere gentileza consigo mesmo."
    }
  ],
  "dimple": [
    {
      "term": "그 보조갠",
      "card": "Illegirl mistura os sons de illegal e girl. É uma criação da música, não uma palavra padrão que todo falante de inglês usaria. O encanto da covinha vira uma infração imaginária, em tom de flerte."
    }
  ],
  "for-youth": [
    {
      "term": "고마운 벗",
      "card": "벗 também significa amigo, mas costuma soar mais literário ou poético que 친구. Trocar uma palavra pela outra pode manter a informação básica e mudar a atmosfera: amizade lembrada com solenidade e afeto."
    }
  ],
  "fly-to-my-room": [
    {
      "term": "내방 toy들",
      "card": "Uma palavra inglesa pode receber uma marca coreana, como toy com -들. Misturar vocabulários não elimina a gramática coreana: a palavra emprestada passa a participar da frase e da imagem de um quarto cheio de companhia."
    }
  ],
  "blue-grey": [
    {
      "term": "나의 색깔",
      "card": "Blue pode significar triste em inglês, mas 파란색, azul, não deve ser traduzido automaticamente como tristeza em qualquer frase coreana. Aqui as duas línguas se encontram numa imagem emocional de cores."
    },
    {
      "term": "저 서슬 퍼런 그림자",
      "card": "서슬 퍼렇다 sugere uma presença ameaçadora, com a força de algo afiado. A proximidade de 퍼렇다 com tons de azul dá uma segunda camada à imagem, mas a expressão não significa apenas uma sombra de cor azul.",
      "source": "https://www.korean.go.kr/nkview/nklife/1995_2/5_6.html"
    }
  ],
  "telepathy": [
    {
      "term": "눈꼽 대신",
      "card": "눈곱 é a escrita padrão da secreção que pode ficar nos olhos ao acordar, mas se pronuncia [눈꼽]. Uma transcrição guiada pelo som pode esconder essa diferença. Para escrever fora da letra, prefira 눈곱.",
      "source": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=9112&mn_id=62"
    },
    {
      "term": "우리의 거리",
      "card": "거리 aparece primeiro como rua e depois como distância. As duas leituras ligam o passeio concreto à separação entre pessoas. A grafia igual não obriga a usar a mesma tradução nas duas linhas."
    }
  ],
  "dis-ease": [
    {
      "term": "그래 내가 일 그 자체",
      "card": "O inglês ill, doente, soa parecido com 일, trabalho. A mistura faz a identificação com o trabalho soar também como mal-estar. Não é que 일 signifique doença: o efeito nasce do encontro entre as línguas."
    },
    {
      "term": "이 유리 같은 병이",
      "card": "병 pode ser doença ou garrafa. Ao aparecer com vidro, a palavra vira também um objeto concreto. O jogo permite que o mesmo som conecte sofrimento e impacto físico, sem exigir uma única tradução para todas as ocorrências.",
      "source": "https://krdict.korean.go.kr/eng/dicMarinerSearch/search?mainSearchWord=%EB%B3%91"
    },
    {
      "term": "마음에도 방학이 필요해",
      "card": "방학 é uma pausa nas aulas, diferente do descanso genérico 쉼. Emprestar férias escolares à mente dá forma concreta à necessidade de parar: até a parte que pensa e se cobra poderia ter um intervalo."
    }
  ],
  "cypher-pt3": [
    {
      "term": "불가사의",
      "card": "불가사의, mistério ou algo inexplicável, se aproxima no som de 불가사리, nome que também significa estrela-do-mar. A sequência trabalha com a rima e a troca de imagem; palavras parecidas não precisam ter o mesmo sentido."
    },
    {
      "term": "삽질",
      "card": "삽질 pode ser cavar com uma pá, mas na fala informal também pode ser esforço inútil. Aqui o entorno de enterrar a carreira mantém a escavação e o fracasso da tentativa juntos: o sentido figurado não apaga a imagem literal."
    }
  ],
  "seesaw": [
    {
      "term": "눈치 말고",
      "card": "눈치 envolve perceber o clima, as reações e as expectativas não ditas de outras pessoas. Na decisão de sair da gangorra, a expressão aponta para não ficar preso tentando adivinhar o que o outro fará."
    }
  ],
  "moon": [
    {
      "term": "내 바다는",
      "card": "Os mares da Lua são regiões escuras de rocha vulcânica, não oceanos de água. Essa curiosidade ajuda a visualizar o contraste entre a superfície lunar e a Terra cheia de vida; o sentido afetivo da comparação continua sendo poético.",
      "source": "https://science.nasa.gov/moon/lunar-craters/"
    }
  ],
  "jamais-vu": [
    {
      "term": "미시감에",
      "card": "미시감 corresponde a jamais vu: o que era familiar parece estranho ou como se nunca tivesse sido visto. Contrasta com déjà vu, a impressão de já conhecer algo novo. Aqui ajuda a ler a repetição do jogo como experiência que continua desconcertante.",
      "source": "https://www.korea.kr/news/reporterView.do?newsId=65070482"
    }
  ],
  "make-it-right": [
    {
      "term": "눈치챘던 순간",
      "card": "눈치채다 é perceber algo a partir de sinais. Já 눈치를 보다 se aproxima de observar as reações e expectativas de outras pessoas. Nesta abertura, o olhar se volta ao próprio eu: a letra usa uma percepção normalmente voltada ao entorno para falar de si.",
      "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=92522"
    },
    {
      "term": "활짝 펼칠게",
      "card": "활짝 combina com coisas que se abrem, mas também com expressões como 활짝 웃다, sorrir de orelha a orelha. Com o mapa, dá a sensação de abrir sem reserva o caminho que orienta a volta. Não é apenas uma indicação de tamanho."
    },
    {
      "term": "날 어루만져줘",
      "card": "어루만지다 pode ser acariciar com a mão ou confortar por palavras e gestos. Em 말로 마음을 어루만지다, o carinho chega pela fala. Essa passagem entre toque e acolhimento permite ouvir o pedido da letra nos dois planos.",
      "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=70490"
    }
  ],
  "dionysus": [
    {
      "term": "티르소스 grippin' 포도 eatin'",
      "card": "티르소스 é o tirso de Dioniso: um bastão associado ao deus grego do vinho, frequentemente representado com hera. A presença de 포도 e 아이비 aproxima as imagens da música dessa iconografia. O microfone feito de madeira e hera pode ser lido como uma transformação artística do bastão.",
      "source": "https://www.metmuseum.org/art/collection/search/254918"
    },
    {
      "term": "예술도 술이지 뭐",
      "card": "예술 significa arte; 술 significa bebida alcoólica. A segunda palavra soa como o final da primeira, criando a ponte entre beber e mergulhar na criação. É um jogo sonoro, não uma afirmação de que as duas palavras têm a mesma origem."
    },
    {
      "term": "예술에 취해 불러 옹헤야",
      "card": "옹헤야 remete a uma canção tradicional ligada à debulha da cevada, especialmente em regiões de Gyeongsang. Funciona como refrão rítmico: não precisa ser traduzido como uma frase comum. Na música, essa referência aproxima a festa de uma tradição vocal coreana.",
      "source": "https://www.gugak.go.kr/ency/topic/view/954"
    },
    {
      "term": "내가 아이돌이든 예술가이든",
      "card": "우린 두 번 태어나지 ganha uma continuação na passagem de ídolo a artista. A construção 아이돌이든 예술가이든 coloca os dois rótulos em pé de igualdade: seja um ou outro, o que importa? Essa é uma leitura da relação entre os versos, não uma definição de quem pode ser artista."
    },
    {
      "term": "뭐가 중요해 짠해",
      "card": "짠 pode imitar o encontro dos copos em um brinde. Com 해, a leitura contextual é vamos brindar. Já 짠하다 pode expressar pena ou uma emoção apertada no peito em outros contextos. A sequência de copos e celebração é o que orienta a escolha aqui."
    }
  ],
  "interlude-shadow": [
    {
      "term": "발 밑에 그림자",
      "card": "그림자 começa como sombra sob os pés e passa a agir como uma voz que acompanha o eu. A apresentação oficial do álbum descreve a sombra como parte de si, reconhecida ao olhar para dentro. Isso dá contexto à leitura; não é um diagnóstico psicológico do artista.",
      "source": "https://bts.ibighit.com/eng/discography/detail/map_of_the_soul-7.html"
    },
    {
      "term": "저 빛과 비례하는 내 그림자",
      "card": "빛 pode ser lida como visibilidade e sucesso; 그림자, como medo e solidão que acompanham essa exposição. A relação proporcional pertence à metáfora da música. Não significa que qualquer sombra real sempre aumente quando a luz fica mais forte."
    },
    {
      "term": "나의 바람대로",
      "card": "바람 pode significar vento ou desejo. Aqui, com 나의 e -대로, a leitura é conforme o meu desejo. A imagem de voar torna vento uma associação possível ao ouvir, mas a construção explica que a altura foi desejada."
    },
    {
      "term": "최선이 최선이란 걸",
      "card": "차선 apresenta a segunda melhor alternativa; 최선 pode indicar a melhor opção e também o máximo esforço. Repetir a mesma palavra permite a leitura dar o máximo é o melhor caminho. A fala confrontadora cobra esse esforço; a análise não transforma essa cobrança em conselho."
    },
    {
      "term": "떼어낼 수 없어 니가 뭐를 하던지",
      "card": "A letra enviada alterna grafias com -던지 e -던가 em contextos de escolha ou indiferença. Na escrita normativa, essas funções usam -든지 e -든가; as formas com -던- aparecem em outros contextos, como retomar uma experiência. Por isso preservamos a letra e explicamos a forma a usar ao estudar.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=306525"
    }
  ],
  "black-swan": [
    {
      "term": "뛰지 않는대",
      "card": "A grafia -는대 relata uma afirmação, como uma forma abreviada de -는다고 해. Já -는데 pode introduzir contexto ou contraste. Sons próximos não tornam as duas terminações intercambiáveis. Aqui preservamos a grafia enviada e não inventamos uma pessoa específica dizendo a frase.",
      "source": "https://www.korean.go.kr/nkview/news/10/107.htm"
    },
    {
      "term": "와닿지 못해",
      "card": "와닿다 não exige toque físico. Quando uma música, uma fala ou um texto mexe com você ou faz sentido de verdade, esse verbo pode expressar essa conexão. Por isso a canção pode ser ouvida, mas não 와닿다: o problema descrito é o vínculo emocional.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=27&pageIndex=1&qna_seq=319566"
    },
    {
      "term": "소리 없는 소릴 질러",
      "card": "소리 없는 소릴 질러 combina grito e ausência de som. Depois, 힘껏 나는 소리 질러 apresenta um grito com toda a força. A mudança de formulação permite ler uma passagem da expressão bloqueada para a afirmação da própria voz. É uma leitura do contraste entre os versos."
    },
    {
      "term": "귓가엔 빠른 심장 소리만",
      "card": "느린 e 빠른 modificam o mesmo grupo, 심장 소리. O coração antes lento reaparece rápido depois do encontro com o próprio eu. A repetição com uma palavra trocada ajuda a perceber a mudança da cena, mesmo quando o refrão mantém a imagem de afundar."
    },
    {
      "term": "차라리 내 발로 갈게",
      "card": "내 발로 enfatiza ir pelos próprios meios; 끌려가지 fala de ser arrastado por algo. Essa oposição permite ler uma mudança de iniciativa: o eu escolhe entrar e criar em vez de apenas ser levado. O mar e a floresta continuam imagens abertas, não lugares que a análise precisa identificar literalmente."
    }
  ],
  "my-time": [
    {
      "term": "다른 시공간 속인 걸까",
      "card": "시차 pode indicar diferença de horário ou de momento entre acontecimentos. A letra reúne viagens, manhãs, noites e a sensação de crescer fora do ritmo dos outros. Ler o título como descompasso temporal conecta essas imagens; não significa apenas estar cansado depois de um voo.",
      "source": "https://www.korean.go.kr/common/download.do?book_seq=355&c_file_name=0736b8dc-bde5-435b-84e8-0ad2bc4fea3f_0.pdf&downGubun=bookDataView&file_path=bookData&o_file_name=%ED%8A%B9%EC%88%98%EC%96%B8%EC%96%B4-02-22.pdf"
    },
    {
      "term": "커버린 어린 나",
      "card": "커버린 vem de 크다, crescer, com -어 버리다. Não é a palavra inglesa cover. Ao colocar cresci completamente ao lado de 어린 나, meu eu jovem, a letra aproxima crescimento e juventude ainda sentida. A nuance de perda vem do contexto, não de uma regra que faça a terminação ser sempre triste."
    },
    {
      "term": "모잘 눌러쓰고",
      "card": "모잘 é uma contração de 모자를, boné ou chapéu como objeto. O som final vem da partícula -를 e não faz parte do nome 모자. Reconhecer essa contração evita confundir a palavra com 모자라다, faltar ou ser insuficiente."
    },
    {
      "term": "계속 달려",
      "card": "No final, a formulação inglesa muda de não posso para eu vou. A busca por um tempo próprio continua como pergunta, então a música não precisa ser lida como uma solução já concluída. A repetição com mudança de verbo abre espaço para decisão e esperança, numa leitura do texto."
    }
  ],
  "louder-than-bombs": [
    {
      "term": "파도가 일곤 해",
      "card": "일다 descreve ondas que surgem; não é o mesmo verbo que 일하다, trabalhar. O mar tranquilo e as ondas permitem ler a tristeza do outro como algo que movimenta o mundo interior do eu. -곤 하다 marca recorrência: a imagem não se limita a uma única onda."
    },
    {
      "term": "안 그때부터",
      "card": "안 nem sempre é uma negação. Aqui, ele vem de 알다, saber, antes de um nome: o ㄹ cai com -(으)ㄴ. Assim, 안 그때 se lê como o momento em que soube. Procurar o verbo e o nome que ele modifica evita entender a frase como não naquele momento."
    },
    {
      "term": "우리가 부럽대",
      "card": "Em 우리가 부럽대, o eu relata que outras pessoas invejam nós. A acusação de hipocrisia da linha seguinte também pertence a essas vozes externas. Distinguir quem fala evita atribuir ao narrador a opinião que ele está contestando."
    },
    {
      "term": "똥밭에 구르네",
      "card": "똥밭 é uma imagem grosseira: um terreno cheio de fezes. Com 구르다, rolar, sugere passar por humilhações ou dificuldades, faça o eu o que fizer. Traduzir apenas como um lugar ruim apaga parte da força e do registro da expressão."
    },
    {
      "term": "노래할 거라고",
      "card": "Os refrões passam de se quebrar a falar e, por fim, cantar. A promessa termina com 노래할 거라고, retomando 약속해 de antes. A voz ganha uma forma de continuar diante das ondas; isso é uma leitura da progressão da letra, não a afirmação de que toda dor foi resolvida."
    }
  ],
  "ugh": [
    {
      "term": "나는 욱해 욱해",
      "card": "욱하다 descreve uma explosão súbita de raiva. O título aproxima o som dessa reação de uma interjeição, e o refrão a transforma em verbo repetido. Isso é mais específico do que simplesmente estar irritado por muito tempo.",
      "source": "https://krdict.korean.go.kr/jpn/dicSearch/SearchView?ParaWordNo=69018"
    },
    {
      "term": "But 이건 분노 아닌 분뇨",
      "card": "분노 é raiva ou indignação; 분뇨 são fezes e urina. A proximidade sonora permite desqualificar uma agressão que se apresenta como indignação legítima. As palavras não são sinônimos e não precisam ser pronunciadas como se fossem idênticas."
    },
    {
      "term": "물기 시작하면 둥둥둥 동네북이 돼 둥둥둥",
      "card": "동네북 é literalmente o tambor do bairro e, figurativamente, alguém que todos atacam. O som 둥둥둥 faz o tambor aparecer na própria linha, enquanto a tradução saco de pancadas comunica a função da expressão em português."
    },
    {
      "term": "판단이 완벽한 사람이 돼 웃기시네",
      "card": "O honorífico -시- nem sempre torna a fala sinceramente respeitosa. Em 웃기시네, junto à crítica da perfeição moral, ele pode intensificar o sarcasmo: que pessoa engraçada, não? O contexto e a entonação orientam a leitura."
    },
    {
      "term": "나는 꺼져야만 했던 분노에 분노해",
      "card": "꺼지다 retoma a imagem do fogo: apagar-se. A construção 꺼져야만 했던 expressa uma necessidade passada reforçada; ela não determina sozinha se aquela raiva era nociva ou se uma indignação legítima foi sufocada. Convém separar a gramática da interpretação do verso."
    },
    {
      "term": "그 정돈 감수해야지 에헴",
      "card": "에헴 imita limpar a garganta e pode encenar autoridade ou importância. Na ponte, as falas sobre ganhar bem e aguentar tudo são lidas como uma caricatura de quem minimiza o sofrimento alheio. A análise apresenta essa voz sem tratar sua cobrança como conselho ao estudante."
    }
  ],
  "inner-child": [
    {
      "term": "그때의 넌",
      "card": "O eu de hoje conversa com o eu de antes. Por isso, nós, você e eu alternam ao longo da letra sem exigir três personagens diferentes. Essa leitura organiza a cena; não transforma cada imagem em uma informação biográfica confirmada."
    },
    {
      "term": "많이 웃었음 해",
      "card": "Uma forma que parece passado pode falar de um desejo. Em 웃었으면 해, o importante é a construção inteira: espero que você sorria. A versão abreviada 웃었음 해 soa mais coloquial; não quer dizer apenas você sorriu."
    },
    {
      "term": "움트던 장미 속 많은 가시",
      "card": "Uma rosa que brota também tem espinhos. A imagem permite ler beleza, crescimento e dor juntos, em vez de reduzir o passado apenas ao sofrimento. No dicionário, 움트다 pode descrever brotos que nascem e, por extensão, algo que começa a surgir.",
      "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=71420&nation=eng"
    },
    {
      "term": "내가 너가 될 테니",
      "card": "Na fala e nas letras, você pode encontrar 너가. Para escrever na norma padrão, use 네가 quando 너 recebe a partícula 가, inclusive diante de tornar-se. Aqui a troca entre eu e você encena um encontro entre épocas da mesma pessoa.",
      "source": "https://www.korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5874&mn_id=217"
    },
    {
      "term": "빛들은 지금의 나니까",
      "card": "A luz muda de papel: primeiro é algo distante que se persegue; depois, é o eu presente que pode iluminar o passado. Essa leitura liga o começo e a ponte, oferecendo uma interpretação da imagem sem afirmar que ela tem um único sentido."
    }
  ],
  "respect": [
    {
      "term": "존중조차도 없는데",
      "card": "O inglês respect pode cobrir mais de uma nuance. Aqui 존경 aponta para admiração, enquanto 존중 destaca considerar e tratar o outro com respeito. A crítica ganha força justamente porque a palavra elevada aparece sem a atitude correspondente; não é uma divisão rígida entre dois sinônimos em qualquer contexto."
    },
    {
      "term": "\"Re-spect\" 말 그대로 보고 자꾸 보는 거",
      "card": "Olhar de novo é a imagem que a letra constrói ao separar a palavra inglesa. Ela ajuda a perguntar se a admiração resiste quando os defeitos aparecem. Não use esse jogo como uma definição literal de dicionário: na conversa comum, respect não significa simplesmente olhar repetidamente."
    },
    {
      "term": "뒤에선 호박씨 까는 거",
      "card": "As sementes de abóbora são uma imagem idiomática. O Instituto Nacional da Língua Coreana explica 호박씨 까다 como fingir que não se age de determinada maneira, disfarçando intenções. Nesta letra, o cenário de bastidores aproxima a expressão de falar pelas costas. Esse contexto não deve substituir o sentido geral da expressão.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=274899&searchCondition=&searchKeyword="
    },
    {
      "term": "나도 잘은 몰라 brotha 낸들 알어",
      "card": "A letra mantém a fala espontânea. O texto enviado traz 낸들 e 알어; para estudar a escrita padrão, compare 난들 e 알아. A primeira forma participa da pergunta retórica como eu ia saber?; a segunda vem de saber. Preservar a voz coloquial não exige ensiná-la como modelo de escrita formal.",
      "source": "https://korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=5886&mn_id=217&pageIndex=215"
    },
    {
      "term": "너도 나를 respect 할 거라는 생각은 1도 없으니 스킵해",
      "card": "O número 1 vira ênfase coloquial: diante da negação, nem um pouco. Ele não conta uma pessoa nem mede temperatura aqui. Esse registro, junto da abreviação para falar francamente e do empréstimo skip, aproxima o verso de uma conversa provocativa."
    },
    {
      "term": "너의 삶에 모든 영광과 번영이 깃들길",
      "card": "Uma bênção pode ser sincera ou irônica. As palavras desejam glória e prosperidade, mas vêm depois da imagem de alguém que insulta sorrindo. O efeito nasce do contraste entre palavras gentis e comportamento hostil; a gramática do desejo, sozinha, não contém sarcasmo."
    }
  ],
  "we-are-bulletproof-eternal": [
    {
      "term": "가진 게 꿈밖에 없었네",
      "card": "A negação não apaga o sonho. Com 밖에 e 없다, a frase diz que não existia nada além dele: só havia sonhos. É diferente do substantivo que indica exterior mais uma partícula de lugar. Observar a construção inteira evita traduzir a palavra isoladamente como fora.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=261&pageIndex=1&qna_seq=327788&searchCondition=&searchKeyword="
    },
    {
      "term": "일곱의 겨울과 봄 뒤에",
      "card": "As estações fazem duas coisas: marcam a passagem do tempo e permitem ler dificuldade e renovação. O número sete ecoa os sete do refrão, mas a imagem não precisa virar uma cronologia exata de acontecimentos. Mais adiante, a pergunta sobre a primavera mantém a esperança junto da dúvida."
    },
    {
      "term": "이건 쇠로 된 증명",
      "card": "Prova e resistência se encontram na imagem do ferro, seguida de bullet-proof. A letra recupera o nome antes ridicularizado e o apresenta como algo comprovado pela caminhada. Isso permite ler a proteção como vínculo e perseverança; não significa que as pessoas sejam literalmente invulneráveis."
    },
    {
      "term": "부정적인 시선에 맞서 우린 해냈구",
      "card": "Conseguir chegar ao resultado é importante neste verso. A construção em 해내다 também aparece na ideia de conseguir conter em 막아내다: não só fazer uma ação, mas levá-la adiante apesar dos obstáculos. A grafia coloquial do final foi mantida e comentada nas notas."
    },
    {
      "term": "여기 우리가 함께이기에",
      "card": "O nós ganha companhia ao longo da letra. O começo lembra apenas sete; o final diz que, com vocês, esse nós é maior. A leitura é de inclusão de quem acompanha o grupo, não de uma alteração literal na quantidade de integrantes. O inglês you pode se referir a uma pessoa ou a várias; aqui vocês acompanha a voz coletiva."
    }
  ],
  "heartbeat": [
    {
      "term": "꿈같은 현실 깊이가 주나봐",
      "card": "A profundidade da realidade conversa com o enjoo da linha em inglês e com a imagem de estar perdido no mar. Um encontro pode parecer tão extraordinário que desorienta. Essa é uma leitura das imagens da letra; não transforma a sensação em uma descrição médica."
    },
    {
      "term": "한낮의 뜬 달 같은 나인가봐",
      "card": "Uma lua em pleno dia pode ser vista, mas chama atenção por parecer fora de seu cenário habitual. A comparação permite ler o eu como deslocado dentro de uma realidade que parece sonho. A imagem não exige afirmar que a lua só aparece à noite."
    },
    {
      "term": "어제처럼 다시 이 손 놓치 말고",
      "card": "Soltar e deixar escapar são ideias próximas, mas vêm de verbos diferentes. 놓다 forma 놓지 말고; 놓치다 forma 놓치지 말고. A letra enviada traz 놓치 말고. Na pronúncia padrão, 놓지 soa [노치], pois ㅎ e ㅈ se combinam em ㅊ. Isso ajuda a separar o som ouvido da escrita usada para estudar a gramática.",
      "source": "https://www.korean.go.kr/nkview/nklife/1998_1/8-8.html"
    },
    {
      "term": "발 맞춰 봐 다시 더는 헤매이지 않도록",
      "card": "Acompanhar o passo aproxima o movimento dos pés do ritmo do coração. A expressão 발을 맞추다 pode falar de andar no mesmo ritmo e, por extensão contextual, agir em sintonia. O Instituto Nacional da Língua Coreana usa o exemplo de ajustar os passos ao explicar 맞추다; não é o verbo de acertar uma resposta.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=&pageIndex=1&qna_seq=312100"
    },
    {
      "term": "널 만난건 이 우주가 빚어낸 한 편의",
      "card": "Youniverse combina you e universe, criando a ideia de você como um universo. A palavra inventada em inglês se liga à imagem de 우주, o universo que molda o encontro como uma história. Ela não é um termo coreano para memorizar como vocabulário padrão."
    },
    {
      "term": "운명을 느껴 너 너 너 너 너",
      "card": "A batida do coração dá uma medida poética de proximidade. Na parte em inglês, a ideia de estar a uma batida de distância sugere estar muito perto; não é uma unidade literal de espaço. Já destino nomeia como o encontro é sentido pelo eu da canção, sem precisar ser uma afirmação objetiva sobre o futuro."
    }
  ],
  "dream-glow": [
    {
      "term": "감추곤 했던 까진 무르팍 (hey)",
      "card": "Os meninos considerados fáceis de criar escondem joelhos ralados. O contraste permite ler a distância entre parecer comportado e viver quedas, esforço ou dor. A imagem deixa ver uma experiência escondida; não confirma por si só um episódio biográfico específico."
    },
    {
      "term": "내 별자리는 태양의 파편",
      "card": "Constelação e fragmento do sol aproximam uma identidade no céu de uma fonte intensa de luz. A leitura combina com o sonho que brilha no refrão. Embora 별자리 também possa significar signo conforme o contexto, este verso não identifica um signo astrológico específico."
    },
    {
      "term": "찬란한 암전 그림자의 춤 (hey)",
      "card": "Uma escuridão radiante aproxima ideias opostas. No teatro, 암전 é o escurecimento usado para mudar uma cena ou a disposição do palco. Na letra, a combinação com brilho e sombras pode sugerir movimento mesmo quando a luz parece ter desaparecido; essa é uma interpretação da imagem.",
      "source": "https://kli.korean.go.kr/term/trgtWord/indexTrgtWord.do?trgtWordNo=2323640"
    },
    {
      "term": "제껴본 적 없는 상대한텐 못 져 (hey hey)",
      "card": "A dupla negação precisa ser lida por partes: nunca ter superado um adversário e não poder perder para ele. Ela expressa disposição para encarar um desafio ainda não vencido. A grafia coloquial está preservada; no sentido de ultrapassar ou superar alguém, o Instituto Nacional da Língua Coreana orienta usar 제치다 na escrita padrão.",
      "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=&pageIndex=1&qna_seq=325852"
    },
    {
      "term": "잠시만 멈춘 채 에 에",
      "card": "Uma pausa não é automaticamente uma desistência. O futuro descrito como brilhante fica parado só por um momento, e logo vem a promessa de não abandonar o sonho. No final, as asas ainda tremem quando se abrem: a imagem permite ler coragem junto da insegurança, sem exigir que o medo desapareça primeiro."
    }
  ],
  "a-brand-new-day": [
    {
      "term": "헤쳐 나아 갈 수 있을까?",
      "card": "Abrir caminho entre obstáculos é o sentido de 헤치다 nesta imagem. O Dicionário Básico de Coreano também usa o verbo para atravessar uma multidão ou vencer dificuldades. Não confunda com 해치다, causar dano: a pergunta é sobre atravessar o medo e avançar.",
      "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=87001&nation=eng&nationCode=6"
    },
    {
      "term": "내 안의 목소리를 듣게 됐어",
      "card": "As imagens de estar encantado ou em transe dão lugar a ouvir a voz interior. Essa sequência permite ler a atração do sonho como uma descoberta do próprio desejo. O texto não precisa identificar uma força externa específica para que a passagem faça sentido."
    },
    {
      "term": "나를 찾은 날에",
      "card": "A mesma forma escrita pode ter funções diferentes. 날 é dia nesta linha, modificado pelo que aconteceu nele; já em 날 감싸 e 날 보여줘, é a contração de a mim. A partícula de tempo e o papel na frase ajudam a escolher o sentido, em vez de decorar uma tradução única."
    },
    {
      "term": "나는 날 믿었기에 핍박 기로에도",
      "card": "A encruzilhada é uma imagem de escolha: 기로 é um nome, não a construção gramatical para decidir fazer algo. Ao lado da opressão e da confiança no eu, ela prepara a ideia de seguir um caminho próprio na linha seguinte. Os nomes são compactados na letra; a relação entre eles é interpretada pelo contexto."
    },
    {
      "term": "나 무서워도 안 숙였어",
      "card": "Coragem e medo aparecem juntos. O eu relata ter corrido e mantido a cabeça erguida mesmo com receio; no final, a pergunta inicial volta. Essa volta permite ouvir a coragem como algo que se pratica, sem exigir que toda dúvida tenha desaparecido."
    }
  ],
  "all-night": [
    {
      "term": "영감아 기다려 널 잡을게 all mine",
      "card": "A inspiração vira alguém a quem se pode pedir que espere e prometer alcançar. Essa personificação explica tanto o chamado quanto o pronome você. O contexto escolhe o sentido criativo de 영감; traduzir a palavra isoladamente como senhor idoso mudaria a cena."
    },
    {
      "term": "괜찮아 내 수고는 내가 알어",
      "card": "A voz conversa de maneira informal: a forma enviada 알어 corresponde à escrita padrão 알아, e a redução para simplesmente aparece em outro verso. O ponto central é o reconhecimento do próprio esforço. Esse registro aproxima a letra da fala, sem transformar toda grafia coloquial em modelo para escrita formal."
    },
    {
      "term": "코 앞이잖아 그래미",
      "card": "Número um, prêmio e dinheiro aparecem como sinais de reconhecimento no discurso do eu da canção. A proximidade do Grammy é apresentada como aspiração; não é uma notícia de premiação. Rkive, na abertura, foi mantido como nome próprio, e o contraste com o esforço no estúdio ajuda a organizar o trecho."
    },
    {
      "term": "때론 네가 걷던 길 위엔 시기와 시비가",
      "card": "A comparação atravessa três linhas. Inveja e provocações podem ser mais numerosas que as pegadas de quem veio antes; as pessoas não são o item contado nessa comparação. O Dicionário Básico de Coreano registra 시비 tanto para julgar certo e errado quanto para disputas; o contexto de hostilidade orienta a escolha aqui.",
      "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=66601"
    },
    {
      "term": "해가 뜨기 전 어둠은 꽤나 짙어",
      "card": "A noite reúne trabalho, festa e desejo de proximidade ao longo da canção. A imagem da escuridão antes do amanhecer pode acompanhar a espera por clareza ou inspiração. Ela não obriga a tratar toda fala romântica como se fosse apenas sobre música: o contexto muda entre os versos."
    }
  ],
  "mikrokosmos": [
  {
    "term": "반짝이는 별빛들",
    "card": "O título coreano 소우주 significa microcosmo, um pequeno universo. A leitura de cada pessoa como um mundo inteiro combina com a passagem de estrelas e prédios para vidas individuais. Essa ligação é uma interpretação das imagens da letra; não exige tratar cada estrela como um objeto astronômico literal.",
    "source": "https://www.korean.go.kr/nkview/nklife/1990_4/23_3.html"
  },
  {
    "term": "70억 개의 빛으로 빛나는",
    "card": "Na contagem coreana, 억 vale cem milhões: 70억 corresponde a sete bilhões. O número da letra cria a imagem de muitas vidas e mundos individuais. Ele é mantido como parte do texto da canção, sem ser apresentado como uma estimativa atual da população mundial. 개 conta unidades; 가지 destaca variedades."
  },
  {
    "term": "가장 깊은 밤에 더 빛나는 별빛",
    "card": "O pós-refrão passa de uma descrição, a noite mais profunda, para uma relação gradual: quanto mais a noite se aprofunda, mais a luz brilha. No contexto, escuridão e brilho permitem uma leitura de dificuldade e valor humano. A imagem poética não precisa virar uma afirmação física sobre estrelas."
  },
  {
    "term": "사람이란 불, 사람이란 별로",
    "card": "Uma separação de palavras muda a leitura. Neste trecho, 별로 é estrela mais a partícula 로 e se liga a cheio na linha seguinte. Em frases como 별로 안 좋아요, a mesma escrita funciona como advérbio, não muito. Ler o verso seguinte evita escolher o significado errado."
  },
  {
    "term": "우린 우리대로 빛나",
    "card": "O final reúne duas ideias próximas, mas diferentes: brilhar do nosso jeito e brilhar por sermos quem somos. Antes disso, olhar e sonhar se transforma em olhar e respirar. Essas mudanças pequenas aprofundam a reciprocidade sem apagar a individualidade de cada pessoa."
  }
],
  "home": [
  {
    "term": "미칠듯한 설레임에",
    "card": "A letra enviada usa 설레임, mas a forma padrão é 설렘, derivada de 설레다. As duas grafias podem aparecer em textos que você encontra; para escrever em coreano padrão, use 설렘. Aqui a forma recebida continua visível e a nota distingue leitura da letra e modelo de escrita.",
    "source": "https://korean.go.kr/front/mcfaq/mcfaqView.do?mcfaq_seq=6031&mn_id=217&pageIndex=1"
  },
  {
    "term": "마치 무슨 본때를 보여줄 것처럼",
    "card": "Mostrar 본때 pode ser mostrar capacidade ou dar uma demonstração marcante; em tom hostil, a expressão também pode sugerir dar uma lição. Aqui a saída empolgada e as expectativas favorecem mostrar do que sou capaz. Traduzir toda ocorrência como ameaça apagaria o contexto."
  },
  {
    "term": "뭔가 채울수록 더 비어가",
    "card": "Os dois versos com quanto mais criam um paradoxo: preencher traz vazio, estar acompanhado traz solidão. O contraste com casa grande e amigos permite ler isso como distância entre sucesso exterior e acolhimento. É uma leitura da letra, sem transformar a sensação do eu em diagnóstico."
  },
  {
    "term": "아마 그곳이 mi casa",
    "card": "Mi casa é espanhol para minha casa. No refrão, a pessoa define o lar mais que o tamanho do imóvel. A riqueza também passa a ser sentida com alguém. A imagem do interruptor pode sugerir luz acesa e recepção; não é preciso impor um único sentido oculto à palavra."
  },
  {
    "term": "다녀왔어 hi mi casa",
    "card": "다녀오다 reúne a ida e a volta. 다녀왔어 pode anunciar cheguei de volta; uma forma educada é 다녀왔어요. O final também muda o pedido para deixar ligado em uma descoberta de que já estava ligado. A acolhida esperada se torna percebida.",
    "source": "https://krdict.korean.go.kr/eng/dicMarinerSearch/search?mainSearchWord=%EB%8B%A4%EB%85%80%EC%98%A4%EB%8B%A4&nation=eng"
  }
],
  "answer-love-myself": [
  {
    "term": "니가 내린 잣대들은 너에게 더 엄격하단 걸",
    "card": "잣대 pode nomear uma régua de medir e, em sentido figurado, um critério de julgamento. Neste verso, estabelecer uma medida e ser rigoroso descrevem a avaliação que alguém faz de si. A tradução usa padrões para manter essa imagem sem sugerir uma régua física na cena."
  },
  {
    "term": "니 삶 속의 굵은 나이테",
    "card": "나이테 são os anéis de crescimento visíveis no corte de um tronco. Na letra, eles aparecem na vida de uma pessoa: a imagem permite ler tempo e experiência como partes do eu. O sentido botânico é uma definição; essa ligação com a história pessoal é uma interpretação do verso.",
    "source": "https://krdict.korean.go.kr/m/eng/searchResultView?ParaWordNo=38898"
  },
  {
    "term": "더 아름다울 美",
    "card": "A sequência muda de me, o pronome inglês, para 美, caractere que significa beleza e é lido 미 em coreano. O som próximo reúne o eu que foi triste, o eu que sentiu dor e uma beleza ainda por vir. É um jogo entre línguas e escrita; 美 não é uma tradução literal do pronome me.",
    "source": "https://www.korean.go.kr/nkview/nklife/1999_2/1999_0205.pdf"
  },
  {
    "term": "내 실수로 생긴 흉터까지 다 내 별자린데",
    "card": "Cicatrizes e constelação reorganizam a mesma ideia de marcas. Em vez de excluir os erros do retrato do eu, até essas marcas são incluídas pelo -까지. A leitura poética valoriza a integração da própria história; não afirma que um erro deixa de ter consequências."
  },
  {
    "term": "정답은 없을지도 몰라",
    "card": "A letra primeiro põe em dúvida uma resposta correta e depois afirma uma resposta no próprio percurso. Esse movimento não exige tratar um verso como contradição a corrigir: a busca faz parte do processo. O refrão em inglês também fala em aprender, em vez de anunciar que o aprendizado já terminou."
  }
],
  "serendipity": [
  {
    "term": "넌 내 푸른 곰팡이",
    "card": "곰팡이 significa mofo; 푸른 acrescenta a cor azul ou verde conforme o contexto. A estranheza da imagem faz parte da letra e foi mantida. As linhas de salvação permitem uma leitura de algo que ajuda o eu, mas não provam sozinhas uma explicação médica nem mudam a palavra para remédio."
  },
  {
    "term": "난 네 삼색 고양이",
    "card": "삼색 reúne três cores; em 삼색 고양이, descreve a pelagem do gato. A tradução inglesa usa calico cat. A imagem aproxima o eu de um animal que veio ao encontro de alguém; a linha não informa sexo, genética ou uma regra de raridade, então nada disso é tratado como fato da letra."
  },
  {
    "term": "우린 시리도록 피어",
    "card": "A flor não aparece só como objeto bonito: ela floresce 시리도록, até sentir uma dor aguda ou um frio penetrante. A imagem permite ouvir uma beleza tão intensa que dói. Essa leitura nasce da combinação das palavras; não é uma afirmação sobre como flores sentem fisicamente."
  },
  {
    "term": "우주가 우릴 위해 움직였어",
    "card": "O universo se move e o destino sente ciúme: forças abstratas recebem ações e emoções humanas. Isso sustenta a sensação romântica de um encontro inevitável. A análise trata essas frases como imagens da voz da canção, sem transformá-las em explicação científica ou crença obrigatória."
  },
  {
    "term": "우리가 되어줘",
    "card": "O pedido para se tornar um nós reaparece depois como agora estamos nos tornando um nós. A passagem de pedido a processo dá movimento à relação. O final que continua pedindo para amar foi mantido porque faz parte desta versão completa."
  }
],
  "epiphany": [
  {
    "term": "웃고 있는 가면 속의 진짜 내 모습을 다 드러내",
    "card": "Uma máscara pode sorrir enquanto esconde uma tempestade. A oposição entre exterior e interior organiza o começo da letra. O sentido de revelar é deixar o eu aparecer; a imagem não precisa ser traduzida como uma máscara física em todas as linhas."
  },
  {
    "term": "이제야 깨달아 So I love me",
    "card": "이제, agora, ganha uma nuance importante com -야: só agora ou finalmente agora. A palavra ajuda a entender o título como descoberta. O refrão não diz apenas eu me amo; ele mostra o momento de reconhecer algo que antes não era percebido."
  },
  {
    "term": "조금은 뭉툭하고 부족할지 몰라",
    "card": "뭉툭하다 descreve algo sem uma ponta aguda, como um contorno rombudo. No autorretrato, sem jeito ou pouco lapidado adapta essa imagem. Em inglês, rough around the edges conserva a ideia; blunt sozinho poderia ser confundido com falar de modo grosseiro."
  },
  {
    "term": "하지만 이대로의 내가 곧 나인 걸",
    "card": "곧 pode indicar em breve em outras frases, mas aqui afirma identidade: este eu é precisamente eu. A letra admite possíveis limitações e ainda assim afirma beleza. A concessão não exige corrigir toda imperfeição antes de reconhecer o próprio valor."
  }
],
  "trivia-love": [
  {
    "term": "사람을 사랑으로 만들 사람",
    "card": "사람, pessoa, e 사랑, amor, diferem no 받침 da última sílaba: ㅁ em 람 e ㅇ em 랑. O desenho de um contorno com cantos dá lugar a um círculo. O verso transforma essa mudança visual e sonora em imagem de uma pessoa transformada pelo amor."
  },
  {
    "term": "I와 U의 거린 멀지만",
    "card": "O jogo passa ao alfabeto inglês. I e U podem soar como eu e você; entre as duas letras aparecem as letras intermediárias. Outro jogo muda i para o em live e love. São formas de encenar aproximação com a própria escrita, por isso as letras foram mantidas nas duas línguas."
  },
  {
    "term": "봐 내와 네도 똑같은 소리가 나잖아",
    "card": "A norma distingue 내 e 네 pelas vogais ㅐ e ㅔ. Na fala, a diferença pode ser difícil de perceber; a canção explora essa proximidade. Isso ajuda a entender o jogo sem ensinar que as duas palavras são obrigatoriamente idênticas na pronúncia de todos os falantes.",
    "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=73&qna_seq=320008"
  },
  {
    "term": "넌 나의 바람, 바람, 바람",
    "card": "바람 pode ser vento ou desejo. Antes, o eu espera não ser apenas um vento passageiro; no final, a pessoa amada é o seu desejo. A rede de sons próximos entre pessoa, vento, orgulho e amor cria continuidade mesmo quando cada nome tem uma função diferente."
  },
  {
    "term": "넌 나의 기억을 추억으로 바꿀 사람",
    "card": "기억 e 추억 podem ser traduzidos como memória, mas o verso os coloca em contraste: de lembrar fatos para guardar recordações com valor afetivo. Essa nuance vem da cena da canção. A imagem do livro reaparece depois para apresentar a vida da outra pessoa como história da qual o eu quer participar."
  }
],
  "the-truth-untold": [
  {
    "term": "이 모래성에 난 날 매었어",
    "card": "No castelo de areia, o eu diz que amarrou a si mesmo: 난 é o tópico e 날 é o objeto. 매다 significa amarrar. O castelo sugere um refúgio frágil; a ação reflexiva torna o isolamento algo em que o próprio narrador também participa.",
    "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=26487&nation=eng"
  },
  {
    "term": "또 가면을 쓰고 널 만나러 가",
    "card": "A máscara permite o encontro e ao mesmo tempo impede mostrar quem se é. No final ela aparece quebrada, junto do castelo em ruínas. Essa mudança retoma as mesmas imagens em outro estado e aprofunda o desencontro entre querer alguém e conseguir se revelar."
  },
  {
    "term": "외로움의 정원에 핀",
    "card": "A letra alterna 피다, a flor florescer, e 피우다, alguém fazer a flor florescer. A diferença muda quem age. No jardim de solidão algo já floresceu; depois o eu imagina cultivar uma flor parecida com a outra pessoa como uma forma de oferecer algo."
  },
  {
    "term": "용길 내서 너의 앞에 섰더라면",
    "card": "A coragem aparece numa hipótese sobre o que não foi feito: se eu tivesse ficado à sua frente. A pergunta seguinte imagina um presente diferente. O retorno ao choro encerra essa possibilidade imaginada e traz a cena de volta ao que o eu está vivendo."
  },
  {
    "term": "초라한 모습 보여줄 순 없어",
    "card": "As palavras que descrevem o eu como sem brilho ou feio pertencem à maneira como o narrador se enxerga. Já a outra pessoa é associada a calor verdadeiro e beleza. A diferença entre esses retratos ajuda a entender o medo de se mostrar, sem tratar a autoavaliação como um julgamento objetivo."
  }
],
  "tear": [
  {
    "term": "이별은 내게 티어",
    "card": "A escrita inglesa tear reúne lágrima e rasgo, mas os sentidos não têm a mesma pronúncia: a lágrima rima com dear; rasgar rima com care. A letra aproxima chorar e dilacerar o coração, depois troca parte do refrão para fear, medo. O jogo envolve escrita, som e imagens.",
    "source": "https://dictionary.cambridge.org/us/dictionary/english/tear"
  },
  {
    "term": "오고야 말았던 나의 댓가",
    "card": "A grafia padrão é 대가, preço ou consequência, mesmo que a pronúncia tenha som forte de ㄲ. A forma enviada 댓가 foi mantida na letra. A nota separa a leitura do material recebido do modelo de escrita que o estudante deve usar.",
    "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=331257&searchCondition=&searchKeyword="
  },
  {
    "term": "그 꿈은 비로소 꿈이 되었네",
    "card": "꿈 muda de função sem mudar de palavra. Primeiro é um projeto que parecia compartilhado; depois é algo que ficou apenas no sonho. Essa virada ajuda a entender a distância entre o que o eu acreditava viver e o desfecho que reconhece."
  },
  {
    "term": "늘 대답은 어렵지",
    "card": "정답 é a resposta considerada certa; 대답 é a resposta que se dá a alguém. A letra diz que a primeira já está decidida, mas a segunda continua difícil. Saber o desfecho não torna simples pronunciá-lo. O contraste também combina com os instantes de fala e perda de foco no final."
  },
  {
    "term": "두 글자가 준 우리의 끝",
    "card": "글자 pode contar blocos de escrita. Em coreano, um bloco de Hangul geralmente representa uma sílaba; 이별, separação, tem dois blocos. A imagem de duas sílabas capazes de trazer um fim concentra uma mudança enorme num enunciado muito curto."
  }
],
  "best-of-me": [
  {
    "term": "넌 내",
    "card": "O refrão foi adaptado como você tem o melhor de mim, combinando com a ideia de entregar o próprio melhor. O inglês get the best of someone também pode significar vencer ou dominar alguém em outros contextos. Aqui a leitura acompanha a entrega afetiva e a vulnerabilidade presentes na letra."
  },
  {
    "term": "다정한 파도고 싶었지만",
    "card": "A onda que queria ser gentil encontra a outra pessoa como mar. A troca de escala faz o eu perceber que essa pessoa é maior que a imagem que ele tinha para si. O mar não recebe um significado único de dicionário: a relação entre as duas imagens produz a leitura."
  },
  {
    "term": "넌 나의 구원 넌 나의 창",
    "card": "창 foi traduzido aqui como janela, uma abertura junto da imagem de salvação. É importante reconhecer o contexto: o mesmo som pode ter outros sentidos em outras frases. A ocorrência de uma lâmina em outro verso não obriga a escolher o homônimo lança nesta linha.",
    "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=24885&nation=eng&nationCode=6"
  },
  {
    "term": "난 너의 칼에 입맞춰",
    "card": "Beijar a lâmina aproxima um gesto de afeto de algo que pode ferir. A imagem vem depois de falar a língua do outro e respirar sua respiração, aprofundando a ideia de entrega. O texto pode ser lido como uma voz vulnerável, sem transformar suas frases em regras para todo relacionamento."
  },
  {
    "term": "하루하루",
    "card": "Dias e estações se repetem antes do refrão, criando continuidade. O final volta às mesmas palavras da abertura, então a declaração de amor parece pedir confirmação de novo. As repetições foram mantidas para preservar esse movimento circular."
  }
],
  "im-fine": [
  {
    "term": "괜찮아 오직 나만이 나의 구원이잖아",
    "card": "A afirmação de ser a própria salvação combina com soltar a mão do outro e dizer que se pertence a si. A leitura destaca a agência do eu na canção. Mais adiante, a possibilidade de cair retorna; estar bem aparece como algo que o eu insiste em dizer e praticar."
  },
  {
    "term": "네 목소린 모두 알아 주니까",
    "card": "네, seu, e 내, meu, são formas escritas diferentes. A versão enviada diz sua voz; por isso a tradução não mudou o sujeito possessivo para tornar a sequência mais previsível. Comparar a grafia é especialmente útil quando as duas vogais soam próximas na fala."
  },
  {
    "term": "이 스산한 달빛이",
    "card": "스산하다 pode reunir frio, desolação e uma sensação inquietante. No luar, essa palavra muda o clima em relação ao céu claro do início. A ponte ainda pergunta se a outra pessoa vê e ouve o mesmo, preparando a afirmação que será repetida.",
    "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=65080"
  },
  {
    "term": "주문을 걸어",
    "card": "주문 pode ser pedido comercial em outras cenas, mas 주문을 걸다 é lançar um encantamento. O pesadelo e a frase repetida orientam esse sentido. A música apresenta a própria fala como um gesto que ajuda o eu a enfrentar aquilo que pode voltar."
  },
  {
    "term": "또 다시 쓰러진대도",
    "card": "O final admite cair de novo e ainda assim repete estou bem. As concessões da letra mantêm dificuldade e persistência lado a lado. A afirmação repetida não apaga o pesadelo da cena; mostra o modo como o eu tenta responder a ele."
  }
],
  "airplane-pt2": [
  {
    "term": "우리가 가는 그 곳이 어디든 party",
    "card": "Mariachi se refere a uma tradição musical mexicana e também pode nomear seus intérpretes. El é o artigo espanhol. O refrão usa essa referência ao lado de uma lista internacional de destinos; a continuidade entre cantar e viajar organiza o trecho.",
    "source": "https://www.gob.mx/cultura/prensa/el-mariachi-referente-de-la-musica-tradicional-mexicana?idiom=es-MX"
  },
  {
    "term": "(We still) 호텔방서 작업",
    "card": "A repetição de still contrasta a mudança de escala com a permanência do trabalho. Viajar pelo mundo não elimina a criação no quarto de hotel nem os dias bons e ruins. O nome de lugar recebe uma redução coloquial: 호텔방서 vem de 호텔방에서."
  },
  {
    "term": "(I still) 오늘은 뭐로 살지 김남준 아님 RM?",
    "card": "A pergunta coloca lado a lado o nome pessoal 김남준 e o nome artístico RM. Ela pode ser lida como uma negociação entre vida pessoal e papel público. A idade citada pertence ao momento narrado na letra e não deve ser lida como idade atual."
  },
  {
    "term": "여권은 과로사 직전",
    "card": "O passaporte recebe uma condição humana de excesso de trabalho. Essa personificação exagera a rotina de viagens e dialoga com não saber parar nem descansar. A imagem também desloca a ostentação de dinheiro para sinais de trabalho e circulação."
  },
  {
    "term": "스물다섯, 잘 사는 법은 아직도 보르겠어",
    "card": "A transcrição enviada tem 보르겠어; a análise usa o sentido contextual de 모르겠어, não sei. Mais adiante, a contagem de milhagem também tem uma grafia irregular e foi explicada como aproximação. As notas distinguem o texto recebido das formas de estudo."
  }
],
  "go-go": [
  {
    "term": "탕진잼 탕진잼 탕진잼",
    "card": "탕진잼 combina gastar até acabar e 잼, redução de 재미, diversão. YOLO abrevia You Only Live Once, você só vive uma vez. A euforia desses chamados contrasta com futuro hipotecado e conta vazia; essa tensão permite uma leitura irônica do consumo na canção.",
    "source": "https://www.korea.kr/briefing/policyBriefingView.do?endDate=2024-10-13&newsId=148848005&pageIndex=&srchWord=&startDate=2023-10-13&tongYeog=Y"
  },
  {
    "term": "티끌 모아 티끌 탕진잼 다 지불해",
    "card": "O provérbio 티끌 모아 태산 diz que até pequenas partículas, juntas, podem formar uma montanha. A letra troca 태산 por 티끌: juntar pó continua dando pó. A mudança curta quebra a promessa de que guardar pouco a pouco sempre levará a algo grande na experiência desse eu.",
    "source": "https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&pageIndex=1&qna_seq=309011"
  },
  {
    "term": "밑 빠진 독이야",
    "card": "밑 빠진 독에 물 붓기 é despejar água num pote sem fundo: esforço ou recursos entram, mas o recipiente não enche. A letra transforma a conta bancária nesse pote e o eu em quem despeja água todos os dias. 독 aqui é um recipiente, não veneno.",
    "source": "https://krdict.korean.go.kr/eng/dicSearch/SearchView?ParaWordNo=66592"
  },
  {
    "term": "쥐구멍 볕들 때까지",
    "card": "A imagem lembra 쥐구멍에도 볕 들 날 있다: até num buraco de rato haverá um dia de sol. O provérbio fala da possibilidade de a sorte chegar mesmo a quem vive mal. No refrão, esperar essa luz se aproxima de continuar até o amanhecer."
  },
  {
    "term": "내 일주일 월화수목 금금금금",
    "card": "월화수목 são abreviações de segunda a quinta; 금 é sexta-feira. A letra alonga a sequência repetindo sexta, em vez de completar uma semana normal. O calendário vira parte do ritmo e do desejo de prolongar o clima de festa, enquanto o título aproxima o som de 고민 e Go."
  }
],
  "magic-shop": [
  {
    "term": "문을 하나 만들자 너의 맘 속에다",
    "card": "A loja ganha uma porta criada dentro do coração. Chá quente, céu e acolhimento constroem esse espaço como refúgio imaginado. A imagem convida o ouvinte a entrar na história; seu funcionamento vem da cena poética, não de uma descrição de um comércio real."
  },
  {
    "term": "넌 절벽 끝에 서 있던",
    "card": "A quebra de verso pode enganar: o trecho que estava à beira do precipício modifica o eu na linha seguinte. Você é o tópico da frase inteira e a última razão daquele eu. Ler as duas linhas juntas evita trocar quem estava no limite."
  },
  {
    "term": "필 땐 장미꽃처럼",
    "card": "Rosa, flor de cerejeira e glória-da-manhã acompanham três ações: florescer, espalhar-se ao vento e murchar. A sequência valoriza momentos diferentes da flor e prepara a revisão do desejo de ser sempre o melhor. As comparações não dependem de uma regra botânica literal."
  },
  {
    "term": "무기였던 내 욕심은 되려 날 옥죄고 또 목줄이 됐어",
    "card": "A mesma ambição muda de arma para coleira. O que antes parecia ajudar passa a apertar o eu; 옥죄다 torna essa pressão concreta. A lembrança posterior distingue competir para ser o melhor de querer oferecer consolo e emoção a alguém."
  },
  {
    "term": "넌 찾아낼 거야 네 안에 있는 galaxy",
    "card": "O encerramento devolve ao ouvinte aquilo que ele ajudou o eu a encontrar: o melhor de si e sua galáxia interior. O movimento de mostre para mim, eu mostro para você torna o apoio recíproco. A resposta não fica apenas do lado de quem canta."
  }
]
};

export function addMusicCuriosities(songId:string,sections:{title:string;lines:StudyLine[]}[]):{title:string;lines:StudyLine[]}[]{
 const additions=musicCuriosities[songId];if(!additions?.length)return sections;
 const used=new Set(sections.flatMap(section=>section.lines.flatMap(line=>(line.entries??[]).filter(entry=>entry.card).map(entry=>entry.term))));
 return sections.map(section=>({...section,lines:section.lines.map(line=>({...line,entries:line.entries?.map(entry=>{
  const item=additions.find(item=>item.term===entry.term);
  if(!item||entry.card||used.has(item.term))return entry;
  used.add(item.term);return {...entry,card:item.card,cardSource:item.source};
 })}))}));
}
