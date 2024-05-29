const A = [ [1, 2, 7, 1, 5],
            [9, 5, 7, 6, 1],
            [1, 7, 3, 9, 4] ];

const B = [ [3, 4, 6, 7, 8],
            [4, 6, 7, 2, 9], 
            [3, 7, 6, 2, 7] ];

const P = [[0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0], 
           [0, 0, 0, 0, 0] ];

for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[i].length; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log("Matriz Produto P:")
for (let i = 0; i < A.length; i++) {
  console.log(P[i]);
}

/* Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */