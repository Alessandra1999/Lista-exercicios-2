const prompt = require('prompt-sync')();

let arrayRetas = [];

for (let i = 1; i <= 3; i++) {
   let retas = parseInt(prompt(`Digite o tamanho da ${i}ª reta: `));
    arrayRetas.push(retas);
}

 if (arrayRetas[0] < (arrayRetas[1] + arrayRetas[2]) && arrayRetas[1] < (arrayRetas[0] + arrayRetas[2]) && arrayRetas[2] < (arrayRetas[0] + arrayRetas[1])) {
    console.log("É possível formar um triângulo com os tamanhos digitados.")
 } else {
    console.log("Não é possível formar um triângulo com os tamanhos digitados.") 
 } 

/* Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */