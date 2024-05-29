const prompt = require('prompt-sync')();

let alt = parseFloat(prompt("Digite a altura: "));
let sexo = prompt("Digite o sexo(masculino/feminino): ");


function pesoIdeal (altura, genero) {
    if (genero == 'masculino') {
        return 72.7 * altura - 58;
    } else if (genero == 'feminino') {
        return 62.1 * altura - 44.7;
    }
}

console.log(`O peso ideal para essa pessoa é ${pesoIdeal(alt, sexo).toFixed(2)}kg.`);

/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */