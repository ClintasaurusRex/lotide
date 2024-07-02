


const letterPositions = function(sentance) {
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

// letterPostions("hello").e, [1];

module.exports = letterPositions;
