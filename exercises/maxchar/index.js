// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  /* 
  let max = 0;
  let maxiChar = ''; 
  */

  for (const letter of str) {
    charMap[letter] = (charMap[letter] || 0) + 1;
  }

  /* 
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxiChar = char;
    }
  }

  return maxiChar; 
  */

  return Object.keys(charMap).reduce((a, b) => (charMap[a] > charMap[b] ? a : b));
}

module.exports = maxChar;
