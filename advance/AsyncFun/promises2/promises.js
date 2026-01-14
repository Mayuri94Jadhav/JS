function savetoDb(data) {
    return new Promise ((resolve,reject) =>{  // callback "resolve, reject" used to inishalize the promise
        let internetSpeed = Math.floor(Math.random() * 10) +1;
        if (internetSpeed > 4){
            resolve("sucess: data was saved"); 
        } else{
            reject("failure :  data not saved ");
        }
    });
 }

 // ------- NOTE ---------

// Improved Version - " Promise Chaning"  
// the work we do with the help of callback same work done here with the help of Promises.

// using this we can stop the execustion if the catch method .

// savetoDb("Promise is an Object")
// .then(() =>{
//     console.log("data1 saved");
//     return savetoDb("then , catch are method of promise");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return savetoDb("then-resolve, catch-reject");
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });


//            ---- NOTE ---
//  now we  can pass default argument in the Promise method("ten,catch") as result to know why our promise reject. 

savetoDb("Promise is an Object")
.then((result) =>{
    console.log("data1 saved");
    console.log("result of promise", result);
    return savetoDb("then , catch are method of promise");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise", result);
    return savetoDb("then-resolve, catch-reject");
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise", result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("error of promise", error);
});


