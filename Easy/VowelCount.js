// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels 
// the string contains (ie. "All cows eat grass and moo" would return 8).
// Do not count y as a vowel for this challenge.

function VowelCount(str) { 
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count++;
    }
  }
  return count;
}
   