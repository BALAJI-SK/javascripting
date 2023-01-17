// const {  isSameDigits, isSameDigitsArrow} = require('../digit_utilty');
const  {isSameDigits,isSameDigitsArrow  }= require('../digit_utilty');

// Test Regular Function
test('Checking every digit in number is same or not',()=>{
  expect(isSameDigits(22)).toEqual(true);
});

test('Checking every digit in number is same or not',()=>{
  expect(isSameDigits(222222)).toEqual(true);
});

test('Checking every digit in number is same or not',()=>{
  expect(isSameDigits(223)).toEqual(false);
});

test('Checking every digit in number is same or not',()=>{
  expect(isSameDigits(2234)).toEqual(false);
});

//Test Arrow function
test('Checking every digit in number is same or not',()=>{
  expect(isSameDigitsArrow(223)).toEqual(false);
});
test('Checking every digit in number is same or not',()=>{
  expect(isSameDigitsArrow(2134)).toEqual(false);
});
test('Checking every digit in number is same or not',()=>{
  expect(isSameDigitsArrow(22222222)).toEqual(true);
});
test('Checking every digit in number is same or not',()=>{
  
  expect(isSameDigitsArrow(22)).toEqual(true);
});