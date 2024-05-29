const prompt = require('prompt-sync')();

let numero = (parseInt(Math.random() * 5 + 1));
let chute;

do {
    chute = prompt("Tente adivinhar o número (1 a 5): ");
    if (chute == numero) {
        console.log(`Você acertou! O número era ${numero}.`);
    }
} 
while (chute != numero);

/* Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */