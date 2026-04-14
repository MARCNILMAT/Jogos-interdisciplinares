import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3055;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 49 (Artes e Inglês - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- ARTE (6º ao 9º) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores primárias são:", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Branco, Preto, Cinza", "Rosa, Marrom, Azul"], answer: "Vermelho, Azul, Amarelo", explanation: "Cores que não podem ser obtidas pela mistura de outras.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O cinema é considerado qual arte na sequência clássica?", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Termo cunhado em 1912 por Ricciotto Canudo.", skill: "Cinema" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de animação que utiliza bonecos de massa e fotos quadro a quadro é:", options: ["Stop Motion", "Live Action", "CGI", "Pixel Art"], answer: "Stop Motion", explanation: "Técnica muito usada em filmes como 'Wallace & Gromit'.", skill: "Técnicas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte que utiliza o próprio corpo do artista como obra é a:", options: ["Pintura", "Escultura", "Performance", "Gravura"], answer: "Performance", explanation: "O artista interage diretamente com o público/espaço.", skill: "Arte Contemporânea" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'obrigado' in English?", options: ["Please", "Hello", "Thank you", "Sorry"], answer: "Thank you", explanation: "Expressão padrão de gratidão.", skill: "Greetings" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The plural of 'Book' is:", options: ["Bookes", "Books", "Bookies", "Bookies"], answer: "Books", explanation: "Adiciona-se apenas S na maioria dos casos.", skill: "Plurals" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "What is the past of 'Do'?", options: ["Did", "Does", "Doing", "Done"], answer: "Did", explanation: "Did é o passado irregular de do.", skill: "Simple Past" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am 14 years old.'", options: ["How many", "How old", "How much", "What age"], answer: "How old", explanation: "Usado para perguntar idade.", skill: "Questions" },

  // --- EXTRA MULTI ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Feliz'?", options: ["Alegre", "Contente", "Triste", "Satisfeito"], answer: "Triste", explanation: "Antônimos são palavras com sentidos opostos.", skill: "Vocabulário" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "No Basquetebol, uma cesta de lance livre vale:", options: ["1 ponto", "2 pontos", "3 pontos", "5 pontos"], answer: "1 ponto", explanation: "Ponto extra após faltas.", skill: "Basquete" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 25% de 200?", options: ["25", "50", "100", "150"], answer: "50", explanation: "25% é a quarta parte (200 / 4 = 50).", skill: "Porcentagem" }
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
console.log(`Sucesso! Lote 49 de ${batch.length} questões multidisciplinares adicionado.`);
