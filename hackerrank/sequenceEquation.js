/* 
Sequence Equation
https://www.hackerrank.com/challenges/permutation-equation/problem

Input: array
output: array

Sample:

Input: p = [4, 3, 5, 1, 2]
Output: [1, 3, 5, 4, 2]

1 is at p(4)                    
4 is at p(1)       
1

2 is at p(5)
5 is at p(3)
3
 
3 is at p(2)
2 is at p(5)
5

4 is at p(1)
1 is at p(4)
4

5 is at p(3)
3 is at p(2)
2
*/

const p = [4, 3, 5, 1, 2];

function permutationEquation(p) {
    let output = [];
    let currentPosition;
    let yValue;

    for (let x = 1; x <= p.length; x++) {
        currentPosition = p.indexOf(x) + 1;
        yValue = p.indexOf(currentPosition) + 1;
        output.push(yValue);
    }
    return output;
}

console.log(permutationEquation(p))