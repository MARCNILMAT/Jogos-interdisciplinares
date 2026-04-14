import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2904;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 39 (Religioso e Geografia - Volume) a partir do ID: ${startId}`);

const batch = [
  // --- ENSINO RELIGIOSO ---
  { grade: "6º", discipline: "Ensino Religioso", type: "multiple", text: "Qual destes é um livro sagrado para o Islamismo?", options: ["Alcorão", "Torá", "Bíblia", "Tripitaka"], answer: "Alcorão", explanation: "O Alcorão contém as revelações de Alá ao profeta Maomé.", skill: "Livros Sagrados" },
  { grade: "7º", discipline: "Ensino Religioso", type: "multiple", text: "A 'Regra de Ouro' presente em muitas religiões diz basicamente:", options: ["Busque a riqueza acima de tudo", "Trate os outros como gostaria de ser tratado", "Ignore os inimigos", "Siga apenas a sua vontade"], answer: "Trate os outros como gostaria de ser tratado", explanation: "Princípio universal de ética e reciprocidade.", skill: "Ética" },
  { grade: "8º", discipline: "Ensino Religioso", type: "multiple", text: "A liberdade de crença no Brasil é um direito garantido pela:", options: ["Polícia", "Empresa de Luz", "Constituição Federal", "Televisão"], answer: "Constituição Federal", explanation: "Base do estado laico brasileiro.", skill: "Direitos Humanos" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "O respeito à diversidade religiosa é importante para:", options: ["Gerar conflitos", "Dividir as pessoas", "Promover a convivência pacífica", "Acabar com as religiões"], answer: "Promover a convivência pacífica", explanation: "A tolerância é pilar da democracia.", skill: "Tolerância" },

  // --- GEOGRAFIA ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento que a Terra faz em torno de seu próprio eixo chama-se:", options: ["Translação", "Rotação", "Nutação", "Oscilação"], answer: "Rotação", explanation: "Dura 24 horas e gera o dia e a noite.", skill: "Movimentos da Terra" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A maior floresta tropical do mundo, localizada em grande parte no Norte do Brasil, é a:", options: ["Mata Atlântica", "Serra do Mar", "Floresta Amazônica", "Caatinga"], answer: "Floresta Amazônica", explanation: "Essencial para o equilíbrio climático global.", skill: "Amazônia" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "Qual país é a principal potência econômica e cultural da América do Norte?", options: ["México", "Canadá", "EUA", "Cuba"], answer: "EUA", explanation: "Principal PIB e influência global.", skill: "Geopolítica" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica mundial através do comércio e internet é a:", options: ["Globalização", "Urbanização", "Industralização", "Agronegócio"], answer: "Globalização", explanation: "Conecta os mercados e culturas globalmente.", skill: "Mundo Atual" },

  // --- CIÊNCIAS/HUMANAS EXTRA ---
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual destes é o sistema responsável pela reprodução humana?", options: ["Sistema Nervoso", "Sistema Reprodutor", "Sistema Circulatório", "Sistema Respiratório"], answer: "Sistema Reprodutor", explanation: "Permite a continuidade da espécie.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "H2O é a fórmula química de qual substância essencial?", options: ["Sal", "Água", "Ar", "Açúcar"], answer: "Água", explanation: "Duas moléculas de Hidrogênio e uma de Oxigênio.", skill: "Química" },
  { grade: "8º", discipline: "História", type: "multiple", text: "O grito do Ipiranga('Independência ou Morte') foi dado por:", options: ["Pedro Álvares Cabral", "Dom Pedro I", "Tiradentes", "Zumbi"], answer: "Dom Pedro I", explanation: "Marco da independência em 7 de setembro de 1822.", skill: "Independência" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A principal mão de obra utilizada no Brasil Colonial para o açúcar foi de:", options: ["Imigrantes Japoneses", "Trabalhadores Assalariados", "Pessoas escravizadas trazidas da África", "Senhores de Engenho"], answer: "Pessoas escravizadas trazidas da África", explanation: "Base degradante da economia colonial por séculos.", skill: "Brasil Colônia" }
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
console.log(`Sucesso! ${batch.length} questões (Lote 39) adicionadas.`);
