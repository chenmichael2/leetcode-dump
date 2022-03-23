function removeDuplicateLetters(s) {
    let cnt = Array(26).fill(0);
    let vis = Array(26).fill(false);
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
        if (!vis[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            while (res.length > 0
                && res[res.length-1].charCodeAt(0) >
                s[i].charCodeAt(0)
                && cnt[res[res.length-1].charCodeAt(0) -
                'a'.charCodeAt(0)] > 0) {
                    // Mark letter unvisited
                    vis[res[res.length-1].charCodeAt(0) -
                    'a'.charCodeAt(0)] = 0;
                    res = res.substring(0, res.length-1);
                }
                res += s[i];
                vis[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        }
    }

    console.log(vis);
    console.log(cnt);
}

console.log('Input: ', "s = cbacdcbcf" , 'Expected Output: ', "acdb", 'Output', removeDuplicateLetters("cbacdcbcf"))
// console.log('Input: ', "s = bcabc" , 'Expected Output: ', "abc", 'Output', removeDuplicateLetters("bcabc"));