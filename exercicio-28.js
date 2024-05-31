const matriz = [ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ];

let somaAcima = 0;
let somaAbaixo = 0;
               
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (j > i) {
        somaAcima += matriz[i][j]; 
        } else if (i > j) {
        somaAbaixo += matriz[i][j]; 
        }
    }
}

console.log(`A soma dos elementos acima da diagonal principal é: ${somaAcima} \nA soma dos elementos abaixo da diagonal principal é: ${somaAbaixo}`)

/* Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */