// Have the function PrimeTime(num) take the num parameter being passed and return the string true if 
// the parameter is a prime number, otherwise return the string false. The range will be between 1 and 
// 2^16.

function PrimeTime(num) { 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}