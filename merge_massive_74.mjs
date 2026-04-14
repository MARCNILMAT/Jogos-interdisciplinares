import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3514;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 74 (Multidisciplinar - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'obrigado' in English?", options: ["Please", "Hello", "Thank you", "Sorry"], answer: "Thank you", explanation: "Expressão padrão de gratidão.", skill: "Greetings" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The plural of 'Book' is:", options: ["Bookes", "Books", "Bookies", "Bookz"], answer: "Books", explanation: "Regra geral de acréscimo de 's'.", skill: "Plurals" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "What is the past of 'Do'?", options: ["Did", "Does", "Doing", "Done"], answer: "Did", explanation: "Did é o passado irregular de do.", skill: "Simple Past" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am 14 years old.'", options: ["How many", "How old", "How much", "What age"], answer: "How old", explanation: "Usado para perguntar idade.", skill: "Questions" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which color is the sky on a sunny day?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Blue", explanation: "Blue = Azul.", skill: "Colors" },

  // --- ARTE (6º ao 9º) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores primárias são:", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Branco, Preto, Cinza", "Rosa, Marrom, Azul"], answer: "Vermelho, Azul, Amarelo", explanation: "Cores que não podem ser obtidas pela mistura de outras.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo que utiliza pontos de cor lado a lado é o:", options: ["Pontilhismo", "Cubismo", "Impressionismo", "Realismo"], answer: "Pontilhismo", explanation: "Georges Seurat foi o criador.", skill: "Técnicas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de dobrar papel para criar objetos é o:", options: ["Mosaico", "Escultura", "Origami", "Grafite"], answer: "Origami", explanation: "Tradição japonesa secular.", skill: "Expressão" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é classificado como qual destas artes?", options: ["1ª Arte", "3ª Arte", "7ª Arte", "9ª Arte"], answer: "7ª Arte", explanation: "Denominação dada em 1912 por Ricciotto Canudo.", skill: "Linguagens" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O desenho feito rapidamente para capturar uma ideia é o:", options: ["Esboço", "Pintura a óleo", "Afresco", "Mosaico"], answer: "Esboço", explanation: "Também chamado de croqui.", skill: "Desenho" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Quantas pessoas jogam em uma equipe de Futsal em quadra?", options: ["4", "5", "6", "11"], answer: "5", explanation: "São 5 titulares por time.", skill: "Esportes" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O 'Saque' inicia a disputa em qual destes esportes?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "O saque coloca a bola em jogo.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A prática regular de alongamentos ajuda a melhorar a:", options: ["Velocidade", "Flexibilidade", "Resistência", "Miopia"], answer: "Flexibilidade", explanation: "Aumenta a amplitude das articulações.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "As Olimpíadas da Era Moderna começaram em qual cidade?", options: ["Londres", "Paris", "Atenas", "Roma"], answer: "Atenas", explanation: "Em 1896, na capital da Grécia.", skill: "Olimpismo" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O índice IMC avalia a relação entre:", options: ["Tempo e Espaço", "Peso e Altura", "Força e Idade", "Salto e Corrida"], answer: "Peso e Altura", explanation: "Índice de Massa Corporal.", skill: "Nutrição" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Poli", "Bíblia", "Alcorão", "Vedas"], answer: "Alcorão", explanation: "Contém as revelações de Alá.", skill: "Livros" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito mútuo entre diferentes crenças chama-se:", options: ["Tolerância", "Intolerância", "Discriminação", "Individualismo"], answer: "Tolerância", explanation: "Garante a paz em sociedades diversas.", skill: "Diversidade" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade de religião no Brasil é garantida pela:", options: ["Televisão", "Constituição Federal", "Internet", "Igreja Local"], answer: "Constituição Federal", explanation: "A lei máxima garante o Estado Laico.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "O diálogo entre religiões em busca de união é o:", options: ["Ecumenismo", "Dialética", "Conflitos", "Monólogos"], answer: "Ecumenismo", explanation: "Busca a cooperação inter-religiosa.", skill: "Tolerância" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A 'Regra de Ouro' diz que devemos:", options: ["Vencer a todo custo", "Tratar os outros como gostaríamos de ser tratados", "Ignorar o próximo", "Pensar só em nós"], answer: "Tratar os outros como gostaríamos de ser tratados", explanation: "Princípio universal de ética.", skill: "Ética" }
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
console.log(`Sucesso! Super Batch 74 de ${batch.length} questões multidisciplinares adicionado.`);
