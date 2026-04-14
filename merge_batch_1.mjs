import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 1;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Iniciando inserção a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS 6º ANO: ECOSSISTEMAS/BIOMAS (Faltam 9) ---
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual bioma brasileiro é conhecido como a 'Savana Brasileira', possuindo solo ácido e árvores de troncos retorcidos?",
    options: ["Caatinga", "Cerrado", "Mata Atlântica", "Pampas"],
    answer: "Cerrado",
    explanation: "O Cerrado é o segundo maior bioma da América do Sul e possui características de savana.",
    skill: "Ecossistemas/Biomas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Em qual bioma encontramos a maior biodiversidade do planeta e um clima predominantemente quente e úmido?",
    options: ["Pantanal", "Amazônia", "Cerrado", "Caatinga"],
    answer: "Amazônia",
    explanation: "A Floresta Amazônica é a maior floresta tropical do mundo e essencial para a regulação climática.",
    skill: "Ecossistemas/Biomas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O bioma que ocorre apenas no Brasil, com vegetação adaptada à escassez de água, é chamado de:",
    options: ["Cerrado", "Caatinga", "Mata de Araucária", "Pampa"],
    answer: "Caatinga",
    explanation: "A Caatinga é um bioma exclusivamente brasileiro caracterizado pelo clima semiárido.",
    skill: "Ecossistemas/Biomas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual bioma é caracterizado por áreas alagáveis e é considerado uma das maiores planícies de inundação contínua do mundo?",
    options: ["Pantanal", "Cerrado", "Mata Atlântica", "Amazônia"],
    answer: "Pantanal",
    explanation: "O Pantanal é um bioma de transição altamente influenciado pelos ciclos de cheia e seca.",
    skill: "Ecossistemas/Biomas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "A Mata Atlântica é um bioma que:",
    options: ["Ocupa o centro do Brasil", "Está quase totalmente preservada", "Sofreu grande desmatamento devido à ocupação humana no litoral", "Não possui biodiversidade"],
    answer: "Sofreu grande desmatamento devido à ocupação humana no litoral",
    explanation: "Historicamente, a Mata Atlântica foi o bioma mais explorado desde o início da colonização.",
    skill: "Ecossistemas/Biomas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Os 'Pampas' são campos sulinos localizados principalmente em qual estado brasileiro?",
    options: ["Santa Catarina", "Paraná", "Rio Grande do Sul", "Mato Grosso do Sul"],
    answer: "Rio Grande do Sul",
    explanation: "O bioma Pampa é restrito ao estado do Rio Grande do Sul no território brasileiro.",
    skill: "Ecossistemas/Biomas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O que define um 'Ecossistema'?",
    options: ["Apenas o conjunto de animais", "Apenas o conjunto de plantas", "A interação entre seres vivos e os fatores não vivos (água, solo, luz)", "Apenas o clima de uma região"],
    answer: "A interação entre seres vivos e os fatores não vivos (água, solo, luz)",
    explanation: "Um ecossistema envolve a troca de energia e matéria entre componentes bióticos e abióticos.",
    skill: "Ecossistemas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual fator abiótico é crucial para a fotossíntese das plantas em um ecossistema?",
    options: ["Oxigênio", "Gás Carbônico", "Luz Solar", "Micro-organismos"],
    answer: "Luz Solar",
    explanation: "A energia solar é o motor primário para a produção de matéria orgânica pelas plantas.",
    skill: "Ecossistemas"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Como chamamos os seres que decompõem a matéria orgânica morta em um ecossistema?",
    options: ["Produtores", "Consumidores Primários", "Decompositores (Fungos e Bactérias)", "Predadores"],
    answer: "Decompositores (Fungos e Bactérias)",
    explanation: "Eles reciclam nutrientes de volta para o solo, essencial para o ciclo da vida.",
    skill: "Ecossistemas"
  },

  // --- CIÊNCIAS 6º ANO: RESPIRAÇÃO (Faltam 9) ---
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual é o principal órgão do sistema respiratório humano onde ocorrem as trocas gasosas?",
    options: ["Coração", "Traqueia", "Pulmões", "Laringe"],
    answer: "Pulmões",
    explanation: "Nos alvéolos pulmonares ocorre a entrada de oxigênio e a saída de gás carbônico.",
    skill: "Respiração"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "O músculo que separa o tórax do abdômen e é fundamental para a respiração é o:",
    options: ["Bíceps", "Diafragma", "Deltoide", "Glúteo"],
    answer: "Diafragma",
    explanation: "A contração e relaxamento do diafragma permitem a entrada e saída de ar dos pulmões.",
    skill: "Respiração"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Durante a inspiração, o ar entra nos pulmões porque:",
    options: ["A pressão interna diminui", "A pressão interna aumenta", "Os pulmões se fecham", "O diafragma relaxa"],
    answer: "A pressão interna diminui",
    explanation: "Ao expandir a caixa torácica, a pressão cai e o ar externo entra.",
    skill: "Respiração"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Como se chama o processo de troca de gases entre os alvéolos e o sangue?",
    options: ["Hematose", "Circulação", "Digestão", "Excreção"],
    answer: "Hematose",
    explanation: "Hematose é o nome técnico para a oxigenação do sangue nos pulmões.",
    skill: "Respiração"
  },
  {
    grade: "6º",
    discipline: "Ciências",
    type: "multiple",
    text: "Qual gás é liberado pelas células como resíduo da respiração celular e deve ser expelido?",
    options: ["Oxigênio", "Nitrogênio", "Gás Carbônico (CO2)", "Ozônio"],
    answer: "Gás Carbônico (CO2)",
    explanation: "O CO2 é o subproduto que o sistema respiratório remove do corpo.",
    skill: "Respiração"
  },

  // --- GEOGRAFIA 6º ANO: ESTRUTURA DA TERRA (Faltam 9) ---
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual é a camada mais fina e superficial da Terra, onde vivemos?",
    options: ["Núcleo Externo", "Manto", "Crosta Terrestre (Litosfera)", "Núcleo Interno"],
    answer: "Crosta Terrestre (Litosfera)",
    explanation: "A crosta é dividida em placas tectônicas e possui os continentes e oceanos.",
    skill: "Estrutura da Terra"
  },
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "A camada intermediária da Terra, composta por magma (rocha derretida), é o:",
    options: ["Litosfera", "Núcleo", "Manto", "Atmosfera"],
    answer: "Manto",
    explanation: "O manto é responsável pelos movimentos de convecção que movem as placas tectônicas.",
    skill: "Estrutura da Terra"
  },
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "O núcleo terrestre é composto principalmente por quais metais?",
    options: ["Ouro e Prata", "Alumínio e Cobre", "Ferro e Níquel", "Chumbo e Zinco"],
    answer: "Ferro e Níquel",
    explanation: "A liga de ferro e níquel no núcleo é responsável pelo campo magnético da Terra.",
    skill: "Estrutura da Terra"
  },
  {
    grade: "6º",
    discipline: "Geografia",
    type: "multiple",
    text: "Qual teoria explica que os continentes estiveram unidos em um supercontinente chamado Pangeia?",
    options: ["Teoria da Relatividade", "Deriva Continental", "Teoria das Cordas", "Teoria da Evolução"],
    answer: "Deriva Continental",
    explanation: "Alfred Wegener propôs que os continentes se afastam lentamente ao longo de milhões de anos.",
    skill: "Estrutura da Terra"
  }
];

// Atribuir IDs sequenciais
const questionsWithIds = batch.map((q, index) => ({
    id: startId + index,
    ...q
}));

// Formatar como string amigável ao questions.js
const newQuestionsStr = questionsWithIds.map(q => {
    return `  {\n    id: ${q.id},\n    grade: "${q.grade}",\n    discipline: "${q.discipline}",\n    type: "${q.type}",\n    text: "${q.text}",\n    options: ${JSON.stringify(q.options)},\n    answer: "${q.answer}",\n    explanation: "${q.explanation}",\n    skill: "${q.skill}"\n  }`;
}).join(',\n');

const content = fs.readFileSync(filePath, 'utf-8');
const updatedContent = content.replace(/\s*\];\s*$/, ',\n\n' + newQuestionsStr + '\n];\n');

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log(`Sucesso! ${batch.length} questões adicionadas.`);
