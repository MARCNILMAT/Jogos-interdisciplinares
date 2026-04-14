import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 3889;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Lote de Refinamento 2 (Targeted Filling) a partir do ID: ${startId}`);

const batch = [
  // --- ARTES (6º) - Técnicas Artísticas (9 questions to reach 10) ---
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual técnica artística utiliza pequenos pedaços de materiais (vidro, papel, pedra) para formar uma imagem?", options: ["Pintura", "Escultura", "Mosaico", "Grafite"], answer: "Mosaico", explanation: "O mosaico é uma técnica milenar de decoração de superfícies.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica de colar diferentes materiais (papel, tecido, fotos) em uma base chama-se:", options: ["Afresco", "Colagem", "Mosaico", "Escultura"], answer: "Colagem", explanation: "A colagem permite sobrepor e misturar texturas.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O desenho feito de forma rápida para capturar uma ideia inicial é o:", options: ["Pintura final", "Esboço (ou Croqui)", "Gravura", "Mosaico"], answer: "Esboço (ou Croqui)", explanation: "Serve como base para o trabalho artístico final.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica de pintar sobre gesso ou argamassa ainda úmida é o:", options: ["Afresco", "Óleo", "Aquarela", "Giz"], answer: "Afresco", explanation: "Muito utilizada no Renascimento para decorar igrejas.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "Qual destas é uma técnica de impressão onde a imagem é gravada em uma matriz?", options: ["Desenho a lápis", "Gravura", "Pintura a óleo", "Performance"], answer: "Gravura", explanation: "Permite a reprodução de várias cópias da mesma obra.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica de 'Stencil', muito usada no grafite, consiste em:", options: ["Pintar com pincel fino", "Usar um molde vazado para passar a tinta", "Esculpir em pedra", "Fazer colagem de fotos"], answer: "Usar um molde vazado para passar a tinta", explanation: "O molde garante a reprodução rápida e precisa do desenho.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A 'Pintura Rupestre' era feita pelos humanos pré-históricos utilizando:", options: ["Tinta guache comprada", "Pigmentos naturais (terra, sangue, gordura)", "Canetas coloridas", "Apenas carvão mineral"], answer: "Pigmentos naturais (terra, sangue, gordura)", explanation: "Os primeiros artistas usavam o que encontravam na natureza.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "O suporte clássico para pintura feito de tecido esticado em madeira é a:", options: ["Páre", "Tela", "Escultura", "Muro"], answer: "Tela", explanation: "Geralmente feita de linho ou algodão tratado.", skill: "Técnicas Artísticas" },
  { grade: "6º", discipline: "Arte", type: "multiple", text: "A técnica que utiliza a água para diluir tintas transparentes é a:", options: ["Aquarela", "Têmpera", "Óleo", "Grafite"], answer: "Aquarela", explanation: "Diferencia-se pela delicadeza e transparência das camadas.", skill: "Técnicas Artísticas" },

  // --- ARTES (8º) - Street Art (7 questions) ---
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Como se chama a manifestação artística que utiliza as letras como forma de expressão urbana?", options: ["Grafite", "Pixação", "Muralismo", "Mosaico"], answer: "Pixação", explanation: "A pixação é focada no desenho e estética das letras, muitas vezes em locais de difícil acesso.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O 'Grafite' diferencia-se da pixação por ser focado principalmente em:", options: ["Letras rápidas", "Personagens e desenhos elaborados", "Assinaturas de nomes", "Esculturas"], answer: "Personagens e desenhos elaborados", explanation: "O grafite é uma forma de arte visual urbana complexa.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Qual técnica de Street Art utiliza um molde vazado e spray?", options: ["Stencil", "Lambe-lambe", "Muralismo", "Performance"], answer: "Stencil", explanation: "Banksy é um dos maiores nomes mundiais desta técnica.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "O 'Lambe-lambe' na arte urbana consiste em colar:", options: ["Adesivos pequenos", "Cartazes feitos em papel", "Telas de pintura", "Esculturas de argila"], answer: "Cartazes feitos em papel", explanation: "Utiliza cola de trigo ou semelhante para fixar os papéis nos muros.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "As 'Gêmeos' são artistas brasileiros mundialmente famosos por qual tipo de arte?", options: ["Música Clássica", "Grafite", "Cinema", "Ballet"], answer: "Grafite", explanation: "Otávio e Gustavo Pandolfo criaram um estilo único e reconhecido globalmente.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "Onde a Street Art costuma ser realizada?", options: ["Apenas dentro de museus", "Em espaços públicos e muros das cidades", "Apenas em casas de luxo", "No fundo do mar"], answer: "Em espaços públicos e muros das cidades", explanation: "Ocupa e questiona o espaço urbano.", skill: "Street Art" },
  { grade: "8º", discipline: "Arte", type: "multiple", text: "A Street Art é considerada uma forma de qual linguagem artística?", options: ["Linguagem Cênica", "Linguagem Visual", "Linguagem Sonora", "Linguagem Corporal"], answer: "Linguagem Visual", explanation: "Comunica-se através da imagem e estética visual.", skill: "Street Art" },

  // --- ARTES (9º) - Linguagem Audiovisual (7 questions) ---
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O cinema é conhecido como qual das artes?", options: ["3ª Arte", "7ª Arte", "9ª Arte", "1ª Arte"], answer: "7ª Arte", explanation: "Classificação teórica que inclui a fotografia e o movimento.", skill: "Linguagem Audiovisual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O profissional responsável pela direção e coordenação das cenas em um filme é o:", options: ["Roteirista", "Diretor", "Figurinista", "Maquiador"], answer: "Diretor", explanation: "O diretor dá a visão artística para a obra cinematográfica.", skill: "Linguagem Audiovisual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A técnica de criar a ilusão de movimento a partir de desenhos estáticos chama-se:", options: ["Pintura", "Animação", "Escultura", "Fotografia"], answer: "Animação", explanation: "Baseada na persistência da visão.", skill: "Linguagem Audiovisual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O texto que contém todos os diálogos e instruções para a gravação de um filme é o:", options: ["Lembrete", "Roteiro", "Diário", "Manifesto"], answer: "Roteiro", explanation: "O guia fundamental para toda a equipe de produção.", skill: "Linguagem Audiovisual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A unidade básica narrativa de um filme, gravada sem interrupções, é o:", options: ["Plano", "Corte", "Episódio", "Ato"], answer: "Plano", explanation: "Cada vez que a câmera inicia e para a gravação.", skill: "Linguagem Audiovisual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "A junção e organização dos planos de um filme após a gravação chama-se:", options: ["Atuação", "Montagem (ou Edição)", "Iluminação", "Cenografia"], answer: "Montagem (ou Edição)", explanation: "É onde o filme ganha ritmo e sentido final.", skill: "Linguagem Audiovisual" },
  { grade: "9º", discipline: "Arte", type: "multiple", text: "O 'Storyboard' no audiovisual serve para:", options: ["Contratar atores", "Desenhar visualmente como serão os planos do filme", "Escolher a trilha sonora", "Fazer a maquiagem"], answer: "Desenhar visualmente como serão os planos do filme", explanation: "Funciona como uma história em quadrinhos da produção.", skill: "Linguagem Audiovisual" },

  // --- INGLÊS (7º) - Pronouns (5 questions) ---
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "Qual pronome substitui 'Mary' na frase 'Mary is happy'?", options: ["He", "She", "It", "They"], answer: "She", explanation: "She = Ela (feminino singular).", skill: "Pronouns" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The pronoun for a group that includes 'Me' is:", options: ["You", "They", "We", "I"], answer: "We", explanation: "We = Nós.", skill: "Pronouns" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "To replace 'The dog' in a sentence, we use:", options: ["He", "She", "It", "We"], answer: "It", explanation: "It é usado para animais e objetos no singular.", skill: "Pronouns" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "The plural of 'Hello, students! ___ are intelligent.' is:", options: ["He", "She", "You", "It"], answer: "You", explanation: "You é usado tanto para 'Você' quanto 'Vocês'.", skill: "Pronouns" },
  { grade: "7º", discipline: "Inglês", type: "multiple", text: "They are my friends. 'They' means:", options: ["Nós", "Eles/Elas", "Vocês", "Eu"], answer: "Eles/Elas", explanation: "They é o plural de he, she e it.", skill: "Pronouns" },

  // --- CIÊNCIAS (6º) - Estados Físicos da Água (8 questions) ---
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A passagem da água do estado sólido (gelo) para o líquido chama-se:", options: ["Fusão", "Solidificação", "Vaporização", "Condensação"], answer: "Fusão", explanation: "Ocorre com o aumento da temperatura.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "Quando a água vira gelo, dizemos que ocorreu a:", options: ["Fusão", "Solidificação", "Ebulição", "Sublimação"], answer: "Solidificação", explanation: "Mudança do líquido para o sólido por perda de calor.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A água que evapora dos rios e mares passa para qual estado físico?", options: ["Sólido", "Gasoso", "Líquido", "Plasmático"], answer: "Gasoso", explanation: "Vira vapor de água invisível no ar.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A formação de gotículas de água na tampa de uma panela quente é a:", options: ["Fusão", "Condensação", "Solidificação", "Sublimação"], answer: "Condensação", explanation: "O vapor volta a ser líquido ao esfriar.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O gelo seco passando diretamente para o estado gasoso é um exemplo de:", options: ["Fusão", "Sublimação", "Solidificação", "Ebulição"], answer: "Sublimação", explanation: "Mudança direta do sólido para o gás.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A que temperatura (em graus Celsius) a água costuma congelar ao nível do mar?", options: ["0 ºC", "100 ºC", "37 ºC", "50 ºC"], answer: "0 ºC", explanation: "É o ponto de solidificação da água pura.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "A vaporização lenta que ocorre na temperatura ambiente (como em roupas no varal) é a:", options: ["Ebulição", "Calefação", "Evaporação", "Fusão"], answer: "Evaporação", explanation: "Processo lento na superfície do líquido.", skill: "Estados Físicos da Água" },
  { grade: "6º", discipline: "Ciências", type: "multiple", text: "O 'Ciclo da Água' na natureza depende de quais mudanças de estado?", options: ["Apenas Fusão", "Apenas Solidificação", "Evaporação e Condensação", "Apenas Sublimação"], answer: "Evaporação e Condensação", explanation: "Gera a formação de nuvens e chuva.", skill: "Estados Físicos da Água" }
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
console.log(`Sucesso! Sprint de Refinamento 2 concluído com ${batch.length} questões direcionadas.`);
