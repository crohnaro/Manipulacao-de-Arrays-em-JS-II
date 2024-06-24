/*Descrição: Crie uma função chamada combinacoes que recebe dois arrays e retorna um array de todas as combinações possíveis de elementos desses arrays. */

function combinacoes(array1, array2) {
    let result = [];
    
    for (let elem1 of array1) {
        for (let elem2 of array2){
            result.push([elem1, elem2]);
        }
    }
    
    return result;
}
    
module.exports = combinacoes; 