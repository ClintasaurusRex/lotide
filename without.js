
// eqArrays.js

const eqArrays  = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

const without = (source, itemsToRemove) => {
  const result = []; // Init MT array to hold result
  //Loop throught the source array
  for (const element of source) {
    // check if theres elements to remove
    if (!itemsToRemove.includes(element)) {
      result.push(element); // push to reult array
    }
  }
  return result;
};

assertArrayEqual(without([1, 2, 3], [1]), [2, 3]); //expect [2, 3]
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArrayEqual(words, ["hello", "world", "lighthouse"]);