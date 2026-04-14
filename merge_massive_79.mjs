import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3631;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 79 (Multidisciplinar - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- CIÊNCIAS (6º ao 9º) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é o maior do Sistema Solar?", options: ["Terra", "Marte", "Júpiter", "Saturno"], answer: "Júpiter", explanation: "Júpiter é um gigante gasoso com massa enorme.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os animais que possuem coluna vertebral pertencem ao grupo dos:", options: ["Vertebrados", "Invertebrados", "Moluscos", "Anelídeos"], answer: "Vertebrados", explanation: "Definição biológica baseada na estrutura óssea.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A digestão dos alimentos começa em qual órgão?", options: ["Estômago", "Boca", "Intestino", "Esôfago"], answer: "Boca", explanation: "Começa com a mastigação e ação da saliva.", skill: "Corpo Humano" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a 1ª Lei de Newton?", options: ["Lei da Inércia", "Lei da Força", "Lei da Ação e Reação", "Lei da Gravidade"], answer: "Lei da Inércia", explanation: "Um corpo em repouso tende a permanecer em repouso.", skill: "Física" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O ar é uma mistura de gases composta principalmente por:", options: ["Oxigênio", "Gás Carbônico", "Nitrogênio", "Hidrogênio"], answer: "Nitrogênio", explanation: "O nitrogênio compõe cerca de 78% da nossa atmosfera.", skill: "Atmosfera" },

  // --- ARTE (6º ao 9º) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é uma cor secundária?", options: ["Azul", "Vermelho", "Verde", "Amarelo"], answer: "Verde", explanation: "Resulta da mistura de azul e amarelo.", skill: "Cores" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O estilo artístico que utiliza formas geométricas e fragmentação da imagem é o:", options: ["Cubismo", "Realismo", "Impressionismo", "Renascimento"], answer: "Cubismo", explanation: "Famoso movimento liderado por Picasso.", skill: "Estilos" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A técnica de pintar em paredes úmidas (frescas) é o:", options: ["Óleo", "Afresco", "Aquarela", "Grafite"], answer: "Afresco", explanation: "Muito usado em igrejas no Renascimento.", skill: "Técnicas" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é frequentemente chamado de:", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Classificação das expressões artísticas.", skill: "Audiovisual" },

  // --- INGLÊS (6º ao 9º) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Como se diz 'cachorro' em Inglês?", options: ["Cat", "Dog", "Bird", "Horse"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Animals" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "How do you say 'obrigado'?", options: ["Please", "Sorry", "Thank you", "Hello"], answer: "Thank you", explanation: "Expressão padrão de gratidão.", skill: "Vocabulary" },
  { grade: "8º", discipline: "Inglês", type: "multiple", text: "The opposite of 'Small' is:", options: ["Little", "Big", "Fast", "Cold"], answer: "Big", explanation: "Small (pequeno) x Big (grande).", skill: "Adjectives" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "I ___ to school every day.", options: ["go", "goes", "went", "going"], answer: "go", explanation: "Presente simples para rotinas.", skill: "Simple Present" },

  // --- EDUCAÇÃO FÍSICA ---
  { grade: "6º", discipline: "Educação Física", type: "multiple", text: "No Futsal, quantos jogadores cada equipe tem em quadra?", options: ["5", "6", "11", "7"], answer: "5", explanation: "Regra oficial do futebol de salão.", skill: "Futsal" },
  { grade: "7º", discipline: "Educação Física", type: "multiple", text: "O 'Saque' é fundamental para iniciar o ponto em qual esporte?", options: ["Futebol", "Basquete", "Vôlei", "Handebol"], answer: "Vôlei", explanation: "Começa com o saque por trás da linha de fundo.", skill: "Voleibol" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Para ter saúde, quantos minutos de atividade física diária são recomendados (médio)?", options: ["10 min", "30-60 min", "5 horas", "Não precisa"], answer: "30-60 min", explanation: "Recomendação básica para manter o condicionamento.", skill: "Bem-estar" },
  { grade: "9º", discipline: "Educação Física", type: "multiple", text: "As Olimpíadas da Era Moderna começaram em qual cidade?", options: ["Paris", "Londres", "Atenas", "Roma"], answer: "Atenas", explanation: "Atenas 1896 foi a primeira edição moderna.", skill: "Olimpismo" },

  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Bíblia", "Alcorão", "Torá", "Vedas"], answer: "Alcorão", explanation: "Contém as revelações de Alá ao profeta.", skill: "Religiões" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito a todas as formas de crença é base da:", options: ["Intolerância", "Cidadania e Paz", "Exclusão", "Guerra"], answer: "Cidadania e Paz", explanation: "Promove a harmonia social.", skill: "Valores" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "O Brasil é um Estado Laico. Isso significa que:", options: ["Tem uma religião oficial", "Não tem religião oficial e respeita todas", "Proíbe as religiões", "Só aceita uma fé"], answer: "Não tem religião oficial e respeita todas", explanation: "Garantia da Constituição.", skill: "Direitos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "A prática de ajudar o próximo é comum em quais religiões?", options: ["Apenas uma", "Quase todas as grandes religiões", "Nenhuma", "Apenas no Egito"], answer: "Quase todas as grandes religiões", explanation: "Valores universais de caridade.", skill: "Ética" }
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
console.log(`Sucesso! Super Batch 79 de ${batch.length} questões multidisciplinares adicionado.`);
