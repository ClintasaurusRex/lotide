
const head = function(arr) {
  if (arr !== undefined && arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
};

module.exports = head;