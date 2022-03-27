/* 
https://leetcode.com/problems/contains-duplicate-ii/submissions/

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

we are looking for the same value at different indicies
such that the absolute difference of the INDICIES <= k

create a map that stores a value and its index
if the map already has the value, check i - j <= k, return true if a match
if we reach the end of the loop without a match, return false
*/

const test1 = [1, 2, 3, 1],
	k1 = 3;
// true
const test2 = [1, 0, 1, 1],
	k2 = 1;
// true
const test3 = [1, 2, 3, 1, 2, 3],
	k3 = 2;
// false

const containsNearbyDuplicate = (nums, k) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
			return true;
		}
		map.set(nums[i], i);
	}
	return false;
};

const tests = {
    test1: { expected: true, received: containsNearbyDuplicate(test1, k1) },
    test2: { expected: true, received: containsNearbyDuplicate(test2, k2) },
    test3: { expected: false, received: containsNearbyDuplicate(test3, k3) },
}

console.table(tests);