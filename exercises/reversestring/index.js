// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
  const endPosition = str.length - 1;
  let revStr = '';
  for (let i = endPosition; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
} */

/* const reverse = (str) => {
  let revStr = '';
  for (const char of str) {
    revStr = char + revStr;
    console.log(revStr);
  }
  return revStr;
}; */

const reverse = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '');
};

module.exports = reverse;
