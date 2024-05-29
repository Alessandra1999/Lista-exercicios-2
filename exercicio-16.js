let numeros = [];
let print = "";
let print2;

for (let i = 0; i < 20; i++) {
    numeros[i] = parseInt(Math.random() * 99);
    print += numeros[i] + " ";
}

console.log("Vetor números aleatórios: ");
console.log(print);

for (i = 0; i < numeros.length; i++) {
  print2 = numeros.sort(crescente) + " ";
}

console.log("Vetor na ordem crescente: ")
console.log(print2);

function crescente(a, b) {
  if (a < b) {
    return -1;
  }
  else {
    return 1;
  }
}

 

/* Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */