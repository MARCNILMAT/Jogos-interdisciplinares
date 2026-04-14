import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3997;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Especial: Juros Simples (9º ano) a partir do ID: ${startId}`);

const batch = [
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a fórmula básica para o cálculo de Juros Simples?", options: ["J = C . i . t", "M = C + J", "J = C / i", "M = C . (1+i)^t"], answer: "J = C . i . t", explanation: "Juros = Capital x Taxa x Tempo.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que representa a letra 'C' na fórmula J = C.i.t?", options: ["Custo", "Capital inicial", "Coeficiente", "Cotas"], answer: "Capital inicial", explanation: "C é o valor inicial investido ou emprestado.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se um capital de R$ 1.000,00 é aplicado a uma taxa de 2% ao mês por 3 meses, qual o juro produzido?", options: ["R$ 20", "R$ 40", "R$ 60", "R$ 100"], answer: "R$ 60", explanation: "J = 1000 x 0,02 x 3 = 60.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O 'Montante' (M) de uma aplicação é a soma de:", options: ["Capital e Juros", "Juros e Taxa", "Capital e Tempo", "Apenas o Capital"], answer: "Capital e Juros", explanation: "Montante é o valor total ao final do período.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Uma taxa de 5% ao mês, escrita na forma decimal para cálculos, é:", options: ["0,5", "0,05", "5,0", "0,005"], answer: "0,05", explanation: "5 / 100 = 0,05.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se J = 200, C = 1000 e t = 2, qual a taxa (i) mensal?", options: ["5%", "10%", "20%", "2%"], answer: "10%", explanation: "200 = 1000 x i x 2 => i = 200/2000 = 0,10 (10%).", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o montante de um empréstimo de R$ 500,00 com juros de R$ 80,00?", options: ["R$ 420", "R$ 500", "R$ 580", "R$ 600"], answer: "R$ 580", explanation: "M = C + J = 500 + 80 = 580.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um capital aplicado por 1 ano a 3% ao mês terá qual tempo (t) em meses na fórmula?", options: ["1", "6", "10", "12"], answer: "12", explanation: "A taxa e o tempo devem estar na mesma unidade. 1 ano = 12 meses.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se você aplicar R$ 200,00 a uma taxa de 1% ao mês, quanto terá de juros após 10 meses?", options: ["R$ 10", "R$ 20", "R$ 30", "R$ 40"], answer: "R$ 20", explanation: "J = 200 x 0,01 x 10 = 20.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o juro simples de R$ 2.000,00 a 10% ao ano por 2 anos?", options: ["R$ 200", "R$ 400", "R$ 600", "R$ 800"], answer: "R$ 400", explanation: "J = 2000 x 0,10 x 2 = 400.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Para calcular juros simples, o capital permanece o mesmo durante todo o período?", options: ["Sim, os juros são calculados sempre sobre o capital inicial", "Não, os juros são somados ao capital a cada mês", "Depende do banco", "Só se o tempo for curto"], answer: "Sim, os juros são calculados sempre sobre o capital inicial", explanation: "Diferente do juro composto, o juro simples não incide sobre juros.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a taxa anual equivalente a 2% ao mês em juros simples?", options: ["12%", "20%", "24%", "26%"], answer: "24%", explanation: "2% x 12 meses = 24%.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se um juro de R$ 300,00 foi gerado por uma taxa de 5% ao mês em 2 meses, qual era o capital?", options: ["R$ 2.000", "R$ 3.000", "R$ 4.000", "R$ 5.000"], answer: "R$ 3.000", explanation: "300 = C x 0,05 x 2 => C = 300 / 0,10 = 3000.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um investimento de R$ 800,00 rendeu R$ 160,00 de juros após 4 meses. Qual a taxa mensal?", options: ["2%", "4%", "5%", "8%"], answer: "5%", explanation: "160 = 800 x i x 4 => i = 160 / 3200 = 0,05 (5%).", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A expressão 'i' na fórmula J=C.i.t refere-se a:", options: ["Imposto", "Investimento", "Taxa de juros", "Inadimplência"], answer: "Taxa de juros", explanation: "É a porcentagem cobrada por período.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se o tempo for dado em dias e a taxa em meses, o que devemos fazer?", options: ["Multiplicar tudo", "Converter o tempo para meses ou a taxa para dias", "Ignorar e calcular", "Somar 30 ao capital"], answer: "Converter o tempo para meses ou a taxa para dias", explanation: "As unidades de tempo (t) e taxa (i) devem ser iguais.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Quanto tempo levará para um capital de R$ 1.000,00 render R$ 300,00 a uma taxa de 3% ao mês?", options: ["5 meses", "8 meses", "10 meses", "12 meses"], answer: "10 meses", explanation: "300 = 1000 x 0,03 x t => t = 300 / 30 = 10.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "No final de um ano, uma aplicação de R$ 5.000,00 rendeu 12% de juros totais. Qual o montante?", options: ["R$ 5.120", "R$ 5.600", "R$ 6.000", "R$ 6.200"], answer: "R$ 5.600", explanation: "J = 5000 x 0,12 = 600. M = 5000 + 600 = 5600.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a taxa trimestral equivalente a 1% ao mês em juros simples?", options: ["1%", "2%", "3%", "4%"], answer: "3%", explanation: "1% x 3 meses = 3%.", skill: "Juros Simples" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se um juro de R$ 100,00 foi cobrado por 5 meses sobre um capital de R$ 5.000,00, qual a taxa mensal?", options: ["0,2%", "0,4%", "2%", "4%"], answer: "0,4%", explanation: "100 = 5000 x i x 5 => i = 100 / 25000 = 0,004 (ou 0,4%).", skill: "Juros Simples" }
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
console.log(`Sucesso! Lote Especial de Juros Simples (9º ano) com ${batch.length} questões adicionado.`);
