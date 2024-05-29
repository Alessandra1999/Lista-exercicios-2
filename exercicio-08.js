const prompt = require('prompt-sync')();

let horas = prompt("Quantas horas de atividade você teve por mês? ");
let meses = prompt("Por quantos meses? ");

let pontos = 0;

if (horas <= 10) {
    for (let i = 0; i < horas; i++) {
        pontos += 2;
    }
} else if (horas > 10 && horas <= 20) {
    for (let i = 0; i < horas; i++) {
        pontos += 5;
    }
} else {
    for (let i = 0; i < horas; i++) {
        pontos += 10;
    }
}

let pontosTotais = pontos * meses;
let valorGanho = pontosTotais * 0.05;

console.log(`O total de pontos foi ${pontosTotais} e o valor recebido foi R$${valorGanho.toFixed(2)}.`)

/* Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */