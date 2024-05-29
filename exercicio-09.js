const prompt = require('prompt-sync')();

let salarioFeminino = [];
let salarioMasculino = [];
let salario = 0.0;
let parar;
let somaFeminino = 0.0;
let somaMasculino = 0.0;

do {
    let sexo = prompt("O funcionário é do sexo feminino ou masculino? ");
    if (sexo === 'feminino') {
        salario = parseFloat(prompt("Digite o valor do salário: "));
        salarioFeminino.push(salario);
    } else if (sexo === 'masculino') {
        salario = parseFloat(prompt("Digite o valor do salário: "));
        salarioMasculino.push(salario);
    } 
    parar = prompt("Deseja adicionar mais um funcionário(s/n)? ");
} while (parar == 's');

for (let i = 0; i < salarioFeminino.length; i++) {
    somaFeminino += salarioFeminino[i];
}
for (let i = 0; i < salarioMasculino.length; i++) {
    somaMasculino += salarioMasculino[i];
}

console.log(`A soma dos salários dos funcionários do sexo masculino é de R$${somaMasculino.toFixed(2)} e a soma dos salários dos funcionários do sexo feminino é de R$${somaFeminino.toFixed(2)}.`);

/* Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */