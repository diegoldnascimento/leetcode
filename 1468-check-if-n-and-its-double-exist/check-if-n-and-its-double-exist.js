/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    var map = {}

    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i] * 2] !== undefined || map[arr[i] / 2] == arr[i] / 2) {
            return true
        }

        map[arr[i]] = arr[i]
    }

    return false
};