/* 
https://edabit.com/challenge/Ff2iFMu3exGJ4StTc

Given three arrays of integers: arr1, arr2, arr3, 
return the sum of integers which are common in all three arrays.
*/

const arr1 = [1, 2, 3]
const arr2 = [5, 3, 2]
const arr3 = [7, 3, 2]
// 5

function sumCommon(arr1, arr2, arr3) {
	const commons = arr1.filter(num => arr2.includes(num) && arr3.includes(num));
	
	return commons.reduce((a,b) => a+b, 0);
}

console.log(sumCommon(arr1, arr2, arr3));