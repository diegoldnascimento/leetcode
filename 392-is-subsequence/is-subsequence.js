/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var i = 0;
    var j = 0;

    while(i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;

       
    }

    return i === s.length
};