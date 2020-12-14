/* 
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

Example

For text = "Ready, steady, go!", the output should be
longestWord(text) = "steady".
*/

// const text = 'Ready[[[, steady, go!';
// steady

// const text = "A!! AA[]z"
// AA

// const text = "ab-CDE-fg_hi"
// CDE

// const text = "You are the best!!!!!!!!!!!! CodeFighter ever!"
// CodeFighter

function longestWord(text) {
	let arr = text.split(' ');

	if (text.includes('-')) {
		arr = text.split('-');
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(',')) {
			arr[i] = arr[i].substring(0, arr[i].indexOf(','));
		}
	}

	for (let i = 0; i < arr.length; i++) {
		if (!/[^a-zA-Z]/.test(arr[i]) == false) {
			arr.splice(i, 1);
		}
	}

	let longest = 0;
	let result;

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		if (current.length > longest) {
			longest = current.length;
			result = current;
		}
	}

	for (let i = 0; i < result.length; i++) {
		if (
			(result.charCodeAt(i) < 65 || result.charCodeAt(i) > 90) &&
			(result.charCodeAt(i) < 97 || result.charCodeAt(i) > 122)
		) {
			result = result.substring(0, i);
		}
	}
	return result;
}

console.log(longestWord(text));
