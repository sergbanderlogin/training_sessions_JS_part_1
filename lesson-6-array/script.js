console.log('--- Масиви ---');
console.log('------------');

const numbers = [11, 22, 33, 44, 55];
const numbersOfElements = numbers.length;

console.log(numbers);
console.log("Amounts Elements: " + numbersOfElements + ' елементів в масиві');
console.log("Element #2: " +  numbers[2]);
console.log('Element last: ' + numbers[numbers.length - 1]);

console.log('------------');

// [11, 22, 33, 44, 55] => [length, first elem, last elem] 

function getArrayBound(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
} 

// const resultArrayBound = getArrayBound(numbers); 

const resultArrayBound = getArrayBound([]);

console.log(resultArrayBound);
console.log('------------');

console.log('--- Перебор масива ---');

let sumOfNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
 console.log(numbers[i]); 
  sumOfNumbers += numbers[i];
}
console.log('Results sumOfNumbers: ' +  sumOfNumbers);

console.log('------------');
console.log('--- цикл <for> для масивів ---')
function sum(numbers) {
  let sumOfNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
}

const sumOfElements = sum(numbers);
console.log('Results sumOfElements: ' +  sumOfElements);

console.log('------------');
console.log('--- цикл <for of> для масивів ---')

function sumForOf(numbers) {
  let sumOfNumbers = 0;

  for(let num of numbers) {
    sumOfNumbers += num;
  }
  return sumOfNumbers;
}
const sumForOfElements = sumForOf(numbers);
console.log('Result sumForOf: ' + sumForOfElements);

console.log('------------');

const arr = numbers;

arr[2] = 1000;

console.log(numbers);

console.log('------------');

console.log('--- Методи .pop(), .push(), shift(), unshift() ---')

const people = ['Ann', 'Bob', 'Tom'];


// people[3] = 'Jack';
// people[people.length] = 'John';


people.unshift('Serg', 'Barry'); // add to start 
people.push('Garry', 'Lilu');    // add to end 
const last = people.pop()        // delete to end 
const first = people.shift();    // delete to start 

console.log("Deleted element to start: " + first);
console.log("Deleted element to end: " +  last);
console.log(people);

console.log('------------');

console.log('--- from, to => [n % 3 === 0] --- ');

function getSpecialNumbers(from, to) {
  let specialNumbers = [];

  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }

  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);

console.log(specialNumbers);

console.log('------------');

console.log('--- spread та деструктурізація ---');

const numbersSpread = [11, 22, 33, 44, 45];
/*
const a = numbersSpread[0];
const b = numbersSpread[1];
const [a, b, c, d, e, f] = numbersSpread;

console.log(a, b, c, d, e, f);
*/

const [a, b, ...arrSpread] = numbersSpread;

console.log(a, b, arrSpread);
console.log(a, b, [1, 2, 3, arrSpread]);
console.log(a, b, [1, 2, 3, ...arrSpread]);

console.log('------------');

function swap(arr) {
  const [start, ...rest] = arr;

  return [...rest, start];
}
console.log(swap(numbersSpread));

console.log('------------');
