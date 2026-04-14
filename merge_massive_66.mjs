import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3356;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 66 (Matemática e Ciências - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 150 + 275?", options: ["425", "400", "325", "525"], answer: "425", explanation: "Soma básica: 150 + 275 = 425.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 40% de 500?", options: ["100", "200", "250", "300"], answer: "200", explanation: "40% de 500 = 0,40 x 500 = 200.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 10x = 120 é:", options: ["10", "12", "15", "20"], answer: "12", explanation: "x = 120 / 10 = 12.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 400 é:", options: ["10", "20", "30", "40"], answer: "20", explanation: "20 x 20 = 400.", skill: "Radiciação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 13 é um número primo?", options: ["Sim", "Não, é par", "Não, divide por 3", "Só se for negativo"], answer: "Sim", explanation: "13 só possui dois divisores: 1 e ele mesmo.", skill: "Números" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 1/2 + 1/2?", options: ["1/4", "1", "2/4", "1/2"], answer: "1", explanation: "Duas metades formam um inteiro.", skill: "Frações" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um triângulo isósceles possui:", options: ["3 lados iguais", "2 lados iguais", "Nenhum lado igual", "4 lados"], answer: "2 lados iguais", explanation: "Definição de triângulo isósceles.", skill: "Geometria" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A soma dos ângulos internos de um triângulo é:", options: ["90º", "180º", "270º", "360º"], answer: "180º", explanation: "Sempre 180º em geometria plana.", skill: "Geometria" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 8 x 7?", options: ["54", "56", "58", "60"], answer: "56", explanation: "Tabuada básica.", skill: "Operações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O MMC de 4 e 5 é:", options: ["4", "5", "10", "20"], answer: "20", explanation: "Menor múltiplo comum entre eles.", skill: "MMC" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual o planeta mais próximo do Sol?", options: ["Terra", "Vênus", "Mercúrio", "Marte"], answer: "Mercúrio", explanation: "Mercúrio é o primeiro planeta do sistema solar.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual gás os humanos absorvem na respiração?", options: ["Gás Carbônico", "Oxigênio", "Nitrogênio", "Hidrogênio"], answer: "Oxigênio", explanation: "Vital para a produção de energia nas células.", skill: "Fisiologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A unidade básica da vida é a:", options: ["Átomo", "Célula", "Molécula", "Órgão"], answer: "Célula", explanation: "Todos os seres vivos são compostos por células.", skill: "Biologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula química da:", options: ["Água", "Sal", "Açúcar", "Gasolina"], answer: "Água", explanation: "Junção de hidrogênio e oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual camada da Terra é a mais externa e sólida?", options: ["Núcleo", "Manto", "Crosta Terrestre", "Atmosfera"], answer: "Crosta Terrestre", explanation: "Onde vivemos e situam-se os continentes.", skill: "Geologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O processo em que as plantas produzem alimento usando a luz solar é a:", options: ["Respiração", "Digestão", "Fotossíntese", "Transpiração"], answer: "Fotossíntese", explanation: "Conversão de luz em energia química.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema que protege o corpo contra doenças é o:", options: ["Digestório", "Imunológico", "Circulatório", "Esquelético"], answer: "Imunológico", explanation: "Defesa natural do organismo.", skill: "Saúde" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A força que atrai os objetos para o centro da Terra é a:", options: ["Magnética", "Elétrica", "Gravidade", "Fricção"], answer: "Gravidade", explanation: "Descrita por Isaac Newton.", skill: "Física" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A sucessão dos dias e noites ocorre devido ao movimento de:", options: ["Translação", "Rotação", "Precessão", "Nutação"], answer: "Rotação", explanation: "Giro da Terra em torno do próprio eixo.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes animais faz parte do grupo dos Mamíferos?", options: ["Sapo", "Tubarão", "Baleia", "Pinguim"], answer: "Baleia", explanation: "Baleias respiram por pulmões e amamentam os filhotes.", skill: "Zoologia" }
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
console.log(`Sucesso! Super Batch 66 de ${batch.length} questões de Matemática/Ciências adicionado.`);
