var isPrefixOfWord = function(sentence, searchWord) {
    var words = [];
    var letters = "";  // ✅ declarado fora do loop

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {  // ✅ compara com espaço
            letters += sentence[i];
        } else {
            words.push(letters);
            letters = "";
        }
    }
    
    // ✅ não esquecer da última palavra (não tem espaço depois)
    if (letters.length > 0) {
        words.push(letters);
    }

    for (var i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }

    return -1;
};