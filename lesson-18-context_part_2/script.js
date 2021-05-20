'use strict';
console.log('--- Execution context is not an easy topic. Part-2. ---');
console.log('---------');
console.log('--- event (this in arrow function) ---');

const user = {
  name: 'Henry',
  sayHi() {
    console.log(this);
  },
};

// obj.sayHi();

// setTimeout(user.sayHi, 100);                    // undefined
// setTimeout(user.sayHi.bind(user), 100);         // {name: "Henry", sayHi: ƒ}
// setTimeout(() => user.sayHi(), 100);  // {name: "Henry", sayHi: ƒ}

// const event = {
//   guest: [
// {name: 'Tom', email: 't@gmail.com', age: 17},
// {name: 'Bob', email: 'b@gmail.com', age: 19},
//   ],
//   message: "Welcome to the party",
//   getInvintations() {
//     return this.guest
//         .filter(({ age }) => age >= 18)
//         .map(({ name, email }) => ({
//       text: `Hi ${name}, ${this.message}`,
//           email
//     }));
//   }
// }

//    [{…}]
//     0: {text: "Hi Bob, Welcome to the party", email: "b@gmail.com"}
//     length: 1
//     __proto__: Array(0)

// console.log(event.getInvintations());

console.log('--- wallet - запозичування метода');

const wallet = {
  transactions: [1, 5, 89, 337, 3],
  // getMax() {
  //   return Math.max.apply(null, this.transactions);
  // },
  // getMin() {
  //   return Math.min.apply(null, this.transactions);
  // }
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  }
};

console.log(wallet.getMax());
console.log(wallet.getMin());

console.log('--- pseudo array ---');

// function func1() {
//   console.log(arguments);
// }
//
// func1(1, 2, 3, 4);

function argSum() {
  // return [].reduce.apply(arguments, [(acc, elem) => {
    return [...arguments].reduce((acc, elem) => {
    return acc + elem;
  }, 0)
}

console.log(argSum(1, 2, 3, 4));
// [].reduce((acc, elem) => { }, 0)


















