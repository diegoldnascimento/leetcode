/**
 * @param {string} s
 * @return {string}
 */
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
    s = s.split(" ");

    for (var i = s.length - 1; i >= 0; i--) {
        var word = s[i];

        if (word === "")
            continue;

        words.push(word)
    }

    return words.join(" ")
};