/* 

*/

// let queryType = ["insert", "get", "addToValue", "insert", "addToKey", "get"]
// let query = [[1, 2], [1], [2], [2, 3], [2], [4]]

let queryType = ["insert", "get"]
let query = [[1, 2], [1]]

/* 
Output: 4

query1: {1 : 2}
query2: get the value with key 1. This is 2. We will add it to the sum.
- sum : 1

query3: {1 : 3} (add 2 to all values)
query4: {1 : 3} , {2 : 3} (insert [2,3])
query5: {3 : 3}, {4 : 3} (add 2 to all keys)
query6: get the value with key 4. This is 3. We will add it to the sum.
- sum: 1 + 3 = 4

Output: 4
*/

function hashMap(queryType, query) {    
    let map = new Map()
    let currType;
    let currQuery;
    let sum = 0;

    for (let i=0; i<queryType.length; i++) {
        currType = queryType[i];
        currQuery = query[i];

        if (currType === "insert") {
            map.set(currQuery[0], currQuery[1]);
        }

        if (currType = "get") {
            console.log(map.get(currQuery[0]))
            sum += map.get(currQuery[0])
        }
    }
    console.log(sum);
    // for (let i=0; i<queryType; i++) {
    //     currType = queryType[i];
    //     currQuery = query[i];
        
    // }

    // for (let i=0; i<queryType; i++) {
    //     currType = queryType[i];
    //     currQuery = query[i];
        
    // }

    // for (let i=0; i<queryType; i++) {
    //     currType = queryType[i];
    //     currQuery = query[i];
        
    // }
}

hashMap(queryType, query);