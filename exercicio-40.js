let resultado = [12, 22, 34, 47, 56];

const apostas = [ [53, 23, 55, 59, 2],
                [34, 37, 2, 6, 1],
                [32, 21, 6, 4, 5],
                [44, 20, 36, 10, 9],
                [52, 45, 57, 9, 18],
                [16, 46, 13, 22, 47],
                [7, 52, 52, 17, 13],
                [5, 5, 33, 2, 56],
                [45, 55, 59, 36, 32],
                [50, 20, 40, 52, 1],
                [57, 11, 48, 33, 3],
                [11, 49, 16, 17, 19],
                [5, 18, 15, 44, 60],
                [51, 53, 54, 46, 44],
                [43, 18, 21, 20, 16],
                [55, 14, 13, 4, 28],
                [12, 27, 37, 11, 49],
                [42, 16, 33, 12, 2],
                [10, 28, 53, 23, 52],
                [45, 21, 1, 11, 57], 
                [11, 50, 57, 7, 16],
                [10, 47, 9, 34, 52],
                [12, 22, 34, 47, 56],
                [59, 45, 14, 29, 13],
                [32, 18, 22, 5, 8],
                [31, 41, 42, 35, 13],
                [29, 17, 26, 30, 16],
                [10, 26, 8, 56, 39],
                [40, 4, 41, 10, 52],
                [55, 53, 34, 52, 42],
                [46, 28, 3, 2, 19],
                [21, 14, 21, 35, 40],
                [12, 2, 53, 6, 47],
                [29, 30, 21, 26, 12],
                [14, 32, 47, 18, 43],
                [49, 57, 41, 32, 46],
                [49, 54, 18, 42, 45],
                [27, 42, 27, 16, 49],
                [60, 39, 38, 50, 41],
                [14, 50, 18, 33, 20],
                [10, 37, 29, 21, 39],
                [36, 35, 23, 30, 41],
                [51, 29, 42, 20, 36],
                [12, 20, 54, 58, 27],
                [2, 17, 45, 5, 3],
                [35, 16, 46, 46, 38],
                [12, 25, 37, 51, 3],
                [23, 56, 49, 41, 45],
                [5, 2, 49, 4, 36],
                [1, 4, 48, 59, 57] ];

for (let aposta of apostas) {
    let contador = 0;
    for (let i = 0; i < resultado.length; i++) {
        if (aposta[i] === resultado[i]) {
            contador++;
        }
    }
    if (contador != 5) {
        console.log(aposta + " ");
    }
    else if (contador === 5) {
        console.log(aposta + " GANHADOR!")
    }
}


/* Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */