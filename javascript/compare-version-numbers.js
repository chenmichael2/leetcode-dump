
var compareVersion = function(version1, version2) {
    let v1 = version1.toString();
    let v2 = version2.toString();
    let v1SplitDot = v1.split('.');
    let v2SplitDot = v2.split('.');
    let largerVerLen = 0;
    if (v1SplitDot.length < v2SplitDot.length) {
        largerVerLen = v2SplitDot.length;
    } else {
        largerVerLen = v1SplitDot.length;
    }
    for (let i = 0; i < largerVerLen; i++) {
        console.log(v1SplitDot[i]);
        console.log(v2SplitDot[i]);
        if (v1SplitDot[i] === undefined) {
            v1SplitDot[i] = 0;
        } else if (v2SplitDot[i] === undefined) {
            v2SplitDot[i] = 0;
        }
        if (parseInt(v1SplitDot[i]) != parseInt(v2SplitDot[i])) {
            if (parseInt(v1SplitDot[i]) > parseInt(v2SplitDot[1])) {
                console.log(1);
                return 1;
            } else if (parseInt(v1SplitDot[i]) < parseInt(v2SplitDot[1])) {
                console.log(-1);
                return -1;
            }
        }
    }
    return 0;
    // if (parseInt(v1SplitDot[1]) == parseInt(v2SplitDot[1])) {
    //     console.log("they are the same");
    // } else {
    //     console.log("NOT THE SAME")
    // }
};

console.log('INPUT: 1.01, 1.001 ======= OUTPUT: 0 //////// ', compareVersion(1.01, 1.001))