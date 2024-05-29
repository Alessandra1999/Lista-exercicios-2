const matriz = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][2 - 1];
}

let media = soma / 3;
console.log("A média dos elementos da diagonal secundária é: " + media + ".");

let diagonalPrincipal = [];

for (let i = 0; i < matriz.length; i++) {
    diagonalPrincipal.push(matriz[i][i]);
}

let multiplicacao = 0;

for (let i = 0; i < matriz.length; i++) {
    multiplicacao = diagonalPrincipal[i] * media;
    console.log("A multiplicação do " + (i + 1) + "º número da diagonal principal é: " + multiplicacao + ".");
}


/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */