  // asyncFun keyword
  
//   async function greet(){
//     throw "404 page not found";
//     return "let learn what is asyncfun";
// }

// greet()
// .then((result)=>{
//     console.log("Promise resolve");
//     console.log("result was ", result);
// })
// .catch((err)=>{
//     console.log("Promise was rejected with err:", err);
// });

// let demo = async ()=> {  // arrow fun 
//     return 5;
// };


// await keyword :  pauses the execution of it's surrounding fun until the promise is settled (remove, reject)

function getNum(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() *10)+1;
            console.log(num);
            resolve();
        },1000)
    });
}

async function demo2(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();   
}