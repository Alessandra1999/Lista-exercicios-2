const funcionarios = [
    { matricula: '0001', nome: 'Lucas Silveira', salarioBruto: 5000.00 },
    { matricula: '0002', nome: 'Gustavo Mantovani', salarioBruto: 4000.00 },
    { matricula: '0003', nome: 'Thiago Guerra', salarioBruto: 3780.00 },
    { matricula: '0004', nome: 'Michael Jackson', salarioBruto: 2560.00 },
    { matricula: '0005', nome: 'Tyler Joseph', salarioBruto: 6520.32 },
    { matricula: '0006', nome: 'Josh Dun', salarioBruto: 5237.54 },
    { matricula: '0007', nome: 'Axl Rose', salarioBruto: 8695.21 },
    { matricula: '0008', nome: 'Duff McKagan', salarioBruto: 1256.42 },
    { matricula: '0009', nome: 'Steven Adler', salarioBruto: 3256.00 },
    { matricula: '0010', nome: 'Izzy Stradlin', salarioBruto: 4563.20 },
    { matricula: '0011', nome: 'Saul Hudson', salarioBruto: 10548.00 },
    { matricula: '0012', nome: 'James Hetfield', salarioBruto: 4563.14 },
    { matricula: '0013', nome: 'Lars Ulrich', salarioBruto: 9450.45 },
    { matricula: '0014', nome: 'Kirk Hammet', salarioBruto: 7852.36 },
    { matricula: '0015', nome: 'Cliff Burton', salarioBruto: 7000.00 },
    { matricula: '0016', nome: 'Dave Mustaine', salarioBruto: 6597.23 },
    { matricula: '0017', nome: 'Robert Trujillo', salarioBruto: 1364.56 },
    { matricula: '0018', nome: 'Eloy Casagrande', salarioBruto: 12598.32 },
    { matricula: '0019', nome: 'Corey Taylor', salarioBruto: 25654.23 },
    { matricula: '0020', nome: 'Joey Jordison', salarioBruto: 45623.45 },
    { matricula: '0021', nome: 'Bruce Dickinson', salarioBruto: 90658.00 },
    { matricula: '0022', nome: 'Steve Harris', salarioBruto: 80452.00 },
    { matricula: '0023', nome: 'Dave Murray', salarioBruto: 65741.45 },
    { matricula: '0024', nome: 'Nicko McBrain', salarioBruto: 87451.12 },
    { matricula: '0025', nome: 'Adrian Smith', salarioBruto: 96541.84 },
    { matricula: '0026', nome: 'Damiano David', salarioBruto: 6541.74 },
    { matricula: '0027', nome: 'Victoria Di Angelis', salarioBruto: 8412.00 },
    { matricula: '0028', nome: 'Ethan Torchio', salarioBruto: 2568.95 },
    { matricula: '0029', nome: 'Thomas Raggi', salarioBruto: 7481.25 },
    { matricula: '0030', nome: 'Alex Turner', salarioBruto: 9654.74 },
    { matricula: '0031', nome: 'Matthew Helders', salarioBruto: 2514.32 },
    { matricula: '0032', nome: 'Jamie Cook', salarioBruto: 3654.12 },
    { matricula: '0033', nome: "Nick O'Malley", salarioBruto: 7485.11 },
    { matricula: '0034', nome: 'Billie Eilish', salarioBruto: 22547.50 },
    { matricula: '0035', nome: 'Dan Reynolds', salarioBruto: 95748.65 },
    { matricula: '0036', nome: 'Dan Platzman', salarioBruto: 69748.32 },
    { matricula: '0037', nome: 'Ben McKee', salarioBruto: 84512.30 },
    { matricula: '0038', nome: 'Daniel Wayne Sermon', salarioBruto: 6547.12 },
    { matricula: '0039', nome: 'Anthony Kiedis', salarioBruto: 9845.21 },
    { matricula: '0040', nome: 'Johm Frusciante', salarioBruto: 6471.89 },
    { matricula: '0041', nome: 'Chad Smith', salarioBruto: 6214.78 },
    { matricula: '0042', nome: 'Michael Peter Balzary', salarioBruto: 4267.68 },
    { matricula: '0043', nome: 'Chester Bennington', salarioBruto: 6978.51 },
    { matricula: '0044', nome: 'Mike Shinoda', salarioBruto: 8472.31 },
    { matricula: '0045', nome: 'Joe Hahn', salarioBruto: 3124.65 },
    { matricula: '0046', nome: 'Rob Bourdon', salarioBruto: 1452.36 },
    { matricula: '0047', nome: 'Dave Farrell', salarioBruto: 2674.00 },
    { matricula: '0048', nome: 'Kurt Cobain', salarioBruto: 6471.53 },
    { matricula: '0049', nome: 'Dave Grohl', salarioBruto: 3651.23 },
    { matricula: '0050', nome: 'Roger Waters', salarioBruto: 6932.00 },
    { matricula: '0051', nome: 'David Gilmour', salarioBruto: 3210.65 },
    { matricula: '0052', nome: 'Richard Wright', salarioBruto: 3100.50 },
    { matricula: '0053', nome: 'Nick Mason', salarioBruto: 6251.30 },
    { matricula: '0054', nome: 'Freddie Mercury', salarioBruto: 78520.00 },
    { matricula: '0055', nome: 'Brian May', salarioBruto: 76541.23 },
    { matricula: '0056', nome: 'John Deacon', salarioBruto: 74984.00 },
    { matricula: '0057', nome: 'Roger Taylor', salarioBruto: 73562.23 },
    { matricula: '0058', nome: 'Mick Jagger', salarioBruto: 9632.44 },
    { matricula: '0059', nome: 'Keith Richards', salarioBruto: 6974.00 },
    { matricula: '0060', nome: 'Darryl Jones', salarioBruto: 4952.00 },
    { matricula: '0061', nome: 'Angus Young', salarioBruto: 3147.23 },
    { matricula: '0062', nome: 'Brian Johnson', salarioBruto: 7845.10 },
    { matricula: '0063', nome: 'Phil Rudd', salarioBruto: 6321.99 },
    { matricula: '0064', nome: 'Cliff Williams', salarioBruto: 3214.00 },
    { matricula: '0065', nome: 'David Bowie', salarioBruto: 35621.00 },
    { matricula: '0066', nome: 'Jim Morrison', salarioBruto: 2320.41 },
    { matricula: '0067', nome: 'Steven Tyler', salarioBruto: 1325.30 },
    { matricula: '0068', nome: 'Bruce Springsteen', salarioBruto: 2563.00},
    { matricula: '0069', nome: 'Bon Scott', salarioBruto: 7451.00 },
    { matricula: '0070', nome: 'Liam Gallagher', salarioBruto: 3264.00 },
    { matricula: '0071', nome: 'Noel Gallagher', salarioBruto: 9841.32 },
    { matricula: '0072', nome: 'Ronnie James Dio', salarioBruto: 2365.41 },
    { matricula: '0073', nome: 'Alice Cooper', salarioBruto: 3147.85 },
    { matricula: '0074', nome: 'Billy Joel', salarioBruto: 6400.00 },
    { matricula: '0075', nome: 'Jimi Hendrix', salarioBruto: 9841.03 },
    { matricula: '0076', nome: 'Elvis Presley', salarioBruto: 3549.32 },
    { matricula: '0077', nome: 'George Harrison', salarioBruto: 2200.00 },
    { matricula: '0078', nome: 'John Lennon', salarioBruto: 3600.14 },
    { matricula: '0079', nome: 'Paul McCartney', salarioBruto: 7410.23 },
    { matricula: '0080', nome: 'Ringo Starr', salarioBruto: 5171.11 },
]

let desconto = 0.0;

for (let funcionario of funcionarios) {
    desconto = funcionario.salarioBruto * 0.12;
    let salarioLiquido = funcionario.salarioBruto - desconto;
    console.log(`Matrícula: ${funcionario.matricula} \nNome: ${funcionario.nome} \nSalário Bruto: R$ ${funcionario.salarioBruto.toFixed(2)} \nDedução do INSS: R$ ${desconto.toFixed(2)} \nSalário Líquido: R$ ${salarioLiquido.toFixed(2)} \n -----------------------------------`)
}
/* Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */
