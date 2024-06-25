/* Descrição: Crie uma função chamada interseccao que recebe dois arrays e retorna um novo array contendo apenas os elementos que estão presentes em ambos os arrays.*/
function interseccao(array1, array2) {
  let resultado = [];
  
  for (let elem of array1) {
      if (array2.includes(elem)) {
          resultado.push(elem);
      }
  }
  
  return resultado;
}
 
module.exports = interseccao; // Para Node.js/CommonJS
// ou
// export default interseccao; // Para ES6 modules (import/export)
