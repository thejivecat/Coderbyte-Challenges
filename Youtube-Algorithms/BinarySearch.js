// Binary Search 

// one of the quickest ways to search through a sorted list of items

// follows 'divide and conquer' paradigm

//pick the middle value and compare it to target value
  //if target value is less the middle, narrow list to the left half, if target val is greater than middle, narrow list to right half and repeat process

//recursive method

//pick left and right indices (boundaries of our search)
  //get the middle value: (left + right)/2
  //if target is middle value, we're done
  //if target is greater than middle value, left index becomes middle and right index stays same
  //if target is less than middle value, right index becomes middle and left stays same
  //repeat steps til target value = middle index
  //if left index = right index = middle index and it isn't target value, it doesn't exist in our collection

let nums = [2,7,8,9,10,13,17,19,21];

function recursiveBinaryFunction(array, target) {
  const recurse = (array, target, left, right) => {
    if (left > right) {
      return false;
    }
    let mid = Math.floor((left + right)/2)
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      return recurse(array, target, left, mid-1);
    } else {
      return recurse(array, target, mid + 1, right);
    }
  }
  return recurse(array, target, 0, array.length-1);
}

console.log(recursiveBinaryFunction(nums, 7), 'recursive');
console.log(recursiveBinaryFunction(nums, 15),'recursive');

//Time complexity -- O(logn), Space complexity -- O(logn);
//iterative method

function iterativeBinarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

console.log(iterativeBinarySearch(nums, 7), 'iterative'); //return 1
console.log(iterativeBinarySearch(nums, 15), 'iterative'); //return false

//time complexity?
  //O(logn) -- faster than linear search O(n)

//space complexity O(1) -- constant
//slightly better than recursive approach with space complexity

