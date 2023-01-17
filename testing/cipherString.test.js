const {alphabetCharShift,alphabetCharShiftArrow}=require('../ciperString');
test('Cipher text',()=>{
  expect(alphabetCharShift('codeacademy')).toEqual('dpefbdbefnz');
});
test('Cipher text',()=>{
  expect(alphabetCharShift('abcdefg')).toEqual('bcdefgh');
});
test('Cipher text',()=>{
  expect(alphabetCharShift('lazyinterns')).toEqual('mbazjoufsot');
});
test('Cipher text',()=>{
  expect(alphabetCharShift('codeaca')).toEqual('dpefbdb');
});
test('Cipher text',()=>{
  expect(alphabetCharShiftArrow('codeacademy')).toEqual('dpefbdbefnz');
});
test('Cipher text',()=>{
  expect(alphabetCharShiftArrow('abcdefg')).toEqual('bcdefgh');
});
test('Cipher text',()=>{
  expect(alphabetCharShiftArrow('lazyinterns')).toEqual('mbazjoufsot');
});
test('Cipher text',()=>{
  expect(alphabetCharShiftArrow('codeac')).toEqual('dpefbd');
});