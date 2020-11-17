/* 
You will be given two arrays of integers and asked to determine 
all integers that satisfy the following two conditions:

- The elements of the first array are all factors of the integer being considered
- The integer being considered is a factor of all elements of the second array


[2, 6]
[24, 36]

36
2 6 




Sample Input: 
const a = [2, 4]
const b = [16, 32, 96]

Output:
3

Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of 
a is a factor and each is a factor of all elements of b.

Notes:
The factors to be considered must be between the highest number of the first array
and the lowest number of the second array.



*/
 
const a = [2, 4];
const b = [16, 32, 96];
// 3

function getTotalX(a, b) {
    
    const lowerBound = a[a.length-1];
    const upperBound = b[0];

    let toBeConsidered = [];

    for (let i=lowerBound; i<= upperBound; i+= lowerBound) {
        toBeConsidered.push(i);
    }

    let firstArrayCheck = toBeConsidered.filter(num => a.every(value => num % value === 0));
    let bothArrayCheck = firstArrayCheck.filter(num => b.every(value => value % num === 0));

    return bothArrayCheck.length;
}

console.log(getTotalX(a,b));