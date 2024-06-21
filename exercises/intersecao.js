function interseccao(array1, array2) {
  let resultado = [];
 
  for (let elem of array1) {
      if (array2.includes(elem)) {
          resultado.push(elem);
      }
  }
 
  return resultado;
}
 
module.exports = interseccao;
