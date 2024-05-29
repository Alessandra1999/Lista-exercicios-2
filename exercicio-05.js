const prompt = require('prompt-sync')();

let joKenPo = ['pedra', 'papel', 'tesoura'];
let continuar;

do {
    let escolha = prompt("Escolha entre pedra, papel e tesoura: ");

    let random = joKenPo[Math.ceil(Math.random() * (joKenPo.length - 1))];
    console.log(`O computador escolheu ${random}`);

    if (escolha == 'pedra') {
        if (random == 'pedra') {
            console.log("O jogo empatou!");
        } else if (random == 'papel') {
            console.log("Papel ganha de pedra, o computador venceu!");
        } else if (random == 'tesoura') {
            console.log("Pedra ganha de tesoura, você venceu!");
        }
    }
    else if (escolha == 'papel') {
        if (random == 'papel') {
            console.log("O jogo empatou!");
        } else if (random == 'tesoura') {
            console.log("Tesoura ganha de papel, o computador venceu!");
        } else if (random == 'pedra') {
            console.log("Papel ganha de pedra, você venceu!");
        }
    }
    else if (escolha == 'tesoura') {
        if (random == 'tesoura') {
            console.log("O jogo empatou!");
        } else if (random == 'pedra') {
            console.log("Pedra ganha de tesoura, o computador venceu!");
        } else if (random == 'papel') {
            console.log("Tesoura ganha de papel, você venceu!");
        }
    }
    continuar = prompt("Deseja jogar novamente(s/n)? ");
} while (continuar == 's');
// Faça um jogo de JoKenPo (Pedra-Papel-Tesoura). 