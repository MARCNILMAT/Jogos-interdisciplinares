import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2985;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 44 (Aceleração Multidisciplinar) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual destes é um exemplo de animal vertebrado?", options: ["Minhoca", "Peixe", "Borboleta", "Aranha"], answer: "Peixe", explanation: "Vertebrados possuem coluna vertebral.", skill: "Zoologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As briófitas (musgos) são caracterizadas por serem:", options: ["Plantas gigantes", "Vasculares", "Avasculares (sem vasos condutores)", "Plantas com flores"], answer: "Avasculares (sem vasos condutores)", explanation: "Por isso são pequenas e vivem em locais úmidos.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O sistema do corpo humano que bombeia o sangue é o:", options: ["Respiratório", "Digestório", "Circulatório", "Nervoso"], answer: "Circulatório", explanation: "O coração é o centro deste sistema.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é também conhecida como lei da:", options: ["Ação e Reação", "Inércia", "Gravidade", "Força"], answer: "Inércia", explanation: "Diz que objetos em repouso tendem a ficar em repouso.", skill: "Física" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "Qual esporte é jogado com uma cesta?", options: ["Futebol", "Vôlei", "Basquete", "Handebol"], answer: "Basquete", explanation: "O objetivo é acertar a bola na cesta adversária.", skill: "Esportes" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "A 'Manchete' é um fundamento de qual esporte?", options: ["Basquete", "Vôlei", "Futsal", "Tênis"], answer: "Vôlei", explanation: "Usada para recepção e defesa no voleibol.", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "O 'Handebol' é jogado majoritariamente com:", options: ["Os pés", "As mãos", "Tacos", "Raquetes"], answer: "As mãos", explanation: "É um esporte de arremesso manual.", skill: "Handebol" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "A prática de exercícios físicos ajuda a prevenir a:", options: ["Miopia", "Gripe", "Obesidade", "Cárie"], answer: "Obesidade", explanation: "Melhora o metabolismo e queima calorias.", skill: "Saúde" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é uma cor secundária?", options: ["Vermelho", "Verde", "Azul", "Amarelo"], answer: "Verde", explanation: "Verde surge da mistura de azul e amarelo.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo artístico com formas geométricas e fragmentadas é o:", options: ["Impressionismo", "Cubismo", "Surrealismo", "Realismo"], answer: "Cubismo", explanation: "Exemplo famoso: Pablo Picasso.", skill: "Vanguardas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Quem pintou a 'Monalisa'?", options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Dalí"], answer: "Leonardo da Vinci", explanation: "Mestre do Renascimento.", skill: "História da Arte" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A arte urbana feita em muros públicos é o:", options: ["Mosaico", "Escultura", "Grafite", "Performance"], answer: "Grafite", explanation: "O grafite é uma expressão visual urbana.", skill: "Arte Urbana" },

  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Como se diz 'Cachorro' em Inglês?", options: ["Cat", "Dog", "Bird", "Fish"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Vocabulary" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Qual o pronome para 'Ela'?", options: ["He", "It", "She", "They"], answer: "She", explanation: "She = Ela.", skill: "Pronouns" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "Yesterday, I ___ to school.", options: ["go", "goes", "went", "going"], answer: "went", explanation: "Past of to go.", skill: "Past Tense" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "O oposto de 'Happy' é:", options: ["Sad", "Big", "Fast", "Cold"], answer: "Sad", explanation: "Sad = Triste.", skill: "Adjectives" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo da paz?", options: ["Caveira", "Pomba Branca", "Raio", "Espada"], answer: "Pomba Branca", explanation: "Símbolo universal de paz.", skill: "Símbolos" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito às diferenças é fundamental para a:", options: ["Intolerância", "Convivência Social", "Desigualdade", "Discriminação"], answer: "Convivência Social", explanation: "A tolerância é base da paz.", skill: "Valores" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade de religião no Brasil é garantida pela:", options: ["Televisão", "Constituição", "Empresa", "Internet"], answer: "Constituição", explanation: "Nossa lei maior garante liberdade de culto.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "O conjunto de regras morais de uma religião chama-se:", options: ["Esporte", "Dogma/Ética", "Moda", "Negócio"], answer: "Dogma/Ética", explanation: "Orientações de conduta.", skill: "Ética" }
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
console.log(`Sucesso! Lote 44 de ${batch.length} questões adicionado.`);
