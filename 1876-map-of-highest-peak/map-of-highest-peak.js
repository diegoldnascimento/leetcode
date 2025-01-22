var highestPeak = function (isWater) {
  const rows = isWater.length;
  const cols = isWater[0].length;

  // Initialize the grid
  const grid = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) =>
      isWater[r][c] === 1 ? 0 : Infinity,
    ),
  );

  // Transform the matrix m x n into 0 and 1s
  //
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) continue;

      if (r > 0) grid[r][c] = Math.min(grid[r][c], grid[r - 1][c] + 1);
      if (c > 0) grid[r][c] = Math.min(grid[r][c], grid[r][c - 1] + 1);
    }
  }

  console.log({ isWater });

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      if (grid[r][c] === 0) continue;

      if (r < rows - 1) grid[r][c] = Math.min(grid[r][c], grid[r + 1][c] + 1);
      if (c < cols - 1) grid[r][c] = Math.min(grid[r][c], grid[r][c + 1] + 1);
    }
  }

  return grid;
};