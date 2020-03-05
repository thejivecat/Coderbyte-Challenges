// Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

function OffLineMinimum(strArr) { 
  let resultArr = [];
  let resultStr = '';
  let removeNum = 0;
  let copyArr = strArr.slice();
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      let newArr = strArr.slice(0, i).filter(el => el !== 'E').map(el => Number(el));
      console.log(newArr, 'newarr')
      let minNum = Math.min(...newArr);
      resultArr.push(minNum);
      removeNum = strArr.map(el => Number(el)).findIndex(el => el === minNum)
      strArr.splice(removeNum, 1);
      console.log(strArr, 'copyarr')
    }
  }
  for (let i = 0; i < resultArr.length; i++) {
    if (i !== resultArr.length - 1) {
      resultStr += resultArr[i].toString() + ','
    } else {
      resultStr += resultArr[i];
    }
  }
  return resultStr;
}

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));