// Have the function LetterChanges(str) take the str parameter being passed and modify it using the 
// following algorithm. Replace every letter in the string with the letter following it in the alphabet 
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and 
// finally return this modified string.

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function LetterChanges(str) { 
  let shiftedString = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    if (letter === 'z') {
      shiftedString += 'a';
    } else if (letter === ' ') {
      shiftedString += ' ';
    } else if (isLetter(letter)) {
      let updatedCharCode = letter.charCodeAt(0) + 1;
      shiftedString += String.fromCharCode(updatedCharCode).toLowerCase();
    } else {
      shiftedString += letter;
    }
  }
  let result = '';
  for (let i = 0; i < shiftedString.length; i++) {
    if (shiftedString[i] === 'a' || shiftedString[i] === 'e' || shiftedString[i] === 'i' || shiftedString[i] === 'o' || shiftedString[i] === 'u') {
      result += shiftedString[i].toUpperCase();
    } else {
      result += shiftedString[i];
    }
  }
  return result; 
}

console.log(LetterChanges("hello world"));