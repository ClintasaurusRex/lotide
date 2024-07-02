// const eqArrays = function(arr1, arr2) {
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

const eqObjects = require('./eqObjects');
// // const assertEqual = function(actual, expected) {
// //   if (actual !== expected) {
// //     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
// //   } else {
// //     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
// //   }
// // };
// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {

//   const key1 = Object.keys(object1);
//   const key2 = Object.keys(object2);

//   if (key1.length !== key2.length) {
//     return false;
//   }
//   // Loop through each key in object1
//   for (const key of key1) {
//     const value1 = object1[key];
//     const value2 = object2[key];
//     // Check if the values are arrays
//     if (Array.isArray(value1) && Array.isArray(value2)) {
//       // Use eqArrays to compare arrays
//       if (!eqArrays(value1, value2)) {
//         return false; // Objects are not equal if arrays are not equal
//       }
//     } else {
//       // Compare primitive values
//       if (value1 !== value2) {
//         return false; // Objects are not equal if any corresponding values differ
//       }
//     }const eqObjects = require('./eqObjects');bjects are equal if all keys and values match
// };



const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {

    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===
    ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const obj1 = { a: "1", b: 2 };
// const obj2 = { b: 2, a: "1" };
// const obj3 = { a: "1", b: 2, c: 3 };

// assertObjectEqual(obj1, obj2);
// assertObjectEqual(obj1, obj3);

module.exports = assertObjectsEqual;
