/* 
https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

const test1 = [17, 18, 5, 4, 6, 1];
// [18,6,6,6,1,-1]
const test2 = [400];
// [-1]

function replaceElements(arr) {
	let max = arr[arr.length - 1];
	arr[arr.length - 1] = -1;
	let current;

	for (let i = arr.length - 2; i >= 0; i--) {
		current = arr[i];
		arr[i] = max;
		if (max < current) {
			max = current;
		}
	}
	return arr;
}

const tests = {
	test1: { expected: [18, 6, 6, 6, 1, -1], received: replaceElements(test1) },
	test2: { expected: [-1], received: replaceElements(test2) },
};

console.table(tests);