
const eqArrays = function(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};



const assertArrayEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    //Arrays are equal
    console.log(`✅✅✅ Assertion Passed: 
      ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    //Arrays are not equal
    console.log(`🛑🛑🛑 Assertion Failed: 
      ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};




const words = ["ground", "control", "to", "major", "tom"];

const maps = function(array, callback) {

  const results = [];
  for (let item of array) { // loop though
    console.log("item BEFORE: ", item);

    let result = callback(item); // store the results in MT array

    console.log("item AFTER: ", callback(result));
    results.push(result);
    console.log("---");
  }
  return results;
};

const newResults = maps(words, word => word[0]);

const expected = ["g", "c", "t", "m", "t"];

assertArrayEqual(newResults, expected);


module.exports = maps;


