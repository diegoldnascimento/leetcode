// @leet start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    var maxFishesCount = 0;
    var visited = []

    for (var r = 0; r < grid.length; r++) {
        visited[r] = []
        for (var c = 0; c < grid[r].length; c++) {
            visited[r][c] = false
        }
    }

    function helper(r, c) {
        // Check boundary conditions, water cells, or already visited cells
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length ||
            grid[r][c] == 0 || visited[r][c]) {
            return 0;
        }

         // Mark the cell as visited
        visited[r][c] = true;

        // Add the current cell's fish count and explore neighbors recursively
        return grid[r][c] +
            helper(r, c + 1) +
            helper(r, c - 1) +
            helper(r + 1, c) +
            helper(r - 1, c);
    }

    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            if (grid[r][c] > 0 && !visited[r][c]) {
                var fishes = helper(r, c);

                maxFishesCount = Math.max(maxFishesCount, fishes);

                console.log({ maxFishesCount, fishes })
            }
        }
    }


    console.log({ visited })

    return maxFishesCount;
};
// @leet end
