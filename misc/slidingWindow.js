/*
Given a large array of integers and a window of size w, find the current maximum value in the window as the window slides through the entire array.

initialize a results array
as we slide/loop through the array through the window,
push the current max into the results array and return it

stop at arr.length - k

To consider:
What if length of array and/or window size is small?
*/

const k = 3;
const test1 = [-4, 2, -5, 3, 6];
const test2 = [1,3,-1,-3,5,3,6,7];
const test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test4 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];

function findMaxSlidingWindow(arr, k) {
    let maxes = [];
    for (let i = 0; i <= arr.length - k; i++) {
        let window = arr.slice(i, k + i);
        maxes.push(Math.max(...window));
    }
    return maxes;
}

console.log({ 
    test1: findMaxSlidingWindow(test1, k), 
    test2: findMaxSlidingWindow(test2, k),
    test3: findMaxSlidingWindow(test3, k),
    test4: findMaxSlidingWindow(test4, k),
});