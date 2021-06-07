/* 
https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
*/

const test1 = [1, 2, 2, 6, 6, 6, 6, 7, 10];
// 6

const test2 = [1, 1];
// 1

const test3 = [1, 2, 3, 3];
// 3

function findSpecialInteger(arr) {
	const occurrence = arr.length / 4;

	let numMap = new Map();

	for (const num of arr) {
		numMap.set(num, (numMap.get(num) || 0) + 1);
	}

	for (const [key, value] of numMap) {
		if (value > occurrence) return key;
	}
}

console.log({
	test1: findSpecialInteger(test1),
	test2: findSpecialInteger(test2),
	test3: findSpecialInteger(test3),
});
