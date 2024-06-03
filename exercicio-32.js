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

let M = gerarMatriz(12, 13, 1, 20);

console.log("Matriz M:")
M.forEach(linha => console.log(linha.join(' ')));

let modificada = [];

for (let i = 0; i < M.length; i++) {
    let linhaOriginal = M[i];
    let maiorValor = Math.max(...linhaOriginal.map(Math.abs));
    let linhaModificada = linhaOriginal.map(valor => valor / maiorValor);
    modificada.push(linhaModificada);
}

console.log("-----------------------------------------------------------------");
console.log("Matriz modificada: ");
for (let i = 0; i < modificada.length; i++) {
    let print = "";
    for (let j = 0; j < modificada[i].length; j++) {
        print += modificada[i][j] + ", ";
    }
    console.log(print);
} 

/* Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */