function FindIntersection(strArr) { 
  let resultArr = [];
  const tracker = {};
  const arr1 = strArr[0].split(', ');
  const arr2 = strArr[1].split(', ');
  for (let i = 0; i < arr1.length; i++) {
    tracker[arr1[i]] = tracker[arr1[i]] + 1 || 0;
  }
  for (let i = 0; i < arr2.length; i++) {
    tracker[arr2[i]] = tracker[arr2[i]] + 1 || 0;
  }
  for (const key in tracker) {
    if (tracker[key] > 0) {
      resultArr.push(key);
    }
  }
  let result = resultArr.join(',').replace(/\s/g,'')
  return result ? result : false;
}


let test1 = ["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"] //'5,6,7'
let test2 = ["2, 3, 4", "3"]
let test3 = ["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]
let test4 = ["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"]

console.log(FindIntersection(test4))
