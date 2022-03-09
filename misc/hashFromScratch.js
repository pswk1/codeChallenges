/* 
implement a hash map from scratch

example: take a string and store each element and how many times it occurs in the string
*/

let test = 'aabbbacdcd'
let test2 = [1, 'a', 'b', 6];
// input can be anything iterable
// if we want to store a key that's not a string, we can utilize JS Map()
// a: 3, b: 3, c: 2, d: 2

const hash = (input) => {
    let hash = {};

    for (const char of input) {
        let type = typeof char;
        // if char is a number, type will be stored as a number, but will converted into a string
        // if we want to keep the non-string type, use a Map.
        if (!hash[char]) {
            hash[char] = { type, freq : 1 };
        } else {
            hash[char] = { type, freq : hash[char].freq + 1 }
        }
    }
    return hash;
}

console.log(hash(test));
console.log(hash(test2));