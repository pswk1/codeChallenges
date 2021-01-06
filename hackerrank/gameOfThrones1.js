/* 
https://www.hackerrank.com/challenges/game-of-thrones/problem

Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans to 
lock the single door through which the enemy can enter his kingdom.

But, to lock the door he needs a key that is an anagram of a palindrome. He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome. 
Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.

- a palindrome can have AT MOST one letter that has an odd number of occurrences. all other letters must occur
an even number of times.
- we will use a Map to store the number of ocurrences of each letter in the string. 
- We can then look at the Map's values to test the aforementioned condition.
*/

const str1 = 'aabbccdd';
// YES
const str2 = 'aaabbbb';
// YES
const str3 = 'cdefghmnopqrstuvw';
// NO
const str4 = 'cdcdcdcdeeeef';
// YES

function gameOfThrones(str) {
	let letterMap = new Map();

	for (const letter of str) {
		letterMap.set(letter, (letterMap.get(letter) || 0) + 1);
	}

	let oddOccurrenceCount = 0;

	for (const numOfOccurrences of letterMap.values()) {
		if (numOfOccurrences % 2 !== 0) oddOccurrenceCount++;
		if (oddOccurrenceCount > 1) {
			return 'NO';
		}
	}
	return 'YES';
}

console.log(gameOfThrones(str1));
console.log(gameOfThrones(str2));
console.log(gameOfThrones(str3));
console.log(gameOfThrones(str4));
