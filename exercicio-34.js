function gerarMatriz(linhas, colunas, min, max) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            let valorAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            linha.push(valorAleatorio);
        }
        matriz.push(linha);
    }
    return matriz;
}

let matriz = gerarMatriz(50, 50, 1, 10);

console.log("Matriz principal:")
matriz.forEach(linha => console.log(linha.join(', ')));

let matrizMultiplicada = [];
for (let i = 0; i < matriz.length; i++) {
    let elementoDiagonal = parseFloat(matriz[i][i]); 
    let novaLinha = matriz[i].map(elemento => (parseFloat(elemento) * elementoDiagonal));
    matrizMultiplicada.push(novaLinha);
}

console.log("-----------------------------------------------------------------");
console.log("Matriz Multiplicada: ");
for (let i = 0; i < matrizMultiplicada.length; i++) {
    let print = "";
    for (let j = 0; j < matrizMultiplicada[i].length; j++) {
        print += matrizMultiplicada[i][j] + " ";
    }
    console.log(print);
}


/* Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */