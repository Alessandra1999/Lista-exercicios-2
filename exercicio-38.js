const prompt = require('prompt-sync')();

let vetor = [11, 2, 43, 24, 35, 6];

let identificador = prompt("Digite um número de 1 a 5: ");

if (identificador == 1) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    console.log("A soma dos elementos é: " + soma);
}
else if (identificador == 2) {
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
        produto *= vetor[i];
    }
    console.log("A soma dos elementos é: " + produto);
}
else if (identificador == 3) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    let media = soma / vetor.length;
    console.log("A média dos elementos do vetor é: " + media.toFixed(2));
}
else if (identificador == 4) {
    console.log("O vetor em ordem crescente fica: " + vetor.sort(crescente) + " ");
}
else if (identificador == 5) {
    console.log(vetor + " ");
}
else {
    console.log("Você digitou um identificador inválido!");
}


function crescente(a, b) {
    if (a < b) {
      return -1;
    }
    else {
      return 1;
    }
  }

/* Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */