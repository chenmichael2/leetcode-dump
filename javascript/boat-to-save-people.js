// daily-programmer 20220324

function savePeopleBoat(ppl, lim) {
    let pplCopy = ppl;
    console.log(pplCopy);
    pplCopy.shift();
    console.log(pplCopy);
    let boat = 0
    for (let i = 0; i < pplCopy.length; i++) {
        if (pplCopy[i] === lim) {
            pplCopy.shift();
        }
    }
}

// console.log('Input: ', "people = [1,2], limit = 3" , 'Expected Output: ', 1, 'Output', savePeopleBoat([1,2], 3));
// console.log('Input: ', "people = [3,2,2,1], limit = 3" , 'Expected Output: ', 1, 'Output', savePeopleBoat([3,2,2,1], 3));
console.log('Input: ', "people = [3,5,3,4], limit = 5" , 'Expected Output: ', 1, 'Output', savePeopleBoat([3,5,3,4], 3));