h1 = document.querySelector("h1");

function changeColor(color, delay ) {
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            let num= Math.floor(Math.random()*5)+1;
            if (num > 3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);

    });
    
}

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green ",1000,()=>{
//             changeColor("pink",1000);
// });
// });
// });

// --------------------------------------------------------------------------

//  ok after learn promise  let's slove this callbackhell  problem with the helf of promises

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red color completed");
//     return changeColor('orange', 1000);
// })
// .then(()=>{
//     console.log("orange color completed");
//     return changeColor('green', 1000);
// })
// .then(()=>{
//     console.log("green color completed");
//     return changeColor('blue ', 1000);
// })
// .then(()=>{
//     console.log("blue color completed");
// });

// ---------------------------------------------------------------

// let's optimise more with the help of " await"

async function demo(){
    try{
        await changeColor ("red",1000);
    await changeColor ("orange",1000);
    await changeColor ("green",1000);
    await  changeColor("blue",1000);
    } catch(err) {
        console.log("error caught");
        console.log(err);
    }

    let a= 5;
    console.log(a);
    console.log("new num =", a+3);
}



// open console and run method demo(); to see the output.
