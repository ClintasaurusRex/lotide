const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4,]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should PASS
assertArraysEqual(middle([1, 2, 3]), [2]);