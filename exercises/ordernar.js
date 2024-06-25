/*Descrição: Crie uma função chamada ordenarPorComprimento que recebe um array de strings e retorna o array ordenado pelas strings de menor para maior comprimento. */

function ordenarPorComprimento(array) {
    return array.sort((a, b) => a.length - b.length);
}

// Testes
console.log(ordenarPorComprimento(["apple", "banana", "kiwi", "cherry", "grape"])); // ["kiwi", "apple", "grape", "cherry", "banana"]
console.log(ordenarPorComprimento(["a", "abc", "ab"])); // ["a", "ab", "abc"]
console.log(ordenarPorComprimento([])); // []


module.exports = ordenarPorComprimento;