/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    var index = nums.length - 1;
    var result = new Array(nums.length)

    while (right >= left) {
        var leftSquared = nums[left] ** 2;
        var rightSquared = nums[right] ** 2;

        if (leftSquared > rightSquared) {
            result[index] = leftSquared
            left++
        } else {
            result[index] = rightSquared
            right--
        }
        index--
    } 

    return result
};
