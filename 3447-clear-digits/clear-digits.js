/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    const stack = [];

    for (let char of s) {
        if (!isNaN(parseInt(char))) { // Check if character is a digit
            if (stack.length > 0) {
                stack.pop(); // Remove the closest non-digit to the left
            }
            // Digit itself is also effectively removed in this process
        } else {
            stack.push(char); // Push non-digit characters onto the stack
        }
    }

    return stack.join(''); // Join the characters in the stack to form the resulting string
};