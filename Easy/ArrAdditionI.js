// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true 
// if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest 
// number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] 
// the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all
// the same elements, and may contain negative numbers.

function toArray(obj) {
	let result = [];
	for (let key in obj) {
		result.push([key, obj[key]])
	}
	return result;
}

console.log(toArray({a: 1, b: 2}))

let arr1 = [10, 11, 6, 3, 7, 2, 5, 6, 9];
function compareNums(a, b) {
  return a - b;
}
console.log(arr1.sort(compareNums));