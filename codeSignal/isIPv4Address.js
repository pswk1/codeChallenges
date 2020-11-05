/* 
Given a string, find out if it satisfies the IPv4 address naming rules.

IPv4 Address Rules
- a string of four numbers each between 0 and 255 inclusive, with a . character in between each number.
All numbers should be present without leading zeroes.

Steps:

Split the string on the period.
If there are any empty strings in the array, return false. (indicates a period is where it shouldn't be, not an IP address)
loop through the array and test if each number is valid (0 <= num <= 255)

*/

let inputString = "172.16.254.1"
// true
let faultyAddress = "172.316.254.1"
// false, 316 is greater than 255
let faultyAddress2 = ".254.255.0"
// false, there is no first number
let faultyAddress3 = "64.233.161.00"
// false, leading zeroes present

function isIPv4Address(inputString) {
    const inputArr = inputString.split('.');
    
    if (inputArr.length == 4) {
        return inputArr.every(isInRange);
    }
    return false;
    
}

function isInRange(num) {
    if (num >= 0 && num <= 255 && num != "" && !hasLeadingZeroes(num)) {
        return true;
    }
    return false;
}

const hasLeadingZeroes = num => num.length > 1 && num[0] == "0"

console.log(isIPv4Address(inputString));
console.log(isIPv4Address(faultyAddress));
console.log(isIPv4Address(faultyAddress2));
console.log(isIPv4Address(faultyAddress3));