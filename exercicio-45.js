let arrayStrings = ['banana', 'abacaxi', 'laranja', 'abacaxi', 'melancia', 'banana'];

console.log(contarStrings(arrayStrings));

function contarStrings(array) {
    const objeto = {};
    array.forEach(string => {
        if(objeto[string]) {
            objeto[string]++;
        }
        else {
            objeto[string] = 1;
        }
    });
    return objeto;
}



/* Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */