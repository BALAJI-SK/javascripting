function isStringMatching(input){
  if(input.length<6)return false;
  return input.substring(input.length-6,input.length)==='Script'?true:false;
}
const isStringMatchingArrow=(input)=>{
  if(input.length<6)return false;
  return input.substring(input.length-6,input.length)==='Script'?true:false;  
};
module.exports={isStringMatching,isStringMatchingArrow};