import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2527;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 9 (Volume Acelerado) a partir do ID: ${startId}`);

const batch = [
  // --- MATEMÁTICA 6º e 7º ANO (Volume) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 7 x 8?", options: ["48", "54", "56", "64"], answer: "56", explanation: "Tabuada básica.", skill: "Operações Fundamentais" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 1000 - 350?", options: ["650", "750", "550", "450"], answer: "650", explanation: "Subtração simples.", skill: "Operações Fundamentais" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um ângulo de 45º é considerado:", options: ["Agudo", "Obtuso", "Reto", "Raso"], answer: "Agudo", explanation: "Menor que 90º.", skill: "Ângulos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual a metade de 150?", options: ["50", "75", "100", "25"], answer: "75", explanation: "150 / 2 = 75.", skill: "Divisão" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Calcule 10% de 500.", options: ["10", "50", "100", "25"], answer: "50", explanation: "10/100 * 500 = 50.", skill: "Porcentagem" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de (-2) + (+10)?", options: ["-12", "8", "-8", "12"], answer: "8", explanation: "10 - 2 = 8.", skill: "Números Inteiros" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 81 é:", options: ["7", "8", "9", "10"], answer: "9", explanation: "9 x 9 = 81.", skill: "Radiciação" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O que é um triângulo isósceles?", options: ["Três lados iguais", "Dois lados iguais", "Todos os lados diferentes", "Nenhuma das anteriores"], answer: "Dois lados iguais", explanation: "Isósceles tem dois lados de mesma medida.", skill: "Geometria" },
  
  // --- MATEMÁTICA 8º e 9º ANO (Volume) ---
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 2 elevado a 4 (2⁴)?", options: ["8", "16", "32", "64"], answer: "16", explanation: "2x2x2x2 = 16.", skill: "Potenciação" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A soma de um número com seu dobro é 15. Qual é o número?", options: ["3", "5", "7", "10"], answer: "5", explanation: "x + 2x = 15 => 3x = 15 => x = 5.", skill: "Equações" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a função que representa uma reta no plano cartesiano?", options: ["f(x) = ax + b", "f(x) = ax² + bx + c", "f(x) = sen(x)", "f(x) = 1/x"], answer: "f(x) = ax + b", explanation: "Função Afim ou de 1º Grau.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O Teorema de Pitágoras diz que h² = c1² + c2². O que é 'h'?", options: ["Altura", "Hipotenusa", "Hectare", "Horizontal"], answer: "Hipotenusa", explanation: "O maior lado do triângulo retângulo.", skill: "Teorema de Pitágoras" },

  // --- PORTUGUÊS (Volume) ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual é o coletivo de 'Ilhas'?", options: ["Frota", "Arquipélago", "Constelação", "Matilha"], answer: "Arquipélago", explanation: "Conjunto de ilhas.", skill: "Substantivos" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um VERBO?", options: ["Casa", "Feliz", "Correr", "Azul"], answer: "Correr", explanation: "Indica uma ação.", skill: "Verbos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Eu e ele fomos', o sujeito é:", options: ["Simples", "Composto", "Oculto", "Inexistente"], answer: "Composto", explanation: "Possui dois núcleos: 'Eu' e 'ele'.", skill: "Sintaxe" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "A palavra 'Pássaro' é acentuada por ser:", options: ["Oxítona", "Paroxítona", "Proparoxítona", "Monossílaba"], answer: "Proparoxítona", explanation: "Antepenúltima sílaba tônica.", skill: "Acentuação" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual figura de linguagem é uma comparação direta (ex: 'Ele é forte como um touro')?", options: ["Metáfora", "Símile (Comparação)", "Hipérbole", "Ironia"], answer: "Símile (Comparação)", explanation: "Usa o conectivo 'como'.", skill: "Figuras de Linguagem" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "O oposto de 'Eufemismo' (suavizar) seria o 'Disfemismo' (chulo), mas o exagero é a:", options: ["Metonímia", "Hipérbole", "Antítese", "Pleonasmo"], answer: "Hipérbole", explanation: "Exagero intencional.", skill: "Figuras de Linguagem" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem é o autor de 'A Moreninha'?", options: ["Machado de Assis", "Joaquim Manuel de Macedo", "Álvares de Azevedo", "Castro Alves"], answer: "Joaquim Manuel de Macedo", explanation: "Marco do Romantismo no Brasil.", skill: "Literatura" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A oração 'Mal cheguei, o telefone tocou' indica:", options: ["Causa", "Tempo", "Consequência", "Oposição"], answer: "Tempo", explanation: "Indica o momento em que a ação ocorreu.", skill: "Gramática" },

  // --- CIÊNCIAS/GEO (Volume) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Os seres humanos pertencem ao grupo dos:", options: ["Anfíbios", "Répteis", "Mamíferos", "Peixes"], answer: "Mamíferos", explanation: "Possuímos glândulas mamárias e pelos.", skill: "Biologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O calor do Sol chega à Terra através da:", options: ["Condução", "Convecção", "Irradiação", "Vibração"], answer: "Irradiação", explanation: "Propagação por ondas eletromagnéticas no vácuo.", skill: "Física" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual dos planetas abaixo é conhecido como o 'Planeta Vermelho'?", options: ["Vênus", "Marte", "Júpiter", "Saturno"], answer: "Marte", explanation: "Devido ao óxido de ferro em sua superfície.", skill: "Astronomia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a fórmula química da Água?", options: ["CO2", "H2O", "O2", "NaCl"], answer: "H2O", explanation: "Dois átomos de hidrogênio e um de oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual a capital do Brasil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: "Brasília", explanation: "Inaugurada em 1960 no Planalto Central.", skill: "Geografia do Brasil" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior oceano do planeta?", options: ["Atlântico", "Índico", "Pacífico", "Ártico"], answer: "Pacífico", explanation: "Cobre um terço da superfície terrestre.", skill: "Geografia Geral" }
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
console.log(`Sucesso! ${batch.length} questões massivas (Lote 9) adicionadas.`);
