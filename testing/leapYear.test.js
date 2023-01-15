const {isLeapYear,isLeapYearArrow}=require('../leapYear')

test('Given Year is Leap year or not',()=>{
    expect(isLeapYear(2018)).toEqual(false);
})
test('Given Year is Leap year or not',()=>{
    expect(isLeapYear(2000)).toEqual(true);
})
test('Given Year is Leap year or not',()=>{
    expect(isLeapYear(2003)).toEqual(false);
})
test('Given Year is Leap year or not',()=>{
    expect(isLeapYear(2001)).toEqual(false);
})
//Test Arrow
test('Given Year is Leap year or not',()=>{
    expect(isLeapYearArrow(2028)).toEqual(true);
})
test('Given Year is Leap year or not',()=>{
    expect(isLeapYearArrow(2000)).toEqual(true);
})
test('Given Year is Leap year or not',()=>{
    expect(isLeapYearArrow(2024)).toEqual(true);
})
test('Given Year is Leap year or not',()=>{
    expect(isLeapYearArrow(2001)).toEqual(false);
})