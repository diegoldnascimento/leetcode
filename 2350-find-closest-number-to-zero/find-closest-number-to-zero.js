/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    var closestNumber = nums[0];

    for (var i = 1; i < nums.length; i++) {
         if (Math.abs(nums[i]) < Math.abs(closestNumber) || 
            (Math.abs(nums[i]) === Math.abs(closestNumber) && nums[i] > closestNumber)) {
            closestNumber = nums[i];
        }
    }

    return closestNumber;
};