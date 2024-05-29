let vetorNumeros = [];
let vetorPar = [];
let vetorImpar = [];
let numero = 0;

for (let i = 0; i < 30; i++) {
    numero = (parseInt(Math.random() * 100 + 1));
    vetorNumeros.push(numero);
}

console.log("Vetor Original: " + vetorNumeros);

for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] % 2 == 0) {
        vetorPar.push(vetorNumeros[i]);
        if (vetorPar.length == 5) {
            console.log("Vetor Par: " + vetorPar);
            vetorPar = [];
        }
    }
    else {
        vetorImpar.push(vetorNumeros[i]);
        if (vetorImpar.length == 5) {
            console.log("Vetor Ímpar: " + vetorImpar);
            vetorImpar = [];
        }
    }
     
} 



/* Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

//82,8,5,42,27,68,89,62,50,21,47,72,80,12,83,66,26,77,10,58,88,80,30,75,98,96,5,2,91,32