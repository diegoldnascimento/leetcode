/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 0;
    var right = num;

    while (right >= left) {
        var mid = Math.floor((left + right)/2)
        var square = mid * mid;

        if (num === square) {
            return true;
        }

        if (square > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};