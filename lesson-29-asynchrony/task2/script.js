'use strict';
console.log('--- Async/Await in JavaScript. Task-2. ---');
console.log('              ---------');

console.log("Async/await");

// pinger(num, period)

/*
const pinger = (num, period) => {
  const interval =  setInterval(() => {
    console.log('Ping');
  }, period);

  setTimeout(() => {
    clearInterval(interval);
  }, num * period);

  console.log(interval);
};

pinger(5, 1000);
*/

const pinger = (num, period) => {
  let i = num;
  console.log('Ping');
  const interval =  setInterval(() => {
    if (--i > 0) {
    console.log('Ping');
    } else clearInterval(interval);
  }, period);

  console.log(interval);
};

pinger(5, 1000);
