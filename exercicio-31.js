const prompt = require('prompt-sync')();

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

let V = gerarMatriz(30, 30, 1, 100);

console.log("Matriz V:")
V.forEach(linha => console.log(linha.join(', ')));

let A = parseInt(prompt("Digite um valor entre 1 e 100: "));

let contadorA = 0;
let vetorX = [];

    for (let i = 0; i < V.length; i++) {
        for (let j = 0; j < V[i].length; j++) {
            if (V[i][j] === A) {
                contadorA++;
            } 
            else if (V[i][j] !== A) {
                vetorX.push(V[i][j]);
            }
        }
    }

console.log("-----------------------------------------------------------------");
console.log(`O valor de A: ${A} apareceu ${contadorA} vezes na matriz V.`);

function vetorParaMatriz(vetor, tamanho) {
    let matriz = [];
    for (let i = 0; i < vetor.length; i += tamanho) {
        matriz.push(vetor.slice(i, i + tamanho));
    }
    return matriz;
}

let matrizX = vetorParaMatriz(vetorX, 30);

console.log("-----------------------------------------------------------------");
console.log("Matriz X: ");
for (let i = 0; i < matrizX.length; i++) {
    let print = "";
    for (let j = 0; j < matrizX[i].length; j++) {
        print += matrizX[i][j] + " ";
    }
    console.log(print);
}




/* Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */