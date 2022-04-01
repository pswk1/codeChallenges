/* 
https://leetcode.com/problems/majority-element/


Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

const test1 = [3, 2, 3];
// 3
const test2 = [2, 2, 1, 1, 1, 2, 2];
// 2

function majorityElement(nums) {
	let map = {};

	for (const num of nums) {
		if (!map[num]) {
			map[num] = 1;
		} else {
			map[num]++;
		}

		if (map[num] > nums.length / 2) {
			return num;
		}
	}
}

const tests = {
	test1: { expected: 3, received: majorityElement(test1) },
	test2: { expected: 2, received: majorityElement(test2) },
};

console.table(tests);
