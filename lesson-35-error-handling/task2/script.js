'use strict';
console.log('--- Error handling in JavaScript. Task-2 ---');
console.log('              ---------');

/*
// const accessRequest = Promise.resolve({name: 'John'});
// accessRequest
//     .then(data => {
//       console.log(data);
//       throw new Error('Unexpected error');
//     })
// .catch(err => {
//   console.warn(err.message);
// });
*/

/*
const failedRequest = Promise.reject(new Error('Fail'));
failedRequest
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.warn(err.message);
      throw err;
      // return Promise.reject(err);
    })
    .then(data => {
      console.log(data);
    })
    // .catch(err => {
      // console.warn(err.message);
      // throw err;
      // return Promise.reject(err);
    // })

window.addEventListener('unhandledrejection', function(e) {
  console.log(e);
  // console.log(e.reason.message);
});
*/

// fetch('https://api.github.com/users/github')
fetch()
    .then(response => {
      debugger;
      if (response.status === 200) {
      return response.json();
      }
      throw new Error('No data');
    })
    .then(data => console.log(data))
    .catch(err => {
      debugger;
      console.log(err);
    })

