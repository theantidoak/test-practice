function analyzeArray(arr) {
  return {
    average: arr.reduce((cur, prev) => {
      return cur + prev;
    }, 0) / arr.length,
    min: arr.sort()[0],
    max: arr.sort()[arr.length - 1],
    length: arr.length
  }
}

module.exports = analyzeArray;