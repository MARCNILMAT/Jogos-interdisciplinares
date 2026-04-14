import { QUESTIONS_DB } from './questions.js';
import fs from 'fs';

const mathSkills = {};

QUESTIONS_DB.filter(q => q.discipline === 'Matemática').forEach(q => {
    const key = `${q.grade} | ${q.skill}`;
    if (!mathSkills[key]) mathSkills[key] = 0;
    mathSkills[key]++;
});

const sorted = Object.entries(mathSkills).sort((a, b) => a[0].localeCompare(b[0]));

let report = "--- TODAS AS SKILLS DE MATEMÁTICA ---\n";
sorted.forEach(([skill, count]) => {
    report += `${skill}: ${count}\n`;
});

fs.writeFileSync('math_report.txt', report, 'utf8');
console.log("Relatório salvo em math_report.txt");
