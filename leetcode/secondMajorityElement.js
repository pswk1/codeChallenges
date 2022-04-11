/* 
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/

const test1 = [3, 2, 3];
// [3]
const test2 = [1];
// [1]
const test3 = [1, 2];
// [1, 2]
const test4 = [2, 2];
// 2

function majorityElement(nums) {
	const map = new Map();
	let result = [];

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);

		if (map.get(num) > nums.length / 3) {
			result.push(num);
		}
	}
	return [...new Set(result)];
}

const tests = {
    test1: { expected: [3], received: majorityElement(test1) },
    test2: { expected: [1], received: majorityElement(test2) },
    test2: { expected: [1, 2], received: majorityElement(test3) },
    test2: { expected: [2] , received: majorityElement(test4) },
}

console.table(tests);