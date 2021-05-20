console.log('--- Методи роботи з масивами. ---');
console.log('-------------');

const getSpecialNumbers = numbers => 
  numbers.filter(num => num % 3 === 0); 

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 18, 21, 24];

console.log('Result: ' + '[' + getSpecialNumbers(arr1) + ']');
// console.log(arr1);

console.log('-------------');
console.log('--- unsorted array => sorted array ---');

const sortArray = numbers => 
  numbers.slice().sort((a, b) => a - b);

const arr2 = [2, 4 ,30, 1, 5, 21, 18, 42];

console.log(sortArray(arr2));
console.log(arr2);

console.log('-------------');
console.log('--- метод <reduce> ---');
// [1, [2, 3, 4], 5, [6]] => [1, 2, 3, 4, 5, 6]
/*
 const flatArray = arr => arr.flat();  // аналог методу reduce, але без необхідності писати додатково код приведений нижче 
*/
const flatArray = arr => arr
    .reduce((acc, elem) => {
      return acc.concat(elem);
    }, []);

const initArray = [1, [2, 3, 4], 5, [6]];

console.log(flatArray(initArray));

// [1, 2, 3, 4] => 10
/* 
 [1, 2, 3, 4].reduce(function(acc, num) {
  return acc + num;
});
*/
// 1: 0, 1 => 1
// 2: 1, 2 => 3
// 3: 3, 3 => 6
// 4: 6, 4 => 10
console.log('--- методи <indexOf, filter, includes> ---');
// ['Ann', 'Tom', 'Bob', 'Kate']; ['Tom', 'Bob'] => ['Good job Ann', 'Good job Kate'];

const getMessagesForPassedStudents = (allStudents, failedStudents) => 

// {  
// const passedStudents = allStudents
//   .filter(name => !failedStudents.includes(name));
// const messages = passedStudents
//   .map(name => 'Good job, ' + name);
//  return messages;
// };

  allStudents
    .filter(name => !failedStudents.includes(name))
    .map(name => 'Good job, ' + name);

const allStudents = ['Ann', 'Tom', 'Bob', 'Kate']; 
const failedStudents = ['Tom', 'Bob'];

console.log(getMessagesForPassedStudents(allStudents, failedStudents));

// 1. Find passed students.
// 2. Add Good job.

console.log('-------------');
