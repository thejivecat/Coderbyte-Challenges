// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable 
// sequence by either returning the string true or false. The str parameter will be composed of + and = symbols 
// with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be 
// surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have 
// at least one letter.

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function SimpleSymbols(str) { 
  if (isLetter(str[0]) || isLetter(str[str.length-1])) return false;
  
  for (let i = 1; i < str.length - 1; i++) {
    if (isLetter(str[i]) && str[i-1] !== '+') return false;
    if (isLetter(str[i]) && str[i+1] !== '+') return false;
  }
  return true;
}