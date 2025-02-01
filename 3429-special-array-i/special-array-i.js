/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if (nums.length == 1) {
        return true;
    }

    for (var i = 1; i < nums.length; i++) {
        var curr = nums[i]
        var prev = nums[i - 1];

        if (curr % 2 == 0 && prev % 2 == 0) {
            return false;
        }

        if (curr % 2 != 0 && prev % 2 != 0) {
            return false;
        }
    }

    return true;
};