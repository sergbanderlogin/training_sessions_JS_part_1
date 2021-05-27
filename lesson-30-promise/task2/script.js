'use strict';
console.log('--- Promise in JavaScript. Task2. ---');
console.log('         ---------');

// requestUserData

const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found.'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}`,
          userId,
        });
      }, 1000);
    }
  });
  return request;
};

// requestUserData('broken')
//     .catch(error => console.log(error));

// requestUserData('broken-1')
//     .finally(() => console.log('finally'));

requestUserData('broken-1')
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('finally'));

requestUserData('user-1')
    .then(data => console.log(data));