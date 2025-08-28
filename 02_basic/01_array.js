const myarr=[0,1,2,3,4,5];
console.log(myarr[0]);
 const myarr2 = new Array(1,2,3,4,5);

 // array methods
 myarr.push(6);
 myarr.pop();
 myarr.unshift(9);
 myarr.shift();

 console.log(myarr);
 console.log(myarr.includes(9));
 console.log(myarr.indexOf(8));

 const newarr = myarr.join();
 console.log(typeof newarr);


 const myn1 = myarr.slice(1,3);
 console.log(myn1);
 console.log("B" , myarr);
  const myn2 = myarr.splice(1,3)
  console.log(myn2);