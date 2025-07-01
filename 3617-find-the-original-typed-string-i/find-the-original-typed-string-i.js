/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    if (word.length === 1) {
        return 1;
    }

    var counter = 1;
    var lastLetter = null

    for (var i = 0; i < word.length; i++) {
        if (lastLetter === word[i]) {
            counter++;
        }
        
        lastLetter = word[i]
    }

    return counter;
};