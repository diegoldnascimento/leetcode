/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);

    if (nums.length == 0) {
        return 0;
    }

    if (k == 1 || nums.length == 1) {
        return nums[0]
    }

    for (const num of nums) {
        if (k == 1) {
            return num;
        }
        k--
    }

    return nums[0];
};