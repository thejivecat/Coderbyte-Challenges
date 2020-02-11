function MeanMode(arr) { 
  //mean is average
  //mode is most repeated number
  let mean = (arr.reduce((acc, cur) => acc + cur))/(arr.length);
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]] = counter[arr[i]] + 1 || 0;
  }
  let mode = Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b);
  if (mean == mode) {
    return 1;
  } else {
    return 0;
  }
}

const test1 = [4, 4, 4, 6, 2];
const test2 = [10, 10];
console.log(MeanMode(test2));