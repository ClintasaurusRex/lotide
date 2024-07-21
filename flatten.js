const eqArrays = require('./eqArrays');


const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    //Arrays are equal
    console.log(`✅✅✅ Assertion Passed: 
      ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    //Arrays are not equal
    console.log(`🛑🛑🛑 Assertion Failed: 
      ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};
// This function takes an array which may contain nested arrays as its parameter
const flatten = function(array) {
  // The reduce function is used to iterate over each item of the array
//   The reduce function has two parameters, the accumulator and the current item
  // The accumulator is init as an MT array
  return array.reduce(function (acc, item) {
    // Check it the current item is an array, We recursively call the flatten function
        if (Array.isArray(item)) {
    // If the array is an array we recursivly call the flatten function
    // This allows us to handle multi-level nested array
    // The flattened result is then concated to the accumulator
    return acc.concat(flatten(item));
        } else {
          // If the current item is not an array
          // it means its a single value which we can directly concat
          // to the accumulator
          return acc.concat(item);
        }
  }, []);

}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])



