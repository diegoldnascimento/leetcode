/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hashmap = new Map()

    for (var i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
            return true;
        }
        hashmap.set(nums[i], i)
    }

    console.log({hashmap})

    return false
};