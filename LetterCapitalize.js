// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter 
// of each word. Words will be separated by only one space.

function LetterCapitalize(str) { 
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i][0].toUpperCase() + words[i].slice(1);
    words[i] = word;
  }
  return words.join(' ');
}