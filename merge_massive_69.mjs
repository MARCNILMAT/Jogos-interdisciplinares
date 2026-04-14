import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3416;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 69 (Matemática, Português e Ciências - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 12 x 5?", options: ["50", "55", "60", "65"], answer: "60", explanation: "12 x 5 = 60.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 25% de 200?", options: ["25", "50", "100", "150"], answer: "50", explanation: "25% é a quarta parte (200 / 4 = 50).", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 169 é:", options: ["11", "12", "13", "14"], answer: "13", explanation: "13 x 13 = 169.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 2x + 10 = 30 é:", options: ["5", "10", "15", "20"], answer: "10", explanation: "2x = 20 -> x = 10.", skill: "Equações" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O perímetro de um quadrado de lado 6cm é:", options: ["12cm", "24cm", "36cm", "48cm"], answer: "24cm", explanation: "Perímetro = 4 x Lado = 4 x 6 = 24.", skill: "Geometria" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 3 e 4?", options: ["7", "12", "24", "1"], answer: "12", explanation: "Menor múltiplo comum.", skill: "MMC" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um ângulo raso mede quantos graus?", options: ["90º", "180º", "270º", "360º"], answer: "180º", explanation: "Corresponde a meia volta.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a soma dos ângulos internos de um triângulo?", options: ["90º", "180º", "270º", "360º"], answer: "180º", explanation: "Sempre 180º na geometria plana.", skill: "Triângulos" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um Substantivo Próprio?", options: ["Menino", "Brasil", "Cidade", "Papel"], answer: "Brasil", explanation: "Nomes de países são substantivos próprios.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Feliz' é:", options: ["Alegre", "Contente", "Triste", "Satisfeito"], answer: "Triste", explanation: "Antônimos são palavras com sentidos opostos.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é classificada como:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "A antepenúltima sílaba é tônica.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A figura de linguagem que usa o exagero é a:", options: ["Metáfora", "Hipérbole", "Ironia", "Paradoxo"], answer: "Hipérbole", explanation: "Como em 'vou morrer de rir'.", skill: "Figuras" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O coletivo de 'Peixes' é:", options: ["Matilha", "Bando", "Cardume", "Alcateia"], answer: "Cardume", explanation: "Coletivos designam conjuntos.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Qual o pronome pessoal do caso reto na frase 'Eles viajaram'?", options: ["Eles", "Viajaram", "Não tem", "Ao"], answer: "Eles", explanation: "Eles é pronome reto.", skill: "Pronomes" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O movimento da Terra em torno do próprio eixo chama-se:", options: ["Translação", "Rotação", "Oscilação", "Precessão"], answer: "Rotação", explanation: "Leva 24h e gera o dia/noite.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas produzem alimento através da:", options: ["Respiração", "Digestão", "Fotossíntese", "Transpiração"], answer: "Fotossíntese", explanation: "Usam luz, CO2 e água.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual o principal órgão do sistema circulatório?", options: ["Pulmão", "Cérebro", "Coração", "Fígado"], answer: "Coração", explanation: "Bombeia sangue para o corpo.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula de qual substância?", options: ["Sal", "Água", "Açúcar", "Gás"], answer: "Água", explanation: "2 Hidrogênios e 1 Oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é conhecido como 'Planeta Vermelho'?", options: ["Júpiter", "Marte", "Vênus", "Saturno"], answer: "Marte", explanation: "Devido ao solo rico em óxido de ferro.", skill: "Planetas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os seres vivos que produzem o próprio alimento são:", options: ["Consumers", "Decompositores", "Produtores", "Parasitas"], answer: "Produtores", explanation: "Autótrofos.", skill: "Ecologia" }
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
console.log(`Sucesso! Super Batch 69 de ${batch.length} questões multidisciplinares adicionado.`);
