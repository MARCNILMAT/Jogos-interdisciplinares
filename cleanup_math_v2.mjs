import fs from 'fs';

const filePath = 'questions.js';

const mappings = {
    // 6º Ano
    "6º | Números": "6º | Números e Operações",
    "6º | Numeração": "6º | Números e Operações",
    "6º | Números e Operações": "6º | Números e Operações",
    "6º | Frações": "6º | Frações e Porcentagem",
    "6º | Frações Equivalentes": "6º | Frações e Porcentagem",
    "6º | Frações e Porcentagem": "6º | Frações e Porcentagem",
    "6º | Geometria Básica": "6º | Geometria",
    "6º | Operações Fundamentais": "6º | Cálculo",
    "6º | Operações": "6º | Cálculo",
    "6º | Cálculo": "6º | Cálculo",

    // 7º Ano
    "7º | Números": "7º | Números Inteiros e Racionais",
    "7º | Inteiros": "7º | Números Inteiros e Racionais",
    "7º | Números Inteiros": "7º | Números Inteiros e Racionais",
    "7º | Números Inteiros e Racionais": "7º | Números Inteiros e Racionais",
    "7º | Operações com Inteiros": "7º | Números Inteiros e Racionais",
    "7º | Equações": "7º | Equação de 1º Grau",
    "7º | Equação de 1º Grau": "7º | Equação de 1º Grau",

    // 8º Ano
    "8º | Equações": "8º | Equação de 1º Grau",
    "8º | Equações de 1º Grau": "8º | Equação de 1º Grau",
    "8º | Potências": "8º | Potenciação",
    "8º | Potenciação": "8º | Potenciação",
    "8º | Raiz": "8º | Radiciação",
    "8º | Radiciação": "8º | Radiciação",

    // 9º Ano
    "9º | Equação do 2º Grau": "9º | Equação de 2º Grau",
    "9º | Equações de 2º Grau": "9º | Equação de 2º Grau",
    "9º | Equação de 2º Grau": "9º | Equação de 2º Grau",
    "9º | Pitágoras": "9º | Teorema de Pitágoras",
    "9º | Teorema de Pitágoras": "9º | Teorema de Pitágoras",
    "9º | Teoremas": "9º | Teorema de Tales",
    "9º | Teorema de Tales": "9º | Teorema de Tales",
    "9º | Potências e suas propriedades": "9º | Potenciação",
    "9º | Potenciação": "9º | Potenciação"
};

const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

let updatedLines = lines.map(line => {
    if (line.includes('grade:') && line.includes('discipline: "Matemática"') === false) {
        // We only care about Math lines. But wait, in the object they are properties.
        // Let's use a more robust approach: find objects with discipline: "Matemática".
    }
    return line;
});

// Using regex for replacement within Math objects
// We'll search for blocks that have discipline: "Matemática"
const parts = content.split(/  \{/);
const updatedParts = parts.map(part => {
    if (part.includes('discipline: "Matemática"')) {
        // Extract grade and skill
        const gradeMatch = part.match(/grade:\s*"([^"]+)"/);
        const skillMatch = part.match(/skill:\s*"([^"]+)"/);
        if (gradeMatch && skillMatch) {
            const grade = gradeMatch[1];
            const skill = skillMatch[1];
            const key = `${grade} | ${skill}`;
            if (mappings[key]) {
                const targetSkill = mappings[key].split(' | ')[1];
                return part.replace(`skill: "${skill}"`, `skill: "${targetSkill}"`);
            }
        }
    }
    return part;
});

fs.writeFileSync(filePath, updatedParts.join('  {'), 'utf-8');
console.log("Cleanup de Matemática concluído com sucesso!");
