
var compareVersion = function(version1, version2) {
    let v1 = version1.toString();
    let v2 = version2.toString();
    let v1SplitDot = v1.split('.');
    let v2SplitDot = v2.split('.');
    if (v1SplitDot.length !== v2SplitDot.length) {
        return 0;
    }
};

console.log('INPUT: 1.01, 1.001 ======= OUTPUT: 0 //////// ', compareVersion(1.01, 1.001))