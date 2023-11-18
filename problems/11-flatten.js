/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:


(flatten([])); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  let res= []
  for(let i = 0; i < arr.length; i++){
    let big = arr[i] // itterate though the arr
  if (Array.isArray(big)){ // this method confirms if the i = a number or an array by returning true or false
      res.push(...flatten(big))// if true then it uses spread syntax to combine the nested array(s) and push the results to empty arr
      // this is recursion because we don't know  how many nested array(s) there are.
  } else {res.push(big)}// if false then push the number to results array
}
return res
}
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
