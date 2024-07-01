const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4,]));
console.log(middle([1, 2, 3, 4, 5, 6]));


assertArrayEqual([1, 2, 3], [1, 2, 3]); // should PASS