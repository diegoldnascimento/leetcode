// @leet start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hashmap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let sum = 0;

  for (var i = 0; i < s.length; i++) {
    let char = s[i];
    let nextChar = s[i + 1];

    if (char == "I" && (nextChar == "V" || nextChar == "X")) {
      sum -= hashmap.get(char);
    } else if (char == "X" && (nextChar == "L" || nextChar == "C")) {
      sum -= hashmap.get(char);
    } else if (char == "C" && (nextChar == "D" || nextChar == "M")) {
      sum -= hashmap.get(char);
    } else {
      sum += hashmap.get(char);
    }
  }

  return sum;
};
// @leet end
