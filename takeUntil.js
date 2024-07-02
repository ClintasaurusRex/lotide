
// const eqArrays = function(array1, array2) {
//   if (!Array.isArray(array1) || !Array.isArray(array2)) {
//     return false;
//   }
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };



// const assertArrayEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     //Arrays are equal
//     console.log(`✅✅✅ Assertion Passed: 
//       ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
//   } else {
//     //Arrays are not equal
//     console.log(`🛑🛑🛑 Assertion Failed: 
//       ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
//   }
// };


const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }

  return results;
};


// const nums = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(nums, x => x < 0);
// //console.log(results1);
// const expected1 = [1, 2, 5, 7, 2];
// assertArrayEqual(results1, expected1);

// console.log('---');

// const hereThere = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(hereThere, x => x === ',');
// //console.log(results2);
// const expected2 = ["I've", "been", "to", "Hollywood"];
// assertArrayEqual(results2, expected2);

module.exports = takeUntil;