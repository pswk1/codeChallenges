/* 
https://leetcode.com/problems/single-number/

Given a non-empty array of integers nums, every element appears twice except for one.
Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

const test1 = [2, 2, 1];
// 1

const test2 = [4, 1, 2, 1, 2];
// 4

const test3 = [1];
// 1

const test4 = [0, 0, 4, 4, 3, 3, 6, 6, 7, 9, 9, 15, 23]
// 7

function singleNumber(nums) {
    if (nums.length === 1) return nums[0];

    let numsMap = new Map();

    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }

    for (const [key, value] of numsMap) {
        if (value === 1) return key;
    }
}

console.log({
    test1: singleNumber(test1),
    test2: singleNumber(test2),
    test3: singleNumber(test3),
    test4: singleNumber(test4)
})