 function multipleby5 (num){
    return num*5;
 }
  multipleby5.power = 2;
  console.log(multipleby5(5));
  console.log(multipleby5.power);
  console.log(multipleby5.prototype);

  function createuser (username , score){
    this.usernmae = username;
    this.score = score;
  }

  createuser.prototype.increment = function(){
   this.score++
  }

  createuser.prototype.printme= function(){

   console.log(`score is ${this.score}`);
  }
 
  

   const chai =  new createuser("chai", 25);
