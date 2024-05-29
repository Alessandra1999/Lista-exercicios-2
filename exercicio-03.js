const prompt = require('prompt-sync')();

let distancia = prompt("Digite a distância desejada(km): ");

let valor;

if (distancia <= 200) {
    for (let i = 0; i < distancia; i++) {
        valor = distancia * 0.50;
    }
    console.log(`O valor da passagem será de ${valor} reais.`)
} else {
    for (let i = 0; i < distancia; i++) {
        valor = distancia * 0.45;
    }
    console.log(`O valor da passagem será de ${valor} reais.`)
}

/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */