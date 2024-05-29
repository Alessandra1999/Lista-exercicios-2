let fibonacci = [1, 1];
let soma = 0;

for (let i = 0; i < 13; i++) {
    soma = fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
    fibonacci.push(soma);
}

for (let i = 0; i < 15; i++) {
    console.log(fibonacci[i]);
}


/* Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */