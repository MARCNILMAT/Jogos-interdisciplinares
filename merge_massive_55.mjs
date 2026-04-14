import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3128;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 55 (Inglês e Português) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'maçã' in English?", options: ["Grape", "Apple", "Orange", "Banana"], answer: "Apple", explanation: "Apple é a tradução de maçã.", skill: "Vocabulary" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Big' is:", options: ["Large", "Small", "Tall", "Hevay"], answer: "Small", explanation: "Big (grande) x Small (pequeno).", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "I ___ to the beach last summer.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Went é o passado simples do verbo to go.", skill: "Past Tense" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct pronoun: '___ is my sister.'", options: ["He", "It", "She", "They"], answer: "She", explanation: "She é usado para o gênero feminino.", skill: "Pronouns" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which color do you get if you mix Blue and Yellow?", options: ["Purple", "Green", "Orange", "Red"], answer: "Green", explanation: "Blue + Yellow = Green.", skill: "Colors" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "What is the capital of the United Kingdom?", options: ["New York", "London", "Paris", "Berlin"], answer: "London", explanation: "Londres é a capital do Reino Unido.", skill: "Culture" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um Substantivo Coletivo de 'Peixes'?", options: ["Manada", "Cardume", "Alcateia", "Enxame"], answer: "Cardume", explanation: "Cardume é o conjunto de peixes.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eu e ele fomos ao cinema', o sujeito é:", options: ["Simples", "Composto", "Oculto", "Inexistente"], answer: "Composto", explanation: "Possui dois núcleos: Eu e ele.", skill: "Sintaxe" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Virtude'?", options: ["Bondade", "Vício", "Qualidade", "Habilidade"], answer: "Vício", explanation: "Vício é o oposto moral de virtude.", skill: "Semântica" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Grande Sertão: Veredas'?", options: ["Machado de Assis", "Guimarães Rosa", "José de Alencar", "Monteiro Lobato"], answer: "Guimarães Rosa", explanation: "Obra prima do modernismo brasileiro.", skill: "Literatura" }
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
console.log(`Sucesso! Lote 55 de ${batch.length} questões multidisciplinares adicionado.`);
