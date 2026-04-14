import fs from 'fs';
import { QUESTIONS_DB } from './questions.js';

const jsonPath = 'C:\\Users\\SEEMG\\Downloads\\deepseek_json_20260323_c8238b.json';
const questionsPath = './questions.js';

const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const incomingQuestions = jsonData.questoes;

const lastId = QUESTIONS_DB[QUESTIONS_DB.length - 1].id;
console.log(`Último ID no banco: ${lastId}`);

let currentId = lastId + 1;

const formattedQuestions = incomingQuestions.map(q => {
  const gabaritoLetter = q.gabarito.trim().toUpperCase();
  const optionWithValue = q.alternativas.find(alt => alt.trim().startsWith(gabaritoLetter + ')'));
  
  let answer = "";
  if (optionWithValue) {
	answer = optionWithValue.replace(/^[A-D]\)\s*/, '').trim();
  } else {
	answer = q.alternativas[0].replace(/^[A-D]\)\s*/, '').trim();
  }

  const options = q.alternativas.map(alt => alt.replace(/^[A-D]\)\s*/, '').trim());

  return {
    id: currentId++,
    grade: `${q.ano}º`,
    discipline: "Geografia",
    type: "multiple",
    text: q.enunciado.trim(),
    options: options,
    answer: answer,
    explanation: q.descricao.trim(),
    skill: `${q.eixo} (${q.habilidade})`
  };
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
    explanation: ${JSON.stringify(q.explanation)},
    skill: "${q.skill}"
  }`;
}).join(',\n');

let content = fs.readFileSync(questionsPath, 'utf-8');
content = content.replace(/\s*\];\s*$/, ',\n\n  // --- GEOGRAFIA (NOVAS QUESTÕES) ---\n' + questionsStr + '\n];\n');
fs.writeFileSync(questionsPath, content, 'utf-8');

console.log(`Sucesso! Adicionadas ${formattedQuestions.length} questões.`);
console.log(`Novo último ID esperado: ${currentId - 1}`);
