const {isStringMatching,isStringMatchingArrow}=require('../stringMatching')
test('String MAtching',()=>{
    expect(isStringMatching('javaScript')).toEqual(true)
})
test('String MAtching',()=>{
    expect(isStringMatching('java fjdfh Script')).toEqual(true)
})
test('String MAtching',()=>{
    expect(isStringMatching('javascript')).toEqual(false)
})
test('String MAtching',()=>{
    expect(isStringMatching('java')).toEqual(false)
})

test('String MAtching',()=>{
    expect(isStringMatching('javaScript')).toEqual(true)
})
test('String MAtching',()=>{
    expect(isStringMatching('java ff Script')).toEqual(true)
})
test('String MAtching',()=>{
    expect(isStringMatching('javascript')).toEqual(false)
})
test('String MAtching',()=>{
    expect(isStringMatching('cript')).toEqual(false)
})

