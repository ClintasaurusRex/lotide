
// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   }
// };

const findKeyByValue = function (obj, value) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70' Show"), undefined);

module.exports = findKeyByValue;