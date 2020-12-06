/* 
https://www.hackerrank.com/challenges/equality-in-a-array/problem

Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. 
Determine the minimum number of elements to delete to reach his goal.

*/

/* 
input: array
output: integer representing minimum number of deletions required to equalize the array

1. Create a map of the occurrences of each integer
2. Find the one with the most occurrences
3. Delete the rest, keep track of how many deletions were made.

*/

const arr = [1, 2, 3, 1, 2, 3, 3, 3];

function equalizeArray(arr) {
	let countMap = new Map();
	let current;

	for (let i = 0; i < arr.length; i++) {
		current = arr[i];
		if (countMap.has(current)) {
			countMap.set(current, countMap.get(current) + 1);
		} else {
			countMap.set(current, 1);
		}
	}

	let deletions = 0;
	const maxOccurrence = Math.max(...countMap.values());
	const mostCommon = [...countMap].find(
		([key, value]) => maxOccurrence === value
	)[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== mostCommon) {
			deletions++;
		}
	}
	return deletions;
}

console.log(equalizeArray(arr));
