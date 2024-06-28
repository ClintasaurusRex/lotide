
const findKey = (object, callback) => {
  for (key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const findStar = findKey(stars, x  => x.stars === 2);
console.log(findStar);