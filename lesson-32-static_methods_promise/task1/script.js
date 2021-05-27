'use strict';
console.log('--- Static methods Promise in JavaScript. Task1. ---');
console.log('         ---------');

// asyncNum(asyncNum1, asyncNum2, ...)

/*
const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(4, 2000);
const asyncNum3 = getValueWithDelay(10, 3000);

const getSum = numbers =>
    numbers.reduce((acc, num) => acc + num, 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
      .then(numbers => getSum(numbers));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(result => console.log(result));
*/

/*
const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay(10, 3000);

const getSum = numbers =>
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
      .then(numbers => getSum(numbers));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(result => console.log(result));
*/

/*
// Promise.all(promises)
const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay(10, 3000);

const getSum = numbers =>
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
      .then(numbers => getSum(numbers))
      .catch(() => Promise.reject(new Error('Can\'t calculate.')));
};

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
    .then(result => console.log(result));
*/


// Promise.allSettled(promises)
const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay(10, 3000);

// const getSum = numbers =>
//     numbers
//         .filter(value => !isNaN(value))
//         .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.allSettled(asyncNumbers)
      .then(numbers => console.log(numbers));
};

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
    .then(result => console.log(result));