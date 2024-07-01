/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var hashmap = new Map()

    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i]

        if (hashmap.has(diff)) {
            return [hashmap.get(diff), i]
        }
        hashmap.set(nums[i], i)
    }

    return []
};