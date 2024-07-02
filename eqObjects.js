// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   }
// };
// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

//
// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;