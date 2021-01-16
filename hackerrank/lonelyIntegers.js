/*
https://www.hackerrank.com/challenges/lonely-integer/problem?isFullScreen=true

Given an array of integers, where all elements but one occur twice, find the unique element.

store each integer and their number of occurrences in a Map
return the integer that has an occurrence of 1
*/

const arr1 = [1];
// 1

const arr2 = [1, 2, 3, 4, 3, 2, 1];
// 4

const arr3 = [0, 0, 1, 2, 1];
// 2

const arr4 = [1, 1, 2];
// 2

function lonelyInteger(arr) {
	if (arr.length === 1) return arr[0];

	let integerCount = new Map();

	for (const integer of arr) {
		integerCount.set(integer, (integerCount.get(integer) || 0) + 1);
	}

	for (const [integer, numOfOccurrences] of integerCount) {
		if (numOfOccurrences === 1) return integer;
	}
}

const test1 = lonelyInteger(arr1);
const test2 = lonelyInteger(arr2);
const test3 = lonelyInteger(arr3);
const test4 = lonelyInteger(arr4);

console.log({ test1, test2, test3, test4 });
