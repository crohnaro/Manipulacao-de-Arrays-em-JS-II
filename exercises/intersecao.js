/* Descrição: Crie uma função chamada interseccao que recebe dois arrays e retorna um novo array contendo apenas os elementos que estão presentes em ambos os arrays.*/

function interseccao(array1, array2) {
  return array1.filter(element => array2.includes(element))
}


module.exports = interseccao
