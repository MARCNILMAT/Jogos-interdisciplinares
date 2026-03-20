// Banco de Questões - SaberMG (Alinhado ao CBC MG)
// Estrutura: id, grade, discipline, type, text, options, answer, explanation, skill

export const QUESTIONS_DB = [
  // --- MATEMÁTICA ---
  {
    id: 1,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual das frações abaixo é equivalente a 1/2 (um meio)?",
    options: ["2/3", "4/8", "3/5", "2/5"],
    answer: "4/8",
    explanation: "Se dividirmos 4 e 8 por 4, encontramos 1 e 2. 4/8 é a metade!",
    skill: "Frações Equivalentes"
  },
  {
    id: 2,
    grade: "6º",
    discipline: "Matemática",
    type: "tf",
    text: "O número 15 é um número primo.",
    options: ["Verdadeiro", "Falso"],
    answer: "Falso",
    explanation: "O número 15 pode ser dividido por 1, 3, 5 e 15. Números primos só dividem por 1 e eles mesmos.",
    skill: "Números Primos"
  },
  {
    id: 3,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual o resultado de (-8) + (+5)?",
    options: ["-13", "-3", "+3", "+13"],
    answer: "-3",
    explanation: "Se você deve 8 reais e paga 5, você ainda fica devendo 3 reais (-3).",
    skill: "Operações com Inteiros"
  },
  {
    id: 12,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual o valor de x na equação: 2x + 4 = 12?",
    options: ["2", "4", "6", "8"],
    answer: "4",
    explanation: "Subtraindo 4 de ambos os lados: 2x = 8. Dividindo por 2: x = 4.",
    skill: "Equações de 1º Grau"
  },
  {
    id: 13,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é a soma dos ângulos internos de qualquer triângulo?",
    options: ["90º", "180º", "360º", "270º"],
    answer: "180º",
    explanation: "A soma dos ângulos internos de um triângulo é sempre igual a 180º.",
    skill: "Geometria"
  },
  {
    id: 14,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é a fórmula correta para calcular o discriminante (Delta) na Equação do 2º Grau?",
    options: ["Δ = b² + 4ac", "Δ = b² - 4ac", "Δ = a² - 4bc", "Δ = c² - 4ab"],
    answer: "Δ = b² - 4ac",
    explanation: "A fórmula correta é b ao quadrado menos 4 vezes com a vezes c.",
    skill: "Equação do 2º Grau"
  },
  {
    id: 15,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Em um triângulo retângulo com catetos 3 cm e 4 cm, qual a medida da hipotenusa?",
    options: ["5 cm", "6 cm", "7 cm", "8 cm"],
    answer: "5 cm",
    explanation: "Usando o Teorema de Pitágoras: a² = b² + c² => a² = 9 + 16 = 25. Logicamente, a = 5.",
    skill: "Teorema de Pitágoras"
  },

  // --- PORTUGUÊS ---
  {
    id: 4,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'O gato preto dormiu no sofá', qual é o Adjetivo?",
    options: ["Gato", "Preto", "Sofá", "Dormiu"],
    answer: "Preto",
    explanation: "'Preto' é a característica do gato, portanto, um adjetivo.",
    skill: "Classes de Palavras"
  },
  {
    id: 5,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Identifique o sujeito da frase: 'As crianças jogavam bola na rua.'",
    options: ["Jogavam bola", "Na rua", "As crianças", "Bola"],
    answer: "As crianças",
    explanation: "Quem jogava bola? 'As crianças'. Esse é o sujeito.",
    skill: "Sintaxe: Sujeito"
  },
  {
    id: 16,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'O bolo foi comido pelas crianças', qual é a voz verbal?",
    options: ["Voz Ativa", "Voz Passiva", "Voz Reflexiva"],
    answer: "Voz Passiva",
    explanation: "O sujeito (O bolo) sofre a ação de ser comido pelas crianças.",
    skill: "Vozes Verbais"
  },
  {
    id: 17,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em atribuir características humanas a seres inanimados?",
    options: ["Metáfora", "Personificação (Prosopopeia)", "Hipérbole", "Aliteração"],
    answer: "Personificação (Prosopopeia)",
    explanation: "Personificação é quando damos vida ou sentimentos humanos a objetos ou animais.",
    skill: "Figuras de Linguagem"
  },
  {
    id: 18,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'Choveu hoje, mas fomos à praia', a conjunção 'mas' indica...",
    options: ["Adição", "Oposição (Adversidade)", "Conclusão", "Explicação"],
    answer: "Oposição (Adversidade)",
    explanation: "O 'mas' liga ideias contrárias: chover e ir à praia de qualquer forma.",
    skill: "Conjunções"
  },

  // --- CIÊNCIAS ---
  {
    id: 6,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a estrutura celular responsável por produzir energia para a célula?",
    options: ["Núcleo", "Ribossomo", "Membrana", "Mitocôndria"],
    answer: "Mitocôndria",
    explanation: "A mitocôndria funciona como a 'usina de energia' da célula.",
    skill: "Citologia"
  },
  {
    id: 19,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual bioma brasileiro é caracterizado por árvores retorcidas, casca grossa e raízes profundas?",
    options: ["Amazônia", "Pantanal", "Cerrado", "Caatinga"],
    answer: "Cerrado",
    explanation: "A vegetação do Cerrado tem essas adaptações para sobreviver ao clima com estação seca.",
    skill: "Ecossistemas/Biomas"
  },
  {
    id: 7,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é o 'Efeito Estufa'?",
    options: [
      "Um fenômeno 100% prejudicial criado pelo homem.",
      "Um fenômeno natural que mantém a Terra aquecida.",
      "O resfriamento do planeta.",
      "A chuva ácida."
    ],
    answer: "Um fenômeno natural que mantém a Terra aquecida.",
    explanation: "O Efeito Estufa é natural e essencial para a vida. O problema é o seu *agravamento*.",
    skill: "Ecologia / Clima"
  },
  {
    id: 20,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual sistema do corpo humano é responsável por bombear o sangue para todos os órgãos?",
    options: ["Sistema Respiratório", "Sistema Digestivo", "Sistema Cardiovascular (Circulatório)", "Sistema Nervoso"],
    answer: "Sistema Cardiovascular (Circulatório)",
    explanation: "O coração bombeia o sangue através dos vasos sanguíneos para todo o corpo.",
    skill: "Corpo Humano"
  },
  {
    id: 21,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual partícula subatômica possui carga elétrica negativa?",
    options: ["Próton", "Nêutron", "Elétron", "Núcleo"],
    answer: "Elétron",
    explanation: "Os elétrons orbitam o núcleo e têm carga negativa. Prótons são positivos.",
    skill: "Estrutura Atômica"
  },

  // --- HISTÓRIA ---
  {
    id: 8,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual civilização antiga é famosa pelas Pirâmides e pelos Faraós?",
    options: ["Grécia", "Roma", "Egito", "Mesopotâmia"],
    answer: "Egito",
    explanation: "Os Egípcios construíram pirâmides como túmulos para os Faraós.",
    skill: "Antiguidade"
  },
  {
    id: 9,
    grade: "7º",
    discipline: "História",
    type: "tf",
    text: "O Feudalismo foi um sistema onde a terra (feudo) era a principal fonte de riqueza.",
    options: ["Verdadeiro", "Falso"],
    answer: "Verdadeiro",
    explanation: "Correto! Na Idade Média, a economia era baseada na agricultura e na posse de terras.",
    skill: "Idade Média"
  },
  {
    id: 22,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Qual movimento intelectual do século XVIII defendia o uso da Razão e da Liberdade?",
    options: ["Renascimento", "Iluminismo", "Reforma Protestante", "Mercantilismo"],
    answer: "Iluminismo",
    explanation: "O Iluminismo (Século das Luzes) combatia o absolutismo e defendia os direitos do homem.",
    skill: "Iluminismo"
  },
  {
    id: 23,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "A Revolução Industrial se iniciou no final do século XVIII em qual país?",
    options: ["França", "Alemanha", "Inglaterra", "Estados Unidos"],
    answer: "Inglaterra",
    explanation: "A Inglaterra tinha recursos como carvão e ferro, além de capital para investir nas fábricas.",
    skill: "Revolução Industrial"
  },
  {
    id: 24,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Quem foi o líder brasileiro que governou durante o período conhecido como 'Estado Novo' (1937-1945)?",
    options: ["Juscelino Kubitschek", "Dom Pedro II", "Getúlio Vargas", "Deodoro da Fonseca"],
    answer: "Getúlio Vargas",
    explanation: "Getúlio Vargas governou o Brasil de forma ditatorial durante o Estado Novo.",
    skill: "Era Vargas"
  },

  // --- GEOGRAFIA ---
  {
    id: 10,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a camada mais interna da Terra?",
    options: ["Crosta", "Manto", "Núcleo", "Atmosfera"],
    answer: "Núcleo",
    explanation: "O Núcleo fica no centro da Terra e é extremamente quente.",
    skill: "Estrutura da Terra"
  },
  {
    id: 11,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Em qual região do Brasil fica o estado de Minas Gerais?",
    options: ["Nordeste", "Sul", "Centro-Oeste", "Sudeste"],
    answer: "Sudeste",
    explanation: "Minas Gerais compõe o Sudeste junto com SP, RJ e ES.",
    skill: "Divisão Regional do Brasil"
  },
  {
    id: 25,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o maior país da América do Sul em extensão territorial?",
    options: ["Argentina", "Chile", "Colômbia", "Brasil"],
    answer: "Brasil",
    explanation: "O Brasil é o maior país sul-americano, ocupando quase metade do continente.",
    skill: "América do Sul"
  },
  {
    id: 26,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "O processo de integração econômica e espacial que conecta o mundo todo é chamado de:",
    options: ["Urbanização", "Globalização", "Industrialização", "Descentralização"],
    answer: "Globalização",
    explanation: "A Globalização aumenta a circulação de pessoas, mercadorias e informações pelo planeta.",
    skill: "Globalização"
  },
  {
    id: 27,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "Em qual continente está localizado o Rio Nilo?",
    options: ["Ásia", "América", "África", "Europa"],
    answer: "África",
    explanation: "O Rio Nilo atravessa o Nordeste da África, sendo vital para o Egito.",
    skill: "Continentes"
  },

  // --- ARTE ---
  {
    id: 28,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual elemento visual é formado pela junção de vários pontos seguidos?",
    options: ["Linha", "Forma", "Textura", "Volume"],
    answer: "Linha",
    explanation: "A linha é um ponto em movimento ou uma sucessão de pontos.",
    skill: "Elementos Visuais"
  },
  {
    id: 29,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "Cores Primárias são aquelas que:",
    options: ["Podem ser criadas por misturas", "Não podem ser criadas pela mistura de outras", "São apenas o Preto e o Branco", "São o Rosa e o Roxo"],
    answer: "Não podem ser criadas pela mistura de outras",
    explanation: "Cores primárias (Vermelho, Amarelo, Azul) são puras e geram as outras.",
    skill: "Teoria das Cores"
  },
  {
    id: 30,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Na música, o que define a velocidade da batida ou do som?",
    options: ["Timbre", "Volume", "Ritmo (Tempo)", "Altura"],
    answer: "Ritmo (Tempo)",
    explanation: "O ritmo organiza os sons no tempo, definindo o andamento (rápido ou lento).",
    skill: "Linguagem Musical"
  },
  {
    id: 31,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual técnica artística consiste em colar diferentes materiais (recortes de papel, tecidos) sobre uma superfície?",
    options: ["Pintura", "Escultura", "Colagem", "Gravura"],
    answer: "Colagem",
    explanation: "A colagem (collage) usa materiais diversos para criar uma nova imagem.",
    skill: "Técnicas Artísticas"
  },
  {
    id: 32,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual estilo artístico, que teve Pablo Picasso como um dos líderes, fragmentava os objetos em formas geométricas?",
    options: ["Impressionismo", "Cubismo", "Surrealismo", "Realismo"],
    answer: "Cubismo",
    explanation: "O Cubismo desconstrói a imagem e a mostra de vários ângulos em formas geométricas.",
    skill: "Vanguardas Europeias"
  },

  // --- EDUCAÇÃO FÍSICA ---
  {
    id: 33,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual esporte é jugados com 5 jogadores de cada lado em uma quadra menor e usa uma bola mais pesada?",
    options: ["Campo", "Futsal", "Vôlei", "Handebol"],
    answer: "Futsal",
    explanation: "O futebol de salão (Futsal) foca em agilidade e controle em espaço reduzido.",
    skill: "Esportes de Quadra"
  },
  {
    id: 34,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Voleibol, qual é o número máximo de toques que uma equipe pode dar na bola antes de passá-la para o outro lado?",
    options: ["1 toque", "2 toques", "3 toques", "4 toques"],
    answer: "3 toques",
    explanation: "A regra permite 3 toques (ex: manchete, levantamento, ataque).",
    skill: "Voleibol"
  },
  {
    id: 35,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual prática corporal brasileira mistura jogo, dança e acrobacias ao ritmo do berimbau?",
    options: ["Samba", "Judô", "Capoeira", "Forró"],
    answer: "Capoeira",
    explanation: "A Capoeira é uma expressão cultural afro-brasileira que une arte e luta.",
    skill: "Lutas no Brasil"
  },
  {
    id: 36,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O que caracteriza o 'sedentarismo'?",
    options: ["Praticar esportes todo dia", "Falta ou insuficiência de atividade física", "Comer apenas vegetais", "Dormir 8 horas por noite"],
    answer: "Falta ou insuficiência de atividade física",
    explanation: "O sedentarismo é a falta de gastos calóricos por movimento corporal.",
    skill: "Saúde e Lazer"
  },

  // --- ENSINO RELIGIOSO ---
  {
    id: 37,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Na história das culturas, o que são 'Mitos'?",
    options: ["Notícias falsas na internet", "Histórias antigas para explicar a origem do mundo", "Tipos de remédio", "Regras de trânsito"],
    answer: "Histórias antigas para explicar a origem do mundo",
    explanation: "Mitos são narrativas simbólicas que explicavam mistérios da vida para povos antigos.",
    skill: "Narrativas Sagradas"
  },
  {
    id: 38,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que é 'Tradição Oral' nas religiões e culturas?",
    options: ["Livros escritos em computadores", "Ensinamentos passados de geração a geração por meio da fala", "Uso de microfones", "Regras de silêncio"],
    answer: "Ensinamentos passados de geração a geração por meio da fala",
    explanation: "Antes da escrita, o conhecimento era preservado contando histórias.",
    skill: "Tradição Oral"
  },
  {
    id: 39,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual é o objetivo principal dos 'Direitos Humanos'?",
    options: ["Dar privilégios a poucos", "Garantir a dignidade e liberdade de todas as pessoas", "Criar novas leis de trânsito", "Apenas proteger quem viaja"],
    answer: "Garantir a dignidade e liberdade de todas as pessoas",
    explanation: "Os Direitos Humanos buscam igualdade e respeito à vida de todos.",
    skill: "Ética e Dignidade"
  },
  {
    id: 40,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O 'Diálogo Inter-religioso' serve para:",
    options: ["Tentar converter a outra pessoa", "Promover o respeito e entendimento entre diferentes fés", "Discutir quem está certo", "Proibir cultos públicos"],
    answer: "Promover o respeito e entendimento entre diferentes fés",
    explanation: "O diálogo busca a paz e cooperação, não a disputa.",
    skill: "Diálogo e Diversidade"
  },

  // --- MATEMÁTICA (EXPANSÃO) ---
  {
    id: 41,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "O que é um número par?",
    options: ["Um número que termina em 1, 3, 5, 7, 9", "Um número que termina em 0, 2, 4, 6, 8", "Um número menor que 10", "Um número negativo"],
    answer: "Um número que termina em 0, 2, 4, 6, 8",
    explanation: "Números pares são divisíveis por 2, terminando em 0, 2, 4, 6 ou 8.",
    skill: "Números e Operações"
  },
  {
    id: 42,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o resultado de 125 x 4?",
    options: ["400", "450", "500", "600"],
    answer: "500",
    explanation: "125 + 125 = 250. 250 x 2 = 500.",
    skill: "Multiplicação"
  },
  {
    id: 43,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Se um quadrado tem lado de 5 cm, qual é o seu Perímetro?",
    options: ["10 cm", "20 cm", "25 cm", "15 cm"],
    answer: "20 cm",
    explanation: "Perímetro é a soma dos lados. 5 + 5 + 5 + 5 = 20 cm.",
    skill: "Geometria Básica"
  },
  {
    id: 44,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o Máximo Divisor Comum (MDC) de 12 e 18?",
    options: ["2", "3", "6", "12"],
    answer: "6",
    explanation: "Os divisores de 12 são 1, 2, 3, 4, 6, 12. De 18 são 1, 2, 3, 6, 9, 18. O maior comum é 6.",
    skill: "Divisibilidade"
  },
  {
    id: 45,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Se 2 kg de carne custam R$ 40,00, quanto custam 5 kg?",
    options: ["R$ 80,00", "R$ 100,00", "R$ 120,00", "R$ 140,00"],
    answer: "R$ 100,00",
    explanation: "1 kg custa R$ 20,00. Logo, 5 kg custam 5 x 20 = R$ 100,00.",
    skill: "Regra de Três"
  },
  {
    id: 46,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Calcule 25% de 200.",
    options: ["25", "50", "75", "100"],
    answer: "50",
    explanation: "25% é o mesmo que a quarta parte. 200 / 4 = 50.",
    skill: "Porcentagem"
  },
  {
    id: 47,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual o resultado de (-10) multiplicado por (-5)?",
    options: ["-50", "50", "-15", "15"],
    answer: "50",
    explanation: "Na multiplicação, menos com menos dá mais. 10 x 5 = 50.",
    skill: "Números Inteiros"
  },
  {
    id: 48,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é a média aritmética dos números 10, 20 e 30?",
    options: ["10", "15", "20", "25"],
    answer: "20",
    explanation: "Soma: 10+20+30 = 60. Divide por 3: 60 / 3 = 20.",
    skill: "Estatística Básica"
  },
  {
    id: 49,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se chama uma expressão algébrica que possui apenas um termo?",
    options: ["Monômio", "Binômio", "Trinômio", "Polinômio"],
    answer: "Monômio",
    explanation: "Monômio tem 1 termo (ex: 2x). Binômio tem 2 (ex: 2x + 3).",
    skill: "Álgebra"
  },
  {
    id: 50,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o Volume de um cubo com aresta de 3 cm?",
    options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
    answer: "27 cm³",
    explanation: "Volume = aresta x aresta x aresta. 3 x 3 x 3 = 27 cm³.",
    skill: "Volumes"
  },
  {
    id: 51,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Na função f(x) = 2x + 1, qual é o valor de f(3)?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Substitua x por 3: f(3) = 2(3) + 1 = 6 + 1 = 7.",
    skill: "Funções"
  },
  {
    id: 52,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se escreve o número 1.000 em Notação Científica?",
    options: ["1 x 10²", "1 x 10³", "1 x 10⁴", "1 x 10⁵"],
    answer: "1 x 10³",
    explanation: "1000 tem 3 zeros, então o expoente é 3.",
    skill: "Potenciação"
  },

  // --- PORTUGUÊS (EXPANSÃO) ---
  {
    id: 53,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é o substantivo coletivo para um grupo de 'Peixes'?",
    options: ["Alcateia", "Cardume", "Bando", "Enxame"],
    answer: "Cardume",
    explanation: "Cardume é o coletivo de peixes. Alcateia é de lobos.",
    skill: "Substantivos"
  },
  {
    id: 54,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual palavra está escrita de forma correta segundo a ortografia?",
    options: ["Esempio", "Exemplo", "Ezenplo", "Exenplo"],
    answer: "Exemplo",
    explanation: "A escrita correta é com 'X' e 'M' antes de 'P'.",
    skill: "Ortografia"
  },
  {
    id: 55,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "O verbo 'Correr' indica uma:",
    options: ["Ação", "Estado", "Fenômeno da Natureza", "Qualidade"],
    answer: "Ação",
    explanation: "Correr é algo que o sujeito faz, uma movimentação física.",
    skill: "Verbos"
  },
  {
    id: 56,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'Eu comprei um livro', qual é a função sintática de 'um livro'?",
    options: ["Sujeito", "Objeto Indireto", "Objeto Direto", "Adjunto"],
    answer: "Objeto Direto",
    explanation: "Comprei 'o quê?' -> Um livro. Sem preposição obrigatória.",
    skill: "Sintaxe"
  },
  {
    id: 57,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "O que é o 'Predicado' em uma oração?",
    options: ["Quem pratica a ação", "Tudo o que se declara sobre o sujeito", "A pontuação da frase", "Apenas o verbo"],
    answer: "Tudo o que se declara sobre o sujeito",
    explanation: "Tirando o sujeito, todo o resto da frase é o predicado.",
    skill: "Sintaxe: Predicado"
  },
  {
    id: 58,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "A palavra 'Médico' é acentuada por ser:",
    options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"],
    answer: "Proparoxítona",
    explanation: "Toda proparoxítona (antepenúltima sílaba tônica) é acentuada.",
    skill: "Acentuação"
  },
  {
    id: 59,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'Eles fomos ao cinema', há um erro de concordância:",
    options: ["Nominal", "Verbal", "De gênero", "De número apenas"],
    answer: "Verbal",
    explanation: "O correto seria 'Eles foram'. O verbo deve concordar com o sujeito.",
    skill: "Concordância Verbal"
  },
  {
    id: 60,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é o plural correto da palavra 'Pão'?",
    options: ["Pãos", "Pães", "Pãoses", "Pãezinhos"],
    answer: "Pães",
    explanation: "O plural de pão é pães.",
    skill: "Morfologia"
  },
  {
    id: 61,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em uma comparação implícita, sem a palavra 'como'?",
    options: ["Metáfora", "Metonímia", "Hipérbole", "Ironia"],
    answer: "Metáfora",
    explanation: "Ex: 'Você é um doce'. Comparação sem 'como'.",
    skill: "Figuras de Linguagem"
  },
  {
    id: 62,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "A oração 'Quero que você venha' é um exemplo de oração:",
    options: ["Coordenada", "Subordinada Substantiva", "Subordinada Adjetiva", "Subordinada Adverbial"],
    answer: "Subordinada Substantiva",
    explanation: "Funciona como objeto direto de 'Quero' ('Quero isto').",
    skill: "Período Composto"
  },

  // --- CIÊNCIAS (EXPANSÃO) ---
  {
    id: 63,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é o principal gás que os seres humanos absorvem do ar para a respiração?",
    options: ["Nitrogênio", "Gás Carbônico", "Oxigênio", "Hidrogênio"],
    answer: "Oxigênio",
    explanation: "O Oxigênio é essencial para a nossa respiração celular.",
    skill: "Respiração"
  },
  {
    id: 64,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "A mudança do estado da água de líquido para gasoso por fervura é chamada de:",
    options: ["Fusão", "Solidificação", "Ebulição", "Condensação"],
    answer: "Ebulição",
    explanation: "A ebulição é uma vaporização rápida com formação de bolhas.",
    skill: "Estados da Matéria"
  },
  {
    id: 65,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual destas é uma 'Máquina Simples' que usa uma barra rígida sobre um ponto de apoio?",
    options: ["Polia", "Alavanca", "Plano Inclinado", "Roda"],
    answer: "Alavanca",
    explanation: "Exemplos de alavancas: gangorra, tesoura, quebra-nozes.",
    skill: "Máquinas Simples"
  },
  {
    id: 66,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "No vácuo (espaço), o calor se propaga apenas por:",
    options: ["Condução", "Convecção", "Irradiação", "Nenhuma das anteriores"],
    answer: "Irradiação",
    explanation: "A irradiação usa ondas eletromagnéticas e não precisa de matéria para viajar.",
    skill: "Propagação do Calor"
  },
  {
    id: 67,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual glândula do corpo humano é responsável por produzir insulina e controlar o açúcar?",
    options: ["Tireoide", "Pâncreas", "Fígado", "Hipófise"],
    answer: "Pâncreas",
    explanation: "O pâncreas produz insulina, que ajuda a glicose a entrar nas células.",
    skill: "Sistema Endócrino"
  },
  {
    id: 68,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que caracteriza a reprodução 'Assexuada'?",
    options: ["Envolve macho e fêmea", "Produz descendentes idênticos (clones)", "Aumenta muito a variabilidade genética", "Ocorre apenas em mamíferos"],
    answer: "Produz descendentes idênticos (clones)",
    explanation: "Gera indivíduos geneticamente iguais ao genitor, sem troca de gametas.",
    skill: "Reprodução"
  },
  {
    id: 69,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "A Primeira Lei de Newton também é conhecida como:",
    options: ["Princípio da Ação e Reação", "Lei da Inércia", "Lei da Gravidade", "Lei da Conservação"],
    answer: "Lei da Inércia",
    explanation: "Diz que um corpo em repouso tende a ficar em repouso se nenhuma força agir.",
    skill: "Leis de Newton"
  },
  {
    id: 70,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "A Tabela Periódica organiza os elementos químicos em ordem crescente de:",
    options: ["Massa Atômica", "Número de Nêutrons", "Número Atômico (Prótons)", "Volume"],
    answer: "Número Atômico (Prótons)",
    explanation: "O número atômico é a identidade do elemento e define sua posição.",
    skill: "Tabela Periódica"
  },

  // --- HISTÓRIA (EXPANSÃO) ---
  {
    id: 71,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual período da história humana é anterior à invenção da escrita?",
    options: ["Idade Média", "Pré-História", "Antiguidade", "Iluminismo"],
    answer: "Pré-História",
    explanation: "A Pré-História vai desde o surgimento dos hominídeos até a escrita (~4000 a.C).",
    skill: "Pré-História"
  },
  {
    id: 72,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Como eram chamados os povos que não tinham moradia fixa e mudavam buscando comida?",
    options: ["Sedentários", "Nômades", "Agricultores", "Comerciantes"],
    answer: "Nômades",
    explanation: "Nômades caçavam e coletavam; sedentários passaram a plantar e fixar moradia.",
    skill: "Modos de Vida"
  },
  {
    id: 73,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "Quem foi o monge alemão que iniciou a Reforma Protestante em 1517?",
    options: ["Papa Bento", "Martinho Lutero", "João Calvino", "Rei Henrique VIII"],
    answer: "Martinho Lutero",
    explanation: "Lutero pregou as 95 Teses contra práticas da Igreja Católica da época.",
    skill: "Reforma Protestante"
  },
  {
    id: 74,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "O regime no qual o Rei detém todo o poder político e econômico é o:",
    options: ["Democracia", "Absolutismo", "República", "Anarquia"],
    answer: "Absolutismo",
    explanation: "No Absolutismo, o monarca concentra o poder ('O Estado sou Eu').",
    skill: "Estados Modernos"
  },
  {
    id: 75,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Em qual ano foi proclamada a Independência do Brasil por Dom Pedro I?",
    options: ["1500", "1808", "1822", "1889"],
    answer: "1822",
    explanation: "Foi em 7 de setembro de 1822, às margens do Rio Ipiranga.",
    skill: "Independência"
  },
  {
    id: 76,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "A Lei Áurea, assinada pela Princesa Isabel em 1888, serviu para:",
    options: ["Declarar a República", "Acabar com a escravidão", "Criar o voto feminino", "Dar terras à Igreja"],
    answer: "Acabar com a escravidão",
    explanation: "A Lei Áurea extinguiu a escravidão formal no Brasil.",
    skill: "Brasil Império"
  },
  {
    id: 77,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Qual grande conflito mundial começou em 1914 após o assassinato do arquiduque Francisco Ferdinando?",
    options: ["Segunda Guerra Mundial", "Guerra Fria", "Primeira Guerra Mundial", "Guerra do Vietnã"],
    answer: "Primeira Guerra Mundial",
    explanation: "O conflito reuniu Tríplice Entente e Tríplice Aliança (1914-1918).",
    skill: "Guerra Mundial"
  },
  {
    id: 78,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Como ficou conhecida a disputa ideológica, política e militar entre EUA e URSS?",
    options: ["Guerra Civil", "Guerra Fria", "Guerra dos 100 Anos", "Guerra de Canudos"],
    answer: "Guerra Fria",
    explanation: "Chamada de 'fria' porque os dois gigantes não se atacaram diretamente.",
    skill: "Mundo Bipolar"
  },

  // --- GEOGRAFIA (EXPANSÃO) ---
  {
    id: 79,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o nome do movimento que a Terra realiza em torno do seu próprio eixo?",
    options: ["Translação", "Rotação", "Precessão", "Nutação"],
    answer: "Rotação",
    explanation: "A Rotação dura 24 horas e é responsável pelo dia e pela noite.",
    skill: "Movimentos da Terra"
  },
  {
    id: 80,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O movimento de Translação da Terra (em torno do Sol) é responsável por:",
    options: ["Dia e Noite", "Estações do Ano", "Fases da Lua", "Eclipses"],
    answer: "Estações do Ano",
    explanation: "A Translação dura 365 dias e define Outono, Inverno, Primavera e Verão.",
    skill: "Estações do Ano"
  },
  {
    id: 81,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual grande floresta tropical ocupa a maior parte da Região Norte do Brasil?",
    options: ["Mata Atlântica", "Pantanal", "Floresta Amazônica", "Caatinga"],
    answer: "Floresta Amazônica",
    explanation: "A Amazônia é a maior floresta tropical do mundo e essencial para o clima.",
    skill: "Biomas Brasileiros"
  },
  {
    id: 82,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
    explanation: "Brasília foi inaugurada em 1960 para ser a capital federal.",
    skill: "Território Brasileiro"
  },
  {
    id: 83,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual linha imaginária divide a Terra em Hemisfério Norte e Hemisfério Sul?",
    options: ["Meridiano de Greenwich", "Trópico de Câncer", "Linha do Equador", "Círculo Polar Ártico"],
    answer: "Linha do Equador",
    explanation: "O Equador fica a 0º de latitude, dividindo o globo ao meio.",
    skill: "Coordenadas Geográficas"
  },
  {
    id: 84,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual continente abriga a Floresta do Congo e o Deserto do Saara?",
    options: ["Ásia", "Europa", "África", "América"],
    answer: "África",
    explanation: "São duas das maiores feições naturais do continente africano.",
    skill: "Geografia Mundial"
  },
  {
    id: 85,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que significa a sigla PIB na economia?",
    options: ["Plano de Investimento Brasileiro", "Produto Interno Bruto", "População Integrada e Brava", "Produção Industrial de Base"],
    answer: "Produto Interno Bruto",
    explanation: "O PIB mede a soma de todos os bens e serviços produzidos por um país.",
    skill: "Economia Global"
  },
  {
    id: 86,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual país europeu é famoso pelo formato que lembra uma 'Bota'?",
    options: ["França", "Espanha", "Itália", "Grécia"],
    answer: "Itália",
    explanation: "A península itálica tem um formato de bota chutando a Sicília.",
    skill: "Europa"
  },

  // --- ARTE (EXPANSÃO) ---
  {
    id: 87,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "Quais são as Cores Secundárias, formadas pela mistura das Primárias?",
    options: ["Preto, Branco, Cinza", "Laranja, Verde, Roxo", "Vermelho, Amarelo, Azul", "Ouro e Prata"],
    answer: "Laranja, Verde, Roxo",
    explanation: "Laranja (V+A), Verde (Az+A), Roxo (V+Az).",
    skill: "Teoria das Cores"
  },
  {
    id: 88,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "O que caracteriza uma 'Escultura' na arte?",
    options: ["Desenho em papel", "Visão tridimensional (altura, largura e profundidade)", "Uso de sons gravados", "Apenas cores quentes"],
    answer: "Visão tridimensional (altura, largura e profundidade)",
    explanation: "A escultura ocupa espaço físico real, diferente da pintura (2D).",
    skill: "Formas de Expressão"
  },
  {
    id: 89,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "A técnica que cria a ilusão de profundidade e distância em um desenho é a:",
    options: ["Simetria", "Perspectiva", "Monocromia", "Batik"],
    answer: "Perspectiva",
    explanation: "Usa pontos de fuga para dar tridimensionalidade ao papel 2D.",
    skill: "Técnicas de Desenho"
  },
  {
    id: 90,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual desses NÃO é um instrumento musical de sopro?",
    options: ["Flauta", "Saxofone", "Violino", "Trompete"],
    answer: "Violino",
    explanation: "O violino é um instrumento de cordas friccionadas.",
    skill: "Música"
  },
  {
    id: 91,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "O Grafite é uma expressão da Arte Urbana feito principalmente com:",
    options: ["Tinta Guache", "Lápis de Cor", "Aerosol (Spray)", "Carvão"],
    answer: "Aerosol (Spray)",
    explanation: "O uso de spray em muros é a marca registrada do grafite.",
    skill: "Street Art"
  },
  {
    id: 92,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "Na dança, o conjunto de passos e movimentos organizados é chamado de:",
    options: ["Enredo", "Coreografia", "Roteiro", "Partitura"],
    answer: "Coreografia",
    explanation: "A coreografia é a escrita da dança ou desenho do movimento.",
    skill: "Dança"
  },
  {
    id: 93,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual movimento artístico explorava o mundo dos sonhos e do inconsciente?",
    options: ["Surrealismo", "Realismo", "Kubismo", "Impressionismo"],
    answer: "Surrealismo",
    explanation: "Salvador Dalí é um grande nome dessa arte que desafia a lógica.",
    skill: "Vanguardas"
  },
  {
    id: 94,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "O cinema é conhecido mundialmente como a:",
    options: ["Primeira Arte", "Terceira Arte", "Sétima Arte", "Nona Arte"],
    answer: "Sétima Arte",
    explanation: "O cinema engloba som, imagem, movimento e teatro em um só.",
    skill: "Linguagem Audiovisual"
  },

  // --- EDUCAÇÃO FÍSICA (EXPANSÃO) ---
  {
    id: 95,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No jogo de xadrez, qual é a peça mais importante, cujo aprisionamento (xeque-mate) define o fim da partida?",
    options: ["Rainha", "Peão", "Bispo", "Rei"],
    answer: "Rei",
    explanation: "O objetivo do xadrez é proteger o seu Rei e atacar o Rei adversário.",
    skill: "Jogos de Tabuleiro"
  },
  {
    id: 96,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual destas é uma dancing típica das Festas Juninas no Brasil?",
    options: ["Samba", "Ballet", "Quadrilha", "Breakdance"],
    answer: "Quadrilha",
    explanation: "A Quadrilha é uma dança coletiva tradicional das festividades de São João.",
    skill: "Danças Típicas"
  },
  {
    id: 97,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual esporte é conhecido mundialmente como o 'Esporte da Cesta'?",
    options: ["Vôlei", "Futebol", "Basquetebol", "Tênis"],
    answer: "Basquetebol",
    explanation: "O basquete consiste em acertar a bola dentro de uma cesta suspensa.",
    skill: "Basquetebol"
  },
  {
    id: 98,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual é o principal objetivo da 'Ginástica Geral'?",
    options: ["Vencer competições olímpicas", "Bem-estar, integração e diversão através do movimento", "Apenas perder peso", "Fazer acrobacias perigosas"],
    answer: "Bem-estar, integração e diversão através do movimento",
    explanation: "A Ginástica Geral (ou para Todos) não é competitiva e inclui a todos.",
    skill: "Ginástica"
  },
  {
    id: 99,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O Handebol é um esporte de invasão onde a bola pode ser jogada apenas com:",
    options: ["Os Pés", "A Cabeça", "As Mãos", "Os Ombros"],
    answer: "As Mãos",
    explanation: "No handebol, os jogadores de linha usam apenas as mãos para tocar a bola.",
    skill: "Handebol"
  },
  {
    id: 100,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual prática de aventura consiste em caminhar por trilhas em ambientes naturais (mata, montanha)?",
    options: ["Skate", "Trekking (Caminhada)", "Surf", "Parkour"],
    answer: "Trekking (Caminhada)",
    explanation: "O trekking é uma caminhada de longa distância em trilhas naturais.",
    skill: "Aventura"
  },
  {
    id: 101,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual esporte olímpico é composto por provas de corrida, saltos e arremessos?",
    options: ["Natação", "Ginástica Artística", "Atletismo", "Judô"],
    answer: "Atletismo",
    explanation: "O Atletismo é considerado o esporte base das Olimpíadas.",
    skill: "Atletismo"
  },
  {
    id: 102,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O termo 'Fair Play' no esporte significa:",
    options: ["Jogar para ganhar a qualquer custo", "Jogo limpo, respeito às regras e aos adversários", "Fazer faltas sem ser visto", "Apenas obedecer ao técnico"],
    answer: "Jogo limpo, respeito às regras e aos adversários",
    explanation: "Fair Play é a conduta ética e esportiva de respeito mútuo.",
    skill: "Ética no Esporte"
  },

  // --- ENSINO RELIGIOSO (EXPANSÃO) ---
  {
    id: 103,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual símbolo é frequentemente associado ao Cristianismo?",
    options: ["Estrela de Davi", "Crescente Lunar", "A Cruz", "Flor de Lótus"],
    answer: "A Cruz",
    explanation: "A cruz representa o sacrifício e a ressurreição de Jesus Cristo.",
    skill: "Símbolos Religiosos"
  },
  {
    id: 104,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A pomba branca é um símbolo universal que representa a:",
    options: ["Guerra", "Paz", "Fome", "Riqueza"],
    answer: "Paz",
    explanation: "A pomba com um ramo de oliveira é o símbolo da paz em várias culturas.",
    skill: "Símbolos e Valores"
  },
  {
    id: 105,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual livro é considerado sagrado para os muçulmanos (praticantes do Islamismo)?",
    options: ["Bíblia", "Torá", "Alcorão (Corão)", "Vedas"],
    answer: "Alcorão (Corão)",
    explanation: "O Alcorão contém as revelações de Deus (Alá) ao profeta Maomé.",
    skill: "Textos Sagrados"
  },
  {
    id: 106,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O valor do 'Acolhimento' ao próximo é uma característica:",
    options: ["Exclusiva de uma única religião", "Comum em praticamente todas as fés e filosofias humanas", "Apenas para quem tem dinheiro", "Que não importa na sociedade"],
    answer: "Comum em praticamente todas as fés e filosofias humanas",
    explanation: "Amar e acolher o próximo é um princípio ético universal.",
    skill: "Valores Humanos"
  },
  {
    id: 107,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que define o conceito de 'Moral' em uma sociedade?",
    options: ["O dinheiro que cada um tem", "O conjunto de regras e costumes sobre o que é considerado certo ou errado", "As leis de trânsito apenas", "A cor da roupa que vestimos"],
    answer: "O conjunto de regras e costumes sobre o que é considerado certo ou errado",
    explanation: "A moral guia o comportamento dos indivíduos em um grupo social.",
    skill: "Ética e Moral"
  },
  {
    id: 108,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Ajudar pessoas em situação de vulnerabilidade (fome, frio) é um ato de:",
    options: ["Egoísmo", "Solidariedade / Caridade", "Indiferença", "Competição"],
    answer: "Solidariedade / Caridade",
    explanation: "É a prática de apoiar e cuidar de quem precisa.",
    skill: "Valores e Ação"
  },
  {
    id: 109,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "No Brasil, a lei garante que o Ensino Religioso nas escolas públicas deve ser de matrícula:",
    options: ["Obrigatória para todos", "Facultativa (o aluno escolhe se quer cursar)", "Apenas para católicos", "Proibida em todo o país"],
    answer: "Facultativa (o aluno escolhe se quer cursar)",
    explanation: "A Constituição garante o respeito à diversidade e à liberdade de não cursar.",
    skill: "Direito e Religião"
  },
  {
    id: 110,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Promover uma 'Cultura de Paz' envolve principalmente:",
    options: ["Resolver conflitos pela força", "Ignorar os problemas do mundo", "Resolver conflitos pelo diálogo e respeito mútuo", "Criticar quem pensa diferente"],
    answer: "Resolver conflitos pelo diálogo e respeito mútuo",
    explanation: "A paz é construída com tolerância, conversa e cooperação.",
    skill: "Cultura de Paz"
  },

  // --- GEOGRAFIA (EXPANSÃO II) ---
  {
    id: 111,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que define o conceito de 'Relevo' na geografia?",
    options: ["As formas da superfície terrestre (montanhas, planícies)", "O clima de uma região", "O tipo de vegetação", "A quantidade de rios"],
    answer: "As formas da superfície terrestre (montanhas, planícies)",
    explanation: "Relevo são as diferentes formas e altitudes da crosta terrestre.",
    skill: "Formas de Relevo"
  },
  {
    id: 112,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a principal atividade econômica desenvolvida no espaço Rural (Campo)?",
    options: ["Indústria de carros", "Comércio de Shopping", "Agricultura e Pecuária", "Bancos e Finanças"],
    answer: "Agricultura e Pecuária",
    explanation: "O campo foca na produção de alimentos e matérias-primas.",
    skill: "Espaço Rural"
  },
  {
    id: 113,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "O ciclo da água envolve três etapas principais: evaporação, condensação e...",
    options: ["Congelamento", "Precipitação (Chuva)", "Aquecimento", "Absorção"],
    answer: "Precipitação (Chuva)",
    explanation: "A água evapora, forma nuvens (condensação) e cai como chuva (precipitação).",
    skill: "Ciclo Hidrológico"
  },
  {
    id: 114,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "A Região Nordeste do Brasil é muito conhecida por apresentar o clima:",
    options: ["Equatorial", "Subtropical", "Semiarido", "Tropical de Altitude"],
    answer: "Semiarido",
    explanation: "O semiárido é marcado por altas temperaturas e chuvas escassas.",
    skill: "Climas do Brasil"
  },
  {
    id: 115,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "A grande Cordilheira dos Andes está localizada em qual continente?",
    options: ["Europa", "Ásia", "América do Sul", "África"],
    answer: "América do Sul",
    explanation: "Os Andes atravessam vários países sul-americanos como Chile, Peru e Bolívia.",
    skill: "Geografia da América"
  },
  {
    id: 116,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que mede o IDH (Índice de Desenvolvimento Humano)?",
    options: ["Apenas o dinheiro do país", "Saúde (vida longa), Educação (conhecimento) e Renda (Padrão de vida)", "A quantidade de indústrias", "A frota de carros do país"],
    answer: "Saúde (vida longa), Educação (conhecimento) e Renda (Padrão de vida)",
    explanation: "O IDH avalia a qualidade de vida e não apenas a economia.",
    skill: "Indicadores Sociais"
  },
  {
    id: 117,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "A União Europeia é o principal exemplo mundial de um:",
    options: ["Acordo de Paz", "Bloco Econômico e Político", "Grupo de Ajuda Humanitária", "Sindicato de Trabalhadores"],
    answer: "Bloco Econômico e Político",
    explanation: "A UE permite livre circulação de pessoas, bens e tem uma moeda única (Euro).",
    skill: "Geopolítica"
  },
  {
    id: 118,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o conceito de 'Sustentabilidade'?",
    options: ["Consumir o máximo possível hoje", "Usar os recursos hoje sem comprometer as gerações futuras", "Proibir o uso de qualquer recurso natural", "Apenas plantar árvores"],
    answer: "Usar os recursos hoje sem comprometer as gerações futuras",
    explanation: "Sustentabilidade busca o equilíbrio entre economia, sociedade e natureza.",
    skill: "Meio Ambiente"
  },

  // --- ARTE (EXPANSÃO II) ---
  {
    id: 119,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "As Cores Quentes (Vermelho, Amarelo, Laranja) costumam transmitir sensações de:",
    options: ["Calor, energia e alegria", "Frio, calma e tristeza", "Equilíbrio e neutralidade", "Medo e escuridão"],
    answer: "Calor, energia e alegria",
    explanation: "Cores quentes estimulam a atividade e o calor.",
    skill: "Teoria das Cores"
  },
  {
    id: 120,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "O que é uma pintura de 'Natureza Morta'?",
    options: ["Pintura de animais caçando", "Pintura de objetos inanimados (frutas, vasos, flores)", "Pintura de florestas secas", "Pintura de batalhas históricas"],
    answer: "Pintura de objetos inanimados (frutas, vasos, flores)",
    explanation: "Representa coisas do dia a dia imóveis sobre uma mesa.",
    skill: "Gêneros da Pintura"
  },
  {
    id: 121,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "O que caracteriza a 'Arte Bizantina' que dominou a Idade Média oriental?",
    options: ["Uso de cores pastéis", "Uso de mosaicos dourados e temática estoricamente religiosa", "Pinturas de festas populares", "Uso de tintas spray"],
    answer: "Uso de mosaicos dourados e temática estoricamente religiosa",
    explanation: "A arte bizantina era voltada para a glorificação de Deus e da Igreja.",
    skill: "História da Arte"
  },
  {
    id: 122,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Na música, o elemento que nos permite diferenciar o som de um piano do som de um violão é o:",
    options: ["Volume", "Ritmo", "Timbre", "Duração"],
    answer: "Timbre",
    explanation: "O timbre é a 'cor' do som, a identidade de cada voz ou instrumento.",
    skill: "Linguagem Musical"
  },
  {
    id: 123,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual mestre do Renascimento pintou a famosa obra 'Mona Lisa'?",
    options: ["Michelangelo", "Leonardo da Vinci", "Rafael Sanzio", "Donatello"],
    answer: "Leonardo da Vinci",
    explanation: "A Mona Lisa é uma das pinturas mais famosas do mundo, de Da Vinci.",
    skill: "Renascimento"
  },
  {
    id: 124,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "A técnica de 'Xilogravura' consiste em fazer uma matriz de gravação em:",
    options: ["Pedra", "Metal", "Madeira", "Plástico"],
    answer: "Madeira",
    explanation: "A madeira é talhada para criar os relevos que receberão a tinta.",
    skill: "Gravura"
  },
  {
    id: 125,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "O movimento 'Pop Art' (de Andy Warhol) retirava os temas de suas obras da:",
    options: ["Natureza intocada", "Cultura de massa, produtos e celebridades", "Mitologia grega", "Religião cristã"],
    answer: "Cultura de massa, produtos e celebridades",
    explanation: "A Pop Art usava ícones populares (como a sopa Campbell) para criticar o consumo.",
    skill: "Arte Contemporânea"
  },
  {
    id: 126,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "O conceito de 'Ready-made' de Marcel Duchamp consistia em:",
    options: ["Pintar muito rápido", "Pegar um objeto industrial comum e chamá-lo de obra de arte", "Fazer esculturas de barro", "Costurar roupas para museus"],
    answer: "Pegar um objeto industrial comum e chamá-lo de obra de arte",
    explanation: "Duchamp desafiou o conceito de arte (ex: O Urinol).",
    skill: "Dadaísmo"
  },

  // --- EDUCAÇÃO FÍSICA (EXPANSÃO II) ---
  {
    id: 127,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual é o principal benefício de se manter hidratado (beber água) durante a prática de exercícios?",
    options: ["Ficar mais pesado", "Regular a temperatura do corpo e repor líquidos perdidos no suor", "Correr mais devagar", "Apenas por costume"],
    answer: "Regular a temperatura do corpo e repor líquidos perdidos no suor",
    explanation: "A água evita a desidratação e a fadiga muscular precoce.",
    skill: "Saúde e Corpo"
  },
  {
    id: 128,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O 'Aquecimento' antes de uma atividade física serve principalmente para:",
    options: ["Cansar o corpo logo no início", "Preparar músculos e coração para o esforço, evitando lesões", "Fazer o tempo passar mais rápido", "Apenas relaxar"],
    answer: "Preparar músculos e coração para o esforço, evitando lesões",
    explanation: "O aquecimento aumenta o fluxo sanguíneo nos músculos.",
    skill: "Preparação Física"
  },
  {
    id: 129,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No futebol, se a bola ultrapassa totalmente a linha lateral, o jogo é reiniciado com:",
    options: ["Chute lateral", "Arremesso de canto (Escanteio)", "Arremesso lateral com as mãos", "Tiro de meta"],
    answer: "Arremesso lateral com as mãos",
    explanation: "O jogador deve usar as duas mãos por cima da cabeça.",
    skill: "Futebol"
  },
  {
    id: 130,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Atletismo, as provas de Revezamento (ex: 4x100m) envolvem os corredores passando um:",
    options: ["Bastão", "Anel", "Corda", "Bola"],
    answer: "Bastão",
    explanation: "O bastão deve ser passado dentro da zona de transição.",
    skill: "Atletismo"
  },
  {
    id: 131,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O que define a 'Resistência Muscular'?",
    options: ["Capacidade de levantar muito peso uma única vez", "Capacidade do músculo de sustentar esforço por tempo prolongado", "Velocidade máxima em 10 metros", "Apenas flexibilidade"],
    answer: "Capacidade do músculo de sustentar esforço por tempo prolongado",
    explanation: "Ex: fazer muitas repetições de um exercício leve.",
    skill: "Capacidades Físicas"
  },
  {
    id: 132,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Quais instrumentos são tradicionais em uma roda de Capoeira?",
    options: ["Violão e Sanfona", "Berimbau, Pandeiro e Atabaque", "Bateria e Guitarra", "Flauta e Trompete"],
    answer: "Berimbau, Pandeiro e Atabaque",
    explanation: "O berimbau dita o ritmo do jogo (São Bento, Angola).",
    skill: "Capoeira"
  },
  {
    id: 133,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O sedentarismo (falta de exercícios) está diretamente ligado ao risco de:",
    options: ["Melhora na memória", "Doenças cardíacas, diabetes e obesidade", "Aumento da expectativa de vida", "Maior energia diária"],
    answer: "Doenças cardíacas, diabetes e obesidade",
    explanation: "A inatividade física prejudica o sistema cardiovascular.",
    skill: "Saúde e Prevenção"
  },
  {
    id: 134,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual é o postura correta para levantar um objeto pesado do chão de forma segura?",
    options: ["Manter as pernas retas e dobrar apenas as costas", "Agachar dobrando os joelhos e manter a coluna reta", "Usar apenas os braços sem dobrar nada", "Girar o tronco enquanto levanta"],
    answer: "Agachar dobrando os joelhos e manter a coluna reta",
    explanation: "Isso divide o peso com as pernas, protegendo a lombar.",
    skill: "Ergonomia"
  },

  // --- ENSINO RELIGIOSO (EXPANSÃO II) ---
  {
    id: 135,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A diversidade de crenças e a liberdade religiosa no Brasil são protegidas por qual documento?",
    options: ["Dicionário Escolar", "Regimento da Escola", "Constituição Federal", "Código de Trânsito"],
    answer: "Constituição Federal",
    explanation: "O Brasil é um Estado Laico que garante o direito de crença de todos.",
    skill: "Direito à Crença"
  },
  {
    id: 136,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Fábulas, contos e parábolas são frequentemente usados em religiões para ensinar:",
    options: ["Como consertar carros", "Lições de moral, ética e sabedoria de vida", "Fórmulas matemáticas", "História da tecnologia"],
    answer: "Lições de moral, ética e sabedoria de vida",
    explanation: "Narrativas facilitam o entendimento de ideias complexas.",
    skill: "Sabedoria Tradicional"
  },
  {
    id: 137,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O conceito de 'Alteridade' significa essencialmente:",
    options: ["Querer que todo mundo pense igual", "Reconhecer e respeitar o outro na sua individualidade e diferença", "Falar mal de quem é diferente", "Ignorar o que os outros dizem"],
    answer: "Reconhecer e respeitar o outro na sua individualidade e diferença",
    explanation: "É o exercício de ver o mundo sob a ótica do outro.",
    skill: "Alteridade"
  },
  {
    id: 138,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A meditação, prática comum no Budismo e em outras filosofias, serve para:",
    options: ["Dormir mais rápido", "Acalmar a mente, focar no presente e encontrar paz interior", "Fazer exercícios musculares", "Apenas ouvir música"],
    answer: "Acalmar a mente, focar no presente e encontrar paz interior",
    explanation: "A meditação desenvolve a atenção plena e o autocontrole.",
    skill: "Práticas Contemplativas"
  },
  {
    id: 139,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que são 'Valores Éticos' em uma comunidade?",
    options: ["O preço das coisas no mercado", "Princípios que guiam as ações humanas voltadas ao bem comum", "As leis de um jogo de esporte apenas", "A quantidade de amigos que temos"],
    answer: "Princípios que guiam as ações humanas voltadas ao bem comum",
    explanation: "Valores éticos regulam a convivência (honestidade, respeito).",
    skill: "Ética"
  },
  {
    id: 140,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "No Brasil, a Intolerância Religiosa (ofender ou discriminar alguém pela fé) é considerada:",
    options: ["Uma brincadeira normal", "Um crime previsto em lei", "Um direito da pessoa", "Apenas falta de educação"],
    answer: "Um crime previsto em lei",
    explanation: "A lei brasileira pune atos de discriminação religiosa.",
    skill: "Cidadania"
  },
  {
    id: 141,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A preservação da natureza (Ecologia) é vista por muitas tradições espirituais como:",
    options: ["Um tema sem importância", "Respeito à vida e ao sagrado na Criação de forma geral", "Um problema apenas dos governos", "Um gasto desnecessário"],
    answer: "Respeito à vida e ao sagrado na Criação de forma geral",
    explanation: "Cuidar da Terra é um dever ético em muitas visões espirituais.",
    skill: "Ecoteologia / Cuidado"
  },
  {
    id: 142,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O Diálogo Inter-religioso busca resolver conflitos e conviver em paz. Seu objetivo principal é:",
    options: ["Converter a outra pessoa à sua religião", "Criar pontes de respeito mútuo e cooperação social", "Discutir quem está certo", "Proibir o culto público"],
    answer: "Criar pontes de respeito mútuo e cooperação social",
    explanation: "O diálogo visa a coexistência pacífica das diferenças.",
    skill: "Diálogo"
  },

  // --- MATEMÁTICA (EXPANSÃO II) ---
  {
    id: 143,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o resultado de 10% de 200?",
    options: ["10", "20", "50", "100"],
    answer: "20",
    explanation: "10% de 200 é 200/10 = 20.",
    skill: "Porcentagem"
  },
  {
    id: 144,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "O que define um 'Número Primo'?",
    options: ["Apenas divisível por 2", "Divisível por qualquer número", "Divisível apenas por 1 e por ele mesmo", "Número com vírgula"],
    answer: "Divisível apenas por 1 e por ele mesmo",
    explanation: "Exemplos de primos: 2, 3, 5, 7, 11...",
    skill: "Números Primos"
  },
  {
    id: 145,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Se x + 5 = 12, qual é o valor de x?",
    options: ["5", "7", "12", "17"],
    answer: "7",
    explanation: "Subtraindo 5 de ambos os lados: x = 12 - 5 = 7.",
    skill: "Equação de 1º Grau"
  },
  {
    id: 146,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Dois ângulos são chamados de 'Complementares' se a soma de suas medidas for:",
    options: ["45º", "90º", "180º", "360º"],
    answer: "90º",
    explanation: "Ângulos complementares somam 90 graus (ex: 30º e 60º).",
    skill: "Ângulos"
  },
  {
    id: 147,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Na geometria, a soma dos ângulos internos de um Triângulo é sempre de:",
    options: ["90º", "180º", "360º", "Qualquer valor"],
    answer: "180º",
    explanation: "Independentemente do formato do triângulo, a soma é 180º.",
    skill: "Geometria"
  },
  {
    id: 148,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se chama o lado oposto ao ângulo de 90º em um Triângulo Retângulo?",
    options: ["Cateto", "Hipotenusa", "Vértice", "Diagonal"],
    answer: "Hipotenusa",
    explanation: "A Hipotenusa é o maior lado do triângulo retângulo.",
    skill: "Trigonometria"
  },
  {
    id: 149,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Na fórmula de Bhaskara, o que o Delta (discriminante) positivo (> 0) indica?",
    options: ["Nenhuma raiz real", "Uma raiz real", "Duas raízes reais e diferentes", "Raízes complexas"],
    answer: "Duas raízes reais e diferentes",
    explanation: "Se Delta > 0, a equação tem duas soluções distintas.",
    skill: "Equação de 2º Grau"
  },
  {
    id: 150,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o valor aproximado do número Pi (\u03c0)?",
    options: ["2,15", "3,14", "4,12", "1,61"],
    answer: "3,14",
    explanation: "Pi é a razão entre o perímetro e o diâmetro de um círculo.",
    skill: "Geometria Espacial"
  },

  // --- PORTUGUÊS (EXPANSÃO II) ---
  {
    id: 151,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual destas palavras é um 'Antônimo' (sentido oposto) de 'Subir'?",
    options: ["Elevar", "Descer", "Correr", "Pular"],
    answer: "Descer",
    explanation: "Antônimos são palavras com significados contrários.",
    skill: "Semântica"
  },
  {
    id: 152,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'O gato dorme no sofá', qual é o Sujeito da ação?",
    options: ["Sofá", "No sofá", "O gato", "Dorme"],
    answer: "O gato",
    explanation: "O sujeito é de quem ou do que se fala (Quem dorme? O gato).",
    skill: "Sintaxe"
  },
  {
    id: 153,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é o plural correto da palavra 'Pão'?",
    options: ["Pãos", "Pães", "Pãoses", "Pãe"],
    answer: "Pães",
    explanation: "Regra geral para substantivos terminados em -ão.",
    skill: "Morfologia"
  },
  {
    id: 154,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Um texto do gênero 'Narrativo' tem como principal objetivo:",
    options: ["Defender uma opinião", "Dar instruções de uso", "Contar uma história com personagens", "Anunciar um produto"],
    answer: "Contar uma história com personagens",
    explanation: "Narrativas têm enredo, narrador, tempo, espaço e personagens.",
    skill: "Tipos de Texto"
  },
  {
    id: 155,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'Eu comi o bolo', a oração está em qual Voz Verbal?",
    options: ["Voz Passiva Analítica", "Voz Reflexiva", "Voz Ativa", "Voz Passiva Sintética"],
    answer: "Voz Ativa",
    explanation: "O sujeito (Eu) pratica a ação verbal.",
    skill: "Vozes Verbais"
  },
  {
    id: 156,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual conjunção indica uma ideia de 'Causa' para a oração?",
    options: ["Portanto", "Embora", "Porque", "Mas"],
    answer: "Porque",
    explanation: "'Porque' introduz uma explicação ou causa (conjunção explicativa/causal).",
    skill: "Conjunções"
  },
  {
    id: 157,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'Ela estudou muito, logo passou de ano', a conjunção 'logo' é:",
    options: ["Adversativa (oposição)", "Conclusiva (resultado)", "Aditiva (soma)", "Alternativa"],
    answer: "Conclusiva (resultado)",
    explanation: "'Logo' conclui o pensamento iniciado na oração anterior.",
    skill: "Coesão"
  },
  {
    id: 158,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Um texto 'Dissertativo-Argumentativo' serve principalmente para:",
    options: ["Descrever uma paisagem", "Defender uma tese/opinião com argumentos", "Fazer rir", "Contar fatos do dia"],
    answer: "Defender uma tese/opinião com argumentos",
    explanation: "É o tipo de texto exigido em redações como o ENEM.",
    skill: "Argumentação"
  },

  // --- CIÊNCIAS (EXPANSÃO II) ---
  {
    id: 159,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é a 'Atmosfera' da Terra?",
    options: ["O conjunto de rios e oceanos", "A camada de gases que envolve o planeta", "A parte sólida onde pisamos", "O núcleo de ferro da Terra"],
    answer: "A camada de gases que envolve o planeta",
    explanation: "A atmosfera protege a Terra e contém o ar que respiramos.",
    skill: "Camadas da Terra"
  },
  {
    id: 160,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual gás é essencial para a Respiração da maioria dos seres vivos?",
    options: ["Gás Carbônico", "Gás Hidrogênio", "Gás Oxigênio", "Gás Nitrogênio"],
    answer: "Gás Oxigênio",
    explanation: "O oxigênio é usado pelas células para produzir energia.",
    skill: "Ar e Respiração"
  },
  {
    id: 161,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal característica dos Animais Mamíferos?",
    options: ["Põem ovos com casca dura", "Possuem escamas e respiram por brânquias", "Possuem pelos no corpo e amamentam os filhotes", "Têm corpo gelatinoso"],
    answer: "Possuem pelos no corpo e amamentam os filhotes",
    explanation: "A amamentação (glândulas mamárias) e pelos são marcas dos mamíferos.",
    skill: "Diversidade Animal"
  },
  {
    id: 162,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual desses NÃO é um componente Vivo (Biótico) de um ecossistema?",
    options: ["Um pássaro", "Uma árvore", "A Água", "Um fungo"],
    answer: "A Água",
    explanation: "A água é um fator abiótico (físico/químico), essencial para a vida, mas não é um ser vivo.",
    skill: "Ecossistemas"
  },
  {
    id: 163,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual órgão do corpo humano é responsável por Bombear o Sangue para todo o corpo?",
    options: ["Pulmão", "Cérebro", "Coração", "Estômago"],
    answer: "Coração",
    explanation: "O coração é um músculo oco que funciona como uma bomba propulsora.",
    skill: "Sistema Cardiovascular"
  },
  {
    id: 164,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "A 'Digestão' dos alimentos começa em qual parte do sistema digestório?",
    options: ["No Estômago", "No Intestino Grosso", "Na Boca", "No Esôfago"],
    answer: "Na Boca",
    explanation: "Começa com a mastigação e ação da saliva (amilase).",
    skill: "Sistema Digestório"
  },
  {
    id: 165,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual cientista propôs a teoria da 'Evolução por Seleção Natural'?",
    options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Galileu Galilei"],
    answer: "Charles Darwin",
    explanation: "Darwin publicou sua teoria em 'A Origem das Espécies' (1859).",
    skill: "Evolução"
  },
  {
    id: 166,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "A 'Tabela Periódica' organiza os elementos químicos com base no seu:",
    options: ["Peso em gramas", "Cor do elemento", "Número Atômico (quantidade de prótons)", "Preço no mercado"],
    answer: "Número Atômico (quantidade de prótons)",
    explanation: "Os elementos são ordenados de forma crescente pelo número atômico.",
    skill: "Química Geral"
  },

  // --- HISTÓRIA (EXPANSÃO II) ---
  {
    id: 167,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual antiga civilização construiu as grandes Pirâmides e usava Hieróglifos como escrita?",
    options: ["Grécia Antiga", "Antigo Egito", "Império Romano", "Mesopotâmia"],
    answer: "Antigo Egito",
    explanation: "Os egípcios construíram monumentos eternos às margens do Rio Nilo.",
    skill: "Antiguidade Oriental"
  },
  {
    id: 168,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Na Grécia Antiga, o termo 'Pólis' significava essencialmente uma:",
    options: ["Escola de guerreiros", "Cidade-Estado independente", "Regras de trânsito", "Uma estátua de mármore"],
    answer: "Cidade-Estado independente",
    explanation: "Cidades como Atenas e Esparta tinham suas próprias leis e deuses.",
    skill: "Grécia Antiga"
  },
  {
    id: 169,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "No período Feudal (Idade Média), o que o Vassalo geralmente recebia do Suserano?",
    options: ["Títulos de nobreza apenas", "Uso de terras (o Feudo) em troca de fidelidade e apoio militar", "Dinheiro em ouro", "Permissão para viajar"],
    answer: "Uso de terras (o Feudo) em troca de fidelidade e apoio militar",
    explanation: "As relações de suserania e vassalagem baseavam-se na posse da terra.",
    skill: "Feudalismo"
  },
  {
    id: 170,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "Qual grave doença dizimou um terço da população da Europa no século XIV?",
    options: ["Gripe Espanhola", "Peste Negra (Bubônica)", "Sarampo", "Varíola"],
    answer: "Peste Negra (Bubônica)",
    explanation: "Transmitida por pulgas de ratos, espalhou-se rapidamente pelas cidades medievais.",
    skill: "Crise do Século XIV"
  },
  {
    id: 171,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "A 'Inconfidência Mineira' (1789) foi um movimento que lutava contra a cobrança do:",
    options: ["Imposto de Renda moderno", "Dízimo da igreja", "Quinto / Derrama (Impostos de Portugal sobre o ouro)", "Pedágio nas estradas"],
    answer: "Quinto / Derrama (Impostos de Portugal sobre o ouro)",
    explanation: "A elite mineira revoltou-se com a cobrança abusiva de impostos atrasados.",
    skill: "Revoltas Coloniais"
  },
  {
    id: 172,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Qual inconfidente mineiro foi condenado à morte e enforcado pelo governo português?",
    options: ["Joaquim Silvério de Reis", "Cláudio Manuel da Costa", "Tiradentes (Joaquim José da Silva Xavier)", "Tomas Antônio Gonzaga"],
    answer: "Tiradentes (Joaquim José da Silva Xavier)",
    explanation: "Tiradentes assumiu a culpa e foi executado como exemplo.",
    skill: "Líderes Históricos"
  },
  {
    id: 173,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Quem foi o presidente do Brasil que liderou o 'Estado Novo' (1937-1945)?",
    options: ["Juscelino Kubitschek", "Getúlio Vargas", "João Goulart", "Castelo Branco"],
    answer: "Getúlio Vargas",
    explanation: "Getúlio Vargas governou de forma ditatorial no Estado Novo.",
    skill: "Era Vargas"
  },
  {
    id: 174,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Em que ano teve início a 'Ditadura Militar' no Brasil através de um golpe de Estado?",
    options: ["1930", "1964", "1985", "1988"],
    answer: "1964",
    explanation: "O regime militar durou de 1964 a 1985.",
    skill: "Brasil República"
  },

  // --- EXPANSÃO GLOBAL - LOTE 10 ---
  
  // MATEMÁTICA
  {
    id: 175,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o resultado da expressão: 5 x 5 + 10?",
    options: ["25", "30", "35", "50"],
    answer: "35",
    explanation: "Multiplicação primeiro: 5x5=25. Depois soma: 25+10 = 35.",
    skill: "Operações"
  },
  {
    id: 176,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual fração representa a 'Metade' de um inteiro?",
    options: ["1/3", "1/4", "1/2", "2/3"],
    answer: "1/2",
    explanation: "1 dividido por 2 representa metade do todo.",
    skill: "Frações"
  },
  {
    id: 177,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se chama um polígono que possui exatamente 5 lados?",
    options: ["Quadrilátero", "Pentágono", "Hexágono", "Octógono"],
    answer: "Pentágono",
    explanation: "Penta significa cinco. Ex: Pentacampeão.",
    skill: "Polígonos"
  },
  {
    id: 178,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Se log10(x) = 2, qual é o valor de x?",
    options: ["10", "20", "100", "1000"],
    answer: "100",
    explanation: "Logaritmo: 10 elevado a 2 é 100.",
    skill: "Logaritmos"
  },

  // PORTUGUÊS
  {
    id: 179,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é o plural correto da palavra 'Capitão'?",
    options: ["Capitãos", "Capitães", "Capitãoes", "Capitões"],
    answer: "Capitães",
    explanation: "O plural de capitão é capitães.",
    skill: "Plural"
  },
  {
    id: 180,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Na oração 'Ele comprou pão', qual o termo que exerce a função de Objeto Direto?",
    options: ["Ele", "Comprou", "Pão", "Não há"],
    answer: "Pão",
    explanation: "Responde à pergunta 'comprou o quê?': Pão.",
    skill: "Sintaxe"
  },
  {
    id: 181,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Uma palavra é 'Proparoxítona' quando o acento tônico cai na:",
    options: ["Última sílaba", "Penúltima sílaba", "Antepenúltima sílaba", "Não existe"],
    answer: "Antepenúltima sílaba",
    explanation: "Todas as proparoxítonas são acentuadas (ex: lâmpada).",
    skill: "Acentuação"
  },
  {
    id: 182,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem atribui sentimentos humanos a objetos (ex: 'O sol sorriu')?",
    options: ["Metáfora", "Personificação (Prosopopeia)", "Hipérbole", "Ironia"],
    answer: "Personificação (Prosopopeia)",
    explanation: "Atribuir ação humana a ser inanimado.",
    skill: "Figuras de Linguagem"
  },

  // CIÊNCIAS
  {
    id: 183,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é a 'Litosfera' na estrutura da Terra?",
    options: ["A camada de ar", "A camada de água", "A camada rochosa externa", "O magma derretido"],
    answer: "A camada rochosa externa",
    explanation: "É a crosta terrestre e manto superior sólido.",
    skill: "Litosfera"
  },
  {
    id: 184,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é o principal gás retentor de calor no Efeito Estufa?",
    options: ["Oxigênio", "Nitrogênio", "Gás Carbônico (CO2)", "Hélio"],
    answer: "Gás Carbônico (CO2)",
    explanation: "Lançado por queima de combustíveis, retém calor.",
    skill: "Clima"
  },
  {
    id: 185,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O 'Sistema Endócrino' do corpo humano é responsável por produzir:",
    options: ["Saliva", "Hormônios", "Sangue", "Urina"],
    answer: "Hormônios",
    explanation: "Glândulas liberam hormônios no sangue.",
    skill: "Sistemas"
  },
  {
    id: 186,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Uma 'Ligação Covalente' entre átomos ocorre quando há:",
    options: ["Perda de elétrons", "Ganho de elétrons", "Compartilhamento de elétrons", "Atração magnética"],
    answer: "Compartilhamento de elétrons",
    explanation: "Átomos dividem elétrons para estabilidade.",
    skill: "Química"
  },

  // HISTÓRIA
  {
    id: 187,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual antigo povo inventou a Escrita Cuneiforme na Mesopotâmia?",
    options: ["Egípcios", "Fenícios", "Sumerianos", "Hebreus"],
    answer: "Sumerianos",
    explanation: "First escrita conhecida, em argila com estilete.",
    skill: "Nascimento da Escrita"
  },
  {
    id: 188,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "A 'Expansão Marítima' europeia no século XV foi iniciada por qual país?",
    options: ["Espanha", "Inglaterra", "Portugal", "França"],
    answer: "Portugal",
    explanation: "Pioneirismo português devido à localização e Escola de Sagres.",
    skill: "Navegações"
  },
  {
    id: 189,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Na 'Guerra dos Farrapos' (RS), os revoltosos lutavam contra os impostos sobre o:",
    options: ["Café", "Açúcar", "Charque (carne seca)", "Ouro"],
    answer: "Charque (carne seca)",
    explanation: "O charque uruguaio entrava mais barato que o gaúcho.",
    skill: "Revoltas Provinciais"
  },
  {
    id: 190,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "O 'Tratado de Versalhes' (1919) encerrou oficialmente qual grande conflito?",
    options: ["Guerra Fria", "Primeira Guerra Mundial", "Segunda Guerra Mundial", "Guerra do Paraguai"],
    answer: "Primeira Guerra Mundial",
    explanation: "Impôs duras penas à Alemanha como culpada pela guerra.",
    skill: "Paz dos Vencedores"
  },

  // GEOGRAFIA
  {
    id: 191,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O 'Intemperismo' é o processo natural que causa:",
    options: ["O nascimento de árvores", "O desgaste e quebra das rochas por sol, vento e chuva", "O tsunami", "A erupção vulcânica"],
    answer: "O desgaste e quebra das rochas por sol, vento e chuva",
    explanation: "Transforma rocha em solo ao longo do tempo.",
    skill: "Geomorfologia"
  },
  {
    id: 192,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o maior rio em volume de água do mundo?",
    options: ["Rio Nilo", "Rio Mississippi", "Rio Amazonas", "Rio Paraná"],
    answer: "Rio Amazonas",
    explanation: "O Amazonas supera todos em volume e bacia hidrográfica.",
    skill: "Hidrografia"
  },
  {
    id: 193,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual canal artificial liga o Oceano Atlântico ao Oceano Pacífico na América?",
    options: ["Canal de Suez", "Canal de Corinto", "Canal do Panamá", "Canal da Mancha"],
    answer: "Canal do Panamá",
    explanation: "Fatiou o continente para encurtar rotas navais.",
    skill: "Rotas Mundiais"
  },
  {
    id: 194,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que define a 'Globalização' moderna?",
    options: ["O isolamento dos países", "A integração econômica, cultural e de informação no mundo", "A volta das ferrovias", "Apenas o uso da internet com cabo"],
    answer: "A integração econômica, cultural e de informação no mundo",
    explanation: "O mundo ficou 'menor' e mais interconectado.",
    skill: "Mundo Globalizado"
  },

  // ARTE
  {
    id: 195,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "As Cores Frias (Azul, Verde, Roxo) costumam transmitir sensações de:",
    options: ["Calor e festa", "Frio, calma, tranquilidade ou tristeza", "Fome", "Medo de escuro"],
    answer: "Frio, calma, tranquilidade ou tristeza",
    explanation: "Cores frias relaxam e dão profundidade.",
    skill: "Teoria das Cores"
  },
  {
    id: 196,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "O que é 'Arte Rupestre' encontrada no Brasil?",
    options: ["Grafite moderno", "Pinturas e gravuras feitas em rochas por povos pré-históricos", "Esculturas de plástico", "Quadros a óleo"],
    answer: "Pinturas e gravuras feitas em rochas por povos pré-históricos",
    explanation: "Registros de caça e rituais dos primeiros humanos.",
    skill: "Arte Pré-Histórica"
  },
  {
    id: 197,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "Catedrais com arcos ogivais, vitrais e Gárgulas pertencem ao estilo:",
    options: ["Românico", "Neo-clássico", "Gótico", "Cubista"],
    answer: "Gótico",
    explanation: "O gótico buscava altura e luz (século XII-XV).",
    skill: "Idade Média"
  },
  {
    id: 198,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual artista espanhol é considerado o pai do Cubismo?",
    options: ["Salvador Dalí", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Pablo Picasso",
    explanation: "Picasso fatiou as formas em figuras geométricas.",
    skill: "Cubismo"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 199,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No jogo de xadrez, qual peça se move em formato de 'L' pelo tabuleiro?",
    options: ["Torre", "Bispo", "Cavalo", "Peão"],
    answer: "Cavalo",
    explanation: "O cavalo anda 3 casas em L e pode pular outras peças.",
    skill: "Xadrez"
  },
  {
    id: 200,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O 'Boliche' é classificado como um esporte de:",
    options: ["Invasão", "Combate", "Precisão e Arremesso", "Rede"],
    answer: "Precisão e Arremesso",
    explanation: "O objetivo é acertar os pinos com precisão.",
    skill: "Esportes Gerais"
  },
  {
    id: 201,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual é a duração total de uma partida de Handebol profissional (adulto)?",
    options: ["40 min (2x20)", "60 min (2x30)", "80 min (2x40)", "90 min"],
    answer: "60 min (2x30)",
    explanation: "Dois tempos de 30 minutos com intervalo.",
    skill: "Handebol"
  },
  {
    id: 202,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O esporte 'Surfe' exige do corpo principalmente:",
    options: ["Equilíbrio e força para subir na prancha", "Apenas fôlego", "Coragem de pular", "Nenhuma das anteriores"],
    answer: "Equilíbrio e força para subir na prancha",
    explanation: "Exige controle motor sobre a superfície instável da onda.",
    skill: "Esportes de Prancha"
  },

  // ENSINO RELIGIOSO
  {
    id: 203,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O 'Ramadã' é um mês de jejum e reflexão sagrado para qual religião?",
    options: ["Cristianismo", "Budismo", "Islamismo", "Judaísmo"],
    answer: "Islamismo",
    explanation: "Muçulmanos jejuam do nascer ao pôr do sol no Ramadã.",
    skill: "Festividades"
  },
  {
    id: 204,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O respeito mútuo exige aceitar que as pessoas têm direito de:",
    options: ["Pensar todas igual", "Ter crenças diferentes das nossas em paz", "Não falar com vizinho", "Brigarem na rua"],
    answer: "Ter crenças diferentes das nossas em paz",
    explanation: "É a base da tolerância e convivência laica.",
    skill: "Tolerância"
  },
  {
    id: 205,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que estuda a 'Ética Ambiental'?",
    options: ["Apenas animais domésticos", "As obrigações morais do ser humano com a natureza", "Como plantar soja", "O tempo atmosférico"],
    answer: "As obrigações morais do ser humano com a natureza",
    explanation: "Discute o valor ético de matas, rios e animais.",
    skill: "Ecomoral"
  },
  {
    id: 206,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A 'Liberdade de Consciência' garante o direito do indivíduo de:",
    options: ["Apenas ler jornais", "Não ter nenhuma religião ou mudar de fé se quiser", "Deixar de pagar contas", "Andar sem documentos"],
    answer: "Não ter nenhuma religião ou mudar de fé se quiser",
    explanation: "Liberdade inclui ser ateu, agnóstico ou crente.",
    skill: "Liberdade"
  },

  // --- EXPANSÃO GLOBAL - LOTE 11 ---
  
  // MATEMÁTICA
  {
    id: 207,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o 'Dobro' de 15?",
    options: ["20", "25", "30", "45"],
    answer: "30",
    explanation: "O dobro de um número é ele vezes 2. 15 x 2 = 30.",
    skill: "Multiplicação"
  },
  {
    id: 208,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "O conjunto dos Números Inteiros (Z) inclui:",
    options: ["Apenas números positivos", "Apenas frações", "Números negativos, zero e positivos", "Apenas raízes"],
    answer: "Números negativos, zero e positivos",
    explanation: "Ex: -3, -2, -1, 0, 1, 2, 3...",
    skill: "Conjuntos"
  },
  {
    id: 209,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o valor da Raiz Quadrada de 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
    explanation: "Because 8 x 8 = 64.",
    skill: "Radiciação"
  },
  {
    id: 210,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "A soma das raízes de uma equação de 2º grau f(x) = ax² + bx + c = 0 é dada por:",
    options: ["-b/a", "c/a", "b/a", "-c/a"],
    answer: "-b/a",
    explanation: "Relações de Girard: Soma das raízes S = -b/a.",
    skill: "Geral"
  },

  // PORTUGUÊS
  {
    id: 211,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual destas palavras é um 'Sinônimo' (sentido igual) de 'Comer'?",
    options: ["Correr", "Alimentar-se", "Dormir", "Fugir"],
    answer: "Alimentar-se",
    explanation: "Sinônimos têm significados semelhantes.",
    skill: "Semântica"
  },
  {
    id: 212,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "O que é um 'Pronome' na língua portuguesa?",
    options: ["Classe que indica ação", "Classe que dá nome aos seres", "Classe que acompanha ou substitui o substantivo", "Classe que indica qualidade"],
    answer: "Classe que acompanha ou substitui o substantivo",
    explanation: "Exemplos: Eu, tu, ele, meu, este.",
    skill: "Morfologia"
  },
  {
    id: 213,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em um Exagero Intencional (ex: 'Estou morrendo de fome')?",
    options: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"],
    answer: "Hipérbole",
    explanation: "Aumenta a realidade para dar ênfase.",
    skill: "Figuras de Linguagem"
  },
  {
    id: 214,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual conectivo indica uma relação de 'Oposição' entre ideias?",
    options: ["E (Aditivo)", "Pois (Explicativo)", "Mas / Porém (Adversativo)", "Logo (Conclusivo)"],
    answer: "Mas / Porém (Adversativo)",
    explanation: "Contrapõe duas ideias (ex: Estudou, mas não passou).",
    skill: "Coesão"
  },

  // CIÊNCIAS
  {
    id: 215,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é a 'Hidrosfera' na Terra?",
    options: ["A camada de ar", "A camada de solo", "Toda a água do planeta (oceanos, rios, gelo)", "O magma subterrâneo"],
    answer: "Toda a água do planeta (oceanos, rios, gelo)",
    explanation: "Engloba toda a água em qualquer estado físico.",
    skill: "Camadas da Terra"
  },
  {
    id: 216,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal função dos Glóbulos Vermelhos (Hemácias) no sangue?",
    options: ["Combater infecções", "Transportar oxigênio pelo corpo", "Fazer a coagulação", "Produzir anticorpos"],
    answer: "Transportar oxigênio pelo corpo",
    explanation: "Contêm hemoglobina, que fixa o oxigênio.",
    skill: "Sistema Sanguíneo"
  },
  {
    id: 217,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O 'Sistema Nervoso Central' é constituído principalmente por:",
    options: ["Coração e Pulmão", "Encéfalo (Cérebro) e Medula Espinhal", "Músculos e Ossos", "Estômago e Fígado"],
    answer: "Encéfalo (Cérebro) e Medula Espinhal",
    explanation: "Comanda e processa informações do corpo.",
    skill: "Sistemas"
  },
  {
    id: 218,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Na química, o que é um 'Átomo'?",
    options: ["Uma célula viva", "A menor unidade de um elemento químico que mantém suas propriedades", "Um tipo de vírus", "Um grão de areia"],
    answer: "A menor unidade de um elemento químico que mantém suas propriedades",
    explanation: "Formado por prótons, nêutrons e elétrons.",
    skill: "Química"
  },

  // HISTÓRIA
  {
    id: 219,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual era a capital do Império Romano no Ocidente?",
    options: ["Esparta", "Atenas", "Roma", "Cairo"],
    answer: "Roma",
    explanation: "Roma foi o centro do império que unificou o Mediterrâneo.",
    skill: "Mundo Antigo"
  },
  {
    id: 220,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "O que foi o 'Iluminismo' no século XVIII?",
    options: ["Uma guerra de espadas", "Um movimento intelectual baseado na Razão e na Ciência", "Um tipo de arte das cavernas", "Um estilo de dança"],
    answer: "Um movimento intelectual baseado na Razão e na Ciência",
    explanation: "Criticava o absolutismo e defendia as luzes da razão.",
    skill: "Idade Moderna"
  },
  {
    id: 221,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "A Declaração de Independência dos EUA (4 de Julho) ocorreu em que ano?",
    options: ["1500", "1776", "1789", "1822"],
    answer: "1776",
    explanation: "As 13 colônias romperam com a Inglaterra (Revolução Americana).",
    skill: "Independências"
  },
  {
    id: 222,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Qual presidente brasileiro governou nos anos 50 com o lema '50 anos em 5' e construiu Brasília?",
    options: ["Getúlio Vargas", "Juscelino Kubitschek (JK)", "Jânio Quadros", "João Goulart"],
    answer: "Juscelino Kubitschek (JK)",
    explanation: "JK promoveu o desenvolvimentismo e mudou a capital.",
    skill: "Brasil República"
  },

  // GEOGRAFIA
  {
    id: 223,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que define o 'Clima' de uma região?",
    options: ["O tempo de hoje", "A previsão da TV", "O padrão do tempo atmosférico estudado por décadas", "Apenas a temperatura"],
    answer: "O padrão do tempo atmosférico estudado por décadas",
    explanation: "Diferente de 'tempo' que é momentâneo.",
    skill: "Climatologia"
  },
  {
    id: 224,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a vegetação típica do Pantanal brasileiro?",
    options: ["Floresta densa de pinheiros", "Mosaico de savanas, florestas e campos permanentemente ou sazonalmente alagados", "Cactus e arbustos secos apenas", "Grama baixa europeia"],
    answer: "Mosaico de savanas, florestas e campos permanentemente ou sazonalmente alagados",
    explanation: "Maior planície inundável do mundo.",
    skill: "Biomas"
  },
  {
    id: 225,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que estuda a 'Cartografia'?",
    options: ["A vida dos peixes", "A elaboração e estudo de Mapas", "As estrelas no céu", "A história das moedas"],
    answer: "A elaboração e estudo de Mapas",
    explanation: "Ciência de representar a Terra graficamente.",
    skill: "Cartografia"
  },
  {
    id: 226,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual país é historicamente reconhecido por possuir o maior PIB (Produto Interno Bruto) do mundo?",
    options: ["Rússia", "China", "Estados Unidos (EUA)", "Brasil"],
    answer: "Estados Unidos (EUA)",
    explanation: "Maior economia do globo em termos nominais.",
    skill: "Geoeconomia"
  },

  // ARTE
  {
    id: 227,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "O que caracteriza uma pintura 'Monocromática'?",
    options: ["Uso de muitas cores do arco-íris", "Uso de apenas uma cor e suas variações de tons", "Uso de apenas tintas pretas", "Desenho sem cor"],
    answer: "Uso de apenas uma cor e suas variações de tons",
    explanation: "Mono = um. Croma = cor.",
    skill: "Teoria das Cores"
  },
  {
    id: 228,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual dessas é uma dança típica muito popular nas festas de rua do Nordeste?",
    options: ["Samba de Gafieira", "Frevo / Forró", "Fandango", "Ballet Clássico"],
    answer: "Frevo / Forró",
    explanation: "Ritmos marcantes da cultura nordestina.",
    skill: "Danças"
  },
  {
    id: 229,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "A 'Arte Naïf' é caracterizada por ser:",
    options: ["Muito geométrica e fria", "Espontânea, popular e feita por artistas sem formação acadêmica", "Exclusiva de computadores", "Feita apenas com argila"],
    answer: "Espontânea, popular e feita por artistas sem formação acadêmica",
    explanation: "Arte primitiva ou ingênua.",
    skill: "Gêneros"
  },
  {
    id: 230,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "O movimento 'Fauvismo' na arte (ex: Matisse) era marcado pelo uso de:",
    options: ["Cores puras, fortes e desvinculadas da realidade", "Apenas tons de cinza", "Pintura com os pés", "Desenhos hiper-realistas"],
    answer: "Cores puras, fortes e desvinculadas da realidade",
    explanation: "Fauves = feras (pelo uso selvagem das cores).",
    skill: "Fauvismo"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 231,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No futebol, a regra do 'Impedimento' ocorre quando o atacante está:",
    options: ["Fora do campo", "À frente do penúltimo defensor adversário no momento do passe", "Dentro da área do goleiro", "Sentado no chão"],
    answer: "À frente do penúltimo defensor adversário no momento do passe",
    explanation: "Geralmente é o goleiro + 1 defensor.",
    skill: "Futebol"
  },
  {
    id: 232,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual é a medida oficial de uma quadra de Voleibol?",
    options: ["10 x 5 metros", "18 x 9 metros", "40 x 20 metros", "100 x 50 metros"],
    answer: "18 x 9 metros",
    explanation: "A quadra é dividida ao meio por uma rede.",
    skill: "Voleibol"
  },
  {
    id: 233,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "A capacidade física de exercer força no menor tempo possível chama-se:",
    options: ["Resistência", "Flexibilidade", "Força Explosiva (Potência)", "Equilíbrio"],
    answer: "Força Explosiva (Potência)",
    explanation: "Exemplos: um salto ou um chute forte.",
    skill: "Capacidades"
  },
  {
    id: 234,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O método 'Pilates' de exercícios foca principalmente em:",
    options: ["Levantamento de peso extremo", "Controle do centro do corpo (Powerhouse), postura e respiração", "Correr maratonas", "Lutas corporais"],
    answer: "Controle do centro do corpo (Powerhouse), postura e respiração",
    explanation: "Desenvolvido por Joseph Pilates para reabilitação e força.",
    skill: "Métodos"
  },

  // ENSINO RELIGIOSO
  {
    id: 235,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Na linguagem religiosa, um 'Símbolo' serve para:",
    options: ["Apenas decorar paredes", "Representar uma ideia sagrada ou divina que vai além do objeto", "Medir o tempo", "Substituir o alfabeto"],
    answer: "Representar uma ideia sagrada ou divina que vai além do objeto",
    explanation: "Ex: A cruz para cristãos, o Om para hindus.",
    skill: "Mitologia"
  },
  {
    id: 236,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual figura histórica é considerada a fundadora do Budismo?",
    options: ["Dalai Lama", "Sidarta Gautama (O Buda)", "Papa Francisco", "Moises"],
    answer: "Sidarta Gautama (O Buda)",
    explanation: "Príncipe indiano que atingiu a iluminação.",
    skill: "Personagens"
  },
  {
    id: 237,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A Declaração Universal dos Direitos Humanos garante que todos os seres têm direito à:",
    options: ["Igualdade perante a lei e dignidade humana", "Ter um carro", "Viagens pagas", "Morar em castelos"],
    answer: "Igualdade perante a lei e dignidade humana",
    explanation: "Independente de raça, colou ou religião.",
    skill: "Direitos"
  },
  {
    id: 238,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O 'Antropocentrismo' é uma visão de mundo de qual período histórico?",
    options: ["Idade Média", "Pré-História", "Renascimento (Coloca o Homem no centro)", "Idade de Pedra"],
    answer: "Renascimento (Coloca o Homem no centro)",
    explanation: "O homem é o centro das atenções, diferente do Teocentrismo medieval.",
    skill: "Visões"
  },

  // --- EXPANSÃO GLOBAL - LOTE 12 ---
  
  // MATEMÁTICA
  {
    id: 239,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o 'Triplo' de 10?",
    options: ["20", "30", "40", "100"],
    answer: "30",
    explanation: "O triplo de um número é ele vezes 3. 10 x 3 = 30.",
    skill: "Multiplicação"
  },
  {
    id: 240,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o valor de 50% de 500?",
    options: ["100", "200", "250", "300"],
    answer: "250",
    explanation: "50% representa a metade. Metade de 500 é 250.",
    skill: "Porcentagem"
  },

  // PORTUGUÊS
  {
    id: 241,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é a classe gramatical da palavra 'Lindo'?",
    options: ["Substantivo", "Verbo", "Advérbio", "Adjetivo"],
    answer: "Adjetivo",
    explanation: "Adjetivos dão características ou qualidades.",
    skill: "Classes de Palavras"
  },
  {
    id: 242,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Um 'Verbo Transitivo' é aquele que:",
    options: ["Não precisa de complemento", "Exige um complemento para ter sentido completo", "Indica apenas estado", "Não tem sujeito"],
    answer: "Exige um complemento para ter sentido completo",
    explanation: "Ex: Quem compra, compra algo (objeto).",
    skill: "Sintaxe"
  },

  // CIÊNCIAS
  {
    id: 243,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é a 'Biosfera'?",
    options: ["Apenas a vida aquática", "O conjunto de todos os locais da Terra onde há vida", "A camada de ozônio apenas", "O centro da Terra"],
    answer: "O conjunto de todos os locais da Terra onde há vida",
    explanation: "Compreende a litosfera, hidrosfera e atmosfera habitadas.",
    skill: "Ecologia"
  },
  {
    id: 244,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é o maior órgão do corpo humano?",
    options: ["Coração", "Fígado", "Pele", "Intestino"],
    answer: "Pele",
    explanation: "A pele reveste todo o corpo e protege contra agentes externos.",
    skill: "Corpo Humano"
  },

  // HISTÓRIA
  {
    id: 245,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual cidade grega é considerada o 'Berço da Democracia'?",
    options: ["Esparta", "Corinto", "Atenas", "Tebas"],
    answer: "Atenas",
    explanation: "Atenas desenvolveu a democracia direta para cidadãos.",
    skill: "Mundo Antigo"
  },
  {
    id: 246,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "As 'Cruzadas' na Idade Média foram expedições de caráter:",
    options: ["Apenas comercial", "Militar e religioso para recuperar a Terra Santa", "Estudos arqueológicos", "Pesca em alto mar"],
    answer: "Militar e religioso para recuperar a Terra Santa",
    explanation: "Convocadas pela Igreja para tomar Jerusalém.",
    skill: "Idade Média"
  },

  // GEOGRAFIA
  {
    id: 247,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O processo de desgaste, transporte e deposição de sedimentos chama-se:",
    options: ["Erosão", "Sedimentação pura", "Vulcanismo", "Tectonismo"],
    answer: "Erosão",
    explanation: "A erosão remove o solo e esculpe o relevo.",
    skill: "Geomorfologia"
  },
  {
    id: 248,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual região brasileira possui o maior número de Estados?",
    options: ["Região Norte", "Região Sudeste", "Região Nordeste", "Região Sul"],
    answer: "Região Nordeste",
    explanation: "O Nordeste tem 9 estados.",
    skill: "Divisão Regional"
  },

  // ARTE
  {
    id: 249,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "O que caracteriza uma obra de arte 'Policromática'?",
    options: ["Uso de apenas uma cor", "Uso de várias cores diferentes na mesma composição", "Sem cores, apenas traços", "Uso apenas de tinta óleo"],
    answer: "Uso de várias cores diferentes na mesma composição",
    explanation: "Poli = muitas. Croma = cor.",
    skill: "Teoria das Cores"
  },
  {
    id: 250,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Na música, qual desses instrumentos é um ícone do Rock and Roll?",
    options: ["Flauta Doce", "Guitarra Elétrica", "Harpa", "Clarinete"],
    answer: "Guitarra Elétrica",
    explanation: "O som distorcido da guitarra marca o gênero.",
    skill: "Música"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 251,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Basquete, um arremesso convertido de FORA da linha de três pontos vale:",
    options: ["1 ponto", "2 pontos", "3 pontos", "5 pontos"],
    answer: "3 pontos",
    explanation: "A linha determina a pontuação do acerto.",
    skill: "Basquete"
  },
  {
    id: 252,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual é a distância oficial de uma corrida de 'Maratona'?",
    options: ["10 km", "21 km", "42 km", "100 km"],
    answer: "42 km",
    explanation: "A maratona tem aproximadamente 42,195 km.",
    skill: "Atletismo"
  },

  // ENSINO RELIGIOSO
  {
    id: 253,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que é a 'Tradição Oral' em muitas culturas e religiões?",
    options: ["Apenas cantar músicas", "A transmissão de conhecimentos e histórias pela fala", "Ler apenas livros antigos", "Dançar em rodas"],
    answer: "A transmissão de conhecimentos e histórias pela fala",
    explanation: "Essencial para a preservação de memórias.",
    skill: "Memória"
  },
  {
    id: 254,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual é o livro básico de leis e ensinamentos sagrados para o Judaísmo?",
    options: ["Bíblia", "Torá", "Alcorão", "Vedas"],
    answer: "Torá",
    explanation: "Composto pelos ensinamentos de Moisés.",
    skill: "Textos"
  },

  // --- EXPANSÃO GLOBAL - LOTE 12 (PARTE 2) ---
  
  // MATEMÁTICA
  {
    id: 255,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se chama um polígono que possui exatamente 6 lados?",
    options: ["Pentágono", "Hexágono", "Heptágono", "Octógono"],
    answer: "Hexágono",
    explanation: "Hexa significa seis. Ex: Hexacampeão.",
    skill: "Polígonos"
  },
  {
    id: 256,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Se f(x) = x² - 4, qual é o valor de f(2)?",
    options: ["-4", "0", "4", "8"],
    answer: "0",
    explanation: "f(2) = 2² - 4 = 4 - 4 = 0.",
    skill: "Funções"
  },

  // PORTUGUÊS
  {
    id: 257,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "O que caracteriza as 'Orações Coordenadas'?",
    options: ["São dependentes umas das outras", "São independentes sintaticamente entre si", "Só existem no passado", "Sempre têm verbos de ligação"],
    answer: "São independentes sintaticamente entre si",
    explanation: "Cada oração tem sentido próprio.",
    skill: "Período Composto"
  },
  {
    id: 258,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em Suavizar uma expressão (ex: 'Ele partiu desta para melhor')?",
    options: ["Hipérbole", "Ironia", "Eufemismo", "Metáfora"],
    answer: "Eufemismo",
    explanation: "Serve para tornar a mensagem menos agressiva.",
    skill: "Figuras de Linguagem"
  },

  // CIÊNCIAS
  {
    id: 259,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal função da 'Insulina' no organismo?",
    options: ["Aumentar os batimentos cardíacos", "Regular a quantidade de açúcar (glicose) no sangue", "Combater vírus", "Fazer a digestão"],
    answer: "Regular a quantidade de açúcar (glicose) no sangue",
    explanation: "Produzida pelo pâncreas, facilita a entrada de glicose nas células.",
    skill: "Fisiologia"
  },
  {
    id: 260,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Uma reação química 'Exotérmica' é aquela que:",
    options: ["Absorve calor", "Libera calor para o ambiente", "Não altera a temperatura", "Ocorre apenas no escuro"],
    answer: "Libera calor para o ambiente",
    explanation: "Exo = fora. Thermes = calor (ex: queima de madeira).",
    skill: "Química"
  },

  // HISTÓRIA
  {
    id: 261,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Em qual data foi proclamada a República no Brasil?",
    options: ["7 de Setembro de 1822", "15 de Novembro de 1889", "13 de Maio de 1888", "21 de Abril de 1792"],
    answer: "15 de Novembro de 1889",
    explanation: "Marechal Deodoro da Fonseca liderou o movimento.",
    skill: "Brasil República"
  },
  {
    id: 262,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Qual evento simbolizou o fim da Guerra Fria em 1989?",
    options: ["Queda do Muro de Berlim", "Ataque a Pearl Harbor", "Revolução Russa", "Crise dos Mísseis"],
    answer: "Queda do Muro de Berlim",
    explanation: "O muro dividia a Alemanha em blocos capitalista e socialista.",
    skill: "Guerra Fria"
  },

  // GEOGRAFIA
  {
    id: 263,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que expressa a 'Taxa de Natalidade'?",
    options: ["Número de mortes por ano", "Número de nascimentos por cada mil habitantes", "Número de casamentos", "Apenas nascimento de gêmeos"],
    answer: "Número de nascimentos por cada mil habitantes",
    explanation: "Mede o crescimento vegetativo junto com a mortalidade.",
    skill: "Demografia"
  },
  {
    id: 264,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "A intolerância ou aversão a pessoas de outros países (estrangeiros) chama-se:",
    options: ["Racismo", "Xenofobia", "Machismo", "Etnocentrismo"],
    answer: "Xenofobia",
    explanation: "Preconceito baseado na nacionalidade.",
    skill: "Problemas Sociais"
  },

  // ARTE
  {
    id: 265,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual é a principal característica visual do 'Cubismo'?",
    options: ["Retrato fiel da realidade", "Decomposição de objetos em formas geométricas vistas de vários ângulos", "Foco apenas na luz", "Pintura de animais"],
    answer: "Decomposição de objetos em formas geométricas vistas de vários ângulos",
    explanation: "Ruptura com a perspectiva tradicional.",
    skill: "Vanguardas"
  },
  {
    id: 266,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual artista revolucionou a pintura usando a técnica do 'Gotejamento' (Drip Painting)?",
    options: ["Leonardo da Vinci", "Dalí", "Jackson Pollock", "Andy Warhol"],
    answer: "Jackson Pollock",
    explanation: "Pollock respingava tinta na tela no chão.",
    skill: "Expressionismo Abstrato"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 267,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O que é 'Contração Muscular'?",
    options: ["O relaxamento total do músculo", "O encurtamento e tensão das fibras musculares para gerar movimento", "O aumento da gordura", "O sono do músculo"],
    answer: "O encurtamento e tensão das fibras musculares para gerar movimento",
    explanation: "Músculos puxam os ossos para mover as articulações.",
    skill: "Fisiologia"
  },
  {
    id: 268,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O IMC (Índice de Massa Corporal) é calculado dividindo o peso pela:",
    options: ["Altura ao quadrado", "Idade", "Quantidade de água", "Velocidade"],
    answer: "Altura ao quadrado",
    explanation: "Fórmula: Peso / (Altura * Altura). Avalia estado nutricional.",
    skill: "Saúde"
  },

  // ENSINO RELIGIOSO
  {
    id: 269,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Promover o respeito nas redes sociais e internet diz respeito à:",
    options: ["Ética Digital (Netchiqueta)", "Culinária", "Apenas à polícia", "Não importa"],
    answer: "Ética Digital (Netchiqueta)",
    explanation: "Valores morais também se aplicam no mundo virtual.",
    skill: "Cidadania"
  },
  {
    id: 270,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que define o 'Sincretismo Religioso'?",
    options: ["A separação total das fés", "A fusão ou mistura de elementos de diferentes tradições religiosas", "A proibição de novas fés", "O estudo de fósseis"],
    answer: "A fusão ou mistura de elementos de diferentes tradições religiosas",
    explanation: "Muito comum no Brasil (ex: Umbanda, Catolicismo Popular).",
    skill: "Mestiçagem"
  },

  // --- EXPANSÃO GLOBAL - LOTE 13 ---
  
  // MATEMÁTICA
  {
    id: 271,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o 'Sucessor' do número 999?",
    options: ["899", "998", "1000", "1001"],
    answer: "1000",
    explanation: "O sucessor é o número que vem imediatamente depois (+1).",
    skill: "Numeração"
  },
  {
    id: 272,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "O que caracteriza um ângulo 'Reto'?",
    options: ["Possui menos de 90 graus", "Possui exatamente 90 graus", "Possui mais de 90 graus", "Possui 180 graus"],
    answer: "Possui exatamente 90 graus",
    explanation: "Ângulo reto é o ângulo de um quarto de volta, 90°.",
    skill: "Geometria"
  },

  // PORTUGUÊS
  {
    id: 273,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual destas palavras é um 'Antônimo' (sentido oposto) de 'Dia'?",
    options: ["Manhã", "Tarde", "Noite", "Sol"],
    answer: "Noite",
    explanation: "Antônimos são palavras com significados contrários.",
    skill: "Semântica"
  },
  {
    id: 274,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "O que é um 'Sujeito Simples' na análise sintática?",
    options: ["Possui dois ou mais núcleos", "Possui apenas um único núcleo", "Não aparece na frase", "Indica o tempo verbal"],
    answer: "Possui apenas um único núcleo",
    explanation: "Ex: 'O gato dormiu'. Núcleo: gato.",
    skill: "Sintaxe"
  },

  // CIÊNCIAS
  {
    id: 275,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a camada de gases que envolve a Terra e nos protege da radiação solar?",
    options: ["Litosfera", "Hidrosfera", "Atmosfera", "Biosfera"],
    answer: "Atmosfera",
    explanation: "Composta por nitrogênio, oxigênio e outros gases.",
    skill: "Camadas da Terra"
  },
  {
    id: 276,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal função do 'Estômago' na digestão?",
    options: ["Absorver água", "Digerir proteínas com ajuda do suco gástrico", "Bombear sangue", "Filtrar toxinas"],
    answer: "Digerir proteínas com ajuda do suco gástrico",
    explanation: "O estômago quebra os alimentos em partes menores.",
    skill: "Sistema Digestório"
  },

  // HISTÓRIA
  {
    id: 277,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual o nome da escrita desenvolvida pelos babilônios e sumérios em tabletes de argila?",
    options: ["Hieróglifos", "Escrita Cuneiforme", "Alfabeto Latino", "Árabe"],
    answer: "Escrita Cuneiforme",
    explanation: "Feita com estilete em forma de cunha.",
    skill: "Nascimento da Escrita"
  },
  {
    id: 278,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "Qual rei francês ficou conhecido como 'Rei Sol' (Símbolo do Absolutismo)?",
    options: ["Luís XVI", "Napoleão Bonaparte", "Luís XIV", "Carlos Magno"],
    answer: "Luís XIV",
    explanation: "Luís XIV concentrou todo o poder em suas mãos ('O Estado sou eu').",
    skill: "Absolutismo"
  },

  // GEOGRAFIA
  {
    id: 279,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O conjunto das formas da superfície terrestre (como montanhas, planaltos e planícies) chama-se:",
    options: ["Clima", "Relevo", "Hidrografia", "Vegetação"],
    answer: "Relevo",
    explanation: "São as irregularidades da casca da Terra.",
    skill: "Geomorfologia"
  },
  {
    id: 280,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o principal cultivo agrícola que impulsionou a economia de Minas Gerais historicamente?",
    options: ["Cana-de-açúcar", "Café", "Soja", "Algodão"],
    answer: "Café",
    explanation: "O café foi o motor da economia no sudeste.",
    skill: "Economia Regional"
  },

  // ARTE
  {
    id: 281,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "As festas juninas, o artesanato de barro e as lendas pertencem à:",
    options: ["Cultura Acadêmica", "Cultura Popular / Folclore", "Arte Moderna", "Arqueologia"],
    answer: "Cultura Popular / Folclore",
    explanation: "Tradições passadas de geração em geração pelo povo.",
    skill: "Patrimônio"
  },
  {
    id: 282,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual é o ritmo musical tradicional do Rio de Janeiro marcado pelo 'Batuque' e cordas?",
    options: ["Sertanejo", "Samba", "Forró", "Rock"],
    answer: "Samba",
    explanation: "O samba é patrimônio cultural do Brasil.",
    skill: "Música"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 283,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Voleibol, quantos toques no máximo uma equipe pode dar antes de passar a bola para o outro lado?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "Cada equipe tem 3 toques (excluindo o bloqueio).",
    skill: "Voleibol"
  },
  {
    id: 284,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O 'Aquecimento' antes do início de um exercício físico serve principalmente para:",
    options: ["Apenas cansar o atleta", "Preparar o corpo, aumentar batimentos e evitar lesões", "Fazer o tempo passar", "Sentir dor"],
    answer: "Preparar o corpo, aumentar batimentos e evitar lesões",
    explanation: "Aumenta a temperatura corporal e lubrifica articulações.",
    skill: "Saúde"
  },

  // ENSINO RELIGIOSO
  {
    id: 285,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Uma história tradicional usada por povos antigos para explicar a criação do mundo chama-se:",
    options: ["Notícia", "Mito", "Piada", "Manual"],
    answer: "Mito",
    explanation: "Mitos dão sentido a fenômenos naturais e mistérios.",
    skill: "Narrativas"
  },
  {
    id: 286,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual é o livro sagrado que contém as revelações para os seguidores do Islamismo?",
    options: ["Bíblia", "Alcorão (Corão)", "Torá", "Vedas"],
    answer: "Alcorão (Corão)",
    explanation: "Considerado a palavra de Deus ditada ao profeta Maomé.",
    skill: "Textos"
  },

  // --- EXPANSÃO GLOBAL - LOTE 13 (PARTE 2) ---
  
  // MATEMÁTICA
  {
    id: 287,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "O que é um 'Número Primo'?",
    options: ["Qualquer número ímpar", "Divisível apenas por 1 e por ele mesmo", "Número terminado em 0", "Número negativo"],
    answer: "Divisível apenas por 1 e por ele mesmo",
    explanation: "Exemplos: 2, 3, 5, 7, 11...",
    skill: "Aritmética"
  },
  {
    id: 288,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é a fórmula para calcular a ÁREA de um Trapézio?",
    options: ["Base x Altura", "(Base Maior + Base Menor) x Altura / 2", "Diagonal x Diagonal / 2", "Lado x Lado"],
    answer: "(Base Maior + Base Menor) x Altura / 2",
    explanation: "Soma as bases, multiplica pela altura e divide por 2.",
    skill: "Áreas"
  },

  // PORTUGUÊS
  {
    id: 289,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em imitar sons da realidade (ex: 'Tic-tac', 'Bum')?",
    options: ["Metáfora", "Antítese", "Onomatopeia", "Pleonasmo"],
    answer: "Onomatopeia",
    explanation: "Representação gráfica de ruídos.",
    skill: "Figuras de Linguagem"
  },
  {
    id: 290,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual conectivo indica a 'Consequência' de um fato anterior?",
    options: ["Porque (Causa)", "Portanto / Por isso (Consecutivo/Conclusivo)", "Se (Condição)", "Embora (Concessão)"],
    answer: "Portanto / Por isso (Consecutivo/Conclusivo)",
    explanation: "Indica o resultado de uma ação.",
    skill: "Coesão"
  },

  // CIÊNCIAS
  {
    id: 291,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal função do 'Sistema Linfático' do corpo humano?",
    options: ["Bombear sangue", "Filtrar gorduras e atuar na defesa imunológica", "Fazer a respiração", "Fazer a digestão pura"],
    answer: "Filtrar gorduras e atuar na defesa imunológica",
    explanation: "Produz células de defesa e drena líquidos.",
    skill: "Sistemas"
  },
  {
    id: 292,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que determina a 'Massa Atômica' de um átomo?",
    options: ["Apenas os elétrons", "A soma de Prótons e Nêutrons no núcleo", "O tamanho do átomo", "A cor do átomo"],
    answer: "A soma de Prótons e Nêutrons no núcleo",
    explanation: "Elétrons têm massa desprezível.",
    skill: "Estrutura Atômica"
  },

  // HISTÓRIA
  {
    id: 293,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Qual foi a lei que aboliu oficialmente a escravidão no Brasil em 1888?",
    options: ["Lei do Ventre Livre", "Lei Áurea", "Lei de Terras", "Lei Eusébio de Queirós"],
    answer: "Lei Áurea",
    explanation: "Assinada pela Princesa Isabel em 13 de maio.",
    skill: "Brasil Império"
  },
  {
    id: 294,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "O genocídio de milhões de judeus e outras minorias pelo regime nazista na 2ª Guerra chama-se:",
    options: ["Revolução", "Holocausto (Shoah)", "Êxodo", "Cruzada"],
    answer: "Holocausto (Shoah)",
    explanation: "Assassinato em massa em campos de concentração.",
    skill: "Guerras Mundiais"
  },

  // GEOGRAFIA
  {
    id: 295,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que mede o indicador 'Densidade Demográfica'?",
    options: ["A riqueza do país", "O número de habitantes por quilômetro quadrado (hab/km²)", "A quantidade de indústrias", "A altura das montanhas"],
    answer: "O número de habitantes por quilômetro quadrado (hab/km²)",
    explanation: "Indica se um local é muito ou pouco povoado.",
    skill: "Demografia"
  },
  {
    id: 296,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que define uma 'Megacidade' no contexto urbano mundial?",
    options: ["Cidade com mais de 1 milhão de habitantes", "Cidade com mais de 10 milhões de habitantes", "Cidade que tem metrô", "Cidade litorânea"],
    answer: "Cidade com mais de 10 milhões de habitantes",
    explanation: "Termo da ONU para aglomerações gigantes.",
    skill: "Urbanização"
  },

  // ARTE
  {
    id: 297,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "O movimento artístico que usava imagens de consumo (ex: latas de sopa) chama-se:",
    options: ["Renascimento", "Pop Art", "Impressionismo", "Cubismo"],
    answer: "Pop Art",
    explanation: "Andy Warhol marcou com colagens de produtos populares.",
    skill: "Século XX"
  },
  {
    id: 298,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual estilo artístico usava ilusões de ótica no desenho nos anos 1960?",
    options: ["Arte Rupestre", "Op Art (Optical Art)", "Barroco", "Gótico"],
    answer: "Op Art (Optical Art)",
    explanation: "Cria sensação de movimento no olho do observador.",
    skill: "Cinetismo"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 299,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "A capacidade de correr ou nadar por muito tempo sem cansar rápido é:",
    options: ["Força Máxima", "Resistência Aeróbica", "Flexibilidade", "Velocidade"],
    answer: "Resistência Aeróbica",
    explanation: "Usa oxigênio para produzir energia por longo tempo.",
    skill: "Capacidades"
  },
  {
    id: 300,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O uso de substâncias proibidas para melhorar artificialmente o rendimento chama-se:",
    options: ["Alongamento", "Doping", "Nutrição", "Hidratação"],
    answer: "Doping",
    explanation: "Antidesportivo e perigoso para a saúde.",
    skill: "Ética"
  },

  // ENSINO RELIGIOSO
  {
    id: 301,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Promover o respeito nas redes sociais e internet diz respeito à:",
    options: ["Ética Digital (Netchiqueta)", "Culinária", "Apenas à polícia", "Não importa"],
    answer: "Ética Digital (Netchiqueta)",
    explanation: "Valores morais também se aplicam no mundo virtual.",
    skill: "Cidadania"
  },
  {
    id: 302,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que define um 'Estado Laico'?",
    options: ["Um Estado que apoia uma única religião oficial", "Um Estado Neutro que garante liberdade de crença a todos sem favorecer nenhuma", "Um Estado ateu que proíbe religiões", "Um Estado governado por padres"],
    answer: "Um Estado Neutro que garante liberdade de crença a todos sem favorecer nenhuma",
    explanation: "Separação entre Igreja e Estado.",
    skill: "Sociedade"
  },

  // --- EXPANSÃO GLOBAL - LOTE 14 ---
  
  // MATEMÁTICA
  {
    id: 303,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é o valor da operação: 100 - 45?",
    options: ["45", "55", "65", "100"],
    answer: "55",
    explanation: "100 - 40 = 60. 60 - 5 = 55.",
    skill: "Subtração"
  },
  {
    id: 304,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual destas definições se refere a um 'Número Irracional'?",
    options: ["Número que pode ser escrito como fração", "Número que tem fim nas casas decimais", "Número com representação decimal infinita e não periódica (ex: Pi)", "Número negativo apenas"],
    answer: "Número com representação decimal infinita e não periódica (ex: Pi)",
    explanation: "Eles não podem ser expressos como razão de dois inteiros.",
    skill: "Números"
  },

  // PORTUGUÊS
  {
    id: 305,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é a classe gramatical da palavra 'Correr'?",
    options: ["Substantivo", "Adjetivo", "Verbo", "Pronome"],
    answer: "Verbo",
    explanation: "Verbos indicam ações, estados ou fenômenos.",
    skill: "Classes de Palavras"
  },
  {
    id: 306,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "O que é o 'Predicado' em uma oração?",
    options: ["O ser sobre quem se fala", "Tudo aquilo que se diz ou se informa sobre o sujeito", "O ponto final", "O primeiro nome da frase"],
    answer: "Tudo aquilo que se diz ou se informa sobre o sujeito",
    explanation: "Ex: 'O sol brilha'. Predicado: brilha.",
    skill: "Sintaxe"
  },

  // CIÊNCIAS
  {
    id: 307,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Quais são as três principais etapas do 'Ciclo da Água'?",
    options: ["Nascimento, crescimento e morte", "Evaporação, Condensação e Precipitação (Chuva)", "Fervura, congelamento e vapor", "Luz, sombra e vento"],
    answer: "Evaporação, Condensação e Precipitação (Chuva)",
    explanation: "A água circula entre a Terra e a atmosfera.",
    skill: "Água"
  },
  {
    id: 308,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal função do 'Fígado' no corpo humano?",
    options: ["Apenas bombear sangue", "Produzir a Bile e desintoxicar o sangue", "Fazer a digestão de ar", "Criar ossos"],
    answer: "Produzir a Bile e desintoxicar o sangue",
    explanation: "O fígado é uma glândula vital para o metabolismo.",
    skill: "Sistemas"
  },

  // HISTÓRIA
  {
    id: 309,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Como se chama a escrita sagrada dos Antigos Egípcios feita em papiro?",
    options: ["Escrita Cuneiforme", "Hieróglifos", "Alfabeto Fenício", "Grego"],
    answer: "Hieróglifos",
    explanation: "Usava desenhos para representar sons e ideias.",
    skill: "Egito"
  },
  {
    id: 310,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "O que foi a 'Reforma Protestante' no século XVI liderada por Martinho Lutero?",
    options: ["Uma reforma nas casas", "Uma divisão na Igreja Católica dando origem a novas igrejas", "Um estilo de pintura", "A descoberta do Brasil"],
    answer: "Uma divisão na Igreja Católica dando origem a novas igrejas",
    explanation: "Lutero criticava a venda de indulgências.",
    skill: "Religião"
  },

  // GEOGRAFIA
  {
    id: 311,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O 'Clima Equatorial' (ex: Amazônia) é caracterizado por ser:",
    options: ["Muito frio e seco", "Quente e úmido durante todo o ano", "Frio com neve", "Apenas seco"],
    answer: "Quente e úmido durante todo o ano",
    explanation: "Próximo à linha do Equador recebe muito sol e chuva.",
    skill: "Climatologia"
  },
  {
    id: 312,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a capital do Estado de Minas Gerais?",
    options: ["Rio de Janeiro", "São Paulo", "Belo Horizonte", "Ouro Preto"],
    answer: "Belo Horizonte",
    explanation: "BH é a capital e maior cidade do estado.",
    skill: "Território"
  },

  // ARTE
  {
    id: 313,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "A 'Arte Abstrata' é aquela que:",
    options: ["Retrata fielmente uma pessoa", "Usa formas, cores e linhas sem representar objetos do mundo real", "Só usa tinta preta", "É feita apenas por crianças"],
    answer: "Usa formas, cores e linhas sem representar objetos do mundo real",
    explanation: "Não tem compromisso com a realidade visual.",
    skill: "Modernismo"
  },
  {
    id: 314,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual grande artista renascentista pintou o teto da 'Capela Sistina' em Roma?",
    options: ["Leonardo da Vinci", "Donatello", "Michelangelo", "Raphael"],
    answer: "Michelangelo",
    explanation: "Um dos maiores feitos da história da arte.",
    skill: "Renascimento"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 315,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Handebol, o manejo da bola é feito obrigatoriamente com:",
    options: ["Os pés", "As mãos", "A cabeça", "Um bastão"],
    answer: "As mãos",
    explanation: "É proibido tocar a bola com os pés (exceto goleiro na área).",
    skill: "Handebol"
  },
  {
    id: 316,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Qual faixa de IMC (Índice de Massa Corporal) é considerada 'Peso Normal' para adultos pela OMS?",
    options: ["Menor que 18,5", "Entre 18,5 e 24,9", "Entre 25 e 29,9", "Maior que 30"],
    answer: "Entre 18,5 e 24,9",
    explanation: "Indica um peso saudável para a altura.",
    skill: "Saúde"
  },

  // ENSINO RELIGIOSO
  {
    id: 317,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O que significa 'Diversidade Religiosa'?",
    options: ["A obrigação de todos terem a mesma fé", "A coexistência de várias religiões e crenças diferentes em um mesmo espaço", "A proibição de cultos", "Apenas a leitura da Bíblia"],
    answer: "A coexistência de várias religiões e crenças diferentes em um mesmo espaço",
    explanation: "Garante o pluralismo e respeito.",
    skill: "Pluralismo"
  },
  {
    id: 318,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Quais são os textos sagrados mais antigos do Hinduísmo?",
    options: ["Bíblia", "Alcorão", "Os Vedas", "Torá"],
    answer: "Os Vedas",
    explanation: "Conjunto de escrituras em sânscrito.",
    skill: "Textos"
  },

  // MATEMÁTICA
  {
    id: 319,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se chama um polígono que possui exatamente 7 lados?",
    options: ["Hexágono", "Heptágono", "Octógono", "Decágono"],
    answer: "Heptágono",
    explanation: "Hepta = 7.",
    skill: "Polígonos"
  },
  {
    id: 320,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "O que diz o Teorema de Pitágoras para um triângulo retângulo?",
    options: ["a = b + c", "a² = b² + c²", "a³ = b³ + c³", "a = b * c"],
    answer: "a² = b² + c²",
    explanation: "O quadrado da hipotenusa é igual à soma dos quadrados dos catetos.",
    skill: "Teoremas"
  },

  // PORTUGUÊS
  {
    id: 321,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em uma Comparação Implícita (ex: 'Você é uma flor')?",
    options: ["Metáfora", "Símile", "Ironia", "Pleonasmo"],
    answer: "Metáfora",
    explanation: "Não usa conectivos de comparação (como, tal qual).",
    skill: "Figuras de Linguagem"
  },
  {
    id: 322,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem repete sons consonantais para criar ritmo (ex: 'O rato roeu')?",
    options: ["Assonância", "Aliteração", "Onomatopeia", "Metáfora"],
    answer: "Aliteração",
    explanation: "Repetição de consoantes.",
    skill: "Figuras de Linguagem"
  },

  // CIÊNCIAS
  {
    id: 323,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é um 'Neurônio' no corpo humano?",
    options: ["Célula muscular", "Célula do sistema nervoso responsável por impulsos", "Glóbulo branco", "Célula óssea"],
    answer: "Célula do sistema nervoso responsável por impulsos",
    explanation: "Transmitem sinais elétricos pelo corpo.",
    skill: "Sistema Nervoso"
  },
  {
    id: 324,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Uma 'Ligação Iônica' entre átomos ocorre quando há:",
    options: ["Compartilhamento de elétrons", "Transferência definitiva de elétrons de um átomo para outro", "Criação de novos prótons", "Atração apenas visual"],
    answer: "Transferência definitiva de elétrons de um átomo para outro",
    explanation: "Cria íons positivos e negativos que se atraem.",
    skill: "Química"
  },

  // HISTÓRIA
  {
    id: 325,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Qual é a data em que foi proclamada a Independência do Brasil?",
    options: ["22 de Abril de 1500", "7 de Setembro de 1822", "15 de Novembro de 1889", "13 de Maio de 1888"],
    answer: "7 de Setembro de 1822",
    explanation: "Grito do Ipiranga por Dom Pedro I.",
    skill: "Independência"
  },
  {
    id: 326,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "O regime de segregação racial institucionalizado na África do Sul chamava-se:",
    options: ["Holocausto", "Apartheid", "Escravidão", "Inquisição"],
    answer: "Apartheid",
    explanation: "Durou de 1948 a 1994, combatido por Nelson Mandela.",
    skill: "Direitos Humanos"
  },

  // GEOGRAFIA
  {
    id: 327,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que define a 'Transição Demográfica'?",
    options: ["O aumento da taxa de mortalidade apenas", "A mudança nas taxas de natalidade e mortalidade que acompanha o desenvolvimento", "A migração para o campo", "A redução do uso de carros"],
    answer: "A mudança nas taxas de natalidade e mortalidade que acompanha o desenvolvimento",
    explanation: "Geralmente envolve queda na mortalidade seguida por queda na natalidade.",
    skill: "Demografia"
  },
  {
    id: 328,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "A sigla ONU significa:",
    options: ["Organização das Nações Unidas", "Ordem Nacional Unificada", "Organização Naval Urbana", "Operação de Negócios Unidos"],
    answer: "Organização das Nações Unidas",
    explanation: "Criada em 1945 para promover a paz e a cooperação mundial.",
    skill: "Organizações"
  },

  // ARTE
  {
    id: 329,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "O movimento 'Surrealismo' (ex: Salvador Dalí) buscava representar:",
    options: ["Cenas do cotidiano de forma realista", "O mundo dos sonhos, do inconsciente e do absurdo", "Apenas paisagens naturais", "Desenho industrial"],
    answer: "O mundo dos sonhos, do inconsciente e do absurdo",
    explanation: "Influenciado pelas teorias de Freud sobre o subconsciente.",
    skill: "Vanguardas"
  },
  {
    id: 330,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual artista usava a serigrafia para retratar celebridades como Marilyn Monroe?",
    options: ["Picasso", "Vincent van Gogh", "Andy Warhol", "Claude Monet"],
    answer: "Andy Warhol",
    explanation: "Warhol é a figura central da Pop Art americana.",
    skill: "Pop Art"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 331,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "A Ginástica Rítmica se diferencia da Artística pelo uso obrigatório de:",
    options: ["Aparelhos fixos como barras e argolas", "Aparelhos volantes (arco, fita, bola, maças e corda) e dança", "Apenas saltos no chão", "Uso de pesos de academia"],
    answer: "Aparelhos volantes (arco, fita, bola, maças e corda) e dança",
    explanation: "Combina elementos de balé, ginástica e dança.",
    skill: "Ginástica"
  },
  {
    id: 332,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "A falta de atividade física regular é definida como:",
    options: ["Hipertrofia", "Sedentarismo", "Ortorexia", "Metabolismo"],
    answer: "Sedentarismo",
    explanation: "Fator de risco para doenças cardiovasculares.",
    skill: "Saúde"
  },

  // ENSINO RELIGIOSO
  {
    id: 333,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O esforço de aproximação, diálogo e cooperação entre diferentes Igrejas Cristãs chama-se:",
    options: ["Ecumenismo", "Sincretismo", "Ateísmo", "Luta de classes"],
    answer: "Ecumenismo",
    explanation: "Busca a unidade na diversidade cristã.",
    skill: "Diálogo"
  },
  {
    id: 334,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A Declaração Universal dos Direitos Humanos (1948) foi adotada pela:",
    options: ["Igreja Católica", "ONU (Organização das Nações Unidas)", "FIFA", "União Europeia apenas"],
    answer: "ONU (Organização das Nações Unidas)",
    explanation: "Marco histórico para a proteção dos direitos fundamentais.",
    skill: "Direitos"
  },

  // --- EXPANSÃO GLOBAL - LOTE 15 ---
  
  // MATEMÁTICA
  {
    id: 335,
    grade: "6º",
    discipline: "Matemática",
    type: "multiple",
    text: "Quantos metros (m) correspondem a 1 quilômetro (km)?",
    options: ["10 m", "100 m", "1000 m", "10000 m"],
    answer: "1000 m",
    explanation: "O prefixo 'quilo' significa mil vezes.",
    skill: "Unidades"
  },
  {
    id: 336,
    grade: "7º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é a soma dos ângulos internos de qualquer Triângulo?",
    options: ["90 graus", "180 graus", "270 graus", "360 graus"],
    answer: "180 graus",
    explanation: "A soma total dos três ângulos é sempre 180°.",
    skill: "Geometria"
  },

  // PORTUGUÊS
  {
    id: 337,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "Qual é o plural correto da palavra 'Cidadão'?",
    options: ["Cidadãos", "Cidadães", "Cidadões", "Cidadãos-mestre"],
    answer: "Cidadãos",
    explanation: "A terminação 'ão' faz plural em 'ãos'.",
    skill: "Plural"
  },
  {
    id: 338,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "Na frase 'Eu irei ao cinema amanhã', o verbo está em qual tempo?",
    options: ["Presente", "Pretérito Perfeito", "Futuro do Presente", "Futuro do Pretérito"],
    answer: "Futuro do Presente",
    explanation: "Indica uma ação que acontecerá depois de falar.",
    skill: "Verbos"
  },

  // CIÊNCIAS
  {
    id: 339,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é o processo de 'Condensação'?",
    options: ["Transformação do gelo em água", "Passagem do estado gasoso (vapor) para o líquido", "Passagem do líquido para o vapor", "A queima da água"],
    answer: "Passagem do estado gasoso (vapor) para o líquido",
    explanation: "Ex: formação de gotas na tampa da panela.",
    skill: "Estados Físicos"
  },
  {
    id: 340,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a principal função dos 'Rins' no corpo humano?",
    options: ["Bombear o sangue", "Digerir a comida", "Filtrar o sangue para retirar impurezas e produzir urina", "Transportar gás carbônico"],
    answer: "Filtrar o sangue para retirar impurezas e produzir urina",
    explanation: "Excreção de resíduos metabólicos.",
    skill: "Sistema Excretor"
  },

  // HISTÓRIA
  {
    id: 341,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Segundo a lenda clássica, quais irmãos foram amamentados por uma loba e fundaram Roma?",
    options: ["Rômulo e Remo", "Caim e Abel", "Aquiles e Heitor", "Zeus e Poseidon"],
    answer: "Rômulo e Remo",
    explanation: "Roma nasceu da união de aldeias no rio Tibre.",
    skill: "Roma Antiga"
  },
  {
    id: 342,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "O que foi o 'Absolutismo' na Idade Moderna?",
    options: ["Um regime onde o povo votava em tudo", "A concentração de poder total nas mãos do Monarca (Rei)", "A divisão dos poderes em três", "O fim da escravidão"],
    answer: "A concentração de poder total nas mãos do Monarca (Rei)",
    explanation: "Os reis governavam sem prestar contas a leis ou parlamentos.",
    skill: "Idade Moderna"
  },

  // GEOGRAFIA
  {
    id: 343,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O que caracteriza o 'Intemperismo Físico' das rochas?",
    options: ["A alteração dos minerais por ácidos", "A quebra da rocha em pedaços menores por variação de temperatura", "O crescimento de raízes dentro da rocha", "A ação da chuva ácida"],
    answer: "A quebra da rocha em pedaços menores por variação de temperatura",
    explanation: "Dilatação e contração racham a rocha.",
    skill: "Geomorfologia"
  },
  {
    id: 344,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o maior Estado do Brasil em extensão territorial?",
    options: ["Minas Gerais", "Bahia", "Amazonas", "Pará"],
    answer: "Amazonas",
    explanation: "O Amazonas ocupa grande parte da Região Norte.",
    skill: "Território"
  },

  // ARTE
  {
    id: 345,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual das cores abaixo é uma Cor Primária da luz (sistema RGB)?",
    options: ["Verde", "Rosa", "Marrom", "Laranja"],
    answer: "Verde",
    explanation: "As cores primárias da luz são Vermelho, Verde e Azul.",
    skill: "Cores"
  },
  {
    id: 346,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "A técnica de gravura onde a matriz é uma prancha de Madeira entalhada chama-se:",
    options: ["Serigrafia", "Litografia", "Xilogravura", "Afresco"],
    answer: "Xilogravura",
    explanation: "Xilo vem do grego 'madeira'. Muito usada no Cordel.",
    skill: "Gravura"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 347,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Voleibol, o jogador 'Líbero' tem como função principal:",
    options: ["Atacar na rede", "Fazer o saque forte", "A recepção e defesa de bola", "Levantar a bola apenas"],
    answer: "A recepção e defesa de bola",
    explanation: "Ele usa camisa de cor diferente e não ataca.",
    skill: "Voleibol"
  },
  {
    id: 348,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "A capacidade física de realizar movimentos com grande amplitude articular chama-se:",
    options: ["Resistência", "Velocidade", "Força", "Flexibilidade"],
    answer: "Flexibilidade",
    explanation: "Importante para evitar lesões musculares.",
    skill: "Flexibilidade"
  },

  // ENSINO RELIGIOSO
  {
    id: 349,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Um 'Espaço Sagrado' é caracterizado por:",
    options: ["Ser apenas um lugar bonito", "Ter um significado religioso ou espiritual especial para um grupo", "custar caro", "Ser aberto apenas no domingo"],
    answer: "Ter um significado religioso ou espiritual especial para um grupo",
    explanation: "Ex: Templos, rios, florestas sagradas.",
    skill: "Espaços"
  },
  {
    id: 350,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Um 'Rito de Passagem' serve para marcar:",
    options: ["Um teste de velocidade", "A mudança de uma fase da vida para outra (ex: infância para maturidade)", "O final do ano civil", "A compra de um bem"],
    answer: "A mudança de uma fase da vida para outra (ex: infância para maturidade)",
    explanation: "Ex: Crisma, Bar Mitzvah, rituais indígenas.",
    skill: "Rituais"
  },

  // MATEMÁTICA
  {
    id: 351,
    grade: "8º",
    discipline: "Matemática",
    type: "multiple",
    text: "Como se chama um polígono que possui exatamente 8 lados?",
    options: ["Pentágono", "Heptágono", "Octógono", "Decágono"],
    answer: "Octógono",
    explanation: "Octo = 8. Comum em arenas de MMA.",
    skill: "Polígonos"
  },
  {
    id: 352,
    grade: "9º",
    discipline: "Matemática",
    type: "multiple",
    text: "Qual é os valor numérico de 5 fatorial (escrito como 5!)?",
    options: ["5", "25", "120", "240"],
    answer: "120",
    explanation: "5! = 5 x 4 x 3 x 2 x 1 = 120.",
    skill: "Álgebra"
  },

  // PORTUGUÊS
  {
    id: 353,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em repetir uma ideia com palavras diferentes (ex: 'subir para cima')?",
    options: ["Pleonasmo", "Antítese", "Metáfora", "Ironia"],
    answer: "Pleonasmo",
    explanation: "Repetição redundante de termos.",
    skill: "Figuras de Linguagem"
  },
  {
    id: 354,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "A fusão da preposição 'A' com o artigo 'A' (indicada pelo acento grave `) chama-se:",
    options: ["Crase", "Ditongo", "Sinalefa", "Hiato"],
    answer: "Crase",
    explanation: "Ocorre diante de palavras femininas aceitando artigo.",
    skill: "Crase"
  },

  // CIÊNCIAS
  {
    id: 355,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é o 'DNA' no organismo dos seres vivos?",
    options: ["Uma proteína muscular", "Uma molécula que contém as informações genéticas", "Uma gordura", "Um tipo de açúcar"],
    answer: "Uma molécula que contém as informações genéticas",
    explanation: "Ácido Desoxirribonucleico, receita da vida.",
    skill: "Genética"
  },
  {
    id: 356,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Um exemplo de reação de 'Combustão' (queima) necessita essencialmente de:",
    options: ["Água", "Oxigênio (Comburente)", "Apenas luz", "Gás carbônico pura"],
    answer: "Oxigênio (Comburente)",
    explanation: "Sem oxigênio o fogo não se mantém.",
    skill: "Química"
  },

  // HISTÓRIA
  {
    id: 357,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "Quem foi o primeiro Imperador do Brasil após a Independência?",
    options: ["Dom Pedro I", "Dom Pedro II", "Tiradentes", "Zumbi dos Palmares"],
    answer: "Dom Pedro I",
    explanation: "Governou o Primeiro Reinado.",
    skill: "Brasil Império"
  },
  {
    id: 358,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "Qual era a principal função do 'Muro de Berlim' durante a Guerra Fria?",
    options: ["Apenas apoiar a economia", "Dividir a cidade de Berlim em setores Capitalista e Socialista", "Proteger contra inundações", "Ponto de comércio"],
    answer: "Dividir a cidade de Berlim em setores Capitalista e Socialista",
    explanation: "Símbolo da divisão ideológica do mundo.",
    skill: "Guerra Fria"
  },

  // GEOGRAFIA
  {
    id: 359,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é o nome da linha imaginária que divide a Terra em Hemisfério Norte e Sul?",
    options: ["Trópico de Câncer", "Linha do Equador", "Meridiano de Greenwich", "Círculo Polar Árctico"],
    answer: "Linha do Equador",
    explanation: "Divide a Terra horizontalmente em partes iguais.",
    skill: "Cartografia"
  },
  {
    id: 360,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "O processo de integração econômica, cultural e social do mundo moderno chama-se:",
    options: ["Industrialização", "Totalitarismo", "Globalização", "Urbanização"],
    answer: "Globalização",
    explanation: "Tornou o mundo mais interconectado.",
    skill: "Geopolítica"
  },

  // ARTE
  {
    id: 361,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "O que caracteriza uma 'Instalação' na Arte Contemporânea?",
    options: ["Uma pintura em tela tradicional", "Uma obra tridimensional que transforma o ambiente e pode ser percorrida", "Um desenho a lápis", "Um show de dança"],
    answer: "Uma obra tridimensional que transforma o ambiente e pode ser percorrida",
    explanation: "O espectador faz parte da obra.",
    skill: "Contemporânea"
  },
  {
    id: 362,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "Qual destas manifestações artísticas envolve o corpo humano em movimento no espaço?",
    options: ["Pintura", "Escultura", "Dança", "Arquitetura"],
    answer: "Dança",
    explanation: "A dança é a arte do movimento.",
    skill: "Dança"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 363,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Basquetebol, quantos segundos uma equipe tem para arremessar a bola à cesta (tempo de ataque)?",
    options: ["5 segundos", "10 segundos", "14 segundos", "24 segundos"],
    answer: "24 segundos",
    explanation: "Regra para tornar o jogo dinâmico.",
    skill: "Basquete"
  },
  {
    id: 364,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Exercícios de alta intensidade e curta duração (ex: corrida de 100m) são classificados como:",
    options: ["Aeróbicos", "Anaeróbicos", "Flexíveis", "Posturais"],
    answer: "Anaeróbicos",
    explanation: "Usam energia estocada sem depender do oxigênio imediato.",
    skill: "Fisiologia"
  },

  // ENSINO RELIGIOSO
  {
    id: 365,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A aceitação e o respeito às diferentes visões de mundo e crenças alheias chama-se:",
    options: ["Intolerância", "Tolerância Religiosa", "Assimilação", "Segregação"],
    answer: "Tolerância Religiosa",
    explanation: "Fundamental para a garantia dos Direitos Humanos.",
    skill: "Respeito"
  },
  {
    id: 366,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A ausência total de crença na existência de qualquer divindade ou deuses define o:",
    options: ["Teísmo", "Ateísmo", "Agnosticismo", "Panteísmo"],
    answer: "Ateísmo",
    explanation: "Posição filosófica que nega a existência de deuses.",
    skill: "Filosofia"
  },

  // PORTUGUÊS
  {
    id: 367,
    grade: "6º",
    discipline: "Português",
    type: "multiple",
    text: "O que caracteriza um 'Sujeito Composto' na análise sintática?",
    options: ["Tem apenas um núcleo", "Tem dois ou mais núcleos na frase", "Não aparece na oração", "É sempre plural"],
    answer: "Tem dois ou mais núcleos na frase",
    explanation: "Ex: 'João e Maria saíram'. Núcleos: João, Maria.",
    skill: "Sintaxe"
  },
  {
    id: 368,
    grade: "7º",
    discipline: "Português",
    type: "multiple",
    text: "O que é o 'Predicativo do Sujeito'?",
    options: ["A ação principal do verbo", "Um termo que atribui uma característica ou estado ao sujeito", "O ponto de interrogação", "O conectivo nominal"],
    answer: "Um termo que atribui uma característica ou estado ao sujeito",
    explanation: "Ex: 'A menina está feliz'. Feliz é o predicativo.",
    skill: "Sintaxe"
  },
  {
    id: 369,
    grade: "8º",
    discipline: "Português",
    type: "multiple",
    text: "Qual figura de linguagem consiste em substituir um termo por outro com proximidade (ex: 'Ler Machado de Assis' pelo livro)?",
    options: ["Metáfora", "Metonímia", "Eufemismo", "Ironia"],
    answer: "Metonímia",
    explanation: "Substituição do autor pela obra, continente pelo conteúdo.",
    skill: "Figuras de Linguagem"
  },
  {
    id: 370,
    grade: "9º",
    discipline: "Português",
    type: "multiple",
    text: "Qual conectivo (conjunção) indica a 'Finalidade' de uma ação anterior?",
    options: ["Para que / A fim de que", "Porque (Causa)", "Portanto (Conclusão)", "Embora (Oposição)"],
    answer: "Para que / A fim de que",
    explanation: "Indica o objetivo de algo.",
    skill: "Coesão"
  },

  // CIÊNCIAS
  {
    id: 371,
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é o processo físico da 'Fusão'?",
    options: ["Gás para sólido", "Sólido para líquido (derretimento)", "Líquido para gás", "Apenas ferver"],
    answer: "Sólido para líquido (derretimento)",
    explanation: "Ex: gelo virando água líquida com calor.",
    skill: "Estados Físicos"
  },
  {
    id: 372,
    grade: "7º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é a função do 'Pâncreas' no sistema digestório e endócrino?",
    options: ["Bombear oxigênio apenas", "Produzir Insulina e sucos digestivos", "Filtrar ar", "Fazer ossos"],
    answer: "Produzir Insulina e sucos digestivos",
    explanation: "Regula açúcar e ajuda na quebra de alimentos.",
    skill: "Fisiologia"
  },
  {
    id: 373,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que é o 'Cromossomo' encontrado no núcleo das células?",
    options: ["Uma gordura", "Uma estrutura de DNA condensado com genes", "Um glóbulo vermelho", "Uma vitamina"],
    answer: "Uma estrutura de DNA condensado com genes",
    explanation: "Carrega as instruções genéticas da espécie.",
    skill: "Genética"
  },
  {
    id: 374,
    grade: "9º",
    discipline: "Ciências",
    type: "multiple",
    text: "Uma reação química 'Endotérmica' é aquela que:",
    options: ["Absorve calor para acontecer", "Libera calor", "Não muda temperatura", "Ocorre na água"],
    answer: "Absorve calor para acontecer",
    explanation: "Endo = dentro. Thermes = calor.",
    skill: "Química"
  },
  {
    id: 375,
    grade: "8º",
    discipline: "Ciências",
    type: "multiple",
    text: "O efeito que retém o calor do Sol na Terra por gases da atmosfera chama-se:",
    options: ["Chuva Ácida", "Efeito Estufa", "Camada de Ozônio", "Tsunami"],
    answer: "Efeito Estufa",
    explanation: "Fenômeno natural vital, mas agravado por poluição.",
    skill: "Ambiente"
  },

  // HISTÓRIA
  {
    id: 376,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: "Qual animal representava o Deus Sobek (proteção e fertilidade) no Egito Antigo?",
    options: ["Gato", "Jacaré (Crocodilo)", "Falcão", "Besouro"],
    answer: "Jacaré (Crocodilo)",
    explanation: "Sobek tinha cabeça de crocodilo e corpo de homem.",
    skill: "Egito Antigo"
  },
  {
    id: 377,
    grade: "7º",
    discipline: "História",
    type: "multiple",
    text: "Qual invenção do séc XV ajudou a baratear e espalhar livros como a Bíblia?",
    options: ["Internet", "Prensa de Tipos Móveis de Gutenberg", "Bússola", "Telefone"],
    answer: "Prensa de Tipos Móveis de Gutenberg",
    explanation: "Impulsionou o Renascimento e a Reforma.",
    skill: "Renascimento"
  },
  {
    id: 378,
    grade: "8º",
    discipline: "História",
    type: "multiple",
    text: "O maior conflito armado da América do Sul (1864-1870) envolveu a Tríplice Aliança contra:",
    options: ["Argentina", "Paraguai", "Uruguai", "Inglaterra"],
    answer: "Paraguai",
    explanation: "A Tríplice Aliança era Brasil, Argentina e Uruguai.",
    skill: "Guerra do Paraguai"
  },
  {
    id: 379,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "O que foi a 'Lei Seca' nos Estados Unidos nos anos 1920?",
    options: ["Proibição de tomar banho", "Proibição da venda e consumo de bebidas alcoólicas", "Fim da escassez de água", "Proibição de dirigir à noite"],
    answer: "Proibição da venda e consumo de bebidas alcoólicas",
    explanation: "Gerou o aumento do crime organizado (Al Capone).",
    skill: "Guerra Fria"
  },
  {
    id: 380,
    grade: "9º",
    discipline: "História",
    type: "multiple",
    text: "O regime autoritário de 21 anos iniciado no Brasil em 1964 chama-se:",
    options: ["Monarquia", "Ditadura Militar", "República da Espada", "Era Vargas"],
    answer: "Ditadura Militar",
    explanation: "Governado por generais com censura e repressão.",
    skill: "Brasil Ditadura"
  },

  // GEOGRAFIA
  {
    id: 381,
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O acúmulo de areia e lixo no fundo de rios, diminuindo sua profundidade, chama-se:",
    options: ["Erosão", "Assoreamento", "Desmatamento", "Poluição Sonora"],
    answer: "Assoreamento",
    explanation: "Causado pela chuva lavando terra sem vegetação ciliar.",
    skill: "Hidrografia"
  },
  {
    id: 382,
    grade: "7º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a Região do Brasil que possui o maior número de Estados (9 estados)?",
    options: ["Norte", "Sudeste", "Nordeste", "Sul"],
    answer: "Nordeste",
    explanation: "Apesar de não ser a maior em área, tem mais estados.",
    skill: "Divisão Regional"
  },
  {
    id: 383,
    grade: "8º",
    discipline: "Geografia",
    type: "multiple",
    text: "O indicador IDH (Índice de Desenvolvimento Humano) avalia Educação, Renda e:",
    options: ["Número de carros", "Expectativa de Vida (Saúde)", "Tamanho do país", "Preço do dólar"],
    answer: "Expectativa de Vida (Saúde)",
    explanation: "Mede a qualidade de vida geral da população.",
    skill: "Demografia"
  },
  {
    id: 384,
    grade: "9º",
    discipline: "Geografia",
    type: "multiple",
    text: "O grupo BRICS reúne países emergentes. O 'B' e o 'R' significam:",
    options: ["Bolívia e Rússia", "Brasil e Rússia", "Brasil e Reino Unido", "Bélgica e Roma"],
    answer: "Brasil e Rússia",
    explanation: "Brasil, Rússia, Índia, China e África do Sul (South Africa).",
    skill: "Blocos Econômicos"
  },

  // ARTE
  {
    id: 385,
    grade: "6º",
    discipline: "Arte",
    type: "multiple",
    text: "Uma técnica artesanal de tingir tecidos usando cera derretida como reserva chama-se:",
    options: ["Batik", "Aquarela", "Colagem", "Pontilhismo"],
    answer: "Batik",
    explanation: "Originária da Ásia, cria desenhos em áreas protegidas.",
    skill: "Técnicas"
  },
  {
    id: 386,
    grade: "7º",
    discipline: "Arte",
    type: "multiple",
    text: "A técnica 'Sfumato' de Da Vinci (ex: Mona Lisa) caracteriza-se por:",
    options: ["Linhas muito fortes e pretas", "Transição extremamente suave entre sombras e luz, sem linhas visíveis", "Pontos coloridos no quadro", "Furos na tela"],
    answer: "Transição extremamente suave entre sombras e luz, sem linhas visíveis",
    explanation: "Sfumato significa 'como fumaça'.",
    skill: "Renascimento"
  },
  {
    id: 387,
    grade: "8º",
    discipline: "Arte",
    type: "multiple",
    text: "O movimento 'Dadaísmo' (I Guerra) protestava contra a guerra usando:",
    options: ["Realismo extremo", "O Absurdo, o deboche e o anti-arte", "Pintura apenas de deuses", "Desenhos computacionais"],
    answer: "O Absurdo, o deboche e o anti-arte",
    explanation: "Ruptura radical com a lógica estética burguesa.",
    skill: "Vanguardas"
  },
  {
    id: 388,
    grade: "9º",
    discipline: "Arte",
    type: "multiple",
    text: "A pintura com spray feita em muros das cidades é conhecida como:",
    options: ["Grafite", "Pixação apenas", "Afresco", "Mosaico"],
    answer: "Grafite",
    explanation: "Manifestação da cultura Hip-Hop e arte urbana.",
    skill: "Arte Urbana"
  },

  // EDUCAÇÃO FÍSICA
  {
    id: 389,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Karatê e Judô, qual cor de Faixa simboliza o aluno Iniciante?",
    options: ["Vermelha", "Branca", "Preta", "Marrom"],
    answer: "Branca",
    explanation: "A faixa branca representa pureza e vazio de conhecimento.",
    skill: "Lutas"
  },
  {
    id: 390,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Um IMC (Índice de Massa Corporal) menor que 18,5 indica:",
    options: ["Peso ideal", "Sobrepeso", "Baixo Peso (Magreza)", "Obesidade"],
    answer: "Baixo Peso (Magreza)",
    explanation: "Leva a risco de deficiências nutricionais.",
    skill: "Saúde"
  },
  {
    id: 391,
    grade: "8º",
    discipline: "Educação Física",
    type: "multiple",
    text: "O método de condicionamento 'Pilates' foca no fortalecimento do 'Core' ou do:",
    options: ["Dedão do pé", "Centro do corpo (abdômen e lombar)", "Bíceps", "Cabelo"],
    answer: "Centro do corpo (abdômen e lombar)",
    explanation: "Joseph Pilates chamava centro de 'Powerhouse'.",
    skill: "Ginástica"
  },
  {
    id: 392,
    grade: "9º",
    discipline: "Educação Física",
    type: "multiple",
    text: "Os Anabolizantes usados ilegalmente para crescimento muscular são hormônios chamados:",
    options: ["Proteínas puras", "Derivados de Testosterona sintética", "Vitaminas C", "Água mineral"],
    answer: "Derivados de Testosterona sintética",
    explanation: "Podem causar danos graves ao fígado, coração e hormônios.",
    skill: "Ética"
  },
  {
    id: 393,
    grade: "6º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No jogo de Xadrez, qual peça se move em forma de 'L'?",
    options: ["Torre", "Bispo", "Cavalo", "Peão"],
    answer: "Cavalo",
    explanation: "O cavalo é a única peça que pode pular outras.",
    skill: "Jogos Mente"
  },
  {
    id: 394,
    grade: "7º",
    discipline: "Educação Física",
    type: "multiple",
    text: "No Futebol, o impedimento ocorre quando o atacante está mais próximo da linha de fundo que:",
    options: ["O goleiro sozinho", "A bola e o penúltimo defensor adversário", "Apenas a linha do meio campo", "O técnico rival"],
    answer: "A bola e o penúltimo defensor adversário",
    explanation: "Regra essencial para evitar 'banheirismo'.",
    skill: "Futebol"
  },

  // ENSINO RELIGIOSO
  {
    id: 395,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A conversa respeitosa e construtiva entre diferentes tradições religiosas chama-se:",
    options: ["Diálogo Inter-religioso", "Discussão partidária", "Monólogo", "Sincretismo"],
    answer: "Diálogo Inter-religioso",
    explanation: "Foca na paz, mútua compreensão e cooperação.",
    skill: "Diálogo"
  },
  {
    id: 396,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "O estudo específico dos deveres e princípios éticos de uma profissão chama-se:",
    options: ["Folclore", "Deontologia", "Ontologia", "Metodologia"],
    answer: "Deontologia",
    explanation: "Códigos de ética profissionais (ex: medicina, direito).",
    skill: "Ética"
  },
  {
    id: 397,
    grade: "8º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A capacidade de se colocar no lugar do outro e compreender seus sentimentos é:",
    options: ["Simpatia", "Empatia", "Apatia", "Antipatia"],
    answer: "Empatia",
    explanation: "Base para o respeito e solidariedade humana.",
    skill: "Valores"
  },
  {
    id: 398,
    grade: "9º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "A dedicação ou sacrifício desinteressado pelo bem do outro define o:",
    options: ["Egoísmo", "Altruísmo", "Narcisismo", "Materialismo"],
    answer: "Altruísmo",
    explanation: "Amor ao próximo em atos concretos.",
    skill: "Filantropia"
  },
  {
    id: 399,
    grade: "6º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Uma imagem, objeto ou cor que aponta para um mistério ou realidade divina é um:",
    options: ["Brinquedo", "Símbolo Religioso", "Mapa", "Anúncio"],
    answer: "Símbolo Religioso",
    explanation: "Ex: Cruz, Estrela de Davi, Lua Crescente.",
    skill: "Símbolos"
  },
  {
    id: 400,
    grade: "7º",
    discipline: "Ensino Religioso",
    type: "multiple",
    text: "Qual é o nome dado aos templos tradicionais budistas na Ásia com telhados sobrepostos curvados?",
    options: ["Catedral", "Pagode (Pagoda)", "Mesquita", "Sinagoga"],
    answer: "Pagode (Pagoda)",
    explanation: "Construções típicas da China, Japão e Vietnã.",
    skill: "Espaços"
  }
];
