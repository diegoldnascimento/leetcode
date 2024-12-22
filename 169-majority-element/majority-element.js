/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var map = new Map()
    var majorityCount = Math.floor(nums.length/2)

    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        if (map.get(nums[i]) > majorityCount) {
            return nums[i]
        }
    }
};