let a= 300;
if (true){
    let a= 100;
    const b = 20;
    console.log(a);
};

console.log(a);

//nested scope

function one (){
    const username ="sworup";

    function two (){
        const website = "youtube";
        console.log(username);
    }
    console.log(website);
    two()

}
one();