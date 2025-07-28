var a=500          // globale scope

if (true){         // block scope
//  a=10              //reassing the outer a 
    let a=10
    const b=20
    var c=30
    // console.log("block scope:", a);
}
// console.log("Globale scope: ", a);


// <<<<<<<<< NESTED FUNCTION >>>>>>>>>>>

function one (){
    const username="Mayuri"

    function two() {
        const website="youtube"
        console.log(username);
    }

    // console.log(website); // cause error 
    two()
    
}one()

// same in if condition

if(true){
    const username="Mayuri"
    if (username==="mayuri") {
        const website="github"
        console.log(username+website);
        
    }
    // console.log(website);    // cause error,becoz it assign out of scope
    
}
// console.log(username);     // cause error,becoz it assign out of scope



// <<<<<<<<<<<< Interesting  and imp >>>>>>>>>>>>>

console.log(addone(7))
function addone(num) {  // this is beasic function
    return num+1
    
}

// console.log( addTwo(9))  // fun cannot access before initialization when it declare using variable
const addTwo =function(num){   // function using varabile
    return num+2
}
