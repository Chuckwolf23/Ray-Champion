/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
  // Your code here
  // for (let i = 0; i < arr.length; i++) {
    // // let ele = arr[i]
    // if (ele <= arr[1]) {
    //   arr.slice(1)
    //   return arr


    // }
    // else {
    //   return false;
  //   }

  // }
  // base case [if the array has less than two items return]
  if (arr.length < 2){
    return true;


  }
  // we are checking if the next item in the index is in ascending order or greater
   if (arr[0] > arr[1]) {
   return false


  }
  // recursing step and call we are moving towards the base case by shortening our array

return isSorted(arr.slice(1)) // its recursion because the method is called inside itself here 
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
