import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3396;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 68 (Inglês, Artes, EdFisica e Religioso - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Qual a tradução correta para 'Maçã' em Inglês?", options: ["Grape", "Apple", "Orange", "Banana"], answer: "Apple", explanation: "Apple = Maçã.", skill: "Vocabulary" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Big' is:", options: ["Large", "Small", "Fast", "Strong"], answer: "Small", explanation: "Big (grande) x Small (pequeno - antônimo).", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "I ___ to the library yesterday.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Went é o passado simples do verbo irregular 'to go'.", skill: "Simple Past" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am 14 years old.'", options: ["How many", "How old", "How much", "What age"], answer: "How old", explanation: "Usado para perguntar a idade em inglês.", skill: "Questions" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which number is 'Twelve'?", options: ["2", "12", "20", "22"], answer: "12", explanation: "Twelve = 12.", skill: "Numbers" },

  // --- ARTE (6º ao 9º) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Quais são as cores primárias?", options: ["Verde, Roxo e Laranja", "Vermelho, Azul e Amarelo", "Preto, Branco e Cinza", "Rosa, Marrom e Azul"], answer: "Vermelho, Azul e Amarelo", explanation: "Cores que não podem ser obtidas pela mistura de outras.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo artístico caracterizado pelo uso de figuras geométricas e fragmentação da imagem é o:", options: ["Cubismo", "Impressionismo", "Realismo", "Barroco"], answer: "Cubismo", explanation: "Pablo Picasso foi um dos fundadores deste movimento.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de dobrar papel para criar objetos chama-se:", options: ["Origami", "Mosaico", "Escultura", "Grafite"], answer: "Origami", explanation: "Tradição milenar da cultura japonesa.", skill: "Técnicas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é frequentemente chamado de:", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Classificação surgida no início do século XX.", skill: "Audiovisual" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O desenho feito de forma rápida para capturar uma ideia é o:", options: ["Esboço", "Pintura a óleo", "Gravura", "Afresco"], answer: "Esboço", explanation: "Também chamado de croqui.", skill: "Linguagens" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, quantos jogadores cada equipe tem em quadra?", options: ["4", "5", "6", "11"], answer: "5", explanation: "O futsal é disputado por 5 jogadores titulares em cada time.", skill: "Esportes" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O 'Saque' inicia a disputa em qual destes esportes?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "O saque é o fundamento que coloca a bola em jogo.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O teste de IMC serve para medir a relação entre:", options: ["Tempo e distância", "Peso e altura", "Força e velocidade", "Idade e fôlego"], answer: "Peso e altura", explanation: "Índice de Massa Corporal avalia o estado nutricional.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "Em qual cidade ocorreram as primeiras Olimpíadas da Era Moderna?", options: ["Londres", "Paris", "Atenas", "Roma"], answer: "Atenas", explanation: "Em 1896, na capital da Grécia.", skill: "Olimpismo" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Praticar alongamentos ajuda a melhorar qual capacidade física?", options: ["Velocidade", "Flexibilidade", "Resistência", "Miopia"], answer: "Flexibilidade", explanation: "Aumenta a amplitude de movimento das articulações.", skill: "Condicionamento" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Poli", "Alcorão", "Bíblia", "Vedas"], answer: "Alcorão", explanation: "Livro central da fé islâmica.", skill: "Religiões" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito mútuo entre pessoas de diferentes crenças chama-se:", options: ["Tolerância", "Intolerância", "Discriminação", "Individualismo"], answer: "Tolerância", explanation: "Pilar da convivência em sociedade.", skill: "Diversidade" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade religiosa no Brasil é garantida pela:", options: ["Televisão", "Constituição Federal", "Internet", "Igreja Local"], answer: "Constituição Federal", explanation: "A lei máxima do país assegura esse direito.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "O diálogo entre diferentes religiões chama-se:", options: ["Ecumenismo", "Dialética", "Monólogo", "Conformismo"], answer: "Ecumenismo", explanation: "Termo usado para buscar a união e paz entre credos.", skill: "Tolerância" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A 'Regra de Ouro' presente em muitas culturas diz que devemos:", options: ["Sermos melhores que todos", "Tratar os outros como gostaríamos de ser tratados", "Ignorar as necessidades alheias", "Focar apenas em nós mesmos"], answer: "Tratar os outros como gostaríamos de ser tratados", explanation: "Princípio universal de ética e empatia.", skill: "Ética" }
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
console.log(`Sucesso! Super Batch 68 de ${batch.length} questões multidisciplinares adicionado.`);
