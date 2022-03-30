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
                
            }
            let n = pplCopy[0] - lim;
            console.log(pplCopy[0], lim, n)
            // while (n > 0) {
            //     if (pplCopy.includes(n)) {
            //         boat += 1;
            //         let index = pplCopy.indexOf(n);
            //         console.log(index);
            //         pplCopy.spice(index, 1);
            //         pplCopy.shift();
            //     } else {
            //         n--;
            //     }
            // }
        }
    }
    return boat;
}

// console.log('Input: ', "people = [1,2], limit = 3" , 'Expected Output: ', 1, 'Output', savePeopleBoat([1,2], 3));
// console.log('Input: ', "people = [3,2,2,1], limit = 3" , 'Expected Output: ', 1, 'Output', savePeopleBoat([3,2,2,1], 3));
console.log('Input: ', "people = [3,5,3,4], limit = 5" , 'Expected Output: ', 1, 'Output', savePeopleBoat([3,5,3,4], 3));