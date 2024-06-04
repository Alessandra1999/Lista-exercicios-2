const transacoes = [ {id: 11, valor: 1235.00, data: '10/01/2024', categoria: 'Gastos pessoais'},
                     {id: 12, valor: 465.80,  data: '05/02/2024', categoria: 'Serviços Educacionais'},
                     {id: 13, valor: 150.00,  data: '07/02/2024', categoria: 'Alimentação'},
                     {id: 14, valor: 169.45,  data: '15/02/2024', categoria: 'Transporte'},
                     {id: 15, valor: 295.40,  data: '18/03/2024', categoria: 'Alimentação'},
                     {id: 16, valor: 465.80,  data: '05/03/2024', categoria: 'Serviços Educacionais'},
                     {id: 17, valor: 89.00,   data: '07/03/2024', categoria: 'Transporte'} ];

let resultado = agruparObjetos(transacoes);
imprimirResultado(resultado);

function agruparObjetos(arrayObjetos) {
    const novoObjeto = {};
    arrayObjetos.forEach(transacao => {
        const {id, valor, data, categoria} = transacao;
        if (!novoObjeto[categoria]) {
            novoObjeto[categoria] = {
                transacoes: [], 
                subtotal: 0};
        }
        novoObjeto[categoria].transacoes.push({id, valor, data});
        novoObjeto[categoria].subtotal += valor;
    });
    return novoObjeto;
}

function imprimirResultado(resultado) {
    for (const categoria in resultado) {
        console.log("Categoria: " + categoria);
        console.log("Transações:");
        resultado[categoria].transacoes.forEach(transacao => {
            console.log("ID: " + transacao.id + ", Valor: " + transacao.valor + ", Data: " + transacao.data);
        });
        console.log("Subtotal: " + resultado[categoria].subtotal);
        console.log(''); 
    }
}


/* Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */