const prompt = require('prompt-sync')();

const M = [ [1, 6, 7, 8, 6, 2],
            [2, 3, 1, 9, 7, 4],
            [0, 1, 7, 3, 2, 2],
            [9, 3, 4, 8, 4, 3],
            [6, 9, 2, 7, 1, 5],
            [4, 7, 3, 6, 5, 9] ];

let A = prompt("Digite um valor: ");

let V = [];

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        V.push(M[i][j] * A);
    }
}

console.log(V + " ");

/* Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */