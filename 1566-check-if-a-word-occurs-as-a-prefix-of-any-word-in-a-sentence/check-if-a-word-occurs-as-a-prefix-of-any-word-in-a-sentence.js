/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let foundIndex = -1;

    var words = sentence.split(" ")

    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        var counter = 0;

        for (var j = 0; j < searchWord.length; j++) {
            var letter = word[j]
            var searchWordLetter = searchWord[j]

            if (letter == searchWordLetter) {
                counter++
            }
        }

        if (counter === searchWord.length) {
            return i + 1;
        }
    }

    return foundIndex;
};