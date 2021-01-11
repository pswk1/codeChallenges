/* 
https://www.hackerrank.com/challenges/missing-numbers/problem

Numeros the Artist had two lists that were permutations of one another. He was very proud. Unfortunately, while transporting them from one exhibition to another, 
some numbers were lost out of the orignal list. Can you find the missing numbers?

- If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. 
- If that is not the case, then it is also a missing number.
- Return the missing numbers sorted ascending.
- Only include a missing number once, even if it is missing multiple times.
- The difference between the maximum and minimum numbers in the original list is less than or equal to 100.

make a Map of the numbers and their occurrences
take note of the discrepencies
*/

const arr1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const arr2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
// 204, 205, 206
// These all exist in both arrays, but at different frequencies

const arr3 = [7, 2, 5, 3, 5, 3];
const arr4 = [7, 2, 5, 4, 6, 3, 5, 3];
// 4, 6
// 4 and 6 are missing from arr3.

function missingNumbers(arr1, arr2) {
	let map1 = new Map();
	let map2 = new Map();
	let missingNums = [];

	for (const num of arr1) {
		map1.set(num, (map1.get(num) || 0) + 1);
	}

	for (const num of arr2) {
		map2.set(num, (map2.get(num) || 0) + 1);
	}

	for (const [key, value] of map2) {
		if (!map1.has(key) || map1.get(key) !== value) {
			missingNums.push(key);
		}
	}

	return missingNums.sort((a, b) => a - b);
}

console.log(missingNumbers(arr1, arr2));
console.log(missingNumbers(arr3, arr4));
