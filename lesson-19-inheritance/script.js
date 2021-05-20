'use strict';
console.log('--- Inheritance in JavaScript. ---');

const vehicle = {
    move() {
        // console.log('moving');
        console.log(`${this.name} moving`);
    },
    stop() {
        // console.log('stopped');
        console.log(`${this.name} moving`);
    }
};

 // vehicle.move();
console.log(vehicle);

const ship = {
    name: 'Aurora',
    hasWheels: false,
    liftAnchorDown() {
        console.log('Lifting anchor down');
    },
    liftAnchorUp() {
        console.log('Lifting anchor Up');
    },
    __proto__: vehicle
};

// ship.move();
console.log(ship);

const user = {
   firstName: 'John',
   lastName: 'Dpe',
   get fullName() {
       return `${this.firstName} ${this.lastName}`
   },
    set fullName(value) {
       const [firstName, lastName] = value.split(' ');
       this.firstName = firstName;
       this.lastName = lastName;
    }
};

user.fullName = "Tom Hardy";
console.log(user.firstName);
console.log(user.fullName);

Object.setPrototypeOf(ship,vehicle);
ship.move();
console.log(ship);

for(let prop in ship) {
    if (ship.hasOwnProperty(prop))
        console.log(prop);
}

console.log(Object.keys(ship));

// User

function User(name, age) {
    this.name = name;
    this.age = age;

    // this.sayHi = function () {
    //     console.log(`Hi, I am ${this.name}!`);
    // }

    User.prototype.sayHi = function() {
         console.log(`Hi, I am ${this.name}!`);

    }
};

const user1 = new User("Boris", 17);
const user2 = new User("Garry", 21);
console.log(user1);
user1.sayHi();
user2.sayHi();

console.log(user2.sayHi === user1.sayHi);




