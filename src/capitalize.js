function capitalize(string) {
  const stringArr = string.split('');
  return stringArr.shift().toUpperCase() + stringArr.join('');
}

module.exports = capitalize