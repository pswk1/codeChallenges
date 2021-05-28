/* 
https://leetcode.com/problems/sort-array-by-increasing-frequency/
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
*/

const test1 = [1,1,2,2,2,3]
// [3,1,1,2,2,2]

const test2 = [2,3,1,3,2]
// [1,3,3,2,2]

const test3 = [-1,1,-6,4,5,-6,1,4,1]
// [5,-1,4,4,-6,-6,1,1,1]

function frequencySort(nums) {
	const numsMap = new Map();

	for (let n of nums) {
		numsMap.set(n, (numsMap.get(n) || 0) + 1);
	}

	return nums.sort((a, b) => {
		if (numsMap.get(a) === numsMap.get(b)) {
			return b - a;
		} else {
			return numsMap.get(a) - numsMap.get(b);
		}
	});
}

console.log({
    test1: frequencySort(test1),
    test2: frequencySort(test2),
    test3: frequencySort(test3)
})