/* 
https://www.hackerrank.com/challenges/minimum-distances/problem

We define the distance between two array values as the number of indices between the two values. Given a, 
find the minimum distance between any pair of equal elements in the array.
If no such value exists, print -1.

Input: array
Output: integer

Sample:
a = [7, 1, 3, 4, 1, 7];
// 3

Explanation: There are two pairs of matching integers, 1 and 7.
The distance between the two 1's is 3, and the distance between the two 7's is 5.
The min between the two distances is 3, so we return 3.

Steps:
Store the values of the array in a Map and keep track of their occurrences.
find the values in the Map with occurrences of value 2.
Since Map preserves the insertion order, we can iterate through its values and measure the distances.
*/

const a = [7, 1, 3, 4, 1, 7];
// 3

function minimumDistances(a) {
	let occurMap = new Map();
	let currentKey;
	let distances = [];

	for (let i = 0; i < a.length; i++) {
		currentKey = a[i];
		if (occurMap.has(currentKey)) {
			occurMap.set(currentKey, occurMap.get(currentKey) + 1);
		} else {
			occurMap.set(currentKey, 1);
		}
	}

	const numberOfOccurrences = [...occurMap.values()];

	if (!numberOfOccurrences.includes(2)) return -1;

	for (let [key, value] of occurMap) {
		if (value === 2) {
			distances.push(a.lastIndexOf(key) - a.indexOf(key));
		}
	}
	return Math.min(...distances);
}

console.log(minimumDistances(a));
