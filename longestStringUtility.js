function longestString(inputArray){
    let ansString='',stringLength=0;
    inputArray.forEach(itrator => {
        if(itrator.length >stringLength){
            stringLength=itrator.length
            ansString=itrator
        }
    });
    return ansString;
}

longestStringArrow = (inputArray)=>{
    let ansString='',stringLength=0;
    inputArray.forEach(itrator => {
        if(itrator.length >stringLength){
            stringLength=itrator.length
            ansString=itrator
        }
    });
    return ansString;
}
module.exports={longestString,longestStringArrow}