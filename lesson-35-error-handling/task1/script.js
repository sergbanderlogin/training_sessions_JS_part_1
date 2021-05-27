'use strict';
console.log('--- Error handling in JavaScript. Task-1 ---');
console.log('              ---------');

/*
try {
const jsonString = '{"name": "John"';
const userData = JSON.parse(jsonString);
console.log(userData);
} catch(err) {
console.error(err.name);
} finally {
  console.log('Some actions');
}

// console.log('I am alive');
*/

window.addEventListener('error', function onUnhandledError(e) {
  console.log(e);
});

try {
  const jsonString = '{"name": "John"';
  throw new ReferenceError();
  const userData = JSON.parse(jsonString);
  console.log(userData);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error('Handler');
  } else {
    throw err;
  }
} finally {
  console.log('Some actions');
}


