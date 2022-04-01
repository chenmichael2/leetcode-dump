// daily programmer 20220330

function search2dMatrix(matrix, target) {
    // [] for loop through each array and find the first and last index of each array. 
    // [] see if the target number is in the array or not
    // [] see if the array includes and return true or false

    // [] binary search
    function findTheArray(matrix, target, firstArrIndex, lastArrIndex) {
        // go to the middle array and see if the target is less than or greater than or in the matrix.
        
        let middleArrIndex = Math.floor((firstArrIndex + lastArrIndex)/2);
        console.log(firstArrIndex, lastArrIndex); //this is undefined when i go throught the second time
        // this line cannot read 0 on the second go
        console.log('line 13', middleArr[0])
        let firstNum = matrix[middleArrIndex][0];
        let lastNum = matrix[middleArrIndex][matrix[middleArrIndex].length];
        if (firstNum < target && target < lastNum) {
            console.log("i'm in this array");
            // [] find in this array
        } else {
            console.log("I still need to find the array")
            if (target > lastNum) {
                console.log(">");
                findTheArray(matrix, target, middleArr.length - 1, lastArrIndex);
            } else {
                console.log("<");
                //there is an issue here and it not ending
                findTheArray(matrix, target, firstArrIndex, middleArr.length - 1);
            }
        }
    }
    findTheArray(matrix, target, 0, matrix.length - 1);

}

console.log('Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3' , 'Expected Output: true', 'Output: ', search2dMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
// console.log('Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13' , 'Expected Output: false', 'Output: ', search2dMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
