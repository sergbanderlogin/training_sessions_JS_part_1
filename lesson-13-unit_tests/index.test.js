import getSum, {getSquaredNumbers, getOddNumbers} from './calculator.js';

it('should get squeared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3 , 4]);

  expect(result).toEqual([1, 4, 9, 16]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3 , 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});
  
it('should get sum of numbers', () => {
  const result = getSum(10, 5);

  expect(result).toEqual(15);
});
