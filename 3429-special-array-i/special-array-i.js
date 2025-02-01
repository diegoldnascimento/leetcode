/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if (nums.length == 1) {
        return true;
    }

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] % 2 == 0 && nums[i - 1] % 2 == 0) {
            return false;
        }

        if (nums[i] % 2 != 0 && nums[i - 1] % 2 != 0) {
            return false;
        }
    }

    return true;
};