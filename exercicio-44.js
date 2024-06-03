const objeto = {nome: 'Alessandra Bombardi Rocha',
    idade: 24,
    graduacao: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Uniasselvi',
    semestre: 4
}

console.log("A quantidade de strings no objeto é: " + contarStrings(objeto));

function contarStrings(obj) {
    let contador = 0;
    for (let propriedade in obj) {
        if (typeof obj[propriedade] === 'string') {
            contador++;
        }
    }
    return contador;
}


/* Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */