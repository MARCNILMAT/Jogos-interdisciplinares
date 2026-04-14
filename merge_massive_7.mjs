import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2501;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massivo Final (8º/9º Ano) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS 9º ANO: QUÍMICA E FÍSICA ---
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Como se chama a ligação química onde ocorre o compartilhamento de elétrons entre os átomos?", options: ["Ligação Iônica", "Ligação Covalente", "Ligação Metálica", "Ligação de Hidrogênio"], answer: "Ligação Covalente", explanation: "Na ligação covalente, os átomos compartilham pares de elétrons para atingir a estabilidade.", skill: "Ligações Químicas" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A escala utilizada para medir a acidez ou basicidade de uma solução é o:", options: ["pH", "Lux", "Decibel", "Pascal"], answer: "pH", explanation: "Varia de 0 a 14, sendo 7 neutro.", skill: "Química Inorgânica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual cientista propôs a Lei da Gravitação Universal após observar a queda de uma maçã?", options: ["Albert Einstein", "Isaac Newton", "Galileu Galilei", "Marie Curie"], answer: "Isaac Newton", explanation: "Newton formulou as leis que explicam o movimento dos astros e objetos na Terra.", skill: "Gravidade" },

  // --- GEOGRAFIA 9º ANO: EUROPE E ASIA ---
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O bloco econômico composto por 27 países europeus que utilizam, em sua maioria, o Euro como moeda única é a:", options: ["ONU", "OTAN", "União Europeia", "Mercosul"], answer: "União Europeia", explanation: "É um dos blocos mais integrados do mundo.", skill: "Blocos Econômicos" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual país asiático é conhecido por sua enorme população, rápido crescimento econômico e por ser a 'fábrica do mundo'?", options: ["Japão", "Índia", "China", "Coreia do Sul"], answer: "China", explanation: "A China é a maior potência industrial emergente.", skill: "Ásia" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O rio mais longo da Ásia, fundamental para a agricultura e economia chinesa, é o:", options: ["Rio Nilo", "Rio Amazonas", "Rio Yangtzé (Azul)", "Rio Ganges"], answer: "Rio Yangtzé (Azul)", explanation: "O Yangtzé é vital para o desenvolvimento da China Central.", skill: "Geografia da Ásia" },

  // --- HISTÓRIA 9º ANO: SÉCULO XX ---
  { grade: "9º", discipline: "História", type: "multiple", text: "A Primeira Guerra Mundial (1914-1918) teve como estopim o assassinato de:", options: ["Getúlio Vargas", "Francisco Ferdinando", "Adolf Hitler", "Abraham Lincoln"], answer: "Francisco Ferdinando", explanation: "O herdeiro do trono Austro-Húngaro foi morto em Sarajevo.", skill: "Primeira Guerra Mundial" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A queda do Muro de Berlim em 1989 simbolizou o fim de qual período histórico?", options: ["Segunda Guerra Mundial", "Guerra Fria", "Revolução Francesa", "Idade Média"], answer: "Guerra Fria", explanation: "O muro dividia a Alemanha entre os blocos capitalista e socialista.", skill: "Guerra Fria" },
  { grade: "9º", discipline: "História", type: "multiple", text: "Qual presidente brasileiro criou a Petrobras e instituiu o salário mínimo?", options: ["Juscelino Kubitschek", "Getúlio Vargas", "Dilma Rousseff", "Fernando Henrique Cardoso"], answer: "Getúlio Vargas", explanation: "Vargas teve um governo focado no nacionalismo e direitos trabalhistas.", skill: "Era Vargas" },

  // --- PORTUGUÊS 9º ANO: SINTAXE AVANÇADA ---
  { grade: "9º", discipline: "Português", type: "multiple", text: "Na frase 'Penso, logo existo', a oração coordenada é do tipo:", options: ["Conclusiva", "Explicativa", "Adversativa", "Alternativa"], answer: "Conclusiva", explanation: "O 'logo' estabelece uma conclusão logicamente necessária.", skill: "Conjunções" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "O autor de 'Vidas Secas', obra prima do Regionalismo Modernista de 1930, é:", options: ["Jorge Amado", "Graciliano Ramos", "Érico Veríssimo", "Clarice Lispector"], answer: "Graciliano Ramos", explanation: "O livro retrata a luta contra a seca no Nordeste.", skill: "Literatura Brasileira" }
];

// IDs automáticos
const questionsWithIds = batch.map((q, index) => ({
    id: startId + index,
    ...q
}));

const newQuestionsStr = questionsWithIds.map(q => {
    return `  {\n    id: ${q.id},\n    grade: "${q.grade}",\n    discipline: "${q.discipline}",\n    type: "${q.type}",\n    text: "${q.text}",\n    options: ${JSON.stringify(q.options)},\n    answer: "${q.answer}",\n    explanation: "${q.explanation}",\n    skill: "${q.skill}"\n  }`;
}).join(',\n');

const content = fs.readFileSync(filePath, 'utf-8');
const updatedContent = content.replace(/\s*\];\s*$/, ',\n\n' + newQuestionsStr + '\n];\n');

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log(`Sucesso! ${batch.length} questões de nível avançado (9º ano) adicionadas.`);
