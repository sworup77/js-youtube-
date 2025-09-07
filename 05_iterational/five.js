const num =[1,2,3,4,5,6,7,8];
const newnum = num.map((nums) => nums+10)
console.log(newnum);

const mynumber =[1,2,3,4,5,6,7,8];
const newnumber = mynumber.map((num)=> num *10)
.map((num) => num+1)
.filter((num) => num >= 40)


console.log(mynumber);

// reduce 
const mynums = [1,2,3]
const intialvalue = 0;
const mytotal = mynums.reduce(
    (accumulator/*intial value*/ , currentvalue)=> accumulator + currentvalue
);
console.log(mytotal);


// in this when the code is run first time the accumulator value wi;; be intital value fore eg 0 +1
// after that the code run fist time and produce the output 
// when we get the output of the first run 0+1 =1. it is the accumulator of second second run  for eg 1+2 = 3
