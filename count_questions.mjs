// count_questions.mjs
import { QUESTIONS_DB } from './questions.js';
import fs from 'fs';

const counts = {};
QUESTIONS_DB.forEach(q => {
    if (!counts[q.discipline]) counts[q.discipline] = 0;
    counts[q.discipline]++;
});

let output = "\n--- CONTAGEM DE QUESTÕES POR DISCIPLINA ---\n";
for (const [disc, count] of Object.entries(counts)) {
    output += `${disc}: ${count} / 50\n`;
}
output += `TOTAL GERAL: ${QUESTIONS_DB.length} / 400\n`;
output += "-------------------------------------------\n";

fs.writeFileSync('counts.txt', output);
console.log("Arquivo counts.txt criado.");
