const M = [ [1, -2, 3, -4, 5, -6, 7, -8],
            [10, -25, -43, -95, 56, -27, 32, 65],
            [45, -7, 32, -87, 96, 11, 9, -2],
            [9, 45, -7, 32, 6, 135, 74, 132],
            [-4, -24, 37, -40, -53, -698, -45, 8],
            [-100, -5, -42, -5, -51, -7, -36, -78] ];

let C = [];

for (let i = 0; i < M.length; i++) {
    let contador = 0;
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            contador++;
        }
    }
    C.push(contador);
}

for (let i = 0; i < M.length; i++) {
    console.log(`Na ${i + 1}ª linha tem ${C[i]} número(s) negativo(s).`);
}


/* Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */