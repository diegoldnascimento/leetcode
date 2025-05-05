/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 0) {
        return []
    }

    var hashmap = new Map()

    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i]

        if (hashmap.has(complement)) {
            return [hashmap.get(complement), i]
        }
        hashmap.set(nums[i], i)
    }

    return []
};