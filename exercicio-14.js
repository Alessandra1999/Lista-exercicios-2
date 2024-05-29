const prompt = require('prompt-sync')();

let nomes = [];
let nome;

for (let i = 1; i <= 7; i++) {
    nome = prompt(`Digite o ${i}° nome: `);
    nomes.push(nome);
}

nomes.reverse();

for (let i = 0; i < 7; i++) {
    console.log(nomes[i]);
}
/* Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */