const eqArrays = require('./eqArrays');


const assertArrayEqual = (arr1, arr2) => {
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


// assertArrayEqual([1, 2, 3], [1, 2, 3]); // should PASS
// assertArrayEqual([1, 2, 3], [3, 2, 1]); // should PASS
// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);

module.exports = assertArrayEqual;