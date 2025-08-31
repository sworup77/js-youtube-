// immediatley invoked function expression (IIFE)
(function chai(){
console.log(`db connected`);
})
();

(()=>{
    console.log(`db connected two`)
})();