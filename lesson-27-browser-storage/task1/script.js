'use strict';
console.log('--- Browser Storage in JavaScript. sessionStorage and localStorage. ---');
console.log('=== Task-1 ===');
console.log('---------');
console.log('getLocalStorageData');

/*
localStorage.clear();
localStorage.setItem('name', 'John');
localStorage.setItem('name');
*/

/*
localStorage.clear();
localStorage.setItem('hobbies1', [1, 2, 3, 4]);
localStorage.setItem('hobbies2', {name: 'John'});

console.log(localStorage.getItem('hobbies1'));
console.log(localStorage.getItem('hobbies2'));localStorage.clear();
*/

/*
localStorage.setItem('hobbies1', [1, 2, 3, 4]);
localStorage.setItem('hobbies2', JSON.stringify({name: 'John'}));

console.log(localStorage.getItem('hobbies1'));
console.log(localStorage.getItem('hobbies2'));
*/

/*
const user = {
  name: 'John',
  age: 18,
  isStudent: false,
  driverLicense: null,
  hobbies: ['football', 'diving',],
  education: [{
    name: 'MIT Precourse',
    graduateDate: '2021-22-05T14:48:45.1057',
  }]
};
// JSON.stringify(user)
// "{\"name\":\"John\",\"age\":18,\"isStudent\":false,\"driverLicense\":null,\"hobbies\":[\"football\",\"diving\"],\"education\":[{\"name\":\"MIT Precourse\",\"graduateDate\":\"2021-22-05T14:48:45.1057\"}]}"
*/


localStorage.clear();
localStorage.setItem('hobbies', JSON.stringify({name: 'John'}));
localStorage.setItem('name', JSON.stringify('Garry'));
localStorage.setItem('age', JSON.stringify(18));

// console.log(localStorage.getItem('hobbies'));

const getLocalStorageData = () => {

  // for (let i; i < localStorage.length; i++) {
  //   localStorage.key(i);
  // }

  // for (let i of localStorage) {
  //   localStorage.key(i);
  // }

  // Object.keys(localStorage)
  // Object.values(localStorage)
  // Object.entries(localStorage)

  return Object.entries(localStorage)
      .reduce((acc, [key, value]) => {
        let newValue;
        try {
          newValue = JSON.parse(value);
        } catch(e) {
          newValue = value;
        }
        return {
          ...acc,
          [key]: newValue,
        };
      }, {});
};

console.log(getLocalStorageData());   // {age: "18", name: ""Garry"", hobbies: "{"name":"John"}"}

