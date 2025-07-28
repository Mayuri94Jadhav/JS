// "IIFE": Immediately Invoke Function Expression 
(
function invoke (){
    console.log(" DB Connected");
})();  // important to add semicolon at the end of fun to take next fun 

(()=>{
    console.log(`DB connected Sucessfully`);    
})("sucessfully")