const vendas = [ {vendedor: 'Carlos', valor: 1265.50},
                 {vendedor: 'Maria', valor: 2541.00},
                 {vendedor: 'Maria', valor: 450.65},
                 {vendedor: 'Luis', valor: 374.20},
                 {vendedor: 'Carlos', valor: 4564.00},
                 {vendedor: 'Luis', valor: 9612.00} ];

console.log(somaPorVendedor(vendas));

function somaPorVendedor(array) {
    const objeto = {};
    array.forEach(venda => {
        const {vendedor, valor} = venda;
        if (objeto[vendedor]) {
            objeto[vendedor] += valor;
        }
        else {
            objeto[vendedor] = valor;
        }
    });
    return objeto;
}



/* Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */