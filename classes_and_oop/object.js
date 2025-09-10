 function multiple(num){
    return num*4
 }
 multiple.power = 3
 console.log(multiple(4));
 console.log(multiple.power);
 console.log(multiple.prototype);

 function createUser(username, score){
   this.username = username
   this.score = score
 }
 createUser.prototype.increment = function(){
   this.score++
 }
 createUser.prototype.printMe = function(){
   console.log(`score is ${this.score}`);
 }
 const chai = createUser("chai",25)
 const tea = createUser("tea",450)

 chai.printMe()

