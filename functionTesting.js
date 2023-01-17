var a = 'Balaji';

const userDetails = {
    username: 'Joe',
    abc() {
       
      ((name) => {
        console.log(1, this)
        console.log(`Username is ${this.username}`);
        console.log(name);
      })(a) 
      return true; 
    },
    thisInArrow: () => {
        console.log(a)
    //   console.log(2, this)
    //   console.log(`Username is ${this.username}`);
    },
    thisInRegular() {
      console.log(3, this)
      console.log(`Username is ${this.username}`);
    },
  };
  

// userDetails.thisInArrow()

console.log(userDetails.abc());