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
    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] !== 0) {
            visit[i] = true
        }
    }
    console.log(visit);
    console.log(cnt);
}

console.log('Input: ', "s = cbacdcbc" , 'Expected Output: ', "acdb", 'Output', removeDuplicateLetters("cbacdcbc"))
// console.log('Input: ', "s = bcabc" , 'Expected Output: ', "abc", 'Output', removeDuplicateLetters("bcabc"));