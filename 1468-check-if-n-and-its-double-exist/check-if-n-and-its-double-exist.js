/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
            if (zeroCount > 1) return true; // Check for two zeros
            continue;
        }

        // Binary Search for arr[i] * 2
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === arr[i] * 2 && mid !== i) {
                return true;
            } else if (arr[mid] < arr[i] * 2) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};
