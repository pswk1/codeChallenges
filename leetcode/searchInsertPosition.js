/* 
https://leetcode.com/problems/search-insert-position/

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
*/

const test1 = [1, 3, 5, 6],
	target1 = 5;
// 2
const test2 = [1, 3, 5, 6],
	target2 = 2;
// 1
const test3 = [1, 3, 5, 6],
	target3 = 7;
// 4

/* 
binary search
initialize left at i = 0, right at nums.length - 1
while left is less than right
let midpoint equal the halfway point
if target = midpoint return it
else 
make adjustments to left/right according to target

if we reach the end of the loop without finding the target,
we can check compare target and where left is at
if the target is greater it will go one spot to the right, else it will 
take the current spot of left
*/

function searchInsert(nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let middle = Math.floor((left + right) / 2);
		if (target === nums[middle]) {
			return middle;
		} else if (target < nums[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return target > nums[left] ? left + 1 : left;
}

const tests = {
    test1 : { expected: 2, received: searchInsert(test1, target1) },
    test2 : { expected: 1, received: searchInsert(test2, target2) },
    test3 : { expected: 4, received: searchInsert(test3, target3) },
}

console.table(tests);