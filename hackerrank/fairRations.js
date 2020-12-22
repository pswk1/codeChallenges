/* 
https://www.hackerrank.com/challenges/fair-rations/problem

You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread. 
Your subjects are in a line, and some of them already have some loaves. 
Times are hard and your castle's food stocks are dwindling, 
so you must distribute as few loaves as possible according to the following rules:

Every time you give a loaf of bread to some person i, you must also give a loaf of bread to the person immediately in front of or behind them in the line (i.e., persons i+1 or i-1 ).
After all the bread is distributed, each person must have an even number of loaves.
Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must distribute to satisfy the two rules above. If this is not possible, print NO.
*/

const B = [2, 3, 4, 5, 6];
//4

function fairRations(B) {
    let breadCount = 0;
    for (let i = 0; i < B.length - 1; i++) {
        let current = B[i];
        let next = B[i+1]
        if (current % 2 === 1) {
            current++;
            next++;
            breadCount += 2;
        }
        
        if(i === B.length - 2 && B[B.length - 1] % 2 === 1) {
            return "NO";
        }
    }
    
    return breadCount;
}

console.log(fairRations(B));