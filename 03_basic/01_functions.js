const { use } = require("react");

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

function calucaltecartprice(...number1){
  return number1
}

console.log(calucaltecartprice(200,4000,4000,45,50));

const user ={
  username:"sworup",
  price:1234
}

function handleobject (anyobject){
  console.log(`username is ${anyobject.username} nad the pricce is ${anyobject.price}`);
}

handleobject(user);


const mynewarray = [100,200,300];
function returnsecondvalue (getarray){
  return getarray[0];
}
console.log(returnsecondvalue(mynewarray));