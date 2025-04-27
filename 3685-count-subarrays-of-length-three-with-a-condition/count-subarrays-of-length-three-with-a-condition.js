/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    if (nums.length < 3) {
        return 0;
    }

    var count = 0;

    function dfs(path, index) {
        if (path.length === 3) {
            if (path[0] + path[2] == path[1] / 2) {
                count++;
            }
            return;
        }

        if (index >= nums.length) {
            return;
        }

        dfs([...path, nums[index]], index + 1)
    }

    for (var i = 0; i < nums.length; i++) {
        dfs([], i)
    }

    return count;
};
