let A = [1, -2, 3, null, 5, -6, 7, 8, 9, -10, 11, 12, null, 14, 15, 16, 17, -18, null, 20, 21, -22, 23, 24, 25, -26, null, 28, 29, 30, -31, 32, -33, 34, -35, 36, null, 38, 39, -40, 41, 42, 43, null, 45, 46, 47, -48, 49, 50, 51, null, 53, 54, 55, null, 57, 58, -59, 60, 61, 62, null, -64, 65, 66, 67, null, 69, 70, 71, 72, null, 74, -75, 76, 77, -78, 79, 80, 81, null, 83, 84, 85, -86, 87, 88, 89, -90, 91, null, 93, -94, 95, 96, 97, null, 99, 100];
let B = [];

for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] != null) {
        B.push(A[i]);
    }
}

console.log("Vetor B: " + B);

/* Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */