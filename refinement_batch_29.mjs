import fs from 'fs';

const filePath = 'questions.js';

function getNextId() {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/id:\s*(\d+)/g);
    if (!matches) return 6000;
    const ids = matches.map(m => parseInt(m.match(/\d+/)[0]));
    return Math.max(...ids) + 1;
}

const startId = getNextId();
console.log(`Sprint 29: Injeção de 90 questões de Matemática a partir do ID: ${startId}`);

const batch = [
  // 9º Matemática - Radiciação (9)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o resultado simplificado da expressão √12 + √27?", options: ["5√3", "√39", "6√3", "9√3"], answer: "5√3", explanation: "√12 = 2√3 e √27 = 3√3. Somando: 2√3 + 3√3 = 5√3.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Ao racionalizar a fração 1 / √2, obtemos:", options: ["√2 / 2", "√2", "2 / √2", "0,5"], answer: "√2 / 2", explanation: "Multiplica-se numerador e denominador por √2.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o valor da raiz quarta de 16 (∜16)?", options: ["2", "4", "8", "1"], answer: "2", explanation: "2 * 2 * 2 * 2 = 16.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Resolva a expressão: (√5)² - √16.", options: ["1", "9", "4", "0"], answer: "1", explanation: "5 - 4 = 1.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a propriedade correta das raízes?", options: ["√(a/b) = √a / √b", "√(a+b) = √a + √b", "√(a-b) = √a - √b", "n√a + m√a = (n+m)√2a"], answer: "√(a/b) = √a / √b", explanation: "A raiz do quociente é o quociente das raízes.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O valor de ∛(-8) é:", options: ["-2", "2", "Não existe", "-4"], answer: "-2", explanation: "O índice ímpar permite radicando negativo. (-2)³ = -8.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Simplificando ∛(x⁶), obtemos:", options: ["x²", "x³", "x", "x⁹"], answer: "x²", explanation: "Divide-se o expoente pelo índice: 6 / 3 = 2.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de √2 * √8?", options: ["4", "√10", "16", "√6"], answer: "4", explanation: "√2 * √8 = √16 = 4.", skill: "Radiciação" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A expressão √(√81) é igual a:", options: ["3", "9", "81", "1"], answer: "3", explanation: "√81 = 9. √9 = 3.", skill: "Radiciação" },

  // 8º Matemática - Triângulos (9)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O ponto de encontro das três Alturas de um triângulo é o:", options: ["Ortocentro", "Baricentro", "Incentro", "Circuncentro"], answer: "Ortocentro", explanation: "Ponto de interseção das retas suporte das alturas.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O que garante o 'Caso LAL' de congruência de triângulos?", options: ["Dois lados iguais e o ângulo entre eles também igual", "Três lados iguais", "Dois ângulos e o lado entre eles iguais", "Um lado e dois ângulos opostos"], answer: "Dois lados iguais e o ângulo entre eles também igual", explanation: "Lado-Ângulo-Lado.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Em um triângulo, o segmento que divide um ângulo ao meio é a:", options: ["Bissetriz", "Mediana", "Altura", "Mediatriz"], answer: "Bissetriz", explanation: "Divide o ângulo em duas partes congruentes.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O Baricentro de um triângulo é o ponto de encontro das:", options: ["Medianas", "Alturas", "Bissetrizes", "Mediatrizes"], answer: "Medianas", explanation: "Divide cada mediana na razão de 2 para 1.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual triângulo possui um ângulo maior que 90 graus?", options: ["Obtusângulo", "Acutângulo", "Retângulo", "Equilátero"], answer: "Obtusângulo", explanation: "Possui um ângulo obtuso.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A 'Desigualdade Triangular' afirma que um lado deve ser sempre:", options: ["Menor que a soma dos outros dois", "Maior que a soma dos outros dois", "Igual à soma dos outros dois", "O dobro do menor lado"], answer: "Menor que a soma dos outros dois", explanation: "Condição de existência do triângulo.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O ponto que é o centro do círculo inscrito no triângulo é o:", options: ["Incentro", "Circuncentro", "Baricentro", "Ortocentro"], answer: "Incentro", explanation: "Encontro das bissetrizes internas.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O Circuncentro é o ponto de encontro das:", options: ["Mediatrizes", "Bissetrizes", "Alturas", "Medianas"], answer: "Mediatrizes", explanation: "É o centro do círculo que passa pelos três vértices.", skill: "Triângulos" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Dois triângulos são congruentes quando:", options: ["Possuem a mesma forma e o mesmo tamanho", "Possuem apenas os mesmos ângulos", "Um é o dobro do outro", "Estão na mesma posição"], answer: "Possuem a mesma forma e o mesmo tamanho", explanation: "Lados e ângulos correspondentes são iguais.", skill: "Triângulos" },

  // 6º Matemática - MMC (9)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que significa a sigla 'MMC'?", options: ["Mínimo Múltiplo Comum", "Máximo Múltiplo Coletivo", "Menor Medida Comum", "Multiplicação Mútua Completa"], answer: "Mínimo Múltiplo Comum", explanation: "Menor número positivo que é múltiplo de dois ou mais números.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 4 e 6?", options: ["12", "24", "2", "10"], answer: "12", explanation: "Múltiplos de 4: {4, 8, 12...}. Múltiplos de 6: {6, 12...}. Menor comum: 12.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Em problemas que perguntam quando dois eventos ocorrerão 'juntos novamente', usamos:", options: ["MMC", "MDC", "Raiz Quadrada", "Frações"], answer: "MMC", explanation: "Sempre que há ideia de coincidência futura de ciclos.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre 10 e 20?", options: ["20", "10", "40", "200"], answer: "20", explanation: "Como 20 já é múltiplo de 10, ele é o próprio MMC.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC entre dois números primos entre si (ex: 3 e 5)?", options: ["O produto deles (3x5=15)", "1", "A soma deles", "Não existe"], answer: "O produto deles (3x5=15)", explanation: "Se não há fatores comuns, o MMC é a multiplicação deles.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Para achar o MMC pela decomposição conjunta, devemos dividir até que todos os números cheguem a:", options: ["1", "0", "10", "Um número primo"], answer: "1", explanation: "O processo termina quando todos os dividendos são 1.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o MMC de 3, 4 e 5?", options: ["60", "30", "120", "12"], answer: "60", explanation: "Como são primos entre si dois a dois: 3 * 4 * 5 = 60.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um remédio A é tomado de 6 em 6 horas e o B de 8 em 8. Se tomados juntos agora, daqui a quanto tempo coincidirão?", options: ["24 horas", "14 horas", "48 horas", "12 horas"], answer: "24 horas", explanation: "MMC(6, 8) = 24.", skill: "MMC" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O primeiro múltiplo de qualquer número (além do zero) é:", options: ["Ele mesmo", "1", "O seu dobro", "10"], answer: "Ele mesmo", explanation: "Todo número multiplicado por 1 é ele mesmo.", skill: "MMC" },

  // 7º Matemática - Tabuada (9)
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 12 x 12?", options: ["144", "124", "134", "154"], answer: "144", explanation: "Base de potências e cálculos rápidos.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 15 x 6?", options: ["90", "80", "100", "75"], answer: "90", explanation: "15 * 2 * 3 = 30 * 3 = 90.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O produto de 13 x 7 é:", options: ["91", "81", "71", "101"], answer: "91", explanation: "10*7 + 3*7 = 70 + 21 = 91.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o valor de 25 x 4?", options: ["100", "75", "125", "80"], answer: "100", explanation: "Cálculo mental comum (quatro moedas de 25 centavos).", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Quanto é 9 x 11?", options: ["99", "90", "109", "119"], answer: "99", explanation: "Fato da tabuada do 11.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Multiplicar por 0,5 é o mesmo que:", options: ["Dividir por 2", "Multiplicar por 2", "Dividir por 10", "Somar 5"], answer: "Dividir por 2", explanation: "0,5 = 1/2.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "O resultado de 11 x 11 é:", options: ["121", "111", "131", "101"], answer: "121", explanation: "11 * 11 = 121.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Qual o dobro de 45?", options: ["90", "80", "100", "75"], answer: "90", explanation: "45 + 45 = 90.", skill: "Tabuada" },
  { grade: "7º", discipline: "Matemática", type: "multiple", text: "Triplicar um número significa multiplicá-lo por:", options: ["3", "2", "30", "1/3"], answer: "3", explanation: "Triplo = 3 vezes.", skill: "Tabuada" },

  // 6º Matemática - Números Primos (9)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que define um 'Número Primo'?", options: ["Possui exatamente dois divisores: o 1 e ele mesmo", "É um número sempre ímpar", "Qualquer número que termina em 1", "Um número que não pode ser somado"], answer: "Possui exatamente dois divisores: o 1 e ele mesmo", explanation: "Ex: 2, 3, 5, 7, 11...", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o único número par que é primo?", options: ["2", "4", "0", "10"], answer: "2", explanation: "Todos os outros pares são divisíveis por 2.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O número 1 é considerado primo?", options: ["Não, pois só tem um divisor", "Sim, pois divide todos", "Depende do problema", "Apenas em situações raras"], answer: "Não, pois só tem um divisor", explanation: "Definição: deve ter exatamente dois divisores distintos.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quantos números primos existem?", options: ["Infinitos", "Até 100", "Exatamente 1000", "Apenas 10"], answer: "Infinitos", explanation: "Provado por Euclides há milhares de anos.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual destes números NÃO é primo?", options: ["9", "2", "3", "7"], answer: "9", explanation: "9 é divisível por 1, 3 e 9 (tem 3 divisores).", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O processo de escrever um número como multiplicação de primos é a:", options: ["Decomposição em fatores primos (Fatoração)", "Soma infinita", "Raiz quadrada", "MMC"], answer: "Decomposição em fatores primos (Fatoração)", explanation: "Ex: 12 = 2 * 2 * 3.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o próximo número primo após o 7?", options: ["11", "9", "8", "13"], answer: "11", explanation: "Sequência: 2, 3, 5, 7, 11...", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O Crivo de Eratóstenes é um método para:", options: ["Encontrar números primos em uma sequência", "Calcular a área de círculos", "Dividir números grandes", "Somar frações"], answer: "Encontrar números primos em uma sequência", explanation: "Baseia-se em eliminar os múltiplos de cada primo encontrado.", skill: "Números Primos" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Um número que não é primo e é maior que 1 é chamado de:", options: ["Composto", "Par", "Inteiro", "Nulo"], answer: "Composto", explanation: "Pois é composto pela multiplicação de primos.", skill: "Números Primos" },

  // 6º Matemática - Multiplicação (9)
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Como se chama o resultado de uma multiplicação?", options: ["Produto", "Soma", "Quociente", "Diferença"], answer: "Produto", explanation: "Termos: Fator x Fator = Produto.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Multiplicar um número por 100 é o mesmo que:", options: ["Andar a vírgula duas casas para a direita", "Adicionar três zeros", "Dividir por 2", "O número permanece igual"], answer: "Andar a vírgula duas casas para a direita", explanation: "Regra do sistema decimal.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "A propriedade comutativa da multiplicação diz que:", options: ["A ordem dos fatores não altera o produto", "A soma é igual à conta de vezes", "Todo número vezes 1 é ele mesmo", "Todo número vezes 0 é 0"], answer: "A ordem dos fatores não altera o produto", explanation: "Ex: 3 x 4 = 4 x 3.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o elemento neutro da multiplicação?", options: ["1", "0", "10", "2"], answer: "1", explanation: "Qualquer número vezes 1 não muda o valor.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O que acontece na multiplicação por Zero?", options: ["O resultado é sempre zero", "O resultado é 1", "O número não muda", "O resultado é infinito"], answer: "O resultado é sempre zero", explanation: "Zero é o elemento nulo.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Quanto é 25 x 4?", options: ["100", "80", "125", "150"], answer: "100", explanation: "Cálculo mental rápido.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "O dobro do triplo de 5 é:", options: ["30", "15", "10", "25"], answer: "30", explanation: "2 * (3 * 5) = 2 * 15 = 30.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "A multiplicação pode ser vista como:", options: ["Uma adição de parcelas iguais", "Uma subtração repetida", "Uma divisão rápida", "Uma raiz inversa"], answer: "Uma adição de parcelas iguais", explanation: "Ex: 3 x 4 = 4 + 4 + 4.", skill: "Multiplicação" },
  { grade: "6º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 123 x 0?", options: ["0", "123", "1", "12,3"], answer: "0", explanation: "Qualquer número multiplicado por zero é zero.", skill: "Multiplicação" },

  // 9º Matemática - Funções (9)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que é uma 'Função' na matemática?", options: ["Uma relação entre dois conjuntos que associa cada elemento do primeiro a um único do segundo", "Uma conta de somar vários números", "Uma reunião de pessoas", "Um desenho geométrico"], answer: "Uma relação entre dois conjuntos que associa cada elemento do primeiro a um único do segundo", explanation: "Geralmente expressa como y = f(x).", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Em uma função f(x) = 2x + 3, qual o valor de f(5)?", options: ["13", "10", "15", "8"], answer: "13", explanation: "2*(5) + 3 = 10 + 3 = 13.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O conjunto de todos os valores de entrada (x) em uma função é o:", options: ["Domínio", "Contradomínio", "Imagem", "Gráfico"], answer: "Domínio", explanation: "Valores onde a função é definida.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O gráfico de uma função do 1º grau (y = ax + b) é sempre uma:", options: ["Reta", "Parábola", "Círculo", "Curva infinita"], answer: "Reta", explanation: "Por isso é chamada de função linear ou afim.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Na função y = ax + b, o termo 'a' representa o:", options: ["Coeficiente Angular (inclinação)", "Coeficiente Linear (onde corta o eixo y)", "Raiz da função", "Valor de x"], answer: "Coeficiente Angular (inclinação)", explanation: "Determina o quão inclinada é a reta.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O ponto onde a reta cruza o eixo Y é determinado pelo valor de:", options: ["b", "a", "x", "zero"], answer: "b", explanation: "É o coeficiente linear (f(0) = b).", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Uma função é considerada 'Crescente' quando o coeficiente angular (a) é:", options: ["Positivo (a > 0)", "Negativo (a < 0)", "Igual a zero", "Maior que 10"], answer: "Positivo (a > 0)", explanation: "A reta sobe da esquerda para a direita.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O conjunto de todos os resultados (saídas y) efetivamente alcançados pela função é a:", options: ["Imagem", "Domínio", "Eixo X", "Variável"], answer: "Imagem", explanation: "Im(f) faz parte do contradomínio.", skill: "Funções" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A raiz de uma função f(x) é o valor de x que faz o resultado ser:", options: ["Zero (f(x) = 0)", "Um", "Positivo", "O maior possível"], answer: "Zero (f(x) = 0)", explanation: "Ponto onde o gráfico toca o eixo X.", skill: "Funções" },

  // 9º Matemática - Áreas (9)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a fórmula da área de um HEXÁGONO regular de lado 'L'?", options: ["(3L²√3) / 2", "Base * Altura", "6 * L", "L²"], answer: "(3L²√3) / 2", explanation: "Derivada de 6 triângulos equiláteros.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Ao duplicarmos as dimensões de uma figura (comprimento e largura), sua área aumenta:", options: ["4 vezes", "2 vezes", "8 vezes", "10 vezes"], answer: "4 vezes", explanation: "Razão de semelhança k² (2² = 4).", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a área de uma coroa circular entre dois círculos de raios R e r?", options: ["π * (R² - r²)", "π * (R - r)", "2 * π * R", "π * R² + π * r²"], answer: "π * (R² - r²)", explanation: "Área do maior menos a do menor.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A área lateral de um cilindro é calculada por:", options: ["2 * π * r * h", "π * r²", "Base * Altura", "π * r² * h"], answer: "2 * π * r * h", explanation: "Representa a circunferência da base multiplicada pela altura.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que é 'Área Total' de um sólido geométrico?", options: ["A soma das áreas de todas as suas faces", "O volume interno do sólido", "Apenas a cor da superfície", "A medida da sombra no chão"], answer: "A soma das áreas de todas as suas faces", explanation: "Ex: Área lateral + Áreas das bases.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A área de um triângulo equilátero de lado 'a' é:", options: ["(a²√3) / 4", "(a * h) / 2", "a²", "3a"], answer: "(a²√3) / 4", explanation: "Fórmula clássica para triângulos com todos os lados iguais.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qual a área aproximada de um círculo com raio de 10 cm? (Use π = 3,14)", options: ["314 cm²", "31,4 cm²", "100 cm²", "628 cm²"], answer: "314 cm²", explanation: "3,14 * 10² = 3,14 * 100 = 314.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que são 'Figuras Equivalentes' na geometria?", options: ["Figuras que possuem a mesma área, mesmo tendo formas diferentes", "Figuras idênticas", "Figuras com o mesmo perímetro", "Figuras com a mesma cor"], answer: "Figuras que possuem a mesma área, mesmo tendo formas diferentes", explanation: "Ex: Um quadrado e um triângulo com 20 cm² cada.", skill: "Áreas" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A unidade de medida 'Acre' é usada para medir:", options: ["Área (superfície)", "Volume", "Comprimento", "Peso"], answer: "Área (superfície)", explanation: "Unidade de medida de área muito comum em países de língua inglesa.", skill: "Áreas" },

  // 9º Matemática - Ângulos (9)
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Um 'Ângulo Inscrito' em uma circunferência mede:", options: ["A metade do arco correspondente", "O mesmo que o arco", "O dobro do arco", "Sempre 90 graus"], answer: "A metade do arco correspondente", explanation: "Seu vértice está na circunferência.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O 'Ângulo Central' de uma circunferência mede:", options: ["O mesmo que o arco correspondente", "A metade do arco", "360 graus sempre", "O dobro do ângulo inscrito"], answer: "O mesmo que o arco correspondente", explanation: "Seu vértice está no centro da circunferência.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Qualquer ângulo inscrito que 'enxerga' o diâmetro da circunferência mede obrigatoriamente:", options: ["90°", "180°", "45°", "60°"], answer: "90°", explanation: "Pois ele subtende um arco de 180° (meia volta).", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Ângulos 'Adjacentes' são aqueles que:", options: ["Possuem o mesmo vértice e um lado em comum", "Estão um de frente para o outro", "Somam 360 graus", "São sempre ângulos retos"], answer: "Possuem o mesmo vértice e um lado em comum", explanation: "Vizinhança entre ângulos.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que é um 'Arco de Circunferência'?", options: ["Uma parte curva da linha da circunferência", "A linha reta que corta o círculo", "O ponto central", "O nome do compasso"], answer: "Uma parte curva da linha da circunferência", explanation: "Medido em graus ou radianos.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "Quantos graus possui um ângulo de 1/4 (um quarto) de volta?", options: ["90°", "45°", "180°", "360°"], answer: "90°", explanation: "360 / 4 = 90.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "A medida de um ângulo em radianos para uma volta completa é:", options: ["2π", "π", "360", "180 π"], answer: "2π", explanation: "Relação fundamental entre graus e radianos.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O que são ângulos 'Congruentes'?", options: ["Ângulos que possuem a mesma medida", "Ângulos que somam 180 graus", "Ângulos um dentro do outro", "Ângulos coloridos"], answer: "Ângulos que possuem a mesma medida", explanation: "Congruência = igualdade de medidas.", skill: "Ângulos" },
  { grade: "9º", discipline: "Matemática", type: "multiple", text: "O 'Grau' é dividido em 60 partes menores chamadas:", options: ["Minutos", "Segundos", "Milímetros", "Centésimos"], answer: "Minutos", explanation: "Sistema sexagesimal: 1° = 60'.", skill: "Ângulos" },

  // 8º Matemática - Álgebra (9)
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O que caracteriza uma 'Expressão Algébrica'?", options: ["Presença de variáveis (letras) representando números desconhecidos", "Apenas números somados", "Um desenho geométrico", "Uma lista de compras"], answer: "Presença de variáveis (letras) representando números desconhecidos", explanation: "Linguagem simbólica da matemática.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o resultado de 2x + 3x?", options: ["5x", "5x²", "6x", "23x"], answer: "5x", explanation: "Soma de termos semelhantes.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O valor numérico de a² + b quando a=3 e b=4 é:", options: ["13", "10", "25", "7"], answer: "13", explanation: "3² + 4 = 9 + 4 = 13.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Como se chama o número que multiplica a variável (letra) em um monômio?", options: ["Coeficiente", "Expoente", "Grau", "Incógnita"], answer: "Coeficiente", explanation: "Ex: Em 5y, o 5 é o coeficiente.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Qual o produto de (x) * (x)?", options: ["x²", "2x", "x", "x+x"], answer: "x²", explanation: "Multiplicação de potências de mesma base.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "A expressão que representa 'o triplo de um número menos o seu quadrado' é:", options: ["3x - x²", "x³ - x²", "3x - 2x", "3 - x²"], answer: "3x - x²", explanation: "Tradução da linguagem natural para a algébrica.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "O que é 'Grau de um Monômio'?", options: ["A soma dos expoentes das suas variáveis", "O valor do coeficiente", "A temperatura do número", "Quantas letras ele tem"], answer: "A soma dos expoentes das suas variáveis", explanation: "Ex: 2x²y³ é de 5º grau.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Simplificando 10x / 2x, obtemos (para x diferente de zero):", options: ["5", "5x", "8x", "20x²"], answer: "5", explanation: "Divide-se os coeficientes e as letras se anulam.", skill: "Álgebra" },
  { grade: "8º", discipline: "Matemática", type: "multiple", text: "Um 'Polinômio' de dois termos é chamado de:", options: ["Binômio", "Monômio", "Trinômio", "Dupla"], answer: "Binômio", explanation: "Bi (dois) + nômio (termos).", skill: "Álgebra" }
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
console.log(`Sucesso! Sprint 29 com ${batch.length} questões de Matemática adicionado.`);
