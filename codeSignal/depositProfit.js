/* 
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. 
With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.

Example

For deposit = 100, rate = 20, and threshold = 170, the output should be
depositProfit(deposit, rate, threshold) = 3.
*/

let deposit = 100;
const rate = 20;
const threshold = 170;
// 3

function depositProfit(deposit, rate, threshold) {
    const ratePercent = rate / 100;
    let years = 0;
    
   while (deposit < threshold) {
       deposit += deposit * ratePercent
       years++;
   }
   return years;
}

console.log(depositProfit(deposit, rate, threshold));

/* 
while the deposit is less than the threshold, do two things: 
increment a year variable
multiply the amount by the rate until it reaches the threshold

100 
20 
170
*/