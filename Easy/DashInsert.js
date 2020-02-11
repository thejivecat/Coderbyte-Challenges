function DashInsert(str) { 
  let arr = str.split('');
  let result = arr.join('');
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      arr.splice(i + 1, 0, '-');
    }
  }
  return arr.join('');
}

const test1 = '567'
const test2 = '77993'
const test3 = '2129'
const test4 = '399047'
const test5 = '60497'
const test6 = '667488958374553'
console.log(DashInsert(test6));