

const countLetters = function(letters) {
  let count = {};
  for (let letter of letters) {
    if (count[letter]) {
      count[letter] ++;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

console.log(countLetters("Lighthouse in the house"));

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
module.exports = countLetters;