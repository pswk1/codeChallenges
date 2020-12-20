// Hackerrank Staircase
// =====================================================================================================

function staircase(n) {
    let stairs = Array(n).fill(' ');
  
    while (stairs.indexOf(' ') !== -1) {
      stairs.shift();
      stairs.push('#');
      console.log(stairs.join(' '));
      n--;
    }
  }
  
  staircase(5);