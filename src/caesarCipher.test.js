const caesarCipher = require('./caesarCipher');

test('Cipher', () => {
  expect(caesarCipher('code')).toBe('dpef');
});

test('z-a', () => {
  expect(caesarCipher('pizza')).toBe('qjaab');
});

test('SaMe CaSe', () => {
  expect(caesarCipher('PiZzA')).toBe('QjAaB');
});

test('Punctuation', () => {
  expect(caesarCipher('PiZzA is good.')).toBe('QjAaB jt hppe.');
});