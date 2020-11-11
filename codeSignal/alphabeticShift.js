/* 

Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

*/

const inputString = "crazy";
// "dsbaz"

function alphabeticShift(inputString) {
    let outputString = ''
    let letter;
    
    for (let i=0; i<inputString.length; i++) {
        letter = inputString[i];
        if (letter === 'z') {
            outputString += 'a'
        } else {
           outputString += String.fromCharCode(letter.charCodeAt() + 1) 
        }
    }
    return outputString;
}

console.log(alphabeticShift(inputString));