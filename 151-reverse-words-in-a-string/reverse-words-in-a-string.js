/**
 * @param {string} s
 * @return {string}
 */

var split = function (s, delimiter) {
    var arr = [];
    var str = ""

    for (var i = 0; i < s.length; i++) {
        // abc ab

        if (s[i] === delimiter) {
            arr.push(str)
            str = ""
        } else {
            str += s[i];
        }

        if (i === s.length - 1) {
            arr.push(str)
        }
    }
console.log(arr)
    return arr;
}

var reverseWords = function(s) {
    // Given the string s, reverse the order of the words
    // return a string of the words in reserver order
    // input: the sky is blue
    // output: blue is the sky

    // example 2: "  hello world  "
    // example 3: world hello

    if (s.length === 1) {
        return s;
    }

    var words = [];
    var result = [];
    s = split(s, " ")

    for (var i = s.length - 1; i >= 0; i--) {
        var word = s[i];

        if (word === "")
            continue;

        words.push(word)
    }

    return words.join(" ")
};