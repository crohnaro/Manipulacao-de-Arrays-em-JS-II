/*Descrição: Crie uma função chamada combinacoes que recebe dois arrays e retorna um array de todas as combinações possíveis de elementos desses arrays. */


function combinacoes(array1, array2) {
    if (array1.length === 0 || array2.length === 0) {
        return [];
    }
    let combinacoes = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            combinacoes.push([array1[i], array2[j]])
        }
    }

    return combinacoes
}

module.exports = combinacoes;