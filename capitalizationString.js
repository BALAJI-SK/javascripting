function capitalizationStringUtility(input ){
    let finalString = ''
    for(let i=0;i<input.length;i++){
        iterator=input.at(i)
        finalString+=(iterator>='a'&& iterator<='z'?iterator.toUpperCase():iterator>='A'&& iterator<='Z'?iterator.toLowerCase():iterator)
    };
    return finalString
}
const capitalizationStringUtilityArrow = (input)=>{
    let finalString = ''
    for(let i=0;i<input.length;i++){
        iterator=input.at(i)

        finalString+=(iterator>='a'&& iterator<='z'?iterator.toUpperCase():iterator>='A'&& iterator<='Z'?iterator.toLowerCase():iterator)
    };
    return finalString

}
//  console.log(capitalizationStringUtilityArrow('MeRRy hAD a LITTle lAMp'))
module.exports={capitalizationStringUtility,capitalizationStringUtilityArrow};