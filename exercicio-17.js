const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];
let menores = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
    nomes.push(nome);
    let idade = parseInt(prompt(`Digite a idade da ${i + 1}ª pessoa: `));
    idades.push(idade);
    if (idade < 18) {
        menores.push({nome: nomes[i], idade: idades[i]});
    }
}

if (menores.length == 0) {
    console.log("Não foi digitado nenhuma pessoa menor de idade.");
}
else {
    console.log("Menores de idade: ")
    for (let i = 0; i < menores.length; i++) {
        console.log(`${menores[i].nome} tem ${menores[i].idade} ano(s).`)
    }
}

/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */