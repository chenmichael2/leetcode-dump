// 11 leetcode

function maxArea(height) {
    let result = 0,
    left = 0,
    right = height.length - 1;

    while (left < right) {
        let smallestSide = Math.min(height[left], height[right]);
        let area = (right - left) * smallestSide;

        if (area > result) result = area;

        if (height[left] < height[right]) left++;
        else right--;
    }

    return result;
}

console.log('Input: height = [1,8,6,2,5,4,8,3,7]' , 'Expected Output: 49', 'Output: ', maxArea([1,8,6,2,5,4,8,3,7]));
console.log('Input: height = [1,1]' , 'Expected Output: 1', 'Output: ', maxArea([1,1]));