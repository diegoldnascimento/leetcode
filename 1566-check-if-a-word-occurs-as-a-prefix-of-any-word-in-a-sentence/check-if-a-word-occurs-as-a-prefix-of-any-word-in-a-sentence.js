/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    if (sentence.length === 0 || searchWord.length === 0) {
        return -1;
    } 

    var words = sentence.split(" ")
    var idx = 1;

    for (const word of words) {
        var counter = 0;
        if (word.length >= searchWord.length) {
            for (var i = 0; i < searchWord.length; i++) {
                if (searchWord[i] === word[i]) {
                    counter++
                } else {
                    counter = 0;
                    break;
                }
            }

            if (counter === searchWord.length) {
                return idx;
            }

            counter = 0;
        }
        idx++;
    }

    return -1;
};