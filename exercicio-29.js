const M = [ [1, 2, 3, 4, 5], 
            [6, 7, 8, 9, 0],
            [4, 3, 2, 6, 8],
            [7, 6, 1, 5, 3],
            [0, 2, 5, 4, 6] ];

let somaLinha = 0;
let somaColuna = 0;
let somaDiagonal = 0;
let somaTotal = 0;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
        if (i === 3) {
            somaLinha += M[i][j];
        }
        if (j === 1) {
            somaColuna += M[i][j];
        }
        if (i === j) {
            somaDiagonal += M[i][j];
        }

        somaTotal += M[i][j];
    }
}

console.log(`A soma da Linha 4 é: ${somaLinha} \nA soma da Coluna 2 é: ${somaColuna} \nA soma da Diagonal Principal é: ${somaDiagonal} \nA soma de todos os elementos da matriz é: ${somaTotal}`);

console.log("Matriz M: ");
for (let i = 0; i < M.length; i++) {
    let print = "";
    for (let j = 0; j < M[i].length; j++) {
        print += M[i][j] + " ";
    }
    console.log(print);
}

/* Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */