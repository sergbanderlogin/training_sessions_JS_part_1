console.log('JavaScript - курс Василя Велмука!');

console.log("-------------");

let n = 10;
let sum = 0;
while (n > 0) {
  sum += n;
  --n;
}
console.log('Result cycle while: ' + sum);

console.log("-------------");

let n1 = 10;
let sum1 = 0;
do {
  sum1 += n1;
  n1--;
} while (n1 > 0)
console.log('Result cycle while: ' + sum1);

console.log("-------------");

let m = 10;
let n2 = 20;
let result = 1;

do {
  if (m % 2 === 1) {
    result *= m;
  }
    m++;
} while (m <= n2);
console.log('Result cycle do-while: ' + result);

console.log("-------------");

let result2 = 1;
for (let m1 = 10; m1 <= 20; m1++) {
  if (m1 % 2 === 1) {
    result2 *= m1;
  }
}
console.log("Result cycle for: " + result2);

console.log("-------------");
console.log("----- Таблиця множення цикл 'for' -----");

for (let i = 1; i <= 5; i++) {
  console.log('\n=> ' + i + ' <=\n\n');
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j);
  };
};

console.log("-------------");
console.log('Підрахунок чисел, введених користувачем, за допомогою функції <prompt> та директиви <break>.')

let resultUser = 0;

while (true) {
  const userInput = prompt('Your number');
  if (!userInput) {
    break;
  }
resultUser += Number(userInput);
}
console.log('Result: ' + resultUser);


console.log("-------------");

console.log("--- Директива <continue> ---");

let resultContinue = 1;

for (let m4 = 10; m4 <= 20; m4++) {
  if (m4 % 2 === 1) {
    continue;
  }
  resultContinue *= m4;
}

console.log('Result: ' + resultContinue);

console.log("-------------");



