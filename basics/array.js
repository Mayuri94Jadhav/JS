//object creation

let obj={
    name:"mayuri",
    "full Name":"mayuri Jadhav",
    age: 19,
    greet: function (){             //function declarition
    console.log("hello there");
}
    
};
console.log(obj)
obj.greet();


// map fun.

// let arr =[10,20,30];
// let Array= arr.map((number)=>{
//     return number*number;
// })
// console.log(Array)


// filter fun..
// let arr =[10,20,30,"mayuri","tejaswini","rutuja"];
// let ans =arr.filter((value)=>{
//     if(typeof(value) === 'string' ){
//         return true;
//     }
//     else {
//         return false;

//     }

//     });
//     console.log(ans);


//return  function
let arr =[10,20,30];
 let ans = arr.reduce((acc,curr)=>{
    return acc+curr;

},0);
console.log(ans);
