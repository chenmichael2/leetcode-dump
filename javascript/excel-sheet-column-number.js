var titleToNumber = function(columnTitle) {
    console.log('input: ', columnTitle)
    let letterArr = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let answer = 0;
    let splitColumnTitle = columnTitle.split('');
    let reverseTitle = splitColumnTitle.reverse();
    for (let i = 0; i < reverseTitle.length; i++) {
        let number = letterArr.indexOf(reverseTitle[i]);
        answer += (Math.pow(26, i) * number);
    }
    return answer;
};

console.log('output: ', titleToNumber('ABA'));