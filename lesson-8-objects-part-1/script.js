console.log("--- Об'єкти. Частина 1. ---");

const prop = 'my';

const obj = {
  name: 'Tom',
  age: 21,
  interest: 'football',
  'My name': 'Bob',
  [prop + 'name']: 'value',
}

console.log(obj.age);
obj.age = 27;
console.log(obj.age);
console.log(obj['My name']);
console.log(obj[prop + 'name']);

console.log('-------------');
console.log("--- transformToObject ---")

// [1, 'text'] => {'1': 1, text: 'text'}

const transformToObject = arr => {
  let obj = {};

  arr.forEach(el => {
    obj[el] = el;
  });

  return obj;
};

const arr = [1, 'text'];
const result = transformToObject(arr);

console.log(result);

console.log('-------------');
const user = {
  name: 'Bob',
}

user.name = 'Tom';
console.log(user.name);
console.log(user);

console.log('-------------');

const a = {};
const b = {};
console.log(a == b); // false

console.log('-------------');

const name = 'John';
const user1 = {
  name,
};
console.log(user1.name);

console.log('-------------');
console.log('--- concatProps ---');

// const arr1 = ['a', 'b'];
/*
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
};
*/
/*
for (let value of arr1) {
  console.log(value);
}
*/

const user2 = {
  name: 'Victor',
  age: 32,
}
for (let key in user2) {
  console.log(key);
  console.log(user2[key]);
}

console.log('-------------');

const user3 = {
  name: 'Serg',
  age: 57,
}

const concatProps = obj => {
  const arr = [];

  for (let key in obj) {
    arr.push(obj[key]);
    //  arr = arr.concat(obj[key]);
  }

  return arr;
};

console.log(concatProps(user3));

console.log('-------------');



