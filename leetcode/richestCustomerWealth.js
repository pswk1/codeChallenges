/* 
https://leetcode.com/problems/richest-customer-wealth/
*/

const accounts = [[2,8,7],[7,1,3],[1,9,5]];
// 17

// function maximumWealth(accounts) {
// 	let max = 0;

// 	for (let i = 0; i < accounts.length; i++) {
// 		let account = accounts[i];

// 		let sum = account.reduce((a, b) => a + b);
// 		if (sum > max) {
// 			max = sum;
// 		}
// 	}

// 	return max;
// }

function maximumWealth(accounts) {
	let max = 0;

	for (let account of accounts) {
        let sum = account.reduce((a,b) => a + b);
        if (sum > max) max = sum;
    }

	return max;
}

console.log(maximumWealth(accounts));