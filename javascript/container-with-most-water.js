// 11 leetcode

function maxArea(height) {
    let x = 0;
    for (let i = 0; i < height.length; i++) {
        x += height[i];
    }
    return x;
}

console.log('Input: height = [1,8,6,2,5,4,8,3,7]' , 'Expected Output: 49', 'Output: ', maxArea([1,8,6,2,5,4,8,3,7]));
console.log('Input: height = [1,1]' , 'Expected Output: 1', 'Output: ', maxArea([1,1]));