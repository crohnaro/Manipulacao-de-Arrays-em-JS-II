
<<<<<<< HEAD
function combinacoes(array1, array2) {
    let result = [];
   
    for (let elem1 of array1) {
        for (let elem2 of array2) {
            result.push([elem1, elem2]);
        }
    }
   
    return result;
}
 
module.exports = combinacoes; // Para Node.js/CommonJS
=======
function combinacoes(array1, array2) {}

// Testes
console.log(combinacoes([1, 2], ["a", "b"])); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
console.log(combinacoes([1], ["a", "b", "c"])); // [[1, 'a'], [1, 'b'], [1, 'c']]
console.log(combinacoes([], [1, 2])); // []

modoule.exports = combinacoes;
>>>>>>> e37f5977e00adb476d937075880cb1ac23069d07
