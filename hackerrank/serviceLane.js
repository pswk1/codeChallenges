/* 
https://www.hackerrank.com/challenges/service-lane/problem

A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. 
It varies in width along its length.
You will be given an array of widths at points along the road (indices), 
then a list of the indices of entry and exit points. 
Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

Find the subarrays for each case, push the minimum into an output array
return the output array

*/

const width = [2, 3, 1, 2, 3, 2, 3, 3];
const cases = [
	[0, 3],
	[4, 6],
	[6, 7],
	[3, 5],
	[0, 7],
];
// [1, 2, 3, 2, 1]

function serviceLane(width, cases) {
	let output = [];

	for (let i = 0; i < cases.length; i++) {
		let current = cases[i];
		output.push(Math.min(...width.slice(current[0], current[1] + 1)));
	}

	return output;
}

console.log(serviceLane(width, cases));
