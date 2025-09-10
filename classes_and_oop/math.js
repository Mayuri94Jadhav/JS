const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
//  console.log(Math.PI);
// Math.PI = 5    // cant override
// console.log(Math.PI);



const user ={  
    name :"riya",
    price : 250,
    isAvailable:true

}
console.log(Object.getOwnPropertyDescriptor(user,"name"));



Object.defineProperty(user,"name",{
    writable : false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));
