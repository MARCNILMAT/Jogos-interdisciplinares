import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3021;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 46 (Inglês, Religioso e Arte) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'obrigado' in English?", options: ["Please", "Hello", "Thank you", "Sorry"], answer: "Thank you", explanation: "Expressão padrão de gratidão.", skill: "Greetings" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The plural of 'Book' is:", options: ["Bookes", "Books", "Bookies", "Bookies"], answer: "Books", explanation: "Adiciona-se apenas S na maioria dos casos.", skill: "Plurals" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "What is the past of 'Do'?", options: ["Did", "Does", "Doing", "Done"], answer: "Did", explanation: "Did é o passado irregular de do.", skill: "Simple Past" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am 14 years old.'", options: ["How many", "How old", "How much", "What age"], answer: "How old", explanation: "Usado para perguntar idade.", skill: "Questions" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Bíblia", "Torá", "Alcorão", "Vedas"], answer: "Alcorão", explanation: "O livro central da fé islâmica.", skill: "Livros Sagrados" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito mútuo entre pessoas de diferentes crenças é chamado de:", options: ["Tolerância", "Intolerância", "Discriminação", "Individualismo"], answer: "Tolerância", explanation: "Pilar da convivência em sociedade.", skill: "Diversidade" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "O direito de livre exercício dos cultos religiosos é garantido no Brasil pela:", options: ["Prefeitura", "Constituição Federal", "Igreja", "Televisão"], answer: "Constituição Federal", explanation: "Garantia de liberdade religiosa para todos.", skill: "Direitos" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores primárias são:", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Branco, Preto, Cinza", "Rosa, Marrom, Azul"], answer: "Vermelho, Azul, Amarelo", explanation: "Cores que não podem ser obtidas pela mistura de outras.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O cinema é considerado qual arte na sequência clássica?", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Termo cunhado em 1912 por Ricciotto Canudo.", skill: "Cinema" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de animação que utiliza bonecos de massa e fotos quadro a quadro é:", options: ["Stop Motion", "Live Action", "CGI", "Pixel Art"], answer: "Stop Motion", explanation: "Técnica muito usada em filmes como 'Wallace & Gromit'.", skill: "Técnicas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte que utiliza o próprio corpo do artista como obra é a:", options: ["Pintura", "Escultura", "Performance", "Gravura"], answer: "Performance", explanation: "O artista interage diretamente com o público/espaço.", skill: "Arte Contemporânea" }
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
console.log(`Sucesso! Lote 46 de ${batch.length} questões multidisciplinares adicionado.`);
