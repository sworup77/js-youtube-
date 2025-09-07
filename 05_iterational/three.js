const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greeting = "hello world";
for (const greet of greeting) {
    console.log(greet);
}

//maps
 const map = new Map();
 map.set("in", "india");
 map.set("us" , "umited state");
 map.set("in", "india");
console.log(map);

for (const [key , value] of map) {
    console.log(key, value);
}


const myobj ={
    "game":'nsf',
    'game2':'spideman'
}

for (const key in object) {
  console.log(`${key} ${myobj[key]}`)
    }


    const coding = [1,2,3,4,5,6]
 coding.forEach( function (item){
    console.log(item);
 })