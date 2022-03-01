/* 
https://binarysearch.com/problems/Index-with-Equal-Left-and-Right-Sums

Given a list of integer nums, return the earliest index i such that the sum of the numbers left of i is equal to the sum of numbers right of i. If there's no solution, return -1.

Sum of an empty list is defined to be 0.

Constraints
1 ≤ n ≤ 100,000 where n is the length of nums

initialize leftSum as 0
initialize rightSum sum of all nums

if leftSum is not equal to rightSum - currentElement, add current to left and subtract current from right

proceed to next element
if we finish the loop without finding a match, then return -1

Edge case: nums will never be empty according to constraints
*/

const test1 = [2, 3, 4, 0, 5, 2, 2];
// 3
// Sum of the numbers left of index 3 is 9 and sum of the numbers right of index 3 also 9
const test2 = [1, -2, 2];
// 0 
// Sum of the numbers left of index 0 is 0 and sum of the numbers right of index 0 also 0.

const solve = (nums) => {
    // Start left sum at 0
    // Start right sum to be sum of array
    let leftSum = 0;
    let rightSum = nums.reduce((a,b) => a+ b);

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === rightSum - nums[i]) {
            return i
        }

        leftSum += nums[i];
        rightSum -= nums[i];
    }
    return -1;
}

console.log({
    test1: solve(test1),
    test2: solve(test2)
})