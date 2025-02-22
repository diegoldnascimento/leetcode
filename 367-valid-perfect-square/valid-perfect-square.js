/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 0;
    var right = num;

    while (right >= left) {
        var num2 = left * left;

        if (num === num2) {
            return true;
        }

        if (num2 > num) {
            return false;
        }

        left++;
    }

    return false;
};