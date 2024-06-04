const prompt = require('prompt-sync')();

const obj = {
    a: parseInt(prompt("Digite um número: ")),
    b: parseInt(prompt("Digite um número: ")),
    c: parseInt(prompt("Digite um número: "))
}

console.log(somaDez(obj));

function somaDez(objeto) {
    const novoObjeto = {};
    for (let propriedade in objeto) {
        novoObjeto[propriedade] = objeto[propriedade] + 10;
    }
    return novoObjeto;
}

/* Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */