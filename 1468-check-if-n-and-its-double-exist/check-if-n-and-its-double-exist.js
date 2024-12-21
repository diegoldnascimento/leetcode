/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) {
                return true
            }
        }
    }

    return false
};