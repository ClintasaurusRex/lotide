const assert = require("chai").assert;
const tail = require("../tail");


describe("#tail", () => {
  it("returns an array without the first element for ['Yo Yo, 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns an MT array when input array contains one element", () => {
    assert.deepEqual(tail(['Im actually coding']), []);
  });

  it("returns array without first elements ['welcome', 'to', 'the', 'jungle']", () => {
    assert.deepEqual(tail(['welcome', 'to', 'the', 'jungle']), ['to', 'the', 'jungle']);
  });


});



