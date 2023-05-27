function caesarCipher(string) {
  const lcAlphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
  const upAlphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  const alphabet = [...lcAlphabet, 'a', ...upAlphabet, 'A'];
  
  return string.split('').map((letter) => {
    const regex = /[A-Za-z]/;
    return regex.test(letter) ? alphabet[alphabet.indexOf(letter) + 1] : letter;
  }).join('')

}

module.exports = caesarCipher;