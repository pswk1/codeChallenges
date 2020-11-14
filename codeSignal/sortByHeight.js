/* 
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/


let arr = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(arr) {
    let sortedHeights = Array(arr.length);
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === -1) sortedHeights.splice(i, 1, -1);     
    }
    
    let humans = arr.filter(elem => elem !== -1).sort((a,b) => a-b);
    
    for (let i=0; i<sortedHeights.length; i++) {
        if (sortedHeights[i] !== -1) sortedHeights.splice(i, 1, humans.shift());
    }

    return sortedHeights;
}

console.log(sortByHeight(arr));

