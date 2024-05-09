const getTotalIsles = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
            return;
        }

        grid[row][col] = 'W'; 
        dfs(row + 1, col); 
        dfs(row - 1, col); 
        dfs(row, col + 1); 
        dfs(row, col - 1); 
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
}

const grid1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];

const grid2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
];
  };
console.log(getTotalIsles(grid1)); 
console.log(getTotalIsles(grid2)); 
  
  module.exports = getTotalIsles;


