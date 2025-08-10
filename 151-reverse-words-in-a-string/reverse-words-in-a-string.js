/**
 * @param {string} s
 * @return {string}
 */

function split(s, delimiter) {
    const arr = [];
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === delimiter) {
            arr.push(s.substring(start, i));
            start = i + 1;
        }
    }
    arr.push(s.substring(start));
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