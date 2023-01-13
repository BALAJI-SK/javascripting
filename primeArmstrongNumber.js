function primeNumber(number) {
    if (number==2 || number == 3) console.log('Is is PrimeNumber');
    for ( let i=2;i<number/2;i++){
     if( number%i==0)console.log("Not a Prime Number")
     else console.log('Is a Prime Number '); ;
    }
  }
  function armstrongNumber(number){
    let test=0,n=number;
    for(;number != 0;number%=10){
        test+= Math.pow( number/10,3);
    }
if (n===test) console.log('Is a Armstrong Number');
else  console.log('Is not a Armstrong Number');
  }