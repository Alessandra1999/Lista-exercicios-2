const obj1 = {a: 14, b: 7, c: 10, d: 55, e: 13};
const obj2 = {b: 5, e: 14, f: 56};

console.log(combinar(obj1, obj2));



function combinar(const1, const2) {
    return {...const1, ...const2};
}




/* Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */