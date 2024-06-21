function interseccao(array1, array2) {
  let resultado = [];
 
  for (let elem of array1) {
      if (array2.includes(elem)) {
          resultado.push(elem);
      }
  }
 
  return resultado;
}
<<<<<<< HEAD
 
module.exports = interseccao; // Para Node.js/CommonJS
=======

// Testes
console.log(interseccao([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(interseccao([1, 2, 3], [4, 5, 6])); // []
console.log(interseccao(["a", "b", "c"], ["b", "c", "d"])); // ['b', 'c']

module.exports = interseccao;
>>>>>>> e37f5977e00adb476d937075880cb1ac23069d07
