const inventarioLojaA = {notebook: 3, mouse: 7, teclado: 10, mousepad: 8};
const inventarioLojaB = {ssd: 15, teclado: 14, monitor: 20, mouse: 10};

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));

function combinarInventarios(obj1, obj2) {
    const inventarioCombinado = {};
    for (let item in obj1) {
        if (obj1[item]) {
            inventarioCombinado[item] = obj1[item];
        }
    }
    for (let item in obj2) {
        if (obj2[item]) {
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += obj2[item];
            }
            else {
                inventarioCombinado[item] = obj2[item];
            }
        }
    }
    return inventarioCombinado;
}


/* Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */