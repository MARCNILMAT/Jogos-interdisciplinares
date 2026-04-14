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
console.log(`Lote Massive Religioso e Ingles a partir do ID: ${startId}`);

const batch = [
  // --- ENSINO RELIGIOSO 6º ANO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo universal da Paz em diversas culturas e religiões?", options: ["Uma espada", "Uma pomba branca", "Um raio", "Uma caveira"], answer: "Uma pomba branca", explanation: "A pomba com um ramo de oliveira é o símbolo clássico da paz.", skill: "Símbolos" },
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito aos locais considerados sagrados por diferentes religiões é uma forma de:", options: ["Intolerância", "Tolerância e Respeito", "Indiferença", "Preconceito"], answer: "Tolerância e Respeito", explanation: "Respeitar o sagrado do outro é base para a convivência pacífica.", skill: "Espaços Sagrados" },

  // --- ENSINO RELIGIOSO 7º ANO ---
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A prática de silenciar a mente e focar na respiração para encontrar paz interior é a:", options: ["Agitação", "Meditação (Prática Contemplativa)", "Discussão", "Competição"], answer: "Meditação (Prática Contemplativa)", explanation: "Muitas tradições usam a meditação para autoconhecimento.", skill: "Práticas Contemplativas" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O conjunto de valores que nos faz agir com bondade e justiça é chamado de:", options: ["Ganância", "Valores Humanos", "Vaidade", "Individualismo"], answer: "Valores Humanos", explanation: "Ética, respeito e solidariedade são valores essenciais.", skill: "Valores Humanos" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "Aceitar que as pessoas pensem diferente de nós sobre religião chama-se:", options: ["Ódio", "Liberdade de Crença", "Obrigação", "Punição"], answer: "Liberdade de Crença", explanation: "É um direito humano fundamental garantido por lei.", skill: "Tolerância" },

  // --- INGLÊS 8º ANO ---
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "To express a future plan that you have already decided, we use:", options: ["Simple Past", "Going to", "Used to", "Was/Were"], answer: "Going to", explanation: "Ex: I am going to travel tomorrow.", skill: "Grammar: Future" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "If I ___ money, I would buy a car.", options: ["have", "has", "had", "having"], answer: "had", explanation: "Second Conditional uses Simple Past in the 'if' clause.", skill: "Grammar: Conditionals" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Which word is an adverb of frequency?", options: ["Always", "Blue", "House", "Strong"], answer: "Always", explanation: "Indicates how often something happens.", skill: "Grammar: Adverbs" },

  // --- INGLÊS 9º ANO ---
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "She is the girl ___ lost her keys.", options: ["which", "who", "whose", "whom"], answer: "who", explanation: "Relative pronoun 'who' is used for people.", skill: "Grammar: Relative Pronouns" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "The movie was ___ than the book.", options: ["good", "better", "best", "gooder"], answer: "better", explanation: "Comparative of 'good' is 'better'.", skill: "Grammar: Comparatives" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "I have ___ in this city for 10 years.", options: ["live", "lives", "living", "lived"], answer: "lived", explanation: "Present Perfect: Have + Past Participle.", skill: "Grammar: Present Perfect" }
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
console.log(`Sucesso! ${batch.length} questões de Religioso e Inglês adicionadas.`);
