// Have the function LetterCountI(str) take the str parameter being 
// passed and return the first word with the greatest number of 
// repeated letters. For example: "Today, is the greatest day ever!" 
// should return greatest because it has 2 e's (and 2 t's) and it comes 
// before ever which also has 2 e's. If there are no words with 
// repeating letters return -1. Words will be separated by spaces.

function LetterCountI(str) { 
  //take each word
  //tally up repeating chars in each word
  //return word with most repeating chars
  let words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordSet = new Set(word);
    if (wordSet.size < word.length && word.length > result.length) {
      result = word;
    }
  }
  return result === '' ? -1 : result;
}