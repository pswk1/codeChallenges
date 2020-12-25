/* 
https://www.hackerrank.com/challenges/caesar-cipher-1/problem

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

- use ascii codes to determine the appropriate letter.
*/

const s = `There's-a-starman-waiting-in-the-sky`;
const k = 3;
// Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb

// const s = 'www.abc.xy';
// const k = 87;
// fff.jkl.gh

function caesarCipher(str, k) {
	let encrypted = '';

	for (let i = 0; i < str.length; i++) {
		let current = str[i];

		if (current.match(/[a-z]/i)) {
			let charCode = str.charCodeAt(i);

			if (charCode >= 65 && charCode <= 90) {
				// if rotated code goes beyond z or Z, mod by 26 will keep code within ascii range.
				current = String.fromCharCode(((charCode - 65 + k) % 26) + 65);
			} else if (charCode >= 97 && charCode <= 122) {
				current = String.fromCharCode(((charCode - 97 + k) % 26) + 97);
			}
		}
		encrypted += current;
	}
	return encrypted;
}

console.log(caesarCipher(s, k));
