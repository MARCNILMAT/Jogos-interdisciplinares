import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2457;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive Arte e Inglês a partir do ID: ${startId}`);

const batch = [
  // --- ARTE 6º ANO ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores laranja, verde e roxo são classificadas como:", options: ["Primárias", "Secundárias", "Terciárias", "Neutras"], answer: "Secundárias", explanation: "São obtidas pela mistura de duas cores primárias.", skill: "Teoria das Cores" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica de representar a profundidade em uma superfície plana é chamada de:", options: ["Bidimensional", "Perspectiva", "Textura", "Collage"], answer: "Perspectiva", explanation: "Dá a ilusão de 3D no desenho.", skill: "Elementos Visuais" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Pinturas feitas por seres humanos pré-históricos em paredes de cavernas são chamadas de:", options: ["Afrescos", "Grafites", "Pinturas Rupestres", "Mosaicos"], answer: "Pinturas Rupestres", explanation: "Rupestre vem do latim e significa 'rocha'.", skill: "História da Arte" },
  
  // --- ARTE 7º ANO ---
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O período artístico que buscou o renascimento dos valores da Grécia e Roma Antigas foi o:", options: ["Barroco", "Gótico", "Renascimento", "Modernismo"], answer: "Renascimento", explanation: "Ocorreu principalmente entre os séculos XIV e XVI.", skill: "Renascimento" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Quem pintou a famosa obra 'Monalisa'?", options: ["Michelangelo", "Leonardo da Vinci", "Donatello", "Raphael"], answer: "Leonardo da Vinci", explanation: "Ícone do Renascimento italiano.", skill: "História da Arte" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Qual destes é um elemento fundamental da música?", options: ["Cor", "Ritmo", "Volume físico", "Sabor"], answer: "Ritmo", explanation: "O ritmo organiza os sons no tempo.", skill: "Música" },

  // --- ARTE 8º ANO ---
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A arte feita em espaços públicos, como muros e fachadas, é conhecida como:", options: ["Arte Acadêmica", "Street Art (Arte Urbana)", "Arte de Museu", "Minimalismo"], answer: "Street Art (Arte Urbana)", explanation: "Exemplos: Grafite, stencil, lambe-lambe.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O estilo artístico caracterizado por formas fragmentadas e geométricas, como o de Picasso, é o:", options: ["Realismo", "Surrealismo", "Cubismo", "Impressionismo"], answer: "Cubismo", explanation: "Rompeu com a perspectiva tradicional.", skill: "Vanguardas" },

  // --- INGLÊS 6º ANO ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'cachorro' in English?", options: ["Cat", "Dog", "Bird", "Fish"], answer: "Dog", explanation: "Animal de estimação comum.", skill: "Vocabulary: Animals" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "What color is a 'red' apple?", options: ["Verde", "Azul", "Vermelha", "Amarela"], answer: "Vermelha", explanation: "Red = Vermelho.", skill: "Vocabulary: Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which word is a greeting used in the morning?", options: ["Good afternoon", "Good night", "Good morning", "Goodbye"], answer: "Good morning", explanation: "Usado para desejar bom dia.", skill: "Greetings" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "I ___ a student.", options: ["is", "am", "are", "be"], answer: "am", explanation: "Verb to be: I am.", skill: "Grammar: To Be" },

  // --- INGLÊS 7º ANO ---
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The plural of 'child' is:", options: ["Childs", "Children", "Childes", "Childrens"], answer: "Children", explanation: "É um plural irregular.", skill: "Grammar: Plurals" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "We ___ happy today.", options: ["am", "is", "are", "was"], answer: "are", explanation: "Verb to be: We are.", skill: "Grammar: To Be" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "How do you say 'maçã' in English?", options: ["Grape", "Orange", "Apple", "Banana"], answer: "Apple", explanation: "Fruta comum.", skill: "Vocabulary: Food" },

  // --- INGLÊS 8º ANO ---
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to the park.", options: ["go", "goes", "gone", "went"], answer: "went", explanation: "Simple Past of 'go' is 'went'.", skill: "Grammar: Past Simple" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Which modal verb expresses ability?", options: ["Must", "Should", "Can", "Will"], answer: "Can", explanation: "'Can' is used for ability (ex: I can swim).", skill: "Modal Verbs" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The opposite of 'tall' is:", options: ["Small", "Short", "Thin", "Fat"], answer: "Short", explanation: "Tall (alto) x Short (baixo).", skill: "Vocabulary: Adjectives" }
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
console.log(`Sucesso! ${batch.length} questões de Arte e Inglês adicionadas.`);
