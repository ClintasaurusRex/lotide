//The console.assert() static method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
/*const sum = function (a, b) {
  return a + b;
};

console.assert(sum(1, 2 ) === 3);
console.assert(sum(1, 20) === 3);

const sumBuggy = function(a, b) {
  return a * b;
};

console.assert(sumBuggy(1, 2) === 3);
*/



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


assertArrayEqual([1, 2, 3], [1, 2, 3]); // should PASS
assertArrayEqual([1, 2, 3], [3, 2, 1]); // should PASS
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);

// Larry Explaining JSON stingify....

//Absolutely! JSON.stringify is a method in JavaScript that converts a JavaScript object or value to a JSON string. In this context, it's useful for displaying arrays in a readable format when logging them to the console.
//When we use console.log(arr1) directly, it prints the array, but if it's nested or complex, it may not show up as clearly. By using JSON.stringify, we convert the array to a string that clearly shows its structure, making the console message easier to read.
//Here's a breakdown:
//JSON.stringify(arr1) turns the array arr1 into a JSON string representation.
//This string representation is then included in the message we log to the console.