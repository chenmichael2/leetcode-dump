function removeDuplicateLetters(s) {
    let cnt = Array(26).fill(0);
    let visit = Array(26).fill(false);
    // for (let i = 0; i < string.length; i++) {
    //     console.log(s[i], s.charCodeAt(i));
    // }
    for (var i = 0; i < s.length; i++) {
        cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        console.log(s[i].charCodeAt(0) - 'a'.charCodeAt(0))
    }
    let res = "";
    for (let i = 0; i < s.length; i++) {
        cnt[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    console.log(visit);
    console.log(cnt);
}

console.log('Input: ', "s = cbacdcbcf" , 'Expected Output: ', "acdb", 'Output', removeDuplicateLetters("cbacdcbcf"))
// console.log('Input: ', "s = bcabc" , 'Expected Output: ', "abc", 'Output', removeDuplicateLetters("bcabc"));