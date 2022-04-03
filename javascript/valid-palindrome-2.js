// leetcode problem #680

function validPalindrome(s) {
    // [] see if s is even or odd length
    if (s.length % 2 === 0) {
        console.log("this is even");
    } else {
        console.log("this is odd");
        let middleIndex = s.length/2;
        console.log(middleIndex)
    }
}

console.log('Input: s = "aba"' , 'Expected Output: true', 'Output: ', validPalindrome("aba"));
// console.log('Input: s = "abac"' , 'Expected Output: false', 'Output: ', validPalindrome("abac"));
// console.log('Input: s = "abc"' , 'Expected Output: false', 'Output: ', validPalindrome("abc"));
// console.log('Input: s = "abba"' , 'Expected Output: true', 'Output: ', validPalindrome("abba"));