//# 704
var search = function(nums, target) {
    console.log(nums, target);
    let lastIndex = nums.length - 1;
    console.log(lastIndex);
    if (nums.includes(target)) {
        console.log('first if statement')
        let index = nums.indexOf(target);
        console.log(index);
    }
    if (target > nums[lastIndex] || target < nums[0]) {
        console.log('not within search');
        return -1;
    }
    function searchHalf(arr, target) {
        let medianIndex = Math.floor(arr.length);
        // if (target < num[medianIndex])
    }
};

console.log(search([-1,0,3,4,5,9,12], 4)) // output should be