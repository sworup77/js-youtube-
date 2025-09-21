function setusernmae(usernmae){
this.usernmae = usernmae;
}

function createuser(username, email , password){
    setusernmae.call(username);
    this.email = email;
    this.password = password;
}

const chai = new createuser("sworup" , "sworup@", "123");