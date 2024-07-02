const assertEqual = require("./assertEqual.js");

// tail.js
const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);


module.exports = tail;