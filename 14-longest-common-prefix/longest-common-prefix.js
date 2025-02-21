/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) {
        return strs[0]
    }

    var chars = strs[0];

    var longestCommonPrefix = ""

    for (var i = 0; i < chars.length; i++) {
        var char = chars[i]
        var counter = 0;

        for (var j = 1; j < strs.length; j++) {
            var char2 = strs[j][i]

            if (char2 !== null && char2 === char) {
                counter++

                if (counter == strs.length - 1) {
                    longestCommonPrefix += char2
                }
            } else {
                return longestCommonPrefix
            }
        }
    }

    return longestCommonPrefix

};