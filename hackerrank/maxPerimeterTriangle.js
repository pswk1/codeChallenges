/* 
https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

Given an array of stick lengths, use 3 of them to construct a non-degenerate triange with the maximum possible perimeter. 
Print the lengths of its sides as 3 space-separated integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

Choose the one with the longest maximum side.
If more than one has that maximum, choose from them the one with the longest minimum side.
If more than one has that maximum as well, print any one them.
If no non-degenerate triangle exists, print -1.

non-degnerate: the two smaller sides must add up to greater than the longest side
sort the sticks
check each triplet
*/

const sticks1 = [1, 1, 1, 3, 3];
// 1 3 3
const sticks2 = [1, 2, 3];
// -1
const sticks3 = [1, 1, 1, 2, 3, 5];
// 1, 1, 1

function maximumPerimeterTriangle(sticks) {
	let validTriangles = [];

	const sorted = sticks.sort((a, b) => b - a);
	for (let i = 0; i <= sorted.length - 3; i++) {
		let longest = sorted[i];
		let middle = sorted[i + 1];
		let last = sorted[i + 2];

		if (middle + last > longest) {
			validTriangles.push([longest, middle, last]);
		}
	}

	return validTriangles.length === 0 ? [-1] : validTriangles[0].sort((a, b) => a - b);
}

const test1 = maximumPerimeterTriangle(sticks1);
const test2 = maximumPerimeterTriangle(sticks2);
const test3 = maximumPerimeterTriangle(sticks3);

console.log({ test1, test2, test3 });
