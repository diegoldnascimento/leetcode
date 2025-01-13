
// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  var frequecy = 0;
  var chars = new Map();

  for (var i = 0; i < s.length; i++) {
    chars.set(s[i], chars.get(s[i]) + 1 || 1);
  }

  for (const [_, count] of chars.entries()) {
    if (count % 2 == 0) {
        frequecy += 2;
    } else {
        frequecy += 1
    }
  }

  return frequecy;
};
// @leet end
