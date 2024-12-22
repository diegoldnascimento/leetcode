/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var map = new Map()
    var ans = nums[0]
    var highest = 0

    for (var i = 0; i < nums.length; i++) {
        var found = 0

        for (var j = i; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                found++
            }
        }

        if (found > highest) {
            ans = nums[i]
            highest = found
        }

        if (highest > Math.floor(nums.length/2)) {
            return ans
        }

        found = 0
    }

    return ans
};