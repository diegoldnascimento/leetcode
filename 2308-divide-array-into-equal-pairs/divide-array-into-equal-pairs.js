/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if (nums.length === 0) {
        return false;
    }

    var hashmap = new Map();
    var pairs = Math.floor(nums.length / 2)

    if (pairs == 0) {
        return false;
    }

    for (const num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1)
    }

    for (const [c, v] of hashmap.entries()) {
        // 3 -> 4 / 2 = 2
        if (v > 0) {
            if (v % 2 == 0) {
                pairs -= v / 2;
            }
        }

    }

    if (pairs == 0) {
        return true;
    }

    return false;
};