import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3703;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 81 (Volume Multidisciplinar) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'oi' in English?", options: ["Bye", "Hi", "Thanks", "Sorry"], answer: "Hi", explanation: "Hi/Hello são saudações básicas.", skill: "Vocab" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Fast' is:", options: ["Quick", "Slow", "Strong", "Big"], answer: "Slow", explanation: "Fast (rápido) x Slow (lento).", skill: "Adj" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "What is the past of 'Go'?", options: ["Went", "Gone", "Going", "Goes"], answer: "Went", explanation: "Verbo irregular.", skill: "Past" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choice the correct: '___ is your name?'", options: ["How", "When", "What", "Where"], answer: "What", explanation: "Question word for identity.", skill: "Questions" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which color is the sun?", options: ["Blue", "Red", "Yellow", "Green"], answer: "Yellow", explanation: "Yellow = Amarelo.", skill: "Colors" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Quais são as cores primárias?", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Preto e Branco", "Rosa e Marrom"], answer: "Vermelho, Azul, Amarelo", explanation: "Bases da mistura.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo que usa formas geométricas é o:", options: ["Cubismo", "Realismo", "Barroco", "Pop Art"], answer: "Cubismo", explanation: "Picasso e Braque.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de dobrar papel chama-se:", options: ["Mosaico", "Escultura", "Origami", "Gravura"], answer: "Origami", explanation: "Origem japonesa.", skill: "Técnicas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é a ___ Arte.", options: ["3ª", "5ª", "7ª", "9ª"], answer: "7ª", explanation: "Classificação Ricciotto Canudo.", skill: "Audiovisual" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Quantos jogadores tem um time de Futsal em quadra?", options: ["4", "5", "11", "7"], answer: "5", explanation: "Titulares oficiais.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O saque inicia o jogo em qual esporte?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "Inicia a jogada.", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "IMC significa:", options: ["Índice de Massa Corporal", "Indicação de Movimento Calórico", "Intensidade Muscular Comum", "Idade Média de Corrida"], answer: "Índice de Massa Corporal", explanation: "Peso / Altura².", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Primeiras Olimpíadas modernas foram em:", options: ["Paris", "Londres", "Atenas", "Tóquio"], answer: "Atenas", explanation: "Em 1896.", skill: "História" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Livro sagrado do Islamismo é o:", options: ["Bíblia", "Alcorão", "Torá", "Vedas"], answer: "Alcorão", explanation: "Contém a palavra de Alá.", skill: "Livros" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "Respeitar diferentes religiões é base da:", options: ["Intolerância", "Paz Social", "Desigualdade", "Confusão"], answer: "Paz Social", explanation: "Pilar da convivência.", skill: "Valores" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "Estado Laico significa que o governo:", options: ["Impõe uma religião", "É neutro e respeita todas", "Proíbe as igrejas", "Só aceita ateus"], answer: "É neutro e respeita todas", explanation: "Liberdade religiosa.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "Ajudar o próximo é um valor:", options: ["De apenas uma religião", "Universal/Ético", "Nacionalista", "Só pra quem é rico"], answer: "Universal/Ético", explanation: "Presente em quase todos os credos.", skill: "Ética" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é o 'Vermelho'?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], answer: "Marte", explanation: "Devido ao ferro no solo.", skill: "Planetas" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas geram energia pela:", options: ["Digestão", "Respiração", "Fotossíntese", "Sono"], answer: "Fotossíntese", explanation: "Usam luz solar.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema que protege o corpo é o:", options: ["Digestório", "Imunológico", "Esquelético", "Nervoso"], answer: "Imunológico", explanation: "Defesa natural.", skill: "Saúde" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A fórmula H2O representa a:", options: ["Água", "Sal", "Ar", "Gasolina"], answer: "Água", explanation: "Oxigênio e Hidrogênio.", skill: "Química" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual o antônimo de 'Bom'?", options: ["Lindo", "Mau", "Grande", "Alegre"], answer: "Mau", explanation: "Oposto direto.", skill: "Semântica" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O coletivo de 'Peixes' é:", options: ["Bando", "Cardume", "Alcateia", "Enxame"], answer: "Cardume", explanation: "Conjunto de peixes.", skill: "Substantivos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "Antepenúltima tônica.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'Grande Sertão: Veredas'?", options: ["Machado", "Guimarães Rosa", "Alencar", "Lobato"], answer: "Guimarães Rosa", explanation: "Modernismo brasileiro.", skill: "Literatura" },

  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 50 x 3?", options: ["100", "150", "200", "250"], answer: "150", explanation: "Cálculo simples.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Raiz quadrada de 64?", options: ["6", "8", "10", "12"], answer: "8", explanation: "8x8=64.", skill: "Raiz" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Quanto é 25% de 400?", options: ["50", "100", "150", "200"], answer: "100", explanation: "Um quarto de 400.", skill: "Porcentagem" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Soma dos ângulos de um triângulo?", options: ["90", "180", "360", "270"], answer: "180", explanation: "Teorema fundamental.", skill: "Ângulos" }
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
console.log(`Sucesso! Lote 81 de ${batch.length} questões adicionado.`);
