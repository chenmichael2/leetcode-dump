var search = function(nums, target) {
    console.log(nums, target);
    let lastIndex = nums.length - 1;
    console.log(lastIndex);
    if (target > num[lastIndex] || target < num[0]) {
        console.log('not within search');
        return -1
    }
};

console.log(search([-1,0,3,5,9,12], 4))