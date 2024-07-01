/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let ans = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            ans++

            if (ans == 3) {
                return true
            }
        } else {
            ans = 0
        }
    }

    return false
};