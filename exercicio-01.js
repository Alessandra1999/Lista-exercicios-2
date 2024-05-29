const prompt = require('prompt-sync')();

let cigarrosPorDia = prompt("Quantos cigarros você fuma por dia? ");
let anos = prompt("Há quantos anos você fuma? ");
let minutosPorDia = 0;

for (let i=0; i < cigarrosPorDia; i++) {
    minutosPorDia += 10;
}

let totalMinutos = minutosPorDia * (anos * 365);
let totalHoras = totalMinutos / 60;
let totalDias = totalHoras / 24;

console.log(`Você já perdeu aproximadamente ${totalDias.toFixed(2)} dias de vida.`);



/* Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */