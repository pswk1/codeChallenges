let arr1 = [1, 2, 3, 4, 5];
let d = 4;

// output [5, 1, 2, 3, 4]

function rotLeft(arr, d) {
    for (let i = 1; i <= d; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

console.log(rotLeft(arr1, d))