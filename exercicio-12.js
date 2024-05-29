let fibonacci = [1, 1];
let soma = 0;

for (let i = 0; i < 8; i++) {
    soma = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
    fibonacci.push(soma);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci[i]);
}


/* Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */