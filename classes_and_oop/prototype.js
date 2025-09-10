// let myName = "mayuri     "

// console.log(myName.trueLength);

let myHeros = ["thor","spiderman"]
let heroPower = {

}
Object.prototype.mayuri =function(){
    console.log("mayuri is present in all objects");
}
Array.prototype.hiimayuri = function(){
    console.log("mayuri is here");

}
// heroPower.mayuri()
 myHeros.mayuri()
// heroPower.hiimayuri()....... pass the error
 myHeros.hiimayuri()




 // Inheritance

 const User = {
    name:"mayuri",
    email: "mayuri@gmail.com" 
 }


const teacher ={
    makeVedio: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assigment',
    fullTime: true,
    __proto__:teachingSupport
}
teacher.__proto__ = User


// mordern syntax

Object.setPrototypeOf(teachingSupport,teacher) 
let anotherUsername = "jadhav      "
String.prototype.trueLength =function(){
    console.log(`${this}`); 
    console.log(`true length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"mayuri".trueLength()
"icecrime".trueLength()//... value becoz of this keyword


