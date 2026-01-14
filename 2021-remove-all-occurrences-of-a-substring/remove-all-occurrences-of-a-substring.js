/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    var counter = 0;

    for (var i = 0; i <= s.length; i++) {
        counter = 0;

        for (var j = 0; j < part.length; j++) {
            if (s[i + j] === part[j]) {
                counter++;
            } else {
                counter = 0;
                break;
            }
        }

        if (counter === part.length) {
            let tempLeft = s.substring(0, i);
            let tempRight = s.substring(i + part.length);
            s = tempLeft + tempRight;

            // volta o índice para não pular ocorrências
            i = Math.max(i - part.length, -1);
        }
    }

    return s;
};
