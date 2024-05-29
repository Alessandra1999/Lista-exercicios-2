const prompt = require('prompt-sync')();
let arraySalarios = [];
let arrayFilhos = [];
let salario = 0.0;
let filhos = 0;
let continuar;
let contador = 0;


do {
    salario = parseFloat(prompt("Digite o salário: "));
    arraySalarios.push(salario);
    if (salario <= 350) {
        contador ++;
    }
    filhos = parseInt(prompt("Digite a quantidade de filhos: "));
    arrayFilhos.push(filhos);

    continuar = prompt("Deseja adicionar os dados de mais uma pessoa(s/n)? ")
} while (continuar == 's');

console.log(media(arraySalarios, arrayFilhos));

function media(valorSalario, valorFilhos) {

    let somaSalario = 0.0;
    let somaFilhos = 0;
    let maiorSalario = 0.0;
    let porcentagem = 0;

    for (let i = 0; i < valorSalario.length; i++) {
        somaSalario += valorSalario[i];
        somaFilhos += valorFilhos[i];
        maiorSalario = Math.max(...valorSalario);
        porcentagem = (contador / valorSalario.length) * 100;
    }
    let mediaSalario = somaSalario / valorSalario.length;
    let mediaFilhos = somaFilhos / valorFilhos.length;

    return "A média de salário da população é R$ " + mediaSalario.toFixed(2) + 
            "\nA média de filhos da população é: " + mediaFilhos.toFixed(2) +
            "\nO maior salário foi de R$ " + maiorSalario.toFixed(2) +
            "\nOs salários até R$ 350.00 são " + porcentagem.toFixed(2) + "%";
}


/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */