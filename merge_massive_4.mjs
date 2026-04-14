import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2475;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Super Lote a partir do ID: ${startId}`);

const batch = [
  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Handebol, o jogador pode dar quantos passos com a bola na mão sem quicar?", options: ["1 passo", "2 passos", "3 passos", "5 passos"], answer: "3 passos", explanation: "Após o 3º passo, deve-se passar, arremessar ou quicar a bola.", skill: "Handebol" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Qual destes é um fundamento básico do Basquetebol?", options: ["Manchete", "Drible", "Saída de bloco", "Chute de trivela"], answer: "Drible", explanation: "Driblar é o ato de quicar a bola para se deslocar.", skill: "Basquetebol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O IMC (Índice de Massa Corporal) é usado para avaliar:", options: ["A força muscular", "O equilíbrio", "A relação entre peso e altura (estado nutricional)", "A velocidade"], answer: "A relação entre peso e altura (estado nutricional)", explanation: "Calculado como Peso / (Altura x Altura).", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A prática de exercícios físicos regulares ajuda a prevenir qual destas doenças?", options: ["Gripe comum", "Hipertensão arterial", "Miopia", "Fraturas ósseas por queda"], answer: "Hipertensão arterial", explanation: "Exercícios fortalecem o coração e melhoram a circulação.", skill: "Qualidade de Vida" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "O que significa 'Alteridade' no contexto das relações humanas?", options: ["Pensar apenas em si mesmo", "Reconhecer e respeitar o outro como diferente", "Tentar ser igual a todo mundo", "Ignorar as diferenças"], answer: "Reconhecer e respeitar o outro como diferente", explanation: "Capacidade de colocar-se no lugar do outro.", skill: "Valores" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "Líderes religiosos que buscam a paz entre diferentes crenças praticam o:", options: ["Conflito ideológico", "Diálogo Inter-religioso", "Isolamento social", "Dogmatismo"], answer: "Diálogo Inter-religioso", explanation: "Busca o entendimento mútuo e a convivência pacífica.", skill: "Diversidade" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um valor ético fundamental para a vida em sociedade?", options: ["Ganância", "Empatia", "Individualismo", "Intolerância"], answer: "Empatia", explanation: "Empatia permite entender e apoiar as necessidades alheias.", skill: "Ética" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "O conjunto de princípios que orientam o que é certo ou errado em uma cultura é chamado de:", options: ["Moda", "Moral", "Economia", "Geografia"], answer: "Moral", explanation: "A moral é o código de conduta de um grupo.", skill: "Filosofia" },

  // --- PORTUGUÊS (COMPLEMENTO) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o substantivo coletivo para um grupo de 'Livros'?", options: ["Alcateia", "Biblioteca", "Constelação", "Molho"], answer: "Biblioteca", explanation: "Biblioteca é o conjunto organizado de livros.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eu viarei amanhã', o verbo está no:", options: ["Presente", "Pretérito Perfeito", "Futuro do Presente", "Futuro do Pretérito"], answer: "Futuro do Presente", explanation: "Indica algo que ainda vai acontecer.", skill: "Verbos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um advérbio de LUGAR?", options: ["Ontem", "Muito", "Aqui", "Talvez"], answer: "Aqui", explanation: "Indica a posição espacial.", skill: "Advérbios" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A obra 'Dom Casmurro', de Machado de Assis, pertence ao:", options: ["Romantismo", "Realismo", "Barroco", "Modernismo"], answer: "Realismo", explanation: "Machado é o maior nome do Realismo no Brasil.", skill: "Literatura" },

  // --- MATEMÁTICA (COMPLEMENTO) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 180 graus é conhecido como:", options: ["Ângulo agudo", "Ângulo raso", "Ângulo reto", "Ângulo nulo"], answer: "Ângulo raso", explanation: "Representa meia volta completa.", skill: "Ângulos" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 2 elevado à 3ª potência (2³)?", options: ["6", "8", "9", "12"], answer: "8", explanation: "2 x 2 x 2 = 8.", skill: "Potenciação" }
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
console.log(`Sucesso! ${batch.length} questões variadas adicionadas.`);
