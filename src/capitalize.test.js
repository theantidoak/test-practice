const capitalize = require('./capitalize');

test('Capitalize first letter', () => {
  expect(capitalize('string')).toMatch(/[A-Z].*/);
});