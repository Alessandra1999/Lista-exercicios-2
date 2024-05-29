const prompt = require('prompt-sync')();

let numeros = [];
let pares = [];
let numero;

for (let i = 0; i < 10; i++) {
    numero = parseInt(prompt(`Digite o ${i + 1}° número: `));
    numeros.push(numero);
    if (numero % 2 == 0) {
        pares.push({numero: numeros[i], posicao: i });
    }
}

console.log("-------------------------");

if (pares.length == 0) {
    console.log(`Nenhum número par foi digitado!`);
}
else {
    for (let i = 0; i < pares.length; i++) {
        console.log(`Número ${pares[i].numero} na posição ${pares[i].posicao}`);
    }
}

/* Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */