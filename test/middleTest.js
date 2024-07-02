const middle = require("../middle");

const assert = require("chai").assert;


describe("#middle", () => {
  it("returns the middle number of an odd-length array", () => {
    assert.deepEqual(middle(["1", "2", "3"]), ["2"]);
  });

  it("returns the middle two numbers for an odd-length array", () => {
    assert.deepEqual(middle(['1', '2', '3', '4', '5']), ['3']);
  });

  it("returns the middle numbers of an even-length array", () => {
    assert.deepEqual(middle(['1', '2', '3', '4']), ['2', '3']);
  });
});












// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3])); [2]
// console.log(middle([1, 2, 3, 4, 5]));[3]
// console.log(middle([1, 2, 3, 4,]));[2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]));

