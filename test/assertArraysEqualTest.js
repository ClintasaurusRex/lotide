
const assertArrayEqual = require("../assertArraysEqual");

assertArrayEqual([1, 2, 3], [1, 2, 3]); // should PASS
assertArrayEqual([1, 2, 3], [1, 2, 3, 4, 5, 6]); // should FAIL