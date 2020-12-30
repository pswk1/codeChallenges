/* 
https://www.hackerrank.com/challenges/gem-stones/problem?h_r=next-challenge&h_v=zen

There is a collection of rocks where each rock has various minerals embeded in it. 
Each type of mineral is designated by a lowercase letter in the range a-z. 
There may be multiple occurrences of a mineral in a rock. 
A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, 
display the number of types of gemstones in the collection.

- make a Set of each string that represents a rock.
- Create a Map to keep track of the number of occurrences of each mineral
- return the number of minerals that occur the same number of times as number of elements in the array 
*/

const arr = ['abcdde', 'baccd', 'eeabg'];
// 2
// only a and b occur in every rock

function gemstones(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = [...new Set(arr[i])];
	}

	let mineralMap = new Map();

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		for (let j = 0; j < current.length; j++) {
			if (!mineralMap.has(current[j])) {
				mineralMap.set(current[j], 1);
			} else {
				mineralMap.set(current[j], mineralMap.get(current[j]) + 1);
			}
		}
	}

	let gemCount = 0;
    const mineralCounts = [...mineralMap.values()];
    
	for (let i = 0; i < mineralCounts.length; i++) {
		if (mineralCounts[i] === arr.length) {
			gemCount++;
		}
	}
	return gemCount;
}

console.log(gemstones(arr));
