import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3211;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 60 (Multidisciplinar - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Poli", "Bíblia", "Alcorão", "Vedas"], answer: "Alcorão", explanation: "O livro central da fé islâmica.", skill: "Religiões" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito mútuo entre pessoas de diferentes crenças é chamado de:", options: ["Tolerância", "Intolerância", "Discriminação", "Individualismo"], answer: "Tolerância", explanation: "Pilar da convivência em sociedade.", skill: "Diversidade" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "O direito de livre exercício dos cultos religiosos é garantido no Brasil pela:", options: ["Constituição Federal", "Prefeitura", "Igreja Local", "Televisão"], answer: "Constituição Federal", explanation: "Garantia fundamental do Estado Laico.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade religiosa protege:", options: ["Apenas as religiões maiores", "Apenas quem tem religião", "Toda e qualquer forma de crença ou descrença", "Apenas religiões oficiais"], answer: "Toda e qualquer forma de crença ou descrença", explanation: "Garante a diversidade de pensamento e fé.", skill: "Direitos Humanos" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A 'Regra de Ouro' ensina basicamente que devemos:", options: ["Tratar os outros como gostaríamos de ser tratados", "Sermos melhores que todos", "Ignorar as necessidades alheias", "Focar apenas em nós mesmos"], answer: "Tratar os outros como gostaríamos de ser tratados", explanation: "Princípio universal de ética e empatia.", skill: "Ética" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores primárias são:", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Branco, Preto, Cinza", "Rosa, Marrom, Azul"], answer: "Vermelho, Azul, Amarelo", explanation: "Cores que não podem ser obtidas pela mistura de outras.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo que utiliza pontos de cor lado a lado é o:", options: ["Pontilhismo", "Cubismo", "Impressionismo", "Realismo"], answer: "Pontilhismo", explanation: "Georges Seurat foi um grande expoente.", skill: "Técnicas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual destes artistas é representante do Surrealismo?", options: ["Picasso", "Salvador Dalí", "Van Gogh", "Monet"], answer: "Salvador Dalí", explanation: "Explorava o subconsciente e sonhos.", skill: "Vanguardas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte que utiliza o próprio corpo do artista como obra é a:", options: ["Performance", "Escultura", "Pintura", "Gravura"], answer: "Performance", explanation: "O corpo é o canal de expressão direta.", skill: "Contemporânea" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O cinema é conhecido como qual arte?", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Denominação clássica pós-1912.", skill: "Linguagens" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, quantos jogadores cada equipe tem em quadra em uma partida oficial?", options: ["4", "5", "6", "11"], answer: "5", explanation: "Cada time joga com 5 titulares.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O 'Saque' inicia a disputa de pontos em qual destes esportes?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "Executado atrás da linha de fundo.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A prática regular de alongamentos ajuda a melhorar a:", options: ["Velocidade", "Flexibilidade", "Miopia", "Cura da gripe"], answer: "Flexibilidade", explanation: "Melhora a amplitude de movimento.", skill: "Saúde" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "As Olimpíadas da Era Moderna tiveram sua primeira edição em:", options: ["Paris", "Atenas", "Roma", "Londres"], answer: "Atenas", explanation: "Realizadas em 1896 na Grécia.", skill: "História" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O índice usado para avaliar a relação peso/altura é o:", options: ["IMC", "GPA", "IQ", "PH"], answer: "IMC", explanation: "Índice de Massa Corporal.", skill: "Nutrição" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'maçã' in English?", options: ["Apple", "Orange", "Banana", "Grape"], answer: "Apple", explanation: "Tradução básica de fruta.", skill: "Fruits" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Big' is:", options: ["Large", "Small", "Fast", "Strong"], answer: "Small", explanation: "Big (grande) x Small (pequeno).", skill: "Adjectives" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "I ___ to the library yesterday.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Passado irregular de to go.", skill: "Simple Past" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ are you?' 'I am 14.'", options: ["How many", "How old", "How much", "How age"], answer: "How old", explanation: "Pergunta de idade em inglês.", skill: "Questions" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "What color is the sky on a sunny day?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Blue", explanation: "Blue = Azul.", skill: "Colors" },

  // --- EXTRA HISTÓRIA/GEO ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Que civilização antiga construiu as famosas Pirâmides de Gizé?", options: ["Egito", "Roma", "Grécia", "Mesopotâmia"], answer: "Egito", explanation: "Pirâmides serviam de túmulo para faraós.", skill: "Antiguidade" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país em extensão territorial da América do Sul?", options: ["Argentina", "Chile", "Brasil", "Peru"], answer: "Brasil", explanation: "O Brasil ocupa quase metade do continente.", skill: "Localização" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A Revolução Francesa começou em qual ano?", options: ["1500", "1789", "1822", "1945"], answer: "1789", explanation: "Marco fundamental da Idade Contemporânea.", skill: "Revoluções" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica mundial chama-se:", options: ["Globalização", "Urbanização", "Desertificação", "Erosão"], answer: "Globalização", explanation: "Conexão mundial pós-Guerra Fria.", skill: "Mundo Atual" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O Canal do Panamá liga quais dois oceanos?", options: ["Atlântico e Pacífico", "Atlântico e Índico", "Índico e Pacífico", "Ártico e Atlântico"], answer: "Atlântico e Pacífico", explanation: "Importante rota comercial marítima.", skill: "Geopolítica" }
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
console.log(`Sucesso! Super Batch 60 de ${batch.length} questões multidisciplinares adicionado.`);
