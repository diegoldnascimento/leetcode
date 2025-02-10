/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let currentString = s;

    while (true) {
        let firstDigitIndex = -1;
        for (let i = 0; i < currentString.length; i++) {
            if (!isNaN(currentString[i])) {
                firstDigitIndex = i;
                break;
            }
        }

        if (firstDigitIndex === -1) {
            break; // No more digits
        }

        let closestNonDigitIndex = -1;
        for (let i = firstDigitIndex - 1; i >= 0; i--) {
            if (isNaN(currentString[i])) {
                closestNonDigitIndex = i;
                break;
            }
        }

        let nextString = "";
        if (closestNonDigitIndex !== -1) {
            nextString = currentString.substring(0, closestNonDigitIndex) + currentString.substring(closestNonDigitIndex + 1, firstDigitIndex) + currentString.substring(firstDigitIndex + 1);
        } else {
            // According to problem description and examples, this case should not happen,
            // but for robustness if no non-digit to left, just remove the digit.
            nextString = currentString.substring(0, firstDigitIndex) + currentString.substring(firstDigitIndex + 1);
        }
        currentString = nextString;
    }
    return currentString;
};