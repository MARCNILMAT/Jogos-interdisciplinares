import { QUESTIONS_DB } from './questions.js';

const stats = {};
QUESTIONS_DB.filter(q => q.discipline === 'Inglês').forEach(q => {
  if (!stats[q.skill]) stats[q.skill] = 0;
  stats[q.skill]++;
});

console.log("--- CONTAGEM INGLÊS ---");
for (const skill in stats) {
    if (stats[skill] < 10) {
        console.log(`${skill}: ${stats[skill]}`);
    }
}
