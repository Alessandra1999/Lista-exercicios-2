const prompt = require('prompt-sync')();

let elementos = [];
let soma = 0;
let primeiroNumero = parseInt(prompt("Digite o primeiro número para uma Progressão Aritmética: "));
let razao = parseInt(prompt ("Digite a razão da Progressão Aritmética: "));

for (let i = 0; i < 10; i++) {
    let numero = primeiroNumero + i * razao; 
    elementos.push(numero);
    soma += numero;
}

console.log(`Os 10 primeiros elementos da Progressão Aritmética são: ${elementos}`);
console.log(`A soma desses elementos é: ${soma}`);

/* Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */