import fs from 'fs';
import { QUESTIONS_DB } from './questions.js';

const jsonFiles = [
    'C:\\Users\\SEEMG\\Downloads\\ingles_6ano_pt1.json',
    'C:\\Users\\SEEMG\\Downloads\\ingles_6ano_pt2.json'
];

const questionsPath = './questions.js';

try {
    const lastId = QUESTIONS_DB[QUESTIONS_DB.length - 1].id;
    console.log(`Último ID no banco: ${lastId}`);

    let currentId = lastId + 1;
    let formattedQuestions = [];

    for (const file of jsonFiles) {
        const jsonData = JSON.parse(fs.readFileSync(file, 'utf-8'));
        const gradeData = jsonData.series["6o_ano"];
        const questions = gradeData.questoes;

        console.log(`Lendo ${questions.length} questões de ${file}`);

        questions.forEach(q => {
            const options = Object.values(q.alternativas).map(opt => opt.trim());
            const answer = q.alternativas[q.correta] ? q.alternativas[q.correta].trim() : "Opção inválida";

            formattedQuestions.push({
                id: currentId++,
                grade: "6º",
                discipline: "Inglês",
                type: "multiple",
                text: q.enunciado.trim(),
                options: options,
                answer: answer,
                explanation: "",
                skill: q.topico ? q.topico.trim() : "Geral"
            });
        });
    }

    if (formattedQuestions.length === 0) {
        console.log("Nenhuma questão formatada. Abortando.");
        process.exit(1);
    }

    const questionsStr = formattedQuestions.map(q => {
        return `  {
    id: ${q.id},
    grade: "${q.grade}",
    discipline: "${q.discipline}",
    type: "multiple",
    text: ${JSON.stringify(q.text)},
    options: ${JSON.stringify(q.options)},
    answer: ${JSON.stringify(q.answer)},
    explanation: "",
    skill: ${JSON.stringify(q.skill)}
  }`;
    }).join(',\n');

    let content = fs.readFileSync(questionsPath, 'utf-8');
    
    // Inserir antes do ]; final
    content = content.replace(/\s*\];\s*$/, ',\n\n  // --- INGLÊS LOTE 1 (6º ANO) ---\n' + questionsStr + '\n];\n');
    
    fs.writeFileSync(questionsPath, content, 'utf-8');

    console.log(`\nSucesso! Adicionadas ${formattedQuestions.length} questões de Inglês.`);
    console.log(`Novo último ID: ${currentId - 1}`);

} catch (err) {
    fs.writeFileSync('error_ingles.log', err.stack || err.message);
    console.error(`Erro ao processar as questões. Veja error_ingles.log.`);
    process.exit(1);
}
