/* 
https://www.hackerrank.com/challenges/mars-exploration/problem?h_r=next-challenge&h_v=zen

Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
Given the signal received by Earth as a string, s, 
determine how many letters of the SOS message have been changed by radiation.
*/

const s = 'SOSSPSSQSSOR';
// 3

function marsExploration(s) {
    let messages = [];
    
	for (let i = 0; i < s.length; i += 3) {
		messages.push(s.substr(i, 3));
	}

	let altered = 0;

	for (let i = 0; i < messages.length; i++) {
		let current = messages[i];
		if (current[0] !== 'S') {
			altered++;
		}
		if (current[1] !== 'O') {
			altered++;
		}
		if (current[2] !== 'S') {
			altered++;
		}
	}
	return altered;
}

console.log(marsExploration(s));