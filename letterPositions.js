
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

const letterPostions = function(sentance) {
  const results = {};
  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") {
      if (results[sentance[i]]) {
        results[sentance[i]].push(i);
      } else {
        results[sentance[i]] = [i];
      }
    }
  }
  return results;
};

assertArrayEqual(letterPostions("hello").e, [1]);