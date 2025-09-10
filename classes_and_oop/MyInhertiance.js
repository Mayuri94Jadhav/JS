class User {
constructor(username){
    this.username = username
}

logMe(){
    console.log(`USERNAME is ${this.username}`);

}
}
  class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`a new course was addded by ${this.username}`);

    }

  }
  const user1 = new Teacher("riya","riya@gmail.com","234")
  user1.addCourse()

  const user2 = new User ("rohan")
  user2.logMe()

  console.log(user1 === user2);      // return false
  console.log(user1 instanceof  Teacher); // return true (becoz user 1 is instance of Teacher class)