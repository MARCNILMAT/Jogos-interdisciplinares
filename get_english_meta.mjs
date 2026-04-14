import { QUESTIONS_DB } from './questions.js';

const targetSkills = ['Grammar: Comparatives', 'Present Perfect', 'Vocabulary: Colors'];
const info = QUESTIONS_DB.filter(q => targetSkills.includes(q.skill)).map(q => ({
    grade: q.grade,
    skill: q.skill,
    discipline: q.discipline
}));

console.log(JSON.stringify(info.slice(0, 10), null, 2));
