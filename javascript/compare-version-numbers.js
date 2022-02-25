
var compareVersion = function(version1, version2) {
    let v1 = version1.toString();
    let v2 = version2.toString();
    let v1SplitDot = v1.split('.');
    let v2SplitDot = v2.split('.');
    console.log(v1SplitDot);
    console.log(v2SplitDot);
};

console.log('INPUT: 1.01, 1.001 ======= OUTPUT: 0 //////// ', compareVersion(1.01, 1.001))