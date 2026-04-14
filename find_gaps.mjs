import { QUESTIONS_DB } from './questions.js';
import fs from 'fs';

const stats = {};

QUESTIONS_DB.forEach(q => {
  const key = `${q.grade} | ${q.discipline} | ${q.skill}`;
  if (!stats[key]) stats[key] = 0;
  stats[key]++;
});

const gaps = [];
// Assuming we have a list of all expected topics or just evaluating existing ones
// Let's just evaluate existing ones first to see if they reach 10
for (const key in stats) {
    if (stats[key] < 10) {
        gaps.push({ key, count: stats[key] });
    }
}

gaps.sort((a, b) => a.count - b.count);

console.log("--- TOP GAPS (EXISTING TOPICS < 10) ---");
gaps.slice(0, 20).forEach(g => {
    console.log(`${g.key}: ${g.count} questões`);
});
