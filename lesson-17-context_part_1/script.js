'use strict';
console.log('--- Execution context is not an easy topic. Part-1. ---');
console.log('---------');
// methods

// const user1 = {
//   name: 'Tom',
//   age: 17,
// };
// 
// user.walk = function (walk) {
//   console.log('I\'m walking.');
// }
// 
// user1.sayHi = function () {
//   console.log(`Hi! I am ${this.name}.`);
// }
// 
// user1.sayHi(); // Hi! I am Tom.
// user1.walk();  // I'm walking.
console.log('---------');

const user2 = {
  name: 'John',
  age: 17,
  sayHi(num) {
    console.log(num); // 32 // 17
    console.log(`Hi! I am ${this.name}. I am ${num} years old.`);
  },
};

user2.sayHi(32);       // Hi! I am John. I am 32 years old.
user2.sayHi(user2.age); // Hi! I am John. I am 17 years old.

console.log('---------');

const user3 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    console.log(`Hi! I am ${this.firstName} ${this.lastName}.`);
  },
};

user3.getFullName();  // Hi! I am John Doe.

/*
const func3 = user3.getFullName;  
func(); // Uncaught TypeError: Cannot read property 'firstName' of undefined
        // at getFullName (script.js:41)
        // at script.js:47
*/

console.log('---------');
console.log('--- method .bind() ---');

const user4 = {
  firstName: 'Phillipe',
  lastName: 'Grown',
  getFullName(){
    console.log(`Hi! I am ${this.firstName} ${this.lastName}.`);
  },
};

const func4 = user4.getFullName.bind(user4);
func4();
// Hi! I am Phillipe Grown.

console.log('---------');
console.log('--- method .call() ---');

const user5 = {
  firstName: 'Phillipe',
  lastName: 'Grown',
  getFullName(){
    console.log(`Hi! I am ${this.firstName} ${this.lastName}.`);
  },
};

const func5 = user5.getFullName;
func5.call(user5);                // Hi! I am Phillipe Grown.
func5.call({firstName: 'Tom'});   // Hi! I am Tom undefined.
func5.call({lastName: 'Brown'});  // Hi! I am undefined Brown.
func5.call({});                   // Hi! I am undefined undefined.


console.log('---------');
console.log('--- method .apply() ---');

const user6 = {
  name: 'Tom',
  //age: 18,
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old.`);
  }
};

user6.sayHi(32, 'Привіт!');  // Привіт!. I'm Tom. I'm 32 years old.

const func6 = user6.sayHi;
const anotherUser = {
  name: "Garry",
};

func6.apply({name: 'John'}, [21, 'Hello!']); // Hello!. I'm John. I'm 21 years old.
func6.apply(anotherUser, [36, 'Ok, Hello']);  // Ok, Hello. I'm Garry. I'm 36 years old.

func6.call(anotherUser, 48, "Вітаю") // Вітаю. I'm Garry. I'm 48 years old.

console.log('---------');
console.log('--- callbackPrompt ---');
/*
const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    // setTimeout(() =>  this.showPrompt(), ms);
    console.log(this);   // {message: "Tell me your number", showPrompt: ƒ, showDeferredPrompt: ƒ}
    setTimeout(this.showPrompt.bind(this), ms);
  }
};

// callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(1000);
*/

console.log('---------');
// defer(func, ms) => function
/*
function defer(func, ms) {
  return function() {
    setTimeout(() => func(...arguments), ms);
  }
}

const sum = (a, b) => {
  console.log(a + b);
};


const deferredSum = defer(sum, 1000);

deferredSum(1, 4);
*/


function deferOne(func, ms) {
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  }
}

const userOne = {
   name: 'Tomas',
   sayHiOne() {
     console.log(`Hi, I'm ${this.name}!`);
   }
}

const deferredHi = deferOne(userOne.sayHiOne, 1000);

deferredHi.call({name: 'Bob'});  // Hi, I'm Bob!

userOne.sayHiOne(name);  // Hi, I'm Tomas!


