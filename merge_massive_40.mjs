import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2916;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 40 (Super Batch - Core & Humanas) a partir do ID: ${startId}`);

const batch = [
  // --- PORTUGUÊS (Volume) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME POSSESSIVO?", options: ["Nós", "Meu", "Aquele", "Quem"], answer: "Meu", explanation: "Meu indica posse (algo que me pertence).", skill: "Pronomes" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Médico' é classificada como:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "A antepenúltima sílaba é a tônica. Todas são acentuadas.", skill: "Acentuação" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Na frase 'O dia está lindo', qual a classe gramatical de 'lindo'?", options: ["Substantivo", "Verbo", "Adjetivo", "Preposição"], answer: "Adjetivo", explanation: "Lindo é uma característica atribuída ao dia.", skill: "Adjetivos" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem é o autor do poema 'I-Juca-Pirama'?", options: ["Machado de Assis", "José de Alencar", "Gonçalves Dias", "Castro Alves"], answer: "Gonçalves Dias", explanation: "Gonçalves Dias é um dos maiores nomes do indianismo romântico.", skill: "Literatura" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na voz passiva de 'O menino leu o livro', temos:", options: ["O livro foi lido pelo menino", "O menino lê o livro", "O livro lê o menino", "O menino fora ler o livro"], answer: "O livro foi lido pelo menino", explanation: "Transformação do objeto direto em sujeito paciente.", skill: "Vozes Verbais" },

  // --- MATEMÁTICA (Volume) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 144 dividido por 12?", options: ["10", "11", "12", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Operações" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 5% de 500?", options: ["5", "10", "25", "50"], answer: "25", explanation: "5% de 500 = 0,05 x 500 = 25.", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação x + 10 = 25 é:", options: ["5", "10", "15", "20"], answer: "15", explanation: "x = 25 - 10 = 15.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 90 graus é chamado de:", options: ["Agudo", "Obtuso", "Reto", "Raso"], answer: "Reto", explanation: "Ângulos retos são fundamentais na geometria.", skill: "Ângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a área de um retângulo com base 10cm e altura 5cm?", options: ["15cm²", "30cm²", "50cm²", "25cm²"], answer: "50cm²", explanation: "Área = Base x Altura = 10 x 5 = 50.", skill: "Geometria" },

  // --- HISTÓRIA (Volume) ---
  { grade: "6º", discipline: "História", type: "multiple", text: "Como se chama o sistema de escrita do Antigo Egito?", options: ["Alfabeto Latino", "Pictogramas", "Hieróglifos", "Cuneiforme"], answer: "Hieróglifos", explanation: "Escrita sagrada baseada em símbolos.", skill: "Egito" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O período 'Absolutismo' é marcado por reis com:", options: ["Poderes limitados", "Poderes totais e supremos", "Poderes apenas religiosos", "Nenhum poder real"], answer: "Poderes totais e supremos", explanation: "O rei concentrava todos os poderes em si.", skill: "Absolutismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "A independência dos EUA foi inspirada em qual movimento?", options: ["Socialismo", "Iluminismo", "Cubismo", "Feudalismo"], answer: "Iluminismo", explanation: "Ideais de liberdade e direitos individuais.", skill: "Revoluções" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Era Vargas' no Brasil terminou oficialmente em 1945, mas ele voltou ao poder em qual ano?", options: ["1946", "1951", "1960", "1964"], answer: "1951", explanation: "Vargas voltou pelo voto direto em 1951.", skill: "Brasil República" },

  // --- GEOGRAFIA (Volume) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Quantos planetas existem no sistema solar oficial?", options: ["7", "8", "9", "10"], answer: "8", explanation: "Plutão é considerado um planeta anão desde 2006.", skill: "Astronomia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A capital de Minas Gerais é:", options: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília"], answer: "Belo Horizonte", explanation: "Sede administrativa do estado de MG.", skill: "Minas Gerais" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "Qual destes países faz parte da América do Norte?", options: ["Argentina", "México", "Chile", "Brasil"], answer: "México", explanation: "O México compõe a América do Norte junto a EUA e Canadá.", skill: "Continentes" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O fenômeno do buraco na camada de ozônio é agravado pelo gás:", options: ["Oxigênio", "Nitrogênio", "CFC (Clorofluorcarboneto)", "Gás Helio"], answer: "CFC (Clorofluorcarboneto)", explanation: "O CFC destrói as moléculas de ozônio na estratosfera.", skill: "Impactos Ambientais" }
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
console.log(`Sucesso! Super Batch de ${batch.length} questões adicionado.`);
