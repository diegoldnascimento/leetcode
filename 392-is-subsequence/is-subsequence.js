/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s == "" && t == "") {
        return true;
    }

    if (s == "") {
        return true;
    }

    var result = ""
    var position = 0;

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        position = t.indexOf(char, position);

        if (position == -1) {
            return false;
        }

        position++;
    }

    return position > 0
};