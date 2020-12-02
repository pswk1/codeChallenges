/* 
A string is said to be beautiful if each letter in the string appears at most as many times as the
previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.

Given a string, check whether it is beautiful.

input: string
output: boolean

Example

For inputString = "bbbaacdafe", 
the output should be isBeautifulString(inputString) = true.

This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), 
so since there aren't any letters that appear more frequently than the previous letter, 
this string qualifies as beautiful.

For inputString = "aabbb", 
the output should be isBeautifulString(inputString) = false.

Since there are more bs than as, 
this string is not beautiful.

For inputString = "bbc", 
the output should be isBeautifulString(inputString) = false.

Although there are more bs than cs, 
this string is not beautiful because there are no as, so therefore there are more bs than as.

*/

/* 
go through the string and check if each letter's previous letter exists in the string, except the letter 'a'.
If that condition is met, keep a Map of each letter's occurrences.
If the number of occurrences is monotically decreasing, return true, else false
*/

const str1 = 'bbbaacdafe';
// true
const str2 = 'aabbb';
// false
const str3 = 'bbc';
// false

function isBeautifulString(inputString) {
	let sorted = inputString.split('').sort();

	if (checkForPreviousLetters(sorted) === false) {
		return false;
	}

	let letterCounts = new Map();
	let current;

	for (let i = 0; i < sorted.length; i++) {
		current = sorted[i];
		if (letterCounts.has(current)) {
			letterCounts.set(current, letterCounts.get(current) + 1);
		} else {
			letterCounts.set(current, 1);
		}
	}
	const frequencies = [...letterCounts.values()];
	return checkIfMonotonicallyDecreasing(frequencies);
}

function checkForPreviousLetters(arr) {
	let current;
	for (let i = 0; i < arr.length; i++) {
		current = arr[i];
		if (current.charCodeAt() > 97) {
			if (!arr.includes(String.fromCharCode(current.charCodeAt() - 1)))
				return false;
		}
	}
	return true;
}

function checkIfMonotonicallyDecreasing(frequencies) {
	let current;
	let next;
	for (let i = 0; i < frequencies.length - 1; i++) {
		current = frequencies[i];
		next = frequencies[i + 1];
		if (next > current) return false;
	}
	return true;
}

console.log(isBeautifulString(str1));
console.log(isBeautifulString(str2));
console.log(isBeautifulString(str3));
