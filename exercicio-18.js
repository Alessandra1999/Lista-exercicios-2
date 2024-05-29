const prompt = require('prompt-sync')();

const funcionario = {
    nome: prompt("Digite o nome do funcionário: "),
    cargo: prompt("Digite o cargo do funcionário: "),
    salario: prompt("Digite o salário do funcionário: ")
}

funcionario.registro = function() {
    return `O funcionário ${this.nome} tem o cargo de ${this.cargo} e recebe um salário de R$${this.salario} por mês.`
} 

console.log(funcionario.registro());


/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */