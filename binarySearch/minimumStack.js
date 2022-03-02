/* 
https://binarysearch.com/problems/Minimum-Stack

Minimum Stack
Implement a stack with the following methods:

MinimumStack() constructs a new instance of a minimum stack
append(int val) appends val to the stack
peek() retrieves the last element in the stack
min() retrieves the minimum value in the stack
pop() pops and returns the last element in the stack
*/

class MinimumStack {
    constructor() {
        this.stack = [];
    }

    append(val) {
        this.stack.push(val);
    }

    peek() {
        let lastIdx = this.stack.length - 1;
        return this.stack[lastIdx];
    }

    min() {
        return Math.min(...this.stack);
    }

    pop() {
        return this.stack.pop();
    }
}

let newStack = new MinimumStack;
newStack.append(0);
newStack.append(1);
console.log(newStack.stack);
// [0, 1]
newStack.append(2);
console.log(newStack.min());
// 0
console.log(newStack.pop());
// 2
console.log(newStack.peek());
// 1
