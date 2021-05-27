'use strict';
console.log('--- Function in JavaScript. Some advanced techniques. Task-4. ---');
console.log('              ---------');
// compose

// compose(func1, func2, ...) =>
//
// doEverything

const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

const compose = (...funcs) => value => {
  return funcs.reduce((acc, func) => func(acc), value);
};

const doEverythig = compose(
    add3,
    mult2,
    div4,
);

console.log(doEverythig(3));
