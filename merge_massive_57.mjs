import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3148;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 57 (Artes e Inglês - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- ARTE (6º ao 9º) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "As cores primárias são aquelas que não podem ser obtidas pela mistura de outras. Quais são elas?", options: ["Verde, Roxo e Laranja", "Vermelho, Azul e Amarelo", "Preto, Branco e Cinza", "Rosa, Marrom e Bege"], answer: "Vermelho, Azul e Amarelo", explanation: "Desta tríade surgem todas as outras cores secundárias.", skill: "Teoria das Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo artístico caracterizado pelo uso de pontos de cor que se misturam na visão do observador é o:", options: ["Impressionismo", "Pontilhismo", "Surrealismo", "Cubismo"], answer: "Pontilhismo", explanation: "Georges Seurat foi um dos principais expoentes desta técnica.", skill: "Técnicas de Pintura" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual destes artistas é um famoso representante do Surrealismo, conhecido por pintar relógios derretidos?", options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: "Salvador Dalí", explanation: "Dalí explorava o mundo dos sonhos e do inconsciente.", skill: "Vanguardas Europeias" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte de projetar e edificar prédios e espaços urbanos é a:", options: ["Escultura", "Arquitetura", "Gravura", "Performance"], answer: "Arquitetura", explanation: "A arquitetura une estética e funcionalidade técnica.", skill: "Linguagens Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O desenho feito de forma rápida para captar uma ideia ou movimento é chamado de:", options: ["Esboço (ou Croqui)", "Pintura a óleo", "Afresco", "Mosaico"], answer: "Esboço (ou Croqui)", explanation: "O esboço é a base preparatória para obras mais complexas.", skill: "Desenho" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A técnica de colagem consiste em:", options: ["Pintar com pincéis finos", "Esculpir em mármore", "Agrupar materiais diversos em um suporte", "Fotografar paisagens"], answer: "Agrupar materiais diversos em um suporte", explanation: "A colagem utiliza papéis, tecidos e outros objetos.", skill: "Meios e Materiais" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O grafite é uma forma de arte que nasceu nos centros urbanos. Ele se diferencia do picho pois:", options: ["É feito apenas com pincel", "Possui intenção estética e artística reconhecida", "É proibido em qualquer lugar", "Usa apenas a cor branca"], answer: "Possui intenção estética e artística reconhecida", explanation: "O grafite é uma expressão visual complexa e valorizada.", skill: "Arte Urbana" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "Qual destes elementos é fundamental na linguagem teatral?", options: ["Câmera", "Pincel", "Ator e Público", "Instrumento de corda"], answer: "Ator e Público", explanation: "O teatro acontece na interação entre quem atua e quem assiste.", skill: "Teatro" },

  // --- INGLÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Qual a tradução correta para 'Azul' em Inglês?", options: ["Red", "Green", "Blue", "Black"], answer: "Blue", explanation: "Blue = Azul.", skill: "Colors" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Como se diz 'Pai' em Inglês?", options: ["Mother", "Brother", "Father", "Sister"], answer: "Father", explanation: "Father = Pai.", skill: "Family" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Fast' is:", options: ["Quick", "Slow", "Strong", "Weak"], answer: "Slow", explanation: "Fast (rápido) x Slow (lento).", skill: "Adjectives" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "I ___ to school every day.", options: ["go", "goes", "went", "going"], answer: "go", explanation: "Simple Present: plural/I uses the base form.", skill: "Simple Present" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Qual destes números é o 'Twelve'?", options: ["2", "12", "20", "22"], answer: "12", explanation: "Twelve = 12.", skill: "Numbers" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Choose the correct: '___ is your name?' 'My name is Carlos.'", options: ["How", "Who", "What", "Where"], answer: "What", explanation: "What is your name? (Qual o seu nome?).", skill: "Questions" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The animal known as the 'King of the Jungle' is the:", options: ["Elephant", "Tiger", "Lion", "Monkey"], answer: "Lion", explanation: "Lion = Leão.", skill: "Animals" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ a delicious pizza.", options: ["eat", "eats", "ate", "eating"], answer: "ate", explanation: "Past of eat is ate (irregular).", skill: "Simple Past" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'cachorro' in English?", options: ["Cat", "Dog", "Bird", "Horse"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Animals" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Which pronoun is used for a group where I am included?", options: ["He", "They", "We", "You"], answer: "We", explanation: "We = Nós.", skill: "Pronouns" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "A 'Library' is a place where you can:", options: ["Buy food", "Borrow books", "Watch a movie", "Play soccer"], answer: "Borrow books", explanation: "Library = Biblioteca.", skill: "Places" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "Choose the negative: 'I study English.'", options: ["I not study English", "I don't study English", "I am not study English", "I no study English"], answer: "I don't study English", explanation: "Auxiliary 'do' + 'not'.", skill: "Negatives" }
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
console.log(`Sucesso! Lote 57 de ${batch.length} questões de Artes e Inglês adicionado.`);
