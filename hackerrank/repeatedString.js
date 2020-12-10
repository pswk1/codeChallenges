/* 
divide the length n and the length of the str and ceil. 

*/

const s = 'a';
const n = 1000000000000;
// 4

function repeatedString(s, n) {
	let numOfRepeats = Math.ceil(n / s.length);
	let strChunk = s.repeat(numOfRepeats).substring(0, n);
	let aCount = 0;

	for (let i = 0; i < strChunk.length; i++) {
		if (strChunk[i] === 'a') aCount++;
	}
	return aCount;
}

console.log(repeatedString(s, n));
