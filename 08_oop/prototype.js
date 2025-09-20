// let myname ="sworup";
// console.log(myname.trueLength);

let myhero=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.sworup = function(){
    console.log(`sworup is presnt in all the object `)
}

Array.prototype.heysworup= function(){
  console.log(`hitesh say hello`);  
}
myhero.sworup();
myhero.heropower();
// heropower.heysworup()

//inheritance 

const user ={
    name :"sworup",
    email:"sworuppudasaini@gamil.com"
}
const teacher = {
makevideo:true
};

const teachingsupport ={
    isavailable :false
};

const tsasupport ={
makeassigemnt :"js assigement",
fulltime: true,
__proto__:teachingsupport
};

teacher.__proto__=user;


//mordern syntax
Object.setPrototypeOf(tsasupport ,teachingsupport)

let anotherusername ="sworup   ";
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`${this.name}`)
    console.log(`true lenght is :${this.trim().length}`);
}

anotherusername.trueLength()