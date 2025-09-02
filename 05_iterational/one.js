// for 
for (let index = 0; index < 10; index++) {
    const element = index;
  if (element == 5){
    console.log("5 is the best");
  }
   console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    console.log(`outer oop value:${i}`);
for (let j = 0; j <=10; j++) {
  console.log( i + "*" + j + "=" + i*j); 
}
    
}

let myarray = ['flash', "batman", "superman"]
console.log(myarray.length);
for (let index = 0; index < myarrayarray.length; index++) {
  const element = myarrayarray[index];
  
}



//break nad continue 
for (let index = 1; index=20; index++) {

if (index ==5) {
  console.log(`detected 5`);
  break;
}
 console.log(`value of i is ${index}`);
}




for (let index = 1; index=20; index++) {

if (index ==5) {
  console.log(`detected 5`);
  continue;
}
 console.log(`value of i is ${index}`);
}