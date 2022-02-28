function summaryRanges(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        let first = i;
        let j = i + 1;
        let string = "";
        console.log('i', i);
        console.log('j', j);
        // nums[1] + 1 === nums[2]
        // 2 + 1 === 3  true
        // i = 2;
        // j = 3;
        //3 + 1 === 4 true 
        // i = 3 j = 4
        // 4 + 1 === 6 false
        while (nums[i] + 1 === nums[j]) {
            j++;
            i++;
        }
        // i = 3 // 0
        //j = 4 // 2
        if (nums[first] != nums[j - 1]) {
            string = nums[first] + "->" + nums[j - 1];
        } else {
            string = "" + nums[i];
        }
        output.push(string);
        i = j - 1;
    }
    return output;
}

// console.log('Input: ', nums = [0,1,2,4,5,7], 'Output: ', ["0->2","4->5","7"], summaryRanges([0,1,2,4,5,7]))
console.log('Input: ', nums = [0,2,3,4,6,8,9], 'Output: ', ["0","2->4","6","8->9"], summaryRanges([0,2,3,4,6,8,9]))