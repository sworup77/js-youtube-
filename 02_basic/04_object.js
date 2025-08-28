const tinderuser ={};
tinderuser.id = "123";
tinderuser.name ="sworup";
tinderuser.loggedin = false;
console.log(tinderuser);

 const regularuser = {
    email: "somename@gmail.com",
    fullname: {
        username: {
            firstname: "sworup",
            lastname: "pudasaini",
                }
    }
 }

 console.log(regularuser.fullname.username.firstname);

 const obj1={1: "a", 2:"b"};
 const obj2={3: "A", 4:"B"};

// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);

const obj3= {...obj1, ...obj2};
console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty("isloogedin"));