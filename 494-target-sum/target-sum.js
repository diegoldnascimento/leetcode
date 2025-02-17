/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    var count = 0

    function dfs(currentSum, index) {
        if (index === nums.length) {
            if (currentSum === target) {
                count++;
            }
            return
        }

        dfs(currentSum + nums[index], index + 1)
        dfs(currentSum - nums[index], index + 1)
    }

    dfs(0, 0)

    return count
};