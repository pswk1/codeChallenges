/* 
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

/* 
input: array
output: number

Goal: largest abs diff between any two elements that are next to each other

Initiate variable at 0 to keep track of max. 
(we can use 0 since we are looking for an absolute value)

loop through array and keep track of differences between adjacent elements.
if current difference is greater than max difference, update the max variable.

return the max difference at the end.

*/

const inputArray = [2, 4, 1, 0];
// output: 3

function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = 0;
    let currentDiff;
    
    for (let i = 0; i < inputArray.length - 1; i++) {
        currentDiff = Math.abs(inputArray[i+1] - inputArray[i])
        if (currentDiff > maxDiff) maxDiff = currentDiff;
    }
    
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference(inputArray));