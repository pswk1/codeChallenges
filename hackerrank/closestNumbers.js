/* 
https://www.hackerrank.com/challenges/closest-numbers/problem

Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.
*/

/* 
sort array
create Map to keep track of all differences,
    - key is the difference, value is storage of pairs that have that difference
if a difference is seen more than once in the array, add the pair to the existing pairs
find the smallest difference among the keys and return its value
*/

const arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];
// -20, 30 have the smallest absolute difference in this array

// const arr = [5, 4, 3, 2];
// 2, 3, 3, 4, 4, 5

function closestNumbers(arr) {
    const sorted = arr.sort((a, b) => a - b);
    let diffs = new Map();

    for (let i = 0; i < sorted.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];

        let difference = Math.abs(current - next);

        if (!diffs.has(difference)) {
            diffs.set(difference, [current, next]);
        } 
        else {
            diffs.set(difference, diffs.get(difference).concat([current, next]));
        }
    }

    const minDiff = Math.min(...diffs.keys())
    return diffs.get(minDiff);
}

console.log(closestNumbers(arr));
