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

function checkParentheses(str) {
  // (( )))) ((

  //  Finding closed parens w/o matching open, report location of )

  // expression finishes without close, repot location of open;

  let exStack = new Stack();
  for (let i = str.length; i > 0; i--) {
    exStack.push([str[i], i]);
  }
  let counter = 1;
  let charArray;
  let lastOpen;

  while (exStack.top !== null) {
    console.log(counter);
    charArray = exStack.pop();
    if (charArray[0] === '(') {
      counter++;
      lastOpen = (charArray[1] + 1);
    }
    if (charArray[0] === ')') {
      counter--;
    }
    if (counter < 0) {
      return `) without an ( at position: ${charArray[1] + 1}`;
    }
  }
  if (counter > 0) {
    return `( without an ) at position: ${lastOpen}`;    
  }
  return 'Alll good';
}

// Sort Stack
const sortStack = stack => {
  // Check to see if stack is empty
  // if (stack.top === null) {
  //   return 'The stack is empty';
  // }
  // console.log(stack);
  
  const tempStack = new Stack();
  let temp = stack.top;
  while (stack.top !== null) {
    // // Check to see if stack has one item
    // if (stack.pop() && !(peek(stack))) {
    //   return stack;
    // }
    tempStack.push(temp);
    temp = stack.pop();
    if (peek(tempStack) > temp) {
      stack.push(tempStack.pop());
      tempStack.push(temp);
      temp = stack.top;
    } else {
      tempStack.push(temp);
      temp = stack.top;
    }
  }
  // while(tempStack.top !== null) {
  //   stack.push(tempStack.pop());
  // }
  // return stack;
  return tempStack;
};









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
  // console.log(display(starTrek)); // [ 'Scotty', 'Spock', 'Kirk' ]
  // console.log(isPalindrome('dad')); //  true
  // console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
  // console.log(isPalindrome('1001')); // true
  // console.log(isPalindrome('Tauhida')); // false
  // console.log('1st =========', checkParentheses('((())((('));
  // console.log('2nd =========', checkParentheses('((()))'));
  // console.log('3rd =========', checkParentheses('((())('));
  // console.log('4th =========', checkParentheses('))(('));
  const numStack = new Stack();
  numStack.push(3);
  numStack.push(5);
  numStack.push(2);
  numStack.push(6);
  // console.log('display before sort ==========', display(numStack));
  // sortStack(numStack);
  // console.log('display after sort ==========', display(numStack));
}

main();