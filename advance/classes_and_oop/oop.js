const user = {
username: "Riyaa",
loginCount: 7,
signedIn: true,

getUserDetails: function(){
    // console.log("got user details");
    // console.log(`username:${this.username}`);
    // console.log(this);

}
}
// console.log(user.username);
// console.log(user.getUserDetails());
//  console.log(this);        //return empty function 


function User(username,loginCount,isLoggedIn){
    this.username =  username;
    this.loginCount =  loginCount;
    this.isLoggedIn = isLoggedIn
    // return this
}

// note:  1) new keyword create empty object which called instance
// 2) constructor function called by using new keyword
// 3) arugements of the function and object are injected by new keyword

const userOne=  new User("Riyaa",12,true)
const userTwo = new User("piush",10,false)
console.log(userOne);
console.log(userTwo);