function sum(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else {
    throw new TypeError('Arguments are not numbers');
  }
}
sum(2, 3);

module.exports = sum;
