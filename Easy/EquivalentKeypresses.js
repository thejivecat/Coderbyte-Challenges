// Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses. Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. A keypress can be either a printable character or a backspace represented by -B. You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.

// For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"] the output should return true because those keypresses produce the same printable string. The array given will not be empty. The keypresses will only contain letters from the alphabet and backspaces.

// function EquivalentKeypresses(strArr) { 
//   const arr1 = strArr[0].split(',');
//   const arr2 = strArr[1].split(',');
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === '-B' && i > 0) {
//       arr1.splice((i-1), 2)

//     }
//     if (arr1[i] === '-B' && i === 0) {
//       arr1.splice(0, 1);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] === '-B' && i === 0) {
//       arr2.splice(0,1);
//     }
//     if (arr2[i] === '-B' && i > 0) {
//       arr2.splice((i-1), 2)
//     }
//   }
//   console.log(arr1, 'arr1', arr2, 'arr2')
//   if (arr1.toString() === arr2.toString()) {
//     return true;
//   } else {
//     return false;
//   }
// }

//better version with an inner function
function EquivalentKeypresses(strArr) {
  function reduce(str) {
    let result = '';
    arr = str.split(',');
    arr.forEach(function (item, index) {
      if (str[index + 1] !== '-B' && str[index] !== '-B') {
        result += item;
      }
    })
    console.log(result, 'result');
    return result;
  }
  return reduce(strArr[0]) == reduce(strArr[1]);
}
const test1 = ["a,b,c,d", "a,b,c,d,-B,d"];
const test2 = ["c,a,r,d", "c,a,-B,r,d"];
const test3 = ["q,w,e,r,t,y", "-B,-B,q,w,w,-B,e,r,t,y"];
const test4 = ["p,o,i,n,-B,t", "-B,p,o,i,t"];
const test5 = ["s,t,r,e,e,t", "-B,s,s,-B,t,r,e,e,t"];
console.log(EquivalentKeypresses(test3));