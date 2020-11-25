/* 
Given a string, find the number of different characters in it.

Example

For s = "cabca", the output should be
differentSymbolsNaive(s) = 3.

There are 3 different characters a, b and c.

Solving Methods:

1) Convert the string into a Set and return the size property. O(1) 
2) Store the distinct characters in an object and return the number of keys. O(n)
    - Since all of our keys will be strings and the order of insertion does not matter, we can use an object over a Map.
*/

const str = 'cabca';
// 3

// Method 1:
const differentSymbolsSet = (s) => new Set(str).size;

// Method 2:
function differentSymbolsObject(str) {
	let diffCharMap = {};
	let current;

	for (let i = 0; i < str.length; i++) {
		current = str[i];
		if (!diffCharMap[current]) {
			diffCharMap[current] = 1;
		} else {
			continue;
		}
	}
	return Object.keys(diffCharMap).length;
}

console.log(`${str} has ${differentSymbolsSet(str)} different characters`);
console.log(`${str} has ${differentSymbolsObject(str)} different characters`);
