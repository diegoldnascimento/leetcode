/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var currentCounter = 0;
    var charFrequencyMap = new Map();

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        var obj = {
            counter: (charFrequencyMap.get(char)?.counter || 0) + 1,
            pos: i,
        }

        charFrequencyMap.set(char, obj)
    }

    for (const charMap of charFrequencyMap.values()) {
        if (charMap.counter === 1) {
            return charMap.pos;
        }
    }

    return -1;
};