class User{
constructor(email,password){
    this.email =email;
    this.password = password
}

get email() {
    return this._email.toUpperCase()

}
set email(value){
    this._email =value
}

get password(){
    return `${this._password}riya`
}
set password(value){
    this._password = value
}
}
const riya = new User("riya@gmail.com","abc")
console.log(riya.password);
console.log(riya.email);