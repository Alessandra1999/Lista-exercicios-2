function agruparTransacoesPorCategoria(transacoes) {
    // Objeto para armazenar o resultado
    const resultado = {};

    // Iterar sobre cada transação
    transacoes.forEach(transacao => {
        const { id, valor, data, categoria } = transacao;

        // Se a categoria não existe no resultado, inicializa-la
        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        // Adicionar a transação ao array da categoria
        resultado[categoria].transacoes.push({ id, valor, data });

        // Atualizar o subtotal da categoria
        resultado[categoria].subtotal += valor;
    });

    return resultado;
}

// Exemplo de uso:
const transacoes = [
    { id: 1, valor: 100, data: '2023-01-01', categoria: 'Alimentação' },
    { id: 2, valor: 200, data: '2023-01-02', categoria: 'Transporte' },
    { id: 3, valor: 50, data: '2023-01-03', categoria: 'Alimentação' },
    { id: 4, valor: 150, data: '2023-01-04', categoria: 'Lazer' },
    { id: 5, valor: 100, data: '2023-01-05', categoria: 'Transporte' },
];

const resultado = agruparTransacoesPorCategoria(transacoes);
console.log(resultado);
