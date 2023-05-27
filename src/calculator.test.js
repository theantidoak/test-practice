const calculator = require('./calculator');

test('Add', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Subtract', () => {
  expect(calculator.subtract(6, 3)).toBe(3);
});

test('Multiply', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test('Divide', () => {
  expect(calculator.divide(18, 3)).toBe(6);
});