/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    if (!word1 || !word2) {
        return ""
    }

    var newWord1 = []
    var newWord2 = []

    for (var i = 0; i < word1.length; i++) {
        newWord1.push(word1[i])
        if (i < word1.length - 1) {
            newWord1.push("")
        }
    }

    for (var i = 0; i < word2.length; i++) {
        newWord2.push("")
        newWord2.push(word2[i])
    }

    var chars = ""
    var i = 0;
    var n = newWord1.length + newWord2.length
    
    console.log({newWord1,newWord2})

    while (i < n ) {
        if (i % 2 == 0) {
            chars += newWord1[i] || ""
        } else {
            chars += newWord2[i] || ""
        }
        i++
        console.log({i, n})
    }
    console.log({chars})

    return chars;
};