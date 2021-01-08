/* 
https://www.hackerrank.com/challenges/priyanka-and-toys/problem

- sort array
- loop through, if current element is not > first element +4, increment containers
- the current element becomes the first item in the next container
*/

const w1 = [1, 2, 3, 21, 7, 12, 14, 21];
// 4

const w2 = [1, 2, 3, 4, 5, 10, 11, 12, 13];
// 2

function toys(w) {
	let containers = 1;
	const sorted = w.sort((a, b) => a - b);

	const weights = [...new Set(sorted)];

	let currentWeight = weights[0];

	for (let i = 0; i < weights.length; i++) {
		if (weights[i] > currentWeight + 4) {
			containers++;
			currentWeight = weights[i];
		}
	}
	return containers;
}

console.log(toys(w1));
console.log(toys(w2));
