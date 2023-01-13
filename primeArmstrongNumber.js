const isPrimeNumber =(number)=> {
    if (number==2 || number == 3) return true;
    for ( let i=2;i<number/2;i++){
     if( number%i==0) return false;
     else return true;
    }
  }
const armstrongNumber =(number) =>{
    let test=0,n=number;
    for(;number != 0;number/=10){
        test+= Math.pow( number%10,3);
    }
if (n===test) return true;
else  return false;
  }
  console.log( primeNumber(153))
  console.log( armstrongNumber(153));