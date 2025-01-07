var stringMatching = function (words) {
  if (words.length === 0) {
    return [];
  }
  var and = new Set();

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    for (var j = 0; j < words.length; j++) {
      var word2 = words[j];

      if (word2.indexOf(word) !== -1 && word2 !== word) {
        and.add(word);
      }
    }
  }

  return Array.from(and)
};
