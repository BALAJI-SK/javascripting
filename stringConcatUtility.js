function stringConcat(inputArray){
    if(inputArray.length!=2 || inputArray.at(0).length==0 || inputArray.at(1).length==0)return '';
    return inputArray.at(0).substring(1)+inputArray.at(1).substring(1);
}
const stringConcatArrow =(inputArray)=>{
    if(inputArray.length!=2 || inputArray.at(0).length==0 || inputArray.at(1).length==0)return '';
    return inputArray.at(0).substring(1)+inputArray.at(1).substring(1);
}
module.exports={stringConcat,stringConcatArrow};