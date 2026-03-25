import fs from 'fs';
import { QUESTIONS_DB } from './questions.js';

const jsonPath = 'C:\\Users\\SEEMG\\Downloads\\deepseek_json_20260325_9d95ee.json';
const questionsPath = './questions.js';

try {
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const seriesData = jsonData.series;

    if (!seriesData) {
        throw new Error('Chave "series" não encontrada no JSON.');
    }

    const lastId = QUESTIONS_DB[QUESTIONS_DB.length - 1].id;
    console.log(`Último ID no banco: ${lastId}`);

    let currentId = lastId + 1;
    const formattedQuestions = [];

    const gradeMap = {
        "6o_ano": "6º",
        "7o_ano": "7º",
        "8o_ano": "8º",
        "9o_ano": "9º"
    };

    for (const [key, data] of Object.entries(seriesData)) {
        const grade = gradeMap[key];
        if (!grade) continue;

        const questions = data.questoes;
        if (!questions) {
            console.log(`Aviso: Nenhuma questão para ${key}`);
            continue;
        }

        console.log(`Processando ${questions.length} questões para ${grade} Ano...`);

        questions.forEach(q => {
            // Converter alternativas para array
            const options = Object.values(q.alternativas).map(opt => opt.trim());
            
            // Capturar gabarito (texto da alternativa correta)
            const answer = q.alternativas[q.correta] ? q.alternativas[q.correta].trim() : "Opção inválida";

            formattedQuestions.push({
                id: currentId++,
                grade: grade,
                discipline: "Arte",
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
    content = content.replace(/\s*\];\s*$/, ',\n\n  // --- ARTE LOTE 1 ---\n' + questionsStr + '\n];\n');
    
    fs.writeFileSync(questionsPath, content, 'utf-8');

    console.log(`\nSucesso! Adicionadas ${formattedQuestions.length} questões de Arte.`);
    console.log(`Novo último ID: ${currentId - 1}`);

} catch (err) {
    fs.writeFileSync('error_arte.log', err.stack || err.message);
    console.error(`Erro ao processar as questões. Veja error_arte.log.`);
    process.exit(1);
}
