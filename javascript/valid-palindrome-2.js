// leetcode problem #680

function validPalindrome(s) {
    // [] see if s is even or odd length
    if (s.length % 2 === 0) {
        console.log("tthis is even");
        let middleLeftIndex = (s.length / 2);
        console.log(middleLeftIndex);
    } else {
        console.log("this is odd");
        let middleIndex = ((s.length + 1)/2) - 1;
        let firstHalf = s.substr(0, middleIndex);
        let secondHalf = s.substring(middleIndex + 1, s.length);
        let reverse = secondHalf.split("").reverse().join("");
        console.log(firstHalf);
        if (reverse === firstHalf) {
            return true;
        } else {
            return false;
        }
    }
}

// console.log('Input: s = "aba"' , 'Expected Output: true', 'Output: ', validPalindrome("aba"));
console.log('Input: s = "abac"' , 'Expected Output: false', 'Output: ', validPalindrome("abac"));
// console.log('Input: s = "abc"' , 'Expected Output: false', 'Output: ', validPalindrome("abc"));
console.log('Input: s = "abba"' , 'Expected Output: true', 'Output: ', validPalindrome("abba"));
// console.log('Input: s = "abaca"' , 'Expected Output: false', 'Output: ', validPalindrome("abaca"));
