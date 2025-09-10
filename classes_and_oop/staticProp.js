class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username:${this.username}`);

    }
    static createId(){
        return `123`
    }
}
// const user1 = new User("riya")

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }

}
const piyush =new Teacher("piyush","piyush@gmail.com",456)
console.log(piyush.createId()); // it shows error becozstatic method are called on the class, not on instance
