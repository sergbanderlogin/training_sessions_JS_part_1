'use strict';
console.log('--- Promise in JavaScript. Task3. ---');
console.log('         ---------');

// asyncCalculator
const asyncCalculator = num => new Promise((resolve) => {
  setTimeout(() => {
    console.log(`Initial value: ${num}`);
    resolve(num);
  }, 1000);
})
    .then(value => new Promise((resolve) => {
      setTimeout(() => {
        const result = value * value;
        console.log(`Squared value: ${result}`);
        resolve(result);
      }, 1000);
    }))
    .then(value => {
      const result = value * 2;
      console.log(`Double value: ${result}`);
      return result;
    });

asyncCalculator(4)
    .then(value => console.log(value));

