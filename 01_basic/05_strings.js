const my_name = "sworup";
const repocount = 50;
//  console.log(my_name + repocount + "value");
 console.log(`hello my name is ${my_name} and my repo count is ${repocount}`);

 const gamename = new String ("sworup")
 console.log(gamename[0]);
 console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("t"));


const newstring = gamename.substring(0 , 4);
console.log(newstring);

 const anotherstring = gamename.slice(-8 , 4);
 console.log(anotherstring);

 const newstringone = "  sworup  ";
 console.log(newstringone.trim());
  
 const url = "https://sworup.com/sworup%20pudasaaini";
 console.log(url.replace("20%", "-"));
 console.log(url.includes("swprup"));
