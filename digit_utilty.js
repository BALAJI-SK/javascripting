function isSameDigits(number){
    let digit =number%10;
    while(number>0){
        if(number%10!==digit)return false
        number=Math.floor(number/10)
    }
    return true
}
const isSameDigitsArrow = number=>{
    let digit =number%10;
    while(number>0){
        if(number%10!==digit)return false
        number=Math.floor(number/10)
    }
    return true
}
console.log(isSameDigitsArrow(22));
module.exports ={isSameDigits,isSameDigitsArrow};