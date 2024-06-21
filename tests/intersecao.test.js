const interseccao = require('../exercises/intersecao'); // Caminho para o arquivo intersecao.js

// Agora você pode usar a função interseccao nos seus testes
test('encontrar a interseção dos arrays [1, 2, 3] e [2, 3, 4]', () => {
expect(interseccao([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

test('encontrar a interseção dos arrays [1, 2, 3] e [4, 5, 6]', () => {
expect(interseccao([1, 2, 3], [4, 5, 6])).toEqual([]);
});

test('encontrar a interseção dos arrays ["a", "b", "c"] e ["b", "c", "d"]', () => {
expect(interseccao(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['b', 'c']);
});