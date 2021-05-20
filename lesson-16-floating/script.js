'use strict';
console.log('--- Floating variables in JavaScript. How not to shoot yourself in the foot.  ---');
console.log('---------');
var a = 17;

if (a) {
  var a = 1;
  console.log(a); // 1
}

console.log(a);  // 1

console.log('---------');
let b = 17;

if (b) {
  let b = 1;
  console.log(b); // 1
}

console.log(b);  // 17

console.log('---------');
var greeting = 'Hello!';

function sayHi() {
  greeting = 'Hi!';
  console.log(greeting); // 'Hi!'

  if (false) {
    var greeting;
  }
}

sayHi();
console.log(greeting)  // 'Hello!'

console.log('---------');
console.log('--- масив функцій ---');

var arr = [];

for (var i = 0; i < 10; i++) {
  arr[i] = function() {
    return i;
  }
}

console.log(arr[0]());
console.log(arr);
console.log('---------');
