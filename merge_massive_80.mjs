import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3652;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote Massive 80 (Grande Volume Multidisciplinar) a partir do ID: ${startId}`);

const batch = [
  // --- PORTUGUÊS ---
  { grade: "6º", discipline: "Português", type: "multiple", text: "Qual destas palavras é um PRONOME?", options: ["Ele", "Cadeira", "Mesa", "Livro"], answer: "Ele", explanation: "Ele é um pronome pessoal do caso reto.", skill: "Classes" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "O antônimo de 'Bom' é:", options: ["Lindo", "Mau", "Grande", "Feliz"], answer: "Mau", explanation: "Mau com U é o oposto de bom.", skill: "Semântica" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A palavra 'Papel' no plural é:", options: ["Papéis", "Papels", "Papeles", "Papeis"], answer: "Papéis", explanation: "Palavras em -el fazem o plural em -éis.", skill: "Plural" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "Quem escreveu 'O Guarani'?", options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Monteiro Lobato"], answer: "José de Alencar", explanation: "Famoso romance do indianismo romântico.", skill: "Literatura" },
  { grade: "6º", discipline: "Português", type: "multiple", text: "O substantivo coletivo de 'Estrelas' é:", options: ["Alcateia", "Cardume", "Constelação", "Matilha"], answer: "Constelação", explanation: "Conjunto de estrelas.", skill: "Substantivos" },
  { grade: "7º", discipline: "Português", type: "multiple", text: "Na frase 'Ela é inteligente', qual o adjetivo?", options: ["Ela", "É", "Inteligente", "Não tem adjetivo"], answer: "Inteligente", explanation: "Atribui uma qualidade ao sujeito.", skill: "Adjetivos" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "A regra de acentuação de 'Oxítona' se aplica a:", options: ["Sábado", "Café", "Mesa", "Caderno"], answer: "Café", explanation: "Café é oxítona terminada em E.", skill: "Acentuação" },
  { grade: "9º", discipline: "Português", type: "multiple", text: "A conjunção 'Porém' indica ideia de:", options: ["Adição", "Conclusão", "Oposição", "Causa"], answer: "Oposição", explanation: "Porém é uma conjunção adversativa.", skill: "Conjunções" },

  // --- MATEMÁTICA ---
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 15 x 6?", options: ["80", "90", "100", "110"], answer: "90", explanation: "15 x 6 = 90.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 50% de 350?", options: ["150", "175", "180", "200"], answer: "175", explanation: "50% é a metade (350 / 2 = 175).", skill: "Porcentagem" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 144 é:", options: ["11", "12", "13", "14"], answer: "12", explanation: "12 x 12 = 144.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O valor de x na equação 10x = 1000 é:", options: ["10", "100", "1000", "50"], answer: "100", explanation: "x = 1000 / 10 = 100.", skill: "Equações" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O perímetro de um triângulo equilátero com lado 7cm é:", options: ["14cm", "21cm", "28cm", "35cm"], answer: "21cm", explanation: "Lado x 3 = 7 x 3 = 21.", skill: "Perímetro" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O número -8 é maior ou menor que -3?", options: ["Maior", "Menor", "Igual", "Nenhuma"], answer: "Menor", explanation: "Na reta numérica, -8 está mais à esquerda que -3.", skill: "Inteiros" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Quantos graus mede um ângulo reto?", options: ["45º", "90º", "180º", "360º"], answer: "90º", explanation: "Definição de ângulo reto.", skill: "Geometria" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A área de um quadrado de lado 9cm é:", options: ["18cm²", "36cm²", "81cm²", "90cm²"], answer: "81cm²", explanation: "Lado x Lado = 9 x 9 = 81.", skill: "Áreas" },

  // --- HISTÓRIA ---
  { grade: "6º", discipline: "História", type: "multiple", text: "A invenção da escrita marca o início de qual período?", options: ["Pré-História", "Idade Antiga", "Idade Média", "Idade Moderna"], answer: "Idade Antiga", explanation: "A escrita diferencia a História da Pré-História.", skill: "Conceitos" },
  { grade: "7º", discipline: "História", type: "multiple", text: "O sistema econômico da Idade Média Europeia foi o:", options: ["Feudalismo", "Capitalismo", "Mercantilismo", "Socialismo"], answer: "Feudalismo", explanation: "Baseado na posse da terra e vassalagem.", skill: "Feudalismo" },
  { grade: "8º", discipline: "História", type: "multiple", text: "Qual país liderou a Revolução Industrial no século XVIII?", options: ["França", "Inglaterra", "EUA", "Alemanha"], answer: "Inglaterra", explanation: "Possuía capital, ferro e carvão.", skill: "Industrialização" },
  { grade: "9º", discipline: "História", type: "multiple", text: "A 'Guerra Fria' foi uma disputa entre:", options: ["Brasil e Chile", "EUA e URSS", "Inglaterra e França", "China e Índia"], answer: "EUA e URSS", explanation: "Conflito ideológico entre Capitalismo e Socialismo.", skill: "Guerra Fria" },
  { grade: "6º", discipline: "História", type: "multiple", text: "As famosas Pirâmides de Gizé foram construídas pelos:", options: ["Romanos", "Gregos", "Egípcios", "Mesopotâmios"], answer: "Egípcios", explanation: "Serviam de túmulos para faraós.", skill: "Antiguidade" },
  { grade: "7º", discipline: "História", type: "multiple", text: "A Inconfidência Mineira (1789) buscava a separação do Brasil de:", options: ["Espanha", "França", "Portugal", "Inglaterra"], answer: "Portugal", explanation: "Movimento contra o pacto colonial.", skill: "Brasil Colônia" },

  // --- GEOGRAFIA ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama a linha que divide a Terra em Norte e Sul?", options: ["Equador", "Greenwich", "Câncer", "Capricórnio"], answer: "Equador", explanation: "Referência horizontal principal.", skill: "Cartografia" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual o maior país da América do Sul?", options: ["Argentina", "Chile", "Brasil", "Peru"], answer: "Brasil", explanation: "O Brasil ocupa quase 50% da América do Sul.", skill: "Território" },
  { grade: "8º", discipline: "Geografia", type: "multiple", text: "O processo de integração econômica mundial chama-se:", options: ["Globalização", "Urbanização", "Erosão", "Desertificação"], answer: "Globalização", explanation: "Integração via mercados e tecnologia.", skill: "Economia" },
  { grade: "9º", discipline: "Geografia", type: "multiple", text: "Qual fonte de energia é considerada NÃO renovável?", options: ["Solar", "Eólica", "Petróleo", "Biomassa"], answer: "Petróleo", explanation: "Leva milhões de anos para se formar.", skill: "Energia" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento de a Terra girar em torno de si mesma é a:", options: ["Translação", "Rotação", "Precessão", "Nutação"], answer: "Rotação", explanation: "Leva 24h e gera o dia/noite.", skill: "Dinâmica" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Em qual região brasileira fica o estado de Minas Gerais?", options: ["Sul", "Norte", "Sudeste", "Centro-Oeste"], answer: "Sudeste", explanation: "Junto com SP, RJ e ES.", skill: "Brasil" },

  // --- CIÊNCIAS ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual planeta é o mais próximo do Sol?", options: ["Vênus", "Terra", "Mercúrio", "Marte"], answer: "Mercúrio", explanation: "Primeiro planeta do sistema solar.", skill: "Astronomia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "As plantas produzem alimento através da:", options: ["Respiração", "Digestão", "Fotossíntese", "Transpiração"], answer: "Fotossíntese", explanation: "Usam luz solar para gerar energia.", skill: "Botânica" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O órgão que bombeia o sangue é o:", options: ["Pulmão", "Fígado", "Coração", "Cérebro"], answer: "Coração", explanation: "Principal motor do sistema circulatório.", skill: "Fisiologia" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual a fórmula química da Água?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O", explanation: "2 Hidrogênios e 1 Oxigênio.", skill: "Química" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Qual camada da Terra é a parte sólida externa?", options: ["Núcleo", "Manto", "Crosta", "Atmosfera"], answer: "Crosta", explanation: "Onde vivemos e plantamos.", skill: "Geologia" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Os animais que amamentam seus filhotes são os:", options: ["Répteis", "Anfíbios", "Aves", "Mamíferos"], answer: "Mamíferos", explanation: "Definição biológica baseada nas glândulas mamárias.", skill: "Zoologia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "A primeira lei de Newton é a Lei da:", options: ["Inércia", "Força", "Ação e Reação", "Gravidade"], answer: "Inércia", explanation: "Permanência no estado inicial.", skill: "Física" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Qual gás os humanos eliminam na expiração?", options: ["Oxigênio", "Nitrogênio", "Gás Carbônico (CO2)", "Hélio"], answer: "Gás Carbônico (CO2)", explanation: "Resíduo da respiração celular.", skill: "Respiratório" },

  // --- MULTIDISCIPLINAR EXTRA ---
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "How do you say 'cachorro' in English?", options: ["Cat", "Dog", "Bird", "Horse"], answer: "Dog", explanation: "Dog = Cachorro.", skill: "Vocab" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Quais são as cores primárias?", options: ["Verde, Roxo, Laranja", "Vermelho, Azul, Amarelo", "Preto e Branco", "Azul e Verde"], answer: "Vermelho, Azul, Amarelo", explanation: "Bases da teoria cromática.", skill: "Cores" },
  { grade: "8º", discipline: "Educação Física", type: "multiple", text: "Quantas pessoas jogam em um time de Vôlei em quadra?", options: ["5", "6", "11", "7"], answer: "6", explanation: "Regras da FIVB.", skill: "Vôlei" },
  { grade: "9º", discipline: "Ensino Religioso", type: "multiple", text: "Qual o livro sagrado do Islã?", options: ["Bíblia", "Alcorão", "Torá", "Vedas"], answer: "Alcorão", explanation: "Principal registro da fé muçulmana.", skill: "Livros" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 5 x 9?", options: ["40", "45", "50", "55"], answer: "45", explanation: "Tabuada do 5.", skill: "Tabuada" },
  { grade: "8º", discipline: "Português", type: "multiple", text: "Qual o coletivo de 'Estrelas'?", options: ["Cardume", "Bando", "Constelação", "Alcateia"], answer: "Constelação", explanation: "Conjunto de estrelas.", skill: "Coletivos" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "O sol é uma:", options: ["Planeta", "Cometa", "Estrela", "Buraco Negro"], answer: "Estrela", explanation: "Nossa estrela de referência.", skill: "Espaço" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual continente tem a maior população?", options: ["África", "América", "Ásia", "Europa"], answer: "Ásia", explanation: "Concentra quase 60% da população mundial.", skill: "Mundo" },
  { grade: "7º", discipline: "História", type: "multiple", text: "Quem chegou ao Brasil em 1500?", options: ["Colombo", "Cabral", "Américo", "Vasco"], answer: "Cabral", explanation: "Expedição oficial portuguesa.", skill: "Brasil" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Quem pintou a 'Monalisa'?", options: ["Dalí", "Picasso", "Da Vinci", "Michelangelo"], answer: "Da Vinci", explanation: "Gênio renascentista.", skill: "Arte" },
  { grade: "9º", discipline: "Inglês", type: "multiple", text: "The capital of USA is:", options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"], answer: "Washington, D.C.", explanation: "Capital federal.", skill: "Culture" }
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
console.log(`Sucesso! Super Batch 80 de ${batch.length} questões multidisciplinares adicionado.`);
