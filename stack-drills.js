'use strict';

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
  while (current !== null) {
    results.push(stack.pop());
    current = stack.top;
  }

  return results;
};


// Check for palindromes using stack
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const palidromeStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    palidromeStack.push(s[i]);
  }
  let current = palidromeStack.top;
  let reverseStr = '';
  while (current) {
    reverseStr += palidromeStack.pop();
    current = palidromeStack.top;
  }
  return (reverseStr === s);
}














function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(peek(starTrek)); // Scotty
  // console.log(display(starTrek)); //[ 'Scotty', 'McCoy', 'Spock', 'Kirk' ]
  const tempStack = new Stack();
  tempStack.push(starTrek.pop());
  starTrek.pop();
  starTrek.push(tempStack.pop());
  console.log(display(starTrek)); // [ 'Scotty', 'Spock', 'Kirk' ]
  console.log(isPalindrome('dad')); //  true
  console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
  console.log(isPalindrome('1001')); // true
  console.log(isPalindrome('Tauhida')); // false
}

main();