/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length == 0) {
        return []
    }

    for (var i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    return nums;
};