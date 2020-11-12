/* 
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

Example
For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.

input: positive even integer
output: positive integer

O(1) Time Complexity
In the circle, find the radially opposite position from 0. 
    - Since we are considering from 0 to n-1, 0 represents n in the circle.
    - if firstNum is smaller or equal to (aka comes before) the halfway point, 
        - We can add firstNum to the halfway point to get firstNum's ROP.
    - if it is greater than the halfway point, 
        - we can subtract the halfway point from firstNum.
    - if it is equal to the halfway point, 
        - then we are looking at 0 as opposite of firstNum
*/


function circleOfNumbers(n, firstNum) {
    const halfway = n / 2;
    if (firstNum >= halfway) return firstNum - halfway; 
    if (firstNum < halfway) return firstNum + halfway;
}

// const circleOfNumbers = (n, firstNum) => firstNum >= n / 2 ? firstNum - n / 2 : firstNum + n / 2

console.log(circleOfNumbers(10, 2));
// 7
console.log(circleOfNumbers(6, 3));
// 0
console.log(circleOfNumbers(12, 10))
// 4