/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    var map =  new Set()

    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i] * 2) || map.has(arr[i] / 2)) {
            return true
        }
        map.add(arr[i])
    }

    return false
};