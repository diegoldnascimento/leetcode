/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length == 0) {
        return []
    }

    var l = 0;
    var r = nums.length;
    var nums2 = [...nums]

    // 0 + 1
    // 0 + 1 + 2
    while (l < r) {
        var currSum = 0;
        var i = 0;

        while (i <= l) {
            currSum += nums2[i]
            i++
        }
        nums[i-1] = currSum;
        l++
        currSum = 0;
        i = 0;
    }

    return nums;
};