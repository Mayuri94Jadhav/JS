// //Object literals

const mysym=Symbol("value1") 
// const User={
//     name:"mayuri",
//     "fullname":"Mayuri Jadhav",
//     [mysym]:"value1", // syntax of symbol is imp 

//     age:18,
//     location:"chh. Sambhajinagar",
//     email :"mayu@gmail.com",
//     isloggedIn: false,
// }

// console.log(User.email); // access object 
// console.log(User["email"]); //another method to access object
//  console.log(User["fullname"]);// cant access like .fullname
// console.log(User[mysym]) // symbol didi not need string 

// User.email="mayu@google.com"// we can replace by "="
// //Object.freeze(User)
// User.email="mayu@chatgpt.com"
// // console.log(User);

// User.greeting=function(){
//     console.log('hello js user');
   
// }
// User.greetingtwo=function(){
//     console.log(`hello js user,${this.name}`);
// }
// console.log(User.greeting());
// console.log(User.greetingtwo());



//<<<<<<< Object using constructure >>>>>>>>>

//sigleton is made by  construture which is object itself
// like: object.create

// const newUser= new Object()  // singleton Object
const newUser={}    // non singleton Object

newUser.id="345xyz"
newUser.name="samm"
newUser.isLoggedIn=false
// console.log(newUser);

// OBJECT IN OBJECT

const regularUser={
    email:"mayu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"mayuri",
            lastname:"jadhav"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);// acess object in object


//          <<<<<<<< ASSIGN OBJECT>>>>>>
const obj1={1:"a",2:"b"}

const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}// M1
// const obj3=Object.assign({},obj1,obj2)// M2
// const obj3={...obj1,...obj2}// M3
// console.log(obj3);

 //when values come from database

 const  user2= [       // array of object 
    { 
        id:1,
        email:"mayu@gmail.com",

    },
      { 
        id:1,
        email:"mayu@gmail.com",

    },
 ]


 user2[1].email
//   console.log(newUser);
  
// console.log(Object.keys(newUser));

// console.log(Object.values(newUser));

// console.log(Object.entries(newUser)); // return keys:valies both


// console.log(Object.hasOwnProperty('name')); //return true


// <<<<<<<<<< DE-STRUTUREING OF OBJECT >>>>>>>>>

const course={
    coursename:"BCS",
    price:"30,000",
    courseInstructor:"Mayuri"
}

const{courseInstructor:courseInstructor}=course

const{courseInstructor:Instructor}=course // di-strututing of Object
console.log(courseInstructor);
console.log(Instructor);

// <<<<<<<<< JSON API >>>>>>>
// note: in JSON keys and values both are string
// {
//    " name":  "MAyuri",
//   "  coursename": "BCS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]