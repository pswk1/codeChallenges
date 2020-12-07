/* 
A media access control address (MAC address) is a unique identifier assigned to network interfaces for 
communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is 
six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
Example: 

For inputString = "00-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = true;

For inputString = "Z1-1B-63-84-45-E6", the output should be
isMAC48Address(inputString) = false;

Criteria:
six groups of two hexadecimal digits (0 to 9 or A to F)
string length must be 17 // (6 x 2 groups) + 5 dashes
every third element must be a dash
Every character of each group must be between 0 and 9 or A and F
every third character must be a dash
*/

const inputString1 = '00-1B-63-84-45-E6';
// true

const inputString2 = 'Z1-1B-63-84-45-E6';
// false;

function isMAC48Address(inputString) {
	let isValidAddress = false;

	if (inputString.length === 17) {
		let isInvalidCharacter = false;

		for (let i = 0; i < inputString.length; i++) {
			if ((i + 1) % 3 === 0) {
				if (inputString[i] !== '-') {
					isInvalidCharacter = true;
				}
			} else {
				let code = inputString[i].charCodeAt();
				if ((code < 65 || code > 70) && (code < 48 || code > 57)) {
					isInvalidCharacter = true;
				}
			}
		}
		if (!isInvalidCharacter) {
			isValidAddress = true;
		}
	}
	return isValidAddress;
}

console.log(isMAC48Address(inputString1));
console.log(isMAC48Address(inputString2));
