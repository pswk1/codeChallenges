/* 
Given a string, find out if its characters can be rearranged to form a palindrome.

Example:

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.


INPUT: string consisting of lowercase English letters
    - the string length will be between 1 and 50
    - output: boolean

*/

/* 
PALINDROME REQUIREMENTS

- at most ONE character occurs odd number of times and all characters occur even number of times
	- racecar => racecar
	- aaeeiioo => aeiooiea

Use a Map to traverse through string and set letter and the value as how many times it is occurred.
If the Map has 0 or 1 one odd number of occurrences, then the string is a palindrome.


*/

let inputString = 'aaaaaabbbbbbcccccceffffff';

function palindromeRearranging(inputString) {
	if (inputString.length === 1) return true;

	const letterMap = new Map();

	for (let letter of inputString) {
		if (!letterMap.has(letter)) {
			letterMap.set(letter, 1);
		} else {
			letterMap.set(letter, letterMap.get(letter) + 1);
		}
	}

	let oddOccurrences = 0;

	for (let value of letterMap.values()) {
		if (value % 2 === 1) oddOccurrences++;
	}

	return oddOccurrences <= 1;
}

console.log(palindromeRearranging(inputString));