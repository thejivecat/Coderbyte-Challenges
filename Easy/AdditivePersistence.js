// Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

function AdditivePersistence(num) { 
  let count = 0;
  const recurse = (n) => {
    if (n < 10) {
      return count;
    }
    let newNum = n.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc + cur);
    if (newNum < 10) {
      count++;
      return count;
    } else if (newNum >= 10) {
      count++;
      return recurse(newNum);
    }
  }
  return recurse(num);
}

console.log(AdditivePersistence(19));