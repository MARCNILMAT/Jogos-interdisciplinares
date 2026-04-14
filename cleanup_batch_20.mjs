import fs from 'fs';

const filePath = 'questions.js';
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
    { from: 'skill: "Diálogo Inter-religioso"', to: 'skill: "Diálogo"' },
    { from: 'skill: "Festividades Religiosas"', to: 'skill: "Festividades"' },
    { from: 'skill: "Liberdade de Escolha"', to: 'skill: "Liberdade"' },
    { from: 'skill: "Conjuntos Numéricos"', to: 'skill: "Conjuntos"' },
    { from: 'skill: "Revisão Geral"', to: 'skill: "Geral"' },
    { from: 'skill: "Independências América"', to: 'skill: "Independências"' },
    { from: 'skill: "Geoeconomia Mundial"', to: 'skill: "Geoeconomia"' }
];

let substituted = 0;
replacements.forEach(r => {
    // Escaping regex characters if needed, but these are simple
    const regex = new RegExp(r.from, 'g');
    const matches = content.match(regex);
    if (matches) {
        substituted += matches.length;
        content = content.replace(regex, r.to);
    }
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Manutenção concluída: ${substituted} ocorrências corrigidas.`);
