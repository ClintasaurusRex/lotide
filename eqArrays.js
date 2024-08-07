// const assertEqual = require("./assertEqual");
// eqArrays.js

const eqArrays  = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true); //


module.exports = eqArrays;