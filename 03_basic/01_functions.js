function saymyname(){
  console.log("s");
  console.log("w");
  console.log("o");
  console.log("r");
  console.log("u");
  console.log("p");  
}

saymyname();
//  function addtwonumber(number1 , number2){
// console.log(number1+number2);
//  }

//  addtwonumber(9,7);

function addtwonumber (num1, num2){
  return num1 + num2;
}

const result = addtwonumber(7,9)
console.log(result);

function loginusermessage (username){
  return `${username} just logged in `
}

console.log(loginusermessage("hitesh"));