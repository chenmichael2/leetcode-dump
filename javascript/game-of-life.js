// 289 leetcode game of life

// https://leetcode.com/problems/game-of-life/

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.


// // Translating the upper
// Any 1 with < 2 neighbors = 0
// Any 1 with 2 - 3 neighbors = 1
// Any 1 with > 3 neighbors = 0
// Any 0 with = 3 neighbors = 1
function gameofLife(board) {
    let result = board;
    let neighbors = [];
    let rows = board.length;
    for (let i = 0; i < rows; i++) {
        
    }
}

console.log('Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]' , 'Expected Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', 'Output: ', gameofLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
console.log('Input: board = [[1,1],[1,0]]' , 'Expected Output: [[1,1],[1,1]]', 'Output: ', gameofLife([[1,1],[1,0]]));