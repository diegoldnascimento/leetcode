/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    var closest = nums[0]

    for (var i = 1; i < nums.length; i++) {
        const num = nums[i];
        
        if (Math.abs(num) < Math.abs(closest)) {
            closest = num;
        } else if (Math.abs(num) === Math.abs(closest) && num > closest) {
            closest = num;
        }
    }

    return closest
};