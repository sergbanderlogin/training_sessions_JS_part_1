'use strict';
console.log('--- Functions. Розбираємося з областю видимості на прикладах. пишемо лічильник.  ---');
console.log('---------');
// counter

const makeCounter = () => {
  let count = 0;

  return function() {
    return count++;
  }
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 0
console.log(counter2()); // 1
console.log('---------');
// Message
const message = 'Have a good day!';

function sendMessage(name) {
  
  let greeting = "Hi!";

  if(name) {
    console.log(greeting + name);
  } else {
    console.log(message);
  }
};

sendMessage();
console.log('---------');
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);
console.log('---------');

