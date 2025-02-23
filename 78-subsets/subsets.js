/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];

    function dfs(index, subset) {
        if (index === nums.length) {
            result.push([...subset]);
            return;
        }
        
        // Include nums[index]
        dfs(index + 1, [...subset, nums[index]]);

        // Exclude nums[index]
        dfs(index + 1, subset);
    }

    dfs(0, []);
    return result;
};
