 const descripter = Object.getOwnPropertyDescriptor(Math, "PI ")
 console.log(descripter);

 const chai = {
    name :"ginger chai",
    price:199,
    isavaible :true
 }

 console.log(Object.getOwnPropertyDescriptor(chai,"name"))

 Object.defineProperty(chai, "name", {
    writable: false,
    enumerablw:false,

 })