// 289 leetcode game of life

// https://leetcode.com/problems/game-of-life/

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

function gameofLife(board) {
    let result = [];
    let neighbors = [];
    let count = 0;
    let rows = board.length;
    for (let i = 0; i < rows; i++) {
        // grab the row 
        let newRow = []
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            let target = row[j];
            // grab row before and row after
            let rowBefore = board[i - 1];
            let rowAfter = board[i + 1];
            if (rowBefore === undefined) {
                rowBefore = Array(row.length).fill(-1);
            }
            if (rowAfter === undefined) {
                rowAfter = Array(row.length).fill(-1);
            }
            // console.log(target, rowBefore, row, rowAfter);
            let top = rowBefore[j];
            let right = row[j + 1];
            let bottom = rowAfter[j];
            let left = row[j - 1];
            if (top === 1) {
                count += 1;
            }
            if (right === 1) {
                count += 1;
            }
            if (bottom === 1) {
                count += 1;
            }
            if (left === 1) {
                count += 1;
            }
            let topLeft = rowBefore[j - 1];
            let topRight = rowBefore[j + 1];
            let bottomLeft = rowAfter[j - 1];
            let bottomRight = rowAfter[j + 1];
            if (topLeft === 1) {
                count += 1;
            }
            if (topRight === 1) {
                count += 1;
            }
            if (bottomLeft === 1) {
                count += 1;
            }
            if (bottomRight === 1) {
                count += 1;
            }
            // push into neighbors array
            // read neighbors array and then change the target to what it needs to be
            //
            // neighbors.push(top, right, bottom, left, topLeft, topRight, bottomLeft, bottomRight);
            // neighbors.sort()
            // console.log(neighbors);
            // neighbors = [];
            console.log(count);
            // // Translating the upper
            // Any 1 with < 2 neighbors = 0
            // Any 1 with 2 - 3 neighbors = 1
            // Any 1 with > 3 neighbors = 0
            // Any 0 with = 3 neighbors = 1
            if (target === 1) {
                console.log('target = 1', target);
                if (count < 2 || count > 3) {
                    newRow.push(0);
                } else {
                    newRow.push(1);
                }
            } else {
                console.log('target = 0', target);
                if (count === 3) {
                    newRow.push(1);
                } else {
                    newRow.push(0);
                }
            }
            count = 0;
        }
        console.log(newRow);
        result.push(newRow);
        newRow = [];
    }
    console.log(result);
    return result;
}

//

console.log('Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]' , 'Expected Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', 'Output: ', gameofLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
// console.log('Input: board = [[1,1],[1,0]]' , 'Expected Output: [[1,1],[1,1]]', 'Output: ', gameofLife([[1,1],[1,0]]));