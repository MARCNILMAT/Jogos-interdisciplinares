import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2756;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 27 (Inglês, Religioso e EdFisica) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'obrigado' in English?", options: ["Please", "Hello", "Thank you", "Sorry"], answer: "Thank you", explanation: "Expressão de gratidão.", skill: "Greetings" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "I ___ a student.", options: ["am", "is", "are", "be"], answer: "am", explanation: "Verb to be: I am.", skill: "To Be" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to the park.", options: ["go", "goes", "went", "gone"], answer: "went", explanation: "Simple Past of go is went.", skill: "Past Simple" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "The man ___ lives there is a doctor.", options: ["which", "who", "whose", "it"], answer: "who", explanation: "Who é usado para pessoas.", skill: "Relative Pronouns" },

  // --- ENSINO RELIGIOSO (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo universal da paz?", options: ["Caveira", "Pomba Branca", "Raio", "Espada"], answer: "Pomba Branca", explanation: "A pomba com ramo de oliveira simboliza a paz.", skill: "Símbolos" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito às diferentes crenças e religiões chama-se:", options: ["Intolerância", "Tolerância Religiosa", "Preconceito", "Segregação"], answer: "Tolerância Religiosa", explanation: "Base para a convivência pacífica em sociedade.", skill: "Respeito" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "O conjunto de valores que orientam o que é certo ou errado é a:", options: ["Moda", "Ética", "Política", "Economia"], answer: "Ética", explanation: "A ética estuda a conduta humana e seus valores.", skill: "Valores" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade de crença é garantida no Brasil pela:", options: ["Empresa", "Constituição Federal", "Televisão", "Internet"], answer: "Constituição Federal", explanation: "A lei máxima do país garante a liberdade religiosa.", skill: "Direitos Humanos" },

  // --- EDUCAÇÃO FÍSICA (6º ao 9º Ano) ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, o jogador que pode usar as mãos dentro da área é o:", options: ["Fixo", "Ala", "Pivô", "Goleiro"], answer: "Goleiro", explanation: "O goleiro defende o gol e pode usar as mãos na área.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "Quantos jogadores titulares tem uma equipe de Voleibol?", options: ["5", "6", "11", "7"], answer: "6", explanation: "Seis atletas por time em quadra.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "No Basquetebol, uma cesta de lance livre vale quantos pontos?", options: ["1 ponto", "2 pontos", "3 pontos", "5 pontos"], answer: "1 ponto", explanation: "Lance livre é cobrado após faltas e vale 1 ponto.", skill: "Basquete" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A prática regular de exercícios ajuda a prevenir qual destas doenças?", options: ["Gripe", "Hipertensão", "Miopia", "Fraturas"], answer: "Hipertensão", explanation: "Melhora a circulação e fortalece o coração.", skill: "Qualidade de Vida" }
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
