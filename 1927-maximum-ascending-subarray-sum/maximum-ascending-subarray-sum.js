/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    var maxSubArray = 0
    var maxSubArrayResult = 0;

    for (var i = 0; i < nums.length; i++) {
        var currN = nums[i];
        maxSubArray = currN

        for (var j = i + 1; j < nums.length; j++) {
            var nextN = nums[j]
            var prevN = nums[j - 1]

            if (prevN < nextN) {
                maxSubArray += nextN
            } else {
                break;
            }
        }

        maxSubArrayResult = Math.max(maxSubArrayResult, maxSubArray)
    }
    
    return maxSubArrayResult;
};