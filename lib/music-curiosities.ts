import type {StudyLine} from './spring-day';
export type MusicCuriosity={term:string;card:string;source?:string};
// Editorial additions: one occurrence per song; original cards remain unchanged.
export const musicCuriosities:Record<string,MusicCuriosity[]>=
{
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
