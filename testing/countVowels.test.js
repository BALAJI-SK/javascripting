const {numberOfVowels,numberOfVowelsArrow }=require('../countVowels');

test('Count Vowels',()=>{
  expect(numberOfVowels('codeacademy')).toBe(5);
});
test('Count Vowels',()=>{
  expect(numberOfVowels('azxsws')).toBe(1);
});
test('Count Vowels',()=>{
  expect(numberOfVowels('qwee')).toBe(2);
});
test('Count Vowels',()=>{
  expect(numberOfVowels('qqqqqqqqqq')).toBe(0);
});


test('Count Vowels',()=>{
  expect(numberOfVowelsArrow('codeacademy')).toBe(5);
});
test('Count Vowels',()=>{
  expect(numberOfVowelsArrow('qqqqqqq')).toBe(0);
});
test('Count Vowels',()=>{
  expect(numberOfVowelsArrow('qwiiii')).toBe(4);
});
test('Count Vowels',()=>{
  expect(numberOfVowelsArrow('utttree')).toBe(3);
});
