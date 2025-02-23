var subsets = function (nums) {
    var possibilities = [];

    function dfs(arr, index) {
        if (index === nums.length) {
            possibilities.push([...arr]);
            return;
        }
        
        // Include nums[index]
        arr.push(nums[index]);
        dfs(arr, index + 1);
        
        // Exclude nums[index] (backtrack)
        arr.pop();
        dfs(arr, index + 1);
    }

    dfs([], 0);
    console.log({possibilities})
    return possibilities;
};
