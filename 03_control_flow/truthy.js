const useremail = [];
if(useremail){
    console.log("got user email");
} else {
    console.log("donot have an user email")
}

//falsy values
// false , 0 ,-0 ,bigint 0n, "", null, undefined,nan


// truthy values
//"0", "false"," ",[],{}, fucntion(){}

if (useremail.length === 0){
    console.log("array is empty");
}

const emptyobj = {};
if(Object.keys(emptyobj).length===0){ // in this object become array by using (Object.keys(emptyobj)
    console.log("object is empty")
}


// nullish coalescing operator (??) : nul undefined 
let val1;
val1 = 5 ?? 10
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
 console.log(val1);

 const iceteaprice = 100;
 iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");