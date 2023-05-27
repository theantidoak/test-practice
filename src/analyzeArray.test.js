const analyzeArray = require('./analyzeArray');

test('Analyze Array', () => {
  expect(analyzeArray([1, 3, 4, 0, 2, 8, 4, 7, 3, 5])).toEqual({
    average: 3.7,
    min: 0,
    max: 8,
    length: 10
  });
})