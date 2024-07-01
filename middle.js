//const assertArraysEqual = require("./assertArraysEqual");



const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const mid = Math.floor(array.length / 2);

  if (array.length % 2 === 0) { // even num
    return [array[mid - 1], array[mid]];
  }

  return [array[mid]];// odd nums
};

// assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]); // should PASS
// assertArraysEqual(middle([1, 2, 3]), [3, 2, 1]); // should PASS
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);



// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4,]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
module.exports = middle;