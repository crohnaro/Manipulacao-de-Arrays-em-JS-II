const { ordenarPorComprimento } = require('../exercises/ordernar');

test('ordenar array de strings ["apple", "banana", "kiwi", "cherry", "grape"] por comprimento', () => {
  expect(ordenarPorComprimento(["apple", "banana", "kiwi", "cherry", "grape"])).toEqual(["kiwi", "apple", "grape", "cherry", "banana"]);
});

test('ordenar array de strings ["a", "abc", "ab"] por comprimento', () => {
  expect(ordenarPorComprimento(["a", "abc", "ab"])).toEqual(["a", "ab", "abc"]);
});

test('ordenar array vazio', () => {
  expect(ordenarPorComprimento([])).toEqual([]);
});