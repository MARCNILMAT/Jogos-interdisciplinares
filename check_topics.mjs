import fs from 'fs';
import { QUESTIONS_DB } from './questions.js';

const map = {};
QUESTIONS_DB.forEach(q => {
  if (!map[q.discipline]) map[q.discipline] = new Set();
  map[q.discipline].add(q.skill);
});

let output = '';
for (const disc in map) {
  output += `\n=== ${disc} ===\n`;
  output += Array.from(map[disc]).join(', ') + '\n';
}

const habitos = QUESTIONS_DB.filter(q => q.discipline === 'Inglês' && q.skill === 'Hábitos Alimentares');
output += `\nAlvo: Hábitos Alimentares em Inglês (${habitos.length} questões)\n`;
if (habitos.length > 0) {
    output += `Exemplo texto: ${habitos[0].text}\n`;
}

fs.writeFileSync('topics_log.txt', output);
console.log('Tópicos salvos em topics_log.txt');
