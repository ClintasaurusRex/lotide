


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




module.exports = middle;