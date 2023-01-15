const {longestString, longestStringArrow}=require('../longestStringUtility')

test('Displaying Longest String of Array of String',()=>{
    expect(longestString(["we", "love", "code", "academy"])).toEqual("academy");
})

test('Displaying Longest String of Array of String',()=>{
    expect(longestString(["we", "welcome to", "code", "academy"])).toEqual("welcome to");
})

test('Displaying Longest String of Array of String',()=>{
    expect(longestString(["we", "love", "code", "Hello d"])).toEqual("Hello d");
})

test('Displaying Longest String of Array of String',()=>{
    expect(longestString(["we", "love", "code", "acawqdemy"])).toEqual("acawqdemy");
})
//Test Arrow Function 
test('Displaying Longest String of Array of String',()=>{
    expect(longestStringArrow(["we", "love", "code", "academy"])).toEqual("academy");
})

test('Displaying Longest String of Array of String',()=>{
    expect(longestStringArrow(["we", "welcome to", "code", "academy"])).toEqual("welcome to");
})

test('Displaying Longest String of Array of String',()=>{
    expect(longestStringArrow(["we", "love", "code", "Hello d"])).toEqual("Hello d");
})

test('Displaying Longest String of Array of String',()=>{
    expect(longestStringArrow(["we", "love", "code", "acawqdemy"])).toEqual("acawqdemy");
})