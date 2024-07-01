
const head = require("../head");
const assert = require("chai").assert;

describe("#head", () => {
  it("returns Hello Lighthouse Labs", () => {
    assert.strictEqual(head(["Hello Lighthouse Labs"]), 'Hello Lighthouse Labs');
  });
  it("returns Im actually coding", () => {
    assert.strictEqual(head(['Im actually coding']), 'Im actually coding');
  });
});







