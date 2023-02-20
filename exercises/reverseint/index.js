// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const revNum = Math.abs(n)
    .toString()
    .split('')
    .reduce((rev, num) => num + rev, '');

  return Number(revNum) * Math.sign(n);
}

module.exports = reverseInt;
