/* 
https://binarysearch.com/problems/Unique-Occurrences

Given a list of integers nums, return whether the number of occurrences of every value in the array is unique.

Note: Numbers can be negative.

Constraints:
0 ≤ n ≤ 100,000 where n is the length of nums

Approach:
1. Keep track of the number of occurrences of each number
    - loop through the numbers and store the numbers and their occurrences in a hashmap
    - I typically use a JS Map for this
2. determine whether each occurrence is unique
    - access the Map's values() and determine whether each is unique
        - loop through the values
        - another way is to create a Set of the numbers and compare that Set size to the length  of the values
*/

const test1 = [5, 3, 1, 8, 3, 1, 1, 8, 8, 8];
// true
// There's 1 occurrence of 5, 2 occurrences of 3, 3 occurrences of 1, and 4 occurrences of 8. All number of occurrences are unique.
const test2 = [-3, -1, -1, -1, -2, -2];
// true
// There's 1 occurrence of -3, 2 occurrences of -2, and 3 occurrences of -1. All number of occurrences are unique.
const test3 = [3, 1, 1, 2, 2, 2, 3];
// false
// There are 2 occurrences of 1, and 2 occurrences of 3. So the number of occurrences here is not unique.

const solve = (nums) => {
    if (nums.length === 0) return true;

    let freqs = new Map();

    for (const num of nums) {
        freqs.set(num, (freqs.get(num) || 0) + 1)
    }

   const sorted = [...freqs.values()].sort((a, b) => a - b);

   for (let i = 0; i < sorted.length - 1; i++) {
       if (sorted[i] === sorted[i + 1]) {
           return false;
       }
   }
   return true;
};

console.log({
    test1: solve(test1),
    test2: solve(test2),
    test3: solve(test3),
})