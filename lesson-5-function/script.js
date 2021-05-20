console.log("Hello function.");
console.log('------------');

console.log('--- Simple function ---');

function getSum(a, b) {
  console.log(a + b);
}

getSum(3, 2);

console.log('------------');

console.log("--- function arguments ---");
const name = "Serg";
const prefix = 'Hi, ';

function sayHi(name, anotherName = 'anonimus') {
  // console.log(arguments);
  const greeting = prefix + name + ' and ' + anotherName + '!';
  console.log(greeting);
}

sayHi(name);
sayHi();
sayHi("Ann", "Bob");

console.log('------------');

console.log('--- return statement ---');

function getEvenOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
  console.log('Hello');
}

const result1 = getEvenOdd(20);
const result2 = getEvenOdd(21);
console.log('Result-1: ' + result1);
console.log('Result-2: ' + result2);

console.log('------------');
console.log('--- function declaration ---');

function getSum(a, b) {
  return (a + b);
}

const result3 = getSum(20, 5);
console.log('Result-sum1: ' + result3);

console.log('------------');

console.log('--- function expression ---');
const getSum1 = function (a, b) {
  return (a + b);
}
const result4 = getSum1(20, 5);
console.log('Result-sum2: ' + result4);
console.log('------------');

console.log('--- arrow function ---');

function getSquare(num) {
  return (num * num);
}

const resultSquare = getSquare(5);
console.log('Result getSquare: ' + resultSquare);
/*
const getSquareArrow = (num) => {
  return (num * num);
}
 */
const getSquareArrow = num => num * num;

const resultSquareArrow = getSquareArrow(5);
console.log('Result getSquareArrow: ' + resultSquareArrow);

console.log('------------');


