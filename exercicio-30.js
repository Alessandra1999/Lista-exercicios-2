const M = [ [1, 2, 3, 4, 5], 
            [6, 7, 8, 9, 0],
            [4, 3, 2, 6, 8],
            [7, 6, 1, 5, 3],
            [0, 2, 5, 4, 6] ];

let sl = new Array(5).fill(0);
let sc = new Array(5).fill(0);

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
        sl[i] += M[i][j];
        sc[j] += M[i][j];
    }
}

console.log("Matriz M: ");
for (let i = 0; i < M.length; i++) {
    let print = "";
    for (let j = 0; j < M[i].length; j++) {
        print += M[i][j] + " ";
    }
    console.log(print);
}

console.log("O vetor de soma das linhas é: " + sl + " ");
for (let i = 0; i < sl.length; i++) {
    console.log(`A soma da ${i + 1}ª linha da matriz é: ${sl[i]}.`);
}

console.log("O vetor de soma das colunas é: " + sc + " ");
for (let i = 0; i < sc.length; i++) {
    console.log(`A soma da ${i + 1}ª coluna da matriz é: ${sc[i]}.`);
    }
/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */