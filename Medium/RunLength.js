// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

function RunLength(str) { 
  let strArr = str.split('');
  let tempArr = []; //keep track of counts as they are determined
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == strArr[i + 1]) {
      count++;
    } else {
      tempArr.push(count + strArr[i]);
      count = 1;
    }
  }
  return tempArr.join('');
}


console.log(RunLength('wwwbbbw'));