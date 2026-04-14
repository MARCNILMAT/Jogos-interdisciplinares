import { QUESTIONS_DB } from './questions.js';

const target = 10;
const report = {};

QUESTIONS_DB.forEach(q => {
    const discipline = q.discipline || 'Sem Disciplina';
    const grade = q.grade || 'Sem Série';
    const skill = q.skill ? q.skill.replace(/\s*\([^)]*\)/g, '').trim() : 'Sem Tópico';
    
    const key = `${discipline} | ${grade} | ${skill}`;
    
    if (!report[key]) {
        report[key] = {
            discipline,
            grade,
            skill,
            count: 0
        };
    }
    report[key].count++;
});

console.log("=== RELATÓRIO DE LACUNAS (Meta: 10 questões por tópico) ===");
console.log("---------------------------------------------------------");

let totalMissing = 0;
let topicsWithGap = 0;

Object.values(report).sort((a, b) => a.discipline.localeCompare(b.discipline) || a.grade.localeCompare(b.grade)).forEach(item => {
    if (item.count < target) {
        const missing = target - item.count;
        console.log(`[!] ${item.discipline} (${item.grade}) - ${item.skill}: ${item.count}/10 (Faltam ${missing})`);
        totalMissing += missing;
        topicsWithGap++;
    }
});

console.log("---------------------------------------------------------");
console.log(`Resumo: ${topicsWithGap} tópicos precisam de reforço.`);
console.log(`Total de questões necessárias: ${totalMissing}`);
