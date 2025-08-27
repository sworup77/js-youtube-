let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let createddate = new Date(2013, 0,23);
console.log(createddate.toDateString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(createddate.getTime());
console.log(Date.now()/100)
