import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2934;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 41 (Multidiscip. - Volume Acelerado) a partir do ID: ${startId}`);

const batch = [
  // --- INGLÊS ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "What color is the sky on a sunny day?", options: ["Green", "Blue", "Red", "Yellow"], answer: "Blue", explanation: "Blue = Azul.", skill: "Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "My mother's brother is my ___.", options: ["Aunt", "Uncle", "Cousin", "Grandfather"], answer: "Uncle", explanation: "Uncle = Tio.", skill: "Family" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "How do you say 'maçã' in English?", options: ["Grape", "Apple", "Orange", "Banana"], answer: "Apple", explanation: "Apple = Maçã.", skill: "Food" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Small' is:", options: ["Little", "Short", "Big", "Thin"], answer: "Big", explanation: "Big = Grande.", skill: "Adjectives" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "I ___ a movie last night.", options: ["watch", "watches", "watched", "watching"], answer: "watched", explanation: "Simple Past: watched.", skill: "Past Tense" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um símbolo da paz?", options: ["Uma caveira", "Uma pomba branca", "Um raio", "Uma espada"], answer: "Uma pomba branca", explanation: "Símbolo universal de paz e harmonia.", skill: "Valores" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito às diferenças é fundamental para a:", options: ["Guerra", "Intolerância", "Convivência Social", "Desigualdade"], answer: "Convivência Social", explanation: "A tolerância permite que todos vivam bem juntos.", skill: "Respeito" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é considerado um local sagrado para os Judeus?", options: ["Muro das Lamentações", "Catedral da Sé", "Mesquita de Al-Aqsa", "Templo de Salomão"], answer: "Muro das Lamentações", explanation: "Local de oração e peregrinação em Jerusalém.", skill: "Locais Sagrados" },

  // --- ARTE ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é uma cor primária?", options: ["Verde", "Laranja", "Vermelho", "Roxo"], answer: "Vermelho", explanation: "As cores primárias são Vermelho, Amarelo e Azul.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo de pintura que utiliza pontos de cor lado a lado é o:", options: ["Cubismo", "Pontilhismo", "Surrealismo", "Pop Art"], answer: "Pontilhismo", explanation: "Técnica de Seurat e Signac.", skill: "Técnicas" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A arte de dobrar papel para criar objetos chama-se:", options: ["Mosaico", "Origami", "Escultura", "Grafite"], answer: "Origami", explanation: "Origami é uma tradição japonesa.", skill: "Expressão Visual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é conhecido como qual arte?", options: ["Sexta Arte", "Sétima Arte", "Oitava Arte", "Nona Arte"], answer: "Sétima Arte", explanation: "Denominação clássica para o cinema.", skill: "Audiovisual" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, quantos jogadores cada equipe tem em quadra?", options: ["5", "6", "11", "7"], answer: "5", explanation: "O futsal é jogado com 5 titulares por time.", skill: "Esportes" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O sistema de pontuação 'Set' é usado em qual esporte?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "As partidas de vôlei são divididas em sets (geralmente até 25 pontos).", skill: "Vôlei" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "A prática regular de exercícios ajuda a prevenir a:", options: ["Gripe", "Obesidade", "Miopia", "Fraturas"], answer: "Obesidade", explanation: "Ajuda no controle do peso e saúde metabólica.", skill: "Saúde" },

  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um Substantivo Próprio?", options: ["Cidade", "Brasil", "Pessoa", "Animal"], answer: "Brasil", explanation: "Nomes de países são substantivos próprios.", skill: "Classes de Palavras" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Orgulho' é:", options: ["Vaidade", "Modéstia", "Arrogância", "Prepotência"], answer: "Modéstia", explanation: "Modéstia é a qualidade de quem não se enaltece.", skill: "Vocabulário" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Na frase 'Eu viarei amanhã', o verbo está no:", options: ["Presente", "Pretérito", "Futuro", "Imperfeito"], answer: "Futuro", explanation: "Indica uma ação que ainda vai acontecer.", skill: "Verbos" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação exagerada (ex: 'Morri de rir')?", options: ["Metáfora", "Hipérbole", "Ironia", "Eufemismo"], answer: "Hipérbole", explanation: "Hipérbole é o exagero intencional.", skill: "Figuras de Linguagem" }
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
console.log(`Sucesso! Lote 41 de ${batch.length} questões adicionado.`);
