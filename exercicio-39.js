let A = [];
let B = [];

for (let i = 0; i < 100; i++) {
    let numero = (parseInt(Math.random() * 200) - 100);
    A.push(numero);
}

console.log("Vetor A: " + A);

for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
        B.push(A[i]);
    }
}

console.log("Vetor B: " + B);

/* Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */