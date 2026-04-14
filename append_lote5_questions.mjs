import fs from 'fs';
import { QUESTIONS_DB } from './questions.js';

const jsonPath = 'C:\\Users\\SEEMG\\Downloads\\deepseek_json_20260324_3b1ece.json';
const questionsPath = './questions.js';

const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const firstKey = Object.keys(jsonData)[0]; 
const questionsArray = jsonData[firstKey];

const lastId = QUESTIONS_DB[QUESTIONS_DB.length - 1].id;
console.log(`Último ID no banco: ${lastId}`);

let currentId = lastId + 1;
const formattedQuestions = [];

questionsArray.forEach(q => {
  const options = Object.values(q.alternativas).map(opt => opt.trim());
  const answer = q.alternativas[q.correta].trim();

  formattedQuestions.push({
    id: currentId++,
    grade: "6º",
    discipline: "História",
    type: "multiple",
    text: q.enunciado.trim(),
    options: options,
    answer: answer,
    explanation: "", 
    skill: q.topico.trim()
  });
});

const questionsStr = formattedQuestions.map(q => {
  return `  {
    id: ${q.id},
    grade: "${q.grade}",
    discipline: "${q.discipline}",
    type: "multiple",
    text: ${JSON.stringify(q.text)},
    options: ${JSON.stringify(q.options)},
    answer: ${JSON.stringify(q.answer)},
    explanation: "",
    skill: "${q.skill}"
  }`;
}).join(',\n');

let content = fs.readFileSync(questionsPath, 'utf-8');
content = content.replace(/\s*\];\s*$/, ',\n\n  // --- HISTÓRIA LOTE 5 (NOVAS QUESTÕES) ---\n' + questionsStr + '\n];\n');
fs.writeFileSync(questionsPath, content, 'utf-8');

console.log(`Sucesso! Adicionadas ${formattedQuestions.length} questões.`);
console.log(`Novo último ID esperado: ${currentId - 1}`);
