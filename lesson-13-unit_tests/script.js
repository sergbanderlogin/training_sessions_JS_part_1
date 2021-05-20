console.log('--- Unit tests ---');
console.log('---------');
// simple assertions

if ('17 и в Афріци 17', () => {
  expect(17).toEqual(17);
}) ;

if ('18 це вам не 17', () => {
  expect(18).toEqual(17);
}) ;

const getEvenNumbers = numbers =>
    numbers.filter(num => (num % 2 === 0));

if ('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
}) ;
