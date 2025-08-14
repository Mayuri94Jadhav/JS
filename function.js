let arr=[10,20,30,40];
let length =arr.length;
// console.log("length",length);
for (let index =0 ;index <length ;index++){
//     console.log(arr[index]);
}


// function add (num1,num2){
//     console.log(num1+num2);
    
// }
//  add (3,"4")

function add (num1,num2){
    // let result=num1+num2
    // return result

    return num1+num2
}
const result=add(3,5)
// console.log("result:",result);



function userlogin (username="mayu"){
    // if (username=== undefined) {
        
    //     console.log("please enter a username");
    //     return
    // }

    // ...m2...
    if (!username) {
        
        console.log("please enter a username");
        // return
    }
    return`${username} just logged in`
}

// console.log(userlogin("mayuri"))

// console.log(userlogin())// return undefined

// console.log(userlogin("gayatri")) // Override the value byb the value  passs in function


function  calculatecartprice( val2, val4,...num1)// "... is called rest operation "
{
    return num1
}
// console.log(calculatecartprice(100,200,300,400));

// <<<<< TO PASS OBJECT IN FUNCTION >>>>>>>>>

// const user={
//     username:"Mayuri",
//     price:"20,000"
// }


function handleObject(anyObject){
    console.log(` user is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)

handleObject({  // // can use direct Object
    username:"mayuri",
    price: 3999
})

// <<<<<<<< To PASSS ARRAY IN FUNCTION >>>>>>>>>

// const myArray=[200,400,600,800]
function returnArray(getArray){
    return getArray[2]
}
//  console.log(returnArray(myArray));
 console.log(returnArray([200,400,600,800])); // direct Object
 





































































