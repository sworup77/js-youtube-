// object literal
const user ={
    username:"sworup",
    logincount :8,
    signrdin:true,

    getUserDetails: function(){
        console.log("go user detials from database");
        console.log(`username ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails);

function user (username , logincount , islooged ){
    this.username = username;
    this.logincount =logincount;
    this.islooged = islooged;
    return this
}

 const userone =  new user("sworup", 12, true);
 const usertwo =  new user("saman",11,false)
 console.log(userone);


 // constructor function give you a new instence in the code for eg new means new memeory or line 
// step 1-  when we add the new keyword a new object is created on it
//step 2- when we write a new keyword the construction function is automitically called .