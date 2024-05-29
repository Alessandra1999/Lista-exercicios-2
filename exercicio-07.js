const prompt = require('prompt-sync')();

let carro = prompt("O carro alugado era popular ou de luxo? ");
let dias = prompt("Por quantos dias foi alugado? ");
let km = prompt("Quantos km foram percorridos? ");

let valorTotalDias = 0.0;
let valorTotalKm = 0.0;
let valorTotal;

if (carro == 'popular') {
    valorTotalDias = dias * 90;
    if (km  <= 100) {
        for (let i = 0; i < km; i++) {
            valorTotalKm += 0.20;
        }
    } else {
        for (let i = 0; i < km; i++) {
            valorTotalKm += 0.10;
        }
    }
    valorTotal = valorTotalDias + valorTotalKm;
} 
else if (carro == 'luxo') {
    valorTotalDias = dias * 150.0;

    if (km  <= 200) {
        for (let i = 0; i < km; i++) {
            valorTotalKm += 0.30;
        }
    } else {
        for (let i = 0; i < km; i++) {
            valorTotalKm += 0.25;
        }
    }
    valorTotal = valorTotalDias + valorTotalKm;
}

console.log(`O valor a ser pago será de R$${valorTotal.toFixed(2)}.`);


/* Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */