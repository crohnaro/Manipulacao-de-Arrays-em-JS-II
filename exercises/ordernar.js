function ordenarPorComprimento(array) {
    return array.sort((a, b) => a.length - b.length);
}
 
module.exports = ordenarPorComprimento;
