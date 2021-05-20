console.log("--- Objects. Part-2. ---");
console.log("--------------");

//  const user = {
//    name: 'Tom',
//    age: 27,
//  }
//  
//  // Object.keys();
//  // Object.values();
//  // Object.entries();
//  
//  console.log(Object.keys(user)); // (2) ["name", "age"]
//  console.log(Object.values(user)); // (2) ["Tom", 27]
//  console.log(Object.entries(user));// (2) [Array(2), Array(2)]

const users = {
  'Tom': 17,
  'John Doe': 19,
  'Bob': 18,
}

console.log("--- Пошаговий код ---");
console.log('закоментовано < /* */ >');
/*
 const getAdults = userObj => {
 
   // { 'Tom': 17, 'John Doe': 19, 'Bob': 18 } =>  [['Tom', 17], ['John Doe', 19], ['Bob', 18]]
   const userArray = Object.entries(userObj);
 
   // [['Tom', 17], ['John Doe', 19], ['Bob', 18] => [ ['John Doe', 19], ['Bob', 18] ]
   const filtredUserArray = userArray
     .filter(user => user[1] >= 18);
 
   // [ ['John Doe', 19], ['Bob', 18] ] => [ 'John Doe', 'Bob' ]
   const userName = filtredUserArray
     .map(user => user[0]);
 
   return userName;
 }
 
 console.log(Object.entries(users)); // (3) [Array(2), Array(2), Array(2)]
 console.log(getAdults(users)); // (2) ["John Doe", "Bob"]
 */

console.log('--- Спрощений код ---');

const getAdults = userObj => Object.entries(userObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

console.log(Object.entries(users)); // (3) [Array(2), Array(2), Array(2)]
console.log(getAdults(users)); // (2) ["John Doe", "Bob"]

console.log("--------------");
console.log('--- Copy Object ---');

const userObj_1 = {
  'Tom': 17,
  'Katy': 18,
};

const userObj_2 = {
  'John Doe': 19,
  'Bob': 18,
};

// const player = userObj_1;
// console.log(player);
// 
// const players = userObj_2;
// console.log(players);
// 
// const res_1 = Object.assign({}, userObj_1);
// console.log(res_1);
// 
// const res_2 = Object.assign(userObj_1, userObj_2);
// console.log(res_2);

const copyObj = obj => Object.assign({}, obj);
console.log(copyObj(userObj_1));

console.log("--------------");
console.log('--- spred operator ... ---');

const user_2 = {
  name: 'Tom',
  age: 27,
}

const player_2 = {...user_2};
console.log(user_2 === player_2); // false
console.log(user_2);   // {name: "Tom", age: 27}
console.log(player_2); // {name: "Tom", age: 27}

const user_3 = {
  name: 'Tom',
  age: 27,
  father: {
    name: 'Bob',
  }
};

const player_3 = {...user_3};
console.log(player_3); // {name: "Tom", age: 27, father: {…}}

console.log("--------------");

console.log('--- деструктурізація ---');
// const { name } = user_3;
// console.log(name); // Tom

const {name = 'default', ...restProps} = user_3;
console.log(restProps);  // {age: 27, father: {…}}

const player_4 = {
  game: 'football',
  ...restProps
};
console.log(player_4); // {game: "football", age: 27, father: {…}}

console.log("--------------");
console.log('--- Methods ---')

const user_4 = {
  name: 'Tom',
  age: 29,
  sayHi: function () {
    console.log('Hi');
  },
};

console.log(user_4); // {name: "Tom", age: 29, sayHi: ƒ}
user_4.sayHi(); // Hi

// [1, 2].forEach

console.log('text'.toUpperCase()); // TEXT
console.log('METHOD'.toLowerCase()); // method
console.log(1..toFixed()); // 1

console.log("--------------");
