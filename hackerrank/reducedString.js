/* 
https://www.hackerrank.com/challenges/reduced-string/problem

Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
In each operation, select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string. 
If the final string is empty, return Empty String.


- split into array
- in a loop, keep track of current and next elements. If they're equal, remove them from the array
-  if the result's length is 2 and elements are equal, return Empty String
*/

const s1 = 'aa';
// Empty String

const s2 = 'baab';
// Empty String

const s3 = 'aaabccddd';
// abd

const s4 = 'ppffccmmssnnhhbbmmggxxaaooeeqqeennffzzaaeeyyaaggggeessvvssggbbccnnrrjjxxuuzzbbjjrruuaaccaaoommkkkkxx'
// Empty String

function superReducedString(s) {
	let arr = s.split('');

	for (let i = 0; i < arr.length - 1; i++) {
		let current = arr[i];
		let next = arr[i + 1];

		if (current === next) {
            arr.splice(i, 2);
            i = -1;
		}
	}
	const reducedString = arr.join('');

	if (reducedString.length === 0) {
        return 'Empty String'
    } else {
        return reducedString;
    }
}

const tests = {
	[`${s1}`]: superReducedString(s1),
	[`${s2}`]: superReducedString(s2),
	[`${s3}`]: superReducedString(s3),
	[`${s4}`]: superReducedString(s4),
};

console.table(tests);
