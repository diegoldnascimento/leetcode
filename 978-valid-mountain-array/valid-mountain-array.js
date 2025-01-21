/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }

    var direction = 0
    var highest = 0

    for (var i = 0; i < arr.length; i++) {
                highest = Math.max(highest, arr[i])

        console.log(highest, arr[i], arr[i+1], direction)
        if (i == arr.length - 1 && direction == 0) {
            return false
        }

        if (i == 0 && arr[i] >= arr[i+1]) {
            return false
        }

        console.log(`highest`,highest, arr[i])
        if ((highest > arr[i+1]) && direction == 0) {
            direction = 1
        }

        if (direction == 0) {
            if (arr[i + 1] == undefined) {
                continue;
            }
            if (arr[i] >= arr[i + 1]) {
                console.log("Oi", direction, arr[i], arr[i+1], direction)
                return false
            } 
        }

        if (direction == 1) {
            if (arr[i + 1] == undefined) {
                continue;
            }
            if (arr[i] <= arr[i + 1]) {
                return false
            } 
        }
        

    }

    return true;
};