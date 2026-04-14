import { QUESTIONS_DB } from './questions.js';
import fs from 'fs';

const stats = {};

QUESTIONS_DB.forEach(q => {
  const key = `${q.grade} | ${q.discipline} | ${q.skill}`;
  if (!stats[key]) stats[key] = 0;
  stats[key]++;
});

const gaps = [];
for (const key in stats) {
    if (stats[key] < 10) {
        gaps.push({ key, count: stats[key] });
    }
}

gaps.sort((a, b) => a.count - b.count);

let report = "--- TOP GAPS (EXISTING TOPICS < 10) ---\n";
gaps.slice(0, 50).forEach(g => {
    report += `${g.key}: ${g.count} questões\n`;
});

fs.writeFileSync('gaps_utf8.txt', report, 'utf8');
console.log("Relatório salvo em gaps_utf8.txt");
