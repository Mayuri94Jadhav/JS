function SetUsername(username){
    // complex database call
    this.username = username
    console.log(" username called ");

}

function createUser(username,email,password){
    SetUsername.call(this,username)    //this keyword gives the current contacts
    this.email = email
    this.password = password

}

const details = new createUser("riya", "riya@gmail.com","2345")
console.log(details);