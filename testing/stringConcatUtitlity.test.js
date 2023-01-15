const {stringConcat,stringConcatArrow}=require('../stringConcatUtility')

test('String Concat without first letter',()=>{
    expect(stringConcat(["code", "academy"])).toEqual("odecademy")
})
test('String Concat without first letter',()=>{
    expect(stringConcat(["code", "ac"])).toEqual("odec")
})
test('String Concat without first letter',()=>{
    expect(stringConcat(["", "academy"])).toEqual('')
})
test('String Concat without first letter',()=>{
    expect(stringConcat([])).toEqual('')
})


test('String Concat without first letter',()=>{
    expect(stringConcatArrow(["code", "academy"])).toEqual("odecademy")
})
test('String Concat without first letter',()=>{
    expect(stringConcat(["cod", "academy"])).toEqual("odcademy")
})
test('String Concat without first letter',()=>{
    expect(stringConcat(["", "academy"])).toEqual('')
})
test('String Concat without first letter',()=>{
    expect(stringConcat([])).toEqual('')
})
