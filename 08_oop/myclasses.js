class user {
    constructor(username , email ,password){
  this.username = username;
  this.email =email;
  this.password = password;

    }

    encryptpassword(params) {
    return`${this.password}`
    }

    chnageusername (){
        return`${this.username.toUpperCase()}`
    }
  
}

const chai = new user ("chai", "chai@gmail.com", "123")

console.log(chai.password)

// behind the sence 
function user (username,email,password){
    this.username = username;
    this.email=email;
    this.password = password
};
user.prototype.encryptpassword= function(){
    return`${this.password}`
}

const tea = new user("tea ", "tea@gamil.com",'123')
console.log(tea.encyptpassword())