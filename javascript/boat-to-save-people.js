// daily-programmer 20220324

function savePeopleBoat(ppl, lim) {
    let pplCopy = ppl;
    let boat = 0;
    while (pplCopy.length > 0) {
        if (pplCopy.length === 1) {
            boat += 1;
            pplCopy.shift();
        } else {
            if (pplCopy[0] === lim) {
                boat += 1;
                pplCopy.shift();
            } else {
                let n = lim - pplCopy[0];
                while (n > 0) {
                    if (pplCopy.includes(n)) {
                        boat += 1;
                        console.log("hello")
                        let index = pplCopy.indexOf(n);
                        console.log(index);
                        pplCopy.spice(index, 1);
                        pplCopy.shift();
                        n = 0;
                    } else {
                        console.log("hello1")
                        n--;
                    }
                }
                boat += 1;
                pplCopy.shift();
            }
        }
    }
    return boat;
}

console.log('Input: ', "people = [1,2], limit = 3" , 'Expected Output: ', 1, 'Output', savePeopleBoat([1,2], 3));
console.log('Input: ', "people = [3,2,2,1], limit = 3" , 'Expected Output: ', 3, 'Output', savePeopleBoat([3,2,2,1], 3));
console.log('Input: ', "people = [3,5,3,4], limit = 5" , 'Expected Output: ', 4, 'Output', savePeopleBoat([3,5,3,4], 5));