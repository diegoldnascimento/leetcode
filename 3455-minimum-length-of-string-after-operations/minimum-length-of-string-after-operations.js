// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  var ops = 0;
  var chars = new Map();

  for (var i = 0; i < s.length; i++) {
    chars.set(s[i], chars.get(s[i]) + 1 || 1);
  }

  for (const [char, count] of chars.entries()) {
    var stop = false;

    if (count % 2 == 0) {
        ops = ops + 2;
    } else {
        ops = ops + 1
    }
  }

  return ops;
};
// @leet end
