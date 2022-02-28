/* 
https://binarysearch.com/problems/Palindromic-Anagram

Given a string s, determine whether any anagram of s is a palindrome.

Constraints:
n ≤ 100,000 where n is the length of s

Approach:
PALINDROME REQUIREMENTS
- at most ONE character occurs odd number of times and all characters occur even number of times
	- racecar => racecar
	- aaeeiioo => aeiooiea

Use a Map to traverse through string and set letter and the value as its frequency in the string.
If the Map has 0 or 1 one odd number of occurrences, then the string is a palindrome.

input: string
output: Boolean

*/

const test1 = 'carrace';
// true
// "carrace" should return true, since it can be rearranged to form "racecar", which is a palindrome.
const test2 = 'aaeeiioo';
// true

const solve = (inputString) => {
    if (inputString.length === 1) return true;

    const letterMap = new Map();

    for (const letter of inputString) {
        letterMap.set(letter, (letterMap.get(letter) || 0) + 1)
    }

    let oddOccurrences = 0;

    for (const value of letterMap.values()) {
        if (value % 2 === 1) oddOccurrences++;
    }

    return oddOccurrences <= 1;
}

console.log({
    test1: solve(test1),
    test2: solve(test2)
})