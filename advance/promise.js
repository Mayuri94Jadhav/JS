 const promiseOne = new Promise(function (resolve, reject){
    
    // Do an async task
    // DB calls , cryptography, network

    setTimeout (function(){
        console.log("Async task is complete");
            resolve()
    }, 1000)
 })
 promiseOne.then(function(){ 
    console.log("promise consumed");
 })

//  ............ method 2 ........

 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
 }) 
 .then(function(){
    console.log("promise 2 resolve")
 })


 //  ............ method 3 ........

  const PromiesThree = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve ({username: "mayuri" , email: "mayu@gmail.com"})
    },1000)
})
PromiesThree.then(function(user){
    console.log(user);
})


//  ............ method 4 ........

const promiseFour = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "mayuri" , password:"098" })

        }else{
            reject("error : something went wrong")
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log(" finally executed"))

// ......... promises 5............... // remember promise is object

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username: "JavaScript" , password:"098" })

        }else{
            reject("error : js went wrong")
        }
    },1000)
});

//  async function did not handle error directly
async function ConsumePromiseFive(){
    try{
        const response= await promiseFive
    console.log(response);
    } catch (error){
        console.log(error);
    }
}
ConsumePromiseFive()



// async function getAllUsers(){
//      try{
//         const response= await fetch("https://github.com/Mayuri94Jadhav/JS ")
//       const data =  await response.json()
//       console.log(data);
//      } catch (error){
//         console.log("E :", error);

//      }
// }
// getAllUsers()


// same function in .then and catch 
fetch("https://github.com/Mayuri94Jadhav/JS")
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);

})
.catch((error) => console.log(error))


 