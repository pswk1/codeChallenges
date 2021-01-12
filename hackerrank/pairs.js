/*
https://www.hackerrank.com/challenges/pairs/problem?h_r=next-challenge&h_v=zen

You will be given an array of integers and a target value. 
Determine the number of pairs of array elements that have a difference equal to a target value.

During the first loop, check the differences between the current number and every other number
keep track of number of pairs in a variable
return the variable

*/

const target1 = 1;
const arr1 = [1, 2, 3, 4];
// 3

const target2 = 2;
const arr2 = [1, 5, 3, 4, 2];
// 3

function pairs(target, arr) {
	let numOfPairs = 0;
	const sorted = arr.sort((a, b) => a - b);
	let currentIdx = 0;
	let numToCheckIdx = 0;

	while (numToCheckIdx < sorted.length) {
		let diff = sorted[numToCheckIdx] - sorted[currentIdx];
		if (diff === target) {
			numOfPairs++;
			numToCheckIdx++;
		} else if (diff > target) {
			currentIdx++;
		} else if (diff < target) {
			numToCheckIdx++;
		}
	}
	return numOfPairs;
}

console.log(pairs(target1, arr1));
console.log(pairs(target2, arr2));

/* 
Brute Force Method, O(n^2) runtime

function pairs(target, arr) {
	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			let numToCheck = arr[j];
			if (Math.abs(numToCheck - current) === target) numOfPairs++;
		}
	}
	return numOfPairs;
}
*/
