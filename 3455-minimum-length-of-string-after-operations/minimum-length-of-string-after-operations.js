
// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  var minLength = 0;
  var charsCount = new Map();

  for (var i = 0; i < s.length; i++) {
    charsCount.set(s[i], charsCount.get(s[i]) + 1 || 1);
  }

  for (const [_, count] of charsCount.entries()) {
    if (count % 2 == 0) {
        minLength += 2;
    } else {
        minLength += 1
    }
  }

  return minLength;
};
// @leet end
