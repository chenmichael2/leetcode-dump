titleToNumber('ABA');

var titleToNumber = function(columnTitle) {
    let letterArr = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let answer = 0;
    let splitColumnTitle = columnTitle.split('');
    let reverseTitle = splitColumnTitle.reverse();
    console.log(reverseTitle);
    for (let i = 0; i < reverseTitle.length; i++) {
        let number = letterArr.indexOf(reverseTitle[i]);
        answer += (Math.pow(26, i) * number);
    }
    console.log(answer);
};