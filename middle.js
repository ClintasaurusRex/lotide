

const eqArrays = function(arr1, arr2) {
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

const assertArrayEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    //Arrays are equal
    console.log(`✅✅✅ Assertion Passed: 
      ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    //Arrays are not equal
    console.log(`🛑🛑🛑 Assertion Failed: 
      ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const mid = Math.floor(array.length / 2);

  if (array.length % 2 === 0) { // even num
    return [array[mid - 1], array[mid]];
  }

  return [array[mid]];// odd nums
};

assertArrayEqual([1, 2, 3], [1, 2, 3]); // should PASS
assertArrayEqual([1, 2, 3], [3, 2, 1]); // should PASS
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);



console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4,]));
console.log(middle([1, 2, 3, 4, 5, 6]));
