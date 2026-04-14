import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2888;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 38 (Multidisciplinar - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual a camada da Terra que é líquida e composta por ferro e níquel derretidos?", options: ["Núcleo Externo", "Núcleo Interno", "Manto", "Crosta"], answer: "Núcleo Externo", explanation: "O núcleo externo é líquido, o interno é sólido.", skill: "Estrutura da Terra" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas que possuem vasos condutores mas não possuem sementes são as:", options: ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], answer: "Pteridófitas", explanation: "Exemplo: Samambaias.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual destes é um componente do sistema urinário?", options: ["Fígado", "Pâncreas", "Rins", "Baço"], answer: "Rins", explanation: "Os rins filtram o sangue para produzir urina.", skill: "Sistema Urinário" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A aceleração da gravidade na Terra é de aproximadamente:", options: ["5 m/s²", "9,8 m/s²", "15 m/s²", "20 m/s²"], answer: "9,8 m/s²", explanation: "Usado em cálculos de queda livre.", skill: "Física" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores laranja, verde e roxo são:", options: ["Primárias", "Secundárias", "Terciárias", "Neutras"], answer: "Secundárias", explanation: "Obtidas pela mistura de primárias.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O cinema é conhecido como qual arte?", options: ["Primeira", "Sétima", "Nona", "Décima"], answer: "Sétima", explanation: "O termo 'Sétima Arte' foi cunhado em 1911.", skill: "Cinema" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual destes artistas é um representante do Cubismo?", options: ["Dalí", "Picasso", "Van Gogh", "Monet"], answer: "Picasso", explanation: "Picasso revolucionou a arte com formas geométricas.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A técnica de animação que move objetos quadro a quadro é o:", options: ["Stop Motion", "Live Action", "CGI", "Pixel Art"], answer: "Stop Motion", explanation: "Pode ser feito com bonecos ou objetos reais.", skill: "Linguagem Audiovisual" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'cachorro' in English?", options: ["Cat", "Dog", "Bird", "Fish"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Animals" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The pronoun for a boy is:", options: ["She", "He", "It", "They"], answer: "He", explanation: "He = Ele.", skill: "Pronouns" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to the beach.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Past of to go.", skill: "Past Tense" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am fine, thanks.'", options: ["What", "Where", "How", "Why"], answer: "How", explanation: "How are you? question.", skill: "Questions" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, o jogador que pode usar as mãos na área é o:", options: ["Ala", "Pivô", "Goleiro", "Fixo"], answer: "Goleiro", explanation: "Regra básica de goleiro.", skill: "Esportes Coletivos" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Quantas pessoas compõem uma equipe de Vôlei em quadra?", options: ["5", "6", "11", "7"], answer: "6", explanation: "Titulares por time.", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O Basquetebol é jogado com:", options: ["As mãos", "Os pés", "Uma raquete", "Tacos"], answer: "As mãos", explanation: "Drible e arremesso manual.", skill: "Basquete" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A prática regular de exercício previne qual destas doenças?", options: ["Gripe", "Cárie", "Obesidade", "Miopia"], answer: "Obesidade", explanation: "Ajuda no controle do peso e metabolismo.", skill: "Saúde" }
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
console.log(`Sucesso! ${batch.length} questões (Lote 38) adicionadas.`);
