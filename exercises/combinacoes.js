/* Descrição: Crie uma função chamada combinacoes que recebe dois arrays 
 * e retorna um array de todas as combinações possíveis de elementos desses arrays.
 */

function combinacoes(array1, array2) {
    let combinacoes = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            combinacoes.push([array1[i], array2[j]]);
        }
    }
    return combinacoes;
}

// Testes
console.log(combinacoes([1, 2], ["a", "b"])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(combinacoes([1], ["a", "b", "c"])); // [[1, 'a'], [1, 'b'], [1, 'c']]
console.log(combinacoes([], [1, 2])); // []

module.exports = combinacoes;