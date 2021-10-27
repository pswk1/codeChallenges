/* 
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

- Let's say we have some subarray whose sum = A and the next element is B
- if A + B < B then it would be better to start a new subarray at B because why would we have a subarray with a sum less than an element that's greater than the sum?

Pseudocode:
- Initialize maxSum and subArrSum to first element of array
- Iterate from the second element to the last element of the array
- Assign subArrSum to equal the maximum between the current element, and the current element + subArrSum
    - Math.max(nums[i], nums[i] + subArrSum)
- Assign the maxSum to Math.max(maxSum, subArrSum)
- return maxSum

Initialize ans and subarr_sum to the first element of the array
Iterate from index 1 to last index of the array
Assign subarr_sum = max(nums[i], nums[i] + subarr_sum)
Assign ans = max(ans, subarr_sum)
return ans
*/

function maxSubArray(nums) {
    let maxSum = nums[0];
    let subArrSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        subArrSum = Math.max(nums[i], nums[i] + subArrSum);
        maxSum = Math.max(maxSum, subArrSum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // Expect maxSum to be 6
console.log(maxSubArray([1])); // Expect maxSum to be 1
console.log(maxSubArray([5,4,-1,7,8])); // Expect maxSum to be 23