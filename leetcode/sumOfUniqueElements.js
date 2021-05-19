/* 
https://leetcode.com/problems/sum-of-unique-elements/
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

*/

const test1 = [1,2,3,2];
// 4
const test2 = [1, 1, 1, 1];
// 0
const test3 = [1,2,3,4,5];
// 15



function sumOfUnique(nums) {
	let uniqueMap = new Map();
	let uniqueSum = 0;

	for (const num of nums) {
		uniqueMap.set(num, (uniqueMap.get(num) || 0) + 1);
	}

	for (const [num, numOfOccurrences] of uniqueMap) {
		if (numOfOccurrences === 1) uniqueSum += num;
	}

	return uniqueSum;
}

console.log({
    test1: sumOfUnique(test1),
    test2: sumOfUnique(test2),
    test3: sumOfUnique(test3)
})