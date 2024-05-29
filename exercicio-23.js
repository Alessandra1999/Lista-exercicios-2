const matrizIdentidade = [ [1, 0, 0, 0, 0, 0, 0],
                           [0, 1, 0, 0, 0, 0, 0],
                           [0, 0, 1, 0, 0, 0, 0],
                           [0, 0, 0, 1, 0, 0, 0],
                           [0, 0, 0, 0, 1, 0, 0],
                           [0, 0, 0, 0, 0, 1, 0],
                           [0, 0, 0, 0, 0, 0, 1] ];

for (let i = 0; i < matrizIdentidade.length; i++) {
    let print = "";
    for (let j = 0; j < matrizIdentidade[i].length; j++) {
        print += matrizIdentidade[i][j] + " ";
    }
    console.log(print);
}

/* Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */