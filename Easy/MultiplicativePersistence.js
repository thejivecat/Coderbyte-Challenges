function MultiplicativePersistence(num) { 
  let count = 0;
  const recurse = (n) => {
    if (n < 10) {
      return count;
    }
    let newNum = n.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc * cur);
    if (newNum < 10) {
      count++;
      return count;
    } else {
      count++;
      return recurse(newNum);
    }
  }
  return recurse(num);
}

console.log(MultiplicativePersistence(25));