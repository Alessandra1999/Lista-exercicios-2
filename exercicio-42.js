const dados = {
    nome: 'João da Silva',
    idade: 14,
    turma: '8A',
    notasTrimestre1: [10, 8, 9, 8, 10],
    notasTrimestre2: [9, 8, 7, 9, 10],
    notasTrimestre3: [8, 9, 9, 10, 7]
}

function filtrar(objeto) {
    let resultado = {};
    
    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            resultado[chave] = objeto[chave];
        }
    }
    
    return resultado;
}

console.log(filtrar(dados));

/* Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */