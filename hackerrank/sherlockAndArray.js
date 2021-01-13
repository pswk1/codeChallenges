/* 
Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left 
is equal to the sum of all elements to the right.

If there is, return YES, else NO


- loop from second index to second to last
- keep track of sums. if a balanced sum is found, return YES

*/

const arr1 = [5, 6, 8, 11];
/* 
total = 30
5 = 30 - 5? no
11 = 30 - 11? 
19 = 30 -19? no
30 = 3


*/
// YES

const arr2 = [1, 2, 3];
// NO

const arr3 = [1, 2, 3, 3];
// YES

function balancedSums(arr) {
	if (arr.length === 1) return 'YES';

	let leftSum = 0;
	let current = arr[0];
	let rightSum = arr.slice(1).reduce((a, b) => a + b);

	if (leftSum === rightSum) return 'YES';

	for (let i = 1; i < arr.length; i++) {
		leftSum += current;
		current = arr[i];
		rightSum -= current;

		if (leftSum === rightSum) return 'YES';
	}

	return 'NO';
}

console.log(balancedSums(arr1));
console.log(balancedSums(arr2));
console.log(balancedSums(arr3));
