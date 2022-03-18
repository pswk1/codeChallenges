/* 
https://leetcode.com/problems/number-of-good-pairs/

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

const test1 = [1, 2, 3, 1, 1, 3];
// 4
const test2 = [1, 1, 1, 1];
// 6
const test3 = [1, 2, 3];
// 0

function numIdenticalPairs(nums) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] == nums[j]) count++;
		}
	}
	return count;
}

console.log({
    test1: numIdenticalPairs(test1),
    test2: numIdenticalPairs(test2),
    test3: numIdenticalPairs(test3),
})
