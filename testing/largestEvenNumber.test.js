const { largestEvenNumber , largestEvenNumberArrow} = require('../largestEvenNumber');

//Testing Normal Function
test('find largest Even Number in Array',()=>{
    let int_array1=[1,2,3,4,5]
    expect(largestEvenNumber(int_array1)).toBe(4)
})
test('find largest Even Number in Array',()=>{
    let int_array2=[1,3,5,7,9]
    expect(largestEvenNumber(int_array2)).toBe(-1)
})
test('find largest Even Number in Array',()=>{
    let int_array4=[1,31,15,17,19]
    expect(largestEvenNumber(int_array4)).toBe(-1)
})
test('find largest Even Number in Array',()=>{
    let int_array3=[1,2,3,7,5]
    expect(largestEvenNumber(int_array3)).toBe(2)
})


// Testing Arrow Function
test('find largest Even Number in Array',()=>{
    let int_array1=[1,2,3,4,5]
    expect(largestEvenNumberArrow(int_array1)).toBe(4)
})
test('find largest Even Number in Array',()=>{
    let int_array2=[1,3,5,7,9]
    expect(largestEvenNumberArrow(int_array2)).toBe(-1)
})
test('find largest Even Number in Array',()=>{
    let int_array4=[1,31,15,17,19]
    expect(largestEvenNumberArrow(int_array4)).toBe(-1)
})
test('find largest Even Number in Array',()=>{
    let int_array3=[1,2,3,7,5]
    expect(largestEvenNumberArrow(int_array3)).toBe(2)
})
