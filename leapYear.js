function isLeapYear(year){
  if((year % 400 == 0) ||  (year % 100 != 0) &&  (year % 4 == 0))
    return true;
  else
    return false;
    
}
const isLeapYearArrow = (year)=>{
  if((year % 400 == 0) ||  (year % 100 != 0) &&  (year % 4 == 0))
    return true;
  else{
    return false;}
};
module.exports = {isLeapYear,isLeapYearArrow};