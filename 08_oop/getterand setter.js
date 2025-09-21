class user {
    constructor(email , password){
        this.email = email;
        this.password = password ;

    }

    get password (){
return this._password
    }

    set password( value){
this._password = value;
    }
}

const sworup = new user("sworup", "123")