/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var result = new Array(nums);
    var index = nums.length - 1;

    while (left <= right) {
        var leftSquared = nums[left] * nums[left];
        var rightSquared = nums[right] * nums[right];

        if (leftSquared > rightSquared) {
            result[index] = leftSquared;
            left++;
        } else {
            result[index] = rightSquared;
            right--;
        }
        index--;
    }

    return result;
};
