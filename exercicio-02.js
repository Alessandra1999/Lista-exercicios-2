const prompt = require('prompt-sync')();

let velocidade = parseInt(prompt("Digite a velocidade do carro(km/h): "));
let multa = 0;

if (velocidade > 80) {
    for (let i = 80; i < velocidade; i++) {
        multa += 5;
    }
    console.log(`O carro ultrapassou o limite de velocidade de 80km/h, portanto, deverá ser pago ${multa} reais de multa.`)
} else {
    console.log(`O carro está dentro do limite de velocidade.`)
}


/* Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */