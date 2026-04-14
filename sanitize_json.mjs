import fs from 'fs';

const filePath = 'C:\\Users\\SEEMG\\Downloads\\deepseek_json_20260325_9d95ee.json';

try {
    const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    let fixedCount = 0;

    const fixedLines = lines.map((line, index) => {
        // Regex para capturar linhas de enunciado ou alternativas
        // Ex: "enunciado": "valor", ou "a": "valor",
        const match = line.match(/^(\s*"(?:enunciado|[a-d]|topico)":\s*")(.*)("),?\s*$/);
        
        if (match) {
            const prefix = match[1];
            const content = match[2];
            const suffix = match[3];
            
            // Se o conteúdo contém aspas não escapadas
            // Procurar por aspas que não sejam precedidas por \
            // Mas neste JSON, o problema é que as aspas internas são simplesmente " e não \"
            // Regex para aspas internas: qualquer " que não esteja no início ou fim (já removidos pelo match)
            if (content.includes('"')) {
                const newContent = content.replace(/(?<!\\)"/g, '\\"');
                if (newContent !== content) {
                    fixedCount++;
                    const fullLine = line.includes(',') ? `${prefix}${newContent}${suffix},` : `${prefix}${newContent}${suffix}`;
                    return fullLine;
                }
            }
        }
        return line;
    });

    if (fixedCount > 0) {
        fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf-8');
        console.log(`Sucesso! Corrigidas ${fixedCount} linhas com aspas não escapadas.`);
    } else {
        console.log('Nenhuma aspa não escapada encontrada pelo padrão.');
    }

} catch (err) {
    console.error('Erro ao processar o arquivo:', err);
}
