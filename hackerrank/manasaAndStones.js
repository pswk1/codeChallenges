/* 
https://www.hackerrank.com/challenges/manasa-and-stones/problem?h_r=next-challenge&h_v=zen

Manasa is out on a hike with friends. She finds a trail of stones with numbers on them. 
She starts following the trail and notices that any two consecutive stones' numbers differ by one of two values. Legend has it that there is a treasure trove at the end of the trail. 
If Manasa can guess the value of the last stone, the treasure will be hers.

Compute all possible numbers that might occur on the last stone given a starting stone with a 0 on it,
a number of additional stones found, and the possible differences between consecutive stones. 
Order the list ascending.

example:
const n = 4;
const a = 10;
const b = 100;
// 30 120 210 300

Explanation:
0 10 20 30
0 10 20 120 
0 10 110 120 
0 10 110 210
0 100 110 120 
0 100 110 210
0 100 110 210
0 100 200 300

30 120 210 300
*/

/* 
Permutations
0 + a(n-1) // 30
0 + a(n-2) + b // 120
0 + a(n-3) + 2b // 210

0 + b(n-1) // 300;
0 + b(n-2) + a // 210
0 + b(n-3) + 2a // 120;
*/

/*
Method:
- loop from 0 to n-1
- beginning is 0 + a(n-1)
    - push (0 + a(n-i) + (i-1)b) starting from i=2 up to i=n-1
- end is 0 + b(n-1)
*/

const n = 4;
const a = 10;
const b = 100;
// 30 120 210 300

function stones(n, a, b) {
    let output = [];
    
	// first stone
	output.push(0 + a * (n - 1));

	// Permutations
	for (let i = 2; i < n; i++) {
		output.push(0 + a * (n - i) + (i - 1) * b);
	}

	for (let i = 2; i < n; i++) {
		output.push(0 + b * (n - i) + (i - 1) * a);
	}

	// last stone
	output.push(0 + b * (n - 1));

    // Sort stones and remove repeats
    const sorted = output.sort((a, b) => a - b)
	output = [...new Set(sorted)];
	return output;
}

console.log(stones(n, a, b));
