import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 2409;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Iniciando lote massivo a partir do ID: ${startId}`);

const batch = [
  // --- GEOGRAFIA 6º ANO: MOVIMENTOS E ESTAÇÕES (Lacunas Grandes) ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O movimento que a Terra realiza ao redor de seu próprio eixo, durando aproximadamente 24 horas, é a:", options: ["Translação", "Rotação", "Precessão", "Nutação"], answer: "Rotação", explanation: "A rotação é responsável pela sucessão dos dias e das noites.", skill: "Movimentos da Terra" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Qual movimento da Terra, realizado ao redor do Sol, é responsável pelas Estações do Ano?", options: ["Rotação", "Translação", "Evolução", "Órbita Circular"], answer: "Translação", explanation: "A translação leva cerca de 365 dias e 6 horas para ser concluída.", skill: "Movimentos da Terra" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O fenômeno do Solstício marca o início de quais estações?", options: ["Primavera e Outono", "Verão e Inverno", "Verão e Primavera", "Inverno e Outono"], answer: "Verão e Inverno", explanation: "No solstício, um dos hemisférios recebe luz solar de forma mais direta.", skill: "Estações do Ano" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Quando o dia e a noite possuem exatamente a mesma duração em todo o planeta, ocorre o:", options: ["Solstício", "Equinócio", "Periélio", "Afélio"], answer: "Equinócio", explanation: "Equinócio significa 'noites iguais' e marca o início da Primavera ou Outono.", skill: "Estações do Ano" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "A inclinação do eixo da Terra em relação ao plano de sua órbita é de aproximadamente:", options: ["10º", "23,5º", "45º", "90º"], answer: "23,5º", explanation: "Essa inclinação é o que permite que a luz solar atinja os hemisférios de forma diferente ao longo do ano.", skill: "Movimentos da Terra" },
  
  // --- GEOGRAFIA 6º ANO: RELEVO E HIDROGRAFIA ---
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "As formas de relevo caracterizadas por grandes elevações e picos pontiagudos são as:", options: ["Planícies", "Depressões", "Montanhas", "Chapadas"], answer: "Montanhas", explanation: "Montanhas são as maiores elevações da superfície terrestre.", skill: "Formas de Relevo" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Uma área plana localizada em baixas altitudes, geralmente formada por sedimentos, é uma:", options: ["Montanha", "Planalto", "Planície", "Cordilheira"], answer: "Planície", explanation: "Planícies são comuns em regiões litorâneas ou próximas a grandes rios.", skill: "Formas de Relevo" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O processo de desgaste das rochas e do solo pela ação do vento, água ou seres vivos é a:", options: ["Sedimentação", "Erosão", "Solidificação", "Cristalização"], answer: "Erosão", explanation: "A erosão molda constantemente as formas do relevo terrestre.", skill: "Formas de Relevo" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "Como se chama o local onde um rio nasce?", options: ["Foz", "Afluente", "Nascente", "Leito"], answer: "Nascente", explanation: "A nascente é o ponto de origem das águas de um rio.", skill: "Hidrografia" },
  { grade: "6º", discipline: "Geografia", type: "multiple", text: "O rio principal e todos os seus afluentes formam uma:", options: ["Correnteza", "Bacia Hidrográfica", "Cascata", "Lagoa"], answer: "Bacia Hidrográfica", explanation: "Drenagem de uma área para um rio principal e seus tributários.", skill: "Hidrografia" },

  // --- GEOGRAFIA 7º ANO: TERRITÓRIO E REGIONALIZAÇÃO ---
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O Brasil é dividido oficialmente pelo IBGE em quantas grandes regiões?", options: ["3", "4", "5", "6"], answer: "5", explanation: "Norte, Nordeste, Centro-Oeste, Sudeste e Sul.", skill: "Divisão Regional do Brasil" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual é a maior região brasileira em extensão territorial, abrigando a maior parte da Floresta Amazônica?", options: ["Nordeste", "Centro-Oeste", "Norte", "Sudeste"], answer: "Norte", explanation: "A região Norte ocupa quase 45% do território nacional.", skill: "Divisão Regional do Brasil" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "Qual região é a mais populosa e industrializada do Brasil?", options: ["Sul", "Nordeste", "Sudeste", "Centro-Oeste"], answer: "Sudeste", explanation: "O Sudeste concentra os maiores PIBs e populações (SP, RJ, MG, ES).", skill: "Divisão Regional do Brasil" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "O bioma Pantanal está localizado principalmente na região:", options: ["Norte", "Centro-Oeste", "Sul", "Nordeste"], answer: "Centro-Oeste", explanation: "O Pantanal ocupa partes do Mato Grosso e Mato Grosso do Sul.", skill: "Biomas Brasileiros" },
  { grade: "7º", discipline: "Geografia", type: "multiple", text: "A vegetação de restinga e os manguezais são típicos de qual ecossistema?", options: ["Cerrado", "Zonas Costeiras (Mata Atlântica)", "Caatinga", "Pampas"], answer: "Zonas Costeiras (Mata Atlântica)", explanation: "São ecossistemas de transição entre a terra e o mar.", skill: "Biomas Brasileiros" },

  // --- CIÊNCIAS 7º ANO: MÁQUINAS E CALOR ---
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Um abridor de garrafas e um quebra-nozes são exemplos de qual máquina simples?", options: ["Polia", "Alavanca", "Plano Inclinado", "Parafuso"], answer: "Alavanca", explanation: "Usam um ponto de apoio para multiplicar a força aplicada.", skill: "Máquinas Simples" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "A máquina simples que consiste em uma roda com um sulco por onde passa uma corda é a:", options: ["Polia (ou Roldana)", "Cunha", "Alavanca", "Rampa"], answer: "Polia (ou Roldana)", explanation: "Polias facilitam o levantamento de objetos pesados.", skill: "Máquinas Simples" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "O processo de transferência de calor que ocorre em sólidos, de partícula para partícula, é a:", options: ["Convecção", "Condução", "Irradiação", "Isolamento"], answer: "Condução", explanation: "Metais são ótimos condutores térmicos por esse motivo.", skill: "Propagação do Calor" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "A transferência de calor através de correntes em fluidos (líquidos e gases) é a:", options: ["Condução", "Convecção", "Irradiação", "Reflexão"], answer: "Convecção", explanation: "É o que acontece quando a água ferve ou o ar condicionado gela um quarto.", skill: "Propagação do Calor" },
  { grade: "7º", discipline: "Ciências", type: "multiple", text: "Qual destes materiais é considerado um bom 'Isolante Térmico'?", options: ["Alumínio", "Cobre", "Isopor", "Ferro"], answer: "Isopor", explanation: "Materiais que dificultam a passagem do calor são isolantes.", skill: "Propagação do Calor" },

  // --- CIÊNCIAS 8º ANO: SISTEMAS E ENERGIA ---
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual sistema elimina os resíduos tóxicos produzidos pelas células através da urina?", options: ["Sistema Digestório", "Sistema Excretor (Urinário)", "Sistema Respiratório", "Sistema Linfático"], answer: "Sistema Excretor (Urinário)", explanation: "Os rins filtram o sangue e produzem a urina.", skill: "Corpo Humano" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O órgão responsável por processar os estímulos dos sentidos e coordenar o corpo é o:", options: ["Coração", "Fígado", "Encéfalo (Cérebro)", "Estômago"], answer: "Encéfalo (Cérebro)", explanation: "Parte central do sistema nervoso.", skill: "Corpo Humano" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "O tipo de energia obtida a partir do calor interno da Terra é a:", options: ["Energia Solar", "Energia Eólica", "Energia Geotérmica", "Biomassa"], answer: "Energia Geotérmica", explanation: "Vem do vapor e calor das profundezas do planeta.", skill: "Fontes de Energia" },
  { grade: "8º", discipline: "Ciências", type: "multiple", text: "Qual fonte de energia é considerada renovável e usa a força dos ventos?", options: ["Carvão", "Eólica", "Petróleo", "Nuclear"], answer: "Eólica", explanation: "Usa aerogeradores para transformar vento em eletricidade.", skill: "Fontes de Energia" },

  // --- CIÊNCIAS 9º ANO: QUÍMICA E FÍSICA ---
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Um elemento químico é definido essencialmente pelo seu:", options: ["Número de elétrons", "Número de nêutrons", "Número atômico (prótons)", "Tamanho do núcleo"], answer: "Número atômico (prótons)", explanation: "Prótons definem a identidade do elemento.", skill: "Estrutura Atômica" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "Quando uma substância passa do estado sólido diretamente para o gasoso, ocorre a:", options: ["Fusão", "Sublimação", "Condensação", "Solidificação"], answer: "Sublimação", explanation: "Exemplo: Gelo seco ou naftalina.", skill: "Estados da Matéria" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A unidade de medida de força no Sistema Internacional é o:", options: ["Quilograma", "Joule", "Newton", "Watt"], answer: "Newton", explanation: "Homenagem a Isaac Newton e suas leis do movimento.", skill: "Leis de Newton" },
  { grade: "9º", discipline: "Ciências", type: "multiple", text: "A velocidade da luz no vácuo é de aproximadamente:", options: ["300 km/h", "300.000 km/s", "1.000 km/s", "100.000 km/h"], answer: "300.000 km/s", explanation: "A luz é a coisa mais rápida do universo.", skill: "Ondas e Luz" }
];

// Reutilizar lógica de IDs automáticos
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
console.log(`Sucesso! ${batch.length} questões massivas adicionadas.`);
