/* 
https://leetcode.com/problems/max-consecutive-ones/
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

const test1 = [1,1,0,1,1,1];
// 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
const test2 = [1,0,1,1,0,1];
// 2

function findMaxConsecutiveOnes (nums) {
    let maxCount = 0;
    let count = 0;
    
    for (const digit of nums) {
        if (digit === 1) {
            count++;
        } else {
            if (count > maxCount) {
                maxCount = count;
            }
            count = 0;
        }
    }
    
    return Math.max(maxCount, count);
}

const tests = {
    test1: { expected: 3, received: findMaxConsecutiveOnes(test1) },
    test2: { expected: 2, received: findMaxConsecutiveOnes(test2) }
}

console.table(tests);