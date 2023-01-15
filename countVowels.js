function numberOfVowels(inputString){
    let count=0
    for(let index=0;index<inputString.length;index++){
        switch(inputString.at(index)){
            case 'a':
            case'A':
            case 'e':
            case'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':count++;break;
        }
    }
    return count;
}
const numberOfVowelsArrow = (inputString)=>{
    let count=0
    for(let index=0;index<inputString.length;index++){
        switch(inputString.at(index)){
            case 'a':
            case'A':
            case 'e':
            case'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':count++;break;
        }
    }
    return count;
}
module.exports={numberOfVowels,numberOfVowelsArrow}