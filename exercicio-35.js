let vetorPar = [];
let vetorImpar = [];
let numero = 0;

let vetorNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

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