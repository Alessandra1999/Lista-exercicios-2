const prompt = require('prompt-sync')();

let numeros = [];
let numero;
let continuar;
let soma = 0;
let contador = 0;

do {
    numero = parseInt(prompt("Digite um número: "));
    numeros.push(numero);
    if (numero % 2 == 0) {
        contador++;
    }
    continuar = prompt("Deseja adicionar mais números(s/n)? ");
} while (continuar == 's');

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

let media = soma / numeros.length;
let min = Math.min(...numeros);
let numerosPares = numeros.filter(numero => numero % 2 == 0);

console.log("------------------------------------");
console.log(`A soma de todos os valores é ${soma}.`);
console.log(`O menor valor digitado foi ${min}.`);
console.log(`A média dos valores digitados é ${media.toFixed(2)}.`);
if (contador > 0) {
    console.log(`Foram digitados ${contador} números pares, são eles: ${numerosPares}.`);
} else {
    console.log(`Não foi digitado nenhum número par.`);
}


/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */