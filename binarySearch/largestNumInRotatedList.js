/* 
https://binarysearch.com/problems/Find-the-Largest-Number-in-a-Rotated-List

You are given a list of unique integers nums that is sorted in ascending order and is rotated at some pivot point. Find the maximum number in the rotated list.

Constraints
n ≤ 100,000 where n is the length of nums.
*/

const test1 = [6, 7, 8, 1, 4];
// 8
// The original sorted array of [1, 4, 6, 7, 8] was rotated at index 2 and results in the input array [6, 7, 8, 1, 4,]. And the largest number is 8.
const test2 = [1, 2, 3];
// 3
const test3 = [1];
// 1
const test4 = [10, 1, 2, 3, 4, 7];
// 10

const solve = (arr) => {
    if (arr.length === 1) return arr[0];

    let max = -Infinity;
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        if (arr[start] > max) {
            max = arr[start]
        }

        if (arr[end] > max) {
            max = arr[end]
        }

        start++;
        end--;
    }
    return max;
}

console.log({
    test1: solve(test1),
    test2: solve(test2),
    test3: solve(test3),
    test4: solve(test4),
})