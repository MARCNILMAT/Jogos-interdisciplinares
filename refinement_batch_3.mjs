import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3925;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote de Refinamento 3 (Targeted Filling) a partir do ID: ${startId}`);

const batch = [
  // --- ARTES (7º) - Cores e Pigmentos (8 questions to reach 10) ---
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Quais são as três cores primárias no sistema pigmento (RYB)?", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Preto, Branco, Cinza", "Azul, Ciano, Magenta"], answer: "Vermelho, Azul, Amarelo", explanation: "Cores primárias não podem ser obtidas por mistura.", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A mistura de azul com amarelo resulta em qual cor secundária?", options: ["Roxo", "Laranja", "Verde", "Marrom"], answer: "Verde", explanation: "Azul + Amarelo = Verde.", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "As cores que transmitem sensações de calor (como vermelho e laranja) são chamadas de:", options: ["Cores Frias", "Cores Quentes", "Cores Neutras", "Cores Pastel"], answer: "Cores Quentes", explanation: "Associadas ao sol e ao fogo.", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Qual destas é considerada uma cor fria?", options: ["Amarelo", "Laranja", "Azul", "Vermelho"], answer: "Azul", explanation: "Cores frias transmitem calma e frescor.", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "A cor Violeta (Roxo) é formada pela mistura de:", options: ["Azul e Verde", "Vermelho e Amarelo", "Vermelho e Azul", "Branco e Preto"], answer: "Vermelho e Azul", explanation: "Mistura de duas cores primárias.", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O que são as 'Cores Complementares' no círculo cromático?", options: ["Cores iguais", "Cores opostas que se neutralizam ou realçam", "Cores vizinhas", "Apenas tons de cinza"], answer: "Cores opostas que se neutralizam ou realçam", explanation: "Exemplo: Vermelho e Verde.", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "O uso de apenas um matiz com diferentes tonalidades e brilhos chama-se:", options: ["Cromatismo", "Policromatismo", "Monocromatismo", "Diferenciação"], answer: "Monocromatismo", explanation: "Variação de uma única cor (escala monocromática).", skill: "Cores e Pigmentos" },
  { grade: "7º", discipline: "Arte", type: "multiple", text: "Cores como preto, branco e cinza são classificadas como:", options: ["Cores Primárias", "Cores Secundárias", "Cores Neutras", "Cores Terciárias"], answer: "Cores Neutras", explanation: "Têm pouca reflexão ou reflexão total da luz.", skill: "Cores e Pigmentos" },

  // --- ARTES (8º) - Fotografia e Lambe-lambe (7 questions) ---
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O 'Lambe-lambe' é uma técnica de Street Art que consiste em:", options: ["Pintar com spray", "Colar cartazes de papel nos muros", "Esculpir em ferro", "Fazer pixação de letras"], answer: "Colar cartazes de papel nos muros", explanation: "Utiliza cola caseira ou industrial para fixar arte em papel.", skill: "Fotografia e Lambe-lambe" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual elemento é fundamental para a existência da Fotografia?", options: ["Tinta", "Luz", "Argila", "Pincel"], answer: "Luz", explanation: "Fotografia significa 'escrever com a luz'.", skill: "Fotografia e Lambe-lambe" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O Lambe-lambe costuma levar mensagens de qual tipo para as ruas?", options: ["Apenas propaganda comercial", "Poesia, protesto ou arte visual", "Receitas de bolo", "Avisos da prefeitura"], answer: "Poesia, protesto ou arte visual", explanation: "É uma forma democrática de ocupar o espaço público.", skill: "Fotografia e Lambe-lambe" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A primeira fotografia da história levou cerca de 8 horas de exposição. Quem foi o autor?", options: ["Picasso", "Joseph Niépce", "Leonardo da Vinci", "Santos Dumont"], answer: "Joseph Niépce", explanation: "Em 1826, ele fixou a primeira imagem em uma placa de estanho.", skill: "Fotografia e Lambe-lambe" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Na fotografia digital, o sensor substitui qual elemento da fotografia analógica?", options: ["A lente", "O flash", "O filme (ou rolo)", "O botão"], answer: "O filme (ou rolo)", explanation: "O sensor captura a luz eletronicamente.", skill: "Fotografia e Lambe-lambe" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O termo 'Enquadramento' na fotografia refere-se a:", options: ["O preço da foto", "O que o fotógrafo decide incluir no visor", "A moldura de madeira", "O tempo de revelação"], answer: "O que o fotógrafo decide incluir no visor", explanation: "É a composição da cena.", skill: "Fotografia e Lambe-lambe" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual destas é uma característica do Lambe-lambe?", options: ["Ser eterno e indestrutível", "Ser efêmero (dura pouco tempo devido ao clima)", "Ser proibido em todo o mundo", "Ser feito apenas em telas de luxo"], answer: "Ser efêmero (dura pouco tempo devido ao clima)", explanation: "A exposição à chuva e sol desgasta o papel rapdamente.", skill: "Fotografia e Lambe-lambe" },

  // --- MATEMÁTICA (6º) - Frações e Porcentagem (10 questions) ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Se uma pizza foi dividida em 8 fatias e você comeu 2, qual a fração restante?", options: ["2/8", "4/8", "6/8", "8/8"], answer: "6/8", explanation: "8 total - 2 comidas = 6 restantes (6/8).", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 50% de R$ 120,00?", options: ["R$ 30", "R$ 50", "R$ 60", "R$ 70"], answer: "R$ 60", explanation: "50% representa a metade.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "No número fracionário 3/4, o número 4 é o:", options: ["Numerador", "Denominador", "Resto", "Produto"], answer: "Denominador", explanation: "Indica em quantas partes o todo foi dividido.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Transformando 1/4 em porcentagem, temos:", options: ["10%", "25%", "40%", "50%"], answer: "25%", explanation: "1 dividido por 4 é 0,25 (ou 25%).", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 1/2 + 1/2?", options: ["1/4", "1/2", "1 (ou 2/2)", "2/4"], answer: "1 (ou 2/2)", explanation: "Duas metades formam um inteiro.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual fração é EQUIVALENTE a 1/2?", options: ["2/3", "4/8", "3/5", "1/4"], answer: "4/8", explanation: "Dividindo 4 e 8 por 4, voltamos a 1/2.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Em uma turma de 10 alunos, 3 são meninos. Qual a porcentagem de meninos?", options: ["3%", "10%", "30%", "60%"], answer: "30%", explanation: "3 em 10 equivale a 30 em 100.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um desconto de 10% sobre R$ 100,00 é de quantos reais?", options: ["R$ 1", "R$ 5", "R$ 10", "R$ 20"], answer: "R$ 10", explanation: "10% de 100 é 10.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual destas frações representa um número maior que 1 (inteiro)?", options: ["1/2", "3/4", "5/4", "0/8"], answer: "5/4", explanation: "O numerador é maior que o denominador.", skill: "Frações e Porcentagem" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 75% de 100?", options: ["25", "50", "75", "100"], answer: "75", explanation: "75 centésimos de 100.", skill: "Frações e Porcentagem" },

  // --- INGLÊS (6º) - Numbers and Colors (6 questions) ---
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How do you say 'Amarelo' in English?", options: ["Blue", "Yellow", "Red", "Green"], answer: "Yellow", explanation: "Yellow = Amarelo.", skill: "Numbers and Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Which number comes after 'Nine'?", options: ["Seven", "Eight", "Ten", "Eleven"], answer: "Ten", explanation: "Nine (9), Ten (10).", skill: "Numbers and Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "The result of 'Five + Five' is:", options: ["Eight", "Nine", "Ten", "Twelve"], answer: "Ten", explanation: "5 + 5 = 10.", skill: "Numbers and Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "What color is the sky on a sunny day?", options: ["Black", "Orange", "Blue", "Pink"], answer: "Blue", explanation: "Blue = Azul.", skill: "Numbers and Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "Choose the color that represents the Brazilian Forest in the flag:", options: ["Yellow", "Green", "White", "Blue"], answer: "Green", explanation: "Green = Verde.", skill: "Numbers and Colors" },
  { grade: "6º", discipline: "Inglês", type: "multiple", text: "How many fingers do you have in one hand?", options: ["Four", "Five", "Six", "Two"], answer: "Five", explanation: "Five = 5.", skill: "Numbers and Colors" },

  // --- HISTÓRIA (7º) - Navegações Portuguesas (5 questions) ---
  { grade: "7º", discipline: "História", type: "multiple", text: "Qual era o principal objetivo econômico das Grandes Navegações Portuguesas?", options: ["Descobrir o gelo", "Chegar às Índias para comprar especiarias", "Capturar dinossauros", "Mapear a Antártida"], answer: "Chegar às Índias para comprar especiarias", explanation: "As especiarias (cravo, canela) valiam muito na Europa.", skill: "Navegações Portuguesas" },
  { grade: "7º", discipline: "História", type: "multiple", text: "Qual instrumento foi adaptado e melhorado pelos portugueses para orientação no mar?", options: ["Telefone", "Bússola (e Astrolábio)", "Radar", "Internet"], answer: "Bússola (e Astrolábio)", explanation: "Essenciais para navegar longe da costa.", skill: "Navegações Portuguesas" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O navegador que comandou a esquadra que chegou ao Brasil em 1500 foi:", options: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Américo Vespúcio"], answer: "Pedro Álvares Cabral", explanation: "Expedição oficial portuguesa que tomou posse das terras.", skill: "Navegações Portuguesas" },
  { grade: "7º", discipline: "História", type: "multiple", text: "Em 1498, Vasco da Gama conseguiu realizar a façanha de:", options: ["Atravessar o deserto", "Chegar às Índias contornando a África", "Dar a volta ao mundo primeiro", "Descobrir o Brasil"], answer: "Chegar às Índias contornando a África", explanation: "Marco fundamental da rota comercial portuguesa.", skill: "Navegações Portuguesas" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O 'Tratado de Tordesilhas' serviu para:", options: ["Terminar uma guerra na Ásia", "Dividir as novas terras entre Portugal e Espanha", "Proibir o comércio de sal", "Criar o país Brasil"], answer: "Dividir as novas terras entre Portugal e Espanha", explanation: "Divisão das zonas de exploração no Novo Mundo.", skill: "Navegações Portuguesas" }
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
console.log(`Sucesso! Sprint de Refinamento 3 concluído com ${batch.length} questões direcionadas.`);
