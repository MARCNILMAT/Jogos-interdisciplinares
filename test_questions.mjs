// test_questions.mjs
import { QUESTIONS_DB } from './questions.js';

console.log("Sucesso! Banco de questões carregado.");
console.log("Total de questões:", QUESTIONS_DB.length);

const ids = QUESTIONS_DB.map(q => q.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length > 0) {
    console.error("ERRO: IDs duplicados encontrados:", duplicates);
} else {
    console.log("Todos os IDs são únicos.");
}

const requiredFields = ['id', 'grade', 'discipline', 'type', 'text', 'options', 'answer', 'explanation', 'skill'];
QUESTIONS_DB.forEach((q, i) => {
    requiredFields.forEach(f => {
        if (!q[f]) console.error(`Questão ${i} (ID: ${q.id}) falta campo: ${f}`);
    });
});
