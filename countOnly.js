

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// inside the loop,
// increment the counter for each item:
//   set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.

const countOnly = function(allItems, ItemsToCount) {
  const results = {};

  for (const item of allItems) { // loop through the items
    if (ItemsToCount[item]) {// checking to see if the item to count is true
      if (results[item]) {//if the count exist then this will add 1 to the count
        results[item] += 1;
      } else {
        results[item] = 1; // init the count to 1
      }
    }
  }

  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const results1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(results1["Jason"], 1);
assertEqual(results1["Karima"], undefined);
assertEqual(results1["Fang"], 2);
assertEqual(results1["Agouhanna"], undefined);

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
