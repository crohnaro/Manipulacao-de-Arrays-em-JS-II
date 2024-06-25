const ordernarPorComprimento = require('../exercises/ordernar');

test('ordernar array de strings ["apple", "banana", "kiwi", "cherry", "grape"] por comprimento', () => {
    const input = ["apple", "banana", "kiwi", "cherry", "grape"];
    const outputEsperado = ["kiwi", "apple", "grape", "banana", "cherry"]
    expect(ordernarPorComprimento(input)).toEqual(outputEsperado)
});

test('ordenar array de strings ["a", "abc", "ab"] por comprimento', () => {
    expect(ordernarPorComprimento(["a", "abc", "ab"])).toEqual(["a", "ab", "abc"])
});

test('ordenar array vazio', () => {
    expect(ordernarPorComprimento([])).toEqual([])
  })