/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }

        if (nums[i] > target) {
            return i;
        }

        if (target > nums[i] && i == nums.length - 1) {
            return i + 1
        }
    }

    return -1;
};