// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charObj = {};

  /* 
  let max = 0;
  let maxiChar = ''; 
  */

  for (const letter of str) {
    charObj[letter] = (charObj[letter] || 0) + 1;
  }

  /* 
  for (const char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxiChar = char;
    }
  }

  return maxiChar; 
  */

  return Object.keys(charObj).reduce((a, b) => (charObj[a] > charObj[b] ? a : b));
}

module.exports = maxChar;
