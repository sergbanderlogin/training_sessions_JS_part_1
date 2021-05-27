'use strict';
console.log('--- JavaScript. async/await. Task-1 ---');
console.log('              ---------');

async function func() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(17)
    }, 1000);
  })
  const result = await promise;
  console.log(result);
  return 1;
}

const result = func();
console.log("Hi!");