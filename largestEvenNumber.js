function largestEvenNumber(int_array){
    let largestNumber=-1
  if(int_array.length==0)return largestNumber;
    int_array.forEach(itreator => {
        largestNumber = itreator%2==0 ? Math.max(itreator,largestNumber):largestNumber;
    });
    return largestNumber;
}

const largestEvenNumberArrow = int_array=>{
    let largestNumber=-1
    if(int_array.length==0)return largestNumber
    int_array.forEach(itreator => {
        largestNumber = (itreator&1) ==0 ? Math.max(itreator,largestNumber):largestNumber;
    });
    return largestNumber;
}
// int_array=[2,3,4]
// const large1=int_array.filter((x)=>{x%2==0});
// console.log(large1)
// console.log(largestEvenNumber([1,2,3,4,5]));
// console.log(largestEvenNumber([[1, 3, 5, 7]]));
// console.log(largestEvenNumberArrow([1,2,3,4,5]));
// console.log(largestEvenNumberArrow([[1, 3, 5, 7]]));
module.exports = {largestEvenNumber,largestEvenNumberArrow}