// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution two
function capitalize(str) {
  // let result = str[0].toUpperCase();

  let result = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

/* Solution one
function capitalize(str) {
  const wordsArray = [];
  for (const word of str.split(' ')) {
    wordsArray.push(word[0].toUpperCase() + word.slice(1));
  }
  return wordsArray.join(' ');
}
*/

module.exports = capitalize;
