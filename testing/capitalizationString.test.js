const {capitalizationStringUtility,capitalizationStringUtilityArrow}=require('../capitalizationString');
//Test Regular function
test('Capitalization of String',()=>{
  expect(capitalizationStringUtility('MeRRy hAD a LITTle lAMp')).toEqual('mErrY Had A littLE LamP');
});
test('Capitalization of String',()=>{
  expect(capitalizationStringUtility('MeRRy hAD a 1 lAMp')).toEqual('mErrY Had A 1 LamP');
});
test('Capitalization of String',()=>{
  expect(capitalizationStringUtility(' hAD a 3 lAMp')).toEqual(' Had A 3 LamP');
});
test('Capitalization of String',()=>{
  expect(capitalizationStringUtility('Hi I am home!!')).toEqual('hI i AM HOME!!');
});


//Test Arrow function
test('Capitalization of String',()=>{
  expect(capitalizationStringUtilityArrow('MeRRy hAD a LITTle lAMp')).toEqual('mErrY Had A littLE LamP');
});
test('Capitalization of String',()=>{
  expect(capitalizationStringUtilityArrow('MeRRy hAD a 1 lAMp')).toEqual('mErrY Had A 1 LamP');
});
test('Capitalization of String',()=>{
  expect(capitalizationStringUtilityArrow(' hAD a 3 lAMp')).toEqual(' Had A 3 LamP');
});
test('Capitalization of String',()=>{
  expect(capitalizationStringUtilityArrow('Hi I am home!!')).toEqual('hI i AM HOME!!');
});