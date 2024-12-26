/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    var count = 0

    function dfs(index, currentSum) {
        if (index == nums.length) {
            if (currentSum == target) {
                count += 1
                
            }
            return
        }

        dfs(index + 1, currentSum + nums[index])
        dfs(index + 1, currentSum - nums[index])
    }

    dfs(0, 0)

    return count
};