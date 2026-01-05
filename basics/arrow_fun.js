// "this" : "this" is a keyword which refer current contask 

const user={
    username: "mayuri",
    price:"3999",

    welcomeMsg: function(){
    //     console.log(`${this.username} , welcome to the website`);
    // console.log(this);
    }
}
user.welcomeMsg()

user.username="gayatri"  //  change the contax(values)
user.welcomeMsg()
//   console.log(this); // return empty array

//   function new1 (){
//     var username="mayuri"
//     console.log(this.username); //return undefined
    
//     }
//     new1()

    // const new1 =function(){
    // var username="mayuri"
    // console.log(this.username); //return undefined
   
    // }
    //  new1()

    // <<<<<<<<<< ARROE FUNCTION >>>>>>>>>

     const new1  = () => {
    var username="mayuri"
    // console.log(this); //return undefined
   
    }
     new1()

    //  const addTwo=(num1,num2) => {
    //     return num1+num2
    //  }
    //  console.log(addTwo(4,6));


    // ...... emplicit arrow fun. ......

    // const addTwo =(num1,num2) => num1+num2   //.. M1

    // const addTwo =(num1,num2) => (num1+num2)   //..m2
    //  console.log(addTwo(4,6));
     

    //..... using Object ......

     const addTwo =(num1,num2) => ({ sum: num1 + num2} )
     console.log(addTwo(4,6));