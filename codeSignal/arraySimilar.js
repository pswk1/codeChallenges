let a = [2, 3, 1];
let b = [1, 3, 2];

function areSimilar(a, b) {
    if(a.toString() === b.toString()) {
        return true;
    }
    
    let toCompare1 = [];
    // [2, 1]
    let toCompare2 = [];
    // [1, 2]
    
    for (let i=0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            toCompare1.push(a[i]);
            toCompare2.push(b[i]);
        }
    }
    
    toCompare2 = toCompare2.reverse();
    
    if (toCompare1.length === 2 && (toCompare1.toString() === toCompare2.toString())) {
        return true;
    }
    return false;
}

console.log(areSimilar(a, b));
