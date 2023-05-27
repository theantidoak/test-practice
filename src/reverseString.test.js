const reverseString = require('./reverseString');

test('Reverse string', () => {
  expect(reverseString('string')).toMatch(/(?=(\w+)\1*$)/);
});