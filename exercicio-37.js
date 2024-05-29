let G = ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'];

const alunos = [
    {nome: 'Alessandra', respostas: ['B', 'C', 'A', 'D', 'B', 'C', 'B', 'A', 'A', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Alex',       respostas: ['C', 'C', 'A', 'A', 'D', 'C', 'B', 'A', 'B', 'C', 'B', 'A', 'A', 'D', 'D', 'B', 'B', 'D', 'C', 'A'] },
    {nome: 'Juliana',    respostas: ['A', 'B', 'C', 'D', 'B', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'B'] },
    {nome: 'Karoline',   respostas: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'] },
    {nome: 'Maria',      respostas: ['D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A'] },
    {nome: 'Manuela',    respostas: ['B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C'] },
    {nome: 'Gustavo',    respostas: ['C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'] },
    {nome: 'Matheus',    respostas: ['A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D'] },
    {nome: 'Ana',        respostas: ['D', 'B', 'C', 'A', 'D', 'B', 'C', 'A', 'D', 'B', 'C', 'A', 'D', 'B', 'C', 'A', 'D', 'B', 'C', 'A'] },
    {nome: 'Gabriel',    respostas: ['B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'D', 'A', 'C'] },
    {nome: 'Diana',      respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Henrique',   respostas: ['B', 'B', 'C', 'D', 'B', 'C', 'C', 'A', 'D', 'A', 'C', 'B', 'C', 'D', 'A', 'B', 'C', 'B', 'A', 'C'] },
    {nome: 'Ravi',       respostas: ['A', 'C', 'D', 'D', 'D', 'A', 'B', 'C', 'A', 'C', 'C', 'B', 'C', 'D', 'C', 'D', 'C', 'D', 'C', 'B'] },
    {nome: 'Gabriela',   respostas: ['C', 'B', 'A', 'D', 'B', 'C', 'C', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'C', 'A', 'C', 'B', 'C', 'C'] },
    {nome: 'Jorge',      respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'D', 'A', 'D', 'C', 'C'] },
    {nome: 'Bianca',     respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'C', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'A', 'A', 'D', 'C', 'C'] },
    {nome: 'Marcelo',    respostas: ['B', 'C', 'A', 'A', 'D', 'C', 'B', 'B', 'D', 'C', 'B', 'C', 'A', 'A', 'C', 'D', 'A', 'C', 'C', 'A'] },
    {nome: 'Luis',       respostas: ['C', 'C', 'A', 'D', 'A', 'C', 'B', 'D', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'C', 'D', 'C', 'C'] },
    {nome: 'Michele',    respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'William',    respostas: ['A', 'D', 'B', 'D', 'C', 'C', 'A', 'A', 'C', 'C', 'A', 'B', 'B', 'B', 'C', 'B', 'C', 'D', 'C', 'D'] },
    {nome: 'Mariana',    respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Evelyn',     respostas: ['A', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'B', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'João',       respostas: ['B', 'C', 'D', 'D', 'D', 'B', 'B', 'A', 'D', 'D', 'B', 'B', 'A', 'D', 'C', 'A', 'A', 'D', 'C', 'B'] },
    {nome: 'Regina',     respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'B', 'A', 'B', 'D', 'C', 'A', 'A', 'B', 'A', 'D', 'A', 'B', 'D'] },
    {nome: 'Pedro',      respostas: ['B', 'C', 'C', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'D', 'B', 'B', 'A', 'C', 'C', 'A', 'D', 'B', 'C'] },
    {nome: 'Felipe',     respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Luana',      respostas: ['B', 'C', 'C', 'D', 'A', 'A', 'B', 'C', 'D', 'C', 'C', 'B', 'A', 'D', 'C', 'D', 'A', 'D', 'C', 'D'] },
    {nome: 'Joaquim',    respostas: ['B', 'C', 'A', 'D', 'A', 'C', 'C', 'A', 'D', 'D', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'A', 'C', 'C'] },
    {nome: 'Jenifer',    respostas: ['C', 'D', 'B', 'A', 'B', 'D', 'C', 'B', 'A', 'D', 'C', 'D', 'B', 'D', 'A', 'B', 'A', 'C', 'C', 'D'] },
    {nome: 'Rita',       respostas: ['A', 'C', 'A', 'D', 'D', 'D', 'B', 'A', 'D', 'C', 'B', 'A', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Andressa',   respostas: ['A', 'B', 'C', 'D', 'C', 'A', 'C', 'B', 'D', 'A', 'C', 'B', 'C', 'B', 'A', 'B', 'C', 'B', 'A', 'B'] },
    {nome: 'Eduardo',    respostas: ['B', 'C', 'C', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'C', 'B', 'A', 'D', 'D', 'C'] },
    {nome: 'Andrei',     respostas: ['D', 'C', 'B', 'D', 'A', 'C', 'B', 'A', 'D', 'C', 'C', 'B', 'A', 'D', 'A', 'B', 'A', 'B', 'C', 'A'] },
    {nome: 'Junior',     respostas: ['C', 'C', 'A', 'D', 'B', 'C', 'B', 'A', 'A', 'C', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'C', 'A', 'B'] },
    {nome: 'Rafael',     respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Antônio',    respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Rafaela',    respostas: ['B', 'A', 'A', 'B', 'D', 'C', 'B', 'A', 'D', 'A', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'D', 'C'] },
    {nome: 'Elis',       respostas: ['B', 'C', 'B', 'D', 'D', 'C', 'A', 'A', 'D', 'C', 'B', 'B', 'A', 'C', 'C', 'B', 'B', 'B', 'C', 'C'] },
    {nome: 'Luiza',      respostas: ['A', 'C', 'A', 'D', 'C', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'B', 'C', 'B', 'A', 'D', 'B', 'C'] },
    {nome: 'Camila',     respostas: ['B', 'D', 'A', 'B', 'D', 'C', 'B', 'A', 'A', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'D', 'D', 'C', 'B'] },
    {nome: 'Juliano',    respostas: ['B', 'C', 'A', 'A', 'D', 'C', 'B', 'B', 'D', 'D', 'A', 'C', 'D', 'B', 'A', 'C', 'D', 'B', 'C', 'A'] },
    {nome: 'Tatiana',    respostas: ['B', 'C', 'B', 'D', 'D', 'B', 'B', 'A', 'D', 'C', 'B', 'B', 'B', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Rodrigo',    respostas: ['A', 'B', 'C', 'D', 'D', 'C', 'B', 'B', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Valquíria',  respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Everton',    respostas: ['A', 'B', 'A', 'B', 'D', 'B', 'B', 'A', 'B', 'C', 'B', 'B', 'B', 'D', 'C', 'B', 'B', 'D', 'B', 'B'] },
    {nome: 'Aurora',     respostas: ['B', 'C', 'A', 'A', 'D', 'C', 'B', 'A', 'C', 'C', 'B', 'D', 'A', 'D', 'C', 'B', 'D', 'D', 'C', 'C'] },
    {nome: 'Jaqueline',  respostas: ['B', 'C', 'D', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'A', 'B', 'A', 'D', 'C', 'A', 'A', 'D', 'A', 'C'] },
    {nome: 'Yago',       respostas: ['C', 'C', 'A', 'C', 'D', 'C', 'B', 'A', 'D', 'C', 'C', 'B', 'A', 'D', 'C', 'C', 'A', 'D', 'C', 'C'] },
    {nome: 'Larissa',    respostas: ['B', 'C', 'A', 'D', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'C'] },
    {nome: 'Helena',     respostas: ['B', 'B', 'A', 'D', 'B', 'C', 'B', 'A', 'D', 'C', 'B', 'B', 'A', 'D', 'A', 'B', 'A', 'D', 'A', 'C'] },
]

for (let provas of alunos) {
    let contador = 0;
    for (let i = 0; i < provas.respostas.length; i++) {
        if (provas.respostas[i] === G[i]) {
            contador++;
        }
    }
    if (contador >= 12) {
        console.log("Aluno: " + provas.nome + " Acertos: " + contador + " APROVADO!");
    }
    else {
        console.log("Aluno: " + provas.nome + " Acertos: " + contador + " REPROVADO!");
    }
}


/* Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */