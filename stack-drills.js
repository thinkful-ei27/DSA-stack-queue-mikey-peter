const Stack = require('./stack');

const starTrek = new Stack();

const peek = stack => {
  return stack.top.data;
}; 

const display = stack => {
  const results = [];
  let current = stack.top;
  if (stack.top === null) {
    return 'The list is empty';
  }
  while (current.next !== null) {
    results.push(current.data);
    current = current.next;
  }
  results.push(current.data);
  return results;
};


// Check for palindromes using stack
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const tempStack = new Stack();

}














function main () {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(peek(starTrek)); // Scotty
  console.log(display(starTrek)); //[ 'Scotty', 'McCoy', 'Spock', 'Kirk' ]
  const tempStack = new Stack();
  tempStack.push(starTrek.pop());
  starTrek.pop();
  starTrek.push(tempStack.pop());
  console.log(display(starTrek)); // [ 'Scotty', 'Spock', 'Kirk' ]
}

main();