console.log('--- Numbers ---');
console.log('---------');

Number.isNaN('text'); // false
isNaN('text'); // true
Number.isNaN(NaN);

Number.isFinite('15'); // false
isFinite('15'); // true

parseInt(' 17.17text'); // 17
Number.parseInt(' 17.17text'); // 17
Number.parseInt('seventeen');  // NaN

parseFloat(' 17.17text'); // 17.17
Number.parseFloat(' 17.17text'); // 17.17
Number.parseFloat('seventeen');  // NaN

Number.isInteger(17);  // true
Number.isInteger(17.0);  // true
Number.isInteger(17.17);  // false
Number.isInteger('17');  // false
Number.isInteger(Infinity);  // false
Number.isInteger(NaN);  // false
Number.isInteger(undefined);  // false 
Number.isInteger(null);  // false

console.log('---------');
console.log('--- parsing ---');

const parseArray = arr => arr
    .map(el => Number.parseFloat(el));


const elementList = [4, 5.6, '  5.7kl', null, NaN, Infinity, undefined];

console.log(parseArray(elementList)); // (7) [4, 5.6, 5.7, NaN, NaN, Infinity, NaN] 

console.log('---------');
console.log('--- multiRound ---');

0.1 + 0.2 === 0.3 // false
0.1 + 0.2 // 0.30000000000000004

console.log('---------');
console.log('--- Object Math ---');

// num => []

const multiRound = num =>
    [
      Math.round(num * 100) / 100,
      Math.floor(num * 100) / 100,
      Math.ceil(num * 100) / 100,
      Math.trunc(num * 100) / 100,
      num.toFixed(2),
    ];

console.log(multiRound(17.1));  // (5) [17.1, 17.1, 17.11, 17.1, "17.10"]
console.log(multiRound(Math.PI));  // (5) [3.14, 3.14, 3.15, 3.14, "3.14"] 
console.log(Math.round(Math.PI * 1000) / 1000); // 3.142
console.log(Math.PI.toFixed(3));  // "3.142"
console.log(Number(Math.PI.toFixed(3)));  // 3.142

console.log('--- Приклад ---')
const sumExample = (0.3 * 26 + 0.2 * 48).toFixed(2);
console.log(sumExample + ' грн'); // 17.40 грн      

console.log('---------');
console.log('--- getMaxAbsoluteNumber ---');

// [2, -6, 78, -99] => 99

const arrNum = [2, -6, 78, -99];

// const getMaxAbsoluteNumber = arr => {
//   let max = -Infinity;
// 
//   arr.forEach(num => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
// 
//   return max;
// };

const getMaxAbsoluteNumber = arr => {
  const absoluteValues = arr
      .map(num => Math.abs(num));

  return Math.max(...absoluteValues);

};

console.log(getMaxAbsoluteNumber(arrNum));  // 99

// 1 - get absolute values
// 2 - find max
console.log('---------');
