class user{
    constructor(username){
        this.username = username;

    }

    logme(){
        console.log(`username :${this.username}`)
    }

     static reateid(){
        return `123`;
    }
}

 const sworup = new user("sworup")
 console.log(sworup.createid());

 class techer extends  user{
constructor( username , email){
    super(username)
    this.email = email;
}
 }

 const iphone = new techer("sworup", "i@phone.com")
 iphone.logme();