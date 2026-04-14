import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3118;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 54 (Artes e Educação Física) a partir do ID: ${startId}`);

const batch = [
  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é considerada uma cor fria?", options: ["Vermelho", "Laranja", "Azul", "Amarelo"], answer: "Azul", explanation: "Cores frias transmitem calma e frescor (azul, verde, roxo).", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A técnica de pintura que utiliza pigmentos misturados a água sobre argamassa fresca é o:", options: ["Afresco", "Mosaico", "Grafite", "Colagem"], answer: "Afresco", explanation: "Muito comum em igrejas e palácios renascentistas.", skill: "Técnicas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O estilo artístico que buscava retratar o inconsciente e os sonhos é o:", options: ["Realismo", "Surrealismo", "Cubismo", "Impressionismo"], answer: "Surrealismo", explanation: "Exemplo: Salvador Dalí.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é classificado como qual destas artes?", options: ["1ª Arte", "3ª Arte", "7ª Arte", "9ª Arte"], answer: "7ª Arte", explanation: "Termo criado no início do século XX.", skill: "Cinema" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Quantos jogadores possui uma equipe de Futsal em quadra em uma partida oficial?", options: ["4", "5", "11", "7"], answer: "5", explanation: "O futsal é disputado por dois times de 5 jogadores cada.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O 'Saque' é o fundamento que inicia a disputa de pontos em qual destes esportes?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "O vôlei começa com um saque atrás da linha de fundo.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A prática regular de alongamentos antes e depois do exercício ajuda a melhorar a:", options: ["Velocidade", "Flexibilidade", "Força Bruta", "Miopia"], answer: "Flexibilidade", explanation: "O alongamento prepara o músculo e melhora a amplitude de movimento.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "O Basquetebol é um esporte de invasão cujo objetivo principal é:", options: ["Marcar gols", "Chutar a bola mais longe", "Arremessar a bola na cesta", "Derrubar o adversário"], answer: "Arremessar a bola na cesta", explanation: "O objetivo é pontuar através das cestas.", skill: "Basquete" },

  // --- EXTRA RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo da paz em diversas culturas?", options: ["Uma caveira", "Uma pomba branca", "Um trovão", "Uma espada"], answer: "Uma pomba branca", explanation: "Símbolo universal de harmonia e paz.", skill: "Valores" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A 'Regra de Ouro', presente em muitas tradições, ensina que devemos:", options: ["Tratar os outros como gostaríamos de ser tratados", "Sermos melhores que todos", "Ignorar as necessidades alheias", "Focar apenas em nós mesmos"], answer: "Tratar os outros como gostaríamos de ser tratados", explanation: "Princípio de ética e empatia universal.", skill: "Ética" }
];

// IDs automáticos
const questionsWithIds = batch.map((q, index) => ({
    id: startId + index,
    ...q
}));

const newQuestionsStr = questionsWithIds.map(q => {
    return `  {\n    id: ${q.id},\n    grade: "${q.grade}",\n    discipline: "${q.discipline}",\n    type: "${q.type}",\n    text: "${q.text}",\n    options: ${JSON.stringify(q.options)},\n    answer: "${q.answer}",\n    explanation: "${q.explanation}",\n    skill: "${q.skill}"\n  }`;
}).join(',\n');

const content = fs.readFileSync(filePath, 'utf-8');
const updatedContent = content.replace(/\s*\];\s*$/, ',\n\n' + newQuestionsStr + '\n];\n');

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log(`Sucesso! Lote 54 de ${batch.length} questões multidisciplinares adicionado.`);
