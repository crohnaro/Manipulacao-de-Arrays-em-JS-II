/* Descrição: Crie uma função chamada interseccao que recebe dois arrays e retorna um novo array contendo apenas os elementos que estão presentes em ambos os arrays.*/

function interseccao(array1, array2) {
  let resultado = [];

  for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
          resultado.push(array1[i]);
      }
  }

  return resultado;
}
// Testes
console.log(interseccao([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(interseccao([1, 2, 3], [4, 5, 6])); // []
console.log(interseccao(["a", "b", "c"], ["b", "c", "d"])); // ['b', 'c']

module.exports = interseccao;
