import { QUESTIONS_DB } from './questions.js';
import fs from 'fs';

const stats = {};

QUESTIONS_DB.filter(q => q.discipline === 'Matemática').forEach(q => {
  const key = `${q.grade} | ${q.skill}`;
  if (!stats[key]) stats[key] = 0;
  stats[key]++;
});

const mathGaps = [];
for (const key in stats) {
    if (stats[key] < 20) {
        mathGaps.push({ key, count: stats[key] });
    }
}

mathGaps.sort((a, b) => a.count - b.count);

let report = "--- MATH GAPS (TOPICS < 20) ---\n";
mathGaps.forEach(g => {
    report += `${g.key}: ${g.count} questões (Faltam ${20 - g.count})\n`;
});

console.log(report);
fs.writeFileSync('math_gaps.txt', report, 'utf8');
