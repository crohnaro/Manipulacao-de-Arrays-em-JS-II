/*Descrição: Crie uma função chamada combinacoes que recebe dois arrays e retorna um array de todas as combinações possíveis de elementos desses arrays. */
 
function combinacoes(array1, array2) {
    let combinacoes = [];
   
    if (array1.length === 0 || array2.length === 0) {
        return combinacoes;
    }
   
    for (let elem1 of array1) {
        for (let elem2 of array2) {
            combinacoes.push([elem1, elem2]);
        }
    }
   
    return combinacoes;
}
 
module.exports = combinacoes;
// Testes
console.log(combinacoes([1, 2], ["a", "b"])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(combinacoes([1], ["a", "b", "c"])); // [[1, 'a'], [1, 'b'], [1, 'c']]
console.log(combinacoes([], [1, 2])); // []
 