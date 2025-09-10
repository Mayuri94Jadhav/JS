class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new User ("riya","riya@gmail.com",'890')
console.log(user1.encryptPassword());
console.log(user1.changeUsername());



// behind the scene (means we can use like this without classes)

function User(username,email,password){
   this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}` 
}

const myuser = new User ("riya","riya@gmail.com",'890')
console.log(myuser.encryptPassword());
console.log(myuser.changeUsername());