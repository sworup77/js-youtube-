const { use } = require("react");

const promiseone =  new Promise(function(resolve, reject){
    setTimeout(function(){
console.log("async task is complete")
resolve();
    },1000)
});


promiseone.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function (){
        console.log("async task two")
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 is resolved ")
})


const promisethree  = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({username:"sworup", email:"sworup@gmail.com"})
},1000)
})

promisethree.then(function(user){
console.log(user);
})


const promisefour = new promise ( function(resolve, reject ){
setTimeout(function(){
let error = true;
if(!error){
    resolve({username:"sworup", password:"123"})
} else{
    reject("error:something went wrong")
}
},1000)
})

promisefour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})

const promisefive =  new promise (function(resolve, rejected){
    setTimeout(function(){
let error = true;
if(!error){
    resolve({username:"javascript", password:"123"})
} else{
    reject("error: js went wrong")
}
},1000)
})

async function consumepromisefive(){
    try {
        const repsonse = await promisefive
 console.log(repsonse);
        
    } catch (error) {
        console.log(error);
    }
 
} 

consumepromisefive()


async function getalluser(){
    try {
        const response = await fetch("https://jsonplaceholder.com/usser")
    const data =  await repsonse.json();
    console.log(data);
    } catch (error) {
        console.log("error has been come", error)
    }
}



fetch("https://jsonplaceholder.com/usser");
then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);
})

.catch((error)=> console.log(error))