// object literals 
const mysym = Symbol("key 1");

const jsuser = {
    name:"sworup",
    age:18,
    [mysym]:"mykey1",
    location: "kathmandu",
    email: "sworuppudasaini@gmail.com",
    isloogedin: false,
    lastlogindays:['satueday' , "sunday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(typeof jsuser[mysym])

jsuser.email = "sworup@gmail.com";
Object.freeze(jsuser);

jsuser.greeting = function(){
    console.log('hello js user');
}

console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}