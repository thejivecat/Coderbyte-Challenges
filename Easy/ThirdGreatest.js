function ThirdGreatest(strArr) { 
  let lengthArr = strArr.map(x => x.length).sort((a,b) => a < b);
  let thirdLen = lengthArr[2];
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i].length === thirdLen) {
      return strArr[i];
    }
  }
}

console.log(ThirdGreatest(["abc","defg","z","hijk"]));