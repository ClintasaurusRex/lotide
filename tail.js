

const tail = function(arr) {
  if (!Array.isArray(arr))  {
    return undefined;
  }
  return arr.length > 1 ? arr.slice(1) : [];
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);


module.exports = tail;