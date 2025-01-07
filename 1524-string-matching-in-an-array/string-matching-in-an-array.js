/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length);
  var ans = [];

  for (var i = 0; i < words.length; i++) {
    for (var j = i + 1; j < words.length; j++) {
      if (words[j].includes(words[i])) {
        ans.push(words[i]);
        break;
      }
    }
  }

  return ans;
};
