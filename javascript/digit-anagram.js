function digit_anagram(a) {
    let count = 0;
    let sort = a.map(x => x.toString().split('').sort().join())
    // sort.sort((x, y) => x.length - y.length)
    console.log(sort);
    return count;
}

console.log('Input: ', [5432, 23, 57, 75, 832, 328, 98 ,382, 567], 'Expected Output: ', 4, 'Output', digit_anagram([5432, 23, 57, 98, 75, 832, 328, 382, 567]));
