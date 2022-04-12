// 289 leetcode game of life

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
function gameofLife(board) {
    let result = board;

}

console.log('Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]' , 'Expected Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', 'Output: ', gameofLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
console.log('Input: board = [[1,1],[1,0]]' , 'Expected Output: [[1,1],[1,1]]', 'Output: ', gameofLife([[1,1],[1,0]]));