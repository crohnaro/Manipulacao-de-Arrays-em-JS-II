/*Descrição: Crie uma função chamada ordenarPorComprimento que recebe um array de strings e retorna o array ordenado pelas strings de menor para maior comprimento. */

function ordenarPorComprimento(array) {
    return array.sort((a, b) => a.length - b.length);
}
 
module.exports = ordenarPorComprimento; // Para Node.js/CommonJS
// ou
// export default ordenarPorComprimento; // Para ES6 modules (import/export)
