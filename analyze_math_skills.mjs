import { QUESTIONS_DB } from './questions.js';

const mathSkills = {};

QUESTIONS_DB.filter(q => q.discipline === 'Matemática').forEach(q => {
    const key = `${q.grade} | ${q.skill}`;
    if (!mathSkills[key]) mathSkills[key] = 0;
    mathSkills[key]++;
});

const sorted = Object.entries(mathSkills).sort((a, b) => a[0].localeCompare(b[0]));

console.log("--- TODAS AS SKILLS DE MATEMÁTICA ---");
sorted.forEach(([skill, count]) => {
    console.log(`${skill}: ${count}`);
});
