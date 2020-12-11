/* 
https://www.hackerrank.com/challenges/sherlock-and-squares/problem

Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, 
inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Brute Force
- Loop through endpoints, checking for square values.
- increment a count variable for each one
- return that count variable

*/

// Tests
const a = 3;
const b = 9;
// 2

// const a = 17;
// const b = 24;
// 0

// const a = 24;
// const b = 49;
// 3

// Brute Force
// function squares(a, b) {
// 	let squareCount = 0;

// 	for (let i = a; i <= b; i++) {
// 		if (Math.sqrt(i) % 1 === 0) squareCount++;
// 	}

// 	return squareCount;
// }

// More efficient
function squares(a, b) {
	const sqrtB = Math.sqrt(b);
	const sqrtA = Math.sqrt(a);

	return Math.floor(sqrtB) - Math.ceil(sqrtA) + 1;
}

// One line with ES6 arrow function
// const squares = (a,b) => Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;

console.log(squares(a, b));
