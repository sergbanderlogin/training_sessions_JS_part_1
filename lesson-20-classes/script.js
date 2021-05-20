'use strict';
console.log('--- Classes in JavaScript. ---');

/*
class User {
    constructor(name, age) {
     this.name = name;
     this.age = age;
    }
    sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if (value < 0) {
            return false;
        }
        this.age = value;
        if (value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    };
}

const user1 = new User('Tom', 17);
console.log(user1);
*/

/*
function user(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge(value)
{
    if (value < 0) {
        return false;
    }
    this.age = value;
    if (value >= 25) {
        this.requestNewPhoto();
    }
    return value;
}

const user1 = new User('Boris', 17);
console.log(user1);
*/

console.log('---------');

/*

class Vehicle {
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels;
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log((`${this.name} stopped`));
    }
}

class Ship extends Vehicle {
    constructor(name, speed) {
        super(name, false);
        this.speed = speed;
    }

    move() {
        console.log(`${this.name} lifting anchor up.`);
        super.move();
    }

    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down.`);
    }
}

const ship1 = new Ship('Argo', 23);
console.log(ship1);

ship1.stop();
ship1.move();
*/

/*
console.log('---------');

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

   static compare(user1, user2) {
        return user1.age - user2.age;
   }

    sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    setAge(value) {
        if (value < 0) {
            return false;
        }
        this.age = value;
        if (value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    };
}

const user1 = new User('Tom', 17);
const user2 = new User('Tom', 34);

console.log(User.compare);
console.log(User.compare(user1, user2));
*/
console.log('----------');
// Wallet
/*
class Wallet {
    // constructor() {
    //     this._balance = 0;
    // }
    _balance = 0;

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log("No enouhg funds");
            return;
        }

        this._balance -= amount;
    }
}

const wallet1 = new Wallet;

console.log(wallet1.getBalance());
wallet1.deposit(45);
console.log(wallet1.getBalance());
wallet1.deposit(34);
console.log(wallet1.getBalance());
wallet1.withdraw(134);
// console.log(wallet1.getBalance());
*/

class Wallet {
    // constructor() {
    //     this._balance = 0;
    // }
    #balance = 0;

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("No enouhg funds");
            return;
        }

        this.#balance -= amount;
    }
}

const wallet1 = new Wallet;

console.log(wallet1.getBalance());
wallet1.deposit(45);
console.log(wallet1.getBalance());
wallet1.deposit(34);
console.log(wallet1.getBalance());
wallet1.withdraw(134);
console.log(wallet1.#balance); //Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class



























