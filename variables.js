// var a=20;
// if (true){
// console.log(a);
// }
// function find(){
//     var a=20;
//     console.log(a);
// }
//  //console.log(a); can't run becoz it is not function scoped
// find();


// {
// let a=10;
// a="mayuri";//we cant redefined the var but can update like a=mayuri ||this is called dynamically typed lang..
// console.log(a);
// }
const a=39;
console.log(a);// there cant  change or udate value and redefined.


const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])