const user ={
username :"sworup",
price: 999,
welcome: function(){
    console.log(`${this.username} welcome to website `);
}
}
user.welcome()

// function chai (){
// console.log(this)
// }

const chai = ()=> {
    let username = "sworup";
    console.log(this);
}


const addtwo =(num1 ,num2) => {
    return num1+num2;
}
console.log(addtwo(7.8));

//implict return 
const addthree =(num1 ,num2) => (num1+num2) 

console.log(addthree(7.8));