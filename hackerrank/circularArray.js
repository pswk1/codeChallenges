/* 
https://www.hackerrank.com/challenges/circular-array-rotation/problem

John Watson knows of an operation called a right circular rotation on an array of integers.
One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation 
a number of times then determine the value of the element at a given position.
For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

remove last element: pop();
add it to beginning: unshift()
*/

const a = [3, 4, 5];
const k = 2;
const queries = [1, 2];
//

function circularArrayRotation(a, k, queries) {
	let arr = a;
	let output = [];

	for (let i = 1; i <= k; i++) {
		arr.unshift(arr.pop());
	}

	for (let i = 0; i < queries.length; i++) {
		output.push(arr[queries[i]]);
	}
	return output;
}

console.log(circularArrayRotation(a, k, queries));
