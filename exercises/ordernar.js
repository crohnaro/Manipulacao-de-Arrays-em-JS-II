function ordenarPorComprimento(array) {
    return array.sort((a, b) => a.length - b.length);
}

// Testes
console.log(ordenarPorComprimento(["apple", "banana", "kiwi", "cherry", "grape"])); // ["kiwi", "apple", "grape", "cherry", "banana"]
console.log(ordenarPorComprimento(["a", "abc", "ab"])); // ["a", "ab", "abc"]
console.log(ordenarPorComprimento([])); // []


module.exports = ordenarPorComprimento;