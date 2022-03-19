/* 
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

const test1 = [1, 2, 3, 1];
// true
const test2 = [1, 2, 3, 4];
// false
const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// true

// solve using a Set
// const containsDuplicate = (nums) => nums.length !== new Set(nums).size;

function containsDuplicate(nums) {
	let hash = new Map();
    
    for (const num of nums) {
        if (hash.has(num)) {
            return true;
        } else {
            hash.set(num, 1);
        }
    }
    return false;
}

const tests = {
	'[1, 2, 3, 1]': { expected: true, received: containsDuplicate(test1) },
	'[1, 2, 3, 4]': { expected: false, received: containsDuplicate(test2) },
	'[1,1,1,3,3,4,3,2,4,2]': {
		expected: true,
		received: containsDuplicate(test3),
	},
};

console.table(tests);
