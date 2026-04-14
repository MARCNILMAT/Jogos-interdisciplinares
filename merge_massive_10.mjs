import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2553;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massivo 10 (Aceleração Total) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS 6º ANO ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'obrigado' in English?", options: ["Please", "Hello", "Thank you", "Sorry"], answer: "Thank you", explanation: "Expressão de gratidão.", skill: "Greetings" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "What number comes after 'nine'?", options: ["Eight", "Ten", "Seven", "Eleven"], answer: "Ten", explanation: "A contagem é: eight, nine, ten.", skill: "Numbers" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "My father's sister is my ___.", options: ["Aunt", "Uncle", "Cousin", "Mother"], answer: "Aunt", explanation: "A irmã do pai é a tia (aunt).", skill: "Family" },

  // --- INGLÊS 7º ANO ---
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "___ you speak English?", options: ["Does", "Do", "Is", "Am"], answer: "Do", explanation: "Auxiliar para perguntas no presente com 'you'.", skill: "Simple Present" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Which word is a fruit?", options: ["Potato", "Chicken", "Banana", "Rice"], answer: "Banana", explanation: "Banana é uma fruta comum.", skill: "Food" },

  // --- INGLÊS 8º ANO ---
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "I ___ a movie last night.", options: ["watch", "watches", "watched", "watching"], answer: "watched", explanation: "Passado simples do verbo watch.", skill: "Past Simple" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "You ___ study for the test.", options: ["should", "can't", "is", "be"], answer: "should", explanation: "Usado para dar conselhos.", skill: "Modal Verbs" },

  // --- INGLÊS 9º ANO ---
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "The man ___ lives there is a doctor.", options: ["which", "who", "whose", "it"], answer: "who", explanation: "Who é usado para pessoas em orações relativas.", skill: "Relative Pronouns" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "If it rains, we ___ at home.", options: ["stays", "would stay", "will stay", "stayed"], answer: "will stay", explanation: "First conditional: Present + Will.", skill: "Conditionals" },

  // --- ENSINO RELIGIOSO 6º ANO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Cristianismo?", options: ["Alcorão", "Torá", "Bíblia", "Vedas"], answer: "Bíblia", explanation: "A Bíblia contém os ensinamentos fundamentais cristãos.", skill: "Livros Sagrados" },
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "O lugar onde muçulmanos realizam suas orações é a:", options: ["Igreja", "Sinagoga", "Mesquita", "Templo"], answer: "Mesquita", explanation: "Mesquitas são os centros de adoração islâmicos.", skill: "Espaços Sagrados" },

  // --- ENSINO RELIGIOSO 7º ANO ---
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A 'Regra de Ouro' presente em muitas religiões diz basicamente:", options: ["Faça o que quiser", "Trate os outros como gostaria de ser tratado", "Busque apenas sua riqueza", "Ignore os inimigos"], answer: "Trate os outros como gostaria de ser tratado", explanation: "Princípio universal de ética e empatia.", skill: "Ética" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito à diversidade religiosa é garantido no Brasil pela:", options: ["Empresa", "Constituição Federal", "Televisão", "Internet"], answer: "Constituição Federal", explanation: "O Estado brasileiro é laico e garante a liberdade de culto.", skill: "Diversidade" },

  // --- CIÊNCIAS 9º ANO (QUÍMICA/FÍSICA) ---
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a unidade de medida da energia no Sistema Internacional?", options: ["Gramas", "Metros", "Joules", "Newtons"], answer: "Joules", explanation: "Homenagem ao físico James Prescott Joule.", skill: "Energia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A aceleração da gravidade na Terra é de aproximadamente:", options: ["5 m/s²", "9,8 m/s²", "15 m/s²", "30 m/s²"], answer: "9,8 m/s²", explanation: "Valor padrão usado em cálculos físicos no nível do mar.", skill: "Física" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "O símbolo químico do Ouro é:", options: ["Ag", "Au", "Fe", "Cu"], answer: "Au", explanation: "Vem do latim 'Aurum'.", skill: "Tabela Periódica" }
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
console.log(`Sucesso! ${batch.length} questões do Lote 10 adicionadas.`);
