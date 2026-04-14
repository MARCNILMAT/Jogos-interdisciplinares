import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 6300;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Sprint 32: Injeção de 90 questões de Matemática a partir do ID: ${startId}`);

const batch = [
  // 6º Matemática - MDC (10)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que significa a sigla 'MDC'?", options: ["Máximo Divisor Comum", "Mínimo Divisor Comum", "Multiplicação Direta Comum", "Menor Divisão Coletiva"], answer: "Máximo Divisor Comum", explanation: "É o maior número que divide dois ou mais números ao mesmo tempo.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC entre 12 e 18?", options: ["6", "3", "2", "12"], answer: "6", explanation: "Divisores de 12: {1,2,3,4,6,12}. Divisores de 18: {1,2,3,6,9,18}. O maior comum é 6.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Problemas que falam em 'cortar em tamanhos iguais e o maior possível' geralmente usam:", options: ["MDC", "MMC", "Raiz Quadrada", "Porcentagem"], answer: "MDC", explanation: "MDC é usado para repartir ou dividir em partes máximas iguais.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC entre dois números primos (ex: 7 e 11)?", options: ["1", "O produto deles", "A soma deles", "Não existe"], answer: "1", explanation: "Números primos só possuem o 1 como divisor comum.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC de 20, 30 e 50?", options: ["10", "5", "2", "20"], answer: "10", explanation: "Todos terminam em zero e são divisíveis por 10.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Ao decompor 24 e 36 em fatores primos, o MDC é o produto dos:", options: ["Fatores comuns com os menores expoentes", "Todos os fatores", "Apenas o maior fator", "Apenas o menor fator"], answer: "Fatores comuns com os menores expoentes", explanation: "Regra formal para cálculo do MDC.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC entre 10 e 5?", options: ["5", "10", "1", "2"], answer: "5", explanation: "Como 10 é múltiplo de 5, o 5 é o MDC.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um marceneiro quer cortar duas ripas (30cm e 45cm) em pedaços iguais e maiores possíveis. Qual o tamanho de cada pedaço?", options: ["15 cm", "5 cm", "10 cm", "3 cm"], answer: "15 cm", explanation: "MDC(30, 45) = 15.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 1 é divisor comum de todos os números?", options: ["Sim, sempre", "Não, apenas dos ímpares", "Apenas dos primos", "Nunca"], answer: "Sim, sempre", explanation: "1 divide qualquer número inteiro.", skill: "MDC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MDC de 100 e 25?", options: ["25", "50", "10", "5"], answer: "25", explanation: "25 divide 100 perfeitamente.", skill: "MDC" },

  // 8º Matemática - Áreas (10)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a fórmula para calcular a área de um Trapezio?", options: ["((B + b) * h) / 2", "Base * Altura", "Lado²", "π * r²"], answer: "((B + b) * h) / 2", explanation: "B é a base maior, b a menor e h a altura.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A área de um losango é calculada usando:", options: ["As diagonais (D * d) / 2", "O perímetro", "A base vezes o lado", "O raio"], answer: "As diagonais (D * d) / 2", explanation: "Produto das diagonais dividido por dois.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Se um quadrado tem lado de 5 cm, qual sua área?", options: ["25 cm²", "20 cm²", "10 cm²", "50 cm²"], answer: "25 cm²", explanation: "Área = Lado * Lado = 25.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a área de um triângulo com base 10m e altura 4m?", options: ["20 m²", "40 m²", "14 m²", "10 m²"], answer: "20 m²", explanation: "(Base * Altura) / 2 = 10*4/2 = 20.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um retângulo tem área de 50 cm². Se sua base mede 10 cm, qual sua altura?", options: ["5 cm", "500 cm", "40 cm", "10 cm"], answer: "5 cm", explanation: "Área = b * h => 50 = 10 * h => h = 5.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A área de um círculo é dada por:", options: ["π * r²", "2 * π * r", "d²", "π * d"], answer: "π * r²", explanation: "Onde r é o raio do círculo.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Para revestir uma parede de 3m x 2m com azulejos, precisamos saber a sua:", options: ["Área", "Perímetro", "Volume", "Peso"], answer: "Área", explanation: "Medida de superfície.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a área de um paralelogramo de base 8 cm e altura 5 cm?", options: ["40 cm²", "20 cm²", "13 cm²", "400 cm²"], answer: "40 cm²", explanation: "Área = Base * Altura.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A unidade 'hectare' (ha) equivale a:", options: ["10.000 m²", "1.000 m²", "100 m²", "1.000.000 m²"], answer: "10.000 m²", explanation: "Unidade comum para medir áreas rurais.", skill: "Áreas" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a área de um triângulo retângulo cujos catetos medem 3 e 4?", options: ["6", "12", "7", "5"], answer: "6", explanation: "(3 * 4) / 2 = 6.", skill: "Áreas" },

  // 7º Matemática - Cálculo (10)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 25% de 200?", options: ["50", "25", "100", "75"], answer: "50", explanation: "0,25 * 200 = 50.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Resolva: 10 + 5 * 2.", options: ["20", "30", "15", "25"], answer: "20", explanation: "Multiplicação primeiro: 5*2=10. 10+10=20.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de (-10) + (+15)?", options: ["+5", "-5", "+25", "-25"], answer: "+5", explanation: "Subtrai e mantém o sinal do maior valor absoluto.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 3³ (três ao cubo)?", options: ["27", "9", "6", "12"], answer: "27", explanation: "3 * 3 * 3 = 27.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor da expressão: 2 * (10 - 4)?", options: ["12", "16", "8", "18"], answer: "12", explanation: "Parênteses primeiro: 10-4=6. 2*6=12.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Resolva: 100 / (10 + 15).", options: ["4", "5", "10", "2"], answer: "4", explanation: "Parenteses: 25. 100/25 = 4.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é a metade de 1/2?", options: ["1/4 (0,25)", "1", "1/2", "0,1"], answer: "1/4 (0,25)", explanation: "Divisão de fração: (1/2) * (1/2) = 1/4.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de x em: x + 7 = 15?", options: ["8", "7", "22", "15"], answer: "8", explanation: "x = 15 - 7 = 8.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é (-5) * (-4)?", options: ["+20", "-20", "-9", "+9"], answer: "+20", explanation: "Sinais iguais na multiplicação resulta em positivo.", skill: "Cálculo" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 0,5 + 0,5 * 0,5?", options: ["0,75", "0,5", "1,0", "0,25"], answer: "0,75", explanation: "0,5 + (0,25) = 0,75.", skill: "Cálculo" },

  // 6º Matemática - Divisores (10)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 10 possui quantos divisores?", options: ["4", "2", "3", "5"], answer: "4", explanation: "Divisores: {1, 2, 5, 10}.", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual destes números NÃO é divisor de 24?", options: ["5", "3", "6", "8"], answer: "5", explanation: "24 dividido por 5 não é exato.", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que é um divisor de um número?", options: ["Um número que divide o outro perfeitamente (resto zero)", "Um número maior que o outro", "O resultado da soma", "Qualquer número ímpar"], answer: "Um número que divide o outro perfeitamente (resto zero)", explanation: "Definição de divisibilidade.", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Todo número (diferente de zero) é divisor dele mesmo?", options: ["Sim, sempre", "Não, nunca", "Apenas se for par", "Apenas se for primo"], answer: "Sim, sempre", explanation: "n / n = 1 (resto 0).", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o maior divisor de um número 'n'?", options: ["O próprio número n", "O número 1", "Diferente para cada um", "A metade de n"], answer: "O próprio número n", explanation: "Nenhum número maior que n o divide de forma inteira.", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 1 é divisor de qual grupo de números?", options: ["De todos os números", "Apenas dos ímpares", "Apenas do número 1", "Apenas dos primos"], answer: "De todos os números", explanation: "Qualquer n / 1 = n (resto 0).", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um número que possui apenas dois divisores (1 e ele mesmo) chamamos de:", options: ["Número Primo", "Número Composto", "Número Par", "Número Nulo"], answer: "Número Primo", explanation: "Ex: 2, 3, 5, 7...", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual destes números possui apenas 3 divisores?", options: ["4", "6", "10", "12"], answer: "4", explanation: "Divisores de 4: {1, 2, 4}.", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quantos divisores possui o número 1?", options: ["1", "0", "2", "Infinitos"], answer: "1", explanation: "Apenas o próprio 1.", skill: "Divisores" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Os divisores de 6 são {1, 2, 3, 6}. A soma deles é:", options: ["12", "10", "6", "8"], answer: "12", explanation: "1+2+3+6 = 12.", skill: "Divisores" },

  // 9º Matemática - Triângulos (10)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o nome do triângulo que possui todos os lados iguais?", options: ["Equilátero", "Isósceles", "Escaleno", "Retângulo"], answer: "Equilátero", explanation: "Seus ângulos também são todos iguais (60°).", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A soma dos ângulos internos de qualquer triângulo é:", options: ["180°", "360°", "90°", "270°"], answer: "180°", explanation: "Propriedade básica da geometria euclidiana.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Em um triângulo retângulo, o maior lado (oposto ao ângulo reto) chama-se:", options: ["Hipotenusa", "Cateto", "Base", "Altura"], answer: "Hipotenusa", explanation: "É a base do Teorema de Pitágoras.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O Teorema de Pitágoras afirma que:", options: ["a² = b² + c²", "a = b + c", "a² = b * c", "a + b = c"], answer: "a² = b² + c²", explanation: "Hipotenusa ao quadrado = soma dos quadrados dos catetos.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um triângulo Isósceles possui quantos ângulos internos iguais?", options: ["2", "3", "0", "1"], answer: "2", explanation: "Os ângulos da base opostos aos lados iguais.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual triângulo possui um ângulo de 90°?", options: ["Retângulo", "Obtusângulo", "Acutângulo", "Equilátero"], answer: "Retângulo", explanation: "O ângulo reto define essa categoria.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O triângulo Escaleno é aquele que possui:", options: ["Todos os lados diferentes", "Todos os lados iguais", "Apenas dois lados iguais", "Um ângulo de 180°"], answer: "Todos os lados diferentes", explanation: "Escaleno = sem lados iguais.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A área de um triângulo é dada pela fórmula:", options: ["(Base * Altura) / 2", "Base * Altura", "Lado²", "π * r²"], answer: "(Base * Altura) / 2", explanation: "É a metade da área de um paralelogramo.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Dois triângulos são ditos 'Semelhantes' quando:", options: ["Seus ângulos correspondentes são iguais e lados proporcionais", "Possuem a mesma área", "Possuem o mesmo perímetro", "Estão um dentro do outro"], answer: "Seus ângulos correspondentes são iguais e lados proporcionais", explanation: "Têm a mesma forma, mas podem ter tamanhos diferentes.", skill: "Triângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O ponto de encontro das medianas de um triângulo é o:", options: ["Baricentro", "Ortocentro", "Incentro", "Circuncentro"], answer: "Baricentro", explanation: "É o centro de massa do triângulo.", skill: "Triângulos" },

  // 9º Matemática - Círculo (10)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a fórmula para calcular a ÁREA de um círculo?", options: ["π * r²", "2 * π * r", "d²", "π * d"], answer: "π * r²", explanation: "Onde 'r' é o raio.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Quanto vale o Diâmetro de um círculo se o raio mede 4 cm?", options: ["8 cm", "2 cm", "16 cm", "4 cm"], answer: "8 cm", explanation: "Diâmetro = 2 * Raio.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o valor aproximado da constante π (Pi)?", options: ["3,14", "2,71", "1,41", "0,5"], answer: "3,14", explanation: "Representa a razão entre o comprimento e o diâmetro de qualquer círculo.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Para calcular o COMPRIMENTO de uma circunferência usamos:", options: ["2 * π * r", "π * r²", "Base * Altura", "Lado²"], answer: "2 * π * r", explanation: "Também pode ser escrito como π * d.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Uma reta que toca a circunferência em um único ponto é a:", options: ["Tangente", "Secante", "Corda", "Raio"], answer: "Tangente", explanation: "A tangente é perpendicular ao raio no ponto de contato.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o nome da reta que corta a circunferência em dois pontos?", options: ["Secante", "Tangente", "Raio", "Centro"], answer: "Secante", explanation: "Secare = cortar.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que é uma 'Corda' em um círculo?", options: ["Qualquer segmento que liga dois pontos da circunferência", "A linha de fora", "O ponto do meio", "O nome do compasso"], answer: "Qualquer segmento que liga dois pontos da circunferência", explanation: "O diâmetro é a maior corda possível.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A região plana limitada por uma circunferência é o:", options: ["Círculo", "Raio", "Diâmetro", "Lado"], answer: "Círculo", explanation: "Circunferência é o contorno; Círculo é o preenchimento.", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Se dobrarmos o raio de um círculo, sua ÁREA aumenta em:", options: ["4 vezes", "2 vezes", "8 vezes", "Não muda"], answer: "4 vezes", explanation: "π * (2r)² = 4 * (π * r²).", skill: "Círculo" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um arco de 180° equivale a:", options: ["Metade da circunferência", "Um círculo inteiro", "1/4 do círculo", "90 graus"], answer: "Metade da circunferência", explanation: "360 / 2 = 180.", skill: "Círculo" },

  // 6º Matemática - Tabuada (10)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 7 x 9?", options: ["63", "56", "72", "64"], answer: "63", explanation: "Fato básico da tabuada.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 8 x 6?", options: ["48", "42", "54", "56"], answer: "48", explanation: "8 * 6 = 48.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 9 x 9?", options: ["81", "90", "72", "99"], answer: "81", explanation: "9 * 9 = 81.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o produto de 4 x 8?", options: ["32", "36", "28", "30"], answer: "32", explanation: "4 * 8 = 32.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Multiplicar por 10 um número inteiro é o mesmo que:", options: ["Acrescentar um zero à direita", "Dividir por 2", "Inverter o número", "O número fica igual"], answer: "Acrescentar um zero à direita", explanation: "Regra básica do sistema decimal.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 6 x 7?", options: ["42", "36", "48", "45"], answer: "42", explanation: "6 * 7 = 42.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 5 x 12?", options: ["60", "50", "70", "25"], answer: "60", explanation: "5 * 10 + 5 * 2 = 50 + 10 = 60.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 0 x 1000?", options: ["0", "1000", "1", "100"], answer: "0", explanation: "Tudo multiplicado por zero é zero.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Multiplicar por 2 é o mesmo que calcular o:", options: ["Dobro", "Triplo", "Metade", "Quádruplo"], answer: "Dobro", explanation: "Dobro = 2 vezes.", skill: "Tabuada" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 11 x 11?", options: ["121", "111", "131", "110"], answer: "121", explanation: "11 * 11 = 121.", skill: "Tabuada" },

  // 7º Matemática - Raiz (10)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual a raiz quadrada de 49?", options: ["7", "6", "8", "9"], answer: "7", explanation: "7 * 7 = 49.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O símbolo √ é chamado de:", options: ["Radical", "Índice", "Exponencial", "Fator"], answer: "Radical", explanation: "Usado para representar a operação de radiciação.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de √100?", options: ["10", "1", "100", "50"], answer: "10", explanation: "10 * 10 = 100.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 1 é sempre:", options: ["1", "0", "0,5", "2"], answer: "1", explanation: "Pois 1 * 1 = 1.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Existe raiz quadrada real de um número negativo (ex: √-4)?", options: ["Não, dentro do conjunto dos números reais", "Sim, é -2", "Sim, é zero", "Apenas se for ímpar"], answer: "Não, dentro do conjunto dos números reais", explanation: "Não há número real que ao quadrado resulte em negativo.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual a raiz quadrada de 144?", options: ["12", "11", "13", "14"], answer: "12", explanation: "12 * 12 = 144.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto vale √81 + √9?", options: ["12", "90", "18", "9"], answer: "12", explanation: "9 + 3 = 12.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Se x² = 25, quais os possíveis valores de x?", options: ["+5 e -5", "Apenas 5", "Apenas -5", "0 e 25"], answer: "+5 e -5", explanation: "Ambos elevados ao quadrado resultam em 25.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "A raiz quadrada de 0 é:", options: ["0", "1", "Não existe", "Infinito"], answer: "0", explanation: "0 * 0 = 0.", skill: "Raiz" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor aproximado da √2?", options: ["1,41", "1,73", "1,10", "1,50"], answer: "1,41", explanation: "√2 é um número irracional aproximado.", skill: "Raiz" },

  // 8º Matemática - Soma (10)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Na adição, a ordem das parcelas não altera a soma. Que propriedade é essa?", options: ["Comutativa", "Associativa", "Elemento Neutro", "Distributiva"], answer: "Comutativa", explanation: "a + b = b + a.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de (-8) + (-12)?", options: ["-20", "+20", "-4", "+4"], answer: "-20", explanation: "Soma de números com o mesmo sinal: some e mantenha o sinal.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Elemento neutro da soma é o número:", options: ["0", "1", "-1", "10"], answer: "0", explanation: "Qualquer número somado a 0 é ele mesmo.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 1,5 + 2,7?", options: ["4,2", "3,2", "4,5", "3,8"], answer: "4,2", explanation: "Soma básica de decimais.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A soma de dois números opostos (ex: +7 e -7) é sempre:", options: ["0", "14", "-14", "1"], answer: "0", explanation: "Pois eles se anulam.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Se somarmos as medidas dos ângulos internos de um triângulo, teremos:", options: ["180°", "360°", "90°", "100°"], answer: "180°", explanation: "Lei angular de Thales.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Como se chama o resultado de uma adição?", options: ["Soma ou Total", "Produto", "Quociente", "Resto"], answer: "Soma ou Total", explanation: "Terminologia básica.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A propriedade associativa (a + b) + c = a + (b + c) significa que:", options: ["Podemos agrupar as parcelas de formas diferentes sem mudar o resultado", "Podemos trocar a ordem", "Podemos multiplicar primeiro", "Podemos apagar os parênteses"], answer: "Podemos agrupar as parcelas de formas diferentes sem mudar o resultado", explanation: "Válido para a adição.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual a soma de 10% de 100 com 20% de 100?", options: ["30", "10", "20", "130"], answer: "30", explanation: "10 + 20 = 30.", skill: "Soma" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Resolva: (-15) + (+5).", options: ["-10", "+10", "-20", "+20"], answer: "-10", explanation: "Subtrai e mantém o sinal do maior valor absoluto.", skill: "Soma" }
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
console.log(`Sucesso! Sprint 32 com ${batch.length} questões de Matemática adicionado.`);
