function removeDuplicateLetters(s) {
    console.log(s);
    let string = s;
    let firstLetter = s[1];
    let cnt = Array(26).fill(0);
    let visit = Array(26).fill(false);
    console.log(visit);
    console.log(cnt);
    // for (let i = 0; i < string.length; i++) {
    //     console.log(s[i], s.charCodeAt(i));
    // }
    
}

console.log('Input: ', "s = cbacdcbc" , 'Expected Output: ', "acdb", 'Output', removeDuplicateLetters("cbacdcbc"))
// console.log('Input: ', "s = bcabc" , 'Expected Output: ', "abc", 'Output', removeDuplicateLetters("bcabc"));